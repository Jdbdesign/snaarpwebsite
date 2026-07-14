import type { ReactNode } from 'react';
import { RevealSection } from '@/components/reveal/RevealSection';
import { FAQAccordion } from '@/components/FAQAccordion';
import { Price } from '@/components/currency/Price';

const FAQS: { q: ReactNode; a: ReactNode; open?: boolean }[] = [
  {
    q: 'How does someone save my card?',
    a: 'They scan your QR code, tap your phone (NFC), or open your shared link — your details save straight into their Contacts.',
    open: true,
  },
  {
    q: 'What happens if I change my job title or number?',
    a: 'Update your card once — every card you’ve already shared reflects the change automatically, no resharing needed.',
  },
  {
    q: 'Do I need a special phone for NFC sharing?',
    a: 'Most modern smartphones support NFC tap-to-share; link and QR sharing work on any device.',
  },
  {
    q: 'Can I see who’s viewed or saved my card?',
    a: 'Yes — Business Card includes basic view, save, and share analytics.',
  },
  {
    q: <>Is Business Card included in the <Price amount={1} /> Starter plan?</>,
    a: 'Yes — included in every plan, no add-on required.',
  },
];

export function BusinessCardFAQ() {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-24">
      <RevealSection>
        <div className="flex flex-col items-center text-center mb-10">
          <div className="badge-pill inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs uppercase mb-5" data-reveal data-reveal-group="bcard-faq">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <circle cx="12" cy="12" r="10" />
              <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
              <line x1="12" y1="17" x2="12.01" y2="17" />
            </svg>
            Questions
          </div>
          <h2 className="faq-heading" data-reveal data-reveal-group="bcard-faq">Business Card, answered.</h2>
        </div>

        <div className="faq-container" data-reveal data-reveal-group="bcard-faq">
          <FAQAccordion>
            <div className="faq-list">
              {FAQS.map((item, index) => (
                <details key={index} className="faq-item" open={item.open}>
                  <summary className="faq-summary">
                    <span className="faq-question">{item.q}</span>
                    <span className="faq-icon" aria-hidden="true">
                      <svg width="12" height="8" viewBox="0 0 10 6" fill="none"><path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    </span>
                  </summary>
                  <p className="faq-answer">{item.a}</p>
                </details>
              ))}
            </div>
          </FAQAccordion>
        </div>
      </RevealSection>
    </section>
  );
}
