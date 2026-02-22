import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { ArrowUpRight, PlayCircle, BookOpen } from 'lucide-react';
import { latestContent, pillarStyles } from '../data/content';

gsap.registerPlugin(ScrollTrigger);

/**
 * ContentFeed — Displays the latest content cards from Substack.
 * Data is sourced from src/data/content.js — edit that file to update what's shown.
 */
function ContentFeed() {
  const container = useRef(null);

  useGSAP(() => {
    gsap.from('.feed-card', {
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: container.current,
        start: 'top 75%',
      },
    });
  }, { scope: container });

  return (
    <section id="content" ref={container} className="py-32 px-8 bg-cream/50">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center md:text-left">
          <h2 className="font-heading font-bold text-5xl md:text-7xl text-charcoal tracking-tighter mb-6">Latest Content</h2>
          <p className="font-sans text-xl text-slate max-w-2xl">Recent videos and articles across all four pillars.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {latestContent.map((item, i) => {
            const style = pillarStyles[item.pillar];
            const FormatIcon = item.format === 'video' ? PlayCircle : BookOpen;

            return (
              <a
                key={i}
                href={item.url}
                target="_blank"
                rel="noreferrer"
                className="feed-card group bg-warm-white rounded-2xl p-6 border border-stone/20 hover:border-bronze transition-colors flex flex-col gap-4 shadow-sm"
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
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ContentFeed;
