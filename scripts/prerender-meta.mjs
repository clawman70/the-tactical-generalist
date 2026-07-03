// Post-build step: generates a static HTML file per route (article, pillar,
// catalog) with the correct <title>/meta tags baked into the raw HTML.
//
// Why: react-helmet-async already sets correct per-page tags, but only
// client-side after JS runs. Bots that don't execute JS (most social-media
// link-preview crawlers) and the very first HTTP response Google fetches
// only ever see the generic homepage tags in dist/index.html. This script
// mirrors exactly what each page's <Helmet> block sets, so the same tags
// are visible in the raw HTML too — the visible page body is still the
// normal client-rendered SPA once JS loads.
//
// Runs as the npm `postbuild` hook, after `vite build` has already produced
// dist/index.html with real (hashed) asset paths — this script only edits
// the <head> of a copy of that file, never reconstructs it from scratch.
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
// Routes are written as flat dist/articles/{slug}.html files (not
// {slug}/index.html) paired with vercel.json's `cleanUrls: true` — this is
// Vercel's documented mechanism for serving an extensionless clean URL from
// a static .html file, and takes precedence over the SPA catch-all rewrite
// the same way favicon.png already does. A directory-index approach
// (dist/articles/{slug}/index.html) was tried first but only resolved with
// a trailing slash locally, which doesn't match any real link/canonical URL
// in the app — cleanUrls avoids that trailing-slash sensitivity entirely.
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import { latestContent, pillarStyles, pillarDescriptions } from '../src/data/content.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.join(__dirname, '..', 'dist');
const SITE = 'https://tacticalgeneralist.com';

const baseHtml = readFileSync(path.join(distDir, 'index.html'), 'utf-8');

function setTitle(html, title) {
  // Use a function replacer — a string replacer would treat "$" sequences
  // in the title (e.g. dollar amounts like "$2,500") as regex backreferences.
  return html.replace(/<title>.*?<\/title>/, () => `<title>${escapeHtml(title)}</title>`);
}

function setMetaContent(html, matchAttr, content) {
  const re = new RegExp(`(<meta[^>]*${matchAttr}[^>]*content=")[^"]*(")`, 'i');
  return html.replace(re, (_match, open, close) => `${open}${escapeHtml(content)}${close}`);
}

function insertBeforeHeadClose(html, snippet) {
  return html.replace('</head>', `  ${snippet}\n</head>`);
}

function escapeHtml(str) {
  return String(str).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function writeRoute(routePath, html) {
  // routePath e.g. "articles/some-slug" -> dist/articles/some-slug.html
  const outPath = path.join(distDir, `${routePath}.html`);
  mkdirSync(path.dirname(outPath), { recursive: true });
  writeFileSync(outPath, html);
}

let count = 0;

// --- Articles: /articles/{slug} ---
for (const article of latestContent) {
  let html = baseHtml;
  html = setTitle(html, `${article.title} | The Tactical Generalist`);
  html = setMetaContent(html, 'name="description"', article.metaDescription);
  html = setMetaContent(html, 'property="og:title"', article.title);
  html = setMetaContent(html, 'property="og:description"', article.metaDescription);
  html = insertBeforeHeadClose(
    html,
    `<meta name="keywords" content="${escapeHtml(article.keywords.join(', '))}" />\n` +
      `  <link rel="canonical" href="${SITE}/articles/${article.slug}" />\n` +
      `  <script type="application/ld+json">${JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: article.title,
        author: { '@type': 'Person', name: 'Jeff Clawson' },
        datePublished: article.date,
        publisher: { '@type': 'Organization', name: 'The Tactical Generalist', url: SITE },
      })}</script>`
  );
  writeRoute(`articles/${article.slug}`, html);
  count++;
}

// --- Pillars: /articles/{pillar} ---
for (const pillar of Object.keys(pillarStyles)) {
  let html = baseHtml;
  html = setTitle(html, `${pillarStyles[pillar].label} Articles | The Tactical Generalist`);
  html = setMetaContent(html, 'name="description"', pillarDescriptions[pillar]);
  writeRoute(`articles/${pillar}`, html);
  count++;
}

// --- Catalog: /articles ---
{
  let html = baseHtml;
  html = setTitle(html, 'All Articles | The Tactical Generalist');
  html = setMetaContent(
    html,
    'name="description"',
    'Browse all articles from The Tactical Generalist — practical wisdom on personal finance, career, life skills, mindset, and field observations.'
  );
  writeRoute('articles', html);
  count++;
}

console.log(`Prerendered ${count} static routes (${latestContent.length} articles, 5 pillars, 1 catalog).`);
