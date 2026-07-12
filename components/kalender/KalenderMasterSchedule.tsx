import { RevealSection } from '@/components/reveal/RevealSection';

interface MasterScheduleItem {
  title: string;
  desc: string;
}

const MASTER_SCHEDULE_ITEMS: MasterScheduleItem[] = [
  {
    title: 'Works across every calendar',
    desc: 'See availability across every calendar your team uses, so nobody double-books by accident.',
  },
  {
    title: 'Admin controls that scale',
    desc: "Set permissions, control event visibility, and get clear reports on how your team's actually booking time.",
  },
  {
    title: 'Fits your existing stack',
    desc: 'Connect Kalender to the tools you already run on — no data silos, no manual syncing.',
  },
];

export function KalenderMasterSchedule() {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-24">
      <RevealSection>
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-12 lg:mb-16">
          <h2 className="kalender-master-heading" data-reveal data-reveal-group="kalender-master">
            <span className="block">Master your team&rsquo;s</span>
            <span className="block text-[var(--color-brand)]">schedule.</span>
          </h2>
          <p className="kalender-master-subtext" data-reveal data-reveal-group="kalender-master">
            Centralized scheduling, smart automation, and integrations that actually talk to each other &mdash; built for teams, not just individuals.
          </p>
        </div>

        <div className="kalender-master-grid">
          {MASTER_SCHEDULE_ITEMS.map((item) => (
            <div
              key={item.title}
              data-reveal
              data-reveal-group="kalender-master"
              data-reveal-batch="kalender-master-cols"
            >
              <h3 className="kalender-master-item-title">{item.title}</h3>
              <p className="kalender-master-item-desc">{item.desc}</p>
            </div>
          ))}
        </div>

        <img
          src="/assets/images/kalender-master-schedule-dashboard.png"
          alt="Kalender admin dashboard showing working hours, a 14-day availability preview, and schedule management for a team"
          className="kalender-master-visual-img"
          data-reveal
          data-reveal-group="kalender-master"
        />
      </RevealSection>
    </section>
  );
}
