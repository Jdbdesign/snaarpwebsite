import { PdfReaderRevealSection } from './PdfReaderRevealSection';

export function PdfReaderBentoGrid() {
  return (
    <section style={{ background: '#F7F7F7', paddingTop: '92px', paddingBottom: '92px' }}>
      <PdfReaderRevealSection className="max-w-7xl mx-auto px-6 lg:px-10">
        <div data-pdf-reveal="" style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 52px' }}>
          <span style={{ fontSize: '11.5px', fontWeight: '600', letterSpacing: '.14em', color: '#7C3AED', textTransform: 'uppercase' }}>Everything you need on a PDF</span>
          <h2 className="pdf-reader-section-heading" style={{ margin: '14px 0 0', color: '#1B1730' }}>Read, mark up, and sign — in one place.</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6,1fr)', gap: '20px' }}>

          {/* BIG: Fill & sign */}
          <div data-pdf-reveal="" style={{ gridColumn: 'span 3', gridRow: 'span 2', background: '#fff', borderRadius: '22px', padding: '36px', border: '1px solid #EEEDF3', boxShadow: '0 20px 44px -28px rgba(37,22,84,.26)', display: 'flex', flexDirection: 'column' }}>
            <span style={{ display: 'inline-flex', alignSelf: 'flex-start', alignItems: 'center', gap: '7px', padding: '5px 12px', borderRadius: '999px', background: '#F5F3FF', color: '#7C3AED', fontSize: '11.5px', fontWeight: '600', border: '1px solid #EDE9FE', whiteSpace: 'nowrap' }}>Core</span>
            <h3 className="pdf-reader-bento-hero-title" style={{ margin: '18px 0 0', color: '#1B1730' }}>Fill &amp; sign</h3>
            <p style={{ margin: '11px 0 0', fontSize: '15.5px', lineHeight: 1.6, color: '#5B5670', maxWidth: '400px' }}>Type, draw, or upload your signature and drop it exactly where it belongs.</p>
            <div style={{ marginTop: '28px', flex: 1, minHeight: '206px', background: 'linear-gradient(160deg,#FBFAFE,#F4F1FC)', borderRadius: '16px', border: '1px solid #F0EEF7', position: 'relative', overflow: 'hidden', padding: '26px 28px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '9px' }}>
                <div style={{ height: '8px', width: '100%', borderRadius: '3px', background: '#EAE6F4' }}></div>
                <div style={{ height: '8px', width: '86%', borderRadius: '3px', background: '#EAE6F4' }}></div>
                <div style={{ height: '8px', width: '92%', borderRadius: '3px', background: '#EAE6F4' }}></div>
              </div>
              <div style={{ position: 'absolute', left: '28px', right: '28px', bottom: '26px' }}>
                <div style={{ fontSize: '10px', fontWeight: '600', letterSpacing: '.06em', color: '#8B85A0', textTransform: 'uppercase', marginBottom: '8px' }}>Signature</div>
                <div style={{ position: 'relative', height: '62px', borderRadius: '11px', border: '1.5px dashed #C9BEEE', background: '#fff', overflow: 'hidden', boxShadow: '0 12px 24px -16px rgba(37,22,84,.3)' }}>
                  <svg viewBox="0 0 150 44" style={{ position: 'absolute', left: '18px', top: '11px', width: '150px', height: '40px' }} fill="none"><path d="M8 30 C 12 12, 20 10, 22 26 C 23 34, 28 34, 31 20 C 33 10, 39 12, 40 28 C 45 18, 50 8, 56 22 C 60 32, 66 20, 70 14 C 78 6, 86 22, 96 18 C 106 14, 112 26, 120 18 C 128 12, 136 22, 144 16" stroke="#211C36" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="520" style={{ animation: 'pdf-reader-sig-draw 6s ease-in-out infinite' }}></path></svg>
                  <div style={{ position: 'absolute', left: '22px', top: '14px', animation: 'pdf-reader-pen-move 6s ease-in-out infinite' }}><svg width="18" height="18" viewBox="0 0 24 24" fill="#7C3AED" stroke="#fff" strokeWidth="1"><path d="M12 19l7-7 3 3-7 7-3-3z"></path><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path></svg></div>
                  <span style={{ position: 'absolute', right: '12px', bottom: '10px', width: '20px', height: '20px', borderRadius: '50%', background: '#14B8A6', display: 'flex', alignItems: 'center', justifyContent: 'center', animation: 'pdf-reader-signed-pop 6s ease-in-out infinite' }}><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"></path></svg></span>
                </div>
              </div>
            </div>
          </div>

          {/* Highlight & comment */}
          <div data-pdf-reveal="" data-pdf-reveal-delay="100" style={{ gridColumn: 'span 3', background: '#fff', borderRadius: '22px', padding: '28px 30px', border: '1px solid #EEEDF3', boxShadow: '0 20px 44px -28px rgba(37,22,84,.26)', display: 'flex', alignItems: 'center', gap: '24px' }}>
            <div style={{ flex: 1 }}>
              <h3 style={{ fontSize: '20px', fontWeight: '700', letterSpacing: '-.01em', margin: 0, color: '#1B1730' }}>Highlight &amp; comment</h3>
              <p style={{ margin: '9px 0 0', fontSize: '14.5px', lineHeight: 1.55, color: '#5B5670' }}>Mark up text and leave notes in the margin for anyone on the doc.</p>
            </div>
            <div style={{ width: '150px', flexShrink: 0, background: '#FBFAFE', border: '1px solid #F0EEF7', borderRadius: '13px', padding: '16px 15px', position: 'relative' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '7px' }}>
                <div style={{ height: '6px', width: '100%', borderRadius: '2px', background: '#EAE6F4' }}></div>
                <div style={{ position: 'relative', height: '9px', width: '82%', borderRadius: '2px', background: '#EAE6F4', overflow: 'hidden' }}><div style={{ position: 'absolute', inset: 0, background: '#FDE68A', borderRadius: '2px', animation: 'pdf-reader-hl-sweep-loop 6s ease-in-out infinite' }}></div></div>
                <div style={{ height: '6px', width: '92%', borderRadius: '2px', background: '#EAE6F4' }}></div>
              </div>
              <div style={{ position: 'absolute', right: '-10px', top: '26px', width: '26px', height: '26px', borderRadius: '50% 50% 50% 3px', background: '#FBBF24', boxShadow: '0 8px 16px -6px rgba(180,83,9,.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', animation: 'pdf-reader-comment-pop 6s ease-in-out infinite' }}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
              </div>
            </div>
          </div>

          {/* Freehand drawing */}
          <div data-pdf-reveal="" data-pdf-reveal-delay="200" style={{ gridColumn: 'span 3', background: '#fff', borderRadius: '22px', padding: '28px 30px', border: '1px solid #EEEDF3', boxShadow: '0 20px 44px -28px rgba(37,22,84,.26)', display: 'flex', alignItems: 'center', gap: '24px' }}>
            <div style={{ flex: 1 }}>
              <h3 style={{ fontSize: '20px', fontWeight: '700', letterSpacing: '-.01em', margin: 0, color: '#1B1730' }}>Freehand drawing</h3>
              <p style={{ margin: '9px 0 0', fontSize: '14.5px', lineHeight: 1.55, color: '#5B5670' }}>Sketch, circle, or annotate by hand — just like a pen on paper.</p>
            </div>
            <div style={{ width: '150px', height: '96px', flexShrink: 0, background: '#FBFAFE', border: '1px solid #F0EEF7', borderRadius: '13px', position: 'relative', overflow: 'hidden' }}>
              <svg viewBox="0 0 150 96" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }} fill="none">
                <ellipse cx="78" cy="48" rx="42" ry="26" stroke="#7C3AED" strokeWidth="2.6" strokeLinecap="round" strokeDasharray="300" style={{ animation: 'pdf-reader-draw-stroke 5.5s ease-in-out infinite' }}></ellipse>
              </svg>
              <div style={{ position: 'absolute', left: '30px', top: '34px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <div style={{ height: '5px', width: '56px', borderRadius: '2px', background: '#E4DFF2' }}></div>
                <div style={{ height: '5px', width: '44px', borderRadius: '2px', background: '#E4DFF2' }}></div>
              </div>
            </div>
          </div>

          {/* Request signatures */}
          <div data-pdf-reveal="" data-pdf-reveal-delay="120" style={{ gridColumn: 'span 2', background: '#fff', borderRadius: '22px', padding: '28px', border: '1px solid #EEEDF3', boxShadow: '0 20px 44px -28px rgba(37,22,84,.26)' }}>
            <div style={{ position: 'relative', height: '70px', marginBottom: '18px' }}>
              <div style={{ position: 'absolute', left: 0, top: '14px', width: '46px', height: '46px', borderRadius: '12px', background: '#F5F3FF', border: '1px solid #EDE9FE', display: 'flex', alignItems: 'center', justifyContent: 'center', animation: 'pdf-reader-env-send 5.5s ease-in-out infinite' }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
              </div>
              <div style={{ position: 'absolute', right: 0, top: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div style={{ width: '34px', height: '34px', borderRadius: '50%', background: '#D5F5EF', color: '#0E9384', fontSize: '12px', fontWeight: '600', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid #fff', boxShadow: '0 6px 14px -6px rgba(14,147,132,.4)' }}>JL</div>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', padding: '4px 9px', borderRadius: '999px', background: '#FEF6E7', border: '1px solid #FBEBC6', fontSize: '9.5px', fontWeight: '600', color: '#B45309' }}>Awaiting</span>
              </div>
            </div>
            <h3 style={{ fontSize: '18px', fontWeight: '700', letterSpacing: '-.01em', margin: 0, color: '#1B1730' }}>Request signatures</h3>
            <p style={{ margin: '8px 0 0', fontSize: '14px', lineHeight: 1.55, color: '#5B5670' }}>Send a doc out for signature with automatic reminders.</p>
          </div>

          {/* Fill forms */}
          <div data-pdf-reveal="" data-pdf-reveal-delay="200" style={{ gridColumn: 'span 2', background: '#fff', borderRadius: '22px', padding: '28px', border: '1px solid #EEEDF3', boxShadow: '0 20px 44px -28px rgba(37,22,84,.26)' }}>
            <div style={{ height: '70px', marginBottom: '18px', display: 'flex', flexDirection: 'column', gap: '8px', justifyContent: 'center' }}>
              <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                <div style={{ height: '26px', flex: 1, borderRadius: '7px', background: '#FBFAFE', border: '1px solid #EDE9FE', display: 'flex', alignItems: 'center', padding: '0 9px', animation: 'pdf-reader-field-focus 5s ease-in-out infinite' }}><span style={{ height: '6px', width: '40%', borderRadius: '2px', background: '#C9BEEE' }}></span></div>
                <span style={{ width: '20px', height: '20px', borderRadius: '6px', background: '#ECFDF9', display: 'flex', alignItems: 'center', justifyContent: 'center', animation: 'pdf-reader-tick-pop 5s ease-in-out infinite' }}><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#0E9384" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"></path></svg></span>
              </div>
              <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                <div style={{ height: '26px', flex: 1, borderRadius: '7px', background: '#FBFAFE', border: '1px solid #F0EEF7', display: 'flex', alignItems: 'center', padding: '0 9px', animation: 'pdf-reader-field-focus 5s ease-in-out infinite', animationDelay: '1.6s' }}><span style={{ height: '6px', width: '60%', borderRadius: '2px', background: '#E4DFF2' }}></span></div>
                <span style={{ width: '20px', height: '20px', borderRadius: '6px', background: '#ECFDF9', display: 'flex', alignItems: 'center', justifyContent: 'center', animation: 'pdf-reader-tick-pop 5s ease-in-out infinite', animationDelay: '1.6s' }}><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#0E9384" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"></path></svg></span>
              </div>
            </div>
            <h3 style={{ fontSize: '18px', fontWeight: '700', letterSpacing: '-.01em', margin: 0, color: '#1B1730' }}>Fill forms</h3>
            <p style={{ margin: '8px 0 0', fontSize: '14px', lineHeight: 1.55, color: '#5B5670' }}>Tab through form fields without printing anything.</p>
          </div>

          {/* Signed audit trail */}
          <div data-pdf-reveal="" data-pdf-reveal-delay="280" style={{ gridColumn: 'span 2', background: '#fff', borderRadius: '22px', padding: '28px', border: '1px solid #EEEDF3', boxShadow: '0 20px 44px -28px rgba(37,22,84,.26)' }}>
            <div style={{ height: '70px', marginBottom: '18px', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '9px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', animation: 'pdf-reader-audit-in 6s ease-in-out infinite' }}>
                <span style={{ width: '16px', height: '16px', borderRadius: '50%', background: '#14B8A6', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"></path></svg></span>
                <span style={{ fontSize: '10.5px', color: '#211C36', fontWeight: '500' }}>Signed by you</span>
                <span style={{ marginLeft: 'auto', fontSize: '9px', color: '#B4AEC6', fontVariantNumeric: 'tabular-nums' }}>09:24</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', animation: 'pdf-reader-audit-in 6s ease-in-out infinite', animationDelay: '1.4s' }}>
                <span style={{ width: '16px', height: '16px', borderRadius: '50%', background: '#14B8A6', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"></path></svg></span>
                <span style={{ fontSize: '10.5px', color: '#211C36', fontWeight: '500' }}>Signed by Jo M.</span>
                <span style={{ marginLeft: 'auto', fontSize: '9px', color: '#B4AEC6', fontVariantNumeric: 'tabular-nums' }}>10:07</span>
              </div>
            </div>
            <h3 style={{ fontSize: '18px', fontWeight: '700', letterSpacing: '-.01em', margin: 0, color: '#1B1730' }}>Signed audit trail</h3>
            <p style={{ margin: '8px 0 0', fontSize: '14px', lineHeight: 1.55, color: '#5B5670' }}>Every signature gets a timestamp and status log.</p>
          </div>
        </div>
        <div data-pdf-reveal="" style={{ textAlign: 'center', marginTop: '40px' }}>
          <a href="#" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '14px 26px', borderRadius: '999px', background: '#fff', color: '#2A2440', fontWeight: '600', fontSize: '15px', cursor: 'pointer', border: '1.5px solid #E4DFF2' }}>See How It Works
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          </a>
        </div>
      </PdfReaderRevealSection>
    </section>
  );
}
