import { EsignatureRevealSection } from './EsignatureRevealSection';

export function EsignatureAltTracking() {
  return (
    <section style={{ background: '#F7F7F7', paddingTop: '92px', paddingBottom: '92px' }}>
      <EsignatureRevealSection className="max-w-7xl mx-auto px-6 lg:px-10" style={{ display: 'grid', gridTemplateColumns: '1fr 1.05fr', gap: '64px', alignItems: 'center' }}>
        {/* text (left) */}
        <div data-esignature-reveal="">
          <h2 className="esignature-row-heading" style={{ margin: 0, color: '#1B1730' }}>Know exactly where every document stands.</h2>
          <p style={{ margin: '18px 0 0', fontSize: '16px', lineHeight: 1.62, color: '#5B5670' }}>No more guessing who&apos;s holding things up. Every view and every signature lands on a timestamped trail you can trust.</p>
          <div style={{ marginTop: '30px', display: 'flex', flexDirection: 'column', gap: '22px' }}>
            <div style={{ display: 'flex', gap: '15px' }}>
              <div style={{ flexShrink: 0, width: '38px', height: '38px', borderRadius: '11px', background: '#F5F3FF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 8v4l3 2" /><circle cx="12" cy="12" r="9" /></svg>
              </div>
              <div>
                <div className="esignature-row-item-title" style={{ color: '#1B1730' }}>Real-time status for every signer.</div>
                <p className="esignature-row-item-desc" style={{ margin: '5px 0 0', color: '#5B5670' }}>Sent, viewed, or signed &mdash; see it the moment it changes.</p>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '15px' }}>
              <div style={{ flexShrink: 0, width: '38px', height: '38px', borderRadius: '11px', background: '#FEF6E7', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#B45309" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" /><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" /></svg>
              </div>
              <div>
                <div className="esignature-row-item-title" style={{ color: '#1B1730' }}>Automatic reminders.</div>
                <p className="esignature-row-item-desc" style={{ margin: '5px 0 0', color: '#5B5670' }}>Anyone who hasn&apos;t signed gets a nudge &mdash; you don&apos;t have to chase.</p>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '15px' }}>
              <div style={{ flexShrink: 0, width: '38px', height: '38px', borderRadius: '11px', background: '#ECFDF9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#0E9384" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><path d="m9 15 2 2 4-4" /></svg>
              </div>
              <div>
                <div className="esignature-row-item-title" style={{ color: '#1B1730' }}>Full, timestamped audit trail.</div>
                <p className="esignature-row-item-desc" style={{ margin: '5px 0 0', color: '#5B5670' }}>Every view, every signature, logged and tamper-evident.</p>
              </div>
            </div>
          </div>
        </div>
        {/* activity feed mock (right) */}
        <div data-esignature-reveal="" data-esignature-reveal-delay="120" style={{ position: 'relative' }}>
          <div style={{ position: 'absolute', inset: '18px 14px -16px -8px', background: 'linear-gradient(135deg,rgba(124,58,237,.12),rgba(20,184,166,.10))', borderRadius: '24px', filter: 'blur(2px)' }} />
          <div style={{ position: 'relative', background: '#fff', borderRadius: '20px', border: '1px solid #ECE9F5', boxShadow: '0 30px 60px -30px rgba(37,22,84,.3)', overflow: 'hidden' }}>
            {/* document header */}
            <div style={{ padding: '16px 20px', borderBottom: '1px solid #F0EEF6', display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span style={{ width: '40px', height: '40px', borderRadius: '11px', background: '#FFEFF2', border: '1px solid #FBD5DD', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#E11D74" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /></svg>
              </span>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: '15px', fontWeight: 700, color: '#1B1730' }}>Service Agreement.pdf</div>
                <div style={{ fontSize: '12px', color: '#8B85A0' }}>Sent to 3 &middot; 2 signed</div>
              </div>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', padding: '5px 11px', borderRadius: '999px', background: '#FEF6E7', border: '1px solid #FBEBC6', fontSize: '10.5px', fontWeight: 700, color: '#B45309' }}>
                <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#B45309' }} />In progress
              </span>
            </div>
            {/* activity feed */}
            <div style={{ padding: '18px 22px', position: 'relative' }}>
              <div style={{ position: 'absolute', left: '33px', top: '30px', bottom: '26px', width: '2px', background: '#F0EEF6' }} />
              <div style={{ position: 'relative', display: 'flex', gap: '14px', paddingBottom: '16px' }}>
                <span style={{ flexShrink: 0, width: '24px', height: '24px', borderRadius: '8px', background: '#ECFDF9', border: '1px solid #CDF5EE', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2 }}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#0E9384" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
                </span>
                <div style={{ flex: 1, background: '#FBFAFE', border: '1px solid #F0EEF6', borderRadius: '11px', padding: '10px 13px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span style={{ fontSize: '12.5px', fontWeight: 600, color: '#1B1730' }}>Alex Rivera signed</span>
                    <span style={{ fontSize: '10px', color: '#B4AEC6' }}>10:42</span>
                  </div>
                  <p style={{ margin: '4px 0 0', fontSize: '10.5px', lineHeight: 1.4, color: '#8B85A0' }}>Signature captured &middot; IP logged</p>
                </div>
              </div>
              <div style={{ position: 'relative', display: 'flex', gap: '14px', paddingBottom: '16px' }}>
                <span style={{ flexShrink: 0, width: '24px', height: '24px', borderRadius: '8px', background: '#ECFDF9', border: '1px solid #CDF5EE', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2 }}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#0E9384" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
                </span>
                <div style={{ flex: 1, background: '#FBFAFE', border: '1px solid #F0EEF6', borderRadius: '11px', padding: '10px 13px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span style={{ fontSize: '12.5px', fontWeight: 600, color: '#1B1730' }}>Priya Shah signed</span>
                    <span style={{ fontSize: '10px', color: '#B4AEC6' }}>09:15</span>
                  </div>
                  <p style={{ margin: '4px 0 0', fontSize: '10.5px', lineHeight: 1.4, color: '#8B85A0' }}>Signature captured &middot; IP logged</p>
                </div>
              </div>
              <div style={{ position: 'relative', display: 'flex', gap: '14px', paddingBottom: '16px' }}>
                <span style={{ flexShrink: 0, width: '24px', height: '24px', borderRadius: '8px', background: '#FEF6E7', border: '1px solid #FBEBC6', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2 }}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#B45309" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z" /><circle cx="12" cy="12" r="3" /></svg>
                </span>
                <div style={{ flex: 1, background: '#FBFAFE', border: '1px solid #F0EEF6', borderRadius: '11px', padding: '10px 13px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span style={{ fontSize: '12.5px', fontWeight: 600, color: '#1B1730' }}>Jordan Kim viewed</span>
                    <span style={{ fontSize: '10px', color: '#B4AEC6' }}>08:50</span>
                  </div>
                  <p style={{ margin: '4px 0 0', fontSize: '10.5px', lineHeight: 1.4, color: '#8B85A0' }}>Reminder scheduled for tomorrow 9:00</p>
                </div>
              </div>
              <div style={{ position: 'relative', display: 'flex', gap: '14px' }}>
                <span style={{ flexShrink: 0, width: '24px', height: '24px', borderRadius: '8px', background: '#F5F3FF', border: '1px solid #E6DEFA', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2 }}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" /></svg>
                </span>
                <div style={{ flex: 1, background: '#FBFAFE', border: '1px solid #F0EEF6', borderRadius: '11px', padding: '10px 13px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span style={{ fontSize: '12.5px', fontWeight: 600, color: '#1B1730' }}>Document sent</span>
                    <span style={{ fontSize: '10px', color: '#B4AEC6' }}>Yesterday</span>
                  </div>
                  <p style={{ margin: '4px 0 0', fontSize: '10.5px', lineHeight: 1.4, color: '#8B85A0' }}>Signing links delivered to 3 recipients</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </EsignatureRevealSection>
    </section>
  );
}
