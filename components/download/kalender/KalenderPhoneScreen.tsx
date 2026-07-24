import { Plus } from 'lucide-react';

interface PhoneEvent {
  time: string;
  title: string;
  tone: 'brand' | 'mint' | 'amber' | 'slate';
  attendees?: string[];
}

const EVENTS: PhoneEvent[] = [
  { time: '9:00 AM', title: 'Design Sync', tone: 'brand', attendees: ['JS', 'AM'] },
  { time: '10:00 AM', title: 'Sprint Planning', tone: 'mint', attendees: ['AC', 'SJ', 'GL'] },
  { time: '1:30 PM', title: '1:1 with Arlo', tone: 'brand', attendees: ['AC'] },
  { time: '3:00 PM', title: 'Client Call — Lumina', tone: 'amber', attendees: ['LD'] },
  { time: '4:30 PM', title: 'Wrap-up & Planning', tone: 'slate' },
];

/** Kalender-specific phone screen content, dropped into <DownloadPhoneFrame>.
 * Kept as a separate component (rather than inlined in the hero) so the
 * exact same day-agenda screen can be reused at both hero scale and the
 * smaller "Mobile apps" card scale without duplicating the row markup. */
export function KalenderPhoneScreen() {
  return (
    <div className="kalender-phone-screen">
      <div className="kalender-phone-topbar">
        <span className="kalender-phone-title">Tue, Apr 14</span>
        <span className="kalender-phone-avatar">JS</span>
      </div>

      <div className="kalender-phone-list">
        {EVENTS.map((event) => (
          <div className="kalender-phone-row" key={event.title}>
            <span className="kalender-phone-time">{event.time}</span>
            <span className={`kalender-phone-bar is-${event.tone}`} aria-hidden="true" />
            <span className="kalender-phone-row-text">
              <span className="kalender-phone-row-title">{event.title}</span>
              {event.attendees && (
                <span className="kalender-phone-row-avatars">
                  {event.attendees.map((initials) => (
                    <span key={initials} className="kalender-phone-row-avatar">{initials}</span>
                  ))}
                </span>
              )}
            </span>
          </div>
        ))}
      </div>

      <button type="button" className="kalender-phone-add" aria-label="Add event">
        <Plus size={18} aria-hidden="true" />
      </button>
    </div>
  );
}
