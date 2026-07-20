import { RevealSection } from '@/components/reveal/RevealSection';
import { Price } from '@/components/currency/Price';

export function HomeFinalCTA() {
  return (
    <section className="home-final-cta-section">
      <RevealSection className="max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-24 home-final-cta-inner">
        <p className="home-final-cta-eyebrow" data-reveal data-reveal-group="home-final-cta">Start in Minutes</p>
        <h2 className="home-final-cta-heading" data-reveal data-reveal-group="home-final-cta">
          Ready to transform how<br className="hidden sm:inline" /> you work?
        </h2>
        <p className="home-final-cta-copy" data-reveal data-reveal-group="home-final-cta">
          Join thousands of businesses already using Snaarp to save time, reduce costs, and grow faster.
        </p>
        <a href="#" className="home-final-cta-btn" data-reveal data-reveal-group="home-final-cta">
          Start the Stack for <Price amount={2} />
        </a>
      </RevealSection>
    </section>
  );
}
