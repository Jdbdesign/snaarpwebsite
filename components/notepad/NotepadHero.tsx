'use client';

import { useState } from 'react';
import { NotepadRevealSection } from './NotepadRevealSection';
import { Price } from '@/components/currency/Price';

const CHECKLIST = ['Passport & travel docs', 'Camera + charger', 'Sunscreen'];

// Interactive checklist note: toggleCheck(i), ported 1:1 from the standalone
// bundle's Component class. Ticking an item re-triggers the "Saved" dot's
// pop + pulse animation — the pulseKey remount trick mirrors
// components/presentation/PresentationHero.tsx's pulseKey usage for the
// same effect.
export function NotepadHero() {
  const [checks, setChecks] = useState([true, false, false]);
  const [pulseKey, setPulseKey] = useState(0);

  function toggleCheck(i: number) {
    setChecks((prev) => {
      const next = prev.slice();
      next[i] = !next[i];
      return next;
    });
    setPulseKey((k) => k + 1);
  }

  return (
    <section style={{ background: 'linear-gradient(180deg,#FBFAFF 0%,#fff 70%)', paddingTop: '74px', paddingBottom: '104px', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: '-120px', right: '-60px', width: '560px', height: '560px', background: 'radial-gradient(circle,rgba(124,58,237,.10),transparent 66%)', pointerEvents: 'none' }}></div>
      <div style={{ position: 'absolute', bottom: '-160px', left: '-100px', width: '420px', height: '420px', background: 'radial-gradient(circle,rgba(20,184,166,.09),transparent 68%)', pointerEvents: 'none' }}></div>
      <NotepadRevealSection className="max-w-7xl mx-auto px-6 lg:px-10" style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0,1.04fr)', gap: '56px', alignItems: 'center', position: 'relative' }}>
        <div data-notepad-reveal="">
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '7px 14px', borderRadius: '999px', background: '#F5F3FF', color: '#7C3AED', fontWeight: '600', fontSize: '12px', letterSpacing: '.09em', textTransform: 'uppercase', border: '1px solid #EDE9FE', whiteSpace: 'nowrap' }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#7C3AED' }}></span>Create &amp; Store · Notepad
          </span>
          <h1 className="notepad-hero-heading" style={{ margin: '22px 0 0', color: '#1B1730' }}>Jot it down.<br />
            <span style={{ color: '#7C3AED' }}>Find it instantly.</span>
          </h1>
          <p className="notepad-lede" style={{ color: '#5B5670', margin: '22px 0 0', maxWidth: '500px' }}>Quick notes for the stuff that doesn&apos;t need a whole document — a thought, a checklist, a link to save. Synced across the Stack the moment you type it, so it&apos;s there whenever you need it.</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '13px', marginTop: '32px' }}>
            <a href="#" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '15px 28px', borderRadius: '999px', background: '#7C3AED', color: '#fff', fontWeight: '600', fontSize: '15.5px', cursor: 'pointer', boxShadow: '0 12px 26px -8px rgba(124,58,237,.6)' }}>Start for <Price amount={2} />/month</a>
            <a href="#" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '15px 26px', borderRadius: '999px', background: '#fff', color: '#2A2440', fontWeight: '600', fontSize: '15.5px', cursor: 'pointer', border: '1.5px solid #E4DFF2' }}>See how it works
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
            </a>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '9px', marginTop: '26px', fontSize: '13.5px', color: '#8B85A0', fontWeight: '500' }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#14B8A6" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"></path></svg>
            GDPR compliant · No credit card required
          </div>
        </div>

        {/* HERO VISUAL: interactive note grid */}
        <div data-notepad-reveal="" data-notepad-reveal-delay="140" style={{ position: 'relative' }}>
          <div style={{ position: 'relative', transform: 'rotate(0deg)' }}>
            <div style={{ background: '#fff', borderRadius: '20px', border: '1px solid #ECE9F5', overflow: 'hidden', boxShadow: '0 34px 70px -34px rgba(37,22,84,.34)' }}>
              {/* top bar */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '13px 18px', borderBottom: '1px solid #F0EEF6', background: '#FBFAFE' }}>
                <span style={{ width: '28px', height: '28px', borderRadius: '8px', background: '#F5F3FF', border: '1px solid #E6DEFA', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4Z"></path></svg>
                </span>
                <span style={{ fontSize: '14px', fontWeight: '700', color: '#1B1730', letterSpacing: '-.01em' }}>My notes</span>
                <span style={{ marginLeft: 'auto', display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '11px', fontWeight: '600', color: '#0E9384' }}>
                  <span key={pulseKey} style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#14B8A6', animation: 'notepad-saved-pop .6s ease-out, notepad-live-pulse 2.6s ease-out infinite' }}></span>Saved
                </span>
              </div>

              {/* note grid */}
              <div style={{ padding: '16px', background: '#FBFAFE', minHeight: '296px' }}>
                <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  {/* column A */}
                  <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    {/* open / pinned note (mid-edit) */}
                    <div style={{ background: '#ECFDF9', border: '1px solid #CDF5EE', borderRadius: '14px', padding: '13px 15px', position: 'relative', boxShadow: '0 10px 22px -16px rgba(14,147,132,.4)' }}>
                      <span style={{ position: 'absolute', top: '11px', right: '12px', animation: 'notepad-pen-nudge 4s ease-in-out infinite', display: 'inline-flex' }}><svg width="13" height="13" viewBox="0 0 24 24" fill="#0E9384" stroke="#0E9384" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><path d="M12 17v5"></path><path d="M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z"></path></svg></span>
                      <div style={{ fontSize: '9px', fontWeight: '700', letterSpacing: '.09em', textTransform: 'uppercase', color: '#0E9384' }}>Pinned</div>
                      <div style={{ fontSize: '14px', fontWeight: '700', color: '#1B1730', marginTop: '6px' }}>Sunday reset</div>
                      <div style={{ fontSize: '11.5px', color: '#3B3550', lineHeight: 1.55, marginTop: '5px' }}>Clear the inbox, plan the week, water the plants<span style={{ display: 'inline-block', width: '1.5px', height: '12px', background: '#0E9384', marginLeft: '1px', verticalAlign: '-2px', animation: 'notepad-caret-blink 1s steps(1) infinite' }}></span></div>
                    </div>
                    {/* amber sticky */}
                    <div style={{ background: '#FEF6E7', border: '1px solid #FBEBC6', borderRadius: '14px', padding: '13px 15px' }}>
                      <div style={{ fontSize: '13.5px', fontWeight: '600', color: '#1B1730' }}>Call the plumber back</div>
                      <div style={{ fontSize: '11px', color: '#96702B', lineHeight: 1.5, marginTop: '5px' }}>Thursday am · quote for the boiler</div>
                    </div>
                  </div>

                  {/* column B */}
                  <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    {/* INTERACTIVE checklist note */}
                    <div style={{ background: '#fff', border: '1px solid #ECE9F5', borderRadius: '14px', padding: '13px 15px', boxShadow: '0 10px 22px -18px rgba(37,22,84,.3)' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 11 3 3L22 4"></path><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path></svg>
                        <span style={{ fontSize: '13.5px', fontWeight: '700', color: '#1B1730' }}>Trip packing</span>
                      </div>
                      <div style={{ marginTop: '7px', display: 'flex', flexDirection: 'column' }}>
                        {CHECKLIST.map((label, i) => {
                          const done = checks[i];
                          return (
                            <button
                              key={label}
                              type="button"
                              onClick={() => toggleCheck(i)}
                              style={{ display: 'flex', alignItems: 'center', gap: '9px', width: '100%', textAlign: 'left', background: 'none', border: 'none', padding: '5px 0', cursor: 'pointer', fontFamily: 'inherit' }}
                            >
                              <span style={{ flexShrink: 0, width: '17px', height: '17px', borderRadius: '5px', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'background .18s, border-color .18s', background: done ? '#7C3AED' : '#fff', border: `1.5px solid ${done ? '#7C3AED' : '#D9D2EC'}` }}>
                                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3.6" strokeLinecap="round" strokeLinejoin="round" style={{ transition: 'opacity .18s, transform .18s', opacity: done ? 1 : 0, transform: `scale(${done ? 1 : 0.4})` }}><path d="M20 6 9 17l-5-5"></path></svg>
                              </span>
                              <span style={{ fontSize: '12px', transition: 'color .25s', color: done ? '#B4AEC6' : '#3B3550', textDecoration: done ? 'line-through' : 'none' }}>{label}</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                    {/* plain text note */}
                    <div style={{ background: '#fff', border: '1px solid #ECE9F5', borderRadius: '14px', padding: '13px 15px', boxShadow: '0 10px 22px -18px rgba(37,22,84,.3)' }}>
                      <div style={{ fontSize: '13px', fontWeight: '600', color: '#1B1730' }}>Idea</div>
                      <div style={{ fontSize: '11px', color: '#5B5670', lineHeight: 1.55, marginTop: '4px' }}>Newsletter every other Friday — short, three links, no fluff.</div>
                    </div>
                    {/* rose note */}
                    <div style={{ background: '#FFEFF2', border: '1px solid #FBD5DD', borderRadius: '14px', padding: '11px 15px' }}>
                      <div style={{ fontSize: '12.5px', fontWeight: '600', color: '#1B1730' }}>Reading list</div>
                      <div style={{ fontSize: '10.5px', color: '#A33A56', marginTop: '3px' }}>Finish chapter 4 tonight</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* floating badge */}
            <div style={{ position: 'absolute', bottom: '-16px', left: '-18px', display: 'flex', alignItems: 'center', gap: '9px', padding: '10px 14px', borderRadius: '14px', background: '#fff', border: '1px solid #EFEDF6', boxShadow: '0 18px 38px -18px rgba(37,22,84,.3)', animation: 'notepad-floaty 5.5s ease-in-out infinite' }}>
              <span style={{ width: '30px', height: '30px', borderRadius: '9px', background: '#ECFDF9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0E9384" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"></path></svg></span>
              <div style={{ lineHeight: 1.2 }}><div style={{ fontSize: '11px', fontWeight: '700', color: '#1B1730' }}>Saved to Work Drive</div><div style={{ fontSize: '9px', color: '#8B85A0' }}>the moment you type · just now</div></div>
            </div>
          </div>
          <div style={{ marginTop: '24px', textAlign: 'center', fontSize: '11px', color: '#B4AEC6', fontWeight: '500' }}>Tick an item on the checklist — it saves instantly · try it</div>
        </div>
      </NotepadRevealSection>
    </section>
  );
}
