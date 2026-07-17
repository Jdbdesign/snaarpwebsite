'use client';

import { useState } from 'react';
import { PresentationRevealSection } from './PresentationRevealSection';

interface Template {
  name: string;
  tag: string;
  bg: string;
}

const TEMPLATES: Template[] = [
  { name: 'Pitch deck', tag: '14 slides', bg: 'linear-gradient(150deg,#7C3AED,#6D28D9)' },
  { name: 'Quarterly review', tag: '9 slides', bg: 'linear-gradient(150deg,#0E9384,#0B7268)' },
  { name: 'Project kickoff', tag: '7 slides', bg: 'linear-gradient(150deg,#F59E0B,#B45309)' },
  { name: 'All-hands', tag: '11 slides', bg: 'linear-gradient(150deg,#E11D74,#B10E5A)' },
];

// Templates & themes carousel: cycleTpl(dir), ported 1:1 from the standalone
// bundle's Component class.
export function PresentationBentoGrid() {
  const [tpl, setTpl] = useState(0);

  function cycleTpl(dir: number) {
    setTpl((t) => (t + dir + TEMPLATES.length) % TEMPLATES.length);
  }

  const active = TEMPLATES[tpl];

  return (
    <section style={{ background: '#F7F7F7', paddingTop: '92px', paddingBottom: '92px' }}>
      <PresentationRevealSection className="max-w-7xl mx-auto px-6 lg:px-10">
        <div data-presentation-reveal="" style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 52px' }}>
          <span style={{ fontSize: '11.5px', fontWeight: '600', letterSpacing: '.14em', color: '#7C3AED', textTransform: 'uppercase' }}>Everything a deck should do</span>
          <h2 className="presentation-section-heading" style={{ margin: '14px 0 0', color: '#1B1730' }}>Build, present, and share — all in one place.</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6,1fr)', gap: '20px' }}>

          {/* BIG: Real-time co-editing */}
          <div data-presentation-reveal="" style={{ gridColumn: 'span 3', gridRow: 'span 2', background: '#fff', borderRadius: '22px', padding: '36px', border: '1px solid #EEEDF3', boxShadow: '0 20px 44px -28px rgba(37,22,84,.26)', display: 'flex', flexDirection: 'column' }}>
            <span style={{ display: 'inline-flex', alignSelf: 'flex-start', alignItems: 'center', gap: '7px', padding: '5px 12px', borderRadius: '999px', background: '#F5F3FF', color: '#7C3AED', fontSize: '11.5px', fontWeight: '600', border: '1px solid #EDE9FE', whiteSpace: 'nowrap' }}>Core</span>
            <h3 className="presentation-bento-hero-title" style={{ margin: '18px 0 0', color: '#1B1730' }}>Real-time co-editing</h3>
            <p style={{ margin: '11px 0 0', fontSize: '15.5px', lineHeight: 1.6, color: '#5B5670', maxWidth: '400px' }}>Multiple people, one deck, zero conflicts. Every cursor and edit shows up instantly.</p>
            <div style={{ marginTop: '28px', flex: 1, minHeight: '220px', background: 'linear-gradient(160deg,#FBFAFE,#F4F1FC)', borderRadius: '16px', border: '1px solid #F0EEF7', position: 'relative', overflow: 'hidden', padding: '22px 24px' }}>
              <div style={{ height: '130px', borderRadius: '11px', background: '#fff', border: '1px solid #EFEDF6', boxShadow: '0 12px 26px -16px rgba(37,22,84,.3)', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 22px', gap: '9px' }}>
                <div style={{ height: '9px', width: '52%', borderRadius: '3px', background: '#E4DFF2' }}></div>
                <div style={{ position: 'relative', height: '8px', width: '80%', borderRadius: '3px', background: '#EAE6F4', overflow: 'hidden' }}><div style={{ position: 'absolute', inset: 0, background: '#FDE68A', borderRadius: '3px', animation: 'presentation-hl-sweep-loop 6s ease-in-out infinite' }}></div></div>
                <div style={{ height: '8px', width: '68%', borderRadius: '3px', background: '#EAE6F4' }}></div>
              </div>
              <div style={{ position: 'absolute', left: '26px', top: '34px', pointerEvents: 'none', animation: 'presentation-glide-a 9s ease-in-out infinite' }}><span style={{ display: 'block', width: '2px', height: '16px', background: '#0E9384', borderRadius: '1px' }}></span><span style={{ position: 'absolute', left: '3px', top: '-2px', whiteSpace: 'nowrap', padding: '2px 6px', borderRadius: '5px 5px 5px 0', background: '#0E9384', color: '#fff', fontSize: '8.5px', fontWeight: '600' }}>Ade</span></div>
              <div style={{ position: 'absolute', left: '26px', top: '34px', pointerEvents: 'none', animation: 'presentation-glide-b 11s ease-in-out infinite' }}><span style={{ display: 'block', width: '2px', height: '16px', background: '#E11D74', borderRadius: '1px' }}></span><span style={{ position: 'absolute', left: '3px', top: '-2px', whiteSpace: 'nowrap', padding: '2px 6px', borderRadius: '5px 5px 5px 0', background: '#E11D74', color: '#fff', fontSize: '8.5px', fontWeight: '600' }}>Mia</span></div>
            </div>
          </div>

          {/* Templates & themes: INTERACTIVE carousel */}
          <div data-presentation-reveal="" data-presentation-reveal-delay="100" style={{ gridColumn: 'span 3', background: '#fff', borderRadius: '22px', padding: '28px 30px', border: '1px solid #EEEDF3', boxShadow: '0 20px 44px -28px rgba(37,22,84,.26)', display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <h3 style={{ fontSize: '20px', fontWeight: '700', letterSpacing: '-.01em', margin: 0, color: '#1B1730' }}>Templates &amp; themes</h3>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', padding: '4px 10px', borderRadius: '999px', background: '#ECFDF9', color: '#0E9384', fontSize: '10px', fontWeight: '700', letterSpacing: '.05em', textTransform: 'uppercase', border: '1px solid #CDF5EE' }}>Try it</span>
            </div>
            <p style={{ margin: '9px 0 0', fontSize: '14.5px', lineHeight: 1.55, color: '#5B5670' }}>Start polished, not from a blank slide. Cycle through a few.</p>
            <div style={{ marginTop: '20px', display: 'flex', alignItems: 'center', gap: '14px' }}>
              <button type="button" onClick={() => cycleTpl(-1)} title="Previous" style={{ flexShrink: 0, width: '34px', height: '34px', borderRadius: '50%', border: '1px solid #E4DFF2', background: '#fff', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#7C3AED', fontFamily: 'inherit' }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg></button>
              <div style={{ flex: 1, height: '112px', borderRadius: '12px', padding: '16px 18px', display: 'flex', flexDirection: 'column', position: 'relative', overflow: 'hidden', transition: 'background .25s', background: active.bg, boxShadow: '0 14px 30px -16px rgba(37,22,84,.4)' }}>
                <div style={{ height: '9px', width: '52%', borderRadius: '3px', background: 'rgba(255,255,255,.92)' }}></div>
                <div style={{ height: '6px', width: '100%', borderRadius: '3px', background: 'rgba(255,255,255,.66)', marginTop: '9px' }}></div>
                <div style={{ height: '6px', width: '84%', borderRadius: '3px', background: 'rgba(255,255,255,.5)', marginTop: '6px' }}></div>
                <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span style={{ fontSize: '13px', fontWeight: '700', color: '#fff', letterSpacing: '-.01em' }}>{active.name}</span>
                  <span style={{ fontSize: '9.5px', fontWeight: '600', color: 'rgba(255,255,255,.8)', padding: '3px 8px', borderRadius: '999px', background: 'rgba(255,255,255,.16)' }}>{active.tag}</span>
                </div>
              </div>
              <button type="button" onClick={() => cycleTpl(1)} title="Next" style={{ flexShrink: 0, width: '34px', height: '34px', borderRadius: '50%', border: '1px solid #E4DFF2', background: '#fff', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#7C3AED', fontFamily: 'inherit' }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg></button>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '7px', marginTop: '16px' }}>
              {TEMPLATES.map((t, i) => {
                const isActive = tpl === i;
                return (
                  <button
                    key={t.name}
                    type="button"
                    onClick={() => setTpl(i)}
                    aria-label={`Show ${t.name} template`}
                    style={{ width: isActive ? '22px' : '8px', height: '8px', borderRadius: '999px', border: 'none', cursor: 'pointer', padding: 0, transition: 'all .25s', background: isActive ? '#7C3AED' : '#D9D2EC' }}
                  ></button>
                );
              })}
            </div>
          </div>

          {/* Slide sorter */}
          <div data-presentation-reveal="" data-presentation-reveal-delay="180" style={{ gridColumn: 'span 3', background: '#fff', borderRadius: '22px', padding: '28px 30px', border: '1px solid #EEEDF3', boxShadow: '0 20px 44px -28px rgba(37,22,84,.26)', display: 'flex', alignItems: 'center', gap: '24px' }}>
            <div style={{ flex: 1 }}>
              <h3 style={{ fontSize: '20px', fontWeight: '700', letterSpacing: '-.01em', margin: 0, color: '#1B1730' }}>Slide sorter</h3>
              <p style={{ margin: '9px 0 0', fontSize: '14.5px', lineHeight: 1.55, color: '#5B5670' }}>Drag, reorder, and duplicate slides at a glance.</p>
            </div>
            <div style={{ flexShrink: 0, display: 'grid', gridTemplateColumns: 'repeat(3,42px)', gridTemplateRows: 'repeat(2,32px)', gap: '8px' }}>
              <div style={{ borderRadius: '6px', background: '#F5F3FF', border: '1px solid #E6DEFA' }}></div>
              <div style={{ borderRadius: '6px', background: '#ECFDF9', border: '1px solid #CDF5EE' }}></div>
              <div style={{ borderRadius: '6px', background: '#fff', border: '2px solid #7C3AED', boxShadow: '0 6px 14px -8px rgba(124,58,237,.6)' }}></div>
              <div style={{ borderRadius: '6px', background: '#FEF6E7', border: '1px solid #FBEBC6' }}></div>
              <div style={{ borderRadius: '6px', background: '#FFEFF2', border: '1px solid #FBD5DD' }}></div>
              <div style={{ borderRadius: '6px', background: '#fff', border: '1.5px dashed #C9BEEE', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg></div>
            </div>
          </div>

          {/* Rich media */}
          <div data-presentation-reveal="" data-presentation-reveal-delay="120" style={{ gridColumn: 'span 2', background: '#fff', borderRadius: '22px', padding: '28px', border: '1px solid #EEEDF3', boxShadow: '0 20px 44px -28px rgba(37,22,84,.26)' }}>
            <div style={{ height: '70px', marginBottom: '18px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '11px', background: '#F5F3FF', border: '1px solid #E6DEFA', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"></rect><circle cx="9" cy="9" r="2"></circle><path d="m21 15-3.09-3.09a2 2 0 0 0-2.82 0L6 21"></path></svg></div>
              <div style={{ width: '48px', height: '48px', borderRadius: '11px', background: '#ECFDF9', border: '1px solid #CDF5EE', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0E9384" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"></path><rect x="7" y="10" width="3" height="7"></rect><rect x="12" y="6" width="3" height="11"></rect><rect x="17" y="13" width="3" height="4"></rect></svg></div>
            </div>
            <h3 style={{ fontSize: '18px', fontWeight: '700', letterSpacing: '-.01em', margin: 0, color: '#1B1730' }}>Rich media</h3>
            <p style={{ margin: '8px 0 0', fontSize: '14px', lineHeight: 1.55, color: '#5B5670' }}>Images, charts, and embedded links — all built in.</p>
          </div>

          {/* Speaker notes */}
          <div data-presentation-reveal="" data-presentation-reveal-delay="200" style={{ gridColumn: 'span 2', background: '#fff', borderRadius: '22px', padding: '28px', border: '1px solid #EEEDF3', boxShadow: '0 20px 44px -28px rgba(37,22,84,.26)' }}>
            <div style={{ height: '70px', marginBottom: '18px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ width: '100%', borderRadius: '10px', background: '#1B1730', padding: '11px 13px', display: 'flex', flexDirection: 'column', gap: '6px', boxShadow: '0 12px 24px -14px rgba(27,23,48,.7)' }}>
                <span style={{ fontSize: '8px', fontWeight: '700', letterSpacing: '.08em', textTransform: 'uppercase', color: '#8E88A3' }}>Speaker notes</span>
                <div style={{ height: '4px', width: '100%', borderRadius: '2px', background: 'rgba(255,255,255,.24)' }}></div>
                <div style={{ height: '4px', width: '78%', borderRadius: '2px', background: 'rgba(255,255,255,.16)' }}></div>
              </div>
            </div>
            <h3 style={{ fontSize: '18px', fontWeight: '700', letterSpacing: '-.01em', margin: 0, color: '#1B1730' }}>Speaker notes</h3>
            <p style={{ margin: '8px 0 0', fontSize: '14px', lineHeight: 1.55, color: '#5B5670' }}>Private notes only the presenter can see.</p>
          </div>

          {/* Auto-save to Work Drive */}
          <div data-presentation-reveal="" data-presentation-reveal-delay="280" style={{ gridColumn: 'span 2', background: '#fff', borderRadius: '22px', padding: '28px', border: '1px solid #EEEDF3', boxShadow: '0 20px 44px -28px rgba(37,22,84,.26)' }}>
            <div style={{ height: '70px', marginBottom: '18px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ position: 'relative', width: '66px', height: '52px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="#0E9384" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M17.5 19a4.5 4.5 0 0 0 0-9 6 6 0 0 0-11.6-1.5A4.5 4.5 0 0 0 6.5 19Z"></path></svg>
                <span style={{ position: 'absolute', width: '22px', height: '22px', borderRadius: '50%', background: '#14B8A6', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"></path></svg></span>
              </div>
            </div>
            <h3 style={{ fontSize: '18px', fontWeight: '700', letterSpacing: '-.01em', margin: 0, color: '#1B1730' }}>Auto-save to Work Drive</h3>
            <p style={{ margin: '8px 0 0', fontSize: '14px', lineHeight: 1.55, color: '#5B5670' }}>Nothing to manually export or upload — ever.</p>
          </div>
        </div>
        <div data-presentation-reveal="" style={{ textAlign: 'center', marginTop: '40px' }}>
          <a href="#" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '14px 26px', borderRadius: '999px', background: '#fff', color: '#2A2440', fontWeight: '600', fontSize: '15px', cursor: 'pointer', border: '1.5px solid #E4DFF2' }}>See How It Works
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          </a>
        </div>
      </PresentationRevealSection>
    </section>
  );
}
