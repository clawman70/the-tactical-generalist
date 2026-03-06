import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

/**
 * LifeSkillsCard — Full-width pillar card for Life Skills.
 * Typewriter effect animation in the left panel.
 */
function LifeSkillsCard() {
  const text = "Life requires maintenance. Learn to cook without recipes, fix a leaky faucet, and travel with purpose.";
  const [displayed, setDisplayed] = useState("");
  const container = useRef(null);
  const [started, setStarted] = useState(false);

  useGSAP(() => {
    ScrollTrigger.create({
      trigger: container.current,
      start: 'top 80%',
      onEnter: () => setStarted(true),
    });

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

  useEffect(() => {
    if (!started) return;
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(text.substring(0, i));
      i++;
      if (i > text.length) clearInterval(interval);
    }, 40);
    return () => clearInterval(interval);
  }, [started]);

  return (
    <div ref={container} className="w-full bg-cream rounded-[3rem] p-8 md:p-16 shadow-2xl border border-stone/20 flex flex-col md:flex-row gap-12">
      {/* LEFT: animated visual panel */}
      <div className="w-full md:w-1/3 aspect-square bg-gunmetal rounded-[2rem] relative overflow-hidden flex items-center justify-center p-6">
        <div className="font-data text-cream/90 leading-relaxed text-sm">
          {displayed}
          <span className="inline-block w-2 h-4 bg-copper ml-1 animate-pulse align-middle"></span>
        </div>
      </div>

      {/* RIGHT: text content */}
      <div className="flex-1 flex flex-col justify-center">
        <span className="font-data text-sm text-copper px-3 py-1 bg-copper/20 border border-copper/40 rounded-sm self-start mb-6">
          Life Skills
        </span>
        <h3 className="font-heading font-bold text-4xl mb-4 text-charcoal">Life Skills</h3>
        <p className="font-sans text-xl text-slate leading-relaxed max-w-lg mb-8">
          The practical stuff that makes everyday life easier and better. From cooking a perfect steak to skills worth passing down.
        </p>
        <Link to="/articles/lifeskills" className="font-data text-sm text-bronze hover:text-bronze-dark transition-colors">
          Browse Life Skills articles &rarr;
        </Link>
      </div>
    </div>
  );
}

export default LifeSkillsCard;
