import { RevealSection } from '@/components/reveal/RevealSection';

const FAQS = [
  { q: 'Can someone walk me through it before I pay anything?', a: 'Yes. Ask for a walkthrough in the form and we\u2019ll send times \u2014 20 minutes, screen-shared, focused on your actual workflow rather than a generic tour. No card needed, and we won\u2019t chase you afterwards.' },
  { q: 'I\u2019m already a customer and something\u2019s broken. Is this the right place?', a: 'It works, but you\u2019ll get a faster answer in-app \u2014 the support widget passes your account, plan and recent activity along, so nobody has to ask you for screenshots first. For anything affecting multiple people, check the status page before writing.' },
  { q: 'Will you help us migrate our existing data?', a: 'Tell us what you\u2019re moving off and roughly how much of it there is. Standard imports (CSV, contacts, documents) are self-serve and documented; anything messier we\u2019ll look at with you and say honestly whether it\u2019s an afternoon or a project.' },
  { q: 'We need a DPA, security review or supplier questionnaire completed.', a: 'Send it to dpo@snaarp.com and mention your deadline. The DPA, sub-processor list and data-residency details are published in the trust centre, which answers most questionnaires without anyone filling in a spreadsheet.' },
  { q: 'Do you offer phone support?', a: 'On the Business plan, yes, with a named contact. On other plans we\u2019ll happily jump on a call when a written thread isn\u2019t getting anywhere \u2014 we just don\u2019t run a phone queue, because email and chat get you a real answer faster.' },
  { q: 'What happens to what I put in this form?', a: 'It reaches the team that can answer it, and is stored in EU regions for as long as we need it to help you. We don\u2019t sell it, share it with data brokers, or add you to marketing lists unless you ticked the box. Ask us to delete it any time.' },
];

export function ContactFAQ() {
  return (
    <section className="contact-section">
      <RevealSection className="max-w-[820px] mx-auto px-6 lg:px-10">
        <div className="text-center" data-reveal>
          <p className="contact-eyebrow">Before you write in</p>
          <h2 className="contact-section-heading">Questions we get most</h2>
        </div>

        <div className="contact-faq-list" data-reveal>
          {FAQS.map((faq) => (
            <details key={faq.q} className="contact-faq-item">
              <summary className="contact-faq-q">
                {faq.q}
                <svg className="contact-faq-chevron" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </summary>
              <p className="contact-faq-a">{faq.a}</p>
            </details>
          ))}
        </div>
      </RevealSection>
    </section>
  );
}
