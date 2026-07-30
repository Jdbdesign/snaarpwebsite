'use client';

import { useState, useEffect } from 'react';
import { Search, ChevronDown, Plus, Users, Star, Clock, Filter, ChevronLeft, ChevronRight, Phone, Mail, Settings, HelpCircle, LayoutGrid, LayoutList, X, CheckCircle, Pencil } from 'lucide-react';
import { Coachmark } from '@/components/Coachmark';

const GROUPS = [
  { label: 'Clients', color: '#7C3AED', count: 84 },
  { label: 'Team', color: '#0E9384', count: 32 },
  { label: 'Vendors', color: '#F59E0B', count: 19 },
];

const CONTACTS_BASE = [
  { initials: 'SJ', color: '#7C3AED', name: 'Sarah Jenkins', detail: 'Product Manager · Acme Corp', group: 'Clients', groupColor: '#7C3AED', groupBg: '#F3EFFF', email: 's.jenkins@acme.com', phone: '+1 (555) 234-8901', favorite: false },
  { initials: 'AR', color: '#0E9384', name: 'Alex Rivera', detail: 'Sales Director · Northwind Ltd', group: 'Clients', groupColor: '#7C3AED', groupBg: '#F3EFFF', email: 'a.rivera@northwind.com', phone: '+1 (555) 345-6789', favorite: false },
  { initials: 'DT', color: '#E11D48', name: 'Design Team', detail: 'Creative Studio · Pixel & Co', group: 'Vendors', groupColor: '#F59E0B', groupBg: '#FFFBEB', email: 'hello@pixelco.io', phone: '+1 (555) 456-7890', favorite: false },
  { initials: 'CS', color: '#1E293B', name: 'Cloud Services', detail: 'IT Support · Cloud Services Inc', group: 'Vendors', groupColor: '#F59E0B', groupBg: '#FFFBEB', email: 'support@cloudsvcs.com', phone: '+1 (555) 567-8901', favorite: false },
  { initials: 'MK', color: '#F59E0B', name: 'Mike Chen', detail: 'Engineering Lead · Snaarp', group: 'Team', groupColor: '#0E9384', groupBg: '#ECFDF9', email: 'm.chen@snaarp.com', phone: '+1 (555) 678-9012', favorite: true },
  { initials: 'LP', color: '#EC4899', name: 'Lisa Park', detail: 'HR Manager · Snaarp', group: 'Team', groupColor: '#0E9384', groupBg: '#ECFDF9', email: 'l.park@snaarp.com', phone: '+1 (555) 789-0123', favorite: false },
  { initials: 'JW', color: '#0E9384', name: 'James Wilson', detail: 'Account Executive · Brightline', group: 'Clients', groupColor: '#7C3AED', groupBg: '#F3EFFF', email: 'j.wilson@brightline.co', phone: '+1 (555) 890-1234', favorite: false },
  { initials: 'PA', color: '#7C3AED', name: 'Priya Anand', detail: 'Finance Manager · Snaarp', group: 'Team', groupColor: '#0E9384', groupBg: '#ECFDF9', email: 'p.anand@snaarp.com', phone: '+1 (555) 901-2345', favorite: false },
];

type ContactView = 'list' | 'grid';
type ModalView = 'none' | 'addContact' | 'detail';

export function ContactsPreviewMockup({ onEnd }: { onEnd?: () => void }) {
  const [contacts, setContacts] = useState(CONTACTS_BASE);
  const [viewMode, setViewMode] = useState<ContactView>('list');
  const [modal, setModal] = useState<ModalView>('none');
  const [showStep1, setShowStep1] = useState(false);
  const [showStep2, setShowStep2] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMsg, setToastMsg] = useState('');
  const [selectedGroup, setSelectedGroup] = useState('Team');
  const [detailContact, setDetailContact] = useState(CONTACTS_BASE[0]);
  const [allCount, setAllCount] = useState(248);
  const [showSaveCoachmark, setShowSaveCoachmark] = useState(false);
  const [showEditCoachmark, setShowEditCoachmark] = useState(false);
  const [showUpdateCoachmark, setShowUpdateCoachmark] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShowStep1(true), 600);
    return () => clearTimeout(t);
  }, []);

  function handleOpenAddContact() {
    setShowStep1(false);
    setTimeout(() => {
      setModal('addContact');
      setTimeout(() => setShowSaveCoachmark(true), 400);
    }, 180);
  }

  function handleSaveContact() {
    const newContact = { initials: 'PA', color: '#8B5CF6', name: 'Priya Anand', detail: 'Finance Manager · Snaarp', group: selectedGroup, groupColor: selectedGroup === 'Clients' ? '#7C3AED' : selectedGroup === 'Team' ? '#0E9384' : '#F59E0B', groupBg: selectedGroup === 'Clients' ? '#F3EFFF' : selectedGroup === 'Team' ? '#ECFDF9' : '#FFFBEB', email: 'p.anand@snaarp.com', phone: '+1 (555) 901-2345', favorite: false };
    setContacts([newContact, ...contacts]);
    setAllCount(allCount + 1);
    setModal('none');
    setToastMsg('Contact added');
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
      setTimeout(() => setShowStep2(true), 400);
    }, 2000);
  }

  function handleOpenDetail(contact?: typeof CONTACTS_BASE[0]) {
    setShowStep2(false);
    setDetailContact(contact || contacts[0]);
    setTimeout(() => {
      setModal('detail');
      setTimeout(() => setShowEditCoachmark(true), 400);
    }, 180);
  }

  function handleCloseModal() {
    setModal('none');
    setIsEditing(false);
    setShowEditCoachmark(false);
    setShowUpdateCoachmark(false);
  }

  function handleStartEdit() {
    setShowEditCoachmark(false);
    setIsEditing(true);
    setTimeout(() => setShowUpdateCoachmark(true), 300);
  }

  function handleSaveUpdate() {
    setShowUpdateCoachmark(false);
    setIsEditing(false);
    setModal('none');
    showQuickToast('Contact updated');
    if (onEnd) setTimeout(() => onEnd(), 2000);
  }

  function toggleFavorite(index: number) {
    const updated = [...contacts];
    updated[index] = { ...updated[index], favorite: !updated[index].favorite };
    setContacts(updated);
  }

  function showQuickToast(msg: string) {
    setToastMsg(msg);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 1800);
  }

  return (
    <div style={{ display: 'flex', height: '620px', width: '100%', fontFamily: 'Poppins, sans-serif', fontSize: '11px', color: '#1a1a1a', overflow: 'hidden', position: 'relative' }}>
      {/* Toast */}
      {showToast && (
        <div style={{ position: 'absolute', top: '12px', left: '50%', transform: 'translateX(-50%)', zIndex: 200, display: 'flex', alignItems: 'center', gap: '6px', padding: '8px 16px', background: '#ECFDF5', border: '1px solid #A7F3D0', borderRadius: '20px', boxShadow: '0 4px 12px -4px rgba(0,0,0,0.1)' }}>
          <CheckCircle size={14} style={{ color: '#22c55e' }} />
          <span style={{ fontSize: '11px', fontWeight: 600, color: '#166534' }}>{toastMsg}</span>
        </div>
      )}

      {/* Step 1 Coachmark — Add Contact */}
      <Coachmark
        visible={showStep1 && modal === 'none'}
        title="Add a New Contact"
        subtitle="Save someone's details so they're always at hand"
        onNext={handleOpenAddContact}
        top="35px"
        left="140px"
        arrowSide="left"
      />

      {/* Step 2 Coachmark — View Contact */}
      <Coachmark
        visible={showStep2 && modal === 'none'}
        title="View Contact Details"
        subtitle="See full info and quick actions for anyone in your list"
        onNext={() => handleOpenDetail(contacts[0])}
        top="75px"
        left="320px"
        arrowSide="left"
      />

      {/* Sidebar */}
      <div style={{ width: '140px', flexShrink: 0, borderRight: '1px solid #f0f0f0', padding: '10px 8px', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '7px', marginBottom: '14px' }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="2" strokeLinecap="round"><path d="M4 6h16M4 12h16M4 18h16" /></svg>
          <span style={{ fontSize: '14px', fontWeight: 700, color: '#1a1a1a' }}>Snaarp</span>
        </div>

        <div onClick={handleOpenAddContact} style={{ display: 'flex', alignItems: 'center', gap: '5px', padding: '6px 12px', background: '#7C3AED', color: '#fff', borderRadius: '18px', fontSize: '9.5px', fontWeight: 600, marginBottom: '14px', width: 'fit-content', cursor: 'pointer' }}>
          <Plus size={12} />
          <span>Add Contact</span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', flex: 1 }}>
          {[
            { label: 'All Contacts', count: String(allCount), active: true },
            { label: 'Favorites', count: String(contacts.filter(c => c.favorite).length), active: false },
            { label: 'Recently Added', count: null, active: false },
            { label: 'Frequently Contacted', count: null, active: false },
            { label: 'Duplicates', count: null, active: false },
          ].map((item) => (
            <div key={item.label} style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '5px 8px', borderRadius: '5px', background: item.active ? '#f3efff' : 'transparent', color: item.active ? '#7C3AED' : '#555', fontWeight: item.active ? 600 : 400, fontSize: '10.5px' }}>
              <Users size={12} />
              <span style={{ flex: 1, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{item.label}</span>
              {item.count && <span style={{ fontSize: '8px', fontWeight: 700, background: item.active ? '#7C3AED' : '#e8e8e8', color: item.active ? '#fff' : '#888', padding: '1px 5px', borderRadius: '8px' }}>{item.count}</span>}
            </div>
          ))}
        </div>

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
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden', position: 'relative' }}>
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
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              <div onClick={() => setViewMode('grid')} style={{ padding: '3px 5px', borderRadius: '4px', background: viewMode === 'grid' ? '#f3efff' : 'transparent', color: viewMode === 'grid' ? '#7C3AED' : '#ccc', cursor: 'pointer' }}>
                <LayoutGrid size={13} />
              </div>
              <div onClick={() => setViewMode('list')} style={{ padding: '3px 5px', borderRadius: '4px', background: viewMode === 'list' ? '#f3efff' : 'transparent', color: viewMode === 'list' ? '#7C3AED' : '#ccc', cursor: 'pointer' }}>
                <LayoutList size={13} />
              </div>
            </div>
            <span style={{ fontSize: '9px', color: '#999' }}>1-8 of {allCount}</span>
            <ChevronLeft size={12} style={{ color: '#888' }} />
            <ChevronRight size={12} style={{ color: '#888' }} />
          </div>
        </div>

        {/* Contact list view */}
        {viewMode === 'list' && (
          <div style={{ flex: 1, overflow: 'hidden' }}>
            {contacts.slice(0, 8).map((contact, i) => (
              <div key={i} onClick={() => handleOpenDetail(contact)} style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '10px 12px', borderBottom: '1px solid #f8f8f8', cursor: 'pointer' }}>
                <div style={{ width: '32px', height: '32px', minWidth: '32px', borderRadius: '50%', background: contact.color, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '10px', fontWeight: 700, flexShrink: 0 }}>
                  {contact.initials}
                </div>
                <div style={{ flex: 1, minWidth: 0, overflow: 'hidden' }}>
                  <div style={{ fontWeight: 600, fontSize: '11px', color: '#1a1a1a' }}>{contact.name}</div>
                  <div style={{ fontSize: '9.5px', color: '#888', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', marginTop: '1px' }}>{contact.detail}</div>
                </div>
                <span style={{ fontSize: '7.5px', fontWeight: 700, padding: '2px 6px', borderRadius: '8px', background: contact.groupBg, color: contact.groupColor, textTransform: 'uppercase', letterSpacing: '0.03em', flexShrink: 0 }}>{contact.group}</span>
                <Star size={12} onClick={(e) => { e.stopPropagation(); toggleFavorite(i); }} style={{ color: contact.favorite ? '#F59E0B' : '#ddd', fill: contact.favorite ? '#F59E0B' : 'none', cursor: 'pointer', flexShrink: 0 }} />
                <Phone size={12} style={{ color: '#ccc', flexShrink: 0 }} />
                <Mail size={12} style={{ color: '#ccc', flexShrink: 0 }} />
              </div>
            ))}
          </div>
        )}

        {/* Contact grid view */}
        {viewMode === 'grid' && (
          <div style={{ flex: 1, padding: '10px 12px', overflow: 'hidden' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px' }}>
              {contacts.slice(0, 9).map((contact, i) => (
                <div key={i} onClick={() => handleOpenDetail(contact)} style={{ padding: '12px 10px', borderRadius: '10px', border: '1px solid #f0f0f0', background: '#fff', textAlign: 'center', cursor: 'pointer', position: 'relative' }}>
                  <Star size={10} onClick={(e) => { e.stopPropagation(); toggleFavorite(i); }} style={{ position: 'absolute', top: '6px', right: '6px', color: contact.favorite ? '#F59E0B' : '#ddd', fill: contact.favorite ? '#F59E0B' : 'none', cursor: 'pointer' }} />
                  <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: contact.color, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '10px', fontWeight: 700, margin: '0 auto 6px' }}>
                    {contact.initials}
                  </div>
                  <div style={{ fontSize: '9.5px', fontWeight: 600, color: '#1a1a1a', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{contact.name}</div>
                  <div style={{ fontSize: '8px', color: '#888', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', marginTop: '2px' }}>{contact.detail}</div>
                  <span style={{ display: 'inline-block', marginTop: '5px', fontSize: '7px', fontWeight: 700, padding: '1px 5px', borderRadius: '6px', background: contact.groupBg, color: contact.groupColor, textTransform: 'uppercase' }}>{contact.group}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Add Contact Modal */}
        {modal === 'addContact' && (
          <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(0,0,0,0.3)', zIndex: 50 }}>
            <div style={{ width: '300px', display: 'flex', flexDirection: 'column', background: '#fff', borderRadius: '14px', boxShadow: '0 8px 30px -8px rgba(0,0,0,0.2)', overflow: 'visible' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 14px', background: '#1a1a1a', borderRadius: '14px 14px 0 0' }}>
                <span style={{ fontSize: '12px', fontWeight: 600, color: '#fff' }}>Add Contact</span>
                <div onClick={handleCloseModal} style={{ cursor: 'pointer', color: '#aaa' }}><X size={13} /></div>
              </div>
              <div style={{ padding: '14px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <div>
                  <div style={{ fontSize: '9px', fontWeight: 600, color: '#888', marginBottom: '3px' }}>Full name</div>
                  <div style={{ padding: '6px 10px', background: '#f9f9f9', borderRadius: '8px', border: '1px solid #e8e8e8', fontSize: '10px', color: '#1a1a1a' }}>Priya Anand</div>
                </div>
                <div style={{ display: 'flex', gap: '8px' }}>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: '9px', fontWeight: 600, color: '#888', marginBottom: '3px' }}>Job title</div>
                    <div style={{ padding: '6px 10px', background: '#f9f9f9', borderRadius: '8px', border: '1px solid #e8e8e8', fontSize: '10px', color: '#1a1a1a' }}>Finance Manager</div>
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: '9px', fontWeight: 600, color: '#888', marginBottom: '3px' }}>Company</div>
                    <div style={{ padding: '6px 10px', background: '#f9f9f9', borderRadius: '8px', border: '1px solid #e8e8e8', fontSize: '10px', color: '#1a1a1a' }}>Snaarp</div>
                  </div>
                </div>
                <div>
                  <div style={{ fontSize: '9px', fontWeight: 600, color: '#888', marginBottom: '3px' }}>Email</div>
                  <div style={{ padding: '6px 10px', background: '#f9f9f9', borderRadius: '8px', border: '1px solid #e8e8e8', fontSize: '10px', color: '#1a1a1a' }}>p.anand@snaarp.com</div>
                </div>
                <div>
                  <div style={{ fontSize: '9px', fontWeight: 600, color: '#888', marginBottom: '3px' }}>Phone</div>
                  <div style={{ padding: '6px 10px', background: '#f9f9f9', borderRadius: '8px', border: '1px solid #e8e8e8', fontSize: '10px', color: '#1a1a1a' }}>+1 (555) 901-2345</div>
                </div>
                <div>
                  <div style={{ fontSize: '9px', fontWeight: 600, color: '#888', marginBottom: '3px' }}>Group</div>
                  <div style={{ display: 'flex', gap: '6px' }}>
                    {['Clients', 'Team', 'Vendors'].map((g) => (
                      <div key={g} onClick={() => setSelectedGroup(g)} style={{ padding: '4px 10px', borderRadius: '14px', fontSize: '9px', fontWeight: 600, cursor: 'pointer', background: selectedGroup === g ? (g === 'Clients' ? '#7C3AED' : g === 'Team' ? '#0E9384' : '#F59E0B') : '#fff', color: selectedGroup === g ? '#fff' : '#555', border: selectedGroup === g ? 'none' : '1px solid #e8e8e8' }}>
                        {g}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '8px', padding: '10px 14px', borderTop: '1px solid #f0f0f0', position: 'relative' }}>
                <Coachmark
                  visible={showSaveCoachmark}
                  title="Save Contact"
                  subtitle="Click to save this contact to your address book"
                  onNext={() => { setShowSaveCoachmark(false); handleSaveContact(); }}
                  top="-15px"
                  left="-80px"
                  arrowSide="right"
                />
                <button onClick={handleCloseModal} style={{ padding: '5px 14px', background: '#fff', color: '#555', border: '1px solid #e0e0e0', borderRadius: '14px', fontSize: '10px', fontWeight: 500, cursor: 'pointer' }}>Cancel</button>
                <button onClick={() => { setShowSaveCoachmark(false); handleSaveContact(); }} style={{ padding: '5px 14px', background: '#7C3AED', color: '#fff', border: 'none', borderRadius: '14px', fontSize: '10px', fontWeight: 600, cursor: 'pointer' }}>Save Contact</button>
              </div>
            </div>
          </div>
        )}

        {/* Contact Detail Drawer (slide-in from right) */}
        {modal === 'detail' && (
          <div style={{ position: 'absolute', top: 0, right: 0, bottom: 0, width: '260px', background: '#fff', borderLeft: '1px solid #e8e8e8', boxShadow: '-4px 0 20px -8px rgba(0,0,0,0.1)', zIndex: 50, display: 'flex', flexDirection: 'column', overflow: 'visible' }}>
            {/* Header */}
            <div style={{ padding: '16px 14px', textAlign: 'center', borderBottom: '1px solid #f0f0f0', position: 'relative' }}>
              <div onClick={handleCloseModal} style={{ position: 'absolute', top: '10px', right: '10px', cursor: 'pointer', color: '#888' }}><X size={13} /></div>
              <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: detailContact.color, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '14px', fontWeight: 700, margin: '0 auto 8px' }}>
                {detailContact.initials}
              </div>
              <div style={{ fontSize: '13px', fontWeight: 700, color: '#1a1a1a' }}>{detailContact.name}</div>
              <div style={{ fontSize: '10px', color: '#888', marginTop: '2px' }}>{detailContact.detail}</div>
              <span style={{ display: 'inline-block', marginTop: '8px', fontSize: '8px', fontWeight: 700, padding: '2px 8px', borderRadius: '8px', background: detailContact.groupBg, color: detailContact.groupColor, textTransform: 'uppercase' }}>{detailContact.group}</span>
            </div>

            {/* Info rows */}
            <div style={{ padding: '14px', flex: 1, display: 'flex', flexDirection: 'column', gap: '12px', overflow: 'hidden' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Phone size={12} style={{ color: '#7C3AED' }} />
                {isEditing ? (
                  <div style={{ flex: 1, padding: '4px 8px', background: '#f9f9f9', borderRadius: '6px', border: '1px solid #e8e8e8', fontSize: '10px', color: '#1a1a1a' }}>{detailContact.phone}</div>
                ) : (
                  <span style={{ fontSize: '10px', color: '#1a1a1a' }}>{detailContact.phone}</span>
                )}
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Mail size={12} style={{ color: '#7C3AED' }} />
                {isEditing ? (
                  <div style={{ flex: 1, padding: '4px 8px', background: '#f9f9f9', borderRadius: '6px', border: '1px solid #e8e8e8', fontSize: '10px', color: '#1a1a1a' }}>{detailContact.email}</div>
                ) : (
                  <span style={{ fontSize: '10px', color: '#1a1a1a' }}>{detailContact.email}</span>
                )}
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Users size={12} style={{ color: '#7C3AED' }} />
                {isEditing ? (
                  <div style={{ flex: 1, padding: '4px 8px', background: '#f9f9f9', borderRadius: '6px', border: '1px solid #e8e8e8', fontSize: '10px', color: '#1a1a1a' }}>{detailContact.detail.split(' · ')[1]}</div>
                ) : (
                  <span style={{ fontSize: '10px', color: '#1a1a1a' }}>{detailContact.detail.split(' · ')[1]}</span>
                )}
              </div>

              <div style={{ marginTop: '6px' }}>
                <div style={{ fontSize: '9px', fontWeight: 600, color: '#888', marginBottom: '4px' }}>Notes</div>
                <div style={{ fontSize: '9.5px', color: '#555', lineHeight: '1.4' }}>Met at the Q2 partner summit. Prefers email over calls.</div>
              </div>

              <div style={{ marginTop: '6px' }}>
                <div style={{ fontSize: '9px', fontWeight: 600, color: '#888', marginBottom: '4px' }}>Recent Activity</div>
                <div style={{ fontSize: '9px', color: '#777', lineHeight: '1.5' }}>Last emailed 3 days ago</div>
                <div style={{ fontSize: '9px', color: '#777', lineHeight: '1.5' }}>Meeting scheduled for Mar 14</div>
              </div>
            </div>

            {/* Footer actions */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '10px 14px', borderTop: '1px solid #f0f0f0', position: 'relative' }}>
              {/* Edit coachmark */}
              <Coachmark
                visible={showEditCoachmark && !isEditing}
                title="Edit Contact"
                subtitle="Update this contact's details anytime"
                onNext={handleStartEdit}
                top="-150px"
                left="10px"
                arrowSide="bottom"
                arrowOffset="220px"
              />
              {/* Update coachmark */}
              <Coachmark
                visible={showUpdateCoachmark && isEditing}
                title="Save Changes"
                subtitle="Click to save your updates to this contact"
                onNext={handleSaveUpdate}
                top="-150px"
                left="20px"
                arrowSide="bottom"
                arrowOffset="140px"
                buttonLabel="End"
              />

              {!isEditing ? (
                <>
                  <button onClick={() => showQuickToast(`Calling ${detailContact.name}...`)} style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px', padding: '6px 0', background: '#fff', border: '1px solid #e0e0e0', borderRadius: '8px', fontSize: '9px', fontWeight: 500, color: '#555', cursor: 'pointer' }}>
                    <Phone size={11} /> Call
                  </button>
                  <button onClick={() => showQuickToast(`Opening compose to ${detailContact.name}...`)} style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px', padding: '6px 0', background: '#fff', border: '1px solid #e0e0e0', borderRadius: '8px', fontSize: '9px', fontWeight: 500, color: '#555', cursor: 'pointer' }}>
                    <Mail size={11} /> Email
                  </button>
                  <button onClick={handleStartEdit} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px', padding: '6px 8px', background: '#fff', border: '1px solid #e0e0e0', borderRadius: '8px', fontSize: '9px', fontWeight: 500, color: '#555', cursor: 'pointer' }}>
                    <Pencil size={11} />
                  </button>
                </>
              ) : (
                <>
                  <button onClick={() => { setIsEditing(false); setShowUpdateCoachmark(false); }} style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px', padding: '6px 0', background: '#fff', border: '1px solid #e0e0e0', borderRadius: '8px', fontSize: '9px', fontWeight: 500, color: '#555', cursor: 'pointer' }}>
                    Cancel
                  </button>
                  <button onClick={handleSaveUpdate} style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px', padding: '6px 0', background: '#7C3AED', border: 'none', borderRadius: '8px', fontSize: '9px', fontWeight: 600, color: '#fff', cursor: 'pointer' }}>
                    Save Update
                  </button>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
