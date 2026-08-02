import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ArticleCard from '../components/ArticleCard';
import { latestContent, pillarStyles, pillarDescriptions, getRecentSlugs } from '../data/content';

/**
 * PillarPage — Dedicated page showing ALL articles for a single pillar.
 * Accepts a `pillar` prop matching a key in pillarStyles (e.g. "finance").
 */
function PillarPage({ pillar }) {
  const style = pillarStyles[pillar];
  const description = pillarDescriptions[pillar];
  const articles = latestContent.filter((item) => item.pillar === pillar);
  const teaserSlugs = getRecentSlugs(latestContent, 10);

  return (
    <>
      <Helmet>
        <title>{style.label} Articles | The Tactical Generalist</title>
        <meta name="description" content={description} />
      </Helmet>

      <div className="bg-warm-white min-h-screen">
        <Navbar />

        <section className="pt-40 pb-16 px-8">
          <div className="max-w-7xl mx-auto">
            {/* Back link */}
            <Link to="/articles" className="font-sans text-sm text-stone hover:text-bronze transition-colors inline-flex items-center gap-1 mb-8">
              <ArrowLeft className="w-4 h-4" />
              All Articles
            </Link>

            <h1 className="font-heading font-bold text-5xl md:text-7xl text-charcoal tracking-tighter mb-6">{style.label}</h1>
            <p className="font-sans text-xl text-slate max-w-2xl">{description}</p>
          </div>
        </section>

        <section className="pb-24 px-8">
          <div className="max-w-7xl mx-auto">
            {articles.length === 0 ? (
              <p className="font-sans text-slate italic">{style.label} articles coming soon.</p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {articles.map((item) => (
                  <ArticleCard key={item.slug} item={item} isTeaser={teaserSlugs.has(item.slug)} />
                ))}
              </div>
            )}
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}

export default PillarPage;
