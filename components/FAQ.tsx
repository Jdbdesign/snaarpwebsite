import type { ReactNode } from 'react';
import { RevealSection } from '@/components/reveal/RevealSection';
import { FAQAccordion } from '@/components/FAQAccordion';
import { Price } from '@/components/currency/Price';

interface FaqItem {
  key: string;
  q: ReactNode;
  a: ReactNode;
  open?: boolean;
}

const FAQS: FaqItem[] = [
  {
    key: 'plan-included',
    q: <>What does the <Price amount={2} /> plan include?</>,
    a: (
      <>
        <Price amount={2} /> is the starting price of our Starter plan, per user per month — not a limited-time trial. It includes access to the Stack; more plans with additional storage, seats and premium apps are on the way. You’ll always see the price before anything changes.
      </>
    ),
    open: true,
  },
  {
    key: 'all-apps',
    q: 'Do I have to use all 27 apps?',
    a: 'No. Every app is included in the Stack, but your team only needs to switch on what it actually uses. Turn apps on or off per user from the admin console.',
  },
  {
    key: 'migration',
    q: 'Can I move my existing email and files over?',
    a: 'Yes. Snaarp Mail and Work Drive both include guided migration from Gmail, Outlook and most common storage providers.',
  },
  {
    key: 'books-vs-accounting',
    q: 'What’s the difference between Books and Accounting Software?',
    a: 'Books covers everyday invoicing and bookkeeping. Accounting Software adds full double-entry accounting and financial reporting for teams that have outgrown the basics.',
  },
  {
    key: 'team-of-one',
    q: 'Is this suitable for a team of one?',
    a: 'Yes — solo founders use the Stack to replace half a dozen separate subscriptions with one. Pricing scales down with your team size.',
  },
];

export function FAQ() {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-24">
      <RevealSection>
        <div className="flex flex-col items-center text-center mb-10">
          <div className="badge-pill inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs uppercase mb-5" data-reveal data-reveal-group="faq">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <circle cx="12" cy="12" r="10" />
              <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
              <line x1="12" y1="17" x2="12.01" y2="17" />
            </svg>
            Questions
          </div>
          <h2 className="faq-heading" data-reveal data-reveal-group="faq">Before You Start</h2>
        </div>

        <div className="faq-container" data-reveal data-reveal-group="faq">
          <FAQAccordion>
            <div className="faq-list">
              {FAQS.map((item) => (
                <details key={item.key} className="faq-item" open={item.open}>
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
