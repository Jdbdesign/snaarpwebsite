import type { ReactNode } from 'react';
import type { LucideIcon } from 'lucide-react';
import { RevealSection } from '@/components/reveal/RevealSection';

export interface FeatureCardRowItem {
  Icon: LucideIcon;
  title: string;
  desc: string;
}

interface FeatureCardRowProps {
  revealGroup: string;
  eyebrow?: string;
  headline: string;
  subtext?: string;
  cards: FeatureCardRowItem[];
  visual: ReactNode;
  reverse?: boolean;
  altBackground?: boolean;
  className?: string;
}

// Alternating "visual + content" row, like <AlternatingFeatureRow>, but the
// content side renders clean minimal cards with a line-art icon badge
// instead of a numbered list — a lighter-weight variant for product pages
// that want visual variety across their feature rows.
export function FeatureCardRow({
  revealGroup,
  eyebrow,
  headline,
  subtext,
  cards,
  visual,
  reverse = false,
  altBackground = false,
  className,
}: FeatureCardRowProps) {
  return (
    <section className={`py-16 lg:py-24 ${altBackground ? 'sec-alt-bg' : ''} ${className ?? ''}`}>
      <RevealSection className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className={`sec-alt-row${reverse ? ' sec-alt-row-reverse' : ''}`}>
          <div className="sec-alt-row-visual" data-reveal data-reveal-group={revealGroup}>
            {visual}
          </div>

          <div className="sec-alt-row-content">
            {eyebrow && (
              <p className="sec-alt-row-eyebrow" data-reveal data-reveal-group={revealGroup}>
                {eyebrow}
              </p>
            )}
            <h2 className="sec-alt-row-heading" data-reveal data-reveal-group={revealGroup}>
              {headline}
            </h2>
            {subtext && (
              <p className="sec-alt-row-subtext" data-reveal data-reveal-group={revealGroup}>
                {subtext}
              </p>
            )}

            <div className="sec-feature-card-list">
              {cards.map((card) => (
                <div key={card.title} className="sec-feature-card" data-reveal data-reveal-group={revealGroup} data-reveal-batch={`${revealGroup}-cards`}>
                  <span className="sec-feature-card-icon" aria-hidden="true">
                    <card.Icon size={18} strokeWidth={1.6} />
                  </span>
                  <div>
                    <p className="sec-feature-card-title">{card.title}</p>
                    <p className="sec-feature-card-desc">{card.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </RevealSection>
    </section>
  );
}
