'use client';

import { useEffect, useRef, useState } from 'react';
import { Price } from '@/components/currency/Price';
import { LockRevealSection } from './LockRevealSection';

interface VaultEntry {
  id: string;
  name: string;
  user: string;
  pw: string;
  mono: string;
  c: string;
  tint: string;
  border: string;
}

// Mock vault entries — ALL fake placeholder passphrases, NO real credentials.
const ENTRIES: VaultEntry[] = [
  { id: 'figma', name: 'Figma', user: 'design@acme.co', pw: 'brave-otter-42', mono: 'Fi', c: '#7C3AED', tint: '#EDE9FE', border: '#E6DEFA' },
  { id: 'github', name: 'GitHub', user: 'dev@acme.co', pw: 'lime-harbor-9', mono: 'Gh', c: '#211C36', tint: '#ECEAF2', border: '#E1DEEC' },
  { id: 'aws', name: 'AWS Console', user: 'ops@acme.co', pw: 'north-cedar-3', mono: 'AW', c: '#B45309', tint: '#FDE6C9', border: '#FBEBC6' },
];
const DETAIL_ENTRY: VaultEntry = { id: 'stripe', name: 'Stripe', user: 'billing@acme.co', pw: 'quiet-meadow-7', mono: 'St', c: '#0E9384', tint: '#D5F5EF', border: '#CDF5EE' };

const MASK_CHAR = '•';
const AUTO_REMASK_MS = 2600;

function maskedChars(pw: string, revealed: boolean): string[] {
  return (revealed ? pw : pw.replace(/[^]/g, MASK_CHAR)).split('');
}

function playCharFlip(id: string) {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const spans = document.querySelectorAll<HTMLElement>(`[data-ch="${id}"]`);
  spans.forEach((el, i) => {
    el.style.animation = 'none';
    void el.offsetWidth;
    el.style.animation = `lock-char-flip .38s ease-out ${i * 26}ms both`;
  });
}

function pulseBadge() {
  const b = document.querySelector<HTMLElement>('[data-enc-badge]');
  if (!b) return;
  b.style.animation = 'none';
  void b.offsetWidth;
  b.style.animation = 'lock-badge-pulse 1.1s ease-out';
}

function LockEyeIcon({ style }: { style?: React.CSSProperties }) {
  return (
    <span style={style}>
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    </span>
  );
}

function LockEyeOffIcon({ style }: { style?: React.CSSProperties }) {
  return (
    <span style={style}>
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#8B85A0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c6.5 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68" />
        <path d="M6.61 6.61A13.53 13.53 0 0 0 2 12s3.5 7 10 7a9.74 9.74 0 0 0 5.39-1.61" />
        <line x1="2" y1="2" x2="22" y2="22" />
      </svg>
    </span>
  );
}

interface VaultRowProps {
  entry: VaultEntry;
  revealed: boolean;
  onToggle: (id: string) => void;
}

function VaultRow({ entry: e, revealed, onToggle }: VaultRowProps) {
  const chars = maskedChars(e.pw, revealed);
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '11px 13px', borderRadius: '13px', background: '#fff', border: '1px solid #EFEDF6', boxShadow: '0 6px 14px -12px rgba(37,22,84,.4)' }}>
      <span style={{ flexShrink: 0, width: '32px', height: '32px', borderRadius: '10px', fontSize: '12px', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', background: e.tint, color: e.c, border: `1px solid ${e.border}` }}>{e.mono}</span>
      <div style={{ minWidth: 0, flex: 1 }}>
        <div style={{ fontSize: '13px', fontWeight: 600, color: '#1B1730', lineHeight: 1.2 }}>{e.name}</div>
        <div style={{ fontSize: '11px', color: '#8B85A0', lineHeight: 1.3 }}>{e.user}</div>
      </div>
      <span style={{ fontFamily: "ui-monospace,'SF Mono',Menlo,monospace", fontSize: '13px', letterSpacing: '.05em', color: '#4A4560', display: 'inline-flex', alignItems: 'center', minWidth: '96px', justifyContent: 'flex-end' }}>
        {chars.map((glyph, i) => (
          <span key={i} data-ch={e.id} style={{ display: 'inline-block' }}>{glyph}</span>
        ))}
      </span>
      <button
        type="button"
        onClick={() => onToggle(e.id)}
        aria-label={revealed ? 'Hide password' : 'Reveal password'}
        style={{ flexShrink: 0, width: '30px', height: '30px', borderRadius: '9px', border: '1px solid #EDEBF2', background: revealed ? '#F5F3FF' : '#FBFAFE', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', padding: 0, transition: 'background .18s' }}
      >
        <LockEyeIcon style={{ display: revealed ? 'none' : 'inline-flex' }} />
        <LockEyeOffIcon style={{ display: revealed ? 'inline-flex' : 'none' }} />
      </button>
    </div>
  );
}

export function LockHero() {
  const [reveals, setReveals] = useState<Record<string, boolean>>({});
  const remaskTimers = useRef<Record<string, ReturnType<typeof setTimeout>>>({});

  useEffect(() => {
    const timers = remaskTimers.current;
    return () => {
      Object.values(timers).forEach((t) => clearTimeout(t));
    };
  }, []);

  function toggleReveal(id: string) {
    setReveals((prev) => {
      const next = !prev[id];
      queueMicrotask(() => playCharFlip(id));
      if (next) {
        pulseBadge();
        clearTimeout(remaskTimers.current[id]);
        remaskTimers.current[id] = setTimeout(() => {
          setReveals((s) => ({ ...s, [id]: false }));
          playCharFlip(id);
        }, AUTO_REMASK_MS);
      } else {
        clearTimeout(remaskTimers.current[id]);
      }
      return { ...prev, [id]: next };
    });
  }

  const detailRevealed = !!reveals[DETAIL_ENTRY.id];
  const detailChars = maskedChars(DETAIL_ENTRY.pw, detailRevealed);

  return (
    <section style={{ background: 'linear-gradient(180deg,#FBFAFF 0%,#fff 70%)', paddingTop: '74px', paddingBottom: '104px', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: '-120px', right: '-60px', width: '560px', height: '560px', background: 'radial-gradient(circle,rgba(124,58,237,.10),transparent 66%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: '-160px', left: '-100px', width: '420px', height: '420px', background: 'radial-gradient(circle,rgba(20,184,166,.09),transparent 68%)', pointerEvents: 'none' }} />
      <LockRevealSection className="max-w-7xl mx-auto px-6 lg:px-10" style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0,1.12fr)', gap: '56px', alignItems: 'center', position: 'relative' }}>
        <div data-lock-reveal="">
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '7px 14px', borderRadius: '999px', background: '#F5F3FF', color: '#7C3AED', fontWeight: 600, fontSize: '12px', letterSpacing: '.09em', textTransform: 'uppercase', border: '1px solid #EDE9FE', whiteSpace: 'nowrap' }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#7C3AED' }} />Security &middot; Lock
          </span>
          <h1 className="lock-hero-heading" style={{ margin: '22px 0 0', color: '#1B1730' }}>Every password.<br /><span style={{ color: '#7C3AED' }}>Locked down, shared safely.</span></h1>
          <p className="lock-lede" style={{ color: '#5B5670', margin: '22px 0 0', maxWidth: '512px' }}>One secure vault for your team&apos;s passwords, logins, and shared credentials &mdash; encrypted end-to-end, with no more spreadsheets or sticky notes floating around.</p>
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

        {/* HERO VISUAL : interactive reveal/hide vault */}
        <div data-lock-reveal="" data-lock-reveal-delay="140" style={{ position: 'relative' }}>
          <div style={{ position: 'relative', background: '#fff', borderRadius: '20px', border: '1px solid #ECE9F5', overflow: 'hidden', boxShadow: '0 34px 70px -34px rgba(37,22,84,.34)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '14px 18px', borderBottom: '1px solid #F0EEF6', background: '#FBFAFE' }}>
              <span style={{ width: '28px', height: '28px', borderRadius: '9px', background: 'linear-gradient(135deg,#7C3AED,#9F67F5)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 10px -3px rgba(124,58,237,.5)' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
              </span>
              <span style={{ fontSize: '14px', fontWeight: 700, color: '#1B1730', letterSpacing: '-.01em' }}>Team Vault</span>
              <span data-enc-badge="" style={{ marginLeft: 'auto', display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '5px 11px', borderRadius: '999px', background: '#F5F3FF', border: '1px solid #E6DEFA', fontSize: '10.5px', fontWeight: 700, color: '#7C3AED' }}>
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
                Encrypted
              </span>
            </div>

            <div style={{ padding: '14px 16px 16px', background: '#FBFAFE', display: 'flex', flexDirection: 'column', gap: '9px' }}>
              {ENTRIES.map((e) => (
                <VaultRow key={e.id} entry={e} revealed={!!reveals[e.id]} onToggle={toggleReveal} />
              ))}

              {/* expanded detail card */}
              <div style={{ marginTop: '3px', borderRadius: '15px', background: '#fff', border: '1.5px solid #E6DEFA', boxShadow: '0 16px 34px -22px rgba(124,58,237,.4)', overflow: 'hidden' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '14px 16px', borderBottom: '1px solid #F3F1F9', background: 'linear-gradient(180deg,#FBFAFF,#fff)' }}>
                  <span style={{ flexShrink: 0, width: '36px', height: '36px', borderRadius: '10px', fontSize: '12px', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', background: DETAIL_ENTRY.tint, color: DETAIL_ENTRY.c, border: `1px solid ${DETAIL_ENTRY.border}` }}>{DETAIL_ENTRY.mono}</span>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: '14px', fontWeight: 700, color: '#1B1730' }}>{DETAIL_ENTRY.name}</div>
                    <div style={{ fontSize: '11px', color: '#8B85A0' }}>Shared &middot; 3 members</div>
                  </div>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', padding: '4px 10px', borderRadius: '999px', background: '#ECFDF9', border: '1px solid #CDF5EE', fontSize: '9.5px', fontWeight: 700, color: '#0E9384' }}>
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#0E9384" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>Synced
                  </span>
                </div>
                <div style={{ padding: '15px 16px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <div>
                    <div style={{ fontSize: '9.5px', fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: '#B4AEC6', marginBottom: '5px' }}>Username</div>
                    <div style={{ fontSize: '13.5px', fontWeight: 500, color: '#211C36', fontFamily: "ui-monospace,'SF Mono',Menlo,monospace" }}>{DETAIL_ENTRY.user}</div>
                  </div>
                  <div>
                    <div style={{ fontSize: '9.5px', fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: '#B4AEC6', marginBottom: '5px' }}>Password</div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <span style={{ flex: 1, fontFamily: "ui-monospace,'SF Mono',Menlo,monospace", fontSize: '15px', letterSpacing: '.06em', color: '#211C36', minHeight: '20px' }}>
                        {detailChars.map((glyph, i) => (
                          <span key={i} data-ch={DETAIL_ENTRY.id} style={{ display: 'inline-block' }}>{glyph}</span>
                        ))}
                      </span>
                      <button
                        type="button"
                        onClick={() => toggleReveal(DETAIL_ENTRY.id)}
                        aria-label={detailRevealed ? 'Hide password' : 'Reveal password'}
                        style={{ flexShrink: 0, display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '7px 13px', borderRadius: '9px', border: '1px solid #E6DEFA', background: detailRevealed ? '#F5F3FF' : '#FBFAFE', color: '#7C3AED', fontFamily: 'inherit', fontSize: '12px', fontWeight: 600, cursor: 'pointer', transition: 'background .18s' }}
                      >
                        <LockEyeIcon style={{ display: detailRevealed ? 'none' : 'inline-flex', alignItems: 'center' }} />
                        <LockEyeOffIcon style={{ display: detailRevealed ? 'inline-flex' : 'none', alignItems: 'center' }} />
                        {detailRevealed ? 'Hide' : 'Reveal'}
                      </button>
                    </div>
                  </div>
                  <div>
                    <div style={{ fontSize: '9.5px', fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: '#B4AEC6', marginBottom: '5px' }}>Notes</div>
                    <div style={{ fontSize: '12.5px', lineHeight: 1.5, color: '#5B5670', background: '#FBFAFE', border: '1px solid #F0EEF6', borderRadius: '10px', padding: '9px 11px' }}>Billing account &mdash; rotate quarterly. 2FA on the ops phone.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* floating badge */}
          <div style={{ position: 'absolute', bottom: '-18px', left: '-18px', display: 'flex', alignItems: 'center', gap: '9px', padding: '10px 14px', borderRadius: '14px', background: '#fff', border: '1px solid #EFEDF6', boxShadow: '0 18px 38px -18px rgba(37,22,84,.3)', animation: 'lock-floaty 5.5s ease-in-out infinite' }}>
            <span style={{ width: '30px', height: '30px', borderRadius: '9px', background: '#ECFDF9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0E9384" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
            </span>
            <div style={{ lineHeight: 1.2 }}>
              <div style={{ fontSize: '11px', fontWeight: 700, color: '#1B1730' }}>Zero-knowledge</div>
              <div style={{ fontSize: '9px', color: '#8B85A0' }}>Only your team can read it</div>
            </div>
          </div>
          <div style={{ marginTop: '26px', textAlign: 'center', fontSize: '11px', color: '#B4AEC6', fontWeight: 500 }}>Tap the eye to reveal a password &mdash; it re-masks itself</div>
        </div>
      </LockRevealSection>
    </section>
  );
}
