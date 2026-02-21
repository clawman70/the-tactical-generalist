import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Pillars from './components/Pillars';
import About from './components/About';
import ContentFeed from './components/ContentFeed';
import Philosophy from './components/Philosophy';
import Protocol from './components/Protocol';
import Connect from './components/Connect';
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
      {/* 2. Pillars - 4 interactive cards in 2x2 grid */}
      <Pillars />
      {/* 3. About - Jeff's bio and project purpose */}
      <About />
      {/* 4. Content Feed - Latest videos and articles */}
      <ContentFeed />
      {/* 5. Philosophy - Cinematic statement piece */}
      <Philosophy />
      {/* 6. The Process - Pinned card scroll sequence */}
      <Protocol />
      {/* 7. Connect - Platform links (YouTube, Substack) */}
      <Connect />
      {/* 8. Footer */}
      <Footer />
    </div>
  );
}

export default App;
