import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

/**
 * MindsetCard — Breathing concentric circles animation for the Philosophy & Mindset pillar.
 * Circles slowly expand and pulse, representing perspective and long-term thinking.
 */
function MindsetCard() {
  const container = useRef(null);

  useGSAP(() => {
    // Stagger the breathing animation for each ring
    gsap.to('.mindset-ring', {
      scale: 1.15,
      opacity: 0.3,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
      stagger: 0.5,
    });

    // Fade in on scroll
    gsap.from(container.current, {
      y: 20,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: container.current,
        start: 'top 80%',
      },
    });
  }, { scope: container });

  return (
    <div ref={container} className="bg-cream rounded-[2rem] p-8 shadow-sm border border-stone/20 flex flex-col h-[400px] overflow-hidden relative">
      <div className="flex justify-between items-center mb-8 relative z-10">
        <h3 className="font-heading font-bold text-2xl text-charcoal">Philosophy & Mindset</h3>
        <span className="font-data text-sm text-success px-3 py-1 bg-success/20 border border-success/40 rounded-sm">Mindset</span>
      </div>

      {/* Breathing circles animation */}
      <div className="flex-1 relative flex items-center justify-center">
        <svg className="absolute w-48 h-48 md:w-56 md:h-56" viewBox="0 0 200 200" fill="none">
          <circle className="mindset-ring" cx="100" cy="100" r="90" stroke="#5C7C5C" strokeWidth="1" opacity="0.6" />
          <circle className="mindset-ring" cx="100" cy="100" r="65" stroke="#5C7C5C" strokeWidth="1.5" opacity="0.5" />
          <circle className="mindset-ring" cx="100" cy="100" r="40" stroke="#5C7C5C" strokeWidth="2" opacity="0.4" />
          <circle cx="100" cy="100" r="4" fill="#5C7C5C" opacity="0.8" />
        </svg>
        <p className="relative z-10 font-sans text-charcoal/70 text-center text-sm max-w-[200px] leading-relaxed">
          Think long-term. Build resilience. The mindset you carry determines everything else.
        </p>
      </div>
    </div>
  );
}

export default MindsetCard;
