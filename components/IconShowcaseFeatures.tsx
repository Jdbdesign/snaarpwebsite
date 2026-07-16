import { Check } from 'lucide-react';
import { RevealSection } from '@/components/reveal/RevealSection';

const FEATURES = [
  {
    title: 'One Login',
    desc: 'Sign in once and every app in the Stack is already there, ready to go.',
  },
  {
    title: 'Zero Setup',
    desc: 'No install, no IT ticket — just log in and start working.',
  },
  {
    title: 'Fully Synced',
    desc: 'Contacts, mail, and meetings stay connected automatically, everywhere.',
  },
];

// 3-up feature strip directly beneath the icon showcase video card, ahead of
// "Elevate Your Inbox" (BuiltForModernBusinesses).
export function IconShowcaseFeatures() {
  return (
    <section className="icon-showcase-features-section pt-0 pb-16 lg:pb-24">
      <RevealSection className="max-w-6xl mx-auto px-6 lg:px-10">
        <div className="icon-showcase-features-grid">
          {FEATURES.map((feature) => (
            <div
              key={feature.title}
              className="icon-showcase-feature"
              data-reveal
              data-reveal-group="icon-showcase-features"
              data-reveal-batch="icon-showcase-features-items"
            >
              <div className="icon-showcase-feature-head">
                <span className="icon-showcase-feature-check" aria-hidden="true">
                  <Check size={14} strokeWidth={3} />
                </span>
                <h3 className="icon-showcase-feature-title">{feature.title}</h3>
              </div>
              <p className="icon-showcase-feature-desc">{feature.desc}</p>
            </div>
          ))}
        </div>
      </RevealSection>
    </section>
  );
}
