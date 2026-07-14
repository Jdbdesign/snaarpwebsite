import { Headphones, Briefcase, Users, Building2 } from 'lucide-react';
import { RevealSection } from '@/components/reveal/RevealSection';

const USE_CASES = [
  {
    icon: Headphones,
    title: 'Customer Support',
    desc: 'Drafts accurate, helpful replies to billing, feature, and troubleshooting queries — cutting response time from minutes to seconds.',
  },
  {
    icon: Briefcase,
    title: 'Sales',
    desc: "Generates personalised responses referencing the prospect's company, industry, and questions — helping your team respond instantly.",
  },
  {
    icon: Users,
    title: 'Internal Comms',
    desc: 'Structures meeting follow-ups, project updates, and action items into clear, professional internal emails for your team.',
  },
  {
    icon: Building2,
    title: 'Executive',
    desc: 'Drafts carefully worded, polished responses for sensitive communications with boards, investors, and partners.',
  },
];

export function MailUseCases() {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-24">
      <RevealSection>
        <div className="flex flex-col items-center text-center mb-12">
          <div className="badge-pill inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs uppercase mb-5" data-reveal data-reveal-group="mail-use-cases">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <circle cx="12" cy="12" r="10" />
              <circle cx="12" cy="12" r="6" />
              <circle cx="12" cy="12" r="2" />
            </svg>
            Use Cases
          </div>

          <h2 className="mail-usecases-heading" data-reveal data-reveal-group="mail-use-cases">
            AI Replies for Every Team
          </h2>

          <p className="mail-usecases-subhead" data-reveal data-reveal-group="mail-use-cases">
            Whether it&apos;s support, sales, or the C-suite — Snaarp Mail AI adapts to the context and delivers the right reply every time.
          </p>
        </div>

        <div className="mail-usecases-grid">
          {USE_CASES.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="mail-usecases-card"
              data-reveal
              data-reveal-group="mail-use-cases"
              data-reveal-batch="mail-usecases-cards"
            >
              <div className="mail-usecases-icon-badge" aria-hidden="true">
                <Icon size={18} strokeWidth={1.8} />
              </div>
              <h3 className="mail-usecases-card-title">{title}</h3>
              <p className="mail-usecases-card-desc">{desc}</p>
            </div>
          ))}
        </div>
      </RevealSection>
    </section>
  );
}
