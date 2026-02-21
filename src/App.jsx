import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { ArrowUpRight, Youtube, Mail, Newspaper, PlayCircle, BookOpen, Compass, CheckCircle2 } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

function Navbar() {
  const navRef = useRef(null);

  useGSAP(() => {
    ScrollTrigger.create({
      start: 'top -100',
      onUpdate: (self) => {
        if (self.direction === 1) {
          gsap.to(navRef.current, { backgroundColor: 'rgba(245, 243, 239, 0.95)', color: '#1E1E1E', borderColor: 'rgba(30, 30, 30, 0.1)', duration: 0.3 });
        } else if (self.progress === 0) {
          gsap.to(navRef.current, { backgroundColor: 'transparent', color: '#F5F3EF', borderColor: 'transparent', duration: 0.3 });
        }
      }
    });
  }, []);

  return (
    <nav ref={navRef} className="fixed top-6 left-1/2 -translate-x-1/2 px-6 md:px-8 py-3 md:py-4 rounded-full flex items-center gap-8 md:gap-12 z-50 backdrop-blur-xl border border-transparent transition-colors duration-300 text-warm-white">
      <div className="flex items-center gap-3">
        <img src="/logo.png" alt="TG Logo" className="w-8 h-8 md:w-10 md:h-10 rounded-full object-cover shadow-sm bg-white" />
        <span className="font-heading font-bold text-lg leading-none tracking-tight hidden lg:block">The Tactical Generalist</span>
      </div>
      <div className="hidden md:flex items-center gap-8 font-data text-sm">
        <a href="#pillars" className="interactive-link hover:text-bronze transition-colors">Pillars</a>
        <a href="#philosophy" className="interactive-link hover:text-bronze transition-colors">Philosophy</a>
        <a href="#protocol" className="interactive-link hover:text-bronze transition-colors">Protocol</a>
      </div>
      <a href="#connect" className="magnetic-btn bg-bronze text-charcoal px-6 py-2 rounded-sm font-heading font-semibold hover:bg-bronze-light flex items-center gap-2">
        <span className="relative z-10">Access Archive</span>
      </a>
    </nav>
  );
}

function Hero() {
  const container = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from('.hero-elem', {
      y: 40,
      opacity: 0,
      duration: 1.2,
      stagger: 0.1,
      ease: 'power3.out',
      delay: 0.2
    });
  }, { scope: container });

  return (
    <section ref={container} className="relative h-[100dvh] w-full bg-charcoal overflow-hidden flex flex-col justify-end">
      {/* Background Image using custom Banner */}
      <div className="absolute inset-0 z-0 bg-charcoal">
        <img
          src="/banner.png"
          alt="The Tactical Generalist Banner"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/80 to-transparent" />
      </div>

      <div className="relative z-10 p-8 md:p-16 lg:p-24 max-w-7xl">
        <div className="flex flex-col gap-2">
          <p className="hero-elem font-data text-gold text-sm md:text-base uppercase tracking-widest mb-4">By Jeff Clawson</p>
          <h1 className="hero-elem font-heading font-bold text-5xl md:text-7xl lg:text-8xl text-warm-white leading-[0.9] tracking-tighter">
            Pass down the
          </h1>
          <h2 className="hero-elem font-drama italic text-6xl md:text-8xl lg:text-[10rem] text-cream leading-[0.8] mb-8">
            Lessons.
          </h2>
          <p className="hero-elem font-sans text-xl md:text-2xl text-stone max-w-2xl mt-4">
            Timeless advice from someone who's tried almost everything. A legacy project spanning finance, career, and life skills for the next generation.
          </p>
          <div className="hero-elem mt-12 flex flex-wrap gap-4">
            <a href="#connect" className="magnetic-btn bg-bronze text-charcoal rounded-sm px-8 py-4 font-heading text-lg font-semibold flex items-center gap-3">
              Start Learning <ArrowUpRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function DiagnosticShuffler() {
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

function TelemetryTypewriter() {
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
        <div className="flex items-center gap-2 px-3 py-1 bg-copper/20 border border-copper/40 rounded-sm">
          <div className="w-2 h-2 rounded-full bg-copper animate-pulse"></div>
          <span className="font-data text-sm text-copper-light">LIVE FEED</span>
        </div>
      </div>
      <div className="flex-1 font-data text-cream/90 leading-relaxed text-sm md:text-base">
        {displayed}
        <span className="inline-block w-2 h-4 bg-copper ml-1 animate-pulse align-middle"></span>
      </div>
    </div>
  );
}

function CursorProtocolScheduler() {
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
        <span className="font-data text-sm text-info px-3 py-1 bg-info/20 border border-info/40 rounded-sm">SYSTEM 03</span>
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
        <div className="save-btn px-4 py-2 border border-bronze text-bronze rounded-sm font-heading font-semibold text-sm transition-colors">Apply System</div>
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

function Philosophy() {
  const container = useRef(null);

  useGSAP(() => {
    const lines = container.current.querySelectorAll('.reveal-line');
    gsap.from(lines, {
      y: 40,
      opacity: 0,
      stagger: 0.2,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: container.current,
        start: 'top 60%'
      }
    });
  }, { scope: container });

  return (
    <section id="philosophy" ref={container} className="relative py-32 px-8 min-h-[80vh] flex items-center bg-charcoal overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <img src="https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?q=80&w=2960&auto=format&fit=crop" alt="Texture" className="w-full h-full object-cover grayscale" />
      </div>
      <div className="max-w-6xl mx-auto relative z-10 w-full flex flex-col gap-12">
        <div className="mb-4">
          <span className="font-data text-sm text-[#4A6A4A] px-3 py-1 bg-success/20 border border-success/40 rounded-sm">PHILOSOPHY & MINDSET</span>
        </div>
        <p className="reveal-line font-heading font-bold text-2xl md:text-4xl text-stone uppercase tracking-wide">
          Most advice focuses on theory and optimization.
        </p>
        <p className="reveal-line font-heading text-5xl md:text-7xl lg:text-8xl text-warm-white max-w-4xl tracking-tight leading-[1.1]">
          We focus on building <span className="font-drama italic text-gold font-normal tracking-normal text-6xl md:text-8xl lg:text-[9rem]">resilience</span> and executing the basics flawlessly.
        </p>
      </div>
    </section>
  );
}

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

    // Sub-animations
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

function Connect() {
  return (
    <section id="connect" className="py-32 px-8 bg-gunmetal relative overflow-hidden text-warm-white border-t border-stone/20">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16 justify-between relative z-10">
        <div className="flex-1">
          <h2 className="font-heading font-bold text-5xl md:text-7xl mb-8 tracking-tighter text-gold">Enter the Archive.</h2>
          <p className="font-sans text-xl text-cream max-w-xl mb-12">Select your preferred medium. One substantial piece per week, alternating between video modules and detailed written dispatches.</p>

          <div className="flex flex-col gap-6">
            <a href="https://youtube.com" target="_blank" rel="noreferrer" className="group flex items-center justify-between p-8 border border-stone/30 bg-charcoal rounded-[2rem] hover:border-bronze transition-colors">
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 rounded-full bg-charcoal border border-stone/50 text-bronze-light flex items-center justify-center group-hover:bg-bronze group-hover:text-charcoal transition-colors">
                  <Youtube size={32} />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-2xl text-warm-white">YouTube Guides</h3>
                  <p className="font-data text-sm text-stone mt-1">VIDEO ESSAYS & TACTICS</p>
                </div>
              </div>
              <ArrowUpRight className="text-stone group-hover:text-bronze transition-colors" size={32} />
            </a>

            <a href="https://substack.com" target="_blank" rel="noreferrer" className="group flex items-center justify-between p-8 border border-stone/30 bg-charcoal rounded-[2rem] hover:border-bronze transition-colors">
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 rounded-full bg-charcoal border border-stone/50 text-bronze-light flex items-center justify-center group-hover:bg-bronze group-hover:text-charcoal transition-colors">
                  <Newspaper size={32} />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-2xl text-warm-white">Substack Letters</h3>
                  <p className="font-data text-sm text-stone mt-1">WRITTEN DISPATCHES</p>
                </div>
              </div>
              <ArrowUpRight className="text-stone group-hover:text-bronze transition-colors" size={32} />
            </a>
          </div>
        </div>
      </div>

      {/* Background Graphic */}
      <div className="absolute top-1/2 -translate-y-1/2 right-0 translate-x-1/3 opacity-[0.03] pointer-events-none text-gold-light">
        <Compass size={800} strokeWidth={0.5} />
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-charcoal text-warm-white pt-24 pb-12 px-8 rounded-t-[4rem] -mt-8 relative z-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-16 mb-24">
        <div className="max-w-sm">
          <h2 className="font-heading font-bold text-3xl mb-4 text-gold">The Tactical Generalist</h2>
          <p className="font-sans text-stone mb-8">Timeless advice from someone who's tried almost everything. A legacy project preserving 30+ years of lessons learned.</p>
          <div className="flex items-center gap-3 font-data text-xs text-success border border-success/30 bg-success/10 px-4 py-2 rounded-sm w-max">
            <div className="w-2 h-2 rounded-full bg-success animate-pulse"></div>
            SYSTEM OPERATIONAL
          </div>
        </div>

        <div className="flex gap-16 font-sans">
          <div className="flex flex-col gap-4">
            <span className="font-data text-xs text-stone mb-2">PLATFORMS</span>
            <a href="https://youtube.com" className="hover:text-bronze transition-colors">YouTube</a>
            <a href="https://substack.com" className="hover:text-bronze transition-colors">Substack</a>
            <a href="https://twitter.com/thetacticalgeneralist" className="hover:text-bronze transition-colors">Twitter / X</a>
          </div>
          <div className="flex flex-col gap-4">
            <span className="font-data text-xs text-stone mb-2">QUICK LINKS</span>
            <a href="#pillars" className="hover:text-bronze transition-colors">The 4 Pillars</a>
            <a href="#philosophy" className="hover:text-bronze transition-colors">Our Philosophy</a>
            <a href="#protocol" className="hover:text-bronze transition-colors">The Protocol</a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-stone/20 font-data text-xs text-stone">
        <p>&copy; {new Date().getFullYear()} Jeff Clawson. All rights reserved.</p>
        <p>FOR THE NEXT GENERATION</p>
      </div>
    </footer>
  );
}

function App() {
  return (
    <div className="bg-warm-white min-h-screen">
      <Navbar />
      <Hero />

      <section id="pillars" className="py-32 px-8 max-w-7xl mx-auto">
        <div className="mb-20 text-center md:text-left">
          <h2 className="font-heading font-bold text-5xl md:text-7xl text-charcoal tracking-tighter mb-6">The Four Pillars</h2>
          <p className="font-sans text-xl text-slate max-w-2xl">Core systems required to build independence and maintain perspective in a complex world.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <DiagnosticShuffler />
          <TelemetryTypewriter />
          <CursorProtocolScheduler />
        </div>
      </section>

      <Philosophy />
      <Protocol />
      <Connect />
      <Footer />
    </div>
  );
}

export default App;
