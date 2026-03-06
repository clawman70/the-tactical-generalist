import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import HomePage from './pages/HomePage';
import ArticlesPage from './pages/ArticlesPage';
import ArticlePage from './pages/ArticlePage';
import ScrollToTop from './components/ScrollToTop';

/**
 * App — Root component with React Router and SEO provider.
 * Routes:
 *   /                  → HomePage (full single-page hub)
 *   /articles          → ArticlesPage (catalog by pillar)
 *   /articles/:slug    → ArticlePage (individual article excerpt)
 */
function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/articles" element={<ArticlesPage />} />
          <Route path="/articles/:slug" element={<ArticlePage />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
