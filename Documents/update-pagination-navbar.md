# Update: Articles Page Pagination & Navbar Fix
**Version:** 1.0
**Prepared for:** Claude Code
**Date:** March 2026

Read this file alongside `prd-article-layer.md` for full project context.

---

## Change 1: Homepage — Show Only 4 Most Recent Articles

**File:** `src/components/ContentFeed.jsx`

Slice the `latestContent` array to show only the 4 most recent articles, sorted by date descending.

```jsx
const recentArticles = [...latestContent]
  .sort((a, b) => new Date(b.date) - new Date(a.date))
  .slice(0, 4);
```

Use `recentArticles` instead of `latestContent` when rendering the card grid.

Also update the subhead copy from:
`"Recent videos and articles across all five pillars."`
to:
`"Recent articles across all five pillars. Browse the full archive below."`

And add a "View All Articles →" link below the card grid that routes to `/articles`.

---

## Change 2: Articles Page — 3 Per Pillar with "More" Button

**File:** `src/pages/ArticlesPage.jsx`

Each pillar section should display a maximum of 3 articles. If a pillar has more than 3 articles, show a "More [Pillar Name] →" button below the cards that links to the dedicated pillar page.

Logic per pillar section:
```jsx
const pillarArticles = latestContent.filter(a => a.pillar === 'finance');
const visibleArticles = pillarArticles.slice(0, 3);
const hasMore = pillarArticles.length > 3;

// render visibleArticles
// if hasMore, render "More Personal Finance →" button linking to /articles/finance
```

Apply this pattern to all five pillars.

---

## Change 3: Dedicated Pillar Pages

Create five new pillar pages, one per pillar, showing ALL articles for that pillar.

### New routes to add in `App.jsx`
```jsx
<Route path="/articles/finance" element={<PillarPage pillar="finance" />} />
<Route path="/articles/career" element={<PillarPage pillar="career" />} />
<Route path="/articles/lifeskills" element={<PillarPage pillar="lifeskills" />} />
<Route path="/articles/mindset" element={<PillarPage pillar="mindset" />} />
<Route path="/articles/fieldnotes" element={<PillarPage pillar="fieldnotes" />} />
```

### New file: `src/pages/PillarPage.jsx`

A single reusable component that accepts a `pillar` prop and renders all articles for that pillar.

Page structure:
```
[Navbar]
[← All Articles  (Link to /articles)]
[H1: Pillar display name — e.g. "Personal Finance"]
[Brief pillar description from pillarStyles or a new pillarDescriptions map]
[Full grid of all articles for this pillar — same card style as elsewhere]
[Footer]
```

Pillar display names and descriptions to use:
- finance → "Personal Finance" — "The money fundamentals that most people never get taught."
- career → "Business & Career" — "Hard-won lessons from 30 years navigating corporate life."
- lifeskills → "Life Skills" — "The practical stuff that makes everyday life easier and better."
- mindset → "Philosophy & Mindset" — "How you think about the world determines everything else."
- fieldnotes → "Field Notes" — "The stuff that doesn't fit anywhere else. Observations, oddities, and stories from a life fully lived."

### SEO per pillar page (react-helmet-async)
```jsx
<Helmet>
  <title>{pillarDisplayName} Articles | The Tactical Generalist</title>
  <meta name="description" content={pillarDescription} />
</Helmet>
```

---

## Change 4: Fix Navbar Text Invisible on Interior Pages

**File:** `src/components/Navbar.jsx`

**The problem:** The navbar initializes with transparent background and light text (`color: #F5F3EF`), which works on the homepage dark hero but makes nav links invisible on interior pages with a cream background. The GSAP ScrollTrigger only switches to dark text after scrolling 100px down.

**The fix:** Use `useLocation()` from React Router to detect whether the current page is the homepage. On all interior pages, initialize the navbar immediately in its scrolled/solid state.

```jsx
import { useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useGSAP(() => {
    // If not homepage, set solid state immediately — no transparent start
    if (!isHomePage) {
      gsap.set(navRef.current, {
        backgroundColor: 'rgba(245, 243, 239, 0.95)',
        color: '#1E1E1E',
        borderColor: 'rgba(30, 30, 30, 0.1)',
      });
    }

    ScrollTrigger.create({
      start: 'top -100',
      onUpdate: (self) => {
        if (self.direction === 1) {
          gsap.to(navRef.current, {
            backgroundColor: 'rgba(245, 243, 239, 0.95)',
            color: '#1E1E1E',
            borderColor: 'rgba(30, 30, 30, 0.1)',
            duration: 0.3,
          });
        } else if (self.progress === 0 && isHomePage) {
          gsap.to(navRef.current, {
            backgroundColor: 'transparent',
            color: '#F5F3EF',
            borderColor: 'transparent',
            duration: 0.3,
          });
        }
      },
    });
  }, [isHomePage]);

  // Also update initial className — remove hardcoded text-warm-white on interior pages
  // ...
}
```

Also update the nav element's initial className: remove `text-warm-white` when not on the homepage, or conditionally apply it:
```jsx
className={`fixed top-6 ... ${isHomePage ? 'text-warm-white' : 'text-charcoal'}`}
```

---

## Implementation Order

1. Fix Navbar (`Navbar.jsx`) — highest priority, visible bug on live site
2. Add homepage "View All Articles" link and 4-article limit (`ContentFeed.jsx`)
3. Create `PillarPage.jsx`
4. Add pillar routes to `App.jsx`
5. Update `ArticlesPage.jsx` with 3-per-pillar limit and "More" buttons
6. Build, verify locally, commit and push

---

## Success Criteria

- Nav links are visible immediately on `/articles`, `/articles/:slug`, and all pillar pages
- Homepage shows exactly 4 most recent articles with a "View All Articles" link
- `/articles` shows 3 articles per pillar; pillars with more than 3 show a "More [Pillar] →" button
- "More" buttons link to `/articles/finance`, `/articles/career`, etc.
- Each pillar page shows all articles for that pillar with correct SEO title and description
- Homepage dark hero still works correctly — navbar still goes transparent on scroll up to top
