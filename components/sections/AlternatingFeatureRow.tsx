import type { ReactNode } from 'react';
import { RevealSection } from '@/components/reveal/RevealSection';

export interface AlternatingFeatureRowItem {
  title: string;
  desc: string;
}

interface AlternatingFeatureRowProps {
  revealGroup: string;
  eyebrow?: string;
  headline: string;
  subtext?: string;
  items: AlternatingFeatureRowItem[];
  visual: ReactNode;
  reverse?: boolean;
  altBackground?: boolean;
  className?: string;
}

// Generic alternating "visual + numbered list" row. The visual is passed in
// as a slot so each page can supply its own mock UI without this component
// knowing anything about it — reusable as-is for Contacts and other pages.
export function AlternatingFeatureRow({
  revealGroup,
  eyebrow,
  headline,
  subtext,
  items,
  visual,
  reverse = false,
  altBackground = false,
  className,
}: AlternatingFeatureRowProps) {
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

            <ul className="sec-alt-row-list">
              {items.map((item, i) => (
                <li key={item.title} className="sec-alt-row-item" data-reveal data-reveal-group={revealGroup} data-reveal-batch={`${revealGroup}-items`}>
                  <span className="sec-alt-row-number" aria-hidden="true">{i + 1}</span>
                  <div>
                    <p className="sec-alt-row-item-title">{item.title}</p>
                    <p className="sec-alt-row-item-desc">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </RevealSection>
    </section>
  );
}
