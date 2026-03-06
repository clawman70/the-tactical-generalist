import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

/**
 * MindsetCard — Full-width pillar card for Philosophy & Mindset.
 * Breathing concentric circles animation in the left panel.
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
    <div ref={container} className="w-full bg-cream rounded-[3rem] p-8 md:p-16 shadow-2xl border border-stone/20 flex flex-col md:flex-row gap-12">
      {/* LEFT: animated visual panel */}
      <div className="w-full md:w-1/3 aspect-square bg-gunmetal rounded-[2rem] relative overflow-hidden flex items-center justify-center">
        <svg className="absolute w-48 h-48 md:w-56 md:h-56" viewBox="0 0 200 200" fill="none">
          <circle className="mindset-ring" cx="100" cy="100" r="90" stroke="#5C7C5C" strokeWidth="1" opacity="0.6" />
          <circle className="mindset-ring" cx="100" cy="100" r="65" stroke="#5C7C5C" strokeWidth="1.5" opacity="0.5" />
          <circle className="mindset-ring" cx="100" cy="100" r="40" stroke="#5C7C5C" strokeWidth="2" opacity="0.4" />
          <circle cx="100" cy="100" r="4" fill="#5C7C5C" opacity="0.8" />
        </svg>
      </div>

      {/* RIGHT: text content */}
      <div className="flex-1 flex flex-col justify-center">
        <span className="font-data text-sm text-success px-3 py-1 bg-success/20 border border-success/40 rounded-sm self-start mb-6">
          Mindset
        </span>
        <h3 className="font-heading font-bold text-4xl mb-4 text-charcoal">Philosophy &amp; Mindset</h3>
        <p className="font-sans text-xl text-slate leading-relaxed max-w-lg mb-8">
          How you think about the world determines everything else. Perspective, gratitude, resilience, and the long game.
        </p>
        <Link to="/articles/mindset" className="font-data text-sm text-bronze hover:text-bronze-dark transition-colors">
          Browse Philosophy &amp; Mindset articles &rarr;
        </Link>
      </div>
    </div>
  );
}

export default MindsetCard;
