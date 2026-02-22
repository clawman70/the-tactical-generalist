/**
 * Static content feed data.
 * To update the "Latest Content" section, edit this array.
 *
 * Each item has:
 *   title    — Display title for the card
 *   pillar   — One of: "finance", "career", "lifeskills", "mindset"
 *   format   — Either "video" or "written"
 *   url      — Link to the full piece on Substack
 *   description — Short summary (1-2 sentences)
 *   date     — Publication date (YYYY-MM-DD)
 */
export const latestContent = [
  {
    title: "The 6 Accounts That Anchor Your Financial Life",
    pillar: "finance",
    format: "written",
    url: "https://thetacticalgeneralist.substack.com/p/6-accounts-financial-foundation",
    description: "You need a system for where your money lives. Not one checking account where everything mingles, but a hierarchy of accounts — each with a purpose.",
    date: "2026-02-22",
  },
  {
    title: "True Leadership Lifts Others",
    pillar: "career",
    format: "written",
    url: "https://thetacticalgeneralist.substack.com/p/true-leaders-lifts-others",
    description: "A sales director saw untapped potential in a guy who had just been laid off with a new house and a baby. That moment changed everything.",
    date: "2026-02-22",
  },
  {
    title: "How to Cook the Perfect Steak",
    pillar: "lifeskills",
    format: "written",
    url: "https://thetacticalgeneralist.substack.com/p/how-to-cook-the-perfect-steak",
    description: "After trying gas grill, charcoal, sous vide, cast iron, and reverse sear — here's the method that wins every time.",
    date: "2026-02-22",
  },
  {
    title: "Push Your Happiness Button Often",
    pillar: "mindset",
    format: "written",
    url: "https://thetacticalgeneralist.substack.com/p/push-your-happiness-button-often",
    description: "One of my favorite cars was a 2002 Miata I picked up for $8,500 with 12,000 miles. Happiness doesn't have to be expensive.",
    date: "2026-02-22",
  },
];

/**
 * Pillar display config — maps pillar keys to their tag styles and labels.
 * Colors match the style guide's pillar tag specifications.
 */
export const pillarStyles = {
  finance: {
    bg: 'bg-bronze-light/20',
    border: 'border-bronze-light/40',
    text: 'text-bronze-dark',
    label: 'Personal Finance',
  },
  career: {
    bg: 'bg-info/20',
    border: 'border-info/40',
    text: 'text-info',
    label: 'Business & Career',
  },
  lifeskills: {
    bg: 'bg-copper/20',
    border: 'border-copper/40',
    text: 'text-copper',
    label: 'Life Skills',
  },
  mindset: {
    bg: 'bg-success/20',
    border: 'border-success/40',
    text: 'text-success',
    label: 'Philosophy & Mindset',
  },
};
