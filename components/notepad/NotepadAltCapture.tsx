import { NotepadRevealSection } from './NotepadRevealSection';

export function NotepadAltCapture() {
  return (
    <section style={{ background: '#fff', paddingTop: '92px', paddingBottom: '92px' }}>
      <NotepadRevealSection className="max-w-7xl mx-auto px-6 lg:px-10" style={{ display: 'grid', gridTemplateColumns: '1.05fr 1fr', gap: '64px', alignItems: 'center' }}>
        {/* note grid mock (left) */}
        <div data-notepad-reveal="" style={{ position: 'relative' }}>
          <div style={{ position: 'absolute', inset: '18px -8px -16px 14px', background: 'linear-gradient(135deg,rgba(124,58,237,.10),rgba(20,184,166,.10))', borderRadius: '24px', filter: 'blur(2px)' }}></div>
          <div style={{ position: 'relative', background: '#fff', borderRadius: '20px', border: '1px solid #ECE9F5', boxShadow: '0 30px 60px -30px rgba(37,22,84,.3)', overflow: 'hidden' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '11px 16px', borderBottom: '1px solid #F0EEF6', background: '#FBFAFE' }}>
              <span style={{ width: '24px', height: '24px', borderRadius: '7px', background: '#F5F3FF', border: '1px solid #E6DEFA', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4Z"></path></svg></span>
              <span style={{ fontSize: '12.5px', fontWeight: '700', color: '#1B1730' }}>My notes</span>
              <span style={{ marginLeft: 'auto', display: 'inline-flex', alignItems: 'center', gap: '5px', fontSize: '10.5px', fontWeight: '600', color: '#0E9384' }}><span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#14B8A6', animation: 'notepad-live-pulse 2.6s ease-out infinite' }}></span>Saved</span>
            </div>
            <div style={{ padding: '18px', display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <div style={{ background: '#fff', border: '1px solid #ECE9F5', borderRadius: '13px', padding: '14px 16px', boxShadow: '0 10px 22px -18px rgba(37,22,84,.3)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '7px' }}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 11 3 3L22 4"></path><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path></svg><span style={{ fontSize: '13px', fontWeight: '700', color: '#1B1730' }}>Groceries</span></div>
                  <div style={{ marginTop: '9px', display: 'flex', flexDirection: 'column', gap: '7px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><span style={{ width: '15px', height: '15px', borderRadius: '5px', background: '#7C3AED', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"></path></svg></span><span style={{ fontSize: '11px', color: '#B4AEC6', textDecoration: 'line-through' }}>Oat milk</span></div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><span style={{ width: '15px', height: '15px', borderRadius: '5px', border: '1.5px solid #D9D2EC' }}></span><span style={{ fontSize: '11px', color: '#3B3550' }}>Coffee beans</span></div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><span style={{ width: '15px', height: '15px', borderRadius: '5px', border: '1.5px solid #D9D2EC' }}></span><span style={{ fontSize: '11px', color: '#3B3550' }}>Tomatoes</span></div>
                  </div>
                </div>
                <div style={{ background: '#FEF6E7', border: '1px solid #FBEBC6', borderRadius: '13px', padding: '13px 16px' }}>
                  <div style={{ fontSize: '12.5px', fontWeight: '600', color: '#1B1730' }}>Return library book</div>
                  <div style={{ fontSize: '10.5px', color: '#96702B', marginTop: '4px' }}>Due Friday</div>
                </div>
              </div>
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <div style={{ background: '#ECFDF9', border: '1px solid #CDF5EE', borderRadius: '13px', padding: '13px 16px', position: 'relative' }}>
                  <span style={{ position: 'absolute', top: '11px', right: '12px' }}><svg width="12" height="12" viewBox="0 0 24 24" fill="#0E9384" stroke="none"><path d="M9.5 2 12 8l6 .5-4.5 4 1.5 6-5.5-3.5L4.5 18l1.5-6L1.5 8.5 7.5 8Z"></path></svg></span>
                  <div style={{ fontSize: '9px', fontWeight: '700', letterSpacing: '.09em', textTransform: 'uppercase', color: '#0E9384' }}>Pinned</div>
                  <div style={{ fontSize: '12.5px', fontWeight: '600', color: '#1B1730', marginTop: '5px' }}>Wifi password</div>
                  <div style={{ fontSize: '10.5px', color: '#3B3550', marginTop: '3px', fontFamily: 'monospace' }}>sunflower-42-blue</div>
                </div>
                <div style={{ background: '#fff', border: '1px solid #ECE9F5', borderRadius: '13px', padding: '13px 16px', boxShadow: '0 10px 22px -18px rgba(37,22,84,.3)' }}>
                  <div style={{ fontSize: '12.5px', fontWeight: '600', color: '#1B1730' }}>Quote to remember</div>
                  <div style={{ fontSize: '10.5px', color: '#5B5670', lineHeight: 1.55, marginTop: '4px' }}>&quot;The best time to plant a tree was 20 years ago.&quot;</div>
                </div>
                <div style={{ background: '#FFEFF2', border: '1px solid #FBD5DD', borderRadius: '13px', padding: '11px 16px' }}>
                  <div style={{ fontSize: '12px', fontWeight: '600', color: '#1B1730' }}>Birthday gift</div>
                  <div style={{ fontSize: '10px', color: '#A33A56', marginTop: '3px' }}>That ceramics class?</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* text (right) */}
        <div data-notepad-reveal="" data-notepad-reveal-delay="120">
          <h2 className="notepad-row-heading" style={{ margin: 0, color: '#1B1730' }}>Capture it before you lose it.</h2>
          <p className="notepad-lede" style={{ margin: '18px 0 0', color: '#5B5670' }}>A stray thought, a to-do, a link worth keeping — get it down in a couple of taps, in whatever shape fits.</p>
          <div style={{ marginTop: '30px', display: 'flex', flexDirection: 'column', gap: '22px' }}>
            <div style={{ display: 'flex', gap: '15px' }}>
              <div style={{ flexShrink: 0, width: '38px', height: '38px', borderRadius: '11px', background: '#F5F3FF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4Z"></path></svg></div>
              <div><div className="notepad-row-item-title" style={{ color: '#1B1730' }}>Blank note, checklist, or quick sketch.</div><p className="notepad-row-item-desc" style={{ margin: '5px 0 0', color: '#5B5670' }}>Pick whatever fits the thought — no format to commit to up front.</p></div>
            </div>
            <div style={{ display: 'flex', gap: '15px' }}>
              <div style={{ flexShrink: 0, width: '38px', height: '38px', borderRadius: '11px', background: '#ECFDF9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#0E9384" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9.5 2 12 8l6 .5-4.5 4 1.5 6-5.5-3.5L4.5 18l1.5-6L1.5 8.5 7.5 8Z"></path></svg></div>
              <div><div className="notepad-row-item-title" style={{ color: '#1B1730' }}>Color-code and pin what matters most.</div><p className="notepad-row-item-desc" style={{ margin: '5px 0 0', color: '#5B5670' }}>Keep the important notes on top and easy to spot.</p></div>
            </div>
            <div style={{ display: 'flex', gap: '15px' }}>
              <div style={{ flexShrink: 0, width: '38px', height: '38px', borderRadius: '11px', background: '#FEF6E7', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#B45309" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg></div>
              <div><div className="notepad-row-item-title" style={{ color: '#1B1730' }}>Everything saves instantly.</div><p className="notepad-row-item-desc" style={{ margin: '5px 0 0', color: '#5B5670' }}>No save button needed — it&apos;s written the moment you type.</p></div>
            </div>
          </div>
        </div>
      </NotepadRevealSection>
    </section>
  );
}
