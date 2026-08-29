import { Helmet } from 'react-helmet-async';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import GuideCard from '../components/GuideCard';
import { guideGroups, guides } from '../data/financialLiteracy';

const META_DESCRIPTION = 'How we got here: a set of plain, mechanics-first guides on the decisions that come up when planning for retirement.';

/**
 * FinancialLiteracyPage — Section landing page at /financial-literacy.
 *
 * Source content ported from the "How We Got Here" guide (financial-literacy-
 * index.html) supplied for this section. Structurally it's the same page
 * anatomy as the rest of the site (Navbar, container, Footer) — the
 * differences are deliberate and confined to this section: the dark hero
 * uses a graph-paper texture instead of the homepage's photographic/animated
 * heroes, and the accent color throughout is `info` (slate blue) instead of
 * the site's usual bronze/gold, signaling "reference material" without
 * introducing a new layout system.
 */
function FinancialLiteracyPage() {
  return (
    <>
      <Helmet>
        <title>Financial Literacy | The Tactical Generalist</title>
        <meta name="description" content={META_DESCRIPTION} />
        <meta property="og:title" content="Financial Literacy | The Tactical Generalist" />
        <meta property="og:description" content={META_DESCRIPTION} />
        <link rel="canonical" href="https://tacticalgeneralist.com/financial-literacy" />
      </Helmet>

      <div className="bg-warm-white min-h-screen">
        <Navbar />

        <section className="pt-40 pb-16 px-8">
          <div className="max-w-3xl mx-auto">
            {/* Hero */}
            <div className="grid-blueprint bg-charcoal text-warm-white rounded-md px-8 py-14 md:px-12 md:py-16 mb-12">
              <div className="font-data text-[0.6875rem] uppercase tracking-[0.16em] text-copper-light mb-4">
                Financial Literacy · Field Guides
              </div>
              <h1 className="font-heading font-bold text-4xl md:text-5xl text-gold tracking-tight mb-4 max-w-md">
                How We Got Here
              </h1>
              <p className="font-sans text-lg text-stone max-w-md">
                A set of straightforward guides on the decisions that come up when planning for retirement, especially the years before everything gets simpler at 65.
              </p>
            </div>

            {/* Origin note */}
            <div className="mb-10 space-y-4">
              <p className="font-sans text-lg text-charcoal max-w-[58ch]">This section is a little different from the rest of the site.</p>
              <p className="font-sans text-lg text-charcoal max-w-[58ch]">
                Most of what's here started as retirement planning for one person. A friend asked a simple question about health insurance before Medicare, the answer turned into a full write-up, and that write-up made it obvious there was a lot more worth explaining the same way. This section is the result.
              </p>
            </div>

            {/* Difference callout */}
            <div className="mb-12 px-6 py-5 md:px-7 bg-cream border-l-[3px] border-info rounded-sm">
              <div className="font-data text-[0.6875rem] uppercase tracking-[0.12em] text-info mb-2.5">
                A note on how these are written
              </div>
              <p className="font-sans text-[0.9375rem] text-ash leading-relaxed">
                The rest of this site draws on lived experience: mistakes made, lessons learned the hard way. Most of what's below hasn't happened yet; it's still ahead. So instead of anecdotes, these guides are just the mechanics: what the decision actually is, how it works, where people trip up, and what to check before you act.
              </p>
              <p className="font-sans text-[0.9375rem] text-ash leading-relaxed mt-3">
                No embellishment, no "here's when I got it wrong." Just a clear explanation, written for someone with a decent financial foundation but no reason to have gone deep on any of this before.
              </p>
            </div>

            {/* Guide groups */}
            <div className="space-y-11 mb-8">
              {guideGroups.map((group) => {
                const groupGuides = guides.filter((g) => g.group === group.id);
                return (
                  <div key={group.id}>
                    <div className="flex items-baseline gap-3.5 mb-4">
                      <h2 className="font-heading font-bold text-lg text-charcoal whitespace-nowrap">{group.label}</h2>
                      <span className="flex-1 h-px bg-stone/20" />
                    </div>
                    <div className="grid gap-2.5">
                      {groupGuides.map((guide) => (
                        <GuideCard key={guide.slug} guide={guide} />
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Disclaimer */}
            <div className="px-6 py-4 border border-dashed border-stone/30 rounded-sm mb-16">
              <p className="font-sans text-[0.8125rem] text-ash italic">
                General education, not personalized advice. Every situation is different; talk to a CPA, financial planner, or the relevant professional before making decisions based on anything here.
              </p>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}

export default FinancialLiteracyPage;
