# The Tactical Generalist — Project Overview

## What This Is

A single-page hub website for "The Tactical Generalist" — a personal legacy project by Jeff Clawson. The site connects all content (currently Substack articles) across four life-skills pillars: Personal Finance, Business & Career, Life Skills, and Philosophy & Mindset.

This is not a business. It's a wisdom-preservation project aimed at Gen Z and young adults navigating independence.

**Live site:** [tacticalgeneralist.com](https://tacticalgeneralist.com)
**Repo:** [github.com/clawman70/the-tactical-generalist](https://github.com/clawman70/the-tactical-generalist)

---

## Tech Stack

| Layer | Tool | Version |
|-------|------|---------|
| UI Framework | React | 19.2.0 |
| Build Tool | Vite | 7.3.1 |
| Styling | Tailwind CSS | 3.4.17 |
| Animation | GSAP + @gsap/react | 3.14.2 |
| Icons | lucide-react | 0.575.0 |
| Fonts | Google Fonts (Libre Baskerville, DM Sans, JetBrains Mono) | — |
| Hosting | Vercel | — |
| Domain | Namecheap (tacticalgeneralist.com) | — |

---

## Project Structure

```
the-tactical-generalist/
├── public/                     Static assets (images, favicon)
│   ├── banner.png              Hero background image
│   ├── logo.png                TG compass logo
│   ├── favicon.png             Browser tab icon
│   └── apple-touch-icon.png    iOS bookmark icon
├── src/
│   ├── App.jsx                 Root layout — controls section order
│   ├── main.jsx                React entry point
│   ├── index.css               Global styles + Tailwind imports
│   ├── components/             All page sections
│   │   ├── Navbar.jsx          Fixed floating nav bar
│   │   ├── MobileMenu.jsx      Full-screen mobile nav overlay
│   │   ├── Hero.jsx            Full-viewport hero banner
│   │   ├── ContentFeed.jsx     Latest articles grid
│   │   ├── Connect.jsx         Substack CTA section
│   │   ├── Pillars.jsx         2x2 pillar card grid wrapper
│   │   ├── PillarCards/        Individual pillar card components
│   │   │   ├── FinanceCard.jsx     Shuffling card stack animation
│   │   │   ├── CareerCard.jsx      Animated cursor interaction
│   │   │   ├── LifeSkillsCard.jsx  Typewriter text effect
│   │   │   └── MindsetCard.jsx     Breathing circles animation
│   │   ├── Philosophy.jsx      Cinematic statement section
│   │   ├── Protocol.jsx        Three-step process cards
│   │   ├── About.jsx           Author bio section
│   │   └── Footer.jsx          Footer with platform links
│   └── data/
│       ├── content.js          Editable content feed data
│       └── navigation.js       Shared nav link definitions
├── Documents/                  Project docs and specs
│   ├── requirements.md         Original project brief
│   └── project-overview.md     This file
├── index.html                  HTML entry point + SEO meta tags
├── vite.config.js              Vite configuration
├── tailwind.config.js          Custom colors, fonts, theme
├── postcss.config.js           PostCSS + Tailwind plugin
├── eslint.config.js            Linting rules
└── package.json                Dependencies and scripts
```

---

## Page Sections (Top to Bottom)

The site is a single scrollable page. Section order is controlled in `src/App.jsx`:

1. **Navbar** — Transparent on top, turns opaque on scroll. Hamburger menu on mobile.
2. **Hero** — Full-screen banner with animated headline and CTA button.
3. **ContentFeed** — Grid of the 4 latest articles, one per pillar. Data sourced from `src/data/content.js`.
4. **Connect** — Call-to-action for the Substack newsletter.
5. **Pillars** — 2x2 grid showing the four content pillars, each with a unique looping animation.
6. **Philosophy** — Full-width cinematic statement about the project's purpose.
7. **Protocol** — Three-step process: Learn the Theory, Apply in Reality, Pass it Down.
8. **About** — Short bio of Jeff Clawson with the TG logo.
9. **Footer** — Platform links, copyright, tagline.

---

## How to Update Content

The content feed is driven by a single file: `src/data/content.js`.

Each entry looks like this:

```js
{
  title: "Article Title",
  pillar: "finance",          // finance | career | lifeskills | mindset
  format: "written",          // written | video
  url: "https://...",         // Link to the Substack article
  description: "Summary...",  // 1-2 sentence description
  date: "2026-02-22"          // Publication date
}
```

To add or swap articles: edit the array in that file, then push to GitHub. Vercel auto-deploys on push.

---

## Design System

### Color Palette

The site uses a warm, earthy palette defined in `tailwind.config.js`:

- **Backgrounds:** warm-white (`#F5F3EF`), cream (`#EDE8E0`)
- **Text:** charcoal (`#1E1E1E`), gunmetal (`#2A2A2A`), ash (`#6B6B6B`)
- **Accent:** bronze (`#B8860B`), gold (`#C9A227`)
- **Pillar colors:** bronze-dark (Finance), info/blue (`#5A7A8A`, Career), copper (`#B87333`, Life Skills), success/green (`#5C7C5C`, Mindset)

### Fonts

- **Headings:** Libre Baskerville (serif)
- **Body:** DM Sans (sans-serif)
- **Mono:** JetBrains Mono

### Animations

All animations use GSAP (GreenSock). Key effects:
- Scroll-triggered fade-ins on most sections
- Staggered entrance animations on the hero
- Looping animations on pillar cards and protocol cards
- Navbar background transition on scroll

---

## Running Locally

```bash
npm install        # Install dependencies
npm run dev        # Start dev server at localhost:5173
npm run build      # Generate production build in dist/
npm run preview    # Preview production build locally
```

---

## Deployment

The site auto-deploys via Vercel on every push to the `main` branch on GitHub.

- **GitHub repo:** clawman70/the-tactical-generalist
- **Vercel project:** the-tactical-generalist
- **Custom domain:** tacticalgeneralist.com (DNS via Namecheap)

To deploy changes: push to GitHub, Vercel handles the rest.

---

## Known TODOs

- **Image optimization:** `banner.png` (8.4 MB) and `logo.png` (5.6 MB) need compression/WebP conversion before they become a performance issue.
- **Platform expansion:** YouTube and X/Twitter references were removed for launch. Re-add when those channels are active.
- **Content updates:** Swap in new Substack articles as they're published by editing `src/data/content.js`.
