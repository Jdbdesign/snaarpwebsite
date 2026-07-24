import { Plus, CalendarDays, ListTodo } from 'lucide-react';
import { AVATARS } from '../avatarPaths';

const ATTENDEE_AVATAR: Record<string, string> = {
  JS: AVATARS.jacob,
  AM: AVATARS.amKalender,
  LD: AVATARS.amaraChen,
  AC: AVATARS.arlo,
  SJ: AVATARS.sarahContact,
  GL: AVATARS.sofiaReyes,
  BT: AVATARS.danielOsei,
};

// April 2026 laid out Mon-start; today (Tue 14) is the same date the main
// week grid below is centered on, so the mini month picker and the week
// grid agree with each other.
const MINI_MONTH_DAYS = [
  30, 31, 1, 2, 3, 4, 5,
  6, 7, 8, 9, 10, 11, 12,
  13, 14, 15, 16, 17, 18, 19,
  20, 21, 22, 23, 24, 25, 26,
  27, 28, 29, 30, 1, 2, 3,
];
const MINI_MONTH_OUTSIDE = new Set([0, 1, 32, 33, 34]);
const MINI_MONTH_TODAY_INDEX = 15;

const CALENDARS: { label: string; tone: 'brand' | 'mint' | 'amber' }[] = [
  { label: 'Work', tone: 'brand' },
  { label: 'Personal', tone: 'mint' },
  { label: 'Team', tone: 'amber' },
];

const DAYS = [
  { label: 'MON', date: 13 },
  { label: 'TUE', date: 14, isToday: true },
  { label: 'WED', date: 15 },
  { label: 'THU', date: 16 },
  { label: 'FRI', date: 17 },
];

type Tone = 'brand' | 'mint' | 'amber' | 'slate';

interface WeekEvent {
  day: number;
  title: string;
  start: [number, number];
  end: [number, number];
  timeLabel: string;
  tone: Tone;
  attendees?: string[];
}

const GRID_START_HOUR = 9;
const GRID_END_HOUR = 17;
const HOUR_LABELS = Array.from({ length: GRID_END_HOUR - GRID_START_HOUR }, (_, i) => GRID_START_HOUR + i);

function timeToRow([hour, minute]: [number, number]) {
  return 1 + (hour - GRID_START_HOUR) * 2 + (minute >= 30 ? 1 : 0);
}

const EVENTS: WeekEvent[] = [
  { day: 0, title: 'Design Sync', start: [9, 0], end: [9, 30], timeLabel: '9:00 – 9:30 AM', tone: 'brand', attendees: ['JS'] },
  { day: 0, title: 'Client Call — Lumina', start: [11, 0], end: [11, 45], timeLabel: '11:00 – 11:45 AM', tone: 'amber', attendees: ['LD'] },
  { day: 0, title: 'Focus Block', start: [14, 0], end: [15, 30], timeLabel: '2:00 – 3:30 PM', tone: 'slate' },
  { day: 1, title: 'Sprint Planning', start: [10, 0], end: [11, 0], timeLabel: '10:00 – 11:00 AM', tone: 'mint', attendees: ['AC', 'SJ', 'GL'] },
  { day: 1, title: '1:1 with Arlo', start: [13, 30], end: [14, 0], timeLabel: '1:30 – 2:00 PM', tone: 'brand', attendees: ['AC'] },
  { day: 2, title: 'Product Review', start: [9, 30], end: [10, 15], timeLabel: '9:30 – 10:15 AM', tone: 'amber', attendees: ['JS', 'LD'] },
  { day: 2, title: 'Lunch — Sarah', start: [12, 0], end: [13, 0], timeLabel: '12:00 – 1:00 PM', tone: 'slate' },
  { day: 2, title: 'Kalender Demo', start: [15, 0], end: [15, 45], timeLabel: '3:00 – 3:45 PM', tone: 'brand', attendees: ['GL'] },
  { day: 3, title: 'Team Standup', start: [9, 0], end: [9, 15], timeLabel: '9:00 AM', tone: 'mint' },
  { day: 3, title: 'Design Sync', start: [11, 30], end: [12, 0], timeLabel: '11:30 AM – 12:00 PM', tone: 'brand' },
  { day: 3, title: 'Client Call — Bank of Tomorrow', start: [16, 0], end: [16, 30], timeLabel: '4:00 – 4:30 PM', tone: 'amber', attendees: ['BT'] },
  { day: 4, title: 'Marketing Sync', start: [10, 0], end: [10, 30], timeLabel: '10:00 – 10:30 AM', tone: 'amber' },
  { day: 4, title: 'Wrap-up & Planning', start: [15, 30], end: [16, 15], timeLabel: '3:30 – 4:15 PM', tone: 'slate' },
];

/** High-fidelity web-calendar mockup for the Download hero's layered
 * visual — a real week view (sidebar + mini month + populated time grid),
 * built to the same fidelity bar as MailWebMockup rather than a simplified
 * follow-up. Kept as its own component so it can be sized to sit behind
 * the hero's phone mockup rather than spanning the full page width. */
export function KalenderWebMockup() {
  return (
    <div className="kalender-web-mockup" aria-hidden="true">
      <aside className="kalender-web-mockup-sidebar">
        <p className="kalender-web-mockup-logo">Snaarp</p>
        <button type="button" className="kalender-web-mockup-new-event">
          <Plus size={13} aria-hidden="true" />
          New Event
        </button>

        <nav className="kalender-web-mockup-nav">
          <span className="kalender-web-mockup-nav-item is-active">
            <CalendarDays size={13} aria-hidden="true" />
            Today
          </span>
          <span className="kalender-web-mockup-nav-item">
            <ListTodo size={13} aria-hidden="true" />
            Upcoming
          </span>
        </nav>

        <div className="kalender-web-mockup-mini-month">
          <p className="kalender-web-mockup-mini-month-header">April 2026</p>
          <div className="kalender-web-mockup-mini-month-grid">
            {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((d, i) => (
              <span key={`dow-${i}`} className="kalender-web-mockup-mini-month-dow">{d}</span>
            ))}
            {MINI_MONTH_DAYS.map((day, i) => (
              <span
                key={i}
                className={`kalender-web-mockup-mini-month-day${i === MINI_MONTH_TODAY_INDEX ? ' is-today' : ''}${MINI_MONTH_OUTSIDE.has(i) ? ' is-outside' : ''}`}
              >
                {day}
              </span>
            ))}
          </div>
        </div>

        <div className="kalender-web-mockup-calendars">
          <p className="kalender-web-mockup-calendars-label">My Calendars</p>
          {CALENDARS.map((cal) => (
            <span key={cal.label} className="kalender-web-mockup-calendar-item">
              <span className={`kalender-web-mockup-calendar-dot is-${cal.tone}`} />
              {cal.label}
            </span>
          ))}
        </div>
      </aside>

      <div className="kalender-web-mockup-main">
        <div className="kalender-web-mockup-topbar">
          <span className="kalender-web-mockup-title">This Week</span>
          <div className="kalender-web-mockup-view-toggle">
            <span>Day</span>
            <span className="is-active">Week</span>
            <span>Month</span>
          </div>
        </div>

        <div className="kalender-web-mockup-grid">
          <div className="kalender-web-mockup-grid-header">
            <span />
            {DAYS.map((day) => (
              <div key={day.label} className={`kalender-web-mockup-grid-day-header${day.isToday ? ' is-today' : ''}`}>
                <span className="kalender-web-mockup-grid-day-label">{day.label}</span>
                <span className="kalender-web-mockup-grid-day-date">{day.date}</span>
              </div>
            ))}
          </div>

          <div className="kalender-web-mockup-grid-body">
            {DAYS.map((_, i) => (
              <span key={i} className="kalender-web-mockup-grid-colbg" style={{ gridColumn: i + 2, gridRow: '1 / -1' }} />
            ))}

            {HOUR_LABELS.map((hour, i) => (
              <span key={hour} className="kalender-web-mockup-grid-time" style={{ gridColumn: 1, gridRow: `${i * 2 + 1} / ${i * 2 + 2}` }}>
                {hour > 12 ? hour - 12 : hour}{hour >= 12 ? 'PM' : 'AM'}
              </span>
            ))}

            {EVENTS.map((event) => (
              <div
                key={`${event.day}-${event.title}`}
                className={`kalender-web-mockup-event is-${event.tone}`}
                style={{ gridColumn: event.day + 2, gridRow: `${timeToRow(event.start)} / ${timeToRow(event.end)}` }}
              >
                <span className="kalender-web-mockup-event-title">{event.title}</span>
                <span className="kalender-web-mockup-event-time">{event.timeLabel}</span>
                {event.attendees && (
                  <span className="kalender-web-mockup-event-avatars">
                    {event.attendees.map((initials) => (
                      <span key={initials} className="kalender-web-mockup-event-avatar">
                        <img src={ATTENDEE_AVATAR[initials]} alt="" />
                      </span>
                    ))}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
