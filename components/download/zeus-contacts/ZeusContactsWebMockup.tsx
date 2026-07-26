// High-fidelity web app mockup for Zeus Contacts Download page.
// Shows: lead enrichment dashboard - search bar, enriched contact card with
// company data, social links, email verification status, and a lead score.

import { AVATARS } from '../avatarPaths';

export function ZeusContactsWebMockup() {
  return (
    <div className="ai-compose-web-mockup" aria-hidden="true">
      {/* Browser chrome */}
      <div className="ai-compose-web-mockup-chrome">
        <div className="ai-compose-web-mockup-dots">
          <span /><span /><span />
        </div>
        <div className="ai-compose-web-mockup-url">snaarp.com/zeus/contacts</div>
      </div>

      {/* Toolbar */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 16px', borderBottom: '1px solid #F0EEF6', background: '#FBFAFE' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>
          <span style={{ fontSize: '12px', fontWeight: 800, color: '#1B1730' }}>Zeus Contacts</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ padding: '4px 10px', borderRadius: '6px', background: '#F3EFFF', border: '1px solid #E6DEFA', fontSize: '8px', fontWeight: 600, color: '#7C3AED' }}>124 credits left</span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', padding: '5px 12px', borderRadius: '999px', background: '#D97706', color: '#fff', fontSize: '8px', fontWeight: 700 }}>
            <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.4-4.4" /></svg>
            Find leads
          </span>
        </div>
      </div>

      {/* Main content */}
      <div style={{ display: 'flex', minHeight: '300px' }}>
        {/* Left: search + results list */}
        <div style={{ width: '140px', flexShrink: 0, borderRight: '1px solid #F0EEF6', padding: '12px 10px' }}>
          {/* Search */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '5px', padding: '6px 8px', borderRadius: '8px', background: '#F7F6FA', border: '1px solid #F0EEF6', marginBottom: '10px' }}>
            <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="#A79FBE" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.4-4.4" /></svg>
            <span style={{ fontSize: '7px', fontWeight: 500, color: '#A79FBE' }}>Search contacts...</span>
          </div>

          {/* Filter chips */}
          <div style={{ display: 'flex', flexWrap: 'wrap' as const, gap: '4px', marginBottom: '10px' }}>
            <span style={{ padding: '2px 6px', borderRadius: '4px', background: '#FEF6E7', fontSize: '6px', fontWeight: 600, color: '#D97706' }}>VP+</span>
            <span style={{ padding: '2px 6px', borderRadius: '4px', background: '#EFF6FF', fontSize: '6px', fontWeight: 600, color: '#3B82F6' }}>SaaS</span>
            <span style={{ padding: '2px 6px', borderRadius: '4px', background: '#F3EFFF', fontSize: '6px', fontWeight: 600, color: '#7C3AED' }}>UK</span>
          </div>

          {/* Results list */}
          <div style={{ display: 'flex', flexDirection: 'column' as const, gap: '4px' }}>
            {[
              { name: 'Sarah Chen', role: 'VP Sales', company: 'Globex', active: true },
              { name: 'Marcus Webb', role: 'CTO', company: 'Initech', active: false },
              { name: 'Elena Ruiz', role: 'Head of Ops', company: 'Wonka', active: false },
              { name: 'Dev Patel', role: 'VP Product', company: 'Acme', active: false },
              { name: 'Amara Osei', role: 'CEO', company: 'Stark', active: false },
            ].map((contact) => (
              <div key={contact.name} style={{ padding: '6px 8px', borderRadius: '8px', background: contact.active ? '#F3EFFF' : 'transparent', border: contact.active ? '1px solid #E6DEFA' : '1px solid transparent' }}>
                <div style={{ fontSize: '7.5px', fontWeight: 700, color: contact.active ? '#7C3AED' : '#1B1730' }}>{contact.name}</div>
                <div style={{ fontSize: '6px', color: '#8B85A0' }}>{contact.role} · {contact.company}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: enriched contact detail */}
        <div style={{ flex: 1, padding: '14px 18px' }}>
          {/* Contact header */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px', paddingBottom: '12px', borderBottom: '1px solid #F0EEF6' }}>
            <span style={{ width: '36px', height: '36px', borderRadius: '50%', overflow: 'hidden', flexShrink: 0 }}>
              <img src={AVATARS.priyaNair} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            </span>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: '12px', fontWeight: 800, color: '#1B1730' }}>Sarah Chen</div>
              <div style={{ fontSize: '8px', color: '#5B5670' }}>VP of Sales · Globex Ltd</div>
            </div>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '3px', padding: '4px 8px', borderRadius: '6px', background: '#ECFDF9', border: '1px solid #CDF5EE', fontSize: '7px', fontWeight: 700, color: '#0E9384' }}>
              <svg width="7" height="7" viewBox="0 0 24 24" fill="none" stroke="#0E9384" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
              Verified
            </span>
          </div>

          {/* Data grid */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', marginBottom: '14px' }}>
            {[
              { label: 'Email', value: 's.chen@globex.io', verified: true },
              { label: 'Phone', value: '+44 7700 900123', verified: true },
              { label: 'Location', value: 'London, UK', verified: false },
              { label: 'Company size', value: '120–250 employees', verified: false },
              { label: 'Industry', value: 'Enterprise SaaS', verified: false },
              { label: 'Revenue', value: '£12M–£25M ARR', verified: false },
            ].map((field) => (
              <div key={field.label} style={{ padding: '8px 10px', borderRadius: '8px', background: '#FBFAFE', border: '1px solid #F0EEF6' }}>
                <div style={{ fontSize: '6.5px', fontWeight: 700, color: '#A79FBE', textTransform: 'uppercase' as const, letterSpacing: '.04em', marginBottom: '3px' }}>{field.label}</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <span style={{ fontSize: '8px', fontWeight: 600, color: '#1B1730' }}>{field.value}</span>
                  {field.verified && <svg width="7" height="7" viewBox="0 0 24 24" fill="none" stroke="#0E9384" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>}
                </div>
              </div>
            ))}
          </div>

          {/* Lead score + social */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ padding: '8px 12px', borderRadius: '10px', background: '#F3EFFF', border: '1px solid #E6DEFA' }}>
              <div style={{ fontSize: '6.5px', fontWeight: 700, color: '#A79FBE', textTransform: 'uppercase' as const, letterSpacing: '.04em', marginBottom: '3px' }}>Lead Score</div>
              <div style={{ fontSize: '14px', fontWeight: 800, color: '#7C3AED' }}>87</div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' as const, gap: '4px' }}>
              <div style={{ fontSize: '6.5px', fontWeight: 700, color: '#A79FBE', textTransform: 'uppercase' as const, letterSpacing: '.04em' }}>Social</div>
              <div style={{ display: 'flex', gap: '5px' }}>
                {['LinkedIn', 'Twitter'].map((s) => (
                  <span key={s} style={{ padding: '3px 7px', borderRadius: '5px', background: '#F7F6FA', border: '1px solid #F0EEF6', fontSize: '7px', fontWeight: 600, color: '#5B5670' }}>{s}</span>
                ))}
              </div>
            </div>
            <span style={{ marginLeft: 'auto', display: 'inline-flex', alignItems: 'center', gap: '4px', padding: '6px 12px', borderRadius: '999px', background: '#7C3AED', color: '#fff', fontSize: '8px', fontWeight: 700 }}>
              Add to CRM
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
