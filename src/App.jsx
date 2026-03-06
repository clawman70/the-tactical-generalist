import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import HomePage from './pages/HomePage';
import ArticlesPage from './pages/ArticlesPage';
import ArticlePage from './pages/ArticlePage';
import PillarPage from './pages/PillarPage';
import ScrollToTop from './components/ScrollToTop';

/**
 * App — Root component with React Router and SEO provider.
 * Routes:
 *   /                      → HomePage (full single-page hub)
 *   /articles              → ArticlesPage (catalog by pillar, 3 per pillar)
 *   /articles/:slug        → ArticlePage (individual article excerpt)
 *   /articles/finance      → PillarPage (all finance articles)
 *   /articles/career       → PillarPage (all career articles)
 *   /articles/lifeskills   → PillarPage (all life skills articles)
 *   /articles/mindset      → PillarPage (all mindset articles)
 *   /articles/fieldnotes   → PillarPage (all field notes articles)
 */
function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/articles" element={<ArticlesPage />} />
          <Route path="/articles/finance" element={<PillarPage pillar="finance" />} />
          <Route path="/articles/career" element={<PillarPage pillar="career" />} />
          <Route path="/articles/lifeskills" element={<PillarPage pillar="lifeskills" />} />
          <Route path="/articles/mindset" element={<PillarPage pillar="mindset" />} />
          <Route path="/articles/fieldnotes" element={<PillarPage pillar="fieldnotes" />} />
          <Route path="/articles/:slug" element={<ArticlePage />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
