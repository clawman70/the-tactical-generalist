import { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

/**
 * CareerCard — Animated cursor interaction demo for the Business & Career pillar.
 * A simulated cursor clicks through a mini weekly schedule and "saves" a strategy.
 */
function CareerCard() {
  const container = useRef(null);
  const cursorRef = useRef(null);
  const days = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

  useGSAP(() => {
    const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });

    // Initial position
    tl.set(cursorRef.current, { x: 0, y: 150, opacity: 0 });

    // Enter
    tl.to(cursorRef.current, { x: 80, y: 50, opacity: 1, duration: 0.8, ease: 'power2.out' });

    // Click action (press)
    tl.to(cursorRef.current, { scale: 0.8, duration: 0.1 });
    tl.to('.target-cell', { backgroundColor: '#5A7A8A', color: 'white', duration: 0.2 }, '<');
    tl.to(cursorRef.current, { scale: 1, duration: 0.1 });

    // Move to Save
    tl.to(cursorRef.current, { x: 220, y: 120, duration: 0.6, ease: 'power2.inOut', delay: 0.3 });

    // Click Save
    tl.to(cursorRef.current, { scale: 0.8, duration: 0.1 });
    tl.to('.save-btn', { backgroundColor: '#1E1E1E', color: 'white', duration: 0.2 }, '<');
    tl.to(cursorRef.current, { scale: 1, duration: 0.1 });

    // Reset colors
    tl.to('.target-cell', { backgroundColor: 'transparent', color: '#1E1E1E', duration: 0.5 }, '+=0.5');
    tl.to('.save-btn', { backgroundColor: 'transparent', color: '#B8860B', duration: 0.5 }, '<');
    tl.to(cursorRef.current, { opacity: 0, duration: 0.3 }, '<');

  }, { scope: container });

  return (
    <div ref={container} className="bg-cream rounded-[2rem] p-8 shadow-sm border border-stone/20 flex flex-col h-[400px] relative overflow-hidden">
      <div className="flex justify-between items-center mb-8">
        <h3 className="font-heading font-bold text-2xl text-charcoal">Business & Career</h3>
        <span className="font-data text-sm text-info px-3 py-1 bg-info/20 border border-info/40 rounded-sm">Business & Career</span>
      </div>

      <p className="font-sans text-charcoal/80 mb-6">Navigating corporate life, networking, and executing effectively.</p>

      <div className="grid grid-cols-7 gap-1 md:gap-2 mb-6 cursor-default">
        {days.map((day, i) => (
          <div key={i} className={`aspect-square rounded flex items-center justify-center font-data text-xs border border-stone/30 transition-colors ${i === 2 ? 'target-cell' : ''}`}>
            {day}
          </div>
        ))}
      </div>

      <div className="mt-auto flex justify-end">
        <div className="save-btn px-4 py-2 border border-bronze text-bronze rounded-sm font-heading font-semibold text-sm transition-colors">Get Started</div>
      </div>

      {/* SVG Cursor */}
      <div ref={cursorRef} className="absolute pointer-events-none z-20" style={{ top: '40%', left: '10%' }}>
        <svg width="24" height="36" viewBox="0 0 24 36" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5.65376 2.00013L21.3538 18.0001C22.0305 18.6896 21.5422 19.8841 20.5746 19.8841H13.6288L18.4984 31.638C18.847 32.4795 18.4418 33.4385 17.5932 33.7803C16.7446 34.122 15.7741 33.715 15.4255 32.8735L10.3705 20.6698L3.65596 26.6872C2.88053 27.3824 1.62109 26.832 1.62109 25.7901L1.62109 2.8972C1.62109 1.76747 2.97332 1.18562 3.79153 1.96102L5.65376 2.00013Z" fill="#2A2A2A" stroke="#F5F3EF" strokeWidth="2" />
        </svg>
      </div>
    </div>
  );
}

export default CareerCard;
