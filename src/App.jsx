import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ContentFeed from './components/ContentFeed';
import Connect from './components/Connect';
import Pillars from './components/Pillars';
import Philosophy from './components/Philosophy';
import Protocol from './components/Protocol';
import Footer from './components/Footer';

/**
 * App — Composition root for The Tactical Generalist hub site.
 * Each section is its own component file. See src/components/ for details.
 */
function App() {
  return (
    <div className="bg-warm-white min-h-screen">
      <Navbar />
      {/* 1. Hero - Full viewport banner */}
      <Hero />
      {/* 2. Content Feed - Latest videos and articles */}
      <ContentFeed />
      {/* 3. Connect - Platform links (YouTube, Substack) */}
      <Connect />
      {/* 4. Pillars - 4 interactive cards in 2x2 grid */}
      <Pillars />
      {/* 5. Philosophy - Cinematic statement piece */}
      <Philosophy />
      {/* 6. The Process - Pinned card scroll sequence */}
      <Protocol />
      {/* 7. Footer */}
      <Footer />
    </div>
  );
}

export default App;
