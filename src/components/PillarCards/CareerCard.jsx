import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

/**
 * CareerCard — Full-width pillar card for Business & Career.
 * Animated cursor interaction demo in the left panel.
 */
function CareerCard() {
  const container = useRef(null);
  const cursorRef = useRef(null);
  const days = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

  useGSAP(() => {
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

    // Cursor interaction timeline
    const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });

    tl.set(cursorRef.current, { x: 0, y: 150, opacity: 0 });
    tl.to(cursorRef.current, { x: 80, y: 50, opacity: 1, duration: 0.8, ease: 'power2.out' });
    tl.to(cursorRef.current, { scale: 0.8, duration: 0.1 });
    tl.to('.career-target-cell', { backgroundColor: '#5A7A8A', color: 'white', duration: 0.2 }, '<');
    tl.to(cursorRef.current, { scale: 1, duration: 0.1 });
    tl.to(cursorRef.current, { x: 220, y: 120, duration: 0.6, ease: 'power2.inOut', delay: 0.3 });
    tl.to(cursorRef.current, { scale: 0.8, duration: 0.1 });
    tl.to('.career-save-btn', { backgroundColor: '#1E1E1E', color: 'white', duration: 0.2 }, '<');
    tl.to(cursorRef.current, { scale: 1, duration: 0.1 });
    tl.to('.career-target-cell', { backgroundColor: 'transparent', color: '#F5F3EF', duration: 0.5 }, '+=0.5');
    tl.to('.career-save-btn', { backgroundColor: 'transparent', color: '#B8860B', duration: 0.5 }, '<');
    tl.to(cursorRef.current, { opacity: 0, duration: 0.3 }, '<');
  }, { scope: container });

  return (
    <div ref={container} className="w-full bg-cream rounded-[3rem] p-8 md:p-16 shadow-2xl border border-stone/20 flex flex-col md:flex-row gap-12">
      {/* LEFT: animated visual panel */}
      <div className="w-full md:w-1/3 aspect-square bg-gunmetal rounded-[2rem] relative overflow-hidden flex flex-col items-center justify-center p-6">
        <div className="grid grid-cols-7 gap-1 w-full max-w-[200px] mb-6">
          {days.map((day, i) => (
            <div key={i} className={`aspect-square rounded flex items-center justify-center font-data text-xs text-warm-white/70 border border-stone/30 transition-colors ${i === 2 ? 'career-target-cell' : ''}`}>
              {day}
            </div>
          ))}
        </div>
        <div className="career-save-btn px-4 py-2 border border-bronze text-bronze rounded-sm font-heading font-semibold text-sm transition-colors">
          Get Started
        </div>

        {/* SVG Cursor */}
        <div ref={cursorRef} className="absolute pointer-events-none z-20" style={{ top: '30%', left: '10%' }}>
          <svg width="24" height="36" viewBox="0 0 24 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.65376 2.00013L21.3538 18.0001C22.0305 18.6896 21.5422 19.8841 20.5746 19.8841H13.6288L18.4984 31.638C18.847 32.4795 18.4418 33.4385 17.5932 33.7803C16.7446 34.122 15.7741 33.715 15.4255 32.8735L10.3705 20.6698L3.65596 26.6872C2.88053 27.3824 1.62109 26.832 1.62109 25.7901L1.62109 2.8972C1.62109 1.76747 2.97332 1.18562 3.79153 1.96102L5.65376 2.00013Z" fill="#2A2A2A" stroke="#F5F3EF" strokeWidth="2" />
          </svg>
        </div>
      </div>

      {/* RIGHT: text content */}
      <div className="flex-1 flex flex-col justify-center">
        <span className="font-data text-sm text-info px-3 py-1 bg-info/20 border border-info/40 rounded-sm self-start mb-6">
          Business &amp; Career
        </span>
        <h3 className="font-heading font-bold text-4xl mb-4 text-charcoal">Business &amp; Career</h3>
        <p className="font-sans text-xl text-slate leading-relaxed max-w-lg mb-8">
          Hard-won lessons from 30 years navigating corporate life — on leadership, networking, and how to actually get ahead.
        </p>
        <Link to="/articles/career" className="font-data text-sm text-bronze hover:text-bronze-dark transition-colors">
          Browse Business &amp; Career articles &rarr;
        </Link>
      </div>
    </div>
  );
}

export default CareerCard;
