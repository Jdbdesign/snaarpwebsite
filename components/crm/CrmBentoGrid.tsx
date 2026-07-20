import { CrmRevealSection } from './CrmRevealSection';

export function CrmBentoGrid() {
  return (
    <section style={{ background: '#F7F7F7', paddingTop: '92px', paddingBottom: '92px' }}>
      <CrmRevealSection className="max-w-7xl mx-auto px-6 lg:px-10">
        <div data-crm-reveal="" style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 52px' }}>
          <span style={{ fontSize: '11.5px', fontWeight: 600, letterSpacing: '.14em', color: '#7C3AED', textTransform: 'uppercase' }}>Everything a deal needs</span>
          <h2 className="crm-section-heading" style={{ margin: '14px 0 0', color: '#1B1730' }}>A pipeline, not a spreadsheet.</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6,1fr)', gap: '20px' }}>

          {/* BIG: Deal pipeline */}
          <div data-crm-reveal="" style={{ gridColumn: 'span 3', gridRow: 'span 2', background: '#fff', borderRadius: '22px', padding: '36px', border: '1px solid #EEEDF3', boxShadow: '0 20px 44px -28px rgba(37,22,84,.26)', display: 'flex', flexDirection: 'column' }}>
            <span style={{ display: 'inline-flex', alignSelf: 'flex-start', alignItems: 'center', gap: '7px', padding: '5px 12px', borderRadius: '999px', background: '#F5F3FF', color: '#7C3AED', fontSize: '11.5px', fontWeight: 600, border: '1px solid #EDE9FE', whiteSpace: 'nowrap' }}>Core</span>
            <h3 className="crm-bento-hero-title" style={{ margin: '18px 0 0', color: '#1B1730' }}>Deal pipeline</h3>
            <p style={{ margin: '11px 0 0', fontSize: '15.5px', lineHeight: 1.6, color: '#5B5670', maxWidth: '400px' }}>Drag-and-drop stages you can shape to your own sales process — see the whole board at a glance.</p>
            <div style={{ marginTop: '28px', flex: 1, minHeight: '210px', background: 'linear-gradient(160deg,#FBFAFE,#F4F1FC)', borderRadius: '16px', border: '1px solid #F0EEF7', padding: '20px', display: 'flex', gap: '10px' }}>
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#7C3AED' }}></span><span style={{ fontSize: '9px', fontWeight: 700, color: '#7C3AED' }}>New</span></div>
                <div style={{ background: '#fff', border: '1px solid #EFEDF6', borderRadius: '9px', padding: '9px', boxShadow: '0 8px 16px -12px rgba(37,22,84,.3)' }}><div style={{ height: '5px', width: '80%', borderRadius: '2px', background: '#E4DFF2' }}></div><div style={{ height: '5px', width: '45%', borderRadius: '2px', background: '#EDE9FE', marginTop: '6px' }}></div></div>
                <div style={{ background: '#fff', border: '1px solid #EFEDF6', borderRadius: '9px', padding: '9px' }}><div style={{ height: '5px', width: '70%', borderRadius: '2px', background: '#E4DFF2' }}></div><div style={{ height: '5px', width: '40%', borderRadius: '2px', background: '#EDE9FE', marginTop: '6px' }}></div></div>
              </div>
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#B45309' }}></span><span style={{ fontSize: '9px', fontWeight: 700, color: '#B45309' }}>Contacted</span></div>
                <div style={{ background: '#fff', border: '1.5px solid #7C3AED', borderRadius: '9px', padding: '9px', boxShadow: '0 12px 22px -10px rgba(124,58,237,.5)', transform: 'rotate(-3deg)' }}><div style={{ height: '5px', width: '75%', borderRadius: '2px', background: '#D9CEF3' }}></div><div style={{ height: '5px', width: '48%', borderRadius: '2px', background: '#EDE9FE', marginTop: '6px' }}></div></div>
              </div>
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#0E9384' }}></span><span style={{ fontSize: '9px', fontWeight: 700, color: '#0E9384' }}>Won</span></div>
                <div style={{ background: '#fff', border: '1px solid #EFEDF6', borderRadius: '9px', padding: '9px' }}><div style={{ height: '5px', width: '65%', borderRadius: '2px', background: '#CDEDE6' }}></div><div style={{ height: '5px', width: '42%', borderRadius: '2px', background: '#D5F5EF', marginTop: '6px' }}></div></div>
              </div>
            </div>
          </div>

          {/* Activity timeline */}
          <div data-crm-reveal="" data-crm-reveal-delay="100" style={{ gridColumn: 'span 3', background: '#fff', borderRadius: '22px', padding: '28px 30px', border: '1px solid #EEEDF3', boxShadow: '0 20px 44px -28px rgba(37,22,84,.26)', display: 'flex', alignItems: 'center', gap: '24px' }}>
            <div style={{ flex: 1 }}>
              <h3 className="crm-card-title" style={{ margin: 0, color: '#1B1730' }}>Activity timeline</h3>
              <p className="crm-card-desc" style={{ margin: '9px 0 0', color: '#5B5670' }}>Every call, email, and meeting logged automatically against the deal.</p>
            </div>
            <div style={{ flexShrink: 0, width: '150px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><span style={{ width: '22px', height: '22px', borderRadius: '7px', background: '#FFEFF2', border: '1px solid #FBD5DD', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#C0344E" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"></rect><path d="m22 7-10 5L2 7"></path></svg></span><span style={{ height: '6px', flex: 1, borderRadius: '3px', background: '#EFEDF6' }}></span></div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><span style={{ width: '22px', height: '22px', borderRadius: '7px', background: '#ECFDF9', border: '1px solid #CDF5EE', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#0E9384" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"></rect><line x1="3" y1="10" x2="21" y2="10"></line></svg></span><span style={{ height: '6px', flex: 1, borderRadius: '3px', background: '#EFEDF6' }}></span></div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><span style={{ width: '22px', height: '22px', borderRadius: '7px', background: '#F5F3FF', border: '1px solid #E6DEFA', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"></path></svg></span><span style={{ height: '6px', width: '60%', borderRadius: '3px', background: '#EFEDF6' }}></span></div>
            </div>
          </div>

          {/* Basic reporting */}
          <div data-crm-reveal="" data-crm-reveal-delay="180" style={{ gridColumn: 'span 3', background: '#fff', borderRadius: '22px', padding: '28px 30px', border: '1px solid #EEEDF3', boxShadow: '0 20px 44px -28px rgba(37,22,84,.26)', display: 'flex', alignItems: 'center', gap: '24px' }}>
            <div style={{ flex: 1 }}>
              <h3 className="crm-card-title" style={{ margin: 0, color: '#1B1730' }}>Basic reporting</h3>
              <p className="crm-card-desc" style={{ margin: '9px 0 0', color: '#5B5670' }}>Pipeline value, win rate, and deals by stage — the numbers that matter.</p>
            </div>
            <div style={{ flexShrink: 0, display: 'flex', alignItems: 'flex-end', gap: '7px', height: '72px' }}>
              <span style={{ width: '14px', height: '34px', borderRadius: '4px', background: '#EDE9FE' }}></span>
              <span style={{ width: '14px', height: '52px', borderRadius: '4px', background: '#D9CEF3' }}></span>
              <span style={{ width: '14px', height: '44px', borderRadius: '4px', background: '#7C3AED' }}></span>
              <span style={{ width: '14px', height: '64px', borderRadius: '4px', background: '#6D28D9' }}></span>
            </div>
          </div>

          {/* Contact & company records */}
          <div data-crm-reveal="" data-crm-reveal-delay="120" style={{ gridColumn: 'span 2', background: '#fff', borderRadius: '22px', padding: '28px', border: '1px solid #EEEDF3', boxShadow: '0 20px 44px -28px rgba(37,22,84,.26)' }}>
            <div style={{ height: '70px', marginBottom: '18px', display: 'flex', alignItems: 'center', gap: '11px' }}>
              <span style={{ width: '44px', height: '44px', borderRadius: '50%', background: '#EDE9FE', color: '#7C3AED', fontSize: '14px', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>AR</span>
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '6px' }}><span style={{ height: '7px', width: '70%', borderRadius: '3px', background: '#E4DFF2' }}></span><span style={{ height: '5px', width: '50%', borderRadius: '3px', background: '#F1EFF7' }}></span></div>
            </div>
            <h3 style={{ fontSize: '18px', fontWeight: 700, letterSpacing: '-.01em', margin: 0, color: '#1B1730' }}>Contact &amp; company records</h3>
            <p style={{ margin: '8px 0 0', fontSize: '14px', lineHeight: 1.55, color: '#5B5670' }}>Full history for every person and account, in one place.</p>
          </div>

          {/* Task reminders */}
          <div data-crm-reveal="" data-crm-reveal-delay="200" style={{ gridColumn: 'span 2', background: '#fff', borderRadius: '22px', padding: '28px', border: '1px solid #EEEDF3', boxShadow: '0 20px 44px -28px rgba(37,22,84,.26)' }}>
            <div style={{ height: '70px', marginBottom: '18px', display: 'flex', alignItems: 'center', gap: '11px' }}>
              <div style={{ position: 'relative', width: '44px', height: '44px', borderRadius: '12px', background: '#FEF6E7', border: '1px solid #FBEBC6', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="#B45309" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path></svg>
                <span style={{ position: 'absolute', top: '-3px', right: '-3px', width: '14px', height: '14px', borderRadius: '50%', background: '#E11D74', color: '#fff', fontSize: '8px', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>2</span>
              </div>
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><span style={{ width: '12px', height: '12px', borderRadius: '4px', border: '1.5px solid #D9D2EC' }}></span><span style={{ height: '5px', flex: 1, borderRadius: '3px', background: '#EFEDF6' }}></span></div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><span style={{ width: '12px', height: '12px', borderRadius: '4px', border: '1.5px solid #D9D2EC' }}></span><span style={{ height: '5px', width: '70%', borderRadius: '3px', background: '#EFEDF6' }}></span></div>
              </div>
            </div>
            <h3 style={{ fontSize: '18px', fontWeight: 700, letterSpacing: '-.01em', margin: 0, color: '#1B1730' }}>Task reminders</h3>
            <p style={{ margin: '8px 0 0', fontSize: '14px', lineHeight: 1.55, color: '#5B5670' }}>Never miss a follow-up — get nudged before it slips.</p>
          </div>

          {/* Synced with Contacts */}
          <div data-crm-reveal="" data-crm-reveal-delay="280" style={{ gridColumn: 'span 2', background: '#fff', borderRadius: '22px', padding: '28px', border: '1px solid #EEEDF3', boxShadow: '0 20px 44px -28px rgba(37,22,84,.26)' }}>
            <div style={{ height: '70px', marginBottom: '18px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{ width: '42px', height: '42px', borderRadius: '11px', background: '#F5F3FF', border: '1px solid #E6DEFA', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle></svg></div>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#14B8A6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 1l4 4-4 4"></path><path d="M3 11V9a4 4 0 0 1 4-4h14"></path><path d="M7 23l-4-4 4-4"></path><path d="M21 13v2a4 4 0 0 1-4 4H3"></path></svg>
              <div style={{ width: '42px', height: '42px', borderRadius: '11px', background: '#ECFDF9', border: '1px solid #CDF5EE', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#0E9384" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="6" x2="6" y2="6"></line><line x1="3" y1="12" x2="6" y2="12"></line><rect x="9" y="4" width="10" height="4" rx="1"></rect><rect x="9" y="10" width="10" height="4" rx="1"></rect></svg></div>
            </div>
            <h3 style={{ fontSize: '18px', fontWeight: 700, letterSpacing: '-.01em', margin: 0, color: '#1B1730' }}>Synced with Contacts</h3>
            <p style={{ margin: '8px 0 0', fontSize: '14px', lineHeight: 1.55, color: '#5B5670' }}>One shared record — not a duplicate database.</p>
          </div>
        </div>
        <div data-crm-reveal="" style={{ textAlign: 'center', marginTop: '40px' }}>
          <a href="#" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '14px 26px', borderRadius: '999px', background: '#fff', color: '#2A2440', fontWeight: 600, fontSize: '15px', cursor: 'pointer', border: '1.5px solid #E4DFF2' }}>See How It Works
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          </a>
        </div>
      </CrmRevealSection>
    </section>
  );
}
