import { RevealSection } from '@/components/reveal/RevealSection';
import { FAQAccordion } from '@/components/FAQAccordion';

const FAQS = [
  {
    q: 'Do participants need a Snaarpmeet account to join?',
    a: 'No. Anyone with the meeting link can join directly from their browser. Only the host needs an account.',
    open: true,
  },
  {
    q: 'Is my meeting data private?',
    a: 'Yes. All calls are encrypted end-to-end, and recordings or transcripts are only ever visible to your team.',
  },
  {
    q: 'How does the free trial work?',
    a: 'Start free, no card required. You get full access to every feature for 14 days before choosing a plan.',
  },
  {
    q: "What's the participant limit?",
    a: 'Up to 100 participants per call on the free plan, with higher limits available on team and enterprise plans.',
  },
  {
    q: 'Can I record my meetings?',
    a: 'Yes. Record to the cloud or download locally, with auto-generated chapters and a searchable transcript.',
  },
  {
    q: 'What happens if my internet drops mid-meeting?',
    a: 'Snaarpmeet automatically reconnects you to the call and resyncs audio and video the moment your connection returns.',
  },
  {
    q: 'Is there a mobile app?',
    a: 'Yes, for iOS and Android — or join straight from your mobile browser with no install required.',
  },
  {
    q: 'Do you offer team or enterprise plans?',
    a: 'Yes. Team and enterprise plans add SSO, admin controls, and dedicated support — get in touch for pricing.',
  },
];

export function MeetFAQ() {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-24">
      <RevealSection>
        <div className="flex flex-col items-center text-center mb-10">
          <p className="meet-faq-eyebrow" data-reveal data-reveal-group="meet-faq">FAQ</p>
          <h2 className="meet-faq-heading" data-reveal data-reveal-group="meet-faq">
            Questions, <span className="meet-faq-heading-accent">answered.</span>
          </h2>
        </div>

        <div className="meet-faq-container" data-reveal data-reveal-group="meet-faq">
          <FAQAccordion>
            <div className="meet-faq-list">
              {FAQS.map((item) => (
                <details key={item.q} className="meet-faq-item faq-item" open={item.open}>
                  <summary className="meet-faq-summary">
                    <span className="meet-faq-question">{item.q}</span>
                    <span className="meet-faq-icon" aria-hidden="true">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path d="M6 1v10M1 6h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                      </svg>
                    </span>
                  </summary>
                  <p className="meet-faq-answer">{item.a}</p>
                </details>
              ))}
            </div>
          </FAQAccordion>
        </div>
      </RevealSection>
    </section>
  );
}
