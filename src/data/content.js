/**
 * Static content feed data.
 * To update the "Latest Content" section, edit this array.
 *
 * Each item has:
 *   title    — Display title for the card
 *   pillar   — One of: "finance", "career", "lifeskills", "mindset"
 *   format   — Either "video" or "written"
 *   url      — Link to the full piece (YouTube or Substack)
 *   description — Short summary (1-2 sentences)
 *   date     — Publication date (YYYY-MM-DD)
 */
export const latestContent = [
  {
    title: "The 6 Accounts Everyone Should Have by 30",
    pillar: "finance",
    format: "video",
    url: "https://www.youtube.com/@thetacticalgeneralist",
    description: "A breakdown of the essential financial accounts and why each one matters before you hit 30.",
    date: "2026-02-15",
  },
  {
    title: "Why I Stopped Chasing Promotions",
    pillar: "career",
    format: "written",
    url: "https://thetacticalgeneralist.substack.com/",
    description: "The career advice I wish someone had given me at 25. It's not about climbing — it's about positioning.",
    date: "2026-02-10",
  },
  {
    title: "Cooking Without Recipes: A Life Skill",
    pillar: "lifeskills",
    format: "video",
    url: "https://www.youtube.com/@thetacticalgeneralist",
    description: "How learning to cook by feel changed everything else. Practical techniques you can use tonight.",
    date: "2026-02-05",
  },
  {
    title: "The Compound Effect of Small Habits",
    pillar: "mindset",
    format: "written",
    url: "https://thetacticalgeneralist.substack.com/",
    description: "Forget massive transformation. Here's what actually works — and the math behind why.",
    date: "2026-01-28",
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
