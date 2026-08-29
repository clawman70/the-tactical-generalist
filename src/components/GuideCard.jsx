import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

/**
 * GuideCard — Row-style link card for a single guide on the Financial
 * Literacy landing page. Deliberately not <ArticleCard> reused: same card
 * anatomy, but a row layout (title + description inline, not a grid tile)
 * matching the reference guides' own "quick-scan list" design, and the
 * section's info-blue accent instead of bronze/pillar coloring — the visual
 * signal that this section reads as reference material, not narrative.
 */
function GuideCard({ guide }) {
  const isLive = Boolean(guide.blocks);

  return (
    <Link
      to={`/financial-literacy/${guide.slug}`}
      className="group relative flex items-center gap-4 md:gap-5 bg-white border border-stone/20 rounded-sm px-5 py-4 md:px-6 md:py-[18px] overflow-hidden transition-all duration-200 hover:border-info md:hover:translate-x-[3px]"
    >
      <span className="absolute left-0 top-0 bottom-0 w-[3px] bg-info scale-y-0 group-hover:scale-y-100 transition-transform duration-200 origin-center" />

      <div className="flex-1 min-w-0">
        <div className="font-heading font-bold text-[1.03125rem] text-charcoal leading-snug mb-1">
          {guide.title}
        </div>
        <div className="font-sans text-sm text-ash">{guide.description}</div>
      </div>

      <span
        className={`hidden sm:inline-block flex-shrink-0 font-data text-[0.6875rem] uppercase tracking-[0.08em] px-2.5 py-1 rounded-full whitespace-nowrap ${
          isLive ? 'bg-info text-warm-white' : 'text-ash bg-cream border border-stone/20'
        }`}
      >
        {isLive ? 'Read guide' : 'Coming soon'}
      </span>

      <ArrowRight className="w-[18px] h-[18px] flex-shrink-0 text-stone group-hover:text-info group-hover:translate-x-[3px] transition-all duration-200" />
    </Link>
  );
}

export default GuideCard;
