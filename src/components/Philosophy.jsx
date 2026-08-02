import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

/**
 * Philosophy — Cinematic full-width section with scroll-triggered text reveals.
 * The site's guiding thought, not tied to any one pillar — Mindset still gets
 * its own card in the Pillars section below.
 */
function Philosophy() {
  const container = useRef(null);

  useGSAP(() => {
    const lines = container.current.querySelectorAll('.reveal-line');
    gsap.from(lines, {
      y: 40,
      opacity: 0,
      stagger: 0.2,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: container.current,
        start: 'top 60%'
      }
    });
  }, { scope: container });

  return (
    <section id="philosophy" ref={container} className="relative py-32 px-8 min-h-[80vh] flex items-center bg-charcoal overflow-hidden">
      {/* Subtle radial gradient for depth — replaced external Unsplash image */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(42,42,42,0.4)_0%,rgba(30,30,30,1)_70%)]" />
      <div className="max-w-6xl mx-auto relative z-10 w-full flex flex-col gap-12">
        <p className="reveal-line font-heading font-bold text-2xl md:text-4xl text-stone uppercase tracking-wide">
          Most people write to teach something.
        </p>
        <p className="reveal-line font-heading text-5xl md:text-7xl lg:text-8xl text-warm-white max-w-4xl tracking-tight leading-[1.1]">
          I'm just writing down what I <span className="font-drama italic text-gold font-normal tracking-normal text-6xl md:text-8xl lg:text-[9rem]">noticed</span> — you decide what it means.
        </p>
      </div>
    </section>
  );
}

export default Philosophy;
