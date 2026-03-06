import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

/**
 * FinanceCard — Full-width pillar card for Personal Finance.
 * Shuffling card stack animation in the left panel.
 */
function FinanceCard() {
  const [cards, setCards] = useState([
    { id: 1, text: "Budgeting Basics", stat: "Budgeting", active: true },
    { id: 2, text: "Debt Strategy", stat: "Debt", active: false },
    { id: 3, text: "Retirement Planning", stat: "Retirement", active: false }
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
      <div className="w-full md:w-1/3 aspect-square bg-gunmetal rounded-[2rem] relative overflow-hidden flex items-center justify-center p-6">
        {cards.map((card, i) => (
          <div
            key={card.id}
            className={`shuffler-card absolute w-[80%] rounded-2xl p-6 transition-all duration-700 pointer-events-none ${card.active ? 'bg-charcoal text-warm-white shadow-xl' : 'bg-warm-white text-charcoal shadow-sm border border-stone/20'}`}
            style={{
              top: `${20 + i * 20}%`,
              transform: `scale(${1 - i * 0.05})`,
              zIndex: 10 - i,
              opacity: 1 - i * 0.3,
            }}
          >
            <p className="font-data text-sm opacity-60 mb-4 text-bronze">{card.stat}</p>
            <p className="font-heading font-semibold text-lg">{card.text}</p>
          </div>
        ))}
      </div>

      {/* RIGHT: text content */}
      <div className="flex-1 flex flex-col justify-center">
        <span className="font-data text-sm text-bronze-dark px-3 py-1 bg-bronze-light/20 border border-bronze-light/40 rounded-sm self-start mb-6">
          Personal Finance
        </span>
        <h3 className="font-heading font-bold text-4xl mb-4 text-charcoal">Personal Finance</h3>
        <p className="font-sans text-xl text-slate leading-relaxed max-w-lg mb-8">
          The money fundamentals that most people never get taught. How to build wealth on any income, get out of debt, and make your money work for you.
        </p>
        <Link to="/articles/finance" className="font-data text-sm text-bronze hover:text-bronze-dark transition-colors">
          Browse Personal Finance articles &rarr;
        </Link>
      </div>
    </div>
  );
}

export default FinanceCard;
