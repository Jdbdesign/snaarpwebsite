import { Check } from 'lucide-react';
import { RevealSection } from '@/components/reveal/RevealSection';
import { Price } from '@/components/currency/Price';

const CHECKLIST = [
  'Includes all 20+ apps',
  'All features & integrations',
  'AI included',
  '14-day free trial',
  'Cancel anytime',
];

export function SimplePlanCTA() {
  return (
    <section className="spc-section py-16 lg:py-24">
      <RevealSection className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="spc-grid">
          <div className="spc-card" data-reveal data-reveal-group="spc">
            <h3 className="spc-plan-heading">Simple Plan. Incredible<br className="hidden lg:inline" /> Value</h3>
            <p className="spc-plan-subtext">All app. All features. Unbeatable price</p>
            <div className="spc-plan-body">
              <ul className="spc-checklist">
                {CHECKLIST.map((item) => (
                  <li key={item} className="spc-checklist-item">
                    <span className="spc-check" aria-hidden="true">
                      <Check size={16} strokeWidth={2.75} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="spc-price-block">
                <span className="spc-badge">Best Value</span>
                <p className="spc-price"><Price amount={2} /></p>
                <p className="spc-price-note">per user per month</p>
              </div>
            </div>
          </div>

          <div className="spc-card" data-reveal data-reveal-group="spc">
            <h3 className="spc-cta-heading">Ready To Get Started?</h3>
            <p className="spc-cta-subtext">Create your account in less than 2 minutes.</p>
            <div className="spc-cta-btn-wrap">
              <a href="#" className="spc-cta-btn">Start Free for 14 Days</a>
            </div>
            <div className="spc-mockup-wrap">
              <img
                src="/assets/images/phone-mockup.svg"
                alt="Snaarp workspace shown on a tablet and phone"
                className="spc-mockup"
                width={382}
                height={258}
              />
            </div>
          </div>
        </div>
      </RevealSection>
    </section>
  );
}
