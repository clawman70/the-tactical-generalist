import { ArrowUpRight, Newspaper, Compass } from 'lucide-react';

/**
 * Connect — CTA section linking to Substack.
 * Features a large card link with hover effects.
 */
function Connect() {
  return (
    <section id="connect" className="py-32 px-8 bg-gunmetal relative overflow-hidden text-warm-white border-t border-stone/20">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16 justify-between relative z-10">
        <div className="flex-1">
          <h2 className="font-heading font-bold text-5xl md:text-7xl mb-8 tracking-tighter text-gold">Start Here.</h2>
          <p className="font-sans text-xl text-cream max-w-xl mb-12">One substantial piece per week — practical written deep-dives across all four pillars.</p>

          <div className="flex flex-col gap-6">
            <a href="https://thetacticalgeneralist.substack.com/" target="_blank" rel="noreferrer" className="group flex items-center justify-between p-8 border border-stone/30 bg-charcoal rounded-[2rem] hover:border-bronze transition-colors">
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 rounded-full bg-charcoal border border-stone/50 text-bronze-light flex items-center justify-center group-hover:bg-bronze group-hover:text-charcoal transition-colors">
                  <Newspaper size={32} />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-2xl text-warm-white">Substack Letters</h3>
                  <p className="font-data text-sm text-stone mt-1">NEWSLETTER</p>
                </div>
              </div>
              <ArrowUpRight className="text-stone group-hover:text-bronze transition-colors" size={32} />
            </a>
          </div>
        </div>
      </div>

      {/* Background Graphic */}
      <div className="absolute top-1/2 -translate-y-1/2 right-0 translate-x-1/3 opacity-[0.03] pointer-events-none text-gold-light">
        <Compass size={800} strokeWidth={0.5} />
      </div>
    </section>
  );
}

export default Connect;
