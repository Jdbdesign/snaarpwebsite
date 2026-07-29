'use client';

import { Search, ChevronDown, Plus, Users, Star, Clock, UserPlus, Copy, Filter, ChevronLeft, ChevronRight, Phone, Mail, Settings, HelpCircle, LayoutGrid, LayoutList } from 'lucide-react';

const SIDEBAR_NAV = [
  { label: 'All Contacts', active: true, count: '248' },
  { label: 'Favorites', active: false, count: null },
  { label: 'Recently Added', active: false, count: null },
  { label: 'Frequently Contacted', active: false, count: null },
  { label: 'Duplicates', active: false, count: null },
];

const GROUPS = [
  { label: 'Clients', color: '#7C3AED', count: '84' },
  { label: 'Team', color: '#0E9384', count: '32' },
  { label: 'Vendors', color: '#F59E0B', count: '19' },
];

const CONTACTS = [
  { initials: 'SJ', color: '#7C3AED', name: 'Sarah Jenkins', detail: 'Product Manager · Acme Corp', group: 'Clients', groupColor: '#7C3AED', groupBg: '#F3EFFF' },
  { initials: 'AR', color: '#0E9384', name: 'Alex Rivera', detail: 'Sales Director · Northwind Ltd', group: 'Clients', groupColor: '#7C3AED', groupBg: '#F3EFFF' },
  { initials: 'DT', color: '#E11D48', name: 'Design Team', detail: 'Creative Studio · Pixel & Co', group: 'Vendors', groupColor: '#F59E0B', groupBg: '#FFFBEB' },
  { initials: 'CS', color: '#1E293B', name: 'Cloud Services', detail: 'IT Support · Cloud Services Inc', group: 'Vendors', groupColor: '#F59E0B', groupBg: '#FFFBEB' },
  { initials: 'MK', color: '#F59E0B', name: 'Mike Chen', detail: 'Engineering Lead · Snaarp', group: 'Team', groupColor: '#0E9384', groupBg: '#ECFDF9' },
  { initials: 'LP', color: '#EC4899', name: 'Lisa Park', detail: 'HR Manager · Snaarp', group: 'Team', groupColor: '#0E9384', groupBg: '#ECFDF9' },
  { initials: 'JW', color: '#0E9384', name: 'James Wilson', detail: 'Account Executive · Brightline', group: 'Clients', groupColor: '#7C3AED', groupBg: '#F3EFFF' },
  { initials: 'PA', color: '#7C3AED', name: 'Priya Anand', detail: 'Finance Manager · Snaarp', group: 'Team', groupColor: '#0E9384', groupBg: '#ECFDF9' },
];

export function ContactsPreviewMockup() {
  return (
    <div style={{ display: 'flex', height: '620px', width: '100%', fontFamily: 'Poppins, sans-serif', fontSize: '11px', color: '#1a1a1a', overflow: 'hidden' }}>
      {/* Sidebar */}
      <div style={{ width: '140px', flexShrink: 0, borderRight: '1px solid #f0f0f0', padding: '10px 8px', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '7px', marginBottom: '14px' }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="2" strokeLinecap="round"><path d="M4 6h16M4 12h16M4 18h16" /></svg>
          <span style={{ fontSize: '14px', fontWeight: 700, color: '#1a1a1a' }}>Snaarp</span>
        </div>

        {/* Add Contact button */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '5px', padding: '6px 12px', background: '#7C3AED', color: '#fff', borderRadius: '18px', fontSize: '9.5px', fontWeight: 600, marginBottom: '14px', width: 'fit-content' }}>
          <Plus size={12} />
          <span>Add Contact</span>
        </div>

        {/* Nav items */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', flex: 1 }}>
          {SIDEBAR_NAV.map((item) => (
            <div key={item.label} style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '5px 8px', borderRadius: '5px', background: item.active ? '#f3efff' : 'transparent', color: item.active ? '#7C3AED' : '#555', fontWeight: item.active ? 600 : 400, fontSize: '10.5px' }}>
              <Users size={12} />
              <span style={{ flex: 1, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{item.label}</span>
              {item.count && <span style={{ fontSize: '8px', fontWeight: 700, background: item.active ? '#7C3AED' : '#e8e8e8', color: item.active ? '#fff' : '#888', padding: '1px 5px', borderRadius: '8px' }}>{item.count}</span>}
            </div>
          ))}
        </div>

        {/* Groups */}
        <div style={{ paddingTop: '10px', borderTop: '1px solid #f0f0f0', marginTop: 'auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '9px', fontWeight: 600, color: '#888', marginBottom: '6px' }}>
            <span>Groups</span>
            <span style={{ fontSize: '13px', color: '#aaa' }}>+</span>
          </div>
          {GROUPS.map((group) => (
            <div key={group.label} style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '9.5px', color: '#555', padding: '2px 0' }}>
              <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: group.color }} />
              <span style={{ flex: 1 }}>{group.label}</span>
              <span style={{ fontSize: '8px', color: '#999' }}>{group.count}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Main content */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
        {/* Top bar */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '8px 12px', borderBottom: '1px solid #f0f0f0' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '5px', padding: '5px 10px', background: '#f5f5f5', borderRadius: '18px', color: '#999', fontSize: '10px', flex: 1, maxWidth: '180px' }}>
            <Search size={12} />
            <span>Search contacts...</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginLeft: 'auto', color: '#777' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '3px', padding: '3px 8px', borderRadius: '14px', border: '1px solid #e8e8e8', fontSize: '9px', fontWeight: 500, color: '#333' }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#22c55e' }} />
              <span>Active</span>
              <ChevronDown size={10} />
            </div>
            <HelpCircle size={14} />
            <Settings size={14} />
            <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: '#7C3AED', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '9px', fontWeight: 700 }}>AM</div>
          </div>
        </div>

        {/* Toolbar */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '6px 12px', borderBottom: '1px solid #f0f0f0' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#888' }}>
            <Filter size={12} />
            <span style={{ fontSize: '9.5px', color: '#555', fontWeight: 500 }}>All Contacts</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            {/* View toggle */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              <div style={{ padding: '3px 5px', borderRadius: '4px', color: '#ccc' }}>
                <LayoutGrid size={13} />
              </div>
              <div style={{ padding: '3px 5px', borderRadius: '4px', background: '#f3efff', color: '#7C3AED' }}>
                <LayoutList size={13} />
              </div>
            </div>
            <span style={{ fontSize: '9px', color: '#999' }}>1-8 of 248</span>
            <ChevronLeft size={12} style={{ color: '#888' }} />
            <ChevronRight size={12} style={{ color: '#888' }} />
          </div>
        </div>

        {/* Contact list */}
        <div style={{ flex: 1, overflow: 'hidden' }}>
          {CONTACTS.map((contact, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '10px 12px', borderBottom: '1px solid #f8f8f8' }}>
              {/* Avatar */}
              <div style={{ width: '32px', height: '32px', minWidth: '32px', borderRadius: '50%', background: contact.color, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '10px', fontWeight: 700, flexShrink: 0 }}>
                {contact.initials}
              </div>
              {/* Name + detail */}
              <div style={{ flex: 1, minWidth: 0, overflow: 'hidden' }}>
                <div style={{ fontWeight: 600, fontSize: '11px', color: '#1a1a1a' }}>{contact.name}</div>
                <div style={{ fontSize: '9.5px', color: '#888', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', marginTop: '1px' }}>{contact.detail}</div>
              </div>
              {/* Group tag */}
              <span style={{ fontSize: '7.5px', fontWeight: 700, padding: '2px 6px', borderRadius: '8px', background: contact.groupBg, color: contact.groupColor, textTransform: 'uppercase', letterSpacing: '0.03em', flexShrink: 0 }}>{contact.group}</span>
              {/* Quick action icons */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexShrink: 0 }}>
                <Phone size={12} style={{ color: '#ccc' }} />
                <Mail size={12} style={{ color: '#ccc' }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
