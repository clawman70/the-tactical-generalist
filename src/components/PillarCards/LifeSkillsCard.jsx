import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

/**
 * LifeSkillsCard — Typewriter effect card for the Practical Life Skills pillar.
 * Text types out character by character when the card scrolls into view.
 */
function LifeSkillsCard() {
  const text = "Life requires maintenance. Learn to cook without recipes, fix a leaky faucet, and travel with purpose. Practical skills for an independent life.";
  const [displayed, setDisplayed] = useState("");
  const container = useRef(null);
  const [started, setStarted] = useState(false);

  useGSAP(() => {
    ScrollTrigger.create({
      trigger: container.current,
      start: 'top 80%',
      onEnter: () => setStarted(true)
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
    <div ref={container} className="bg-gunmetal rounded-[2rem] p-8 shadow-lg flex flex-col h-[400px]">
      <div className="flex justify-between items-center mb-8 border-b border-stone/20 pb-4">
        <h3 className="font-heading font-bold text-2xl text-warm-white">Practical Life Skills</h3>
        <span className="font-data text-sm text-copper px-3 py-1 bg-copper/20 border border-copper/40 rounded-sm">Life Skills</span>
      </div>
      <div className="flex-1 font-data text-cream/90 leading-relaxed text-sm md:text-base">
        {displayed}
        <span className="inline-block w-2 h-4 bg-copper ml-1 animate-pulse align-middle"></span>
      </div>
    </div>
  );
}

export default LifeSkillsCard;
