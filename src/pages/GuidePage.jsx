import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import GuideBlocks from '../components/GuideBlocks';
import { getGuide, getGuideGroup } from '../data/financialLiteracy';

/**
 * GuidePage — Individual Financial Literacy guide at /financial-literacy/:slug.
 *
 * Same page skeleton as ArticlePage (Navbar, max-w-3xl article column,
 * Footer) so the section still feels like part of the same site, but the
 * tone markers are different on purpose: an "info"-colored Reference Guide
 * badge instead of a pillar tag, no byline/date (these aren't personal
 * narrative), and a "browse more guides" close instead of the Substack
 * subscribe CTA every article page ends with.
 */
function GuidePage() {
  const { slug } = useParams();
  const guide = getGuide(slug);

  if (!guide) {
    return (
      <div className="bg-warm-white min-h-screen">
        <Navbar />
        <div className="pt-40 pb-32 px-8 text-center">
          <h1 className="font-heading font-bold text-5xl text-charcoal mb-6">Guide Not Found</h1>
          <p className="font-sans text-xl text-slate mb-8">We couldn't find that guide. It may have been moved or doesn't exist yet.</p>
          <Link to="/financial-literacy" className="font-sans text-info hover:text-charcoal transition-colors inline-flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" />
            Browse Financial Literacy
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const group = getGuideGroup(guide.group);

  return (
    <>
      <Helmet>
        <title>{guide.title} | Financial Literacy | The Tactical Generalist</title>
        <meta name="description" content={guide.metaDescription} />
        <meta property="og:title" content={guide.title} />
        <meta property="og:description" content={guide.metaDescription} />
        <link rel="canonical" href={`https://tacticalgeneralist.com/financial-literacy/${guide.slug}`} />
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'TechArticle',
          headline: guide.title,
          description: guide.metaDescription,
          publisher: { '@type': 'Organization', name: 'The Tactical Generalist', url: 'https://tacticalgeneralist.com' },
        })}</script>
      </Helmet>

      <div className="bg-warm-white min-h-screen">
        <Navbar />

        <article className="pt-40 pb-16 px-8">
          <div className="max-w-3xl mx-auto">
            {/* Top bar: reference badge + back link */}
            <div className="flex items-center justify-between mb-8">
              <span className="font-data text-xs px-2 py-1 rounded-sm bg-info/10 border border-info/40 text-info">
                Reference Guide
              </span>
              <Link to="/financial-literacy" className="font-sans text-sm text-stone hover:text-info transition-colors inline-flex items-center gap-1">
                <ArrowLeft className="w-4 h-4" />
                Financial Literacy
              </Link>
            </div>

            {/* Title */}
            <h1 className="font-heading font-bold text-4xl md:text-5xl text-charcoal tracking-tight leading-tight mb-4">
              {guide.title}
            </h1>

            {/* Byline replacement — group + section, no author/date; these aren't personal narrative */}
            <p className="font-sans text-slate mb-12">
              Financial Literacy{group ? <> &middot; {group.label}</> : null}
            </p>

            {/* Body */}
            {guide.blocks ? (
              <GuideBlocks blocks={guide.blocks} />
            ) : (
              <p className="font-sans text-slate italic mb-16">This guide is being finished and will be published here soon.</p>
            )}

            {guide.disclaimer && (
              <div className="px-6 py-4 border border-dashed border-stone/30 rounded-sm mt-4 mb-12">
                <p className="font-sans text-[0.8125rem] text-ash italic">{guide.disclaimer}</p>
              </div>
            )}

            <hr className="border-stone/20 mb-12" />

            {/* Soft close — browse more guides, no Substack CTA (no narrative hook here) */}
            <div className="bg-cream border border-info/30 rounded-2xl p-8 md:p-12 text-center">
              <h2 className="font-heading font-bold text-2xl text-charcoal mb-4">More guides like this</h2>
              <p className="font-sans text-slate mb-8 max-w-lg mx-auto">
                Browse the rest of the Financial Literacy section for more retirement-planning mechanics.
              </p>
              <Link
                to="/financial-literacy"
                className="inline-flex items-center gap-2 bg-info text-warm-white px-8 py-3 rounded-sm font-heading font-semibold hover:bg-charcoal transition-colors"
              >
                Browse Financial Literacy
                <ArrowLeft className="w-4 h-4 rotate-180" />
              </Link>
            </div>
          </div>
        </article>

        <Footer />
      </div>
    </>
  );
}

export default GuidePage;
