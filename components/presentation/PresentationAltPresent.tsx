'use client';

import { useState } from 'react';
import { PresentationRevealSection } from './PresentationRevealSection';

// Editor/Present view toggle, ported 1:1 from the standalone bundle's
// Component class (state.present, onEditorView/onPresentView).
export function PresentationAltPresent() {
  const [present, setPresent] = useState(false);

  const editorTabStyle = {
    padding: '6px 16px', borderRadius: '999px', border: 'none', cursor: 'pointer', fontFamily: 'inherit', fontSize: '12.5px', fontWeight: 600, transition: 'all .2s',
    background: !present ? '#fff' : 'transparent',
    color: !present ? '#7C3AED' : '#8B85A0',
    boxShadow: !present ? '0 4px 10px -6px rgba(124,58,237,.5)' : 'none',
  } as const;
  const presentTabStyle = {
    padding: '6px 16px', borderRadius: '999px', border: 'none', cursor: 'pointer', fontFamily: 'inherit', fontSize: '12.5px', fontWeight: 600, transition: 'all .2s',
    background: present ? '#7C3AED' : 'transparent',
    color: present ? '#fff' : '#8B85A0',
    boxShadow: present ? '0 4px 10px -6px rgba(124,58,237,.5)' : 'none',
  } as const;

  return (
    <section style={{ background: '#F7F7F7', paddingTop: '92px', paddingBottom: '92px' }}>
      <PresentationRevealSection className="max-w-7xl mx-auto px-6 lg:px-10" style={{ display: 'grid', gridTemplateColumns: '1fr 1.05fr', gap: '64px', alignItems: 'center' }}>
        {/* text (left) */}
        <div data-presentation-reveal="">
          <h2 className="presentation-row-heading" style={{ margin: 0, color: '#1B1730' }}>Present without the fuss.</h2>
          <p className="presentation-lede" style={{ margin: '18px 0 0', color: '#5B5670' }}>One click drops you into full-screen present mode — with your private speaker notes right where you need them. Flip the switch to see it.</p>
          <div style={{ marginTop: '30px', display: 'flex', flexDirection: 'column', gap: '22px' }}>
            <div style={{ display: 'flex', gap: '15px' }}>
              <div style={{ flexShrink: 0, width: '38px', height: '38px', borderRadius: '11px', background: '#F5F3FF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg></div>
              <div><div className="presentation-row-item-title" style={{ color: '#1B1730' }}>Full-screen present mode, any device.</div><p className="presentation-row-item-desc" style={{ margin: '5px 0 0', color: '#5B5670' }}>One click to present from a laptop, tablet, or phone.</p></div>
            </div>
            <div style={{ display: 'flex', gap: '15px' }}>
              <div style={{ flexShrink: 0, width: '38px', height: '38px', borderRadius: '11px', background: '#ECFDF9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#0E9384" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg></div>
              <div><div className="presentation-row-item-title" style={{ color: '#1B1730' }}>Private speaker notes.</div><p className="presentation-row-item-desc" style={{ margin: '5px 0 0', color: '#5B5670' }}>Only you see them while presenting — the audience never does.</p></div>
            </div>
            <div style={{ display: 'flex', gap: '15px' }}>
              <div style={{ flexShrink: 0, width: '38px', height: '38px', borderRadius: '11px', background: '#FEF6E7', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#B45309" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path><polyline points="16 6 12 2 8 6"></polyline><line x1="12" y1="2" x2="12" y2="15"></line></svg></div>
              <div><div className="presentation-row-item-title" style={{ color: '#1B1730' }}>Share a view-only link.</div><p className="presentation-row-item-desc" style={{ margin: '5px 0 0', color: '#5B5670' }}>Anyone can follow along remotely — no account needed to watch.</p></div>
            </div>
          </div>
        </div>
        {/* present toggle mock (right) */}
        <div data-presentation-reveal="" data-presentation-reveal-delay="120" style={{ position: 'relative' }}>
          <div style={{ position: 'absolute', inset: '18px 14px -16px -8px', background: 'linear-gradient(135deg,rgba(124,58,237,.12),rgba(20,184,166,.10))', borderRadius: '24px', filter: 'blur(2px)' }}></div>
          <div style={{ position: 'relative', background: '#fff', borderRadius: '20px', border: '1px solid #ECE9F5', boxShadow: '0 30px 60px -30px rgba(37,22,84,.3)', overflow: 'hidden' }}>
            {/* control bar with segmented toggle */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '12px 15px', borderBottom: '1px solid #F0EEF6', background: '#FBFAFE' }}>
              <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#FB7185' }}></span>
              <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#FBBF24' }}></span>
              <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#34D399' }}></span>
              <div style={{ marginLeft: 'auto', display: 'inline-flex', background: '#F1EFF7', borderRadius: '999px', padding: '3px' }}>
                <button type="button" onClick={() => setPresent(false)} style={editorTabStyle}>Editor</button>
                <button type="button" onClick={() => setPresent(true)} style={presentTabStyle}>Present</button>
              </div>
            </div>

            {/* stage */}
            <div style={{ position: 'relative', height: '320px' }}>
              {!present ? (
                <div style={{ display: 'grid', gridTemplateColumns: '66px 1fr', height: '320px' }}>
                  <div style={{ borderRight: '1px solid #F0EEF6', background: '#FBFAFE', padding: '14px 10px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <div style={{ aspectRatio: '4/3', borderRadius: '6px', background: '#fff', border: '1px solid #EAE7F2' }}></div>
                    <div style={{ aspectRatio: '4/3', borderRadius: '6px', background: '#fff', border: '2px solid #7C3AED', boxShadow: '0 6px 14px -8px rgba(124,58,237,.5)' }}></div>
                    <div style={{ aspectRatio: '4/3', borderRadius: '6px', background: '#fff', border: '1px solid #EAE7F2' }}></div>
                    <div style={{ aspectRatio: '4/3', borderRadius: '6px', background: '#fff', border: '1px solid #EAE7F2' }}></div>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <div style={{ flex: 1, padding: '24px 26px', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '11px' }}>
                      <div style={{ fontSize: '14px', fontWeight: '700', color: '#211C36', letterSpacing: '.02em' }}>CLOSING THOUGHTS</div>
                      <div style={{ height: '8px', width: '100%', borderRadius: '3px', background: '#F1EFF7' }}></div>
                      <div style={{ height: '8px', width: '86%', borderRadius: '3px', background: '#F1EFF7' }}></div>
                      <div style={{ height: '8px', width: '72%', borderRadius: '3px', background: '#F1EFF7' }}></div>
                    </div>
                    <div style={{ borderTop: '1px solid #F0EEF6', background: '#FBFAFE', padding: '12px 20px' }}>
                      <div style={{ fontSize: '9px', fontWeight: '700', letterSpacing: '.08em', textTransform: 'uppercase', color: '#8B85A0' }}>Speaker notes</div>
                      <p style={{ margin: '6px 0 0', fontSize: '11px', lineHeight: 1.5, color: '#5B5670' }}>Thank the team, then open the floor for questions. Keep this under two minutes.</p>
                    </div>
                  </div>
                </div>
              ) : (
                <div style={{ height: '320px', background: '#0E0A1E', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '36px' }}>
                  <div style={{ width: '100%', maxWidth: '420px', aspectRatio: '16/9', borderRadius: '14px', background: 'linear-gradient(150deg,#7C3AED,#6D28D9)', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 40px', gap: '14px', boxShadow: '0 30px 60px -20px rgba(0,0,0,.6)' }}>
                    <div style={{ fontSize: '22px', fontWeight: '700', letterSpacing: '-.02em', color: '#fff' }}>Closing thoughts</div>
                    <div style={{ height: '6px', width: '70%', borderRadius: '3px', background: 'rgba(255,255,255,.55)' }}></div>
                    <div style={{ height: '6px', width: '52%', borderRadius: '3px', background: 'rgba(255,255,255,.4)' }}></div>
                  </div>
                  <div style={{ position: 'absolute', left: '20px', bottom: '18px', maxWidth: '220px', background: 'rgba(255,255,255,.1)', backdropFilter: 'blur(6px)', border: '1px solid rgba(255,255,255,.16)', borderRadius: '12px', padding: '10px 13px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#C4B5FD" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg><span style={{ fontSize: '8.5px', fontWeight: '700', letterSpacing: '.08em', textTransform: 'uppercase', color: '#C4B5FD' }}>Your notes only</span></div>
                    <p style={{ margin: '6px 0 0', fontSize: '10.5px', lineHeight: 1.5, color: 'rgba(255,255,255,.86)' }}>Thank the team, then open the floor. Keep it under two minutes.</p>
                  </div>
                  <div style={{ position: 'absolute', right: '18px', top: '16px', display: 'inline-flex', alignItems: 'center', gap: '5px', padding: '5px 11px', borderRadius: '999px', background: 'rgba(255,255,255,.12)', border: '1px solid rgba(255,255,255,.2)', fontSize: '9.5px', fontWeight: '600', color: '#fff' }}><span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#34D399' }}></span>Presenting · 8 / 12</div>
                </div>
              )}
            </div>
          </div>
        </div>
      </PresentationRevealSection>
    </section>
  );
}
