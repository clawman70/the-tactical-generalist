// Generates public/sitemap.xml from src/data/content.js before every build.
// Runs as the npm `prebuild` hook — keeps the sitemap current with content.js
// automatically, so it never needs hand-maintaining as articles are added.
import { writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import { latestContent } from '../src/data/content.js';
import { guides } from '../src/data/financialLiteracy.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SITE = 'https://tacticalgeneralist.com';
const PILLARS = ['finance', 'career', 'lifeskills', 'mindset', 'fieldnotes'];
const today = new Date().toISOString().split('T')[0];

const staticUrls = [
  { loc: '/', lastmod: today, priority: '1.0' },
  { loc: '/articles', lastmod: today, priority: '0.8' },
  ...PILLARS.map((p) => ({ loc: `/articles/${p}`, lastmod: today, priority: '0.7' })),
  { loc: '/financial-literacy', lastmod: today, priority: '0.8' },
];

const articleUrls = latestContent.map((article) => ({
  loc: `/articles/${article.slug}`,
  lastmod: article.date,
  priority: '0.6',
}));

// Only guides with finished content are real, indexable pages — ones still
// showing the "coming soon" placeholder are intentionally left out of the
// sitemap until GuidePage actually has something to render for them.
const guideUrls = guides
  .filter((guide) => guide.blocks)
  .map((guide) => ({
    loc: `/financial-literacy/${guide.slug}`,
    lastmod: today,
    priority: '0.6',
  }));

const urls = [...staticUrls, ...articleUrls, ...guideUrls];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) => `  <url>
    <loc>${SITE}${u.loc}</loc>
    <lastmod>${u.lastmod}</lastmod>
    <priority>${u.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>
`;

const outPath = path.join(__dirname, '..', 'public', 'sitemap.xml');
writeFileSync(outPath, xml);
console.log(`Generated sitemap.xml with ${urls.length} URLs (${articleUrls.length} articles, ${guideUrls.length} financial literacy guides).`);
