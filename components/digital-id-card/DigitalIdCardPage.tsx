'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import { DigitalIdCardRevealSection } from './DigitalIdCardRevealSection';
import { HomeFinalCTA } from '@/components/HomeFinalCTA';
import { StackTrustBar, PlainStackWrapper } from '@/components/sections/StackTrustBar';

const DICARD_STACK_APPS = [
  { iconSrc: '/assets/icons/search.jpg', name: 'Snaarp Contacts' },
  { iconSrc: '/assets/icons/chat-bubbles.jpg', name: 'Snaarp Teams' },
  { iconSrc: '/assets/icons/envelope.jpg', name: 'Snaarp Mail' },
  { iconSrc: '/assets/icons/cube.jpg', name: 'Snaarp Work Drive' },
];

const FAQS = [
  { q: 'Do I need a physical badge as well as the digital one?', a: 'No \u2014 the Digital ID Card replaces a physical badge entirely.' },
  { q: 'What happens to my badge if I leave the company?', a: 'It\u2019s revoked instantly and stops working for access or sign-in the moment it\u2019s deactivated.' },
  { q: 'Can I use my Digital ID Card to sign into other Snaarp apps?', a: 'Yes \u2014 it works as a badge for building access and as a sign-in method for connected apps.' },
  { q: 'Is Digital ID Card included in the \u00a32 Starter plan?', a: 'Yes \u2014 included in every plan, no add-on required.' },
  { q: 'Does my badge still work if my phone has no signal?', a: 'Yes \u2014 the card displays and can be shown even offline.' },
];

export function DigitalIdCardPage() {
  const [demo, setDemo] = useState<'idle' | 'tapping' | 'granted'>('idle');
  const [badge, setBadge] = useState<'Active' | 'Revoked'>('Active');
  const [openFaq, setOpenFaq] = useState(0);
  const timersRef = useRef<ReturnType<typeof setTimeout>[]>([]);

  const reduced = useCallback(() => {
    return typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }, []);

  const runTap = useCallback(() => {
    if (reduced()) { setDemo('granted'); return; }
    setDemo((d) => { if (d !== 'idle') return d; return 'tapping'; });
    const t1 = setTimeout(() => setDemo('granted'), 720);
    const t2 = setTimeout(() => setDemo('idle'), 2900);
    timersRef.current.push(t1, t2);
  }, [reduced]);

  useEffect(() => {
    if (reduced()) { setDemo('granted'); return; }
    const t = setTimeout(() => runTap(), 1300);
    timersRef.current.push(t);
    return () => { timersRef.current.forEach(clearTimeout); };
  }, [reduced, runTap]);

  // Computed styles from renderVals()
  const rippling = demo === 'tapping';
  const unlocked = demo === 'granted';
  const locked = !unlocked;

  const phoneWrapStyle: React.CSSProperties = { position: 'relative', zIndex: 2, width: '300px', animation: 'dicard-floaty 6s ease-in-out infinite' };
  const cardStyle: React.CSSProperties = {
    position: 'relative', marginTop: '26px', borderRadius: '22px',
    background: 'linear-gradient(150deg,#7C3AED,#5B21B6)', padding: '18px 18px 16px', color: '#fff',
    boxShadow: '0 22px 44px -18px rgba(91,33,182,.7),0 0 0 1px rgba(255,255,255,.08) inset',
    animation: rippling ? 'dicard-tapNudge .72s ease-in-out' : undefined,
  };

  const readerStyle: React.CSSProperties = {
    display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '16px 14px', borderRadius: '18px', background: '#fff', width: '100%', transition: 'border-color .35s,box-shadow .35s',
    border: unlocked ? '1.5px solid #CDF5EE' : '1.5px solid #E6DEFA',
    boxShadow: unlocked ? '0 20px 44px -18px rgba(14,147,132,.55)' : '0 20px 44px -22px rgba(37,22,84,.35)',
    animation: unlocked ? 'dicard-glowPulse 1.2s ease-out' : undefined,
  };
  const readerIconWrapStyle: React.CSSProperties = {
    width: '52px', height: '52px', borderRadius: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'background .35s,border-color .35s',
    background: unlocked ? '#ECFDF9' : '#F5F3FF',
    border: unlocked ? '1px solid #CDF5EE' : '1px solid #E6DEFA',
  };
  const readerName = 'Door \u00b7 Level 3';
  const readerStatus = unlocked ? 'Unlocked' : 'Locked';
  const readerStatusStyle: React.CSSProperties = { fontSize: '10px', fontWeight: 700, letterSpacing: '.02em', color: unlocked ? '#0E9384' : '#8B85A0' };
  const ledStyle: React.CSSProperties = { width: '6px', height: '6px', borderRadius: '50%', transition: 'background .35s', background: unlocked ? '#0E9384' : '#C7C2D6' };

  const tapBtnStyle: React.CSSProperties = {
    display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '12px 20px', borderRadius: '999px', border: 'none', fontFamily: 'inherit', fontSize: '13.5px', fontWeight: 700, cursor: 'pointer', transition: 'transform .15s,box-shadow .2s',
    background: unlocked ? '#ECFDF9' : '#7C3AED',
    color: unlocked ? '#0E9384' : '#fff',
    boxShadow: unlocked ? '0 10px 22px -10px rgba(14,147,132,.5)' : '0 14px 28px -8px rgba(124,58,237,.65)',
  };
  const tapBtnLabel = unlocked ? 'Access granted' : (rippling ? 'Verifying\u2026' : 'Tap to verify');
  const tapBtnIconStroke = unlocked ? '#0E9384' : '#fff';

  // Alt Row 2 badge toggle computed styles
  const revoked = badge === 'Revoked';
  const badgeCardStyle: React.CSSProperties = {
    position: 'relative', overflow: 'hidden', padding: '20px', borderRadius: '16px', background: '#fff',
    border: `1px solid ${revoked ? '#F0D9E1' : '#EFEDF6'}`,
    boxShadow: '0 14px 30px -22px rgba(37,22,84,.3)',
    transition: 'border-color .35s,filter .35s,opacity .35s',
    filter: revoked ? 'grayscale(1)' : 'none',
    opacity: revoked ? 0.62 : 1,
  };
  const badgeVeilStyle: React.CSSProperties = { position: 'absolute', inset: 0, background: '#fff', pointerEvents: 'none', transition: 'opacity .35s', opacity: revoked ? 0.35 : 0 };
  const badgePillStyle: React.CSSProperties = {
    display: 'inline-flex', alignItems: 'center', gap: '6px', marginTop: '9px', padding: '4px 11px', borderRadius: '999px', fontSize: '10.5px', fontWeight: 700, transition: 'background .3s,color .3s',
    background: revoked ? '#FFEFF2' : '#ECFDF9',
    color: revoked ? '#C0344E' : '#0E9384',
  };
  const badgePillDotStyle: React.CSSProperties = { width: '6px', height: '6px', borderRadius: '50%', background: revoked ? '#E11D74' : '#0E9384' };
  const badgeStatusLabel = revoked ? 'Revoked' : 'Active';
  const switchOn = !revoked;
  const switchTrackStyle: React.CSSProperties = {
    position: 'relative', width: '52px', height: '30px', borderRadius: '999px', border: 'none', cursor: 'pointer', padding: 0, flexShrink: 0, transition: 'background .3s',
    background: switchOn ? '#0E9384' : '#D6CFE4',
  };
  const switchKnobStyle: React.CSSProperties = {
    position: 'absolute', top: '3px', left: '3px', width: '24px', height: '24px', borderRadius: '50%', background: '#fff', boxShadow: '0 3px 8px -2px rgba(0,0,0,.35)', transition: 'transform .3s cubic-bezier(.16,1,.3,1)',
    transform: `translateX(${switchOn ? '22px' : '0'})`,
  };
  const toggleHint = switchOn ? 'Active \u2014 full access' : 'Revoked \u2014 no access';
  const toggleHintStyle: React.CSSProperties = { fontSize: '11px', marginTop: '2px', color: revoked ? '#C0344E' : '#8B85A0' };
  const logLine = revoked ? 'Access revoked \u00b7 14 Jul, 16:02 \u00b7 all doors + sign-in' : 'Last used \u00b7 Door Level 3 \u00b7 today 09:41';

  return (
    <div style={{ minWidth: 0, overflowX: 'hidden', background: '#fff', lineHeight: 1.5 }}>

      {/* ============ HERO ============ */}
      <section style={{ background: 'linear-gradient(180deg,#FBFAFF 0%,#fff 72%)', padding: '74px 24px 104px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-120px', right: '-60px', width: '560px', height: '560px', background: 'radial-gradient(circle,rgba(124,58,237,.11),transparent 66%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: '-160px', left: '-100px', width: '420px', height: '420px', background: 'radial-gradient(circle,rgba(20,184,166,.09),transparent 68%)', pointerEvents: 'none' }} />
        <DigitalIdCardRevealSection className="max-w-7xl mx-auto px-6 lg:px-10" style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0,1.05fr)', gap: '56px', alignItems: 'center', position: 'relative' }}>
          <div data-dicard-reveal="">
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '7px 14px', borderRadius: '999px', background: '#F5F3FF', color: '#7C3AED', fontWeight: 600, fontSize: '12px', letterSpacing: '.09em', textTransform: 'uppercase', border: '1px solid #EDE9FE', whiteSpace: 'nowrap' }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#7C3AED' }} />Workplace &middot; Digital ID Card
            </span>
            <h1 className="dicard-hero-heading" style={{ margin: '22px 0 0', color: '#1B1730' }}>Your badge.<br /><span style={{ color: '#7C3AED' }}>Verified, in your pocket.</span></h1>
            <p style={{ fontSize: '18px', lineHeight: 1.6, color: '#5B5670', margin: '22px 0 0', maxWidth: '516px' }}>A digital employee ID that doubles as a verified identity &mdash; tap to unlock doors, sign into apps, and prove who you are, all from your phone. No plastic badge to lose.</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '13px', marginTop: '32px' }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '15px 28px', borderRadius: '999px', background: '#7C3AED', color: '#fff', fontWeight: 600, fontSize: '15.5px', cursor: 'pointer', boxShadow: '0 12px 26px -8px rgba(124,58,237,.6)' }}>Start for &pound;2/month</span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '15px 26px', borderRadius: '999px', background: '#fff', color: '#2A2440', fontWeight: 600, fontSize: '15.5px', cursor: 'pointer', border: '1.5px solid #E4DFF2' }}>See how it works
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
              </span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '9px', marginTop: '26px', fontSize: '13.5px', color: '#8B85A0', fontWeight: 500 }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#14B8A6" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
              GDPR compliant &middot; No credit card required
            </div>
          </div>

          {/* HERO VISUAL : interactive tap-to-verify demo */}
          <div data-dicard-reveal="" data-dicard-reveal-delay="140" style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
            <div style={{ position: 'relative', width: '462px', margin: '0 auto' }}>
              {/* phone frame */}
              <div style={phoneWrapStyle}>
                <div style={{ position: 'relative', borderRadius: '40px', background: '#fff', padding: '12px', boxShadow: '0 40px 80px -34px rgba(37,22,84,.34),0 0 0 1px #E9E6F2' }}>
                  <div style={{ position: 'relative', borderRadius: '30px', overflow: 'hidden', background: 'linear-gradient(165deg,#F7F5FF 0%,#FFFFFF 60%,#FBFAFF 100%)', padding: '22px 18px 26px', minHeight: '492px', border: '1px solid #F2F1F6' }}>
                    {/* notch */}
                    <div style={{ position: 'absolute', top: '12px', left: '50%', transform: 'translateX(-50%)', width: '96px', height: '24px', borderRadius: '999px', background: '#EFEDF6' }} />
                    {/* lockscreen time */}
                    <div style={{ textAlign: 'center', marginTop: '30px', color: '#1B1730' }}>
                      <div style={{ fontSize: '13px', fontWeight: 500, color: '#8B85A0', letterSpacing: '.04em' }}>Monday &middot; 14 July</div>
                      <div style={{ fontSize: '52px', fontWeight: 600, letterSpacing: '-.02em', lineHeight: 1.05, marginTop: '2px' }}>9:41</div>
                    </div>
                    {/* WALLET ID CARD (badge + verified identity) */}
                    <div style={cardStyle}>
                      <div style={{ position: 'absolute', top: '-40px', right: '-30px', width: '150px', height: '150px', background: 'radial-gradient(circle,rgba(255,255,255,.16),transparent 68%)', pointerEvents: 'none' }} />
                      {/* company row + verified mark */}
                      <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <span style={{ width: '26px', height: '26px', borderRadius: '8px', background: 'rgba(255,255,255,.16)', border: '1px solid rgba(255,255,255,.22)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h18" /><path d="M5 21V7l7-4 7 4v14" /><path d="M9 9h.01M9 13h.01M9 17h.01M15 9h.01M15 13h.01M15 17h.01" /></svg></span>
                          <div style={{ lineHeight: 1.1 }}><div style={{ fontSize: '8px', fontWeight: 600, letterSpacing: '.14em', color: 'rgba(255,255,255,.6)' }}>EMPLOYEE ID</div><div style={{ fontSize: '12.5px', fontWeight: 700, color: '#fff' }}>Northwind Co</div></div>
                        </div>
                        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', padding: '5px 10px', borderRadius: '999px', background: 'rgba(45,212,191,.2)', border: '1px solid rgba(94,234,212,.4)' }}><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#5EEAD4" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg><span style={{ fontSize: '9px', fontWeight: 700, color: '#99F6E4', letterSpacing: '.02em' }}>Verified</span></span>
                      </div>

                      {/* photo + name */}
                      <div style={{ position: 'relative', display: 'flex', alignItems: 'center', gap: '14px', marginTop: '20px' }}>
                        <div style={{ position: 'relative', width: '66px', height: '66px', borderRadius: '18px', background: 'linear-gradient(150deg,#C4B5FD,#8B5CF6)', display: 'flex', alignItems: 'flex-end', justifyContent: 'center', overflow: 'hidden', border: '2px solid rgba(255,255,255,.3)', boxShadow: '0 8px 18px -8px rgba(0,0,0,.5)' }}>
                          <svg width="46" height="46" viewBox="0 0 24 24" fill="rgba(255,255,255,.92)"><circle cx="12" cy="8.5" r="4" /><path d="M4 21c0-4 3.6-6.5 8-6.5s8 2.5 8 6.5z" /></svg>
                          <span style={{ position: 'absolute', bottom: '4px', right: '4px', width: '16px', height: '16px', borderRadius: '50%', background: '#2DD4BF', border: '2px solid #6D28D9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="#0E0A1F" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg></span>
                        </div>
                        <div style={{ minWidth: 0 }}>
                          <div style={{ fontSize: '18px', fontWeight: 700, color: '#fff', letterSpacing: '-.01em' }}>Jamie Rivera</div>
                          <div style={{ fontSize: '12px', color: 'rgba(255,255,255,.72)', marginTop: '1px' }}>Product Design &middot; Engineering</div>
                          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', marginTop: '7px', padding: '3px 9px', borderRadius: '999px', background: 'rgba(255,255,255,.14)', border: '1px solid rgba(255,255,255,.18)' }}><span style={{ fontSize: '8.5px', fontWeight: 600, letterSpacing: '.06em', color: 'rgba(255,255,255,.85)' }}>ID &middot; NW-4471</span></div>
                        </div>
                      </div>
                      {/* divider + tap row */}
                      <div style={{ position: 'relative', marginTop: '18px', paddingTop: '15px', borderTop: '1px solid rgba(255,255,255,.14)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '9px' }}>
                          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ animation: 'dicard-nfcWave 2.4s ease-in-out infinite' }}><path d="M5 8.5a11 11 0 0 1 0 7" /><path d="M9 6a16 16 0 0 1 0 12" /><path d="M13 4a20 20 0 0 1 0 16" /></svg>
                          <span style={{ fontSize: '11px', fontWeight: 600, color: 'rgba(255,255,255,.9)' }}>Tap to verify &amp; unlock</span>
                        </div>
                        <span style={{ width: '30px', height: '30px', borderRadius: '8px', background: '#fff', display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '2px', padding: '5px' }}><span style={{ background: '#1B1730', borderRadius: '1px' }} /><span style={{ background: '#1B1730', borderRadius: '1px' }} /><span style={{ background: 'transparent' }} /><span style={{ background: 'transparent' }} /><span style={{ background: '#1B1730', borderRadius: '1px' }} /><span style={{ background: '#1B1730', borderRadius: '1px' }} /><span style={{ background: '#1B1730', borderRadius: '1px' }} /><span style={{ background: 'transparent' }} /><span style={{ background: '#1B1730', borderRadius: '1px' }} /></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* READER + ripple */}
              <div style={{ position: 'absolute', bottom: '70px', right: '-6px', width: '172px', zIndex: 3 }}>
                <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
                  {/* ripple rings */}
                  {rippling && (
                    <>
                      <span style={{ position: 'absolute', top: '50%', left: '50%', width: '120px', height: '120px', margin: '-60px 0 0 -60px', borderRadius: '50%', border: '2px solid #7C3AED', animation: 'dicard-ripple 1s ease-out infinite', pointerEvents: 'none' }} />
                      <span style={{ position: 'absolute', top: '50%', left: '50%', width: '120px', height: '120px', margin: '-60px 0 0 -60px', borderRadius: '50%', border: '2px solid #14B8A6', animation: 'dicard-ripple 1s ease-out .4s infinite', pointerEvents: 'none' }} />
                    </>
                  )}
                  <div style={readerStyle}>
                    <div style={readerIconWrapStyle}>
                      {unlocked ? (
                        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#0E9384" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ animation: 'dicard-checkPop .4s ease-out' }}><rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 9.9-1" /></svg>
                      ) : (
                        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
                      )}
                    </div>
                    <div style={{ lineHeight: 1.2, marginTop: '9px', textAlign: 'center' }}>
                      <div style={{ fontSize: '11.5px', fontWeight: 700, color: '#1B1730' }}>{readerName}</div>
                      <div style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', marginTop: '4px' }}><span style={ledStyle} /><span style={readerStatusStyle}>{readerStatus}</span></div>
                    </div>
                  </div>
                </div>
                {/* Access granted chip */}
                {unlocked && (
                  <div style={{ marginTop: '12px', display: 'flex', justifyContent: 'center' }}>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '7px', padding: '8px 14px', borderRadius: '999px', background: '#0E9384', color: '#fff', fontSize: '12px', fontWeight: 700, boxShadow: '0 12px 26px -10px rgba(14,147,132,.7)', animation: 'dicard-chipRise .4s ease-out' }}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>Access granted</span>
                  </div>
                )}
              </div>

              {/* tap button */}
              <div style={{ position: 'absolute', bottom: '-14px', left: '18px', zIndex: 4 }}>
                <button onClick={() => runTap()} style={tapBtnStyle}>
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke={tapBtnIconStroke} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M8 13V5a2 2 0 0 1 4 0v6" /><path d="M12 11V4a2 2 0 0 1 4 0v7" /><path d="M16 11V6a2 2 0 0 1 4 0v9a7 7 0 0 1-7 7h-2a7 7 0 0 1-6-3.5L2.5 14a2 2 0 0 1 3.4-2.1L8 14" /></svg>
                  {tapBtnLabel}
                </button>
              </div>
            </div>
            <div style={{ position: 'absolute', bottom: '-52px', left: 0, right: 0, textAlign: 'center', fontSize: '11px', color: '#B4AEC6', fontWeight: 500 }}>Tap the card to unlock the reader &mdash; try it</div>
          </div>
        </DigitalIdCardRevealSection>
      </section>

      {/* ============ TRUST BAR ============ */}
      <StackTrustBar Wrapper={PlainStackWrapper} apps={DICARD_STACK_APPS} />

      {/* ============ STATS ROW (4-card bento) ============ */}
      <section style={{ background: '#F7F7F7', padding: '80px 24px' }}>
        <DigitalIdCardRevealSection className="max-w-7xl mx-auto px-6 lg:px-10" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '20px' }}>
          {/* Verified (light) */}
          <div data-dicard-reveal="" style={{ background: '#fff', borderRadius: '20px', padding: '30px 28px', border: '1px solid #EEEDF3', boxShadow: '0 14px 34px -22px rgba(37,22,84,.22)', display: 'flex', flexDirection: 'column' }}>
            <div style={{ width: '46px', height: '46px', borderRadius: '13px', background: '#ECFDF9', border: '1px solid #CDF5EE', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="#0E9384" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="m9 12 2 2 4-4" /></svg>
            </div>
            <div style={{ fontSize: '30px', fontWeight: 700, letterSpacing: '-.02em', color: '#1B1730', marginTop: '18px', lineHeight: 1.1 }}>Verified</div>
            <p style={{ margin: '9px 0 0', fontSize: '14px', lineHeight: 1.55, color: '#5B5670' }}>A checkmark-backed digital identity, not just a photo.</p>
          </div>
          {/* Tap to access (dark) */}
          <div data-dicard-reveal="" data-dicard-reveal-delay="90" style={{ background: '#1B1730', borderRadius: '20px', padding: '30px 28px', border: '1px solid #1B1730', boxShadow: '0 20px 44px -24px rgba(27,23,48,.6)', position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
            <div style={{ position: 'absolute', top: '-40px', right: '-30px', width: '150px', height: '150px', background: 'radial-gradient(circle,rgba(124,58,237,.4),transparent 68%)' }} />
            <div style={{ position: 'relative', width: '46px', height: '46px', borderRadius: '13px', background: 'rgba(124,58,237,.22)', border: '1px solid rgba(159,103,245,.4)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="#C4B5FD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 8.5a11 11 0 0 1 0 7" /><path d="M9 6a16 16 0 0 1 0 12" /><path d="M13 4a20 20 0 0 1 0 16" /><path d="M17 3a24 24 0 0 1 0 18" /></svg>
            </div>
            <div style={{ position: 'relative', fontSize: '26px', fontWeight: 700, letterSpacing: '-.02em', color: '#fff', marginTop: '18px', lineHeight: 1.12 }}>Tap to<br />access</div>
            <p style={{ position: 'relative', margin: '9px 0 0', fontSize: '14px', lineHeight: 1.55, color: '#B7B1C9' }}>NFC/QR entry to doors and systems.</p>
          </div>

          {/* 0 min (violet gradient) */}
          <div data-dicard-reveal="" data-dicard-reveal-delay="180" style={{ background: 'linear-gradient(150deg,#7C3AED,#6D28D9)', borderRadius: '20px', padding: '30px 28px', border: '1px solid #6D28D9', boxShadow: '0 20px 44px -22px rgba(124,58,237,.6)', position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div style={{ position: 'absolute', bottom: '-50px', left: '-30px', width: '160px', height: '160px', background: 'radial-gradient(circle,rgba(255,255,255,.16),transparent 68%)' }} />
            <div style={{ position: 'relative', fontSize: '56px', fontWeight: 700, letterSpacing: '-.03em', color: '#fff', lineHeight: 1 }}>0<span style={{ fontSize: '26px', fontWeight: 600, marginLeft: '4px' }}>min</span></div>
            <p style={{ position: 'relative', margin: '10px 0 0', fontSize: '14px', lineHeight: 1.55, color: 'rgba(255,255,255,.82)' }}>Setup time &mdash; no physical badge to issue.</p>
          </div>
          {/* 1 ID (light, stack) */}
          <div data-dicard-reveal="" data-dicard-reveal-delay="270" style={{ background: '#fff', borderRadius: '20px', padding: '30px 28px', border: '1px solid #EEEDF3', boxShadow: '0 14px 34px -22px rgba(37,22,84,.22)', display: 'flex', flexDirection: 'column' }}>
            <div style={{ position: 'relative', width: '56px', height: '50px' }}>
              <div style={{ position: 'absolute', left: '8px', top: 0, width: '38px', height: '26px', borderRadius: '6px', background: '#FFEFF2', border: '1px solid #FBD5DD', transform: 'rotate(-8deg)' }} />
              <div style={{ position: 'absolute', left: '14px', top: '3px', width: '38px', height: '26px', borderRadius: '6px', background: '#ECFDF9', border: '1px solid #CDF5EE', transform: 'rotate(7deg)' }} />
              <div style={{ position: 'absolute', left: '10px', top: '7px', width: '38px', height: '30px', borderRadius: '6px', background: '#fff', border: '1px solid #E4DFF2', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 8px 16px -10px rgba(37,22,84,.3)' }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="16" rx="3" /><circle cx="9" cy="10" r="2" /><path d="M14 9h4M14 13h4M5 16c1-2 3-2 4-2s3 0 4 2" /></svg></div>
            </div>
            <div style={{ fontSize: '44px', fontWeight: 700, letterSpacing: '-.02em', color: '#1B1730', marginTop: '14px', lineHeight: 1 }}>1<span style={{ fontSize: '20px', fontWeight: 600, marginLeft: '6px' }}>ID</span></div>
            <p style={{ margin: '8px 0 0', fontSize: '14px', lineHeight: 1.55, color: '#5B5670' }}>One card for access, sign-in, and identity checks.</p>
          </div>
        </DigitalIdCardRevealSection>
      </section>

      {/* ============ 3 STEPS ============ */}
      <section style={{ background: '#fff', padding: '92px 24px' }}>
        <DigitalIdCardRevealSection className="max-w-7xl mx-auto px-6 lg:px-10">
          <div data-dicard-reveal="" style={{ textAlign: 'center', maxWidth: '620px', margin: '0 auto 52px' }}>
            <h2 className="dicard-section-heading" style={{ margin: 0 }}>Get started in 3 easy steps</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '24px' }}>
            {/* step 1 */}
            <div data-dicard-reveal="" style={{ background: '#FBFAFE', borderRadius: '20px', padding: '32px 30px', border: '1px solid #F0EEF7' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '36px', height: '36px', borderRadius: '10px', background: '#7C3AED', color: '#fff', fontWeight: 700, fontSize: '15px', boxShadow: '0 8px 16px -6px rgba(124,58,237,.5)' }}>1</div>
              <div style={{ marginTop: '22px', height: '120px', borderRadius: '14px', background: '#fff', border: '1px solid #EFEDF6', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', padding: '0 20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ width: '52px', height: '64px', borderRadius: '9px', background: '#F5F3FF', border: '1.5px solid #E6DEFA', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '5px' }}><span style={{ width: '20px', height: '20px', borderRadius: '50%', background: '#C4B5FD' }} /><span style={{ height: '4px', width: '30px', borderRadius: '2px', background: '#DDD5F5' }} /><span style={{ height: '4px', width: '22px', borderRadius: '2px', background: '#DDD5F5' }} /></div>
                  <div style={{ width: '38px', height: '38px', borderRadius: '50%', background: '#ECFDF9', border: '1px solid #CDF5EE', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 8px 16px -8px rgba(14,147,132,.5)' }}><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#0E9384" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg></div>
                </div>
              </div>
              <h3 style={{ fontSize: '19px', fontWeight: 600, margin: '22px 0 0', color: '#1B1730' }}>Verify your identity</h3>
              <p style={{ margin: '8px 0 0', fontSize: '14.5px', lineHeight: 1.55, color: '#5B5670' }}>A quick one-time verification to activate your card.</p>
            </div>

            {/* step 2 */}
            <div data-dicard-reveal="" data-dicard-reveal-delay="100" style={{ background: '#FBFAFE', borderRadius: '20px', padding: '32px 30px', border: '1px solid #F0EEF7' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '36px', height: '36px', borderRadius: '10px', background: '#7C3AED', color: '#fff', fontWeight: 700, fontSize: '15px', boxShadow: '0 8px 16px -6px rgba(124,58,237,.5)' }}>2</div>
              <div style={{ marginTop: '22px', height: '120px', borderRadius: '14px', background: '#fff', border: '1px solid #EFEDF6', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                <div style={{ position: 'relative', width: '96px', height: '74px' }}>
                  <div style={{ position: 'absolute', left: 0, bottom: 0, width: '96px', height: '52px', borderRadius: '12px 12px 14px 14px', background: '#1B1730', boxShadow: '0 10px 20px -10px rgba(37,22,84,.5)' }} />
                  <div style={{ position: 'absolute', left: '10px', top: 0, width: '76px', height: '44px', borderRadius: '9px', background: 'linear-gradient(150deg,#7C3AED,#5B21B6)', boxShadow: '0 12px 22px -10px rgba(124,58,237,.7)', display: 'flex', alignItems: 'center', padding: '0 10px', gap: '7px' }}><span style={{ width: '18px', height: '18px', borderRadius: '6px', background: 'rgba(255,255,255,.9)' }} /><div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}><span style={{ height: '4px', width: '32px', borderRadius: '2px', background: 'rgba(255,255,255,.75)' }} /><span style={{ height: '3px', width: '22px', borderRadius: '2px', background: 'rgba(255,255,255,.5)' }} /></div></div>
                </div>
              </div>
              <h3 style={{ fontSize: '19px', fontWeight: 600, margin: '22px 0 0', color: '#1B1730' }}>Add it to your wallet</h3>
              <p style={{ margin: '8px 0 0', fontSize: '14.5px', lineHeight: 1.55, color: '#5B5670' }}>Your badge lives on your phone, always with you.</p>
            </div>
            {/* step 3 */}
            <div data-dicard-reveal="" data-dicard-reveal-delay="200" style={{ background: '#FBFAFE', borderRadius: '20px', padding: '32px 30px', border: '1px solid #F0EEF7' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '36px', height: '36px', borderRadius: '10px', background: '#7C3AED', color: '#fff', fontWeight: 700, fontSize: '15px', boxShadow: '0 8px 16px -6px rgba(124,58,237,.5)' }}>3</div>
              <div style={{ marginTop: '22px', height: '120px', borderRadius: '14px', background: '#fff', border: '1px solid #EFEDF6', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', overflow: 'hidden' }}>
                <div style={{ width: '40px', height: '58px', borderRadius: '9px', background: 'linear-gradient(150deg,#7C3AED,#5B21B6)', boxShadow: '0 10px 20px -8px rgba(124,58,237,.6)' }} />
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#14B8A6" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 8.5a11 11 0 0 1 0 7" /><path d="M9 6a16 16 0 0 1 0 12" /><path d="M13 4a20 20 0 0 1 0 16" /></svg>
                <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: '#ECFDF9', border: '1px solid #CDF5EE', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="#0E9384" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 9.9-1" /></svg></div>
              </div>
              <h3 style={{ fontSize: '19px', fontWeight: 600, margin: '22px 0 0', color: '#1B1730' }}>Tap to use it</h3>
              <p style={{ margin: '8px 0 0', fontSize: '14.5px', lineHeight: 1.55, color: '#5B5670' }}>Doors, sign-ins, and identity checks, all from one tap.</p>
            </div>
          </div>

          <div data-dicard-reveal="" style={{ textAlign: 'center', marginTop: '40px' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '15px 28px', borderRadius: '999px', background: '#7C3AED', color: '#fff', fontWeight: 600, fontSize: '15.5px', cursor: 'pointer', boxShadow: '0 12px 26px -8px rgba(124,58,237,.55)' }}>Start for &pound;2/month
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
            </span>
          </div>
        </DigitalIdCardRevealSection>
      </section>

      {/* ============ BENTO FEATURE GRID (6, asymmetric) ============ */}
      <section style={{ background: '#F7F7F7', padding: '92px 24px' }}>
        <DigitalIdCardRevealSection className="max-w-7xl mx-auto px-6 lg:px-10">
          <div data-dicard-reveal="" style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 52px' }}>
            <span style={{ fontSize: '11.5px', fontWeight: 600, letterSpacing: '.14em', color: '#7C3AED', textTransform: 'uppercase' }}>One card, everything it needs</span>
            <h2 className="dicard-section-heading" style={{ margin: '14px 0 0' }}>A badge and an identity, in one tap.</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6,1fr)', gap: '20px' }}>
            {/* BIG : Verified digital identity */}
            <div data-dicard-reveal="" style={{ gridColumn: 'span 3', gridRow: 'span 2', background: '#fff', borderRadius: '22px', padding: '36px', border: '1px solid #EEEDF3', boxShadow: '0 20px 44px -28px rgba(37,22,84,.26)', display: 'flex', flexDirection: 'column' }}>
              <span style={{ display: 'inline-flex', alignSelf: 'flex-start', alignItems: 'center', gap: '7px', padding: '5px 12px', borderRadius: '999px', background: '#ECFDF9', color: '#0E9384', fontSize: '11.5px', fontWeight: 600, border: '1px solid #CDF5EE', whiteSpace: 'nowrap' }}>Identity</span>
              <h3 style={{ fontSize: '25px', fontWeight: 700, letterSpacing: '-.02em', margin: '18px 0 0', color: '#1B1730' }}>Verified digital identity</h3>
              <p style={{ margin: '11px 0 0', fontSize: '15.5px', lineHeight: 1.6, color: '#5B5670', maxWidth: '400px' }}>Backed by a real verification check &mdash; not a self-reported photo. When someone taps their card, the verified mark means it&rsquo;s genuinely them.</p>
              <div style={{ marginTop: '28px', flex: 1, minHeight: '200px', background: 'linear-gradient(160deg,#FBFAFE,#F1FCF9)', borderRadius: '16px', border: '1px solid #EAF6F3', padding: '24px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '16px' }}>
                <div style={{ position: 'relative', width: '88px', height: '88px', borderRadius: '26px', background: 'linear-gradient(150deg,#C4B5FD,#8B5CF6)', display: 'flex', alignItems: 'flex-end', justifyContent: 'center', overflow: 'hidden', boxShadow: '0 16px 32px -14px rgba(124,58,237,.6)' }}>
                  <svg width="62" height="62" viewBox="0 0 24 24" fill="rgba(255,255,255,.92)"><circle cx="12" cy="8.5" r="4" /><path d="M4 21c0-4 3.6-6.5 8-6.5s8 2.5 8 6.5z" /></svg>
                  <span style={{ position: 'absolute', bottom: '6px', right: '6px', width: '26px', height: '26px', borderRadius: '50%', background: '#2DD4BF', border: '3px solid #fff', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 6px 14px -4px rgba(14,147,132,.6)' }}><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg></span>
                </div>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '7px', padding: '8px 15px', borderRadius: '999px', background: '#fff', border: '1px solid #CDF5EE', boxShadow: '0 10px 22px -14px rgba(14,147,132,.5)' }}><span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#0E9384' }} /><span style={{ fontSize: '12.5px', fontWeight: 700, color: '#0E9384' }}>Verified identity &middot; Jamie Rivera</span></span>
              </div>
            </div>

            {/* Tap-to-unlock access */}
            <div data-dicard-reveal="" data-dicard-reveal-delay="100" style={{ gridColumn: 'span 3', background: '#fff', borderRadius: '22px', padding: '28px 30px', border: '1px solid #EEEDF3', boxShadow: '0 20px 44px -28px rgba(37,22,84,.26)', display: 'flex', alignItems: 'center', gap: '24px' }}>
              <div style={{ flex: 1 }}>
                <h3 style={{ fontSize: '20px', fontWeight: 700, letterSpacing: '-.01em', margin: 0, color: '#1B1730' }}>Tap-to-unlock access</h3>
                <p style={{ margin: '9px 0 0', fontSize: '14.5px', lineHeight: 1.55, color: '#5B5670' }}>NFC/QR entry for doors and secured areas &mdash; hold your phone to the reader.</p>
              </div>
              <div style={{ flexShrink: 0, display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{ width: '38px', height: '52px', borderRadius: '8px', background: 'linear-gradient(150deg,#7C3AED,#5B21B6)', boxShadow: '0 10px 20px -8px rgba(124,58,237,.6)' }} />
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#14B8A6" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 8.5a11 11 0 0 1 0 7" /><path d="M9 6a16 16 0 0 1 0 12" /><path d="M13 4a20 20 0 0 1 0 16" /></svg>
                <div style={{ width: '40px', height: '40px', borderRadius: '11px', background: '#ECFDF9', border: '1px solid #CDF5EE', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0E9384" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 9.9-1" /></svg></div>
              </div>
            </div>

            {/* Single sign-on badge */}
            <div data-dicard-reveal="" data-dicard-reveal-delay="180" style={{ gridColumn: 'span 3', background: '#fff', borderRadius: '22px', padding: '28px 30px', border: '1px solid #EEEDF3', boxShadow: '0 20px 44px -28px rgba(37,22,84,.26)', display: 'flex', alignItems: 'center', gap: '24px' }}>
              <div style={{ flex: 1 }}>
                <h3 style={{ fontSize: '20px', fontWeight: 700, letterSpacing: '-.01em', margin: 0, color: '#1B1730' }}>Single sign-on badge</h3>
                <p style={{ margin: '9px 0 0', fontSize: '14.5px', lineHeight: 1.55, color: '#5B5670' }}>Use your ID to sign into connected apps &mdash; one identity, everywhere.</p>
              </div>
              <div style={{ flexShrink: 0, display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span style={{ width: '34px', height: '34px', borderRadius: '10px', background: '#F5F3FF', border: '1px solid #E6DEFA', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="16" rx="3" /><circle cx="9" cy="10" r="2" /><path d="M14 9h4M14 13h4" /></svg></span>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#C7C2D6" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                <span style={{ width: '34px', height: '34px', borderRadius: '10px', background: '#ECFDF9', border: '1px solid #CDF5EE', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#0E9384" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg></span>
              </div>
            </div>

            {/* Instant revoke */}
            <div data-dicard-reveal="" data-dicard-reveal-delay="120" style={{ gridColumn: 'span 2', background: '#fff', borderRadius: '22px', padding: '28px', border: '1px solid #EEEDF3', boxShadow: '0 20px 44px -28px rgba(37,22,84,.26)' }}>
              <div style={{ height: '70px', marginBottom: '18px', display: 'flex', alignItems: 'center', gap: '11px' }}>
                <div style={{ position: 'relative', width: '44px', height: '44px', borderRadius: '12px', background: '#FFEFF2', border: '1px solid #FBD5DD', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="#E11D74" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4.9 4.9 19 19" /><path d="M10.7 5.1A9 9 0 0 1 21 12M3 12a9 9 0 0 0 9 9 8.9 8.9 0 0 0 5.5-1.9" /><circle cx="12" cy="12" r="9" /></svg></div>
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '6px' }}><span style={{ height: '6px', width: '70%', borderRadius: '3px', background: '#F4DDE6' }} /><span style={{ height: '5px', width: '50%', borderRadius: '3px', background: '#FBECF1' }} /></div>
              </div>
              <h3 style={{ fontSize: '18px', fontWeight: 700, letterSpacing: '-.01em', margin: 0, color: '#1B1730' }}>Instant revoke</h3>
              <p style={{ margin: '8px 0 0', fontSize: '14px', lineHeight: 1.55, color: '#5B5670' }}>Disable a badge the moment someone leaves the team.</p>
            </div>

            {/* Photo + role display */}
            <div data-dicard-reveal="" data-dicard-reveal-delay="200" style={{ gridColumn: 'span 2', background: '#fff', borderRadius: '22px', padding: '28px', border: '1px solid #EEEDF3', boxShadow: '0 20px 44px -28px rgba(37,22,84,.26)' }}>
              <div style={{ height: '70px', marginBottom: '18px', display: 'flex', alignItems: 'center', gap: '11px' }}>
                <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'linear-gradient(150deg,#C4B5FD,#8B5CF6)', display: 'flex', alignItems: 'flex-end', justifyContent: 'center', overflow: 'hidden' }}><svg width="30" height="30" viewBox="0 0 24 24" fill="rgba(255,255,255,.92)"><circle cx="12" cy="8.5" r="4" /><path d="M4 21c0-4 3.6-6.5 8-6.5s8 2.5 8 6.5z" /></svg></div>
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '6px' }}><span style={{ height: '7px', width: '60%', borderRadius: '3px', background: '#E4DFF2' }} /><span style={{ height: '5px', width: '44%', borderRadius: '3px', background: '#EDE9FE' }} /></div>
              </div>
              <h3 style={{ fontSize: '18px', fontWeight: 700, letterSpacing: '-.01em', margin: 0, color: '#1B1730' }}>Photo + role display</h3>
              <p style={{ margin: '8px 0 0', fontSize: '14px', lineHeight: 1.55, color: '#5B5670' }}>Shows exactly who someone is at a glance.</p>
            </div>

            {/* Works offline */}
            <div data-dicard-reveal="" data-dicard-reveal-delay="280" style={{ gridColumn: 'span 2', background: '#fff', borderRadius: '22px', padding: '28px', border: '1px solid #EEEDF3', boxShadow: '0 20px 44px -28px rgba(37,22,84,.26)' }}>
              <div style={{ height: '70px', marginBottom: '18px', display: 'flex', alignItems: 'center', gap: '11px' }}>
                <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: '#FEF6E7', border: '1px solid #FBEBC6', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="#B45309" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h.01" /><path d="M8.5 16.4a5 5 0 0 1 7 0" /><path d="M5 12.9a10 10 0 0 1 14 0" /><path d="m2 9 20 0" opacity=".35" /><path d="M2 9 4 7" /></svg></div>
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '6px' }}><span style={{ height: '6px', width: '65%', borderRadius: '3px', background: '#F4E7C9' }} /><span style={{ height: '5px', width: '45%', borderRadius: '3px', background: '#FBF1DA' }} /></div>
              </div>
              <h3 style={{ fontSize: '18px', fontWeight: 700, letterSpacing: '-.01em', margin: 0, color: '#1B1730' }}>Works offline</h3>
              <p style={{ margin: '8px 0 0', fontSize: '14px', lineHeight: 1.55, color: '#5B5670' }}>The badge still displays and can be shown without signal.</p>
            </div>
          </div>

          <div data-dicard-reveal="" style={{ textAlign: 'center', marginTop: '40px' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '14px 26px', borderRadius: '999px', background: '#fff', color: '#2A2440', fontWeight: 600, fontSize: '15px', cursor: 'pointer', border: '1.5px solid #E4DFF2' }}>See How It Works
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
            </span>
          </div>
        </DigitalIdCardRevealSection>
      </section>

      {/* ============ ALT ROW 1 : One tap, verified ============ */}
      <section style={{ background: '#fff', padding: '92px 24px' }}>
        <DigitalIdCardRevealSection className="max-w-7xl mx-auto px-6 lg:px-10" style={{ display: 'grid', gridTemplateColumns: '1.05fr 1fr', gap: '64px', alignItems: 'center' }}>
          {/* mock: phone mid-tap against reader */}
          <div data-dicard-reveal="" style={{ position: 'relative' }}>
            <div style={{ position: 'absolute', inset: '18px -8px -16px 14px', background: 'linear-gradient(135deg,rgba(124,58,237,.10),rgba(20,184,166,.10))', borderRadius: '24px', filter: 'blur(2px)' }} />
            <div style={{ position: 'relative', background: '#fff', borderRadius: '20px', border: '1px solid #ECE9F5', boxShadow: '0 30px 60px -30px rgba(37,22,84,.3)', padding: '34px 30px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '24px', minHeight: '280px' }}>
              {/* phone with card */}
              <div style={{ position: 'relative', width: '150px', borderRadius: '26px', background: '#0E0A1F', padding: '8px', boxShadow: '0 24px 48px -20px rgba(37,22,84,.5)' }}>
                <div style={{ borderRadius: '20px', overflow: 'hidden', background: 'linear-gradient(165deg,#241B44,#12102A)', padding: '14px 12px 16px', minHeight: '230px' }}>
                  <div style={{ borderRadius: '14px', background: 'linear-gradient(150deg,#7C3AED,#5B21B6)', padding: '12px', boxShadow: '0 14px 26px -12px rgba(124,58,237,.7)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}><span style={{ fontSize: '7px', fontWeight: 700, letterSpacing: '.1em', color: 'rgba(255,255,255,.7)' }}>NORTHWIND CO</span><span style={{ width: '14px', height: '14px', borderRadius: '50%', background: 'rgba(45,212,191,.25)', border: '1px solid rgba(94,234,212,.5)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="#5EEAD4" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg></span></div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '11px' }}><div style={{ width: '34px', height: '34px', borderRadius: '11px', background: 'linear-gradient(150deg,#C4B5FD,#8B5CF6)', display: 'flex', alignItems: 'flex-end', justifyContent: 'center', overflow: 'hidden' }}><svg width="24" height="24" viewBox="0 0 24 24" fill="rgba(255,255,255,.92)"><circle cx="12" cy="8.5" r="4" /><path d="M4 21c0-4 3.6-6.5 8-6.5s8 2.5 8 6.5z" /></svg></div><div><div style={{ fontSize: '10px', fontWeight: 700, color: '#fff' }}>Jamie Rivera</div><div style={{ fontSize: '7px', color: 'rgba(255,255,255,.7)' }}>Product Design</div></div></div>
                    <div style={{ marginTop: '11px', paddingTop: '9px', borderTop: '1px solid rgba(255,255,255,.15)', display: 'flex', alignItems: 'center', gap: '6px' }}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 8.5a11 11 0 0 1 0 7" /><path d="M9 6a16 16 0 0 1 0 12" /><path d="M13 4a20 20 0 0 1 0 16" /></svg><span style={{ fontSize: '8px', fontWeight: 600, color: 'rgba(255,255,255,.9)' }}>Tap to verify</span></div>
                  </div>
                </div>
              </div>
              {/* waves + reader */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
                <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#14B8A6" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 8.5a11 11 0 0 1 0 7" /><path d="M9 6a16 16 0 0 1 0 12" /><path d="M13 4a20 20 0 0 1 0 16" /></svg>
                <div style={{ width: '74px', padding: '16px 12px', borderRadius: '16px', background: '#F1FCF9', border: '1px solid #CDF5EE', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '9px', boxShadow: '0 16px 32px -18px rgba(14,147,132,.4)' }}>
                  <div style={{ width: '42px', height: '42px', borderRadius: '12px', background: '#fff', border: '1px solid #CDF5EE', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0E9384" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 9.9-1" /></svg></div>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}><span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#0E9384' }} /><span style={{ fontSize: '8.5px', fontWeight: 700, color: '#0E9384' }}>Unlocked</span></span>
                </div>
              </div>
            </div>
          </div>

          {/* text (right) */}
          <div data-dicard-reveal="" data-dicard-reveal-delay="120">
            <h2 className="dicard-row-heading" style={{ margin: 0 }}>One tap, verified.</h2>
            <p style={{ margin: '18px 0 0', fontSize: '16px', lineHeight: 1.62, color: '#5B5670' }}>Hold your phone to a reader and you&rsquo;re through &mdash; with a verified checkmark that proves it&rsquo;s actually you behind the badge.</p>
            <div style={{ marginTop: '30px', display: 'flex', flexDirection: 'column', gap: '22px' }}>
              <div style={{ display: 'flex', gap: '15px' }}>
                <div style={{ flexShrink: 0, width: '38px', height: '38px', borderRadius: '11px', background: '#F5F3FF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 9.9-1" /></svg></div>
                <div><div style={{ fontWeight: 600, fontSize: '16.5px', color: '#1B1730' }}>Tap your phone to unlock.</div><p style={{ margin: '5px 0 0', fontSize: '14.5px', lineHeight: 1.55, color: '#5B5670' }}>A door or secured area opens the moment your card is read.</p></div>
              </div>
              <div style={{ display: 'flex', gap: '15px' }}>
                <div style={{ flexShrink: 0, width: '38px', height: '38px', borderRadius: '11px', background: '#ECFDF9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#0E9384" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="m9 12 2 2 4-4" /></svg></div>
                <div><div style={{ fontWeight: 600, fontSize: '16.5px', color: '#1B1730' }}>Verified means it&rsquo;s really you.</div><p style={{ margin: '5px 0 0', fontSize: '14.5px', lineHeight: 1.55, color: '#5B5670' }}>Not just a photo on file &mdash; a checkmark-backed identity check.</p></div>
              </div>
              <div style={{ display: 'flex', gap: '15px' }}>
                <div style={{ flexShrink: 0, width: '38px', height: '38px', borderRadius: '11px', background: '#FEF6E7', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#B45309" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h18" /><path d="M5 21V7l7-4 7 4v14" /><path d="M9 21v-6h6v6" /></svg></div>
                <div><div style={{ fontWeight: 600, fontSize: '16.5px', color: '#1B1730' }}>Works everywhere you go.</div><p style={{ margin: '5px 0 0', fontSize: '14.5px', lineHeight: 1.55, color: '#5B5670' }}>The same at reception, in the office, or at a partner site.</p></div>
              </div>
            </div>
          </div>
        </DigitalIdCardRevealSection>
      </section>

      {/* ============ ALT ROW 2 : Gone the moment they're gone ============ */}
      <section style={{ background: '#F7F7F7', padding: '92px 24px' }}>
        <DigitalIdCardRevealSection className="max-w-7xl mx-auto px-6 lg:px-10" style={{ display: 'grid', gridTemplateColumns: '1fr 1.05fr', gap: '64px', alignItems: 'center' }}>
          {/* text (left) */}
          <div data-dicard-reveal="">
            <h2 className="dicard-row-heading" style={{ margin: 0 }}>Gone the moment they&rsquo;re gone.</h2>
            <p style={{ margin: '18px 0 0', fontSize: '16px', lineHeight: 1.62, color: '#5B5670' }}>No badge to collect on someone&rsquo;s last day. Flip one switch and their access is gone &mdash; instantly, everywhere.</p>
            <div style={{ marginTop: '30px', display: 'flex', flexDirection: 'column', gap: '22px' }}>
              <div style={{ display: 'flex', gap: '15px' }}>
                <div style={{ flexShrink: 0, width: '38px', height: '38px', borderRadius: '11px', background: '#FFEFF2', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#E11D74" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4.9 4.9 19 19" /><path d="M10.7 5.1A9 9 0 0 1 21 12M3 12a9 9 0 0 0 9 9 8.9 8.9 0 0 0 5.5-1.9" /><circle cx="12" cy="12" r="9" /></svg></div>
                <div><div style={{ fontWeight: 600, fontSize: '16.5px', color: '#1B1730' }}>Revoke instantly.</div><p style={{ margin: '5px 0 0', fontSize: '14.5px', lineHeight: 1.55, color: '#5B5670' }}>Disable a badge the moment someone leaves the team.</p></div>
              </div>
              <div style={{ display: 'flex', gap: '15px' }}>
                <div style={{ flexShrink: 0, width: '38px', height: '38px', borderRadius: '11px', background: '#F5F3FF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><path d="M9 15h6" /></svg></div>
                <div><div style={{ fontWeight: 600, fontSize: '16.5px', color: '#1B1730' }}>Nothing physical to chase.</div><p style={{ margin: '5px 0 0', fontSize: '14.5px', lineHeight: 1.55, color: '#5B5670' }}>No card to collect, cancel, or worry about later.</p></div>
              </div>
              <div style={{ display: 'flex', gap: '15px' }}>
                <div style={{ flexShrink: 0, width: '38px', height: '38px', borderRadius: '11px', background: '#ECFDF9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#0E9384" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 8v4l3 2" /><circle cx="12" cy="12" r="9" /></svg></div>
                <div><div style={{ fontWeight: 600, fontSize: '16.5px', color: '#1B1730' }}>Full access log.</div><p style={{ margin: '5px 0 0', fontSize: '14.5px', lineHeight: 1.55, color: '#5B5670' }}>See exactly when and where a badge was used.</p></div>
              </div>
            </div>
          </div>

          {/* admin panel mock (right) — interactive Active/Revoked toggle */}
          <div data-dicard-reveal="" data-dicard-reveal-delay="120" style={{ position: 'relative' }}>
            <div style={{ position: 'absolute', inset: '18px 14px -16px -8px', background: 'linear-gradient(135deg,rgba(124,58,237,.12),rgba(225,29,116,.10))', borderRadius: '24px', filter: 'blur(2px)' }} />
            <div style={{ position: 'relative', background: '#fff', borderRadius: '20px', border: '1px solid #ECE9F5', boxShadow: '0 30px 60px -30px rgba(37,22,84,.3)', overflow: 'hidden' }}>
              <div style={{ padding: '16px 20px', borderBottom: '1px solid #F0EEF6', display: 'flex', alignItems: 'center', gap: '11px', background: '#FBFAFE' }}>
                <span style={{ width: '32px', height: '32px', borderRadius: '9px', background: '#F5F3FF', border: '1px solid #E6DEFA', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg></span>
                <div style={{ flex: 1 }}><div style={{ fontSize: '13.5px', fontWeight: 700, color: '#1B1730' }}>Access control</div><div style={{ fontSize: '11px', color: '#8B85A0' }}>Admin &middot; Northwind Co</div></div>
                <span style={{ fontSize: '10.5px', fontWeight: 600, color: '#B4AEC6' }}>1 badge</span>
              </div>
              <div style={{ padding: '24px 22px' }}>
                {/* badge preview */}
                <div style={badgeCardStyle}>
                  <div style={badgeVeilStyle} />
                  <div style={{ position: 'relative', display: 'flex', alignItems: 'center', gap: '14px' }}>
                    <div style={{ width: '56px', height: '56px', borderRadius: '16px', background: 'linear-gradient(150deg,#C4B5FD,#8B5CF6)', display: 'flex', alignItems: 'flex-end', justifyContent: 'center', overflow: 'hidden', flexShrink: 0 }}><svg width="40" height="40" viewBox="0 0 24 24" fill="rgba(255,255,255,.92)"><circle cx="12" cy="8.5" r="4" /><path d="M4 21c0-4 3.6-6.5 8-6.5s8 2.5 8 6.5z" /></svg></div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ fontSize: '16px', fontWeight: 700, color: '#1B1730' }}>Jamie Rivera</div>
                      <div style={{ fontSize: '12.5px', color: '#8B85A0' }}>Product Design &middot; Engineering</div>
                      <span style={badgePillStyle}><span style={badgePillDotStyle} />{badgeStatusLabel}</span>
                    </div>
                  </div>
                  {/* revoked stamp */}
                  {revoked && (
                    <span style={{ position: 'absolute', top: '14px', right: '14px', display: 'inline-flex', alignItems: 'center', gap: '5px', padding: '5px 11px', borderRadius: '8px', background: '#FFEFF2', border: '1.5px solid #F5B6C9', transform: 'rotate(6deg)', animation: 'dicard-checkPop .35s ease-out' }}><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#E11D74" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18M6 6l12 12" /></svg><span style={{ fontSize: '9.5px', fontWeight: 800, letterSpacing: '.08em', color: '#C0344E' }}>REVOKED</span></span>
                  )}
                </div>

                {/* toggle control */}
                <div style={{ marginTop: '20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px 16px', borderRadius: '14px', background: '#FBFAFE', border: '1px solid #EFEDF6' }}>
                  <div><div style={{ fontSize: '13px', fontWeight: 600, color: '#1B1730' }}>Badge access</div><div style={toggleHintStyle}>{toggleHint}</div></div>
                  <button onClick={() => setBadge((b) => b === 'Revoked' ? 'Active' : 'Revoked')} style={switchTrackStyle}>
                    <span style={switchKnobStyle} />
                  </button>
                </div>
                <div style={{ marginTop: '12px', display: 'flex', alignItems: 'center', gap: '8px', paddingLeft: '2px' }}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#8B85A0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 8v4l3 2" /><circle cx="12" cy="12" r="9" /></svg>
                  <span style={{ fontSize: '11px', color: '#8B85A0' }}>{logLine}</span>
                </div>
              </div>
            </div>
          </div>
        </DigitalIdCardRevealSection>
      </section>

      {/* ============ TESTIMONIALS (3-card) ============ */}
      <section style={{ background: '#fff', padding: '92px 24px' }}>
        <DigitalIdCardRevealSection className="max-w-7xl mx-auto px-6 lg:px-10">
          <div data-dicard-reveal="" style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 48px' }}>
            <span style={{ fontSize: '11.5px', fontWeight: 600, letterSpacing: '.14em', color: '#7C3AED', textTransform: 'uppercase' }}>What teams say</span>
            <h2 className="dicard-band-heading" style={{ margin: '12px 0 0' }}>Fewer lost badges, tighter access.</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '22px' }}>
            <div data-dicard-reveal="" style={{ position: 'relative', background: '#FBFAFE', border: '1px solid #ECE7F7', borderRadius: '20px', padding: '30px 28px', boxShadow: '0 18px 40px -30px rgba(124,58,237,.28)' }}>
              <svg width="30" height="30" viewBox="0 0 24 24" fill="#E4DBF7"><path d="M9.5 4C6 4 3 7 3 11v9h8v-9H6.5c0-2 1.5-3.5 3-3.5V4Zm11 0c-3.5 0-6.5 3-6.5 7v9H22v-9h-4.5c0-2 1.5-3.5 3-3.5V4Z" /></svg>
              <p style={{ fontSize: '16px', lineHeight: 1.55, fontWeight: 500, color: '#211C36', margin: '16px 0 0' }}>&ldquo;Nobody&rsquo;s fumbling for a lost badge at the front desk anymore &mdash; it&rsquo;s just their phone.&rdquo;</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginTop: '24px' }}>
                <div style={{ width: '42px', height: '42px', borderRadius: '50%', background: '#EDE9FE', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 600, color: '#7C3AED', fontSize: '14px' }}>RM</div>
                <div><div style={{ fontWeight: 600, fontSize: '14.5px', color: '#1B1730' }}>Rowan M.</div><div style={{ fontSize: '13px', color: '#8B85A0' }}>Office manager</div></div>
              </div>
            </div>
            <div data-dicard-reveal="" data-dicard-reveal-delay="100" style={{ position: 'relative', background: '#FBFAFE', border: '1px solid #ECE7F7', borderRadius: '20px', padding: '30px 28px', boxShadow: '0 18px 40px -30px rgba(124,58,237,.28)' }}>
              <svg width="30" height="30" viewBox="0 0 24 24" fill="#E4DBF7"><path d="M9.5 4C6 4 3 7 3 11v9h8v-9H6.5c0-2 1.5-3.5 3-3.5V4Zm11 0c-3.5 0-6.5 3-6.5 7v9H22v-9h-4.5c0-2 1.5-3.5 3-3.5V4Z" /></svg>
              <p style={{ fontSize: '16px', lineHeight: 1.55, fontWeight: 500, color: '#211C36', margin: '16px 0 0' }}>&ldquo;Being able to revoke access instantly when someone leaves is the feature that got IT on board.&rdquo;</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginTop: '24px' }}>
                <div style={{ width: '42px', height: '42px', borderRadius: '50%', background: '#D5F5EF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 600, color: '#0E9384', fontSize: '14px' }}>SB</div>
                <div><div style={{ fontWeight: 600, fontSize: '14.5px', color: '#1B1730' }}>Sam B.</div><div style={{ fontSize: '13px', color: '#8B85A0' }}>IT lead</div></div>
              </div>
            </div>
            <div data-dicard-reveal="" data-dicard-reveal-delay="200" style={{ position: 'relative', background: '#FBFAFE', border: '1px solid #ECE7F7', borderRadius: '20px', padding: '30px 28px', boxShadow: '0 18px 40px -30px rgba(124,58,237,.28)' }}>
              <svg width="30" height="30" viewBox="0 0 24 24" fill="#E4DBF7"><path d="M9.5 4C6 4 3 7 3 11v9h8v-9H6.5c0-2 1.5-3.5 3-3.5V4Zm11 0c-3.5 0-6.5 3-6.5 7v9H22v-9h-4.5c0-2 1.5-3.5 3-3.5V4Z" /></svg>
              <p style={{ fontSize: '16px', lineHeight: 1.55, fontWeight: 500, color: '#211C36', margin: '16px 0 0' }}>&ldquo;It genuinely feels more secure than a plastic card with a photo that&rsquo;s five years old.&rdquo;</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginTop: '24px' }}>
                <div style={{ width: '42px', height: '42px', borderRadius: '50%', background: '#FDE6C9', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 600, color: '#B45309', fontSize: '14px' }}>NK</div>
                <div><div style={{ fontWeight: 600, fontSize: '14.5px', color: '#1B1730' }}>Nadia K.</div><div style={{ fontSize: '13px', color: '#8B85A0' }}>Security &amp; ops</div></div>
              </div>
            </div>
          </div>
        </DigitalIdCardRevealSection>
      </section>

      {/* ============ FAQ ============ */}
      <section style={{ background: '#F7F7F7', padding: '92px 24px' }}>
        <DigitalIdCardRevealSection className="max-w-7xl mx-auto px-6 lg:px-10">
          <div style={{ maxWidth: '820px', margin: '0 auto' }}>
            <div data-dicard-reveal="" style={{ textAlign: 'center', marginBottom: '44px' }}>
              <span style={{ fontSize: '11.5px', fontWeight: 600, letterSpacing: '.14em', color: '#7C3AED', textTransform: 'uppercase' }}>Questions</span>
              <h2 className="dicard-band-heading" style={{ margin: '12px 0 0' }}>Digital ID Card, answered.</h2>
            </div>
            <div data-dicard-reveal="" style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {FAQS.map((item, i) => {
                const open = openFaq === i;
                return (
                  <div key={item.q} style={{ background: '#fff', border: `1px solid ${open ? '#E4DBF7' : '#EDEBF2'}`, borderRadius: '16px', overflow: 'hidden', boxShadow: open ? '0 16px 34px -24px rgba(124,58,237,.3)' : 'none', transition: 'border-color .2s,box-shadow .2s' }}>
                    <button type="button" onClick={() => setOpenFaq(open ? -1 : i)} aria-expanded={open} style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px', padding: '20px 24px', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', fontFamily: 'inherit' }}>
                      <span style={{ fontSize: '16.5px', fontWeight: 600, color: '#1B1730' }}>{item.q}</span>
                      <span style={{ flexShrink: 0, width: '28px', height: '28px', borderRadius: '8px', background: open ? '#7C3AED' : '#F5F3FF', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'background .2s' }}>
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke={open ? '#fff' : '#7C3AED'} strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" style={{ transform: `rotate(${open ? 45 : 0}deg)`, transition: 'transform .25s' }}>
                          <line x1="12" y1="5" x2="12" y2="19" />
                          <line x1="5" y1="12" x2="19" y2="12" />
                        </svg>
                      </span>
                    </button>
                    {open && (
                      <div style={{ padding: '0 24px 22px', fontSize: '15px', lineHeight: 1.6, color: '#5B5670', maxWidth: '660px' }}>{item.a}</div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </DigitalIdCardRevealSection>
      </section>

      {/* ============ FINAL CTA ============ */}
      <HomeFinalCTA />

    </div>
  );
}
