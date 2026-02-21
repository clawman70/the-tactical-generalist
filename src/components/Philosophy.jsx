import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

/**
 * Philosophy — Cinematic full-width section with scroll-triggered text reveals.
 * Represents the Philosophy & Mindset pillar's big statement.
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
      <div className="absolute inset-0 opacity-10">
        <img src="https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?q=80&w=2960&auto=format&fit=crop" alt="Texture" className="w-full h-full object-cover grayscale" />
      </div>
      <div className="max-w-6xl mx-auto relative z-10 w-full flex flex-col gap-12">
        <div className="mb-4">
          <span className="font-data text-sm text-[#4A6A4A] px-3 py-1 bg-success/20 border border-success/40 rounded-sm">PHILOSOPHY & MINDSET</span>
        </div>
        <p className="reveal-line font-heading font-bold text-2xl md:text-4xl text-stone uppercase tracking-wide">
          Most advice focuses on theory and optimization.
        </p>
        <p className="reveal-line font-heading text-5xl md:text-7xl lg:text-8xl text-warm-white max-w-4xl tracking-tight leading-[1.1]">
          I focus on building <span className="font-drama italic text-gold font-normal tracking-normal text-6xl md:text-8xl lg:text-[9rem]">resilience</span> and executing the basics flawlessly.
        </p>
      </div>
    </section>
  );
}

export default Philosophy;
