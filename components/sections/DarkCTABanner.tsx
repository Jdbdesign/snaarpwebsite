import type { ReactNode } from 'react';
import { RevealSection } from '@/components/reveal/RevealSection';

interface DarkCTABannerProps {
  headline: ReactNode;
  subtext: string;
  pills: string[];
  className?: string;
}

// Generic dark, rounded-inset CTA banner with floating pill decorations.
export function DarkCTABanner({ headline, subtext, pills, className }: DarkCTABannerProps) {
  return (
    <section className={`max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-24 ${className ?? ''}`}>
      <RevealSection className="sec-dark-cta">
        <div className="sec-dark-cta-content">
          <h2 className="sec-dark-cta-heading" data-reveal data-reveal-group="dark-cta">
            {headline}
          </h2>
          <p className="sec-dark-cta-subtext" data-reveal data-reveal-group="dark-cta">
            {subtext}
          </p>
        </div>

        <div className="sec-dark-cta-pills" aria-hidden="true">
          {pills.map((pill) => (
            <span key={pill} className="sec-dark-cta-pill" data-reveal data-reveal-group="dark-cta" data-reveal-batch="dark-cta-pills">
              {pill}
            </span>
          ))}
        </div>
      </RevealSection>
    </section>
  );
}
