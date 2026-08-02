import FinanceCard from './PillarCards/FinanceCard';
import LifeSkillsCard from './PillarCards/LifeSkillsCard';
import CareerCard from './PillarCards/CareerCard';
import MindsetCard from './PillarCards/MindsetCard';
import FieldNotesCard from './PillarCards/FieldNotesCard';

/**
 * Pillars — Section wrapper displaying all 5 content pillar cards in a
 * full-width stacked layout.
 */
function Pillars() {
  return (
    <section id="pillars" className="py-32 px-8">
      <div className="max-w-5xl mx-auto">
        <div className="mb-20 text-center md:text-left">
          <h2 className="font-heading font-bold text-5xl md:text-7xl text-charcoal tracking-tighter mb-6">The Five Pillars</h2>
          <p className="font-sans text-xl text-slate max-w-2xl">Field Notes is the throughline. The other four are categories that show up along the way — all of it drawn from 30+ years of real experience, mistakes included.</p>
        </div>

        <div className="flex flex-col gap-12">
          <FieldNotesCard />
          <FinanceCard />
          <CareerCard />
          <LifeSkillsCard />
          <MindsetCard />
        </div>
      </div>
    </section>
  );
}

export default Pillars;
