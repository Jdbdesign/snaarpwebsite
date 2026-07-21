'use client';

import { useEffect, useRef, useState, type CSSProperties } from 'react';
import { EsignatureRevealSection } from './EsignatureRevealSection';
import { Price } from '@/components/currency/Price';

interface Person {
  initials: string;
  name: string;
  email: string;
  c: string;
  tint: string;
}

// Mock recipients — fake placeholders, no real data.
const PEOPLE: Person[] = [
  { initials: 'AR', name: 'Alex Rivera', email: 'alex@northwind.co', c: '#7C3AED', tint: '#EDE9FE' },
  { initials: 'PS', name: 'Priya Shah', email: 'priya@loop.co', c: '#B45309', tint: '#FDE6C9' },
  { initials: 'JK', name: 'Jordan Kim', email: 'jordan@bluesky.co', c: '#0E9384', tint: '#D5F5EF' },
];

// status: 0 Sent, 1 Viewed, 2 Signed
const STATUS_META: Record<number, { label: string; text: string; bg: string; dot: string }> = {
  0: { label: 'Sent', text: '#8B85A0', bg: '#F1EFF7', dot: '#B4AEC6' },
  1: { label: 'Viewed', text: '#B45309', bg: '#FEF6E7', dot: '#B45309' },
  2: { label: 'Signed', text: '#0E9384', bg: '#ECFDF9', dot: '#0E9384' },
};

// scripted progression (staggered, not simultaneous). times in ms from start.
const TIMELINE: { p: number; s: 0 | 1 | 2; t: number }[] = [
  { p: 0, s: 1, t: 900 },
  { p: 1, s: 1, t: 1700 },
  { p: 0, s: 2, t: 2600 },
  { p: 2, s: 1, t: 3400 },
  { p: 1, s: 2, t: 4300 },
  { p: 2, s: 2, t: 5300 },
];

const FIELD_META = [
  { tag: 'Signer 1', tagC: '#7C3AED', tagBg: '#EDE9FE' },
  { tag: 'Signer 2', tagC: '#B45309', tagBg: '#FDE6C9' },
  { tag: 'Signer 3', tagC: '#0E9384', tagBg: '#D5F5EF' },
];

function reduced() {
  return typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

// Ported 1:1 from the standalone bundle's Component class: popStatus()
// replays a CSS animation by clearing then re-setting the `animation`
// inline style (forcing reflow via offsetWidth), same DOM-poke approach as
// components/lock/LockHero.tsx's playCharFlip/pulseBadge.
function popStatus(idx: number, willSign: boolean) {
  if (reduced()) return;
  const el = document.querySelector<HTMLElement>(`[data-esignature-status="${idx}"]`);
  if (el) {
    el.style.animation = 'none';
    void el.offsetWidth;
    el.style.animation = 'esignature-status-pop .42s ease-out';
  }
  if (willSign) {
    const bar = document.querySelector<HTMLElement>('[data-esignature-progress-badge]');
    if (bar) {
      bar.style.animation = 'none';
      void bar.offsetWidth;
      bar.style.animation = 'esignature-bar-pulse 1s ease-out';
    }
  }
}

export function EsignatureHero() {
  const [statuses, setStatuses] = useState<[number, number, number]>([0, 0, 0]);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => {
    if (reduced()) {
      // reduced motion → show final all-signed state statically
      setStatuses([2, 2, 2]);
      return;
    }

    function runCycle() {
      timers.current.forEach(clearTimeout);
      timers.current = [];
      setStatuses([0, 0, 0]);
      TIMELINE.forEach((ev) => {
        timers.current.push(
          setTimeout(() => {
            setStatuses((s) => {
              const next = [...s] as [number, number, number];
              next[ev.p] = ev.s;
              return next;
            });
            popStatus(ev.p, ev.s === 2);
          }, ev.t)
        );
      });
      const last = TIMELINE[TIMELINE.length - 1].t;
      timers.current.push(setTimeout(runCycle, last + 2600));
    }

    runCycle();
    return () => timers.current.forEach(clearTimeout);
  }, []);

  const signedCount = statuses.filter((s) => s === 2).length;
  const totalCount = PEOPLE.length;
  const done = signedCount === totalCount;
  const progressPct = Math.round((signedCount / totalCount) * 100);
  const progressBadgeStyle: CSSProperties = done
    ? { background: '#ECFDF9', color: '#0E9384' }
    : { background: '#F5F3FF', color: '#7C3AED' };

  return (
    <section style={{ background: 'linear-gradient(180deg,#FBFAFF 0%,#fff 70%)', paddingTop: '74px', paddingBottom: '104px', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: '-120px', right: '-60px', width: '560px', height: '560px', background: 'radial-gradient(circle,rgba(124,58,237,.10),transparent 66%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: '-160px', left: '-100px', width: '420px', height: '420px', background: 'radial-gradient(circle,rgba(20,184,166,.09),transparent 68%)', pointerEvents: 'none' }} />
      <EsignatureRevealSection className="max-w-7xl mx-auto px-6 lg:px-10" style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0,1.12fr)', gap: '56px', alignItems: 'center', position: 'relative' }}>
        <div data-esignature-reveal="">
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '7px 14px', borderRadius: '999px', background: '#F5F3FF', color: '#7C3AED', fontWeight: 600, fontSize: '12px', letterSpacing: '.09em', textTransform: 'uppercase', border: '1px solid #EDE9FE', whiteSpace: 'nowrap' }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#7C3AED' }} />Secure &amp; Sign &middot; eSignature
          </span>
          <h1 className="esignature-hero-heading" style={{ margin: '22px 0 0', color: '#1B1730' }}>
            Send it out.<br /><span style={{ color: '#7C3AED' }}>Get it signed.</span>
          </h1>
          <p className="esignature-lede" style={{ color: '#5B5670', margin: '22px 0 0', maxWidth: '512px' }}>
            Send any document out for signature and track it to done &mdash; templates for the paperwork you send every week, and a tamper-evident audit trail on every signed copy.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '13px', marginTop: '32px' }}>
            <a href="#" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '15px 28px', borderRadius: '999px', background: '#7C3AED', color: '#fff', fontWeight: 600, fontSize: '15.5px', cursor: 'pointer', boxShadow: '0 12px 26px -8px rgba(124,58,237,.6)' }}>
              Start for <Price amount={2} />/month
            </a>
            <a href="#" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '15px 26px', borderRadius: '999px', background: '#fff', color: '#2A2440', fontWeight: 600, fontSize: '15.5px', cursor: 'pointer', border: '1.5px solid #E4DFF2' }}>
              See how it works
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
            </a>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '9px', marginTop: '26px', fontSize: '13.5px', color: '#8B85A0', fontWeight: 500 }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#14B8A6" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
            GDPR compliant &middot; No credit card required
          </div>
        </div>

        {/* HERO VISUAL : interactive send-and-track demo */}
        <div data-esignature-reveal="" data-esignature-reveal-delay="140" style={{ position: 'relative' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', alignItems: 'stretch' }}>
            {/* document preview with signature fields */}
            <div style={{ position: 'relative', background: '#fff', borderRadius: '18px', border: '1px solid #ECE9F5', boxShadow: '0 30px 60px -32px rgba(37,22,84,.34)', padding: '18px 18px 20px', display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', paddingBottom: '13px', borderBottom: '1px solid #F2F0F8' }}>
                <span style={{ width: '26px', height: '26px', borderRadius: '8px', background: '#FFEFF2', border: '1px solid #FBD5DD', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#E11D74" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /></svg>
                </span>
                <span style={{ fontSize: '12px', fontWeight: 700, color: '#1B1730', letterSpacing: '-.01em' }}>Mutual NDA.pdf</span>
              </div>
              <div style={{ marginTop: '14px', display: 'flex', flexDirection: 'column', gap: '7px' }}>
                <span style={{ height: '6px', width: '92%', borderRadius: '3px', background: '#EFEDF6' }} />
                <span style={{ height: '6px', width: '80%', borderRadius: '3px', background: '#EFEDF6' }} />
                <span style={{ height: '6px', width: '86%', borderRadius: '3px', background: '#EFEDF6' }} />
                <span style={{ height: '6px', width: '60%', borderRadius: '3px', background: '#EFEDF6' }} />
              </div>
              {/* signature field markers */}
              <div style={{ marginTop: '16px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {FIELD_META.map((f, i) => {
                  const signed = statuses[i] === 2;
                  return (
                    <div
                      key={f.tag}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        padding: '8px 11px',
                        borderRadius: '10px',
                        border: `1.5px ${signed ? 'solid #CDF5EE' : 'dashed #C9BEEE'}`,
                        background: signed ? '#F3FCFA' : '#FBFAFE',
                        transition: 'background .3s, border-color .3s',
                      }}
                    >
                      <span style={{ flexShrink: 0, fontSize: '8.5px', fontWeight: 700, padding: '3px 7px', borderRadius: '6px', letterSpacing: '.02em', background: f.tagBg, color: f.tagC }}>{f.tag}</span>
                      <span style={{ flex: 1, display: 'flex', alignItems: 'center', minHeight: '22px' }}>
                        {signed ? (
                          <svg width="72" height="22" viewBox="0 0 72 22" fill="none" style={{ overflow: 'visible' }}>
                            <path d="M3 15 C10 4, 15 4, 20 13 S30 20, 38 8 S52 2, 60 14 L69 9" stroke="#0E9384" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="120" style={{ animation: 'esignature-sign-ink .7s ease-out both' }} />
                          </svg>
                        ) : (
                          <span style={{ fontSize: '10px', fontWeight: 600, color: '#B4AEC6', letterSpacing: '.02em' }}>Signature</span>
                        )}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* recipient tracker */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{ background: '#fff', borderRadius: '18px', border: '1px solid #ECE9F5', boxShadow: '0 30px 60px -32px rgba(37,22,84,.34)', padding: '16px 16px 18px', flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
                  <span style={{ width: '26px', height: '26px', borderRadius: '8px', background: '#F5F3FF', border: '1px solid #E6DEFA', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="m16 11 2 2 4-4" /></svg>
                  </span>
                  <span style={{ fontSize: '12px', fontWeight: 700, color: '#1B1730' }}>Recipients</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {PEOPLE.map((p, i) => {
                    const m = STATUS_META[statuses[i]];
                    return (
                      <div key={p.email} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <span style={{ flexShrink: 0, width: '30px', height: '30px', borderRadius: '50%', fontSize: '10px', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', background: p.tint, color: p.c }}>{p.initials}</span>
                        <div style={{ minWidth: 0, flex: 1 }}>
                          <div style={{ fontSize: '12px', fontWeight: 600, color: '#1B1730', lineHeight: 1.2, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{p.name}</div>
                          <div style={{ fontSize: '9.5px', color: '#8B85A0', lineHeight: 1.2, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{p.email}</div>
                        </div>
                        <span
                          data-esignature-status={i}
                          style={{
                            flexShrink: 0,
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '5px',
                            padding: '4px 9px',
                            borderRadius: '999px',
                            fontSize: '9.5px',
                            fontWeight: 700,
                            background: m.bg,
                            color: m.text,
                            transition: 'background .3s, color .3s',
                          }}
                        >
                          <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: m.dot }} />{m.label}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
              {/* progress */}
              <div style={{ background: '#fff', borderRadius: '16px', border: '1px solid #ECE9F5', boxShadow: '0 18px 40px -26px rgba(37,22,84,.3)', padding: '14px 16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '9px' }}>
                  <span style={{ fontSize: '11.5px', fontWeight: 700, color: '#1B1730' }}>{signedCount} of {totalCount} signed</span>
                  <span
                    data-esignature-progress-badge=""
                    style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', padding: '3px 9px', borderRadius: '999px', fontSize: '9.5px', fontWeight: 700, ...progressBadgeStyle }}
                  >
                    {done ? 'Complete' : 'In progress'}
                  </span>
                </div>
                <div style={{ height: '8px', borderRadius: '999px', background: '#F1EFF7', overflow: 'hidden' }}>
                  <div style={{ height: '100%', borderRadius: '999px', background: 'linear-gradient(90deg,#14B8A6,#0E9384)', transition: 'width .6s cubic-bezier(.16,1,.3,1)', width: `${progressPct}%` }} />
                </div>
              </div>
            </div>
          </div>
          {/* floating badge */}
          <div style={{ position: 'absolute', bottom: '36px', left: '-16px', display: 'flex', alignItems: 'center', gap: '9px', padding: '10px 14px', borderRadius: '14px', background: '#fff', border: '1px solid #EFEDF6', boxShadow: '0 18px 38px -18px rgba(37,22,84,.3)', animation: 'esignature-floaty 5.5s ease-in-out infinite' }}>
            <span style={{ width: '30px', height: '30px', borderRadius: '9px', background: '#ECFDF9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0E9384" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="m9 12 2 2 4-4" /></svg>
            </span>
            <div style={{ lineHeight: 1.2 }}>
              <div style={{ fontSize: '11px', fontWeight: 700, color: '#1B1730' }}>Audit trail</div>
              <div style={{ fontSize: '9px', color: '#8B85A0' }}>Every signature timestamped</div>
            </div>
          </div>
          <div style={{ marginTop: '26px', textAlign: 'center', fontSize: '11px', color: '#B4AEC6', fontWeight: 500 }}>Watch each recipient move from sent to signed &mdash; live</div>
        </div>
      </EsignatureRevealSection>
    </section>
  );
}
