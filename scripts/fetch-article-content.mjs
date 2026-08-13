// Extracts the full, verbatim body text of a Substack post as plain text,
// paragraph-separated the same way `excerpt` already is in src/data/content.js
// (blocks joined by "\n\n"). Used for the one-time full-article backfill and
// by the ongoing tactical-generalist-sync skill when an article ages out of
// the homepage's "recent 10" teaser window.
//
// Substack server-renders the full post body into static HTML (no JS needed,
// no paywall on this site), inside <div class="available-content"> ->
// <div class="body markup">. This walks that container's direct children and
// converts each recognized block to plain text, skipping images, embeds, and
// Substack UI chrome (comment/share buttons, subscribe widgets).
import * as cheerio from 'cheerio';
import { pathToFileURL } from 'node:url';

const SKIP_CLASS_MARKERS = ['button-wrapper', 'subscription-widget', 'poll-embed', 'share-dialog'];

function shouldSkip($el) {
  const cls = $el.attr('class') || '';
  return SKIP_CLASS_MARKERS.some((marker) => cls.includes(marker));
}

function listToText($, el) {
  const $el = $(el);
  const isOrdered = el.tagName === 'ol';
  const items = $el
    .children('li')
    .map((_, li) => $(li).text().trim())
    .get()
    .filter(Boolean);
  return items
    .map((item, i) => (isOrdered ? `${i + 1}. ${item}` : `- ${item}`))
    .join('\n');
}

const BLOCK_TAGS = new Set(['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'blockquote']);
const LIST_TAGS = new Set(['ul', 'ol']);

export async function fetchArticleContent(url) {
  const res = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0' } });
  if (!res.ok) {
    throw new Error(`Fetch failed for ${url}: ${res.status} ${res.statusText}`);
  }
  const html = await res.text();
  const $ = cheerio.load(html);
  const container = $('.available-content .body.markup').first();

  if (container.length === 0) {
    throw new Error(`Could not find article body container for ${url} — Substack markup may have changed`);
  }

  const blocks = [];
  container.children().each((_, el) => {
    const $el = $(el);
    if (shouldSkip($el)) return;

    if (BLOCK_TAGS.has(el.tagName)) {
      const text = $el.text().trim();
      if (text) blocks.push(text);
    } else if (LIST_TAGS.has(el.tagName)) {
      const text = listToText($, el);
      if (text) blocks.push(text);
    }
    // Anything else (images, embeds, spacer divs, hr) is intentionally dropped —
    // the site renders content as plain-text paragraphs only.
  });

  return blocks.join('\n\n');
}

// CLI usage: node scripts/fetch-article-content.mjs <substack-url>
// (compared via pathToFileURL rather than a raw `file://` template — on Windows
// process.argv[1] uses backslashes and isn't URL-encoded, so a plain string
// comparison against import.meta.url never matches and this guard silently
// never runs.)
if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  const url = process.argv[2];
  if (!url) {
    console.error('Usage: node scripts/fetch-article-content.mjs <substack-url>');
    process.exit(1);
  }
  const text = await fetchArticleContent(url);
  console.log(text);
}
