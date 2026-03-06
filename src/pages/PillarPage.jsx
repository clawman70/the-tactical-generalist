import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, ArrowUpRight, BookOpen, PlayCircle } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { latestContent, pillarStyles } from '../data/content';

/**
 * Pillar descriptions for dedicated pillar pages.
 */
const pillarDescriptions = {
  finance: 'The money fundamentals that most people never get taught.',
  career: 'Hard-won lessons from 30 years navigating corporate life.',
  lifeskills: 'The practical stuff that makes everyday life easier and better.',
  mindset: 'How you think about the world determines everything else.',
  fieldnotes: "The stuff that doesn't fit anywhere else. Observations, oddities, and stories from a life fully lived.",
};

/**
 * PillarPage — Dedicated page showing ALL articles for a single pillar.
 * Accepts a `pillar` prop matching a key in pillarStyles (e.g. "finance").
 */
function PillarPage({ pillar }) {
  const style = pillarStyles[pillar];
  const description = pillarDescriptions[pillar];
  const articles = latestContent.filter((item) => item.pillar === pillar);

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

        <Footer />
      </div>
    </>
  );
}

export default PillarPage;
