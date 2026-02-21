import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Pillars from './components/Pillars';
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
      {/* 2. Pillars - Interactive cards for each content pillar */}
      <Pillars />
      {/* 3. Philosophy - Cinematic statement piece */}
      <Philosophy />
      {/* 4. The Process - Pinned card scroll sequence */}
      <Protocol />
      {/* 5. Connect - Platform links (YouTube, Substack) */}
      <Connect />
      {/* 6. Footer */}
      <Footer />
    </div>
  );
}

export default App;
