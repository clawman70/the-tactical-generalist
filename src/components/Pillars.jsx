import FinanceCard from './PillarCards/FinanceCard';
import LifeSkillsCard from './PillarCards/LifeSkillsCard';
import CareerCard from './PillarCards/CareerCard';

/**
 * Pillars — Section wrapper that displays the content pillar cards in a grid.
 * Currently shows 3 pillars; the 4th (Philosophy & Mindset) will be added in Phase 3.
 */
function Pillars() {
  return (
    <section id="pillars" className="py-32 px-8 max-w-7xl mx-auto">
      <div className="mb-20 text-center md:text-left">
        <h2 className="font-heading font-bold text-5xl md:text-7xl text-charcoal tracking-tighter mb-6">The Four Pillars</h2>
        <p className="font-sans text-xl text-slate max-w-2xl">Core systems required to build independence and maintain perspective in a complex world.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <FinanceCard />
        <LifeSkillsCard />
        <CareerCard />
      </div>
    </section>
  );
}

export default Pillars;
