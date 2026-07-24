import { Search, Plus } from 'lucide-react';

interface PhoneContact {
  initials: string;
  name: string;
  role: string;
  tone: 'brand' | 'mint' | 'amber' | 'slate';
}

const SECTIONS: { letter: string; contacts: PhoneContact[] }[] = [
  {
    letter: 'A',
    contacts: [{ initials: 'AC', name: 'Amara Chen', role: 'Lumina Design Studio', tone: 'brand' }],
  },
  {
    letter: 'D',
    contacts: [{ initials: 'DO', name: 'Daniel Osei', role: 'Bank of Tomorrow', tone: 'amber' }],
  },
  {
    letter: 'M',
    contacts: [{ initials: 'MW', name: 'Marcus Webb', role: 'ClearPath Logistics', tone: 'slate' }],
  },
  {
    letter: 'P',
    contacts: [{ initials: 'PN', name: 'Priya Nair', role: 'Northwind Vendors', tone: 'mint' }],
  },
  {
    letter: 'S',
    contacts: [{ initials: 'SR', name: 'Sofia Reyes', role: 'Glassdoor', tone: 'brand' }],
  },
];

/** Contacts-specific phone screen content, dropped into <DownloadPhoneFrame>.
 * Kept as a separate component (rather than inlined in the hero) so the
 * exact same alphabetized-list screen can be reused at both hero scale and
 * the smaller "Mobile apps" card scale without duplicating the row markup. */
export function ContactsPhoneScreen() {
  return (
    <div className="contacts-phone-screen">
      <div className="contacts-phone-topbar">
        <span className="contacts-phone-title">Contacts</span>
        <span className="contacts-phone-avatar">JS</span>
      </div>

      <label className="contacts-phone-search">
        <Search size={13} aria-hidden="true" />
        <span>Search contacts</span>
      </label>

      <div className="contacts-phone-list">
        {SECTIONS.map((section) => (
          <div className="contacts-phone-section" key={section.letter}>
            <span className="contacts-phone-section-letter">{section.letter}</span>
            {section.contacts.map((contact) => (
              <div className="contacts-phone-row" key={contact.name}>
                <span className={`contacts-phone-avatar-circle is-${contact.tone}`}>{contact.initials}</span>
                <span className="contacts-phone-row-text">
                  <span className="contacts-phone-row-name">{contact.name}</span>
                  <span className="contacts-phone-row-role">{contact.role}</span>
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>

      <button type="button" className="contacts-phone-add" aria-label="Add contact">
        <Plus size={18} aria-hidden="true" />
      </button>
    </div>
  );
}
