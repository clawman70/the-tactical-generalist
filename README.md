# The Tactical Generalist

Timeless advice from someone who's tried almost everything. A hub website for Jeff Clawson's legacy project spanning personal finance, career, life skills, and mindset.

## What This Is

A static single-page website that serves as the central hub for The Tactical Generalist content across YouTube and Substack. This is a legacy project, not a business — it's designed to pass down 30+ years of practical life wisdom.

## Tech Stack

- **React 19** — UI framework
- **Vite 7** — Build tool and dev server
- **Tailwind CSS 3** — Utility-first styling
- **GSAP** — Scroll-triggered animations
- **Lucide React** — Icon library

## Getting Started

```bash
npm install
npm run dev     # Start dev server (localhost:5173)
npm run build   # Build for production (output in dist/)
npm run preview # Preview production build locally
```

## Updating Content

To update the "Latest Content" section on the homepage, edit the data array in:

```
src/data/content.js
```

Each content item has:
- `title` — Display title
- `pillar` — One of: `"finance"`, `"career"`, `"lifeskills"`, `"mindset"`
- `format` — `"video"` or `"written"`
- `url` — Link to the full piece on YouTube or Substack
- `description` — Short 1-2 sentence summary
- `date` — Publication date (YYYY-MM-DD format)

## Project Structure

```
src/
  App.jsx                     — Composition root (section order)
  main.jsx                    — React entry point
  index.css                   — Global Tailwind styles
  components/
    Navbar.jsx                — Fixed floating nav + mobile hamburger
    MobileMenu.jsx            — Full-screen mobile menu overlay
    Hero.jsx                  — Full viewport banner section
    Pillars.jsx               — 2x2 grid of pillar cards
    PillarCards/
      FinanceCard.jsx         — Shuffling card stack animation
      LifeSkillsCard.jsx      — Typewriter text effect
      CareerCard.jsx          — Animated cursor interaction
      MindsetCard.jsx         — Breathing concentric circles
    About.jsx                 — Bio section with TG logo
    ContentFeed.jsx           — Latest content cards grid
    Philosophy.jsx            — Cinematic statement section
    Protocol.jsx              — Pinned stacking card scroll
    Connect.jsx               — YouTube + Substack CTAs
    Footer.jsx                — Links and copyright
  data/
    content.js                — Static content feed (edit this to update)
    navigation.js             — Shared nav link definitions
```

## Platform Links

- YouTube: https://www.youtube.com/@thetacticalgeneralist
- Substack: https://thetacticalgeneralist.substack.com/

## Deployment

This is a static site. The `dist/` folder can be deployed to any static host:
- **Vercel** — `vercel deploy` or connect to git repo
- **Netlify** — Drag and drop the `dist/` folder
- **Any static host** — Upload the contents of `dist/`

## Known TODOs

- **Image optimization**: `banner.png` (8.4 MB) and `logo.png` (5.6 MB) should be compressed before production deployment. Target: banner under 500 KB, logo under 200 KB. Consider WebP format.
- **Platform URLs**: Twitter/X link is a placeholder — update when account is confirmed.
