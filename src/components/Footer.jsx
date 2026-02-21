/**
 * Footer — Site footer with platform links, quick nav links, and copyright.
 */
function Footer() {
  return (
    <footer className="bg-charcoal text-warm-white pt-24 pb-12 px-8 rounded-t-[4rem] -mt-8 relative z-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-16 mb-24">
        <div className="max-w-sm">
          <h2 className="font-heading font-bold text-3xl mb-4 text-gold">The Tactical Generalist</h2>
          <p className="font-sans text-stone mb-8">Timeless advice from someone who's tried almost everything. A legacy project preserving 30+ years of lessons learned.</p>
        </div>

        <div className="flex gap-16 font-sans">
          <div className="flex flex-col gap-4">
            <span className="font-data text-xs text-stone mb-2">PLATFORMS</span>
            <a href="https://www.youtube.com/@thetacticalgeneralist" target="_blank" rel="noreferrer" className="hover:text-bronze transition-colors">YouTube</a>
            <a href="https://thetacticalgeneralist.substack.com/" target="_blank" rel="noreferrer" className="hover:text-bronze transition-colors">Substack</a>
            <a href="https://x.com/thetacticalgeneralist" target="_blank" rel="noreferrer" className="hover:text-bronze transition-colors">X / Twitter</a>
          </div>
          <div className="flex flex-col gap-4">
            <span className="font-data text-xs text-stone mb-2">QUICK LINKS</span>
            <a href="#pillars" className="hover:text-bronze transition-colors">The 4 Pillars</a>
            <a href="#philosophy" className="hover:text-bronze transition-colors">Philosophy</a>
            <a href="#protocol" className="hover:text-bronze transition-colors">The Process</a>
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

export default Footer;
