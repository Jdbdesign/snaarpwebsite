import type { ReactNode } from 'react';
import { RevealSection } from '@/components/reveal/RevealSection';
import { Price } from '@/components/currency/Price';

interface FinalCTAProps {
  eyebrow?: ReactNode;
  heading?: ReactNode;
  copy?: ReactNode;
  buttonLabel?: ReactNode;
}

export function FinalCTA({
  eyebrow = 'Ready When You Are',
  heading = <>Plans start at <Price amount={1} />. Every app included.</>,
  copy = 'No separate bills, no ten different logins to remember. Just one Stack, running your whole business.',
  buttonLabel = <>Start the Stack for <Price amount={1} /></>,
}: FinalCTAProps = {}) {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-24">
      <RevealSection className="final-cta-card">
        <p className="final-cta-eyebrow" data-reveal data-reveal-group="final-cta">{eyebrow}</p>
        <h2 className="final-cta-heading" data-reveal data-reveal-group="final-cta">{heading}</h2>
        <p className="final-cta-copy" data-reveal data-reveal-group="final-cta">{copy}</p>
        <a href="#" className="final-cta-btn" data-reveal data-reveal-group="final-cta">{buttonLabel}</a>
      </RevealSection>
    </section>
  );
}
