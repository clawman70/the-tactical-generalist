import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

/**
 * FieldNotesCard — Animated compass rose for the Field Notes pillar.
 * A slowly rotating compass with cardinal points, representing wandering
 * observations and stories that don't fit neatly anywhere else.
 */
function FieldNotesCard() {
  const container = useRef(null);

  useGSAP(() => {
    // Slow continuous rotation of the compass needle
    gsap.to('.compass-needle', {
      rotation: 360,
      duration: 20,
      repeat: -1,
      ease: 'none',
      transformOrigin: '50% 50%',
    });

    // Gentle pulse on the outer ring
    gsap.to('.compass-ring', {
      scale: 1.05,
      opacity: 0.5,
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
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
        <h3 className="font-heading font-bold text-2xl text-charcoal">Field Notes</h3>
        <span className="font-data text-sm text-sage-light px-3 py-1 bg-forest/20 border border-forest/40 rounded-sm">Field Notes</span>
      </div>

      {/* Compass rose animation */}
      <div className="flex-1 relative flex items-center justify-center">
        <svg className="absolute w-48 h-48 md:w-56 md:h-56" viewBox="0 0 200 200" fill="none">
          {/* Outer ring */}
          <circle className="compass-ring" cx="100" cy="100" r="90" stroke="#4A6741" strokeWidth="1" opacity="0.6" />
          {/* Inner ring */}
          <circle cx="100" cy="100" r="65" stroke="#4A6741" strokeWidth="0.5" opacity="0.3" />
          {/* Cardinal tick marks */}
          <line x1="100" y1="15" x2="100" y2="30" stroke="#4A6741" strokeWidth="2" opacity="0.7" />
          <line x1="100" y1="170" x2="100" y2="185" stroke="#4A6741" strokeWidth="2" opacity="0.7" />
          <line x1="15" y1="100" x2="30" y2="100" stroke="#4A6741" strokeWidth="2" opacity="0.7" />
          <line x1="170" y1="100" x2="185" y2="100" stroke="#4A6741" strokeWidth="2" opacity="0.7" />
          {/* Cardinal labels */}
          <text x="100" y="12" textAnchor="middle" fill="#4A6741" fontSize="10" fontFamily="JetBrains Mono, monospace" opacity="0.8">N</text>
          <text x="100" y="198" textAnchor="middle" fill="#4A6741" fontSize="10" fontFamily="JetBrains Mono, monospace" opacity="0.8">S</text>
          <text x="8" y="104" textAnchor="middle" fill="#4A6741" fontSize="10" fontFamily="JetBrains Mono, monospace" opacity="0.8">W</text>
          <text x="193" y="104" textAnchor="middle" fill="#4A6741" fontSize="10" fontFamily="JetBrains Mono, monospace" opacity="0.8">E</text>
          {/* Compass needle */}
          <g className="compass-needle">
            <line x1="100" y1="45" x2="100" y2="100" stroke="#4A6741" strokeWidth="2" opacity="0.9" />
            <line x1="100" y1="100" x2="100" y2="155" stroke="#9A9590" strokeWidth="1.5" opacity="0.5" />
            <polygon points="100,45 95,60 105,60" fill="#4A6741" opacity="0.9" />
          </g>
          {/* Center dot */}
          <circle cx="100" cy="100" r="4" fill="#4A6741" opacity="0.8" />
        </svg>
        <p className="relative z-10 font-sans text-charcoal/70 text-center text-sm max-w-[200px] leading-relaxed">
          The stuff that doesn't fit anywhere else. Observations, oddities, and stories from a life fully lived.
        </p>
      </div>
    </div>
  );
}

export default FieldNotesCard;
