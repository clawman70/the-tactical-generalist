import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ContentFeed from '../components/ContentFeed';
import Connect from '../components/Connect';
import Pillars from '../components/Pillars';
import Philosophy from '../components/Philosophy';
import Protocol from '../components/Protocol';
import About from '../components/About';
import Footer from '../components/Footer';

/**
 * HomePage — The full single-page hub site.
 * Extracted from App.jsx to support React Router multi-page architecture.
 */
function HomePage() {
  return (
    <div className="bg-warm-white min-h-screen">
      <Navbar />
      <Hero />
      <ContentFeed />
      <Connect />
      <Pillars />
      <Philosophy />
      <Protocol />
      <About />
      <Footer />
    </div>
  );
}

export default HomePage;
