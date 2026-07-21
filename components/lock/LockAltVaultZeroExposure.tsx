import { LockRevealSection } from './LockRevealSection';

export function LockAltVaultZeroExposure() {
  return (
    <section style={{ background: '#fff', paddingTop: '92px', paddingBottom: '92px' }}>
      <LockRevealSection className="max-w-7xl mx-auto px-6 lg:px-10" style={{ display: 'grid', gridTemplateColumns: '1.05fr 1fr', gap: '64px', alignItems: 'center' }}>
        {/* vault panel mock (left) */}
        <div data-lock-reveal="" style={{ position: 'relative' }}>
          <div style={{ position: 'absolute', inset: '18px -8px -16px 14px', background: 'linear-gradient(135deg,rgba(124,58,237,.10),rgba(20,184,166,.10))', borderRadius: '24px', filter: 'blur(2px)' }} />
          <div style={{ position: 'relative', background: '#fff', borderRadius: '20px', border: '1px solid #ECE9F5', boxShadow: '0 30px 60px -30px rgba(37,22,84,.3)', overflow: 'hidden' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '12px 16px', borderBottom: '1px solid #F0EEF6', background: '#FBFAFE' }}>
              <span style={{ width: '24px', height: '24px', borderRadius: '7px', background: 'linear-gradient(135deg,#7C3AED,#9F67F5)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
              </span>
              <span style={{ fontSize: '12.5px', fontWeight: 700, color: '#1B1730' }}>Team Vault &middot; 12 logins</span>
              <span style={{ marginLeft: 'auto', display: 'inline-flex', alignItems: 'center', gap: '5px', fontSize: '10px', fontWeight: 700, color: '#7C3AED' }}>
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
                Encrypted
              </span>
            </div>
            <div style={{ padding: '14px 16px', display: 'flex', flexDirection: 'column', gap: '9px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '11px', padding: '10px 12px', borderRadius: '11px', background: '#FBFAFE', border: '1px solid #EFEDF6' }}>
                <span style={{ width: '28px', height: '28px', borderRadius: '8px', background: '#EDE9FE', color: '#7C3AED', fontSize: '10px', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Fi</span>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: '11.5px', fontWeight: 600, color: '#1B1730' }}>Figma</div>
                  <div style={{ fontSize: '9.5px', color: '#8B85A0' }}>design@acme.co</div>
                </div>
                <span style={{ fontFamily: 'ui-monospace,monospace', fontSize: '12px', letterSpacing: '.1em', color: '#B4AEC6' }}>&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#C7C2D6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z" /><circle cx="12" cy="12" r="3" /></svg>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '11px', padding: '10px 12px', borderRadius: '11px', background: '#F5F3FF', border: '1.5px solid #7C3AED', boxShadow: '0 12px 24px -14px rgba(124,58,237,.5)' }}>
                <span style={{ width: '28px', height: '28px', borderRadius: '8px', background: '#D5F5EF', color: '#0E9384', fontSize: '10px', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>St</span>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: '11.5px', fontWeight: 600, color: '#1B1730' }}>Stripe</div>
                  <div style={{ fontSize: '9.5px', color: '#8B85A0' }}>billing@acme.co</div>
                </div>
                <span style={{ fontFamily: 'ui-monospace,monospace', fontSize: '12px', letterSpacing: '.02em', color: '#7C3AED', fontWeight: 600 }}>quiet-meadow-7</span>
                <span style={{ width: '26px', height: '26px', borderRadius: '8px', background: '#7C3AED', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z" /><circle cx="12" cy="12" r="3" /></svg>
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '11px', padding: '10px 12px', borderRadius: '11px', background: '#FBFAFE', border: '1px solid #EFEDF6' }}>
                <span style={{ width: '28px', height: '28px', borderRadius: '8px', background: '#FDE6C9', color: '#B45309', fontSize: '10px', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>AW</span>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: '11.5px', fontWeight: 600, color: '#1B1730' }}>AWS Console</div>
                  <div style={{ fontSize: '9.5px', color: '#8B85A0' }}>ops@acme.co</div>
                </div>
                <span style={{ fontFamily: 'ui-monospace,monospace', fontSize: '12px', letterSpacing: '.1em', color: '#B4AEC6' }}>&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#C7C2D6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z" /><circle cx="12" cy="12" r="3" /></svg>
              </div>
            </div>
          </div>
        </div>
        {/* text (right) */}
        <div data-lock-reveal="" data-lock-reveal-delay="120">
          <h2 className="lock-row-heading" style={{ margin: 0, color: '#1B1730' }}>One vault, zero exposure.</h2>
          <p style={{ margin: '18px 0 0', fontSize: '16px', lineHeight: 1.62, color: '#5B5670' }}>Passwords stay hidden until you need them &mdash; and nothing ever leaves your device unencrypted.</p>
          <div style={{ marginTop: '30px', display: 'flex', flexDirection: 'column', gap: '22px' }}>
            <div style={{ display: 'flex', gap: '15px' }}>
              <div style={{ flexShrink: 0, width: '38px', height: '38px', borderRadius: '11px', background: '#F5F3FF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z" /><circle cx="12" cy="12" r="3" /></svg>
              </div>
              <div>
                <div className="lock-row-item-title" style={{ color: '#1B1730' }}>Masked until you reveal them.</div>
                <p className="lock-row-item-desc" style={{ margin: '5px 0 0', color: '#5B5670' }}>Passwords stay as dots until you choose to show one.</p>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '15px' }}>
              <div style={{ flexShrink: 0, width: '38px', height: '38px', borderRadius: '11px', background: '#ECFDF9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#0E9384" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" /></svg>
              </div>
              <div>
                <div className="lock-row-item-title" style={{ color: '#1B1730' }}>Auto-fill without copying.</div>
                <p className="lock-row-item-desc" style={{ margin: '5px 0 0', color: '#5B5670' }}>Fill logins directly &mdash; no password ever touches your clipboard.</p>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '15px' }}>
              <div style={{ flexShrink: 0, width: '38px', height: '38px', borderRadius: '11px', background: '#FEF6E7', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#B45309" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
              </div>
              <div>
                <div className="lock-row-item-title" style={{ color: '#1B1730' }}>Encrypted end-to-end.</div>
                <p className="lock-row-item-desc" style={{ margin: '5px 0 0', color: '#5B5670' }}>Every vault is encrypted so that Snaarp itself can&apos;t read it.</p>
              </div>
            </div>
          </div>
        </div>
      </LockRevealSection>
    </section>
  );
}
