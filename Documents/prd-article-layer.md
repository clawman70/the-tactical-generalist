# PRD: The Tactical Generalist — Article Layer & Fifth Pillar
**Version:** 2.1 (final)
**Prepared for:** Claude Code
**Site:** https://tacticalgeneralist.com
**Local project:** `C:\Users\jscla\OneDrive\Desktop\Projects\Website Builder\the-tactical-generalist`
**Stack:** React + Vite + Tailwind CSS + GSAP
**Hosting:** Vercel

---

## Overview

The Tactical Generalist website is a React/Vite/Tailwind app. Article cards on the homepage currently link directly to Substack. This PRD describes three changes:

1. Add a fifth content pillar — **Field Notes**
2. Build an article excerpt layer (React Router routes for individual article pages + an /articles catalog page)
3. Update article card links to point to on-site article pages instead of Substack directly

The goal: make tacticalgeneralist.com a discoverable, indexable front door that captures readers via search and routes them to Substack for the full piece.

---

## Codebase Map (read before touching anything)

```
src/
├── App.jsx                  — root component, routing lives here
├── main.jsx                 — entry point
├── index.css                — global styles
├── data/
│   ├── content.js           — ALL article data + pillar style config (primary data file)
│   └── navigation.js        — nav links for Navbar and MobileMenu
└── components/
    ├── Navbar.jsx
    ├── MobileMenu.jsx
    ├── Hero.jsx
    ├── ContentFeed.jsx      — reads from data/content.js, renders article cards
    ├── Pillars.jsx          — renders "The Four Pillars" section, imports 4 PillarCards
    ├── PillarCards/
    │   ├── FinanceCard.jsx
    │   ├── CareerCard.jsx
    │   ├── LifeSkillsCard.jsx
    │   └── MindsetCard.jsx
    ├── Philosophy.jsx
    ├── Protocol.jsx
    ├── About.jsx
    ├── Connect.jsx
    └── Footer.jsx
```

---

## Change 1: Add Fifth Pillar — Field Notes

### What it is
Field Notes is a catch-all pillar for personal observations, quirky stories, and wandering thoughts. Informal, fun, no rules. Examples: ant wars in the backyard, bats in the attic, childhood memories, random life observations.

### Pillar identity
- **Display name:** Field Notes
- **Pillar key** (used in content.js and throughout code): `fieldnotes`
- **Position:** Last — fifth in all pillar listings
- **Color:** Deep forest green
  - Badge background: `#4A6741` at 20% opacity (match existing pattern)
  - Badge border: `#4A6741` at 40% opacity
  - Badge text: `#D4E8C2` (light sage)
  - Add custom Tailwind colors: `forest: '#4A6741'` and `'sage-light': '#D4E8C2'`
- **Description copy:** "The stuff that doesn't fit anywhere else. Observations, oddities, and stories from a life fully lived."

### Files to modify

**`tailwind.config.js` — add to theme.extend.colors:**
```js
forest: '#4A6741',
'sage-light': '#D4E8C2',
```

**`src/data/content.js` — add to `pillarStyles`:**
```js
fieldnotes: {
  bg: 'bg-forest/20',
  border: 'border-forest/40',
  text: 'text-sage-light',
  label: 'Field Notes',
},
```

**`src/components/Pillars.jsx` — three changes:**
1. Update heading from "The Four Pillars" to "The Five Pillars"
2. Update subhead from "The four areas..." to "The five areas..."
3. Import and render `<FieldNotesCard />` as the fifth card in the grid

**`src/components/PillarCards/FieldNotesCard.jsx` — create new file:**
- Model it on `MindsetCard.jsx` (closest analog in spirit)
- Use the Field Notes forest green color scheme
- Title: "Field Notes"
- Description: "The stuff that doesn't fit anywhere else. Observations, oddities, and stories from a life fully lived."
- Visual element: something organic — a field notebook, compass rose, or hand-drawn leaf; consistent with the existing blueprint icon aesthetic
- No subtopic chips needed at launch (no articles yet)

**`src/components/ContentFeed.jsx`:**
- Update subhead copy from "...across all four pillars." to "...across all five pillars."

---

## Change 2: Vercel Routing Config

React Router requires all routes to serve `index.html`. Add this file to the project root before deploying:

**Create `vercel.json` at project root:**
```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

This ensures `/articles`, `/articles/the-six-accounts`, and any other client-side route works correctly in production without 404 errors.

---

## Change 3: Install Dependencies

```bash
npm install react-router-dom react-helmet-async
```

---

## Change 4: Add React Router

**`src/App.jsx` — wrap in BrowserRouter and add routes:**

```jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ArticlesPage from './pages/ArticlesPage';
import ArticlePage from './pages/ArticlePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/articles" element={<ArticlesPage />} />
        <Route path="/articles/:slug" element={<ArticlePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
```

**Create `src/pages/` directory with three files:**
```
src/pages/
├── HomePage.jsx      — current App.jsx single-page content, extracted here
├── ArticlesPage.jsx  — /articles catalog (new)
└── ArticlePage.jsx   — /articles/:slug template (new)
```

---

## Change 5: Update Article Data Schema

**`src/data/content.js` — add `slug`, `excerpt`, `keywords`, and `metaDescription` to each article object.**

The complete article inventory with all fields pre-populated is in:
`Documents/article-inventory.md`

Claude Code should use that file as the source of truth for populating content.js.

**Updated schema:**
```js
{
  title: "The 6 Accounts That Anchor Your Financial Life",
  pillar: "finance",
  format: "written",
  url: "https://thetacticalgeneralist.substack.com/p/6-accounts-financial-foundation",
  description: "You need a system for where your money lives...",
  date: "2026-02-22",
  slug: "the-six-accounts",
  excerpt: `paste 2-3 opening paragraphs here`,
  keywords: ["personal finance accounts", "bank account system", "how to organize money", "checking savings accounts"],
  metaDescription: "Most people have one checking account for everything. Here's the account system that actually works — and why the hierarchy matters.",
}
```

**Slug convention:** lowercase, hyphenated, SEO-optimized (not just a title conversion — see article-inventory.md for final slugs).

**Excerpt:** The actual opening 2-3 paragraphs of the article. Real text, not a summary.

---

## Change 6: /articles Catalog Page

**File:** `src/pages/ArticlesPage.jsx`

### Structure
- Navbar (existing component)
- H1: "All Articles"
- Brief intro: "Browse the full archive — practical wisdom across all five pillars."
- Five pillar sections in order:
  1. Personal Finance
  2. Business & Career
  3. Life Skills
  4. Philosophy & Mindset
  5. Field Notes
- Each section: H2 with pillar name + grid of article cards
- Cards match the existing homepage card visual style exactly (same Tailwind classes)
- Each card links to `/articles/${item.slug}` using React Router `<Link>`
- Footer (existing component)

### Empty state for Field Notes
If no `fieldnotes` articles exist yet, render the section heading with:
`"Field Notes articles coming soon."`
Do not hide the section — the pillar should be visible from day one.

### SEO (react-helmet-async)
```jsx
<Helmet>
  <title>All Articles | The Tactical Generalist</title>
  <meta name="description" content="Browse all articles from The Tactical Generalist — practical wisdom on personal finance, career, life skills, mindset, and field observations." />
</Helmet>
```

---

## Change 7: Individual Article Pages

**File:** `src/pages/ArticlePage.jsx`

### Logic
- Read `slug` from `useParams()`
- Find matching article in `latestContent` array by `item.slug === slug`
- If not found: render clean 404 message with `<Link to="/articles">← Browse all articles</Link>`

### Page layout
```
[Navbar]

[Pillar badge (color-coded)]    [← All Articles  (Link to /articles)]

[H1: article.title]
[Byline: By Jeff Clawson · formatted date · pillar label]

[Excerpt: article.excerpt rendered as paragraphs]

[Horizontal divider]

[CTA Block]
  Heading: "Enjoying this?"
  Body: "The full piece is published on Substack. Subscribe free to read everything in the archive."
  Button: "Read the full article →"  (links to article.url, target="_blank")
  Secondary link: "Browse more articles" (Link to /articles)

[Footer]
```

### Design notes
- Cream background, Libre Baskerville for excerpt text, generous line height — match existing site aesthetic
- CTA block: visually distinct with a subtle bronze/gold border or background shift
- Pillar badge: use `pillarStyles[article.pillar]` from content.js — same classes as homepage cards
- Mobile responsive (Tailwind handles this naturally)

### SEO per article (react-helmet-async)
```jsx
<Helmet>
  <title>{article.title} | The Tactical Generalist</title>
  <meta name="description" content={article.metaDescription} />
  <meta name="keywords" content={article.keywords.join(', ')} />
  <meta property="og:title" content={article.title} />
  <meta property="og:description" content={article.metaDescription} />
  <link rel="canonical" href={`https://tacticalgeneralist.com/articles/${article.slug}`} />
  <script type="application/ld+json">{JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.title,
    "author": { "@type": "Person", "name": "Jeff Clawson" },
    "datePublished": article.date,
    "publisher": { "@type": "Organization", "name": "The Tactical Generalist", "url": "https://tacticalgeneralist.com" }
  })}</script>
</Helmet>
```

---

## Change 8: Update Homepage Card Links

**File:** `src/components/ContentFeed.jsx`

Replace `<a href={item.url}>` with React Router `<Link to={`/articles/${item.slug}`}>`:

```jsx
import { Link } from 'react-router-dom';

<Link
  key={i}
  to={`/articles/${item.slug}`}
  className="feed-card group bg-warm-white rounded-2xl p-6 border border-stone/20 hover:border-bronze transition-colors flex flex-col gap-4 shadow-sm"
>
```

Keep `item.url` (the Substack URL) in the data — still used on the individual article page CTA.

---

## Adding New Articles After Launch

Editing one file is all that's required:

**`src/data/content.js`** — add one object to `latestContent`:
```js
{
  title: "Your Article Title",
  pillar: "fieldnotes",   // finance | career | lifeskills | mindset | fieldnotes
  format: "written",
  url: "https://thetacticalgeneralist.substack.com/p/your-post-slug",
  description: "One or two sentence card description.",
  date: "2026-03-07",
  slug: "your-article-slug",
  excerpt: `Opening 2-3 paragraphs of the article pasted here.`,
  keywords: ["keyword one", "keyword two", "keyword three"],
  metaDescription: "Under 160 characters. Keyword-aware summary for Google.",
},
```

Then: `npm run build` → push to GitHub → Vercel auto-deploys.
**Estimated time per article: 10 minutes.**

---

## Implementation Order

Do these in sequence to avoid breaking the live site mid-build:

1. Add `vercel.json` to project root
2. Run `npm install react-router-dom react-helmet-async`
3. Add Field Notes colors to `tailwind.config.js`
4. Add `fieldnotes` to `pillarStyles` in `content.js`
5. Create `FieldNotesCard.jsx`
6. Update `Pillars.jsx` (five pillars, add FieldNotesCard)
7. Update `ContentFeed.jsx` copy ("five pillars")
8. Populate all article fields in `content.js` using `Documents/article-inventory.md`
9. Create `src/pages/` directory and extract `HomePage.jsx`
10. Create `ArticlesPage.jsx`
11. Create `ArticlePage.jsx`
12. Update `App.jsx` with BrowserRouter + Routes
13. Update `ContentFeed.jsx` card links to use React Router `<Link>`
14. Build and deploy — verify all routes work in production

---

## Success Criteria

- Five pillars on homepage, Field Notes badge is forest green (`#4A6741`)
- "The Five Pillars" heading and updated subhead
- `/articles` loads, shows all articles organized by pillar
- Each article has a working page at `/articles/:slug`
- Each article page has correct title tag, meta description, keywords, og tags, canonical URL, and JSON-LD
- "Read the full article" CTA links to the correct Substack post URL
- Homepage article cards link to `/articles/:slug`, not directly to Substack
- All Vercel routes return 200 — test `/articles` and `/articles/the-six-accounts` in production
- New article can be added in `content.js` only, no other files needed
