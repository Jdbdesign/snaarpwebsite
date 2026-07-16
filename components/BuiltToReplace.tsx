import { RevealSection } from '@/components/reveal/RevealSection';

const ITEMS = [
  {
    title: 'Business Email',
    desc: 'Establish a strong, recognizable brand identity with custom email addresses (e.g. yourname@yourcompany.com) instead of using generic consumer providers.',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="M2 7l10 6 10-6" />
      </svg>
    ),
  },
  {
    title: 'CRM & Sales',
    desc: 'Build a seamless sales pipeline, automate your outreach campaigns, connect with verified leads, and master your follow-ups—all in one place',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="5" width="20" height="14" rx="2" />
        <line x1="2" y1="10" x2="22" y2="10" />
        <line x1="6" y1="15" x2="10" y2="15" />
      </svg>
    ),
  },
  {
    title: 'Password Manager',
    desc: 'Securely store, generate, and auto-fill your most critical credentials across all your devices with end-to-end encryption and zero-knowledge architecture.',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="11" width="18" height="10" rx="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
  },
  {
    title: 'Cloud Storage',
    desc: 'Centralize your digital workspace. Seamlessly store, manage, and share every file, document, sheet, and presentation from one secure, easily accessible platform.',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="3" width="20" height="6" rx="1.5" />
        <rect x="2" y="15" width="20" height="6" rx="1.5" />
        <line x1="6" y1="6" x2="6.01" y2="6" />
        <line x1="6" y1="18" x2="6.01" y2="18" />
      </svg>
    ),
  },
  {
    title: 'Video Meetings',
    desc: 'Connect face-to-face with your team and clients through crystal-clear, lag-free video conferencing from anywhere.',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="6" width="14" height="12" rx="2" />
        <path d="M16 10l6-3v10l-6-3" />
      </svg>
    ),
  },
  {
    title: 'Accounting Software',
    desc: "Streamline your finances. Send professional invoices, automate your bookkeeping, and generate real-time reports to keep your business running smoothly.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M6 2h9l5 5v15a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1z" />
        <line x1="8" y1="12" x2="16" y2="12" />
        <line x1="8" y1="16" x2="16" y2="16" />
      </svg>
    ),
  },
];

export function BuiltToReplace() {
  return (
    <section className="closer-look-section py-16 lg:py-24">
      <RevealSection className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Section header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="closer-look-badge inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs uppercase mb-5" data-reveal data-reveal-group="closer-look">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <path d="M3 7L12 13L21 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            A Closer Look
          </div>

          <h2 className="closer-look-heading mb-4" data-reveal data-reveal-group="closer-look">
            Built To Replace <span className="closer-look-heading-accent">The Tools</span> You&rsquo;re Already Tolerating.
          </h2>

          <p className="closer-look-subtext" data-reveal data-reveal-group="closer-look">
            Transform how your team communicates with powerful tools designed for the way you work.
          </p>
        </div>

        {/* 3x2 icon grid */}
        <div className="closer-look-grid-simple">
          {ITEMS.map((item) => (
            <div key={item.title} className="closer-look-item" data-reveal data-reveal-group="closer-look" data-reveal-batch="closer-look-cards">
              <div className="closer-look-item-icon">{item.icon}</div>
              <h3 className="closer-look-item-title">{item.title}</h3>
              <p className="closer-look-item-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </RevealSection>
    </section>
  );
}
