import { useEffect, useState } from 'react';
import FinanceCard from './PillarCards/FinanceCard';
import LifeSkillsCard from './PillarCards/LifeSkillsCard';
import CareerCard from './PillarCards/CareerCard';
import MindsetCard from './PillarCards/MindsetCard';
import FieldNotesCard from './PillarCards/FieldNotesCard';

const AUTO_ADVANCE_MS = 6000;

// Field Notes first — it's the lead identity, not just another pillar.
const pillars = [
  { key: 'fieldnotes', label: 'Field Notes', Component: FieldNotesCard },
  { key: 'finance', label: 'Personal Finance', Component: FinanceCard },
  { key: 'career', label: 'Business & Career', Component: CareerCard },
  { key: 'lifeskills', label: 'Life Skills', Component: LifeSkillsCard },
  { key: 'mindset', label: 'Philosophy & Mindset', Component: MindsetCard },
];

/**
 * Pillars — Section wrapper displaying the 5 content pillars as a carousel:
 * one card visible at a time, selectable via labeled tabs. Auto-advances
 * every few seconds until the visitor interacts (clicks a tab) or is
 * hovering the card, at which point auto-advance stops for good — a
 * carousel that snaps back mid-read is more annoying than one that just stops.
 */
function Pillars() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoAdvancing, setAutoAdvancing] = useState(true);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    if (!autoAdvancing || hovering) return undefined;
    const interval = setInterval(() => {
      setActiveIndex((i) => (i + 1) % pillars.length);
    }, AUTO_ADVANCE_MS);
    return () => clearInterval(interval);
  }, [autoAdvancing, hovering]);

  function selectPillar(index) {
    setActiveIndex(index);
    setAutoAdvancing(false);
  }

  const ActiveCard = pillars[activeIndex].Component;

  return (
    <section id="pillars" className="py-32 px-8">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12 text-center md:text-left">
          <h2 className="font-heading font-bold text-5xl md:text-7xl text-charcoal tracking-tighter mb-6">The Five Pillars</h2>
          <p className="font-sans text-xl text-slate max-w-2xl">Field Notes is the throughline. The other four are categories that show up along the way — all of it drawn from 30+ years of real experience, mistakes included.</p>
        </div>

        {/* Tab selector */}
        <div className="flex flex-wrap gap-3 mb-10">
          {pillars.map((p, i) => (
            <button
              key={p.key}
              onClick={() => selectPillar(i)}
              className={`font-data text-sm px-4 py-2 rounded-sm border transition-colors ${
                i === activeIndex
                  ? 'bg-bronze text-charcoal border-bronze'
                  : 'bg-transparent text-slate border-stone/30 hover:border-bronze hover:text-bronze-dark'
              }`}
            >
              {p.label}
            </button>
          ))}
        </div>

        <div onMouseEnter={() => setHovering(true)} onMouseLeave={() => setHovering(false)}>
          <ActiveCard key={pillars[activeIndex].key} />
        </div>
      </div>
    </section>
  );
}

export default Pillars;
