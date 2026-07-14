import { Check } from 'lucide-react';
import { RevealSection } from '@/components/reveal/RevealSection';
import { Price } from '@/components/currency/Price';

const CHECKLIST_ITEMS = [
  'Create instant role-based or personal addresses',
  'Secure individual logins for every team member',
  'Manage all accounts from a single admin dashboard',
];

export function MailEntireTeam() {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-24">
      <RevealSection>
        <div className="flex flex-col items-center text-center">
          <h2 className="mail-team-heading" data-reveal data-reveal-group="mail-entire-team">
            <span className="block">Professional Email Addresses for the</span>
            <span className="block mail-team-heading-accent">Entire Team</span>
          </h2>

          <p className="mail-team-subhead" data-reveal data-reveal-group="mail-entire-team">
            Stop sharing passwords and generic inboxes. Build trust with your clients by equipping every employee and department with their own personalized, secure inbox.
          </p>

          <ul className="mail-team-checklist" data-reveal data-reveal-group="mail-entire-team">
            {CHECKLIST_ITEMS.map((item) => (
              <li key={item} className="mail-team-checklist-item">
                <Check size={16} strokeWidth={2.5} className="mail-team-checklist-icon" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap items-center justify-center gap-4" data-reveal data-reveal-group="mail-entire-team">
            <a href="#" className="btn-primary inline-flex items-center justify-center rounded-full px-6 py-3.5 min-h-[44px]">
              Start for <Price amount={1} />/month
            </a>
            <a href="#" className="btn-outline inline-flex items-center justify-center rounded-full px-6 py-3.5 min-h-[44px]">
              See how it works
            </a>
          </div>
        </div>

        <div className="mail-team-photo" data-reveal data-reveal-group="mail-entire-team">
          <img
            src="/assets/images/mail/entire-team.png"
            alt="Five team members across different roles, each using their own Snaarp Mail inbox"
            className="mail-team-photo-img"
          />
        </div>
      </RevealSection>
    </section>
  );
}
