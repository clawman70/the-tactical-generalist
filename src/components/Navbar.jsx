import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { Menu } from 'lucide-react';
import { navLinks } from '../data/navigation';
import MobileMenu from './MobileMenu';

gsap.registerPlugin(ScrollTrigger);

/**
 * Navbar — Fixed floating navigation bar.
 * Changes from transparent to warm-white background on scroll.
 * Supports both anchor links (href) and React Router links (to).
 */
function Navbar() {
  const navRef = useRef(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
    <>
      <nav ref={navRef} className="fixed top-6 left-1/2 -translate-x-1/2 px-6 md:px-8 py-3 md:py-4 rounded-full flex items-center gap-8 md:gap-12 z-50 backdrop-blur-xl border border-transparent transition-colors duration-300 text-warm-white">
        <Link to="/" className="flex items-center gap-3">
          <img src="/logo.png" alt="TG Logo" className="w-8 h-8 md:w-10 md:h-10 rounded-full object-cover shadow-sm bg-white" />
          <span className="font-heading font-bold text-lg leading-none tracking-tight hidden lg:block">The Tactical Generalist</span>
        </Link>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-8 font-data text-sm">
          {navLinks.map((link) =>
            link.to ? (
              <Link key={link.to} to={link.to} className="interactive-link hover:text-bronze transition-colors">{link.label}</Link>
            ) : (
              <a key={link.href} href={link.href} className="interactive-link hover:text-bronze transition-colors">{link.label}</a>
            )
          )}
        </div>

        {/* Desktop CTA */}
        <a href="/#connect" className="hidden md:flex magnetic-btn bg-bronze text-charcoal px-6 py-2 rounded-sm font-heading font-semibold hover:bg-bronze-light items-center gap-2">
          <span className="relative z-10">Start Here</span>
        </a>

        {/* Mobile hamburger button */}
        <button
          onClick={() => setMobileMenuOpen(true)}
          className="md:hidden text-current hover:text-bronze transition-colors"
          aria-label="Open menu"
        >
          <Menu size={24} />
        </button>
      </nav>

      {/* Mobile menu overlay */}
      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </>
  );
}

export default Navbar;
