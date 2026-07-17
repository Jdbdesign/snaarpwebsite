'use client';

import { useEffect, useRef, useState } from 'react';
import { PresentationRevealSection } from './PresentationRevealSection';
import { Price } from '@/components/currency/Price';

interface HeroSlide {
  label: string;
  accent: string;
  kicker: string;
  title: string;
  subtitle: string;
  bullets: string[];
  showImage: boolean;
}

const HERO_SLIDES: HeroSlide[] = [
  { label: 'Title', accent: '#7C3AED', kicker: 'Title slide', title: 'Q3 Team Offsite', subtitle: 'Two days · Lisbon · 15–16 September', bullets: [], showImage: false },
  { label: 'Agenda', accent: '#0E9384', kicker: 'Slide 2 · Agenda', title: 'Agenda', subtitle: '', bullets: ['Day one — strategy & planning', 'Workshops in small groups', 'Team dinner on the waterfront', 'Day two — roadmap & retro'], showImage: false },
  { label: 'Venue', accent: '#F59E0B', kicker: 'Slide 3 · Venue', title: 'Where we’re staying', subtitle: 'A short walk from the old town', bullets: [], showImage: true },
  { label: 'Team', accent: '#E11D74', kicker: 'Slide 4 · Team', title: 'Who’s coming', subtitle: 'Everyone across product, design & eng', bullets: ['12 attending in person', '2 joining remotely'], showImage: false },
  { label: 'Wrap', accent: '#7C3AED', kicker: 'Closing slide', title: 'See you there', subtitle: 'Questions? Drop them in the channel.', bullets: [], showImage: false },
];

// Interactive mini slide editor: filmstrip navigation + auto-advance, ported
// 1:1 from the standalone bundle's Component class (selectSlide/nextSlide/
// pulseSaved/syncAdvance). The bundle's heroTilt/liveCursors/autoAdvance
// props are design-canvas-editor-only live-tweak knobs (see the "OPEN ITEMS"
// comment in the bundle source) — not part of the shipped page, so this
// hardcodes their defaults (tilt -1.5deg, cursors visible, auto-advance on)
// exactly as components/docs/DocsHero.tsx did for the equivalent props.
export function PresentationHero() {
  const [slide, setSlide] = useState(0);
  const [pulseKey, setPulseKey] = useState(0);

  function selectSlide(i: number) {
    setSlide(i);
    setPulseKey((k) => k + 1);
  }

  useEffect(() => {
    const id = setInterval(() => {
      setSlide((s) => (s + 1) % HERO_SLIDES.length);
      setPulseKey((k) => k + 1);
    }, 3400);
    return () => clearInterval(id);
  }, []);

  const active = HERO_SLIDES[slide];

  return (
    <section style={{ background: 'linear-gradient(180deg,#FBFAFF 0%,#fff 70%)', paddingTop: '74px', paddingBottom: '104px', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: '-120px', right: '-60px', width: '560px', height: '560px', background: 'radial-gradient(circle,rgba(124,58,237,.10),transparent 66%)', pointerEvents: 'none' }}></div>
      <div style={{ position: 'absolute', bottom: '-160px', left: '-100px', width: '420px', height: '420px', background: 'radial-gradient(circle,rgba(20,184,166,.09),transparent 68%)', pointerEvents: 'none' }}></div>
      <PresentationRevealSection className="max-w-7xl mx-auto px-6 lg:px-10" style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0,1.12fr)', gap: '56px', alignItems: 'center', position: 'relative' }}>
        <div data-presentation-reveal="">
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '7px 14px', borderRadius: '999px', background: '#F5F3FF', color: '#7C3AED', fontWeight: '600', fontSize: '12px', letterSpacing: '.09em', textTransform: 'uppercase', border: '1px solid #EDE9FE', whiteSpace: 'nowrap' }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#7C3AED' }}></span>Create &amp; Store · Presentation
          </span>
          <h1 className="presentation-hero-heading" style={{ margin: '22px 0 0', color: '#1B1730' }}>Build the deck.<br /><span style={{ color: '#7C3AED' }}>Together, live.</span></h1>
          <p className="presentation-lede" style={{ color: '#5B5670', margin: '22px 0 0', maxWidth: '506px' }}>Slides, templates, and real-time collaboration — all in the Stack. Start from a blank canvas or a ready-made template, and watch your team build it out with you, live.</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '13px', marginTop: '32px' }}>
            <a href="#" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '15px 28px', borderRadius: '999px', background: '#7C3AED', color: '#fff', fontWeight: '600', fontSize: '15.5px', cursor: 'pointer', boxShadow: '0 12px 26px -8px rgba(124,58,237,.6)' }}>Start for <Price amount={1} />/month</a>
            <a href="#" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '15px 26px', borderRadius: '999px', background: '#fff', color: '#2A2440', fontWeight: '600', fontSize: '15.5px', cursor: 'pointer', border: '1.5px solid #E4DFF2' }}>See how it works
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
            </a>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '9px', marginTop: '26px', fontSize: '13.5px', color: '#8B85A0', fontWeight: '500' }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#14B8A6" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"></path></svg>
            GDPR compliant · No credit card required
          </div>
        </div>

        {/* HERO VISUAL: interactive mini slide editor */}
        <div data-presentation-reveal="" data-presentation-reveal-delay="140" style={{ position: 'relative' }}>
          <div style={{ position: 'relative', transform: 'rotate(0deg)' }}>
            <div style={{ background: '#fff', borderRadius: '20px', border: '1px solid #ECE9F5', overflow: 'hidden', boxShadow: '0 34px 70px -34px rgba(37,22,84,.34)' }}>
              {/* window bar */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '13px 16px', borderBottom: '1px solid #F0EEF6', background: '#FBFAFE' }}>
                <span style={{ width: '11px', height: '11px', borderRadius: '50%', background: '#FB7185' }}></span>
                <span style={{ width: '11px', height: '11px', borderRadius: '50%', background: '#FBBF24' }}></span>
                <span style={{ width: '11px', height: '11px', borderRadius: '50%', background: '#34D399' }}></span>
                <span style={{ marginLeft: '10px', fontSize: '12.5px', fontWeight: '600', color: '#8B85A0' }}>Q3_Team_Offsite.pptx</span>
                <span style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span style={{ display: 'flex', alignItems: 'center' }}>
                    <span style={{ width: '22px', height: '22px', borderRadius: '50%', background: '#EDE9FE', color: '#7C3AED', fontSize: '8.5px', fontWeight: '700', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid #fff' }}>You</span>
                    <span style={{ width: '22px', height: '22px', borderRadius: '50%', background: '#D5F5EF', color: '#0E9384', fontSize: '8.5px', fontWeight: '700', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid #fff', marginLeft: '-7px' }}>AS</span>
                    <span style={{ width: '22px', height: '22px', borderRadius: '50%', background: '#FEE2EC', color: '#E11D74', fontSize: '8.5px', fontWeight: '700', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid #fff', marginLeft: '-7px' }}>MK</span>
                  </span>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', fontSize: '10.5px', fontWeight: '600', color: '#0E9384' }}>
                    <span key={pulseKey} style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#14B8A6', animation: 'presentation-saved-pop .6s ease-out, presentation-live-pulse 2.4s ease-out infinite' }}></span>Saved
                  </span>
                </span>
              </div>

              {/* editor body: filmstrip + slide canvas */}
              <div style={{ display: 'grid', gridTemplateColumns: '78px 1fr', background: '#fff' }}>
                {/* slide-sorter filmstrip */}
                <div style={{ borderRight: '1px solid #F0EEF6', background: '#FBFAFE', padding: '12px 11px', display: 'flex', flexDirection: 'column', gap: '9px' }}>
                  {HERO_SLIDES.map((s, i) => {
                    const isActive = slide === i;
                    return (
                      <button
                        key={s.label}
                        type="button"
                        onClick={() => selectSlide(i)}
                        style={{
                          position: 'relative', width: '100%', aspectRatio: '4/3', borderRadius: '7px', cursor: 'pointer',
                          padding: '8px 8px 7px', display: 'flex', flexDirection: 'column', gap: '4px', fontFamily: 'inherit',
                          textAlign: 'left', transition: 'all .16s', background: '#fff',
                          border: isActive ? '2px solid #7C3AED' : '1px solid #EAE7F2',
                          boxShadow: isActive ? '0 7px 16px -8px rgba(124,58,237,.6)' : 'none',
                        }}
                      >
                        <span style={{ height: '5px', width: '66%', borderRadius: '2px', background: s.accent }}></span>
                        <span style={{ height: '3px', width: '100%', borderRadius: '2px', background: '#EEEBF4' }}></span>
                        <span style={{ height: '3px', width: '80%', borderRadius: '2px', background: '#EEEBF4' }}></span>
                        <span style={{ position: 'absolute', bottom: '4px', right: '5px', fontSize: '8px', fontWeight: '700', color: isActive ? '#7C3AED' : '#C4BDD6' }}>{i + 1}</span>
                      </button>
                    );
                  })}
                </div>

                {/* slide canvas */}
                <div style={{ position: 'relative', padding: '24px 28px 20px', minHeight: '316px', overflow: 'hidden' }}>
                  <div style={{ position: 'absolute', left: '28px', top: '60px', zIndex: 6, pointerEvents: 'none', animation: 'presentation-glide-a 10s ease-in-out infinite' }}>
                    <span style={{ display: 'block', width: '2px', height: '16px', background: '#0E9384', borderRadius: '1px' }}></span>
                    <span style={{ position: 'absolute', left: '3px', top: '-2px', whiteSpace: 'nowrap', padding: '2px 6px', borderRadius: '5px 5px 5px 0', background: '#0E9384', color: '#fff', fontSize: '8.5px', fontWeight: '600' }}>Ade</span>
                  </div>
                  <div style={{ position: 'absolute', left: '28px', top: '60px', zIndex: 6, pointerEvents: 'none', animation: 'presentation-glide-b 12.5s ease-in-out infinite' }}>
                    <span style={{ display: 'block', width: '2px', height: '16px', background: '#E11D74', borderRadius: '1px' }}></span>
                    <span style={{ position: 'absolute', left: '3px', top: '-2px', whiteSpace: 'nowrap', padding: '2px 6px', borderRadius: '5px 5px 5px 0', background: '#E11D74', color: '#fff', fontSize: '8.5px', fontWeight: '600' }}>Mia</span>
                  </div>

                  <span style={{ display: 'inline-block', fontSize: '10px', fontWeight: '700', letterSpacing: '.1em', textTransform: 'uppercase', color: active.accent }}>{active.kicker}</span>
                  <div style={{ fontSize: '22px', fontWeight: '700', letterSpacing: '-.02em', color: '#1B1730', marginTop: '10px', lineHeight: 1.15 }}>{active.title}</div>
                  {active.subtitle && (
                    <div style={{ fontSize: '13px', color: '#8B85A0', marginTop: '6px', fontWeight: '500' }}>{active.subtitle}</div>
                  )}

                  {active.bullets.map((b) => (
                    <div key={b} style={{ display: 'flex', alignItems: 'flex-start', gap: '9px', marginTop: '11px' }}>
                      <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#7C3AED', marginTop: '7px', flexShrink: 0 }}></span>
                      <span style={{ fontSize: '13px', color: '#3B3550', lineHeight: 1.5 }}>{b}</span>
                    </div>
                  ))}

                  {active.showImage && (
                    <div style={{ marginTop: '16px', height: '104px', borderRadius: '12px', background: 'linear-gradient(135deg,#F5F3FF,#ECFDF9)', border: '1px solid #EFEDF6', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#C0B7DC" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"></rect><circle cx="9" cy="9" r="2"></circle><path d="m21 15-3.09-3.09a2 2 0 0 0-2.82 0L6 21"></path></svg>
                    </div>
                  )}

                  {/* live typing line */}
                  <div style={{ position: 'absolute', left: '28px', bottom: '14px', right: '28px', display: 'flex', alignItems: 'center', gap: '7px' }}>
                    <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#C9BEEE', flexShrink: 0 }}></span>
                    <div style={{ display: 'flex', alignItems: 'center', overflow: 'hidden', whiteSpace: 'nowrap', animation: 'presentation-type-in 8.5s steps(30,end) infinite' }}>
                      <span style={{ fontSize: '11px', color: '#3B3550' }}>Adding the venue photos to slide three</span>
                    </div>
                    <span style={{ width: '1.5px', height: '13px', background: '#7C3AED', flexShrink: 0, animation: 'presentation-caret-blink 1s steps(1) infinite' }}></span>
                    <span style={{ fontSize: '9px', color: '#B4AEC6', marginLeft: '2px' }}>Mia is editing…</span>
                  </div>
                </div>
              </div>
            </div>
            {/* floating side badge */}
            <div style={{ position: 'absolute', bottom: '-16px', left: '-18px', display: 'flex', alignItems: 'center', gap: '9px', padding: '10px 14px', borderRadius: '14px', background: '#fff', border: '1px solid #EFEDF6', boxShadow: '0 18px 38px -18px rgba(37,22,84,.3)', animation: 'presentation-floaty 5.5s ease-in-out infinite' }}>
              <span style={{ width: '30px', height: '30px', borderRadius: '9px', background: '#F5F3FF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg></span>
              <div style={{ lineHeight: 1.2 }}><div style={{ fontSize: '11px', fontWeight: '700', color: '#1B1730' }}>Deck auto-saved</div><div style={{ fontSize: '9px', color: '#8B85A0' }}>to Work Drive · just now</div></div>
            </div>
          </div>
          <div style={{ marginTop: '24px', textAlign: 'center', fontSize: '11px', color: '#B4AEC6', fontWeight: '500' }}>Click a slide in the filmstrip to switch · try it live</div>
        </div>
      </PresentationRevealSection>
    </section>
  );
}
