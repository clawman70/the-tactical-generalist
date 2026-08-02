import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { ArrowUpRight } from 'lucide-react';
import { latestContent, getRecentSlugs } from '../data/content';
import ArticleCard from './ArticleCard';

gsap.registerPlugin(ScrollTrigger);

/**
 * ContentFeed — Displays the latest content cards from Substack.
 * Data is sourced from src/data/content.js — edit that file to update what's shown.
 */
function ContentFeed() {
  const container = useRef(null);

  // Show only the 4 most recent articles, sorted by date descending
  const recentArticles = [...latestContent]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 4);
  const teaserSlugs = getRecentSlugs(latestContent, 10);

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
          <p className="font-sans text-xl text-slate max-w-2xl">Recent articles across all five pillars. Browse the full archive below.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {recentArticles.map((item) => (
            <ArticleCard key={item.slug} item={item} isTeaser={teaserSlugs.has(item.slug)} extraClassName="feed-card" />
          ))}
        </div>

        {/* View All link */}
        <div className="mt-10 text-center">
          <Link to="/articles" className="font-heading font-semibold text-bronze hover:text-bronze-dark transition-colors inline-flex items-center gap-2">
            View All Articles
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ContentFeed;
