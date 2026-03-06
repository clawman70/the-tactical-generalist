# Update: Pillar Cards — Full-Width Stacked Layout
**Version:** 1.0
**Prepared for:** Claude Code
**Date:** March 2026

---

## The Problem

The Five Pillars section uses a 2-column grid. With five cards this creates an awkward 3-2 asymmetric layout — three cards on the top row, two orphaned on the bottom. It looks unfinished.

## The Solution

Redesign the pillar cards to use the same full-width stacked layout as the Protocol (The Process) section. Each pillar gets one full-width card with the animated visual on the left and the pillar title, description, and browse link on the right. Scales cleanly to any number of pillars and looks intentional.

---

## Reference Component

Study `src/components/Protocol.jsx` carefully before making changes. The pillar card redesign should closely match its layout and visual style:

- Full-width cards with `rounded-[3rem]`
- Dark square visual panel on the left (`w-1/3`, `aspect-square`, `bg-gunmetal`, `rounded-[2rem]`)
- Text content on the right (`flex-1`)
- `flex flex-col md:flex-row gap-12` with `p-8 md:p-16`
- `bg-cream` card background, `shadow-2xl`, `border border-stone/20`
- Stacked vertically with `flex flex-col gap-12`

---

## Changes Required

### 1. `src/components/Pillars.jsx`

- Change the grid from `grid grid-cols-1 md:grid-cols-2 gap-8` to `flex flex-col gap-12`
- Update the section max-width to `max-w-5xl` to match Protocol
- Each PillarCard component now renders as a full-width card, not a fixed-height grid cell

### 2. Each PillarCard component

Redesign all five cards to use the Protocol card layout. The existing animated visuals are preserved and moved into the left panel.

**New card structure for each pillar:**

```jsx
<div className="w-full bg-cream rounded-[3rem] p-8 md:p-16 shadow-2xl border border-stone/20 flex flex-col md:flex-row gap-12">

  {/* LEFT: animated visual panel */}
  <div className="w-full md:w-1/3 aspect-square bg-gunmetal rounded-[2rem] relative overflow-hidden flex items-center justify-center">
    {/* existing animation goes here */}
  </div>

  {/* RIGHT: text content */}
  <div className="flex-1 flex flex-col justify-center">
    <span className="font-data text-sm text-bronze-dark px-3 py-1 bg-bronze-light/20 border border-bronze-light/40 rounded-sm self-start mb-6">
      {pillarLabel}
    </span>
    <h3 className="font-heading font-bold text-4xl mb-4 text-charcoal">{pillarName}</h3>
    <p className="font-sans text-xl text-slate leading-relaxed max-w-lg mb-8">{pillarDescription}</p>
    <Link to={pillarArticlesUrl} className="font-data text-sm text-bronze hover:text-bronze-dark transition-colors">
      Browse {pillarName} articles →
    </Link>
  </div>

</div>
```

**Per-pillar text content and links:**

| Card | pillarLabel | pillarName | pillarDescription | pillarArticlesUrl |
|------|------------|------------|-------------------|-------------------|
| FinanceCard | Personal Finance | Personal Finance | The money fundamentals that most people never get taught. How to build wealth on any income, get out of debt, and make your money work for you. | /articles/finance |
| CareerCard | Business & Career | Business & Career | Hard-won lessons from 30 years navigating corporate life — on leadership, networking, and how to actually get ahead. | /articles/career |
| LifeSkillsCard | Life Skills | Life Skills | The practical stuff that makes everyday life easier and better. From cooking a perfect steak to skills worth passing down. | /articles/lifeskills |
| MindsetCard | Mindset | Philosophy & Mindset | How you think about the world determines everything else. Perspective, gratitude, resilience, and the long game. | /articles/mindset |
| FieldNotesCard | Field Notes | Field Notes | The stuff that doesn't fit anywhere else. Observations, oddities, and stories from a life fully lived. | /articles/fieldnotes |

**Animated visuals — preserve as-is, just move into the left panel:**
- FinanceCard: shuffling card stack animation
- CareerCard: whatever animation currently exists
- LifeSkillsCard: whatever animation currently exists
- MindsetCard: breathing concentric circles
- FieldNotesCard: compass rose animation

**Badge colors per pillar — keep existing classes:**
- finance: `text-bronze-dark bg-bronze-light/20 border-bronze-light/40`
- career: `text-info bg-info/20 border-info/40`
- lifeskills: `text-copper bg-copper/20 border-copper/40`
- mindset: `text-success bg-success/20 border-success/40`
- fieldnotes: `text-sage-light bg-forest/20 border-forest/40`

### 3. Remove fixed heights

The existing cards use `h-[400px]`. Remove this constraint on all five cards — the full-width layout sizes naturally from content.

### 4. Import Link in each PillarCard

```jsx
import { Link } from 'react-router-dom';
```

---

## What Does NOT Change

- The animated visuals inside each card — preserve all GSAP animations exactly
- The section heading ("The Five Pillars") and subhead copy
- The overall section padding and positioning on the page
- All other sections of the homepage

---

## Success Criteria

- Five pillar cards stack vertically, full-width, matching the Protocol section layout
- No asymmetric grid — all five cards are identical in width and structure
- Each card shows: animated visual (left), pillar badge + title + description + browse link (right)
- "Browse [pillar] articles →" links route correctly to pillar pages
- All existing GSAP animations still work
- Layout is mobile responsive (stacks to single column, visual panel above text)
- Visually consistent with The Process section further down the page

---

## QA Results (March 6, 2026)

Deployed and verified on tacticalgeneralist.com. All five pillar cards stacking correctly in full-width layout. One remaining issue:

**[ ] Field Notes badge contrast** — `FieldNotesCard.jsx` line 80: `text-sage-light` changed to `text-forest`. Fix is already applied to local file. Commit and push to deploy.
