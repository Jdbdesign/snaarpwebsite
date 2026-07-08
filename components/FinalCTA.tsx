import { RevealSection } from '@/components/reveal/RevealSection';

export function FinalCTA() {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-24">
      <RevealSection className="final-cta-card">
        <p className="final-cta-eyebrow" data-reveal data-reveal-group="final-cta">Ready When You Are</p>
        <h2 className="final-cta-heading" data-reveal data-reveal-group="final-cta">Plans start at £1. Every app included.</h2>
        <p className="final-cta-copy" data-reveal data-reveal-group="final-cta">No separate bills, no ten different logins to remember. Just one Stack, running your whole business.</p>
        <a href="#" className="final-cta-btn" data-reveal data-reveal-group="final-cta">Start the Stack for £1</a>
      </RevealSection>
    </section>
  );
}
