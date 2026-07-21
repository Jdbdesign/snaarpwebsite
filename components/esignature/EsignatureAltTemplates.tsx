import { EsignatureRevealSection } from './EsignatureRevealSection';

export function EsignatureAltTemplates() {
  return (
    <section style={{ background: '#fff', paddingTop: '92px', paddingBottom: '92px' }}>
      <EsignatureRevealSection className="max-w-7xl mx-auto px-6 lg:px-10" style={{ display: 'grid', gridTemplateColumns: '1.05fr 1fr', gap: '64px', alignItems: 'center' }}>
        {/* template library mock (left) */}
        <div data-esignature-reveal="" style={{ position: 'relative' }}>
          <div style={{ position: 'absolute', inset: '18px -8px -16px 14px', background: 'linear-gradient(135deg,rgba(124,58,237,.10),rgba(20,184,166,.10))', borderRadius: '24px', filter: 'blur(2px)' }} />
          <div style={{ position: 'relative', background: '#fff', borderRadius: '20px', border: '1px solid #ECE9F5', boxShadow: '0 30px 60px -30px rgba(37,22,84,.3)', overflow: 'hidden' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '12px 16px', borderBottom: '1px solid #F0EEF6', background: '#FBFAFE' }}>
              <span style={{ width: '24px', height: '24px', borderRadius: '7px', background: '#F5F3FF', border: '1px solid #E6DEFA', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="8" y="8" width="12" height="12" rx="2" /><path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2" /></svg>
              </span>
              <span style={{ fontSize: '12.5px', fontWeight: 700, color: '#1B1730' }}>Templates</span>
              <span style={{ marginLeft: 'auto', fontSize: '11px', fontWeight: 600, color: '#8B85A0' }}>6 saved</span>
            </div>
            <div style={{ padding: '14px 16px', display: 'flex', flexDirection: 'column', gap: '9px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '11px', padding: '11px 12px', borderRadius: '12px', background: '#F5F3FF', border: '1.5px solid #7C3AED', boxShadow: '0 12px 24px -16px rgba(124,58,237,.5)' }}>
                <span style={{ width: '30px', height: '30px', borderRadius: '8px', background: '#fff', border: '1px solid #E6DEFA', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /></svg>
                </span>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: '12.5px', fontWeight: 600, color: '#1B1730' }}>Mutual NDA</div>
                  <div style={{ fontSize: '10px', color: '#8B85A0' }}>2 signature fields</div>
                </div>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', padding: '7px 13px', borderRadius: '999px', background: '#7C3AED', color: '#fff', fontSize: '10.5px', fontWeight: 600 }}>Use template</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '11px', padding: '11px 12px', borderRadius: '12px', background: '#FBFAFE', border: '1px solid #EFEDF6' }}>
                <span style={{ width: '30px', height: '30px', borderRadius: '8px', background: '#FEF6E7', border: '1px solid #FBEBC6', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#B45309" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /></svg>
                </span>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: '12.5px', fontWeight: 600, color: '#1B1730' }}>Offer letter</div>
                  <div style={{ fontSize: '10px', color: '#8B85A0' }}>3 signature fields</div>
                </div>
                <span style={{ fontSize: '10.5px', fontWeight: 600, color: '#B4AEC6' }}>Use</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '11px', padding: '11px 12px', borderRadius: '12px', background: '#FBFAFE', border: '1px solid #EFEDF6' }}>
                <span style={{ width: '30px', height: '30px', borderRadius: '8px', background: '#ECFDF9', border: '1px solid #CDF5EE', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#0E9384" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /></svg>
                </span>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: '12.5px', fontWeight: 600, color: '#1B1730' }}>Contractor agreement</div>
                  <div style={{ fontSize: '10px', color: '#8B85A0' }}>2 signature fields</div>
                </div>
                <span style={{ fontSize: '10.5px', fontWeight: 600, color: '#B4AEC6' }}>Use</span>
              </div>
            </div>
          </div>
        </div>
        {/* text (right) */}
        <div data-esignature-reveal="" data-esignature-reveal-delay="120">
          <h2 className="esignature-row-heading" style={{ margin: 0, color: '#1B1730' }}>Templates for the paperwork you send every week.</h2>
          <p style={{ margin: '18px 0 0', fontSize: '16px', lineHeight: 1.62, color: '#5B5670' }}>The same NDA, the same offer letter, the same fields &mdash; saved once, sent in seconds.</p>
          <div style={{ marginTop: '30px', display: 'flex', flexDirection: 'column', gap: '22px' }}>
            <div style={{ display: 'flex', gap: '15px' }}>
              <div style={{ flexShrink: 0, width: '38px', height: '38px', borderRadius: '11px', background: '#F5F3FF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="8" y="8" width="12" height="12" rx="2" /><path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2" /></svg>
              </div>
              <div>
                <div className="esignature-row-item-title" style={{ color: '#1B1730' }}>Save any document as a template.</div>
                <p className="esignature-row-item-desc" style={{ margin: '5px 0 0', color: '#5B5670' }}>Turn the paperwork you send often into a one-click send.</p>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '15px' }}>
              <div style={{ flexShrink: 0, width: '38px', height: '38px', borderRadius: '11px', background: '#ECFDF9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#0E9384" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 11l3 3L22 4" /><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" /></svg>
              </div>
              <div>
                <div className="esignature-row-item-title" style={{ color: '#1B1730' }}>Signature fields stay in place.</div>
                <p className="esignature-row-item-desc" style={{ margin: '5px 0 0', color: '#5B5670' }}>Placed once &mdash; every copy you send has them exactly where they belong.</p>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '15px' }}>
              <div style={{ flexShrink: 0, width: '38px', height: '38px', borderRadius: '11px', background: '#FEF6E7', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#B45309" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" /></svg>
              </div>
              <div>
                <div className="esignature-row-item-title" style={{ color: '#1B1730' }}>Send a fresh copy in seconds.</div>
                <p className="esignature-row-item-desc" style={{ margin: '5px 0 0', color: '#5B5670' }}>No re-uploading, no re-placing fields &mdash; just pick a signer and send.</p>
              </div>
            </div>
          </div>
        </div>
      </EsignatureRevealSection>
    </section>
  );
}
