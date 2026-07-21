'use client';

import { useEffect, useRef, useState } from 'react';
import { LockRevealSection } from './LockRevealSection';

export function LockAltGrantRevoke() {
  const [granted, setGranted] = useState(false);
  const mounted = useRef(false);

  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
      return;
    }
    if (!granted) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const a = document.querySelector<HTMLElement>('[data-grant-avatar]');
    if (!a) return;
    a.style.animation = 'none';
    void a.offsetWidth;
    a.style.animation = 'lock-grant-in .45s ease-out';
  }, [granted]);

  const rowBg = granted ? '#ECFDF9' : '#FBFAFE';
  const rowBorder = granted ? '#CDF5EE' : '#EFEDF6';

  return (
    <section style={{ background: '#F7F7F7', paddingTop: '92px', paddingBottom: '92px' }}>
      <LockRevealSection className="max-w-7xl mx-auto px-6 lg:px-10" style={{ display: 'grid', gridTemplateColumns: '1fr 1.05fr', gap: '64px', alignItems: 'center' }}>
        {/* text (left) */}
        <div data-lock-reveal="">
          <h2 className="lock-row-heading" style={{ margin: 0, color: '#1B1730' }}>Share access, not passwords.</h2>
          <p style={{ margin: '18px 0 0', fontSize: '16px', lineHeight: 1.62, color: '#5B5670' }}>Give a teammate what they need to log in &mdash; without them ever seeing the password. Pull it back the moment they&apos;re done.</p>
          <div style={{ marginTop: '30px', display: 'flex', flexDirection: 'column', gap: '22px' }}>
            <div style={{ display: 'flex', gap: '15px' }}>
              <div style={{ flexShrink: 0, width: '38px', height: '38px', borderRadius: '11px', background: '#F5F3FF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><line x1="19" y1="8" x2="19" y2="14" /><line x1="22" y1="11" x2="16" y2="11" /></svg>
              </div>
              <div>
                <div className="lock-row-item-title" style={{ color: '#1B1730' }}>Grant access, never the password.</div>
                <p className="lock-row-item-desc" style={{ margin: '5px 0 0', color: '#5B5670' }}>They can log in and use it &mdash; the raw password stays hidden.</p>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '15px' }}>
              <div style={{ flexShrink: 0, width: '38px', height: '38px', borderRadius: '11px', background: '#FFEFF2', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#E11D74" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18.36 6.64A9 9 0 1 1 5.64 6.64" /><line x1="12" y1="2" x2="12" y2="12" /></svg>
              </div>
              <div>
                <div className="lock-row-item-title" style={{ color: '#1B1730' }}>Revoke instantly.</div>
                <p className="lock-row-item-desc" style={{ margin: '5px 0 0', color: '#5B5670' }}>Someone leaves a project? Pull their access in one click.</p>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '15px' }}>
              <div style={{ flexShrink: 0, width: '38px', height: '38px', borderRadius: '11px', background: '#ECFDF9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#0E9384" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="9" y1="15" x2="15" y2="15" /></svg>
              </div>
              <div>
                <div className="lock-row-item-title" style={{ color: '#1B1730' }}>Full access log.</div>
                <p className="lock-row-item-desc" style={{ margin: '5px 0 0', color: '#5B5670' }}>See exactly who used what, and when &mdash; every time.</p>
              </div>
            </div>
          </div>
        </div>

        {/* interactive grant/revoke demo (right) */}
        <div data-lock-reveal="" data-lock-reveal-delay="120" style={{ position: 'relative' }}>
          <div style={{ position: 'absolute', inset: '18px 14px -16px -8px', background: 'linear-gradient(135deg,rgba(124,58,237,.12),rgba(20,184,166,.10))', borderRadius: '24px', filter: 'blur(2px)' }} />
          <div style={{ position: 'relative', background: '#fff', borderRadius: '20px', border: '1px solid #ECE9F5', boxShadow: '0 30px 60px -30px rgba(37,22,84,.3)', overflow: 'hidden' }}>
            {/* shared item header */}
            <div style={{ padding: '16px 20px', borderBottom: '1px solid #F0EEF6', display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span style={{ width: '40px', height: '40px', borderRadius: '11px', background: '#FDE6C9', color: '#B45309', fontSize: '13px', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>AW</span>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: '15px', fontWeight: 700, color: '#1B1730' }}>AWS Console</div>
                <div style={{ fontSize: '12px', color: '#8B85A0' }}>ops@acme.co</div>
              </div>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', padding: '5px 11px', borderRadius: '999px', background: '#F5F3FF', border: '1px solid #E6DEFA', fontSize: '10px', fontWeight: 700, color: '#7C3AED' }}>
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
                Hidden
              </span>
            </div>
            {/* password row : always masked */}
            <div style={{ margin: '16px 20px 0', display: 'flex', alignItems: 'center', gap: '10px', padding: '12px 14px', borderRadius: '12px', background: '#FBFAFE', border: '1px solid #F0EEF6' }}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#8B85A0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
              <span style={{ fontFamily: 'ui-monospace,monospace', fontSize: '14px', letterSpacing: '.14em', color: '#B4AEC6' }}>&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;</span>
              <span style={{ marginLeft: 'auto', fontSize: '10px', fontWeight: 600, color: '#B4AEC6' }}>Never shown to shared members</span>
            </div>
            {/* teammate + action */}
            <div style={{ padding: '16px 20px 20px' }}>
              <div style={{ fontSize: '10.5px', fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: '#B4AEC6', marginBottom: '11px' }}>Teammate</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '13px', padding: '14px 15px', borderRadius: '14px', background: rowBg, border: `1.5px solid ${rowBorder}`, transition: 'background .25s,border-color .25s' }}>
                <span
                  data-grant-avatar=""
                  style={{
                    position: 'relative',
                    flexShrink: 0,
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    fontSize: '13px',
                    fontWeight: 700,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: granted ? '#D5F5EF' : '#EDE9FE',
                    color: granted ? '#0E9384' : '#7C3AED',
                    transition: 'background .25s,color .25s',
                  }}
                >
                  TK
                  <span style={{ position: 'absolute', bottom: '-3px', right: '-3px', width: '17px', height: '17px', borderRadius: '50%', background: '#0E9384', border: '2px solid #fff', display: granted ? 'flex' : 'none', alignItems: 'center', justifyContent: 'center' }}>
                    <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
                  </span>
                </span>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: '14px', fontWeight: 600, color: '#1B1730' }}>Tomas K.</div>
                  <div style={{ fontSize: '12px', marginTop: '2px', fontWeight: 500, color: granted ? '#0E9384' : '#8B85A0' }}>
                    {granted ? 'Access granted · can use, can’t view' : 'No access yet'}
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setGranted((g) => !g)}
                  style={{
                    flexShrink: 0,
                    fontFamily: 'inherit',
                    fontSize: '12.5px',
                    fontWeight: 600,
                    padding: '9px 16px',
                    borderRadius: '999px',
                    cursor: 'pointer',
                    transition: 'all .2s',
                    ...(granted
                      ? { background: '#fff', color: '#E11D74', border: '1.5px solid #FBD5DD' }
                      : { background: '#7C3AED', color: '#fff', border: '1.5px solid #7C3AED', boxShadow: '0 8px 18px -8px rgba(124,58,237,.6)' }),
                  }}
                >
                  {granted ? 'Revoke' : 'Grant access'}
                </button>
              </div>
              {/* access log line */}
              <div style={{ display: granted ? 'flex' : 'none', alignItems: 'center', gap: '8px', marginTop: '13px', padding: '9px 12px', borderRadius: '10px', background: '#FBFAFE', border: '1px solid #F0EEF6', fontSize: '11.5px', color: '#8B85A0', animation: granted ? 'lock-grant-in .4s ease-out' : 'none' }}>
                <span style={{ width: '18px', height: '18px', borderRadius: '6px', background: '#ECFDF9', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#0E9384" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M12 8v4l3 2" /><circle cx="12" cy="12" r="9" /></svg>
                </span>
                <span>Tomas K. was granted access &middot; just now</span>
              </div>
            </div>
          </div>
        </div>
      </LockRevealSection>
    </section>
  );
}
