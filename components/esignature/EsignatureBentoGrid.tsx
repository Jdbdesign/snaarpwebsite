import { EsignatureRevealSection } from './EsignatureRevealSection';

export function EsignatureBentoGrid() {
  return (
    <section style={{ background: '#F7F7F7', paddingTop: '92px', paddingBottom: '92px' }}>
      <EsignatureRevealSection className="max-w-7xl mx-auto px-6 lg:px-10">
        <div data-esignature-reveal="" style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 52px' }}>
          <span style={{ fontSize: '11.5px', fontWeight: 600, letterSpacing: '.14em', color: '#7C3AED', textTransform: 'uppercase' }}>Everything a signature needs</span>
          <h2 className="esignature-section-heading" style={{ margin: '14px 0 0', color: '#1B1730' }}>From draft to signed, tracked all the way.</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6,1fr)', gap: '20px' }}>

          {/* BIG : Send for signature */}
          <div data-esignature-reveal="" style={{ gridColumn: 'span 3', gridRow: 'span 2', background: '#fff', borderRadius: '22px', padding: '36px', border: '1px solid #EEEDF3', boxShadow: '0 20px 44px -28px rgba(37,22,84,.26)', display: 'flex', flexDirection: 'column' }}>
            <span style={{ display: 'inline-flex', alignSelf: 'flex-start', alignItems: 'center', gap: '7px', padding: '5px 12px', borderRadius: '999px', background: '#F5F3FF', color: '#7C3AED', fontSize: '11.5px', fontWeight: 600, border: '1px solid #EDE9FE', whiteSpace: 'nowrap' }}>Core</span>
            <h3 className="esignature-bento-hero-title" style={{ margin: '18px 0 0', color: '#1B1730' }}>Send for signature</h3>
            <p style={{ margin: '11px 0 0', fontSize: '15.5px', lineHeight: 1.6, color: '#5B5670', maxWidth: '400px' }}>Email a signing link to anyone &mdash; no account needed on their end. They sign in the browser, you get the completed copy back.</p>
            <div style={{ marginTop: '28px', flex: 1, minHeight: '200px', background: 'linear-gradient(160deg,#FBFAFE,#F4F1FC)', borderRadius: '16px', border: '1px solid #F0EEF7', padding: '22px', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '14px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 14px', borderRadius: '12px', background: '#fff', border: '1px solid #EFEDF6', boxShadow: '0 10px 22px -16px rgba(37,22,84,.4)' }}>
                <span style={{ width: '34px', height: '34px', borderRadius: '9px', background: '#FFEFF2', border: '1px solid #FBD5DD', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#E11D74" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /></svg>
                </span>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: '12px', fontWeight: 600, color: '#1B1730' }}>Signing link</div>
                  <div style={{ fontSize: '10px', color: '#8B85A0' }}>snaarp.co/sign/&hellip;</div>
                </div>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '7px 13px', borderRadius: '999px', background: '#7C3AED', color: '#fff', fontSize: '11px', fontWeight: 600 }}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" /></svg>Send
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', paddingLeft: '6px' }}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#0E9384" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
                <span style={{ fontSize: '11px', fontWeight: 600, color: '#0E9384' }}>No signer account required</span>
              </div>
            </div>
          </div>

          {/* Reusable templates */}
          <div data-esignature-reveal="" data-esignature-reveal-delay="100" style={{ gridColumn: 'span 3', background: '#fff', borderRadius: '22px', padding: '28px 30px', border: '1px solid #EEEDF3', boxShadow: '0 20px 44px -28px rgba(37,22,84,.26)', display: 'flex', alignItems: 'center', gap: '24px' }}>
            <div style={{ flex: 1 }}>
              <h3 className="esignature-card-title" style={{ fontSize: '20px', margin: 0, color: '#1B1730' }}>Reusable templates</h3>
              <p className="esignature-card-desc" style={{ margin: '9px 0 0', color: '#5B5670' }}>Save a document once, send it repeatedly &mdash; fields stay put.</p>
            </div>
            <div style={{ flexShrink: 0, width: '130px', position: 'relative', height: '74px' }}>
              <div style={{ position: 'absolute', left: '16px', top: 0, width: '82px', height: '64px', borderRadius: '10px', background: '#FBFAFE', border: '1px solid #EFEDF6', transform: 'rotate(6deg)' }} />
              <div style={{ position: 'absolute', left: '8px', top: '4px', width: '82px', height: '64px', borderRadius: '10px', background: '#F5F3FF', border: '1px solid #E6DEFA', transform: 'rotate(-4deg)' }} />
              <div style={{ position: 'absolute', left: '12px', top: '6px', width: '82px', height: '64px', borderRadius: '10px', background: '#fff', border: '1px solid #E4DFF2', boxShadow: '0 10px 20px -12px rgba(37,22,84,.3)', padding: '10px 11px', display: 'flex', flexDirection: 'column', gap: '5px' }}>
                <span style={{ height: '4px', width: '70%', borderRadius: '2px', background: '#E4DFF2' }} />
                <span style={{ height: '4px', width: '50%', borderRadius: '2px', background: '#EDE9FE' }} />
                <span style={{ marginTop: 'auto', height: '12px', width: '44px', borderRadius: '4px', background: '#7C3AED' }} />
              </div>
            </div>
          </div>

          {/* Multi-signer workflows */}
          <div data-esignature-reveal="" data-esignature-reveal-delay="180" style={{ gridColumn: 'span 3', background: '#fff', borderRadius: '22px', padding: '28px 30px', border: '1px solid #EEEDF3', boxShadow: '0 20px 44px -28px rgba(37,22,84,.26)', display: 'flex', alignItems: 'center', gap: '24px' }}>
            <div style={{ flex: 1 }}>
              <h3 className="esignature-card-title" style={{ fontSize: '20px', margin: 0, color: '#1B1730' }}>Multi-signer workflows</h3>
              <p className="esignature-card-desc" style={{ margin: '9px 0 0', color: '#5B5670' }}>Route a document to several people, in the order you set.</p>
            </div>
            <div style={{ flexShrink: 0, display: 'flex', alignItems: 'center', gap: '5px' }}>
              <span style={{ width: '30px', height: '30px', borderRadius: '50%', background: '#EDE9FE', color: '#7C3AED', fontSize: '10px', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid #fff', boxShadow: '0 4px 10px -6px rgba(37,22,84,.4)' }}>1</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C7C2D6" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
              <span style={{ width: '30px', height: '30px', borderRadius: '50%', background: '#FDE6C9', color: '#B45309', fontSize: '10px', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid #fff', boxShadow: '0 4px 10px -6px rgba(37,22,84,.4)' }}>2</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C7C2D6" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
              <span style={{ width: '30px', height: '30px', borderRadius: '50%', background: '#D5F5EF', color: '#0E9384', fontSize: '10px', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid #fff', boxShadow: '0 4px 10px -6px rgba(37,22,84,.4)' }}>3</span>
            </div>
          </div>

          {/* Real-time status tracking */}
          <div data-esignature-reveal="" data-esignature-reveal-delay="120" style={{ gridColumn: 'span 2', background: '#fff', borderRadius: '22px', padding: '28px', border: '1px solid #EEEDF3', boxShadow: '0 20px 44px -28px rgba(37,22,84,.26)' }}>
            <div style={{ height: '70px', marginBottom: '18px', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '7px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
                <span style={{ width: '16px', height: '16px', borderRadius: '50%', background: '#D5F5EF', color: '#0E9384', fontSize: '6px', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>AR</span>
                <span style={{ height: '5px', flex: 1, borderRadius: '3px', background: '#EFEDF6' }} />
                <span style={{ padding: '2px 7px', borderRadius: '999px', background: '#ECFDF9', fontSize: '7.5px', fontWeight: 700, color: '#0E9384' }}>Signed</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
                <span style={{ width: '16px', height: '16px', borderRadius: '50%', background: '#FDE6C9', color: '#B45309', fontSize: '6px', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>PS</span>
                <span style={{ height: '5px', flex: 1, borderRadius: '3px', background: '#EFEDF6' }} />
                <span style={{ padding: '2px 7px', borderRadius: '999px', background: '#FEF6E7', fontSize: '7.5px', fontWeight: 700, color: '#B45309' }}>Viewed</span>
              </div>
            </div>
            <h3 className="esignature-card-title" style={{ fontSize: '18px', margin: 0, color: '#1B1730' }}>Real-time status tracking</h3>
            <p className="esignature-card-desc" style={{ margin: '8px 0 0', color: '#5B5670' }}>See who&apos;s viewed, who&apos;s signed, who&apos;s pending.</p>
          </div>

          {/* Automatic reminders */}
          <div data-esignature-reveal="" data-esignature-reveal-delay="200" style={{ gridColumn: 'span 2', background: '#fff', borderRadius: '22px', padding: '28px', border: '1px solid #EEEDF3', boxShadow: '0 20px 44px -28px rgba(37,22,84,.26)' }}>
            <div style={{ height: '70px', marginBottom: '18px', display: 'flex', alignItems: 'center', gap: '11px' }}>
              <div style={{ position: 'relative', width: '44px', height: '44px', borderRadius: '12px', background: '#FEF6E7', border: '1px solid #FBEBC6', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="#B45309" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" /><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" /></svg>
                <span style={{ position: 'absolute', top: '-3px', right: '-3px', width: '14px', height: '14px', borderRadius: '50%', background: '#E11D74', color: '#fff', fontSize: '8px', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>1</span>
              </div>
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <span style={{ height: '6px', width: '70%', borderRadius: '3px', background: '#EFEDF6' }} />
                <span style={{ height: '5px', width: '50%', borderRadius: '3px', background: '#F1EFF7' }} />
              </div>
            </div>
            <h3 className="esignature-card-title" style={{ fontSize: '18px', margin: 0, color: '#1B1730' }}>Automatic reminders</h3>
            <p className="esignature-card-desc" style={{ margin: '8px 0 0', color: '#5B5670' }}>Nudge signers who haven&apos;t completed yet.</p>
          </div>

          {/* Signed audit trail */}
          <div data-esignature-reveal="" data-esignature-reveal-delay="280" style={{ gridColumn: 'span 2', background: '#fff', borderRadius: '22px', padding: '28px', border: '1px solid #EEEDF3', boxShadow: '0 20px 44px -28px rgba(37,22,84,.26)' }}>
            <div style={{ height: '70px', marginBottom: '18px', display: 'flex', alignItems: 'center', gap: '11px' }}>
              <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: '#ECFDF9', border: '1px solid #CDF5EE', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="#0E9384" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12l2 2 4-4" /><path d="M21 12c-1 0-3-1-3-3s2-3 3-3-1-2-3-2-3 2-3 2-1-2-3-2-3 2-3 2 2 1 2 3-2 3-3 3 1 2 3 2 3-2 3-2 1 2 3 2 3-2 3-2z" /></svg>
              </div>
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <span style={{ height: '6px', width: '65%', borderRadius: '3px', background: '#D5F5EF' }} />
                <span style={{ height: '5px', width: '45%', borderRadius: '3px', background: '#ECFDF9' }} />
              </div>
            </div>
            <h3 className="esignature-card-title" style={{ fontSize: '18px', margin: 0, color: '#1B1730' }}>Signed audit trail</h3>
            <p className="esignature-card-desc" style={{ margin: '8px 0 0', color: '#5B5670' }}>Every signature timestamped and tamper-evident.</p>
          </div>
        </div>
        <div data-esignature-reveal="" style={{ textAlign: 'center', marginTop: '40px' }}>
          <a href="#" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '14px 26px', borderRadius: '999px', background: '#fff', color: '#2A2440', fontWeight: 600, fontSize: '15px', cursor: 'pointer', border: '1.5px solid #E4DFF2' }}>
            See How It Works
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
          </a>
        </div>
      </EsignatureRevealSection>
    </section>
  );
}
