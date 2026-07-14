import { RevealSection } from '@/components/reveal/RevealSection';

const FEATURE_CARDS = [
  {
    src: '/assets/images/mail/unlimited-email-addresses.svg',
    title: 'Unlimited Email Addresses',
    desc: 'Create unlimited professional email addresses (sales@, hr@, support@) for your business at no extra cost.',
  },
  {
    src: '/assets/images/mail/custom-domain-email.svg',
    title: 'Custom Domain Email',
    desc: 'Send emails from your own domain to build client trust and reinforce your brand.',
  },
  {
    src: '/assets/images/mail/smart-labels-categories.svg',
    title: 'Smart Labels & Categories',
    desc: 'Automatically categorize your inbox using intelligent labels and natural language sorting rules.',
  },
  {
    src: '/assets/images/mail/shared-inboxes-for-teams.svg',
    title: 'Shared Inboxes for Teams',
    desc: 'Collaborate seamlessly with shared inboxes so your team can manage addresses like support@ without overlapping.',
  },
];

export function MailFeatureGrid() {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-24">
      <RevealSection>
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="mail-features-heading" data-reveal data-reveal-group="mail-feature-grid">
            Everything Your <span className="mail-features-heading-accent">Business</span>{' '}
            <span className="mail-features-heading-accent">Email</span> Needs
          </h2>
          <p className="mail-features-subhead" data-reveal data-reveal-group="mail-feature-grid">
            From unlimited mailboxes to AI-powered replies, Snaarp mail gives your team the tools to communicate faster and more professionally.
          </p>
        </div>

        <div className="mail-features-grid">
          {FEATURE_CARDS.map(({ src, title, desc }) => (
            <div
              key={title}
              className="mail-features-card"
              data-reveal
              data-reveal-group="mail-feature-grid"
              data-reveal-batch="mail-feature-grid-cards"
            >
              <img src={src} alt="" className="mail-features-card-image" aria-hidden="true" />
              <div className="mail-features-card-body">
                <h3 className="mail-features-card-title">{title}</h3>
                <p className="mail-features-card-desc">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </RevealSection>
    </section>
  );
}
