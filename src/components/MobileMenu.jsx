import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { X } from 'lucide-react';
import { navLinks } from '../data/navigation';

/**
 * MobileMenu — Full-screen overlay navigation for small screens.
 * Fades in with staggered link animation. Locks body scroll when open.
 * Supports both anchor links (href) and React Router links (to).
 */
function MobileMenu({ isOpen, onClose }) {
  const overlayRef = useRef(null);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Animate in when menu opens
  useGSAP(() => {
    if (!overlayRef.current) return;

    if (isOpen) {
      gsap.to(overlayRef.current, { opacity: 1, duration: 0.3, ease: 'power2.out' });
      gsap.from('.mobile-link', {
        y: 20,
        opacity: 0,
        stagger: 0.08,
        duration: 0.5,
        ease: 'power3.out',
        delay: 0.15,
      });
    }
  }, { dependencies: [isOpen], scope: overlayRef });

  if (!isOpen) return null;

  const handleLinkClick = () => {
    onClose();
  };

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[100] bg-charcoal/95 backdrop-blur-xl flex flex-col items-center justify-center opacity-0"
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-8 right-8 text-warm-white hover:text-bronze transition-colors"
        aria-label="Close menu"
      >
        <X size={32} />
      </button>

      {/* Navigation links */}
      <nav className="flex flex-col items-center gap-8">
        {navLinks.map((link) =>
          link.to ? (
            <Link
              key={link.to}
              to={link.to}
              onClick={handleLinkClick}
              className="mobile-link font-heading font-bold text-4xl text-warm-white hover:text-bronze transition-colors"
            >
              {link.label}
            </Link>
          ) : (
            <a
              key={link.href}
              href={link.href}
              onClick={handleLinkClick}
              className="mobile-link font-heading font-bold text-4xl text-warm-white hover:text-bronze transition-colors"
            >
              {link.label}
            </a>
          )
        )}

        {/* CTA button */}
        <a
          href="/#connect"
          onClick={handleLinkClick}
          className="mobile-link mt-8 bg-bronze text-charcoal px-8 py-4 rounded-sm font-heading text-lg font-semibold hover:bg-bronze-light transition-colors"
        >
          Start Here
        </a>
      </nav>
    </div>
  );
}

export default MobileMenu;
