import { NotepadRevealSection } from './NotepadRevealSection';

export function NotepadBentoGrid() {
  return (
    <section style={{ background: '#F7F7F7', paddingTop: '92px', paddingBottom: '92px' }}>
      <NotepadRevealSection className="max-w-7xl mx-auto px-6 lg:px-10">
        <div data-notepad-reveal="" style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 52px' }}>
          <span style={{ fontSize: '11.5px', fontWeight: '600', letterSpacing: '.14em', color: '#7C3AED', textTransform: 'uppercase' }}>Small notes, done right</span>
          <h2 className="notepad-section-heading" style={{ margin: '14px 0 0', color: '#1B1730' }}>Everything a quick note should do.</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6,1fr)', gap: '20px' }}>

          {/* BIG: Instant save */}
          <div data-notepad-reveal="" style={{ gridColumn: 'span 3', gridRow: 'span 2', background: '#fff', borderRadius: '22px', padding: '36px', border: '1px solid #EEEDF3', boxShadow: '0 20px 44px -28px rgba(37,22,84,.26)', display: 'flex', flexDirection: 'column' }}>
            <span style={{ display: 'inline-flex', alignSelf: 'flex-start', alignItems: 'center', gap: '7px', padding: '5px 12px', borderRadius: '999px', background: '#F5F3FF', color: '#7C3AED', fontSize: '11.5px', fontWeight: '600', border: '1px solid #EDE9FE', whiteSpace: 'nowrap' }}>Core</span>
            <h3 className="notepad-bento-hero-title" style={{ margin: '18px 0 0', color: '#1B1730' }}>Instant save</h3>
            <p style={{ margin: '11px 0 0', fontSize: '15.5px', lineHeight: 1.6, color: '#5B5670', maxWidth: '400px' }}>No save button, ever. Every keystroke is written the moment you type it — nothing to lose, nothing to remember.</p>
            <div style={{ marginTop: '28px', flex: 1, minHeight: '210px', background: 'linear-gradient(160deg,#FBFAFE,#F4F1FC)', borderRadius: '16px', border: '1px solid #F0EEF7', position: 'relative', overflow: 'hidden', padding: '24px' }}>
              <div style={{ background: '#fff', border: '1px solid #EFEDF6', borderRadius: '12px', padding: '16px 18px', boxShadow: '0 12px 26px -16px rgba(37,22,84,.3)' }}>
                <div style={{ fontSize: '13px', fontWeight: '700', color: '#1B1730' }}>Meeting takeaways</div>
                <div style={{ marginTop: '10px', display: 'flex', flexDirection: 'column', gap: '7px' }}>
                  <div style={{ height: '7px', width: '100%', borderRadius: '3px', background: '#F1EFF7' }}></div>
                  <div style={{ height: '7px', width: '82%', borderRadius: '3px', background: '#F1EFF7' }}></div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '2px' }}><div style={{ height: '7px', width: '46%', borderRadius: '3px', background: '#F1EFF7' }}></div><span style={{ display: 'inline-block', width: '1.5px', height: '13px', background: '#7C3AED', marginLeft: '2px', animation: 'notepad-caret-blink 1s steps(1) infinite' }}></span></div>
                </div>
              </div>
              <div style={{ position: 'absolute', bottom: '16px', right: '18px', display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '6px 12px', borderRadius: '999px', background: '#ECFDF9', border: '1px solid #CDF5EE', fontSize: '10.5px', fontWeight: '700', color: '#0E9384' }}><span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#14B8A6', animation: 'notepad-live-pulse 2.6s ease-out infinite' }}></span>Saved · just now</div>
            </div>
          </div>

          {/* Checklists */}
          <div data-notepad-reveal="" data-notepad-reveal-delay="100" style={{ gridColumn: 'span 3', background: '#fff', borderRadius: '22px', padding: '28px 30px', border: '1px solid #EEEDF3', boxShadow: '0 20px 44px -28px rgba(37,22,84,.26)', display: 'flex', alignItems: 'center', gap: '24px' }}>
            <div style={{ flex: 1 }}>
              <h3 className="notepad-card-title" style={{ margin: 0, color: '#1B1730' }}>Checklists</h3>
              <p className="notepad-card-desc" style={{ margin: '9px 0 0', color: '#5B5670' }}>Quick to-dos right inside a note — tick them off as you go.</p>
            </div>
            <div style={{ flexShrink: 0, width: '150px', display: 'flex', flexDirection: 'column', gap: '9px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '9px' }}><span style={{ width: '17px', height: '17px', borderRadius: '5px', background: '#7C3AED', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"></path></svg></span><span style={{ height: '6px', flex: 1, borderRadius: '3px', background: '#E4DFF2' }}></span></div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '9px' }}><span style={{ width: '17px', height: '17px', borderRadius: '5px', background: '#7C3AED', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"></path></svg></span><span style={{ height: '6px', flex: 1, borderRadius: '3px', background: '#E4DFF2' }}></span></div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '9px' }}><span style={{ width: '17px', height: '17px', borderRadius: '5px', border: '1.5px solid #D9D2EC' }}></span><span style={{ height: '6px', width: '70%', borderRadius: '3px', background: '#EFEDF6' }}></span></div>
            </div>
          </div>

          {/* Pin & color-code */}
          <div data-notepad-reveal="" data-notepad-reveal-delay="180" style={{ gridColumn: 'span 3', background: '#fff', borderRadius: '22px', padding: '28px 30px', border: '1px solid #EEEDF3', boxShadow: '0 20px 44px -28px rgba(37,22,84,.26)', display: 'flex', alignItems: 'center', gap: '24px' }}>
            <div style={{ flex: 1 }}>
              <h3 className="notepad-card-title" style={{ margin: 0, color: '#1B1730' }}>Pin &amp; color-code</h3>
              <p className="notepad-card-desc" style={{ margin: '9px 0 0', color: '#5B5670' }}>Keep the important ones on top, and sort by colour at a glance.</p>
            </div>
            <div style={{ flexShrink: 0, display: 'grid', gridTemplateColumns: 'repeat(2,44px)', gridTemplateRows: 'repeat(2,34px)', gap: '9px' }}>
              <div style={{ position: 'relative', borderRadius: '7px', background: '#ECFDF9', border: '1px solid #CDF5EE' }}><span style={{ position: 'absolute', top: '-5px', right: '-5px', width: '16px', height: '16px', borderRadius: '50%', background: '#0E9384', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><svg width="9" height="9" viewBox="0 0 24 24" fill="#fff" stroke="none"><path d="M9.5 2 12 8l6 .5-4.5 4 1.5 6-5.5-3.5L4.5 18l1.5-6L1.5 8.5 7.5 8Z"></path></svg></span></div>
              <div style={{ borderRadius: '7px', background: '#FEF6E7', border: '1px solid #FBEBC6' }}></div>
              <div style={{ borderRadius: '7px', background: '#FFEFF2', border: '1px solid #FBD5DD' }}></div>
              <div style={{ borderRadius: '7px', background: '#F5F3FF', border: '1px solid #E6DEFA' }}></div>
            </div>
          </div>

          {/* Fast search */}
          <div data-notepad-reveal="" data-notepad-reveal-delay="120" style={{ gridColumn: 'span 2', background: '#fff', borderRadius: '22px', padding: '28px', border: '1px solid #EEEDF3', boxShadow: '0 20px 44px -28px rgba(37,22,84,.26)' }}>
            <div style={{ height: '70px', marginBottom: '18px', display: 'flex', alignItems: 'center' }}>
              <div style={{ width: '100%', display: 'flex', alignItems: 'center', gap: '9px', padding: '11px 14px', borderRadius: '11px', background: '#FBFAFE', border: '1px solid #EDEBF2' }}><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg><span style={{ height: '6px', width: '52%', borderRadius: '3px', background: '#E4DFF2' }}></span></div>
            </div>
            <h3 style={{ fontSize: '18px', fontWeight: '700', letterSpacing: '-.01em', margin: 0, color: '#1B1730' }}>Fast search</h3>
            <p className="notepad-card-desc" style={{ margin: '8px 0 0', color: '#5B5670' }}>Find any note by title or content in seconds.</p>
          </div>

          {/* Cross-device sync */}
          <div data-notepad-reveal="" data-notepad-reveal-delay="200" style={{ gridColumn: 'span 2', background: '#fff', borderRadius: '22px', padding: '28px', border: '1px solid #EEEDF3', boxShadow: '0 20px 44px -28px rgba(37,22,84,.26)' }}>
            <div style={{ height: '70px', marginBottom: '18px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{ width: '44px', height: '52px', borderRadius: '8px', background: '#F5F3FF', border: '1.5px solid #E6DEFA', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2"></rect><line x1="12" y1="18" x2="12" y2="18"></line></svg></div>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#14B8A6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 1l4 4-4 4"></path><path d="M3 11V9a4 4 0 0 1 4-4h14"></path><path d="M7 23l-4-4 4-4"></path><path d="M21 13v2a4 4 0 0 1-4 4H3"></path></svg>
              <div style={{ width: '60px', height: '44px', borderRadius: '8px', background: '#ECFDF9', border: '1.5px solid #CDF5EE', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0E9384" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="14" rx="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line></svg></div>
            </div>
            <h3 style={{ fontSize: '18px', fontWeight: '700', letterSpacing: '-.01em', margin: 0, color: '#1B1730' }}>Cross-device sync</h3>
            <p className="notepad-card-desc" style={{ margin: '8px 0 0', color: '#5B5670' }}>Start on one device, finish on another.</p>
          </div>

          {/* Promote to Document */}
          <div data-notepad-reveal="" data-notepad-reveal-delay="280" style={{ gridColumn: 'span 2', background: '#fff', borderRadius: '22px', padding: '28px', border: '1px solid #EEEDF3', boxShadow: '0 20px 44px -28px rgba(37,22,84,.26)' }}>
            <div style={{ height: '70px', marginBottom: '18px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{ width: '38px', height: '46px', borderRadius: '7px', background: '#FEF6E7', border: '1px solid #FBEBC6', display: 'flex', flexDirection: 'column', gap: '3px', padding: '8px 7px' }}><span style={{ height: '2.5px', width: '70%', borderRadius: '1px', background: '#E6C980' }}></span><span style={{ height: '2px', width: '100%', borderRadius: '1px', background: '#F0E2BD' }}></span></div>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C7C2D6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
              <div style={{ width: '44px', height: '52px', borderRadius: '7px', background: '#F5F3FF', border: '1px solid #E6DEFA', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 8px 16px -10px rgba(124,58,237,.4)' }}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><path d="M14 2v6h6"></path></svg></div>
            </div>
            <h3 style={{ fontSize: '18px', fontWeight: '700', letterSpacing: '-.01em', margin: 0, color: '#1B1730' }}>Promote to Document</h3>
            <p className="notepad-card-desc" style={{ margin: '8px 0 0', color: '#5B5670' }}>Turn a note into a full doc when it outgrows Notepad.</p>
          </div>
        </div>
        <div data-notepad-reveal="" style={{ textAlign: 'center', marginTop: '40px' }}>
          <a href="#" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '14px 26px', borderRadius: '999px', background: '#fff', color: '#2A2440', fontWeight: '600', fontSize: '15px', cursor: 'pointer', border: '1.5px solid #E4DFF2' }}>See How It Works
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          </a>
        </div>
      </NotepadRevealSection>
    </section>
  );
}
