import { LockRevealSection } from './LockRevealSection';

export function LockBentoGrid() {
  return (
    <section style={{ background: '#F7F7F7', paddingTop: '92px', paddingBottom: '92px' }}>
      <LockRevealSection className="max-w-7xl mx-auto px-6 lg:px-10">
        <div data-lock-reveal="" style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 52px' }}>
          <span style={{ fontSize: '11.5px', fontWeight: 600, letterSpacing: '.14em', color: '#7C3AED', textTransform: 'uppercase' }}>Everything a vault needs</span>
          <h2 className="lock-section-heading" style={{ margin: '14px 0 0', color: '#1B1730' }}>Secure by default, simple to share.</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6,1fr)', gap: '20px' }}>

          {/* BIG : End-to-end encryption */}
          <div data-lock-reveal="" style={{ gridColumn: 'span 3', gridRow: 'span 2', background: '#1B1730', borderRadius: '22px', padding: '36px', border: '1px solid #1B1730', boxShadow: '0 24px 50px -30px rgba(27,23,48,.7)', display: 'flex', flexDirection: 'column', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: '-60px', right: '-40px', width: '220px', height: '220px', background: 'radial-gradient(circle,rgba(124,58,237,.4),transparent 66%)' }} />
            <span style={{ position: 'relative', display: 'inline-flex', alignSelf: 'flex-start', alignItems: 'center', gap: '7px', padding: '5px 12px', borderRadius: '999px', background: 'rgba(124,58,237,.22)', color: '#C4B5FD', fontSize: '11.5px', fontWeight: 600, border: '1px solid rgba(159,103,245,.4)', whiteSpace: 'nowrap' }}>Zero-knowledge</span>
            <h3 className="lock-bento-hero-title" style={{ position: 'relative', margin: '18px 0 0', color: '#fff' }}>End-to-end encryption</h3>
            <p style={{ position: 'relative', margin: '11px 0 0', fontSize: '15.5px', lineHeight: 1.6, color: '#B7B1C9', maxWidth: '400px' }}>Your vault is encrypted before it ever leaves your device &mdash; nobody else can read what&apos;s inside, not even Snaarp.</p>
            <div style={{ position: 'relative', marginTop: '28px', flex: 1, minHeight: '180px', background: 'rgba(255,255,255,.04)', borderRadius: '16px', border: '1px solid rgba(255,255,255,.09)', padding: '22px', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '14px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ fontSize: '12px', color: '#8E88A3', width: '66px', flexShrink: 0 }}>Plaintext</span>
                <span style={{ fontFamily: 'ui-monospace,monospace', fontSize: '13px', color: '#E7E3F3', letterSpacing: '.02em' }}>north-cedar-lime-42</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', paddingLeft: '78px' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
                <span style={{ fontSize: '10.5px', fontWeight: 600, color: '#9F8BD6', letterSpacing: '.06em' }}>AES-256 &middot; encrypted on device</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ fontSize: '12px', color: '#8E88A3', width: '66px', flexShrink: 0 }}>On server</span>
                <span style={{ fontFamily: 'ui-monospace,monospace', fontSize: '13px', color: '#6B6683', letterSpacing: '-.02em', wordBreak: 'break-all' }}>a9F2&middot;d7Kq&middot;Lm3x&middot;Vb8&middot;Zt1w&middot;Pe6</span>
              </div>
            </div>
          </div>

          {/* Secure sharing */}
          <div data-lock-reveal="" data-lock-reveal-delay="100" style={{ gridColumn: 'span 3', background: '#fff', borderRadius: '22px', padding: '28px 30px', border: '1px solid #EEEDF3', boxShadow: '0 20px 44px -28px rgba(37,22,84,.26)', display: 'flex', alignItems: 'center', gap: '24px' }}>
            <div style={{ flex: 1 }}>
              <h3 className="lock-card-title" style={{ fontSize: '20px', margin: 0, color: '#1B1730' }}>Secure sharing</h3>
              <p className="lock-card-desc" style={{ margin: '9px 0 0', color: '#5B5670' }}>Share a login without ever revealing the raw password.</p>
            </div>
            <div style={{ flexShrink: 0, width: '150px', display: 'flex', flexDirection: 'column', gap: '9px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '7px 9px', borderRadius: '9px', background: '#FBFAFE', border: '1px solid #EFEDF6' }}>
                <span style={{ width: '22px', height: '22px', borderRadius: '50%', background: '#EDE9FE', color: '#7C3AED', fontSize: '8px', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>TK</span>
                <span style={{ height: '5px', flex: 1, borderRadius: '3px', background: '#EFEDF6' }} />
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#0E9384" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '7px 9px', borderRadius: '9px', background: '#FBFAFE', border: '1px solid #EFEDF6' }}>
                <span style={{ width: '22px', height: '22px', borderRadius: '50%', background: '#D5F5EF', color: '#0E9384', fontSize: '8px', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>AR</span>
                <span style={{ height: '5px', flex: 1, borderRadius: '3px', background: '#EFEDF6' }} />
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#0E9384" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
              </div>
            </div>
          </div>

          {/* Password generator */}
          <div data-lock-reveal="" data-lock-reveal-delay="180" style={{ gridColumn: 'span 3', background: '#fff', borderRadius: '22px', padding: '28px 30px', border: '1px solid #EEEDF3', boxShadow: '0 20px 44px -28px rgba(37,22,84,.26)', display: 'flex', alignItems: 'center', gap: '24px' }}>
            <div style={{ flex: 1 }}>
              <h3 className="lock-card-title" style={{ fontSize: '20px', margin: 0, color: '#1B1730' }}>Password generator</h3>
              <p className="lock-card-desc" style={{ margin: '9px 0 0', color: '#5B5670' }}>Strong, unique passwords on demand &mdash; one tap.</p>
            </div>
            <div style={{ flexShrink: 0, width: '150px', display: 'flex', flexDirection: 'column', gap: '9px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '9px 10px', borderRadius: '10px', background: '#FBFAFE', border: '1px solid #EFEDF6', fontFamily: 'ui-monospace,monospace', fontSize: '11.5px', color: '#4A4560', letterSpacing: '.02em' }}>
                qK7&middot;vT9&middot;mP2
                <span style={{ marginLeft: 'auto' }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 2v6h-6" /><path d="M3 12a9 9 0 0 1 15-6.7L21 8" /><path d="M3 22v-6h6" /><path d="M21 12a9 9 0 0 1-15 6.7L3 16" /></svg>
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                <span style={{ height: '5px', flex: 1, borderRadius: '3px', background: '#0E9384' }} />
                <span style={{ height: '5px', flex: 1, borderRadius: '3px', background: '#0E9384' }} />
                <span style={{ height: '5px', flex: 1, borderRadius: '3px', background: '#0E9384' }} />
                <span style={{ fontSize: '9px', fontWeight: 700, color: '#0E9384', marginLeft: '3px' }}>Strong</span>
              </div>
            </div>
          </div>

          {/* Breach monitoring */}
          <div data-lock-reveal="" data-lock-reveal-delay="120" style={{ gridColumn: 'span 2', background: '#fff', borderRadius: '22px', padding: '28px', border: '1px solid #EEEDF3', boxShadow: '0 20px 44px -28px rgba(37,22,84,.26)' }}>
            <div style={{ height: '70px', marginBottom: '18px', display: 'flex', alignItems: 'center', gap: '11px' }}>
              <div style={{ position: 'relative', width: '44px', height: '44px', borderRadius: '12px', background: '#FFEFF2', border: '1px solid #FBD5DD', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="#E11D74" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" /><line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12" y2="17" /></svg>
              </div>
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <span style={{ height: '6px', width: '70%', borderRadius: '3px', background: '#FBD5DD' }} />
                <span style={{ height: '5px', width: '45%', borderRadius: '3px', background: '#F6E4E9' }} />
              </div>
            </div>
            <h3 className="lock-card-title" style={{ fontSize: '18px', margin: 0, color: '#1B1730' }}>Breach monitoring</h3>
            <p className="lock-card-desc" style={{ margin: '8px 0 0', color: '#5B5670' }}>Flagged if a saved login appears in a known breach.</p>
          </div>

          {/* Access logs */}
          <div data-lock-reveal="" data-lock-reveal-delay="200" style={{ gridColumn: 'span 2', background: '#fff', borderRadius: '22px', padding: '28px', border: '1px solid #EEEDF3', boxShadow: '0 20px 44px -28px rgba(37,22,84,.26)' }}>
            <div style={{ height: '70px', marginBottom: '18px', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '7px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ width: '18px', height: '18px', borderRadius: '50%', background: '#EDE9FE', color: '#7C3AED', fontSize: '7px', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>TK</span>
                <span style={{ height: '5px', flex: 1, borderRadius: '3px', background: '#EFEDF6' }} />
                <span style={{ fontSize: '9px', color: '#B4AEC6' }}>2m</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ width: '18px', height: '18px', borderRadius: '50%', background: '#D5F5EF', color: '#0E9384', fontSize: '7px', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>AR</span>
                <span style={{ height: '5px', width: '65%', borderRadius: '3px', background: '#EFEDF6' }} />
                <span style={{ fontSize: '9px', color: '#B4AEC6', marginLeft: 'auto' }}>1h</span>
              </div>
            </div>
            <h3 className="lock-card-title" style={{ fontSize: '18px', margin: 0, color: '#1B1730' }}>Access logs</h3>
            <p className="lock-card-desc" style={{ margin: '8px 0 0', color: '#5B5670' }}>See who accessed what, and exactly when.</p>
          </div>

          {/* Cross-device sync */}
          <div data-lock-reveal="" data-lock-reveal-delay="280" style={{ gridColumn: 'span 2', background: '#fff', borderRadius: '22px', padding: '28px', border: '1px solid #EEEDF3', boxShadow: '0 20px 44px -28px rgba(37,22,84,.26)' }}>
            <div style={{ height: '70px', marginBottom: '18px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{ width: '42px', height: '42px', borderRadius: '11px', background: '#F5F3FF', border: '1px solid #E6DEFA', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /></svg>
              </div>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#14B8A6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 1l4 4-4 4" /><path d="M3 11V9a4 4 0 0 1 4-4h14" /><path d="M7 23l-4-4 4-4" /><path d="M21 13v2a4 4 0 0 1-4 4H3" /></svg>
              <div style={{ width: '30px', height: '42px', borderRadius: '9px', background: '#ECFDF9', border: '1px solid #CDF5EE', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#0E9384" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" /></svg>
              </div>
            </div>
            <h3 className="lock-card-title" style={{ fontSize: '18px', margin: 0, color: '#1B1730' }}>Cross-device sync</h3>
            <p className="lock-card-desc" style={{ margin: '8px 0 0', color: '#5B5670' }}>Vault available on desktop and mobile.</p>
          </div>
        </div>
        <div data-lock-reveal="" style={{ textAlign: 'center', marginTop: '40px' }}>
          <a href="#" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '14px 26px', borderRadius: '999px', background: '#fff', color: '#2A2440', fontWeight: 600, fontSize: '15px', cursor: 'pointer', border: '1.5px solid #E4DFF2' }}>
            See How It Works
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
          </a>
        </div>
      </LockRevealSection>
    </section>
  );
}
