import { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ArrowUpRight } from 'lucide-react';

/**
 * Hero — Full-viewport opening section with banner background.
 * Stagger-fades in the headline, subtitle, and CTA on page load.
 */
function Hero() {
  const container = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from('.hero-elem', {
      y: 40,
      opacity: 0,
      duration: 1.2,
      stagger: 0.1,
      ease: 'power3.out',
      delay: 0.2
    });
  }, { scope: container });

  return (
    <section ref={container} className="relative h-[100dvh] w-full bg-charcoal overflow-hidden flex flex-col justify-end">
      {/* Background Image using custom Banner */}
      <div className="absolute inset-0 z-0 bg-charcoal">
        <img
          src="/banner.png"
          alt="The Tactical Generalist Banner"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/80 to-transparent" />
      </div>

      <div className="relative z-10 p-8 md:p-16 lg:p-24 max-w-7xl">
        <div className="flex flex-col gap-2">
          <p className="hero-elem font-data text-gold text-sm md:text-base uppercase tracking-widest mb-4">By Jeff Clawson</p>
          <h1 className="hero-elem font-heading font-bold text-5xl md:text-7xl lg:text-8xl text-warm-white leading-[0.9] tracking-tighter">
            Pass down the
          </h1>
          <h2 className="hero-elem font-drama italic text-6xl md:text-8xl lg:text-[10rem] text-cream leading-[0.8] mb-8">
            Lessons.
          </h2>
          <p className="hero-elem font-sans text-xl md:text-2xl text-stone max-w-2xl mt-4">
            Timeless advice from someone who's tried almost everything. A legacy project spanning finance, career, and life skills for the next generation.
          </p>
          <div className="hero-elem mt-12 flex flex-wrap gap-4">
            <a href="#connect" className="magnetic-btn bg-bronze text-charcoal rounded-sm px-8 py-4 font-heading text-lg font-semibold flex items-center gap-3">
              Start Learning <ArrowUpRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
