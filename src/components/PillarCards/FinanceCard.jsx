import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

/**
 * FinanceCard — Interactive shuffling card stack for the Personal Finance pillar.
 * Three topic cards rotate every 3 seconds with a stacking visual effect.
 */
function FinanceCard() {
  const [cards, setCards] = useState([
    { id: 1, text: "Budgeting Basics", stat: "01", active: true },
    { id: 2, text: "Debt Strategy", stat: "02", active: false },
    { id: 3, text: "Retirement Planning", stat: "03", active: false }
  ]);
  const container = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCards(prev => {
        const newArr = [...prev];
        const last = newArr.pop();
        newArr.unshift(last);
        return newArr.map((c, i) => ({ ...c, active: i === 0 }));
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useGSAP(() => {
    gsap.from('.shuffler-card', {
      y: 20,
      opacity: 0,
      stagger: 0.1,
      duration: 0.8,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: container.current,
        start: 'top 80%'
      }
    });
  }, { scope: container });

  return (
    <div ref={container} className="bg-cream rounded-[2rem] p-8 shadow-sm border border-stone/20 flex flex-col h-[400px] overflow-hidden relative">
      <div className="flex justify-between items-center mb-8 relative z-10">
        <h3 className="font-heading font-bold text-2xl text-charcoal">Personal Finance</h3>
        <span className="font-data text-sm text-bronze-dark px-3 py-1 bg-bronze-light/20 border border-bronze-light/40 rounded-sm">SYSTEM 01</span>
      </div>
      <div className="flex-1 relative">
        {cards.map((card, i) => (
          <div
            key={card.id}
            className={`shuffler-card absolute w-full rounded-2xl p-6 transition-all duration-700 pointer-events-none ${card.active ? 'bg-charcoal text-warm-white shadow-xl' : 'bg-warm-white text-charcoal shadow-sm border border-stone/20'}`}
            style={{
              top: `${i * 20}px`,
              transform: `scale(${1 - i * 0.05})`,
              zIndex: 10 - i,
              opacity: 1 - i * 0.3
            }}
          >
            <p className="font-data text-sm opacity-60 mb-8 text-bronze">MODULE {card.stat}</p>
            <p className="font-heading font-semibold text-xl">{card.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FinanceCard;
