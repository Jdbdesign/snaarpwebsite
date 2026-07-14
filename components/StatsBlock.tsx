import { RevealSection } from '@/components/reveal/RevealSection';
import { Price } from '@/components/currency/Price';

export function StatsBlock() {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-24">
      <div className="stats-card px-8 py-12 lg:px-16 lg:py-16">
        <RevealSection>
          <h2 className="stats-heading" data-reveal data-reveal-group="stats">
            <span className="stats-heading-line1">Every App Your Business Needs.</span>
            <span className="stats-heading-accent">One Login, One Price.</span>
          </h2>

          <div className="stats-grid">
            <div className="stats-item" data-reveal data-reveal-group="stats" data-reveal-batch="stats-items">
              <p className="stats-number">20+</p>
              <p className="stats-label">apps, one login</p>
            </div>
            <div className="stats-item" data-reveal data-reveal-group="stats" data-reveal-batch="stats-items">
              <p className="stats-number">1</p>
              <p className="stats-label">invoice</p>
            </div>
            <div className="stats-item" data-reveal data-reveal-group="stats" data-reveal-batch="stats-items">
              <p className="stats-number"><Price amount={1} /></p>
              <p className="stats-label">per month, No hidden charges</p>
            </div>
            <div className="stats-item" data-reveal data-reveal-group="stats" data-reveal-batch="stats-items">
              <p className="stats-number">1min</p>
              <p className="stats-label">setup migrate from Gmail or Outlook fast</p>
            </div>
          </div>
        </RevealSection>
      </div>
    </section>
  );
}
