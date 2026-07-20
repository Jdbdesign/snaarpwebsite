import type { ReactNode } from 'react';
import { RevealSection } from '@/components/reveal/RevealSection';
import { FAQAccordion } from '@/components/FAQAccordion';
import { Price } from '@/components/currency/Price';

const FAQS: { q: ReactNode; a: ReactNode; open?: boolean }[] = [
  {
    q: 'How is this different from Meet?',
    a: 'Teams is for chat, channels, and file sharing. Meet is Snaarp’s separate video calling app — you can jump from a Teams channel straight into a Meet call.',
    open: true,
  },
  {
    q: 'Is there a limit on channels or message history?',
    a: 'No — unlimited channels and unlimited searchable history on every plan.',
  },
  {
    q: 'Can I make a channel private?',
    a: 'Yes — channels can be public (open to anyone on the team) or private (invite-only).',
  },
  {
    q: 'Do files stay attached to the conversation?',
    a: 'Yes — anything shared in a channel stays linked to that thread, and is searchable later.',
  },
  {
    q: <>Is Teams included in the <Price amount={2} /> Starter plan?</>,
    a: 'Yes — Teams is included in every plan, no add-on required.',
  },
];

export function TeamsFAQ() {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-24">
      <RevealSection>
        <div className="flex flex-col items-center text-center mb-10">
          <div className="badge-pill inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs uppercase mb-5" data-reveal data-reveal-group="teams-faq">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <circle cx="12" cy="12" r="10" />
              <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
              <line x1="12" y1="17" x2="12.01" y2="17" />
            </svg>
            Questions
          </div>
          <h2 className="faq-heading" data-reveal data-reveal-group="teams-faq">Teams, answered.</h2>
        </div>

        <div className="faq-container" data-reveal data-reveal-group="teams-faq">
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
