import { RevealSection } from '@/components/reveal/RevealSection';
import type { LucideIcon } from 'lucide-react';

export interface BentoFeatureGridItem {
  Icon: LucideIcon;
  title: string;
  desc: string;
  size?: 'hero' | 'normal';
  accent?: 'mint' | 'amber' | 'rose' | 'teal';
}

interface BentoFeatureGridProps {
  eyebrow?: string;
  headline: string;
  items: BentoFeatureGridItem[];
  ctaLabel: string;
  ctaHref?: string;
  className?: string;
}

// Bento-style feature grid — one larger "hero" cell (mark an item
// size: 'hero') plus smaller supporting cells, instead of a plain, evenly
// sized <IconGrid2x2>. Reusable across product pages that want a more
// asymmetric feature-grid moment.
export function BentoFeatureGrid({ eyebrow, headline, items, ctaLabel, ctaHref = '#', className }: BentoFeatureGridProps) {
  return (
    <section className={`py-16 lg:py-24 ${className ?? ''}`}>
      <RevealSection className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col items-center text-center mb-12">
          {eyebrow && (
            <div className="badge-pill inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs uppercase mb-5" data-reveal data-reveal-group="bento-feature-grid">
              {eyebrow}
            </div>
          )}
          <h2 className="sec-icons-heading" data-reveal data-reveal-group="bento-feature-grid">
            {headline}
          </h2>
        </div>

        <div className="sec-bento-feature-grid">
          {items.map((item) => (
            <div
              key={item.title}
              className={`sec-bento-feature-cell${item.size === 'hero' ? ' sec-bento-feature-cell--hero' : ''}`}
              data-accent={item.accent}
              data-reveal
              data-reveal-group="bento-feature-grid"
              data-reveal-batch="bento-feature-grid-cells"
            >
              <span className="sec-bento-feature-icon" aria-hidden="true">
                <item.Icon size={item.size === 'hero' ? 26 : 22} strokeWidth={1.8} />
              </span>
              <h3 className="sec-bento-feature-title">{item.title}</h3>
              <p className="sec-bento-feature-desc">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10" data-reveal data-reveal-group="bento-feature-grid">
          <a href={ctaHref} className="btn-outline inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 min-h-[44px]">
            {ctaLabel}
            <svg width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden="true">
              <path d="M1 5h11.5M8 1l4.5 4L8 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </RevealSection>
    </section>
  );
}
