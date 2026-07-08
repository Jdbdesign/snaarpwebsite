import { RevealSection } from '@/components/reveal/RevealSection';

const CARDS = [
  { img: '/assets/images/business-email.png', alt: 'Business Email interface showing inbox with custom domain address', title: 'Business Email', desc: 'Custom domains, shared inboxes, calendars and contacts.' },
  { img: '/assets/images/crm-sales.png', alt: 'CRM sales pipeline dashboard with deal stages and revenue', title: 'CRM & Sales', desc: 'Pipeline, outreach, verified leads and follow-ups.' },
  { img: '/assets/images/password-manager.png', alt: 'Password manager vault showing saved logins', title: 'Password Manager', desc: 'Shared vaults, access control and login security.' },
  { img: '/assets/images/cloud-storage.png', alt: 'Cloud storage file browser with folders and documents', title: 'Cloud Storage', desc: 'Files, docs, sheets and slides, stored together.' },
  { img: '/assets/images/video-meetings.png', alt: 'Video meeting call interface with participants and screen share', title: 'Video Meetings', desc: 'HD calls, screen share, notes and recordings.' },
  { img: '/assets/images/accounting-software.png', alt: 'Accounting software financial overview with invoices and expenses', title: 'Accounting Software', desc: 'Invoicing, bookkeeping and financial reporting.' },
];

export function BuiltToReplace() {
  return (
    <section className="closer-look-section py-16 lg:py-24">
      <RevealSection className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Section header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="closer-look-badge inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs uppercase mb-5" data-reveal data-reveal-group="closer-look">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <path d="M3 7L12 13L21 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            A Closer Look
          </div>

          <h2 className="closer-look-heading mb-4" data-reveal data-reveal-group="closer-look">
            Built To Replace <span className="closer-look-heading-accent">The Tools</span> You’re Already Tolerating.
          </h2>

          <p className="closer-look-subtext" data-reveal data-reveal-group="closer-look">
            Transform how your team communicates with powerful tools designed for the way you work.
          </p>
        </div>

        {/* 3x2 card grid */}
        <div className="closer-look-grid">
          {CARDS.map((card) => (
            <div key={card.title} className="closer-look-card" data-reveal data-reveal-group="closer-look" data-reveal-batch="closer-look-cards">
              <div className="closer-look-illustration">
                <img src={card.img} alt={card.alt} className="closer-look-illustration-img" />
              </div>
              <h3 className="closer-look-card-title">{card.title}</h3>
              <p className="closer-look-card-desc">{card.desc}</p>
            </div>
          ))}
        </div>
      </RevealSection>
    </section>
  );
}
