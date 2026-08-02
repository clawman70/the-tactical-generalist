import { Link } from 'react-router-dom';
import { ArrowUpRight, BookOpen, PlayCircle } from 'lucide-react';
import { pillarStyles } from '../data/content';

/**
 * ArticleCard — Shared article card used by ContentFeed, ArticlesPage, and
 * PillarPage. `isTeaser` marks one of the site-wide newest-10 articles
 * (excerpt-only, links out to Substack for the full piece) with a "Preview"
 * pill — full articles (the majority) are left unmarked.
 */
function ArticleCard({ item, isTeaser = false, extraClassName = '' }) {
  const style = pillarStyles[item.pillar];
  const FormatIcon = item.format === 'video' ? PlayCircle : BookOpen;

  return (
    <Link
      to={`/articles/${item.slug}`}
      className={`${extraClassName} group bg-warm-white rounded-2xl p-6 border border-stone/20 hover:border-bronze transition-colors flex flex-col gap-4 shadow-sm`}
    >
      {/* Pillar tag + preview pill + format icon */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className={`font-data text-xs px-2 py-1 rounded-sm ${style.bg} ${style.border} ${style.text} border`}>
            {style.label}
          </span>
          {isTeaser && (
            <span className="font-data text-xs px-2 py-1 rounded-sm bg-stone/10 border border-stone/30 text-stone">
              Preview
            </span>
          )}
        </div>
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
}

export default ArticleCard;
