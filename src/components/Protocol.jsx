import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

/**
 * Protocol — "The Process" section with three pinned, stacking cards.
 * Each card represents a step: Learn the Theory, Apply in Reality, Pass it Down.
 * Uses ScrollTrigger pin for a layered reveal effect as user scrolls.
 */
function Protocol() {
  const container = useRef(null);
  const cards = [
    { num: '01', title: 'Learn the Theory', desc: 'Absorb the principles across finance, career, and life. Foundational knowledge drawn from decades of trial and error.', type: 'rotate' },
    { num: '02', title: 'Apply in Reality', desc: 'Theory breaks in the real world. Test the concepts, make mistakes, and adjust the systems to fit your context.', type: 'scan' },
    { num: '03', title: 'Pass it Down', desc: 'Knowledge compounded. Share what works, document the failures, and build a lasting legacy for the next generation.', type: 'pulse' }
  ];

  useGSAP(() => {
    const cardElements = gsap.utils.toArray('.protocol-card');

    cardElements.forEach((card, i) => {
      ScrollTrigger.create({
        trigger: card,
        start: "top 20%",
        endTrigger: container.current,
        end: "bottom bottom",
        pin: true,
        pinSpacing: false,
        id: `pin-${i}`,
      });

      if (i < cardElements.length - 1) {
        gsap.to(card, {
          scale: 0.9,
          opacity: 0.5,
          filter: 'blur(10px)',
          scrollTrigger: {
            trigger: cardElements[i + 1],
            start: "top 60%",
            end: "top 20%",
            scrub: true,
          }
        });
      }
    });

    // Sub-animations for the visual elements inside each card
    gsap.to('.anim-rotate', { rotation: 360, duration: 20, repeat: -1, ease: 'linear' });
    gsap.to('.anim-scan', { y: 150, duration: 2, repeat: -1, yoyo: true, ease: 'power1.inOut' });
    gsap.to('.anim-pulse', { scale: 1.2, opacity: 0.5, duration: 1.5, repeat: -1, yoyo: true, ease: 'sine.inOut' });

  }, { scope: container });

  return (
    <section id="protocol" ref={container} className="py-24 px-8 bg-warm-white relative">
      <div className="max-w-5xl mx-auto">
        <div className="mb-24 flex justify-between items-end border-b border-stone/30 pb-8">
          <h2 className="font-heading font-bold text-5xl md:text-7xl text-charcoal tracking-tighter">The Process</h2>
          <p className="font-data text-bronze-dark mb-2 hidden md:block">STATIC ARCHIVE PROTOCOL</p>
        </div>

        <div className="relative pb-[50vh]">
          {cards.map((card, i) => (
            <div key={i} className="protocol-card w-full min-h-[50vh] bg-cream rounded-[3rem] p-8 md:p-16 shadow-2xl border border-stone/20 flex flex-col md:flex-row gap-12 absolute" style={{ top: i * 20, zIndex: i }}>

              <div className="w-full md:w-1/3 aspect-square bg-gunmetal rounded-[2rem] relative overflow-hidden flex items-center justify-center">
                {card.type === 'rotate' && (
                  <svg className="anim-rotate w-3/4 h-3/4 opacity-40" viewBox="0 0 100 100" fill="none" stroke="#E8D5A3" strokeWidth="2">
                    <circle cx="50" cy="50" r="40" strokeDasharray="10 5" />
                    <circle cx="50" cy="50" r="25" strokeDasharray="5 5" />
                    <path d="M50 10 L50 90 M10 50 L90 50" />
                  </svg>
                )}
                {card.type === 'scan' && (
                  <div className="w-full h-full relative p-8">
                    <div className="w-full h-full border border-stone/30 grid grid-cols-5 grid-rows-5 gap-2">
                      {Array.from({ length: 25 }).map((_, idx) => <div key={idx} className="bg-stone/10 rounded-sm"></div>)}
                    </div>
                    <div className="anim-scan absolute top-0 left-0 w-full h-[2px] bg-gold shadow-[0_0_10px_#C9A227]"></div>
                  </div>
                )}
                {card.type === 'pulse' && (
                  <svg className="w-3/4 h-3/4 opacity-60" viewBox="0 0 100 100" fill="none" stroke="#D4A84B" strokeWidth="3">
                    <path d="M10 50 L30 50 L40 20 L60 80 L70 50 L90 50" strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="50" cy="50" r="40" className="anim-pulse" stroke="#D4A84B" opacity="0.2" fill="none" />
                  </svg>
                )}
              </div>

              <div className="flex-1 flex flex-col justify-center">
                <span className="font-data text-6xl text-bronze mb-6 opacity-80">{card.num}</span>
                <h3 className="font-heading font-bold text-4xl mb-4 text-charcoal">{card.title}</h3>
                <p className="font-sans text-xl text-slate leading-relaxed max-w-lg">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Spacer to handle the absolute positioning overflow */}
      <div style={{ height: `${cards.length * 10}vh` }}></div>
    </section>
  );
}

export default Protocol;
