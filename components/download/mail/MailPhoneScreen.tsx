import { Search, SlidersHorizontal, Pencil } from 'lucide-react';

interface PhoneEmailRow {
  initials: string;
  sender: string;
  subject: string;
  preview: string;
  time: string;
  unread?: boolean;
  avatarTone: 'brand' | 'mint' | 'amber' | 'slate';
}

const ROWS: PhoneEmailRow[] = [
  { initials: 'LD', sender: 'Lumina Design Studio', subject: 'Project Kick-off Meeting', preview: "Hi Jacob, we're excited to start the...", time: '09:14', unread: true, avatarTone: 'brand' },
  { initials: 'AC', sender: 'Arlo from Creative', subject: 'Feedback on New Draft', preview: "I've reviewed the latest designs and...", time: '08:41', unread: true, avatarTone: 'mint' },
  { initials: 'GL', sender: 'Glassdoor', subject: 'New Senior Designer roles near you', preview: '12 new roles match your saved search', time: 'Yesterday', avatarTone: 'slate' },
  { initials: 'SP', sender: 'Spotify for Work', subject: 'Get 1 month of Q3 Premium', preview: 'Team plan renews in 3 days', time: 'Yesterday', avatarTone: 'mint' },
  { initials: 'BT', sender: 'Bank of Tomorrow', subject: 'Your Monthly Statement is Ready', preview: 'View your digital statement for the...', time: 'Mon', avatarTone: 'amber' },
];

/** Mail-specific phone screen content, dropped into <DownloadPhoneFrame>.
 * Kept as a separate component (rather than inlined in the hero) so the
 * exact same screen can be reused at both hero scale and the smaller
 * "Mobile apps" card scale without duplicating the row markup. */
export function MailPhoneScreen() {
  return (
    <div className="mail-phone-screen">
      <div className="mail-phone-topbar">
        <span className="mail-phone-title">Inbox</span>
        <span className="mail-phone-avatar">AM</span>
      </div>
      <label className="mail-phone-search">
        <Search size={13} aria-hidden="true" />
        <span>Search emails</span>
        <SlidersHorizontal size={13} aria-hidden="true" />
      </label>
      <div className="mail-phone-list">
        {ROWS.map((row) => (
          <div className="mail-phone-row" key={row.sender}>
            <span className={`mail-phone-avatar-circle is-${row.avatarTone}`}>{row.initials}</span>
            <span className="mail-phone-row-text">
              <span className="mail-phone-row-top">
                <span className={`mail-phone-sender${row.unread ? ' is-unread' : ''}`}>{row.sender}</span>
                <span className="mail-phone-time">{row.time}</span>
              </span>
              <span className={`mail-phone-subject${row.unread ? ' is-unread' : ''}`}>{row.subject}</span>
              <span className="mail-phone-preview">{row.preview}</span>
            </span>
            {row.unread && <span className="mail-phone-unread-dot" aria-hidden="true" />}
          </div>
        ))}
      </div>
      <button type="button" className="mail-phone-compose" aria-label="Compose">
        <Pencil size={18} aria-hidden="true" />
      </button>
    </div>
  );
}
