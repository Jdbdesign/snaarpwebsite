import { DocsRevealSection } from './DocsRevealSection';

export function DocsAltVersionHistory() {
  return (
    <section style={{ background: '#F7F7F7', paddingTop: '92px', paddingBottom: '92px' }}>
      <DocsRevealSection className="max-w-7xl mx-auto px-6 lg:px-10" style={{ display: 'grid', gridTemplateColumns: '1fr 1.05fr', gap: '64px', alignItems: 'center' }}>
        {/* text (left) */}
        <div data-docs-reveal="">
          <h2 className="docs-row-heading" style={{ margin: 0, color: '#1B1730' }}>Every version, saved automatically.</h2>
          <p className="docs-lede" style={{ margin: '18px 0 0', color: '#5B5670' }}>Nothing to save, nothing to lose. Scroll back through the full history and restore any earlier version in a single click.</p>
          <div style={{ marginTop: '30px', display: 'flex', flexDirection: 'column', gap: '22px' }}>
            <div style={{ display: 'flex', gap: '15px' }}>
              <div style={{ flexShrink: 0, width: '38px', height: '38px', borderRadius: '11px', background: '#ECFDF9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#0E9384" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.5 19a4.5 4.5 0 0 0 0-9 6 6 0 0 0-11.6-1.5A4.5 4.5 0 0 0 6.5 19Z"></path></svg></div>
              <div><div className="docs-row-item-title" style={{ color: '#1B1730' }}>Saved as you type.</div><p className="docs-row-item-desc" style={{ margin: '5px 0 0', color: '#5B5670' }}>No manual saving — every change is stored the moment you make it.</p></div>
            </div>
            <div style={{ display: 'flex', gap: '15px' }}>
              <div style={{ flexShrink: 0, width: '38px', height: '38px', borderRadius: '11px', background: '#F5F3FF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v5h5"></path><path d="M3.05 13A9 9 0 1 0 6 5.3L3 8"></path><path d="M12 7v5l4 2"></path></svg></div>
              <div><div className="docs-row-item-title" style={{ color: '#1B1730' }}>Full revision history.</div><p className="docs-row-item-desc" style={{ margin: '5px 0 0', color: '#5B5670' }}>Scroll back through every timestamped edit and see who changed what.</p></div>
            </div>
            <div style={{ display: 'flex', gap: '15px' }}>
              <div style={{ flexShrink: 0, width: '38px', height: '38px', borderRadius: '11px', background: '#ECFDF9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#0E9384" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 14 4 9l5-5"></path><path d="M4 9h10a6 6 0 0 1 0 12H9"></path></svg></div>
              <div><div className="docs-row-item-title" style={{ color: '#1B1730' }}>Restore in one click.</div><p className="docs-row-item-desc" style={{ margin: '5px 0 0', color: '#5B5670' }}>Someone deleted a section? Roll the whole doc back to any point in time.</p></div>
            </div>
          </div>
        </div>
        {/* version history mock (right) */}
        <div data-docs-reveal="" data-docs-reveal-delay="120" style={{ position: 'relative' }}>
          <div style={{ background: '#fff', borderRadius: '20px', border: '1px solid #ECE9F5', boxShadow: '0 30px 60px -30px rgba(37,22,84,.3)', overflow: 'hidden', display: 'grid', gridTemplateColumns: '1.4fr 1fr' }}>
            {/* document side */}
            <div style={{ padding: '26px 26px 28px', borderRight: '1px solid #F0EEF6' }}>
              <div style={{ fontSize: '12.5px', fontWeight: '700', color: '#211C36', letterSpacing: '.02em' }}>PROJECT BRIEF</div>
              <div style={{ marginTop: '16px', display: 'flex', flexDirection: 'column', gap: '9px' }}>
                <div style={{ height: '7px', width: '100%', borderRadius: '3px', background: '#F1EFF7' }}></div>
                <div style={{ height: '7px', width: '90%', borderRadius: '3px', background: '#F1EFF7' }}></div>
                <div style={{ height: '7px', width: '96%', borderRadius: '3px', background: '#F1EFF7' }}></div>
                <div style={{ height: '7px', width: '80%', borderRadius: '3px', background: '#F1EFF7' }}></div>
              </div>
              <div style={{ marginTop: '20px', display: 'inline-flex', alignItems: 'center', gap: '7px', padding: '7px 13px', borderRadius: '999px', background: '#F5F3FF', border: '1px solid #EDE9FE', fontSize: '11px', fontWeight: '600', color: '#7C3AED', cursor: 'pointer' }}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 14 4 9l5-5"></path><path d="M4 9h10a6 6 0 0 1 0 12H9"></path></svg>Restore this version
              </div>
            </div>
            {/* history sidebar */}
            <div style={{ padding: '22px 20px', background: '#FBFAFE' }}>
              <div style={{ fontSize: '10px', fontWeight: '600', letterSpacing: '.07em', color: '#8B85A0', textTransform: 'uppercase' }}>Version history</div>
              <div style={{ marginTop: '16px', position: 'relative' }}>
                <div style={{ position: 'absolute', left: '8px', top: '6px', bottom: '6px', width: '2px', background: '#E9E4F2' }}></div>
                <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <div style={{ display: 'flex', gap: '11px', alignItems: 'flex-start', animation: 'docs-audit-in 8s ease-in-out infinite' }}>
                    <span style={{ width: '18px', height: '18px', borderRadius: '50%', background: '#7C3AED', border: '2px solid #fff', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}><span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#fff' }}></span></span>
                    <div><div style={{ fontSize: '10.5px', fontWeight: '600', color: '#211C36' }}>Current · you</div><div style={{ fontSize: '9px', color: '#B4AEC6', fontVariantNumeric: 'tabular-nums' }}>Today · 14:02</div></div>
                  </div>
                  <div style={{ display: 'flex', gap: '11px', alignItems: 'flex-start', animation: 'docs-audit-in 8s ease-in-out infinite', animationDelay: '1.4s' }}>
                    <span style={{ width: '18px', height: '18px', borderRadius: '50%', background: '#D5F5EF', border: '2px solid #fff', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '6.5px', fontWeight: '700', color: '#0E9384' }}>AS</span>
                    <div><div style={{ fontSize: '10.5px', fontWeight: '600', color: '#211C36' }}>Ade edited Budget</div><div style={{ fontSize: '9px', color: '#B4AEC6', fontVariantNumeric: 'tabular-nums' }}>Today · 12:40</div></div>
                  </div>
                  <div style={{ display: 'flex', gap: '11px', alignItems: 'flex-start', animation: 'docs-audit-in 8s ease-in-out infinite', animationDelay: '2.8s' }}>
                    <span style={{ width: '18px', height: '18px', borderRadius: '50%', background: '#EDE9FE', border: '2px solid #fff', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '6.5px', fontWeight: '700', color: '#7C3AED' }}>You</span>
                    <div><div style={{ fontSize: '10.5px', fontWeight: '600', color: '#211C36' }}>You edited Dates</div><div style={{ fontSize: '9px', color: '#B4AEC6', fontVariantNumeric: 'tabular-nums' }}>Today · 11:15</div></div>
                  </div>
                  <div style={{ display: 'flex', gap: '11px', alignItems: 'flex-start', animation: 'docs-audit-in 8s ease-in-out infinite', animationDelay: '4.2s' }}>
                    <span style={{ width: '18px', height: '18px', borderRadius: '50%', background: '#FEE2EC', border: '2px solid #fff', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '6.5px', fontWeight: '700', color: '#E11D74' }}>MK</span>
                    <div><div style={{ fontSize: '10.5px', fontWeight: '600', color: '#211C36' }}>Mia created doc</div><div style={{ fontSize: '9px', color: '#B4AEC6', fontVariantNumeric: 'tabular-nums' }}>Yesterday</div></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DocsRevealSection>
    </section>
  );
}
