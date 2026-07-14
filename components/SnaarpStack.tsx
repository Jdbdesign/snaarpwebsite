import { RevealSection } from '@/components/reveal/RevealSection';
import { Price } from '@/components/currency/Price';

export function SnaarpStack() {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-24">
      <div className="stack-card">
        <RevealSection className="stack-grid">
          <div className="stack-left">
            <p className="stack-eyebrow" data-reveal data-reveal-group="stack">
              <span className="stack-eyebrow-dot" aria-hidden="true" />The Snaarp Stack
            </p>

            <h2 className="stack-heading" data-reveal data-reveal-group="stack">
              <span className="stack-heading-line1">One subscription. <span className="stack-heading-accent">20+ apps.</span></span>
              <span className="stack-heading-line2">No add-ons to chase.</span>
            </h2>

            <p className="stack-copy" data-reveal data-reveal-group="stack">Most teams buy email from one place, a CRM from another, and a password manager from a third — then pay full price for each. The Stack replaces all of it.</p>

            <ul className="stack-checklist" data-reveal data-reveal-group="stack">
              <li>
                <svg className="stack-check-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 13l4 4L19 7" /></svg>
                Every app on this page, for every user on your team
              </li>
              <li>
                <svg className="stack-check-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 13l4 4L19 7" /></svg>
                One login, one admin console, one invoice
              </li>
              <li>
                <svg className="stack-check-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 13l4 4L19 7" /></svg>
                New apps added to the Stack at no extra cost
              </li>
              <li>
                <svg className="stack-check-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 13l4 4L19 7" /></svg>
                UK &amp; EU hosting options, GDPR-ready by default
              </li>
              <li>
                <svg className="stack-check-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 13l4 4L19 7" /></svg>
                Cancel or downgrade anytime, no lock-in contract
              </li>
            </ul>
          </div>

          <div className="stack-right">
            <div className="stack-price-card" data-reveal data-reveal-group="stack">
              <p className="stack-price"><Price amount={1} /></p>
              <p className="stack-price-label">Starter plan, per user / month*</p>
              <p className="stack-price-copy">Higher plans with more storage, seats and premium apps are on the way — you’ll always see the price before anything changes.</p>
              <a href="#" className="stack-price-btn">Start the Stack for <Price amount={1} /></a>
              <p className="stack-price-fine">*Introductory offer for new business accounts. Illustrative pricing — confirm current rates on the pricing page.</p>
            </div>
          </div>
        </RevealSection>
      </div>
    </section>
  );
}
