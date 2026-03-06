import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowUpRight, BookOpen, PlayCircle } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { latestContent, pillarStyles } from '../data/content';

/**
 * Pillar ordering for the catalog page.
 * Each entry maps a pillar key to its display heading.
 */
const pillarOrder = [
  { key: 'finance', heading: 'Personal Finance' },
  { key: 'career', heading: 'Business & Career' },
  { key: 'lifeskills', heading: 'Life Skills' },
  { key: 'mindset', heading: 'Philosophy & Mindset' },
  { key: 'fieldnotes', heading: 'Field Notes' },
];

/**
 * ArticlesPage — /articles catalog showing all articles grouped by pillar.
 * Cards match the homepage ContentFeed visual style.
 */
function ArticlesPage() {
  return (
    <>
      <Helmet>
        <title>All Articles | The Tactical Generalist</title>
        <meta name="description" content="Browse all articles from The Tactical Generalist — practical wisdom on personal finance, career, life skills, mindset, and field observations." />
      </Helmet>

      <div className="bg-warm-white min-h-screen">
        <Navbar />

        {/* Page header */}
        <section className="pt-40 pb-16 px-8">
          <div className="max-w-7xl mx-auto">
            <h1 className="font-heading font-bold text-5xl md:text-7xl text-charcoal tracking-tighter mb-6">All Articles</h1>
            <p className="font-sans text-xl text-slate max-w-2xl">Browse the full archive — practical wisdom across all five pillars.</p>
          </div>
        </section>

        {/* Pillar sections */}
        {pillarOrder.map(({ key, heading }) => {
          const articles = latestContent.filter((item) => item.pillar === key);
          const style = pillarStyles[key];

          return (
            <section key={key} className="py-12 px-8">
              <div className="max-w-7xl mx-auto">
                <h2 className="font-heading font-bold text-3xl text-charcoal mb-8">{heading}</h2>

                {articles.length === 0 ? (
                  <p className="font-sans text-slate italic">Field Notes articles coming soon.</p>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {articles.map((item, i) => {
                      const FormatIcon = item.format === 'video' ? PlayCircle : BookOpen;

                      return (
                        <Link
                          key={i}
                          to={`/articles/${item.slug}`}
                          className="group bg-warm-white rounded-2xl p-6 border border-stone/20 hover:border-bronze transition-colors flex flex-col gap-4 shadow-sm"
                        >
                          {/* Pillar tag + format icon */}
                          <div className="flex items-center justify-between">
                            <span className={`font-data text-xs px-2 py-1 rounded-sm ${style.bg} ${style.border} ${style.text} border`}>
                              {style.label}
                            </span>
                            <FormatIcon className="w-5 h-5 text-stone" />
                          </div>

                          {/* Title */}
                          <h3 className="font-heading font-bold text-lg text-charcoal leading-snug group-hover:text-bronze-dark transition-colors">
                            {item.title}
                          </h3>

                          {/* Description */}
                          <p className="font-sans text-sm text-slate leading-relaxed flex-1">
                            {item.description}
                          </p>

                          {/* Footer: date + arrow */}
                          <div className="flex items-center justify-between pt-2 border-t border-stone/10">
                            <span className="font-data text-xs text-stone">
                              {new Date(item.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                            </span>
                            <ArrowUpRight className="w-4 h-4 text-stone group-hover:text-bronze transition-colors" />
                          </div>
                        </Link>
                      );
                    })}
                  </div>
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
