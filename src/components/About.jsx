import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

/**
 * About — Bio section introducing Jeff Clawson and the project's purpose.
 * Uses the TG compass logo as the visual anchor with a two-column layout.
 */
function About() {
  const container = useRef(null);

  useGSAP(() => {
    gsap.from('.about-elem', {
      y: 30,
      opacity: 0,
      duration: 1,
      stagger: 0.15,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: container.current,
        start: 'top 70%',
      },
    });
  }, { scope: container });

  return (
    <section id="about" ref={container} className="relative z-10 pt-12 pb-32 px-8 bg-warm-white">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-16">
        {/* Logo as visual anchor */}
        <div className="about-elem flex-shrink-0">
          <div className="w-48 h-48 md:w-64 md:h-64 rounded-full border-2 border-stone/20 overflow-hidden bg-charcoal flex items-center justify-center shadow-lg">
            <img
              src="/logo.png"
              alt="The Tactical Generalist"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Bio content */}
        <div className="flex-1">
          <p className="about-elem font-data text-sm text-bronze-dark uppercase tracking-widest mb-4">About the Author</p>
          <h2 className="about-elem font-heading font-bold text-3xl md:text-4xl text-charcoal mb-6">
            Tech executive. Father of four. Jack of all trades.
          </h2>
          <div className="space-y-4 text-slate">
            <p className="about-elem font-sans text-lg leading-relaxed">
              I've spent 30+ years in technology, leadership, and life — making mistakes, figuring things out, and wishing someone had told me sooner.
            </p>
            <p className="about-elem font-sans text-lg leading-relaxed">
              The Tactical Generalist is my legacy project. It's not monetized. It's not a brand play. It's the advice I want my kids to have when I'm not around to give it.
            </p>
            <p className="about-elem font-sans text-lg leading-relaxed text-bronze-dark">
              If it helps you too, even better.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
