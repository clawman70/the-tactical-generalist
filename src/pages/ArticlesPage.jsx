import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowUpRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ArticleCard from '../components/ArticleCard';
import { latestContent, getRecentSlugs } from '../data/content';

/**
 * Pillar ordering for the catalog page.
 * Each entry maps a pillar key to its display heading.
 */
const pillarOrder = [
  { key: 'fieldnotes', heading: 'Field Notes' },
  { key: 'finance', heading: 'Personal Finance' },
  { key: 'career', heading: 'Business & Career' },
  { key: 'lifeskills', heading: 'Life Skills' },
  { key: 'mindset', heading: 'Philosophy & Mindset' },
];

/**
 * ArticlesPage — /articles catalog showing all articles grouped by pillar.
 * Cards match the homepage ContentFeed visual style.
 */
function ArticlesPage() {
  const teaserSlugs = getRecentSlugs(latestContent, 10);

  return (
    <>
      <Helmet>
        <title>All Articles | The Tactical Generalist</title>
        <meta name="description" content="Browse all articles from The Tactical Generalist — life lessons and observations on finance, career, life skills, mindset, and everything in between." />
      </Helmet>

      <div className="bg-warm-white min-h-screen">
        <Navbar />

        {/* Page header */}
        <section className="pt-40 pb-16 px-8">
          <div className="max-w-7xl mx-auto">
            <h1 className="font-heading font-bold text-5xl md:text-7xl text-charcoal tracking-tighter mb-6">All Articles</h1>
            <p className="font-sans text-xl text-slate max-w-2xl">Browse the full archive — life, through my eyes, across all five pillars.</p>
          </div>
        </section>

        {/* Pillar sections — show max 3 per pillar with "More" link */}
        {pillarOrder.map(({ key, heading }) => {
          const allArticles = latestContent.filter((item) => item.pillar === key);
          const visibleArticles = allArticles.slice(0, 3);
          const hasMore = allArticles.length > 3;

          return (
            <section key={key} className="py-12 px-8">
              <div className="max-w-7xl mx-auto">
                <h2 className="font-heading font-bold text-3xl text-charcoal mb-8">{heading}</h2>

                {allArticles.length === 0 ? (
                  <p className="font-sans text-slate italic">{heading} articles coming soon.</p>
                ) : (
                  <>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {visibleArticles.map((item) => (
                        <ArticleCard key={item.slug} item={item} isTeaser={teaserSlugs.has(item.slug)} />
                      ))}
                    </div>

                    {hasMore && (
                      <div className="mt-6">
                        <Link
                          to={`/articles/${key}`}
                          className="font-heading font-semibold text-bronze hover:text-bronze-dark transition-colors inline-flex items-center gap-2"
                        >
                          More {heading}
                          <ArrowUpRight className="w-4 h-4" />
                        </Link>
                      </div>
                    )}
                  </>
                )}
              </div>
            </section>
          );
        })}

        <Footer />
      </div>
    </>
  );
}

export default ArticlesPage;
