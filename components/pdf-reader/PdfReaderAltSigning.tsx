import { PdfReaderRevealSection } from './PdfReaderRevealSection';

export function PdfReaderAltSigning() {
  return (
    <section style={{ background: '#F7F7F7', paddingTop: '92px', paddingBottom: '92px' }}>
      <PdfReaderRevealSection className="max-w-7xl mx-auto px-6 lg:px-10" style={{ display: 'grid', gridTemplateColumns: '1fr 1.05fr', gap: '64px', alignItems: 'center' }}>
        {/* text (left) */}
        <div data-pdf-reveal="">
          <h2 className="pdf-reader-row-heading" style={{ margin: 0, color: '#1B1730' }}>Signing that actually holds up.</h2>
          <p className="pdf-reader-lede" style={{ margin: '18px 0 0', color: '#5B5670' }}>Add your signature, request one from someone else, and keep a tamper-evident record of who signed what and when.</p>
          <div style={{ marginTop: '30px', display: 'flex', flexDirection: 'column', gap: '22px' }}>
            <div style={{ display: 'flex', gap: '15px' }}>
              <div style={{ flexShrink: 0, width: '38px', height: '38px', borderRadius: '11px', background: '#F5F3FF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 20a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2"></path><path d="M4 15s2-3 5-3 4 2 6 1 3-4 5-4"></path></svg></div>
              <div><div className="pdf-reader-row-item-title" style={{ color: '#1B1730' }}>Draw, type, or upload your signature.</div><p className="pdf-reader-row-item-desc" style={{ margin: '5px 0 0', color: '#5B5670' }}>Sign your way, then reuse the same signature on the next doc.</p></div>
            </div>
            <div style={{ display: 'flex', gap: '15px' }}>
              <div style={{ flexShrink: 0, width: '38px', height: '38px', borderRadius: '11px', background: '#ECFDF9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#0E9384" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 2 11 13"></path><path d="M22 2 15 22l-4-9-9-4z"></path></svg></div>
              <div><div className="pdf-reader-row-item-title" style={{ color: '#1B1730' }}>Request a signature from anyone.</div><p className="pdf-reader-row-item-desc" style={{ margin: '5px 0 0', color: '#5B5670' }}>Send a link to someone outside your team — no account needed on their end.</p></div>
            </div>
            <div style={{ display: 'flex', gap: '15px' }}>
              <div style={{ flexShrink: 0, width: '38px', height: '38px', borderRadius: '11px', background: '#ECFDF9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#0E9384" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><path d="m9 12 2 2 4-4"></path></svg></div>
              <div><div className="pdf-reader-row-item-title" style={{ color: '#1B1730' }}>A timestamped, tamper-evident trail.</div><p className="pdf-reader-row-item-desc" style={{ margin: '5px 0 0', color: '#5B5670' }}>Every signed document logs who signed, and exactly when.</p></div>
            </div>
          </div>
        </div>
        {/* signature + audit mock (right) */}
        <div data-pdf-reveal="" data-pdf-reveal-delay="120" style={{ position: 'relative' }}>
          <div style={{ background: '#fff', borderRadius: '20px', border: '1px solid #ECE9F5', boxShadow: '0 30px 60px -30px rgba(37,22,84,.3)', overflow: 'hidden', display: 'grid', gridTemplateColumns: '1.5fr 1fr' }}>
            {/* document side */}
            <div style={{ padding: '26px 26px 28px', borderRight: '1px solid #F0EEF6' }}>
              <div style={{ fontSize: '12.5px', fontWeight: '700', color: '#211C36', letterSpacing: '.02em' }}>MASTER AGREEMENT</div>
              <div style={{ marginTop: '16px', display: 'flex', flexDirection: 'column', gap: '9px' }}>
                <div style={{ height: '7px', width: '100%', borderRadius: '3px', background: '#F1EFF7' }}></div>
                <div style={{ height: '7px', width: '90%', borderRadius: '3px', background: '#F1EFF7' }}></div>
                <div style={{ height: '7px', width: '96%', borderRadius: '3px', background: '#F1EFF7' }}></div>
              </div>
              <div style={{ marginTop: '24px', fontSize: '9.5px', fontWeight: '600', letterSpacing: '.06em', color: '#8B85A0', textTransform: 'uppercase' }}>Authorised signature</div>
              <div style={{ position: 'relative', marginTop: '8px', height: '58px', borderRadius: '11px', border: '1.5px dashed #C9BEEE', background: '#FBFAFE', overflow: 'hidden' }}>
                <svg viewBox="0 0 150 44" style={{ position: 'absolute', left: '14px', top: '9px', width: '140px', height: '38px' }} fill="none"><path d="M8 30 C 12 12, 20 10, 22 26 C 23 34, 28 34, 31 20 C 33 10, 39 12, 40 28 C 45 18, 50 8, 56 22 C 60 32, 66 20, 70 14 C 78 6, 86 22, 96 18 C 106 14, 112 26, 120 18 C 128 12, 136 22, 144 16" stroke="#211C36" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="520" style={{ animation: 'pdf-reader-sig-draw 7s ease-in-out infinite' }}></path></svg>
                <div style={{ position: 'absolute', left: '18px', top: '12px', animation: 'pdf-reader-pen-move 7s ease-in-out infinite' }}><svg width="17" height="17" viewBox="0 0 24 24" fill="#7C3AED" stroke="#fff" strokeWidth="1"><path d="M12 19l7-7 3 3-7 7-3-3z"></path><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path></svg></div>
              </div>
              <div style={{ marginTop: '12px', display: 'flex', alignItems: 'center', gap: '6px', fontSize: '10.5px', fontWeight: '600', color: '#0E9384' }}>
                <span style={{ width: '16px', height: '16px', borderRadius: '50%', background: '#14B8A6', display: 'flex', alignItems: 'center', justifyContent: 'center', animation: 'pdf-reader-signed-pop 7s ease-in-out infinite' }}><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"></path></svg></span>Signed &amp; locked
              </div>
            </div>
            {/* audit sidebar */}
            <div style={{ padding: '22px 20px', background: '#FBFAFE' }}>
              <div style={{ fontSize: '10px', fontWeight: '600', letterSpacing: '.07em', color: '#8B85A0', textTransform: 'uppercase' }}>Audit trail</div>
              <div style={{ marginTop: '16px', position: 'relative' }}>
                <div style={{ position: 'absolute', left: '8px', top: '6px', bottom: '6px', width: '2px', background: '#E9E4F2' }}></div>
                <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <div style={{ display: 'flex', gap: '11px', alignItems: 'flex-start', animation: 'pdf-reader-audit-in 8s ease-in-out infinite' }}>
                    <span style={{ width: '18px', height: '18px', borderRadius: '50%', background: '#EDE9FE', border: '2px solid #fff', flexShrink: 0 }}></span>
                    <div><div style={{ fontSize: '10.5px', fontWeight: '600', color: '#211C36' }}>Opened</div><div style={{ fontSize: '9px', color: '#B4AEC6', fontVariantNumeric: 'tabular-nums' }}>Today · 09:02</div></div>
                  </div>
                  <div style={{ display: 'flex', gap: '11px', alignItems: 'flex-start', animation: 'pdf-reader-audit-in 8s ease-in-out infinite', animationDelay: '1.4s' }}>
                    <span style={{ width: '18px', height: '18px', borderRadius: '50%', background: '#14B8A6', border: '2px solid #fff', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"></path></svg></span>
                    <div><div style={{ fontSize: '10.5px', fontWeight: '600', color: '#211C36' }}>Signed by you</div><div style={{ fontSize: '9px', color: '#B4AEC6', fontVariantNumeric: 'tabular-nums' }}>Today · 09:24</div></div>
                  </div>
                  <div style={{ display: 'flex', gap: '11px', alignItems: 'flex-start', animation: 'pdf-reader-audit-in 8s ease-in-out infinite', animationDelay: '2.8s' }}>
                    <span style={{ width: '18px', height: '18px', borderRadius: '50%', background: '#F5F3FF', border: '2px solid #fff', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}><svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M22 2 11 13"></path><path d="M22 2 15 22l-4-9-9-4z"></path></svg></span>
                    <div><div style={{ fontSize: '10.5px', fontWeight: '600', color: '#211C36' }}>Sent to Jo M.</div><div style={{ fontSize: '9px', color: '#B4AEC6', fontVariantNumeric: 'tabular-nums' }}>Today · 09:25</div></div>
                  </div>
                  <div style={{ display: 'flex', gap: '11px', alignItems: 'flex-start', animation: 'pdf-reader-audit-in 8s ease-in-out infinite', animationDelay: '4.2s' }}>
                    <span style={{ width: '18px', height: '18px', borderRadius: '50%', background: '#14B8A6', border: '2px solid #fff', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"></path></svg></span>
                    <div><div style={{ fontSize: '10.5px', fontWeight: '600', color: '#211C36' }}>Signed by Jo M.</div><div style={{ fontSize: '9px', color: '#B4AEC6', fontVariantNumeric: 'tabular-nums' }}>Today · 10:07</div></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </PdfReaderRevealSection>
    </section>
  );
}
