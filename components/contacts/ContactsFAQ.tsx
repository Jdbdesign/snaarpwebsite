import { RevealSection } from '@/components/reveal/RevealSection';
import { FAQAccordion } from '@/components/FAQAccordion';

const FAQS = [
  {
    q: 'Do I have to manually add contacts to each app?',
    a: 'No — save once in Contacts, or let Snaarp save them automatically from an email or meeting, and it syncs everywhere.',
    open: true,
  },
  {
    q: 'Can I import my existing contacts?',
    a: 'Yes — import from Gmail, Outlook, or a CSV file in a couple of clicks.',
  },
  {
    q: 'What happens to duplicate contacts?',
    a: 'Contacts detects matching emails or phone numbers and merges them automatically, with a review step before anything’s combined.',
  },
  {
    q: 'Can I organize contacts by team or client?',
    a: 'Yes — use tags and groups to filter your list however works for your team.',
  },
  {
    q: 'Is Contacts included in the £1 Starter plan?',
    a: 'Yes — Contacts is included in every plan, no add-on required.',
  },
];

export function ContactsFAQ() {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-24">
      <RevealSection>
        <div className="flex flex-col items-center text-center mb-10">
          <div className="badge-pill inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs uppercase mb-5" data-reveal data-reveal-group="contacts-faq">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <circle cx="12" cy="12" r="10" />
              <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
              <line x1="12" y1="17" x2="12.01" y2="17" />
            </svg>
            Questions
          </div>
          <h2 className="faq-heading" data-reveal data-reveal-group="contacts-faq">Contacts, answered.</h2>
        </div>

        <div className="faq-container" data-reveal data-reveal-group="contacts-faq">
          <FAQAccordion>
            <div className="faq-list">
              {FAQS.map((item) => (
                <details key={item.q} className="faq-item" open={item.open}>
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
