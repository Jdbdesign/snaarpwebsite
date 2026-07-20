import { CrmRevealSection } from './CrmRevealSection';

export function CrmAltLogging() {
  return (
    <section style={{ background: '#F7F7F7', paddingTop: '92px', paddingBottom: '92px' }}>
      <CrmRevealSection className="max-w-7xl mx-auto px-6 lg:px-10" style={{ display: 'grid', gridTemplateColumns: '1fr 1.05fr', gap: '64px', alignItems: 'center' }}>
        {/* text (left) */}
        <div data-crm-reveal="">
          <h2 className="crm-row-heading" style={{ margin: 0, color: '#1B1730' }}>Every interaction, automatically logged.</h2>
          <p className="crm-lede" style={{ margin: '18px 0 0', color: '#5B5670' }}>Emails and meetings attach themselves to the right deal — so the full history is always there, without anyone updating it by hand.</p>
          <div style={{ marginTop: '30px', display: 'flex', flexDirection: 'column', gap: '22px' }}>
            <div style={{ display: 'flex', gap: '15px' }}>
              <div style={{ flexShrink: 0, width: '38px', height: '38px', borderRadius: '11px', background: '#FFEFF2', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#C0344E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"></rect><path d="m22 7-10 5L2 7"></path></svg></div>
              <div><div className="crm-row-item-title" style={{ color: '#1B1730' }}>Emails log to the deal automatically.</div><p className="crm-row-item-desc" style={{ margin: '5px 0 0', color: '#5B5670' }}>Anything sent through Mail lands on the right record.</p></div>
            </div>
            <div style={{ display: 'flex', gap: '15px' }}>
              <div style={{ flexShrink: 0, width: '38px', height: '38px', borderRadius: '11px', background: '#ECFDF9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#0E9384" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg></div>
              <div><div className="crm-row-item-title" style={{ color: '#1B1730' }}>Meetings attach to the right record.</div><p className="crm-row-item-desc" style={{ margin: '5px 0 0', color: '#5B5670' }}>Book through Kalender and it shows up on the deal.</p></div>
            </div>
            <div style={{ display: 'flex', gap: '15px' }}>
              <div style={{ flexShrink: 0, width: '38px', height: '38px', borderRadius: '11px', background: '#F5F3FF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 8v4l3 3"></path><circle cx="12" cy="12" r="10"></circle></svg></div>
              <div><div className="crm-row-item-title" style={{ color: '#1B1730' }}>See the full history in one place.</div><p className="crm-row-item-desc" style={{ margin: '5px 0 0', color: '#5B5670' }}>No hunting through inboxes to reconstruct a conversation.</p></div>
            </div>
          </div>
        </div>
        {/* activity timeline mock (right) */}
        <div data-crm-reveal="" data-crm-reveal-delay="120" style={{ position: 'relative' }}>
          <div style={{ position: 'absolute', inset: '18px 14px -16px -8px', background: 'linear-gradient(135deg,rgba(124,58,237,.12),rgba(20,184,166,.10))', borderRadius: '24px', filter: 'blur(2px)' }}></div>
          <div style={{ position: 'relative', background: '#fff', borderRadius: '20px', border: '1px solid #ECE9F5', boxShadow: '0 30px 60px -30px rgba(37,22,84,.3)', overflow: 'hidden' }}>
            {/* deal record header */}
            <div style={{ padding: '18px 20px', borderBottom: '1px solid #F0EEF6', display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span style={{ width: '40px', height: '40px', borderRadius: '11px', background: '#EDE9FE', color: '#7C3AED', fontSize: '14px', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>VG</span>
              <div style={{ flex: 1 }}><div style={{ fontSize: '15px', fontWeight: 700, color: '#1B1730' }}>Vertex Group</div><div style={{ fontSize: '12px', color: '#8B85A0' }}>Deal · £18,000</div></div>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', padding: '5px 11px', borderRadius: '999px', background: '#FFEFF2', border: '1px solid #FBD5DD', fontSize: '10.5px', fontWeight: 700, color: '#E11D74' }}><span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#E11D74' }}></span>Proposal</span>
            </div>
            {/* timeline */}
            <div style={{ padding: '20px 22px', position: 'relative' }}>
              <div style={{ position: 'absolute', left: '33px', top: '32px', bottom: '26px', width: '2px', background: '#F0EEF6' }}></div>
              <div style={{ position: 'relative', display: 'flex', gap: '14px', paddingBottom: '18px' }}>
                <span style={{ flexShrink: 0, width: '24px', height: '24px', borderRadius: '8px', background: '#FFEFF2', border: '1px solid #FBD5DD', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2 }}><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#C0344E" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"></rect><path d="m22 7-10 5L2 7"></path></svg></span>
                <div style={{ flex: 1, background: '#FBFAFE', border: '1px solid #F0EEF6', borderRadius: '11px', padding: '11px 13px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}><span style={{ fontSize: '12.5px', fontWeight: 600, color: '#1B1730' }}>Proposal sent</span><span style={{ fontSize: '10px', color: '#B4AEC6' }}>2h ago</span></div>
                  <p style={{ margin: '5px 0 0', fontSize: '11px', lineHeight: 1.5, color: '#8B85A0' }}>Re: Q4 rollout pricing — logged from Mail</p>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', marginTop: '8px', padding: '3px 8px', borderRadius: '999px', background: '#FFEFF2', fontSize: '8.5px', fontWeight: 700, color: '#C0344E' }}>via Mail</span>
                </div>
              </div>
              <div style={{ position: 'relative', display: 'flex', gap: '14px', paddingBottom: '18px' }}>
                <span style={{ flexShrink: 0, width: '24px', height: '24px', borderRadius: '8px', background: '#ECFDF9', border: '1px solid #CDF5EE', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2 }}><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#0E9384" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"></rect><line x1="3" y1="10" x2="21" y2="10"></line></svg></span>
                <div style={{ flex: 1, background: '#FBFAFE', border: '1px solid #F0EEF6', borderRadius: '11px', padding: '11px 13px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}><span style={{ fontSize: '12.5px', fontWeight: 600, color: '#1B1730' }}>Demo call booked</span><span style={{ fontSize: '10px', color: '#B4AEC6' }}>Yesterday</span></div>
                  <p style={{ margin: '5px 0 0', fontSize: '11px', lineHeight: 1.5, color: '#8B85A0' }}>Thursday 2:00pm · 30 min with Ade R.</p>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', marginTop: '8px', padding: '3px 8px', borderRadius: '999px', background: '#ECFDF9', fontSize: '8.5px', fontWeight: 700, color: '#0E9384' }}>via Kalender</span>
                </div>
              </div>
              <div style={{ position: 'relative', display: 'flex', gap: '14px' }}>
                <span style={{ flexShrink: 0, width: '24px', height: '24px', borderRadius: '8px', background: '#F5F3FF', border: '1px solid #E6DEFA', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2 }}><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"></path></svg></span>
                <div style={{ flex: 1, background: '#FBFAFE', border: '1px solid #F0EEF6', borderRadius: '11px', padding: '11px 13px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}><span style={{ fontSize: '12.5px', fontWeight: 600, color: '#1B1730' }}>Intro call</span><span style={{ fontSize: '10px', color: '#B4AEC6' }}>Last week</span></div>
                  <p style={{ margin: '5px 0 0', fontSize: '11px', lineHeight: 1.5, color: '#8B85A0' }}>15 min — interested, sending over pricing</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CrmRevealSection>
    </section>
  );
}
