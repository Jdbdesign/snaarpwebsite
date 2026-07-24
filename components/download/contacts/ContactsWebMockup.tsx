import { Search, Plus, Star, Users, Mail, Video, Phone, Clock } from 'lucide-react';

const NAV_ITEMS: { label: string; count?: number; active?: boolean }[] = [
  { label: 'All Contacts', count: 128, active: true },
  { label: 'Favorites', count: 9 },
];

const GROUPS = [
  { label: 'Clients', tone: 'brand' as const },
  { label: 'Team', tone: 'mint' as const },
  { label: 'Vendors', tone: 'amber' as const },
];

type SyncSource = 'mail' | 'meet';

interface Contact {
  initials: string;
  name: string;
  role: string;
  company: string;
  tone: 'brand' | 'mint' | 'amber' | 'slate';
  synced?: SyncSource[];
  active?: boolean;
}

const CONTACTS: Contact[] = [
  { initials: 'AC', name: 'Amara Chen', role: 'Design Lead', company: 'Lumina Design Studio', tone: 'brand', synced: ['mail'], active: true },
  { initials: 'DO', name: 'Daniel Osei', role: 'Account Manager', company: 'Bank of Tomorrow', tone: 'amber', synced: ['meet'] },
  { initials: 'PN', name: 'Priya Nair', role: 'Founder', company: 'Northwind Vendors', tone: 'mint' },
  { initials: 'MW', name: 'Marcus Webb', role: 'VP Sales', company: 'ClearPath Logistics', tone: 'slate', synced: ['mail', 'meet'] },
  { initials: 'SR', name: 'Sofia Reyes', role: 'Support Lead', company: 'Glassdoor', tone: 'brand' },
  { initials: 'TB', name: 'Tunde Bakare', role: 'Operations', company: 'Snaarp', tone: 'mint' },
];

const SYNC_ICON: Record<SyncSource, typeof Mail> = {
  mail: Mail,
  meet: Video,
};

const ACTIVITY = [
  { Icon: Mail, label: 'Emailed 2 days ago' },
  { Icon: Clock, label: 'Meeting Thu · 10:00 AM' },
];

/** High-fidelity web-app mockup for the Contacts Download hero's layered
 * visual — a real three-column address book (sidebar, populated contact
 * list, selected-contact detail panel), built to the same fidelity bar as
 * MailWebMockup/KalenderWebMockup rather than a simplified follow-up. Kept
 * as its own component so it can be sized to sit behind the hero's phone
 * mockup rather than spanning the full page width. */
export function ContactsWebMockup() {
  const selected = CONTACTS.find((c) => c.active) ?? CONTACTS[0];

  return (
    <div className="contacts-web-mockup" aria-hidden="true">
      <aside className="contacts-web-mockup-sidebar">
        <p className="contacts-web-mockup-logo">Snaarp</p>

        <nav className="contacts-web-mockup-nav">
          {NAV_ITEMS.map((item) => (
            <span key={item.label} className={`contacts-web-mockup-nav-item${item.active ? ' is-active' : ''}`}>
              {item.label === 'Favorites' ? <Star size={13} aria-hidden="true" /> : <Users size={13} aria-hidden="true" />}
              <span className="contacts-web-mockup-nav-label">{item.label}</span>
              {item.count !== undefined && <span className="contacts-web-mockup-nav-count">{item.count}</span>}
            </span>
          ))}
        </nav>

        <div className="contacts-web-mockup-groups">
          <p className="contacts-web-mockup-groups-label">Groups</p>
          {GROUPS.map((group) => (
            <span key={group.label} className="contacts-web-mockup-group-item">
              <span className={`contacts-web-mockup-group-dot is-${group.tone}`} />
              {group.label}
            </span>
          ))}
        </div>
      </aside>

      <div className="contacts-web-mockup-list-col">
        <div className="contacts-web-mockup-topbar">
          <label className="contacts-web-mockup-search">
            <Search size={12} aria-hidden="true" />
            <span>Search contacts...</span>
          </label>
          <button type="button" className="contacts-web-mockup-add">
            <Plus size={12} aria-hidden="true" />
            Add Contact
          </button>
        </div>

        <div className="contacts-web-mockup-list">
          {CONTACTS.map((contact) => (
            <div className={`contacts-web-mockup-row${contact.active ? ' is-active' : ''}`} key={contact.name}>
              <span className={`contacts-web-mockup-avatar is-${contact.tone}`}>
                {contact.initials}
                {contact.synced && (
                  <span className="contacts-web-mockup-avatar-badges">
                    {contact.synced.map((source) => {
                      const SourceIcon = SYNC_ICON[source];
                      return (
                        <span key={source} className="contacts-web-mockup-avatar-badge">
                          <SourceIcon size={8} aria-hidden="true" />
                        </span>
                      );
                    })}
                  </span>
                )}
              </span>
              <span className="contacts-web-mockup-row-text">
                <span className="contacts-web-mockup-row-name">{contact.name}</span>
                <span className="contacts-web-mockup-row-sub">{contact.role} · {contact.company}</span>
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="contacts-web-mockup-detail">
        <span className={`contacts-web-mockup-detail-avatar is-${selected.tone}`}>{selected.initials}</span>
        <p className="contacts-web-mockup-detail-name">{selected.name}</p>
        <p className="contacts-web-mockup-detail-role">{selected.role} at {selected.company}</p>

        <div className="contacts-web-mockup-detail-field">
          <Phone size={12} aria-hidden="true" />
          <span>+1 (415) 555-0148</span>
        </div>
        <div className="contacts-web-mockup-detail-field">
          <Mail size={12} aria-hidden="true" />
          <span>amara@luminadesign.co</span>
        </div>

        <p className="contacts-web-mockup-detail-heading">Synced from</p>
        <div className="contacts-web-mockup-detail-synced">
          <span className="contacts-web-mockup-detail-synced-chip">
            <Mail size={11} aria-hidden="true" />
            Mail
          </span>
        </div>

        <p className="contacts-web-mockup-detail-heading">Recent activity</p>
        <div className="contacts-web-mockup-detail-activity">
          {ACTIVITY.map(({ Icon, label }) => (
            <span key={label} className="contacts-web-mockup-detail-activity-item">
              <Icon size={11} aria-hidden="true" />
              {label}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
