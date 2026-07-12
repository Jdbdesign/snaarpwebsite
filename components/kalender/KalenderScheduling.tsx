import { RevealSection } from '@/components/reveal/RevealSection';
import { FeatureAccordion, type FeatureAccordionItem } from '@/components/sections/FeatureAccordion';

const SCHEDULING_ITEMS: FeatureAccordionItem[] = [
  {
    title: 'Add your availability',
    description: 'Set the days and hours you’re free to meet, plus buffers between calls so back-to-back bookings never sneak in.',
    image: '/assets/images/kalender-add-availability.png',
    imageAlt: 'Availability settings showing connected Google and Microsoft calendars',
  },
  {
    title: 'Calendar Integrations',
    description: 'Connect Google, Outlook, or Apple Calendar so Kalender always knows what’s already on your schedule.',
    image: '/assets/images/kalender-calendar-integrations.png',
    imageAlt: 'Calendar Integrations panel with Google, Outlook, and Apple Calendar connection options',
  },
  {
    title: 'Customize your event types',
    description: 'Create different meeting types — quick calls, demos, check-ins — each with its own length, location, and rules.',
    image: '/assets/images/kalender-customize-event-types.png',
    imageAlt: 'Event Types dashboard listing configurable meeting types',
  },
  {
    title: 'Share your scheduling link',
    description: 'Send one link and let people pick a time that works — no more back-and-forth emails to land on a slot.',
    image: '/assets/images/kalender-share-scheduling-link.png',
    imageAlt: 'Schedule a Meeting form for booking a time slot',
  },
];

export function KalenderScheduling() {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-24">
      <RevealSection>
        <div className="text-center max-w-2xl mx-auto mb-14 lg:mb-16">
          <h2 className="sec-icons-heading mb-5" data-reveal data-reveal-group="kalender-scheduling-top">
            <span className="block">Effortless scheduling</span>
            <span className="block text-[var(--color-brand)]">with Kalender</span>
          </h2>
          <p className="text-[var(--text-secondary)] leading-relaxed mb-8" data-reveal data-reveal-group="kalender-scheduling-top">
            Kalender is simple enough for individuals, yet powerful enough to coordinate schedules across your whole team.
          </p>
          <a
            href="#"
            className="btn-primary inline-flex items-center justify-center rounded-full px-6 py-3.5 min-h-[44px]"
            data-reveal
            data-reveal-group="kalender-scheduling-top"
          >
            Start for £1/month
          </a>
        </div>

        <FeatureAccordion label="Connect your calendars" items={SCHEDULING_ITEMS} revealGroup="kalender-scheduling-accordion" />
      </RevealSection>
    </section>
  );
}
