import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { latestContent, pillarStyles, getRecentSlugs } from '../data/content';

const SUBSTACK_SUBSCRIBE_URL = 'https://thetacticalgeneralist.substack.com/subscribe';

/**
 * ArticlePage — Individual article page at /articles/:slug.
 *
 * The 10 most recently dated articles (site-wide) show only their excerpt
 * plus a hard CTA to read the rest on Substack — that's the hook that drives
 * new subscribers. Everything older publishes in full on-site instead, with
 * a soft "subscribe for what's next" nudge at the bottom rather than a gate.
 */
function ArticlePage() {
  const { slug } = useParams();
  const article = latestContent.find((item) => item.slug === slug);
  const recentSlugs = getRecentSlugs(latestContent, 10);
  const isFullArticle = Boolean(article?.content) && !recentSlugs.has(slug);

  // 404 state
  if (!article) {
    return (
      <div className="bg-warm-white min-h-screen">
        <Navbar />
        <div className="pt-40 pb-32 px-8 text-center">
          <h1 className="font-heading font-bold text-5xl text-charcoal mb-6">Article Not Found</h1>
          <p className="font-sans text-xl text-slate mb-8">We couldn't find that article. It may have been moved or doesn't exist yet.</p>
          <Link to="/articles" className="font-sans text-bronze hover:text-bronze-dark transition-colors inline-flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" />
            Browse all articles
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const style = pillarStyles[article.pillar];
  const formattedDate = new Date(article.date).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <>
      <Helmet>
        <title>{article.title} | The Tactical Generalist</title>
        <meta name="description" content={article.metaDescription} />
        <meta name="keywords" content={article.keywords.join(', ')} />
        <meta property="og:title" content={article.title} />
        <meta property="og:description" content={article.metaDescription} />
        <link rel="canonical" href={`https://tacticalgeneralist.com/articles/${article.slug}`} />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": article.title,
          "author": { "@type": "Person", "name": "Jeff Clawson" },
          "datePublished": article.date,
          "publisher": { "@type": "Organization", "name": "The Tactical Generalist", "url": "https://tacticalgeneralist.com" },
          ...(isFullArticle ? { "articleBody": article.content } : {}),
        })}</script>
      </Helmet>

      <div className="bg-warm-white min-h-screen">
        <Navbar />

        <article className="pt-40 pb-16 px-8">
          <div className="max-w-3xl mx-auto">
            {/* Top bar: pillar badge + back link */}
            <div className="flex items-center justify-between mb-8">
              <span className={`font-data text-xs px-2 py-1 rounded-sm ${style.bg} ${style.border} ${style.text} border`}>
                {style.label}
              </span>
              <Link to="/articles" className="font-sans text-sm text-stone hover:text-bronze transition-colors inline-flex items-center gap-1">
                <ArrowLeft className="w-4 h-4" />
                All Articles
              </Link>
            </div>

            {/* Title */}
            <h1 className="font-heading font-bold text-4xl md:text-5xl text-charcoal tracking-tight leading-tight mb-6">
              {article.title}
            </h1>

            {/* Byline */}
            <p className="font-sans text-slate mb-12">
              By Jeff Clawson &middot; {formattedDate} &middot; {style.label}
            </p>

            {/* Body: full text for graduated articles, excerpt for the newest 10 */}
            <div className="prose-excerpt mb-16">
              {(isFullArticle ? article.content : article.excerpt).split('\n\n').map((paragraph, i) => (
                <p key={i} className="font-display text-charcoal/90 text-lg leading-relaxed mb-6">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Divider */}
            <hr className="border-stone/20 mb-12" />

            {isFullArticle ? (
              /* Soft CTA — content isn't gated, just a subscribe nudge */
              <div className="bg-cream border border-bronze/30 rounded-2xl p-8 md:p-12 text-center">
                <h2 className="font-heading font-bold text-2xl text-charcoal mb-4">Enjoying this?</h2>
                <p className="font-sans text-slate mb-8 max-w-lg mx-auto">
                  Subscribe on Substack to get new articles first.
                </p>
                <a
                  href={SUBSTACK_SUBSCRIBE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-bronze text-charcoal px-8 py-3 rounded-sm font-heading font-semibold hover:bg-bronze-light transition-colors mb-4"
                >
                  Subscribe on Substack
                  <ArrowUpRight className="w-4 h-4" />
                </a>
                <div>
                  <Link to="/articles" className="font-sans text-sm text-stone hover:text-bronze transition-colors">
                    Browse more articles
                  </Link>
                </div>
              </div>
            ) : (
              /* Hard CTA — excerpt only, full piece lives on Substack */
              <div className="bg-cream border border-bronze/30 rounded-2xl p-8 md:p-12 text-center">
                <h2 className="font-heading font-bold text-2xl text-charcoal mb-4">Enjoying this?</h2>
                <p className="font-sans text-slate mb-8 max-w-lg mx-auto">
                  The full piece is published on Substack. Subscribe free to read everything in the archive.
                </p>
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-bronze text-charcoal px-8 py-3 rounded-sm font-heading font-semibold hover:bg-bronze-light transition-colors mb-4"
                >
                  Read the full article
                  <ArrowUpRight className="w-4 h-4" />
                </a>
                <div>
                  <Link to="/articles" className="font-sans text-sm text-stone hover:text-bronze transition-colors">
                    Browse more articles
                  </Link>
                </div>
              </div>
            )}
          </div>
        </article>

        <Footer />
      </div>
    </>
  );
}

export default ArticlePage;
