import FinanceCard from './PillarCards/FinanceCard';
import LifeSkillsCard from './PillarCards/LifeSkillsCard';
import CareerCard from './PillarCards/CareerCard';
import MindsetCard from './PillarCards/MindsetCard';

/**
 * Pillars — Section wrapper displaying all 4 content pillar cards in a 2x2 grid.
 */
function Pillars() {
  return (
    <section id="pillars" className="py-32 px-8 max-w-7xl mx-auto">
      <div className="mb-20 text-center md:text-left">
        <h2 className="font-heading font-bold text-5xl md:text-7xl text-charcoal tracking-tighter mb-6">The Four Pillars</h2>
        <p className="font-sans text-xl text-slate max-w-2xl">The four areas I think matter most for building a good life. Each one drawn from real experience — things I've learned, messed up, and figured out over 30+ years.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <FinanceCard />
        <LifeSkillsCard />
        <CareerCard />
        <MindsetCard />
      </div>
    </section>
  );
}

export default Pillars;
