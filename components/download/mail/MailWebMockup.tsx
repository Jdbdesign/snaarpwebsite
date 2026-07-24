import {
  Search,
  Inbox,
  Star,
  Send,
  Clock,
  FileText,
  TrendingUp,
  CalendarCheck,
  ShieldAlert,
  Trash2,
  Megaphone,
  Contact,
  Settings,
  Tag,
  ChevronDown,
  Check,
  CheckCheck,
  type LucideIcon,
} from 'lucide-react';

const SIDEBAR_NAV: { Icon: LucideIcon; label: string; count?: number; active?: boolean }[] = [
  { Icon: Inbox, label: 'Inbox', count: 6, active: true },
  { Icon: Star, label: 'Starred' },
  { Icon: Send, label: 'Sent' },
  { Icon: Clock, label: 'Snoozed' },
  { Icon: FileText, label: 'Drafts', count: 2 },
  { Icon: TrendingUp, label: 'Important' },
  { Icon: CalendarCheck, label: 'Scheduled' },
  { Icon: Megaphone, label: 'Ad Mail' },
  { Icon: ShieldAlert, label: 'Spam' },
  { Icon: Trash2, label: 'Trash' },
  { Icon: Contact, label: 'Contacts' },
  { Icon: Settings, label: 'Manage subscriptions' },
  { Icon: Tag, label: 'Manage labels' },
];

type Row = { to: string; subject: string; preview: string; time: string; delivery: 'delivered' | 'opened'; unread?: boolean };

const ROWS: Row[] = [
  { to: 'Sarah Jenkins', subject: 'Coffee Chat Next Week?', preview: "Hey Jacob! Would love to catch up and t…", time: '1Apr', delivery: 'opened' },
  { to: 'Bank of Tomorrow', subject: 'Your Monthly Statement is Ready', preview: 'View your digital statement for the...', time: '1Apr', delivery: 'opened' },
  { to: 'Spotify for Work', subject: 'Team Plan · 1 Month of Q3 Premium', preview: 'Your team plan renews in 3 days', time: '2Apr', delivery: 'delivered', unread: true },
  { to: 'Glassdoor', subject: 'New Senior Designer roles near you', preview: '12 new roles match your saved search', time: '2Apr', delivery: 'delivered', unread: true },
  { to: 'Arlo, Creative', subject: 'Feedback on New Designer Roles', preview: "I've reviewed the latest brief and have a…", time: '3Apr', delivery: 'opened' },
  { to: 'Lumina Design Studio', subject: 'Project Kick-off Meeting', preview: "Hi Jacob, we're excited to start the...", time: '3Apr', delivery: 'opened', unread: true },
];

/** Compact, high-fidelity web-inbox mockup for the Download hero's layered
 * visual — deliberately its own component (not a shrunk MailDashboardPreview)
 * so it can be sized to sit behind the hero's phone mockup rather than
 * spanning the full page width. */
export function MailWebMockup() {
  return (
    <div className="mail-web-mockup" aria-hidden="true">
      <aside className="mail-web-mockup-sidebar">
        <p className="mail-web-mockup-logo">Snaarp</p>
        <button type="button" className="mail-web-mockup-compose">Compose</button>
        <nav className="mail-web-mockup-nav">
          {SIDEBAR_NAV.map(({ Icon, label, count, active }) => (
            <span key={label} className={`mail-web-mockup-nav-item${active ? ' is-active' : ''}`}>
              <Icon size={13} aria-hidden="true" />
              <span className="mail-web-mockup-nav-label">{label}</span>
              {count !== undefined && <span className="mail-web-mockup-nav-count">{count}</span>}
            </span>
          ))}
        </nav>
      </aside>

      <div className="mail-web-mockup-main">
        <div className="mail-web-mockup-topbar">
          <label className="mail-web-mockup-search">
            <Search size={12} aria-hidden="true" />
            <span>Search emails...</span>
          </label>
          <span className="mail-web-mockup-status">
            <span className="mail-web-mockup-status-dot" />
            Active
            <ChevronDown size={11} aria-hidden="true" />
          </span>
          <span className="mail-web-mockup-avatar">JS</span>
        </div>

        <div className="mail-web-mockup-list">
          {ROWS.map((row) => (
            <div className="mail-web-mockup-row" key={row.subject}>
              <span className="mail-web-mockup-row-to">{row.to}</span>
              {row.delivery === 'opened' ? (
                <CheckCheck size={11} className="mail-web-mockup-delivery is-opened" aria-hidden="true" />
              ) : (
                <Check size={11} className="mail-web-mockup-delivery" aria-hidden="true" />
              )}
              <span className="mail-web-mockup-row-text">
                <span className={`mail-web-mockup-subject${row.unread ? ' is-unread' : ''}`}>{row.subject}</span>
                {' – '}
                <span className="mail-web-mockup-preview">{row.preview}</span>
              </span>
              <span className="mail-web-mockup-time">{row.time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
