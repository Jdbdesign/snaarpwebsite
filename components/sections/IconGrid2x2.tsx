import { RevealSection } from '@/components/reveal/RevealSection';
import type { LucideIcon } from 'lucide-react';

export interface IconGridItem {
  Icon: LucideIcon;
  title: string;
  desc: string;
  accent?: 'mint' | 'amber' | 'rose' | 'teal';
}

interface IconGrid2x2Props {
  eyebrow?: string;
  headline: string;
  items: IconGridItem[];
  ctaLabel: string;
  ctaHref?: string;
  className?: string;
}

// Generic 2x2 icon-card grid with a centered heading and a CTA below.
export function IconGrid2x2({ eyebrow, headline, items, ctaLabel, ctaHref = '#', className }: IconGrid2x2Props) {
  return (
    <section className={`py-16 lg:py-24 ${className ?? ''}`}>
      <RevealSection className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col items-center text-center mb-12">
          {eyebrow && (
            <div className="badge-pill inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs uppercase mb-5" data-reveal data-reveal-group="icon-grid">
              {eyebrow}
            </div>
          )}
          <h2 className="sec-icons-heading" data-reveal data-reveal-group="icon-grid">
            {headline}
          </h2>
        </div>

        <div className="sec-icon-grid-2x2">
          {items.map((item) => (
            <div key={item.title} className="sec-icon-grid-card" data-accent={item.accent} data-reveal data-reveal-group="icon-grid" data-reveal-batch="icon-grid-cards">
              <div className="sec-icon-grid-badge" aria-hidden="true">
                <item.Icon size={22} strokeWidth={1.8} />
              </div>
              <h3 className="sec-icon-grid-title">{item.title}</h3>
              <p className="sec-icon-grid-desc">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10" data-reveal data-reveal-group="icon-grid">
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
