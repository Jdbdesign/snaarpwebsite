'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { AcctRevealSection } from './AcctRevealSection';
import { HomeFinalCTA } from '@/components/HomeFinalCTA';
import { StackTrustBar, PlainStackWrapper } from '@/components/sections/StackTrustBar';

/* ───── Data ───── */
const STAFF = [
  { id: 'p1', name: 'A. Okafor', role: 'Design · monthly', initials: 'AO', tint: 'violet', amount: 3240 },
  { id: 'p2', name: 'M. Bergström', role: 'Engineering · monthly', initials: 'MB', tint: 'teal', amount: 4180 },
  { id: 'p3', name: 'R. Devi', role: 'Operations · monthly', initials: 'RD', tint: 'amber', amount: 2760 },
  { id: 'p4', name: 'T. Lawson', role: 'Support · monthly', initials: 'TL', tint: 'rose', amount: 2120 },
] as const;

const GROSS = STAFF.reduce((s, p) => s + p.amount, 0);

const FAQS = [
  { q: 'How is Accounting Software different from Books?', a: 'Books covers day-to-day invoicing and simple bookkeeping. Accounting Software adds payroll, tax preparation, and full financial statements for businesses that need more than the basics.' },
  { q: 'Does Accounting Software handle payroll taxes?', a: 'Yes — tax withholding is calculated automatically as part of running payroll.' },
  { q: 'Can my accountant access my accounts directly?', a: 'Yes — invite your accountant with view or edit permissions, no exporting required.' },
  { q: 'Is Accounting Software included in the £2 Starter plan?', a: 'No — this is the deeper accounting tier and is priced separately from Starter.' },
  { q: 'Does it support more than one business entity?', a: 'Yes — multi-entity support lets you manage more than one business from the same account.' },
];

const STACK_APPS = [
  { iconSrc: '/assets/icons/apps-document.png', name: 'Books' },
  { iconSrc: '/assets/icons/cube.jpg', name: 'Payments' },
  { iconSrc: '/assets/icons/search.jpg', name: 'Contacts' },
  { iconSrc: '/assets/icons/apps-sheet.jpg', name: 'Reports' },
];

const AVATAR_COLORS: Record<string, string> = {
  violet: 'background:#EDE9FE;color:#7C3AED',
  teal: 'background:#D5F5EF;color:#0E9384',
  amber: 'background:#FDE6C9;color:#B45309',
  rose: 'background:#FDE0E9;color:#C0344E',
};

function money(n: number) { return '£' + Math.round(n).toLocaleString('en-GB'); }

/* ───── Payroll Demo Hook ───── */
type Phase = 'idle' | 'running' | 'complete';

function usePayrollDemo() {
  const [phase, setPhase] = useState<Phase>('idle');
  const [paidCount, setPaidCount] = useState(0);
  const [total, setTotal] = useState(0);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);
  const raf = useRef<number | null>(null);
  const reducedMotion = useRef(false);

  useEffect(() => {
    reducedMotion.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reducedMotion.current) {
      setPhase('complete');
      setPaidCount(STAFF.length);
      setTotal(GROSS);
    } else {
      const t = setTimeout(() => runPayroll(), 2000);
      timers.current.push(t);
    }
    return () => {
      timers.current.forEach(clearTimeout);
      if (raf.current) cancelAnimationFrame(raf.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const tween = useCallback((from: number, to: number) => {
    if (raf.current) cancelAnimationFrame(raf.current);
    const start = performance.now();
    const dur = 420;
    const step = (now: number) => {
      const p = Math.min(1, (now - start) / dur);
      const e = 1 - Math.pow(1 - p, 3);
      setTotal(from + (to - from) * e);
      if (p < 1) raf.current = requestAnimationFrame(step);
      else raf.current = null;
    };
    raf.current = requestAnimationFrame(step);
  }, []);

  const runPayroll = useCallback(() => {
    if (reducedMotion.current) {
      setPhase('complete');
      setPaidCount(STAFF.length);
      setTotal(GROSS);
      return;
    }
    timers.current.forEach(clearTimeout);
    timers.current = [];
    setPhase('running');
    setPaidCount(0);
    setTotal(0);
    const stagger = 460;
    let running = 0;
    STAFF.forEach((p, i) => {
      const prevRunning = running;
      running += p.amount;
      const to = running;
      timers.current.push(setTimeout(() => {
        setPaidCount(i + 1);
        tween(prevRunning, to);
      }, stagger * (i + 1)));
    });
    const end = stagger * (STAFF.length + 1);
    timers.current.push(setTimeout(() => setPhase('complete'), end));
    timers.current.push(setTimeout(() => {
      setPhase('idle');
      setPaidCount(0);
      setTotal(0);
    }, end + 2600));
  }, [tween]);

  return { phase, paidCount, total, runPayroll };
}

/* ───── FAQ Accordion ───── */
function FAQSection() {
  const [openIdx, setOpenIdx] = useState(0);
  return (
    <section style={{ background: '#F7F7F7', padding: '92px 24px' }}>
      <div style={{ maxWidth: '820px', margin: '0 auto' }}>
        <AcctRevealSection reveal style={{ textAlign: 'center', marginBottom: '44px' }}>
          <span style={{ fontSize: '11.5px', fontWeight: 600, letterSpacing: '.14em', color: '#7C3AED', textTransform: 'uppercase' }}>Questions</span>
          <h2 className="acct-section-heading" style={{ margin: '12px 0 0' }}>Accounting, answered.</h2>
        </AcctRevealSection>
        <AcctRevealSection reveal style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {FAQS.map((f, i) => {
            const open = openIdx === i;
            return (
              <div key={i} style={{ background: '#fff', border: `1px solid ${open ? '#E4DBF7' : '#EDEBF2'}`, borderRadius: '16px', overflow: 'hidden', boxShadow: open ? '0 16px 34px -24px rgba(124,58,237,.3)' : 'none', transition: 'border-color .2s,box-shadow .2s' }}>
                <button onClick={() => setOpenIdx(open ? -1 : i)} style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px', padding: '20px 24px', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', fontFamily: 'inherit' }}>
                  <span style={{ fontSize: '16.5px', fontWeight: 600, color: '#1B1730' }}>{f.q}</span>
                  <span style={{ flexShrink: 0, width: '28px', height: '28px', borderRadius: '8px', background: open ? '#7C3AED' : '#F5F3FF', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'background .2s' }}>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke={open ? '#fff' : '#7C3AED'} strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" style={{ transform: `rotate(${open ? 45 : 0}deg)`, transition: 'transform .25s' }}><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg>
                  </span>
                </button>
                {open && <div style={{ padding: '0 24px 22px', fontSize: '15px', lineHeight: 1.6, color: '#5B5670', maxWidth: '680px' }}>{f.a}</div>}
              </div>
            );
          })}
        </AcctRevealSection>
      </div>
    </section>
  );
}

/* ───── Main Page Component ───── */
export function AcctSoftwarePage() {
  const { phase, paidCount, total, runPayroll } = usePayrollDemo();
  const running = phase === 'running';
  const complete = phase === 'complete';
  const pct = Math.round((paidCount / STAFF.length) * 100);

  const taxItems = [
    { label: 'Transactions reconciled', sub: 'Bank feeds · to 31 Jul', done: true },
    { label: 'Expenses categorised', sub: '184 of 184', done: true },
    { label: 'Payroll taxes withheld', sub: complete ? 'Q3 · filed just now' : 'Q3 · pending payroll run', done: complete },
    { label: 'Statements generated', sub: 'P&L · balance sheet', done: true },
  ];

  return (
    <div style={{ minWidth: 0, overflowX: 'hidden', background: '#fff', lineHeight: 1.5 }}>
      {/* ═══ HERO ═══ */}
      <section style={{ background: 'linear-gradient(180deg,#FAF9FF 0%,#fff 74%)', padding: '70px 24px 112px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-140px', right: '-80px', width: '600px', height: '600px', background: 'radial-gradient(circle,rgba(124,58,237,.12),transparent 66%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: '-180px', left: '-120px', width: '460px', height: '460px', background: 'radial-gradient(circle,rgba(20,184,166,.08),transparent 68%)', pointerEvents: 'none' }} />
        <div className="max-w-7xl mx-auto px-6 lg:px-10" style={{ display: 'grid', gridTemplateColumns: 'minmax(0,.82fr) minmax(0,1.22fr)', gap: '48px', alignItems: 'center', position: 'relative' }}>
          <AcctRevealSection reveal>
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '9px' }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '7px 14px', borderRadius: '999px', background: '#F5F3FF', color: '#7C3AED', fontWeight: 600, fontSize: '12px', letterSpacing: '.09em', textTransform: 'uppercase', border: '1px solid #EDE9FE', whiteSpace: 'nowrap', flexShrink: 0 }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#7C3AED' }} />Finance · Accounting Software
              </span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '7px 13px', borderRadius: '999px', background: '#1B1730', color: '#fff', fontWeight: 600, fontSize: '11px', letterSpacing: '.06em', textTransform: 'uppercase', whiteSpace: 'nowrap', flexShrink: 0 }}>Beyond Starter</span>
            </div>
            <h1 className="acct-hero-heading" style={{ margin: '22px 0 0', color: '#1B1730' }}>Full accounting.<br /><span style={{ color: '#7C3AED' }}>Built for growing teams.</span></h1>
            <p style={{ fontSize: '17.5px', lineHeight: 1.62, color: '#5B5670', margin: '22px 0 0', maxWidth: '500px' }}>Tax, payroll, and financial statements — the accounting your business needs once it outgrows simple invoicing. Everything reconciles automatically, and everything's ready when your accountant asks for it.</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '13px', marginTop: '32px' }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '9px', padding: '15px 28px', borderRadius: '999px', background: '#7C3AED', color: '#fff', fontWeight: 600, fontSize: '15.5px', cursor: 'pointer', whiteSpace: 'nowrap', boxShadow: '0 12px 26px -8px rgba(124,58,237,.6)' }}>See Plans &amp; Pricing
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
              </span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '9px', padding: '15px 26px', borderRadius: '999px', background: '#fff', color: '#2A2440', fontWeight: 600, fontSize: '15.5px', cursor: 'pointer', border: '1.5px solid #E4DFF2', whiteSpace: 'nowrap' }}>
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><polygon points="10 8.5 16 12 10 15.5" fill="#7C3AED" stroke="none" /></svg>
                See how it works
              </span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '9px', marginTop: '26px', fontSize: '13.5px', color: '#8B85A0', fontWeight: 500 }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#14B8A6" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
              GDPR compliant · Accountant access included
            </div>
          </AcctRevealSection>

          {/* HERO VISUAL */}
          <AcctRevealSection reveal revealDelay={140} style={{ position: 'relative', minWidth: 0 }}>
            <div style={{ position: 'absolute', inset: '26px -14px -22px 16px', background: 'linear-gradient(135deg,rgba(124,58,237,.15),rgba(20,184,166,.11))', borderRadius: '28px', filter: 'blur(3px)', pointerEvents: 'none' }} />
            <div style={{ position: 'relative', background: '#fff', borderRadius: '20px', border: '1px solid #ECE9F5', boxShadow: '0 2px 4px -2px rgba(37,22,84,.14),0 46px 88px -38px rgba(37,22,84,.5)', overflow: 'hidden' }}>
              {/* app top bar */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '11px', padding: '12px 16px', borderBottom: '1px solid #F0EEF6', background: '#FBFAFE' }}>
                <span style={{ width: '24px', height: '24px', borderRadius: '8px', background: 'linear-gradient(135deg,#7C3AED,#9F67F5)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><path d="M9 17v-3M12 17v-5M15 17v-2" /></svg></span>
                <span style={{ fontSize: '13px', fontWeight: 700, color: '#1B1730', whiteSpace: 'nowrap' }}>Accounting</span>
                <span style={{ width: '1px', height: '15px', background: '#E9E6F2' }} />
                <span style={{ fontSize: '11.5px', fontWeight: 600, color: '#8B85A0', whiteSpace: 'nowrap' }}>FY 2026 · Q3</span>
                <span style={{ flex: 1 }} />
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '5px 11px', borderRadius: '999px', background: '#fff', whiteSpace: 'nowrap', flexShrink: 0, transition: 'border-color .3s', border: `1px solid ${running ? '#CDF5EE' : '#ECE9F5'}`, animation: running ? 'acct-syncPulse 1.1s ease-out infinite' : 'none' }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', flexShrink: 0, transition: 'background .3s', background: running ? '#0E9384' : '#C7C2D6' }} />
                  <span style={{ fontSize: '10.5px', fontWeight: 700, whiteSpace: 'nowrap', transition: 'color .3s', color: running ? '#0E9384' : '#8B85A0' }}>{running ? 'Posting…' : 'Synced'}</span>
                </span>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', padding: '6px 11px', borderRadius: '999px', background: '#F5F3FF', border: '1px solid #E6DEFA', color: '#7C3AED', fontSize: '10.5px', fontWeight: 700, whiteSpace: 'nowrap', flexShrink: 0 }}>2 entities</span>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '54px minmax(0,1fr)' }}>
                {/* nav rail */}
                <div style={{ borderRight: '1px solid #F2F1F6', background: '#FCFBFE', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '7px', padding: '14px 0 16px' }}>
                  <span style={{ width: '32px', height: '32px', borderRadius: '10px', background: '#F0EAFE', border: '1px solid #E1D6FB', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18" /><path d="M7 15l4-5 3 3 5-7" /></svg></span>
                  <span style={{ width: '32px', height: '32px', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#B4AEC6" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /></svg></span>
                  <span style={{ width: '32px', height: '32px', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#B4AEC6" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /></svg></span>
                  <span style={{ width: '32px', height: '32px', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#B4AEC6" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="17" rx="3" /><path d="M8 2v4M16 2v4M3 10h18" /></svg></span>
                  <span style={{ width: '32px', height: '32px', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#B4AEC6" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h18M5 21V9l7-5 7 5v12" /><path d="M9 21v-6h6v6" /></svg></span>
                  <span style={{ flex: 1 }} />
                  <span style={{ width: '28px', height: '28px', borderRadius: '50%', background: '#EDE9FE', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10.5px', fontWeight: 700, color: '#7C3AED' }}>JR</span>
                </div>

                {/* content area */}
                <div style={{ padding: '15px 17px 17px', minWidth: 0 }}>
                  {/* P&L strip */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) 118px', gap: '12px', alignItems: 'stretch' }}>
                    <div style={{ padding: '13px 15px', borderRadius: '14px', background: 'linear-gradient(140deg,#FBFAFE,#F4F1FE)', border: '1px solid #EEEAFB', minWidth: 0 }}>
                      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '10px' }}>
                        <div>
                          <div style={{ fontSize: '9px', fontWeight: 700, letterSpacing: '.12em', color: '#B4AEC6', whiteSpace: 'nowrap' }}>PROFIT &amp; LOSS · LAST 6 MONTHS</div>
                          <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', marginTop: '3px' }}>
                            <span style={{ fontSize: '19px', fontWeight: 700, letterSpacing: '-.02em', color: '#1B1730', fontVariantNumeric: 'tabular-nums', whiteSpace: 'nowrap' }}>+£48,120</span>
                            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '3px', fontSize: '10px', fontWeight: 700, color: '#0E9384', whiteSpace: 'nowrap' }}><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#0E9384" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19V5M5 12l7-7 7 7" /></svg>11%</span>
                          </div>
                        </div>
                        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', fontSize: '9.5px', fontWeight: 700, color: '#8B85A0', whiteSpace: 'nowrap', flexShrink: 0 }}><span style={{ width: '7px', height: '7px', borderRadius: '2px', background: '#7C3AED' }} />Income<span style={{ width: '7px', height: '7px', borderRadius: '2px', background: '#CDF5EE', marginLeft: '4px' }} />Costs</span>
                      </div>
                      <div style={{ marginTop: '11px', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: '6px', height: '58px' }}>
                        {[[30,16],[38,19],[33,22],[46,20],[42,24],[58,26]].map(([h1,h2], i) => (
                          <span key={i} style={{ display: 'flex', alignItems: 'flex-end', gap: '2px', flex: 1 }}>
                            <span style={{ flex: 1, height: `${h1}px`, borderRadius: '3px 3px 1px 1px', background: i >= 3 ? (i === 5 ? '#7C3AED' : '#C4B5FD') : '#DDD5F5' }} />
                            <span style={{ flex: 1, height: `${h2}px`, borderRadius: '3px 3px 1px 1px', background: i >= 3 ? (i === 5 ? '#B8EBE0' : '#CDF5EE') : '#E4F6F1' }} />
                          </span>
                        ))}
                      </div>
                    </div>
                    <div style={{ position: 'relative', overflow: 'hidden', padding: '13px 14px', borderRadius: '14px', background: '#1B1730', border: '1px solid #1B1730', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                      <div style={{ position: 'absolute', top: '-32px', right: '-26px', width: '100px', height: '100px', background: 'radial-gradient(circle,rgba(124,58,237,.5),transparent 68%)' }} />
                      <div style={{ position: 'relative', fontSize: '9px', fontWeight: 700, letterSpacing: '.12em', color: '#8E88A3', whiteSpace: 'nowrap' }}>CASH ON HAND</div>
                      <div style={{ position: 'relative', fontSize: '19px', fontWeight: 700, letterSpacing: '-.02em', color: '#fff', fontVariantNumeric: 'tabular-nums', marginTop: '3px', whiteSpace: 'nowrap' }}>£126,400</div>
                      <div style={{ position: 'relative', fontSize: '9.5px', color: '#B7B1C9', marginTop: '2px', whiteSpace: 'nowrap' }}>Across 2 entities</div>
                    </div>
                  </div>

                  <div style={{ marginTop: '13px', display: 'grid', gridTemplateColumns: 'minmax(0,1.5fr) minmax(0,1fr)', gap: '13px', alignItems: 'start' }}>
                    {/* PAYROLL RUN CARD */}
                    <div style={{ minWidth: 0, borderRadius: '14px', border: '1px solid #EFEDF6', background: '#fff', boxShadow: '0 12px 26px -20px rgba(37,22,84,.45)', padding: '12px 13px 13px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span style={{ width: '26px', height: '26px', borderRadius: '9px', background: '#F5F3FF', border: '1px solid #E6DEFA', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M19 8v6M22 11h-6" /></svg></span>
                        <div style={{ minWidth: 0, flex: 1 }}>
                          <div style={{ fontSize: '11.5px', fontWeight: 700, color: '#1B1730', whiteSpace: 'nowrap' }}>Payroll run · July</div>
                          <div style={{ fontSize: '9.5px', color: '#8B85A0', whiteSpace: 'nowrap' }}>{complete ? '4 people · paid 28 Jul' : running ? '4 people · processing' : '4 people · pay date 28 Jul'}</div>
                        </div>
                        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', padding: '4px 10px', borderRadius: '999px', fontSize: '9.5px', fontWeight: 700, whiteSpace: 'nowrap', flexShrink: 0, transition: 'background .3s,border-color .3s,color .3s', background: complete ? '#ECFDF9' : running ? '#F5F3FF' : '#FEF9EF', border: `1px solid ${complete ? '#CDF5EE' : running ? '#E6DEFA' : '#FBEBC6'}`, color: complete ? '#0E9384' : running ? '#7C3AED' : '#B45309' }}>{complete ? 'Complete' : running ? 'Running' : 'Ready'}</span>
                      </div>
                      {/* employee rows */}
                      <div style={{ marginTop: '10px', display: 'flex', flexDirection: 'column', gap: '5px' }}>
                        {STAFF.map((emp, i) => {
                          const paid = i < paidCount;
                          return (
                            <div key={emp.id} style={{ display: 'grid', gridTemplateColumns: '28px minmax(0,1fr) auto 74px', gap: '8px', alignItems: 'center', height: '40px', padding: '0 8px', borderRadius: '10px', transition: 'background .3s,border-color .3s', border: `1px solid ${paid ? '#DFF3EE' : '#F4F3F8'}`, background: paid ? '#F7FDFB' : '#FDFDFE', animation: paid ? 'acct-rowSettle .3s cubic-bezier(.16,1,.3,1) both' : 'none' }}>
                              <span style={{ width: '28px', height: '28px', borderRadius: '9px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10.5px', fontWeight: 700, flexShrink: 0, ...(Object.fromEntries(AVATAR_COLORS[emp.tint].split(';').map(s => { const [k, v] = s.split(':'); return [k.trim(), v?.trim()]; }))) as any }}>{emp.initials}</span>
                              <div style={{ minWidth: 0 }}>
                                <div style={{ fontSize: '11.5px', fontWeight: 600, color: '#1B1730', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{emp.name}</div>
                                <div style={{ fontSize: '9.5px', color: '#8B85A0', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{emp.role}</div>
                              </div>
                              <span style={{ fontSize: '11.5px', fontWeight: 700, color: '#1B1730', fontVariantNumeric: 'tabular-nums', whiteSpace: 'nowrap' }}>{money(emp.amount)}</span>
                              <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '4px', width: '74px', height: '22px', borderRadius: '999px', fontSize: '10px', fontWeight: 700, whiteSpace: 'nowrap', transition: 'background .3s,border-color .3s,color .3s', border: `1.5px solid ${paid ? '#CDF5EE' : '#FBEBC6'}`, background: paid ? '#ECFDF9' : '#FEF9EF', color: paid ? '#0E9384' : '#B45309' }}>
                                {paid ? <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#0E9384" strokeWidth="3.6" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, animation: 'acct-checkPop .34s cubic-bezier(.16,1,.3,1) both' }}><path d="M20 6 9 17l-5-5" /></svg> : <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#D97706', flexShrink: 0 }} />}
                                {paid ? 'Paid' : 'Pending'}
                              </span>
                            </div>
                          );
                        })}
                      </div>

                      {/* running total + progress */}
                      <div style={{ marginTop: '11px', paddingTop: '10px', borderTop: '1px solid #F2F1F6' }}>
                        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: '10px' }}>
                          <div>
                            <div style={{ fontSize: '9px', fontWeight: 700, letterSpacing: '.12em', color: '#B4AEC6', whiteSpace: 'nowrap' }}>PAID SO FAR</div>
                            <div style={{ fontSize: '18px', fontWeight: 700, letterSpacing: '-.02em', color: '#1B1730', fontVariantNumeric: 'tabular-nums', lineHeight: 1.25, whiteSpace: 'nowrap' }}>{money(total)}</div>
                          </div>
                          <div style={{ textAlign: 'right' }}>
                            <div style={{ fontSize: '9px', fontWeight: 700, letterSpacing: '.12em', color: '#B4AEC6', whiteSpace: 'nowrap' }}>GROSS</div>
                            <div style={{ fontSize: '11.5px', fontWeight: 700, color: '#8B85A0', fontVariantNumeric: 'tabular-nums', whiteSpace: 'nowrap' }}>{money(GROSS)}</div>
                          </div>
                        </div>
                        <div style={{ marginTop: '8px', height: '5px', borderRadius: '999px', background: '#F2F1F6', overflow: 'hidden' }}>
                          <div style={{ height: '100%', borderRadius: '999px', background: 'linear-gradient(90deg,#7C3AED,#9F67F5)', transition: 'width .42s cubic-bezier(.16,1,.3,1)', width: `${pct}%` }} />
                        </div>
                      </div>
                      {/* run button */}
                      <button onClick={runPayroll} disabled={running} style={{ marginTop: '11px', width: '100%', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '7px', borderRadius: '999px', fontFamily: 'inherit', fontSize: '12.5px', fontWeight: 700, cursor: running ? 'default' : 'pointer', transition: 'background .3s,color .3s,border-color .3s,box-shadow .3s', border: `1.5px solid ${complete ? '#CDF5EE' : running ? '#E6DEFA' : '#7C3AED'}`, background: complete ? '#ECFDF9' : running ? '#F5F3FF' : '#7C3AED', color: complete ? '#0E9384' : running ? '#7C3AED' : '#fff', boxShadow: complete || running ? 'none' : '0 10px 22px -10px rgba(124,58,237,.75)' }}>
                        {!running && !complete && <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}><polygon points="7 4 19 12 7 20" fill="currentColor" stroke="none" /></svg>}
                        {running && <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, animation: 'acct-spinSlow .9s linear infinite' }}><path d="M21 12a9 9 0 1 1-3.2-6.9" /></svg>}
                        {complete && <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}><path d="M20 6 9 17l-5-5" /></svg>}
                        {complete ? 'Payroll complete ✓' : running ? 'Paying the team…' : 'Run Payroll'}
                      </button>
                      <div style={{ height: '26px', marginTop: '7px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <span style={{ fontSize: '9.5px', fontWeight: 600, whiteSpace: 'nowrap', transition: 'color .3s', color: complete ? '#0E9384' : '#B4AEC6', animation: complete ? 'acct-bannerIn .34s cubic-bezier(.16,1,.3,1) both' : 'none' }}>
                          {complete ? 'Withholding filed · books updated' : running ? `${money(total)} of ${money(GROSS)} paid` : 'Withholding calculated automatically'}
                        </span>
                      </div>
                    </div>

                    {/* TAX READINESS + STATEMENTS */}
                    <div style={{ minWidth: 0, display: 'flex', flexDirection: 'column', gap: '11px' }}>
                      <div style={{ borderRadius: '14px', border: '1px solid #EFEDF6', background: '#fff', boxShadow: '0 12px 26px -20px rgba(37,22,84,.45)', padding: '12px 13px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px' }}>
                          <span style={{ fontSize: '11.5px', fontWeight: 700, color: '#1B1730', whiteSpace: 'nowrap' }}>Tax readiness</span>
                          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', padding: '4px 10px', borderRadius: '999px', fontSize: '9.5px', fontWeight: 700, whiteSpace: 'nowrap', flexShrink: 0, background: complete ? '#ECFDF9' : '#FEF9EF', border: `1px solid ${complete ? '#CDF5EE' : '#FBEBC6'}`, color: complete ? '#0E9384' : '#B45309' }}>{complete ? '4 of 4' : '3 of 4'}</span>
                        </div>
                        <div style={{ marginTop: '9px', display: 'flex', flexDirection: 'column', gap: '7px' }}>
                          {taxItems.map((t, i) => (
                            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                              <span style={{ width: '16px', height: '16px', borderRadius: '5px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, transition: 'background .3s,border-color .3s', background: t.done ? '#0E9384' : '#fff', border: `1.5px solid ${t.done ? '#0E9384' : '#E4DFF2'}` }}>
                                {t.done && <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>}
                              </span>
                              <div style={{ minWidth: 0, flex: 1 }}>
                                <div style={{ fontSize: '10.5px', fontWeight: 600, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', transition: 'color .3s', color: t.done ? '#4A4560' : '#B4AEC6' }}>{t.label}</div>
                                <div style={{ fontSize: '9px', color: '#B4AEC6', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{t.sub}</div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div style={{ borderRadius: '14px', border: '1px solid #EFEDF6', background: '#FBFAFE', padding: '12px 13px' }}>
                        <div style={{ fontSize: '9px', fontWeight: 700, letterSpacing: '.12em', color: '#B4AEC6', whiteSpace: 'nowrap' }}>STATEMENTS</div>
                        <div style={{ marginTop: '8px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                          {[['#7C3AED', 'Profit & loss'], ['#0E9384', 'Balance sheet'], ['#B45309', 'Cash flow']].map(([c, l]) => (
                            <span key={l} style={{ display: 'flex', alignItems: 'center', gap: '7px', fontSize: '10.5px', fontWeight: 600, color: '#4A4560', whiteSpace: 'nowrap' }}><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /></svg>{l}</span>
                          ))}
                        </div>
                        <div style={{ marginTop: '10px', paddingTop: '9px', borderTop: '1px solid #F0EEF6', display: 'flex', alignItems: 'center', gap: '7px' }}>
                          <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '20px', height: '20px', borderRadius: '50%', background: '#EDE9FE', fontSize: '8.5px', fontWeight: 700, color: '#7C3AED', flexShrink: 0 }}>DA</span>
                          <span style={{ fontSize: '9.5px', fontWeight: 600, color: '#8B85A0', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>Accountant · edit access</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div style={{ marginTop: '18px', textAlign: 'center', fontSize: '11px', color: '#B4AEC6', fontWeight: 500 }}>Hit Run Payroll — the team gets paid, withholding is calculated, the books keep up</div>
          </AcctRevealSection>
        </div>
      </section>

      {/* ═══ TRUST BAR ═══ */}
      <StackTrustBar Wrapper={PlainStackWrapper} apps={STACK_APPS} />

      {/* ═══ STATS ROW ═══ */}
      <section style={{ background: '#F7F7F7', padding: '80px 24px' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '20px' }}>
          <AcctRevealSection reveal style={{ background: '#fff', borderRadius: '20px', padding: '30px 28px', border: '1px solid #EEEDF3', boxShadow: '0 14px 34px -22px rgba(37,22,84,.22)', display: 'flex', flexDirection: 'column' }}>
            <div style={{ width: '46px', height: '46px', borderRadius: '13px', background: '#ECFDF9', border: '1px solid #CDF5EE', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="#0E9384" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12a9 9 0 1 1-3.2-6.9" /><path d="M21 4v5h-5" /><path d="m9 12 2 2 4-4" /></svg>
            </div>
            <div style={{ fontSize: '26px', fontWeight: 700, letterSpacing: '-.02em', color: '#1B1730', marginTop: '18px', lineHeight: 1.12 }}>Auto-<br />reconciled</div>
            <p style={{ margin: '9px 0 0', fontSize: '14px', lineHeight: 1.55, color: '#5B5670' }}>Transactions matched automatically, not manually.</p>
          </AcctRevealSection>
          <AcctRevealSection reveal revealDelay={90} style={{ background: 'linear-gradient(150deg,#7C3AED,#6D28D9)', borderRadius: '20px', padding: '30px 28px', border: '1px solid #6D28D9', boxShadow: '0 20px 44px -22px rgba(124,58,237,.6)', position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
            <div style={{ position: 'absolute', bottom: '-54px', right: '-34px', width: '170px', height: '170px', background: 'radial-gradient(circle,rgba(255,255,255,.18),transparent 68%)' }} />
            <div style={{ position: 'relative', display: 'flex', alignItems: 'flex-end', gap: '5px', height: '46px' }}>
              {[20, 30, 24, 42].map((h, i) => <span key={i} style={{ width: '11px', height: `${h}px`, borderRadius: '3px', background: i === 3 ? '#fff' : `rgba(255,255,255,${[.35,.55,.4][i]})` }} />)}
            </div>
            <div style={{ position: 'relative', fontSize: '26px', fontWeight: 700, letterSpacing: '-.02em', color: '#fff', marginTop: '18px', lineHeight: 1.12 }}>Tax-ready</div>
            <p style={{ position: 'relative', margin: '9px 0 0', fontSize: '14px', lineHeight: 1.55, color: 'rgba(255,255,255,.84)' }}>Financial statements formatted for filing season.</p>
          </AcctRevealSection>
          <AcctRevealSection reveal revealDelay={180} style={{ background: '#1B1730', borderRadius: '20px', padding: '30px 28px', border: '1px solid #1B1730', boxShadow: '0 20px 44px -24px rgba(27,23,48,.6)', position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div style={{ position: 'absolute', top: '-40px', left: '-30px', width: '170px', height: '170px', background: 'radial-gradient(circle,rgba(124,58,237,.45),transparent 68%)' }} />
            <div style={{ position: 'relative', fontSize: '56px', fontWeight: 700, letterSpacing: '-.03em', color: '#fff', lineHeight: 1 }}>0<span style={{ fontSize: '26px', fontWeight: 600, marginLeft: '4px' }}>min</span></div>
            <p style={{ position: 'relative', margin: '10px 0 0', fontSize: '14px', lineHeight: 1.55, color: '#B7B1C9' }}>Setup time — no install required.</p>
          </AcctRevealSection>
          <AcctRevealSection reveal revealDelay={270} style={{ background: '#fff', borderRadius: '20px', padding: '30px 28px', border: '1px solid #EEEDF3', boxShadow: '0 14px 34px -22px rgba(37,22,84,.22)', display: 'flex', flexDirection: 'column' }}>
            <div style={{ position: 'relative', width: '60px', height: '48px' }}>
              <div style={{ position: 'absolute', left: 0, top: '2px', width: '36px', height: '28px', borderRadius: '7px', background: '#FEF6E7', border: '1px solid #FBEBC6', transform: 'rotate(-9deg)' }} />
              <div style={{ position: 'absolute', left: '16px', top: 0, width: '36px', height: '28px', borderRadius: '7px', background: '#ECFDF9', border: '1px solid #CDF5EE', transform: 'rotate(8deg)' }} />
              <div style={{ position: 'absolute', left: '9px', top: '8px', width: '38px', height: '30px', borderRadius: '7px', background: '#fff', border: '1px solid #E4DFF2', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 8px 16px -10px rgba(37,22,84,.3)' }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h18M5 21V9l7-5 7 5v12" /><path d="M9 21v-6h6v6" /></svg></div>
            </div>
            <div style={{ fontSize: '44px', fontWeight: 700, letterSpacing: '-.02em', color: '#1B1730', marginTop: '14px', lineHeight: 1 }}>1<span style={{ fontSize: '20px', fontWeight: 600, marginLeft: '6px' }}>place</span></div>
            <p style={{ margin: '8px 0 0', fontSize: '14px', lineHeight: 1.55, color: '#5B5670' }}>Accounting beside Books and the rest of the Stack.</p>
          </AcctRevealSection>
        </div>
      </section>

      {/* ═══ 3 STEPS ═══ */}
      <section style={{ background: '#fff', padding: '92px 24px' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <AcctRevealSection reveal style={{ textAlign: 'center', maxWidth: '620px', margin: '0 auto 52px' }}>
            <h2 className="acct-section-heading" style={{ margin: 0 }}>Get started in 3 easy steps</h2>
          </AcctRevealSection>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '24px' }}>
            {[
              { n: '1', title: 'Connect your accounts', desc: 'Bank feeds and Books data sync in automatically.' },
              { n: '2', title: 'Run payroll', desc: 'Pay your team, taxes calculated and filed for you.' },
              { n: '3', title: 'Close the books', desc: 'Generate financial statements in one click.' },
            ].map((step, i) => (
              <AcctRevealSection key={step.n} reveal revealDelay={i * 100} style={{ background: '#FBFAFE', borderRadius: '20px', padding: '32px 30px', border: '1px solid #F0EEF7' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '36px', height: '36px', borderRadius: '10px', background: '#7C3AED', color: '#fff', fontWeight: 700, fontSize: '15px', boxShadow: '0 8px 16px -6px rgba(124,58,237,.5)' }}>{step.n}</div>
                <div style={{ marginTop: '22px', height: '120px', borderRadius: '14px', background: '#fff', border: '1px solid #EFEDF6', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '7px', overflow: 'hidden', padding: '0 22px' }}>
                  {i === 0 && <>
                    {[0,1].map(j => <div key={j} style={{ width: '100%', display: 'flex', alignItems: 'center', gap: '9px', padding: '7px 10px', borderRadius: '9px', background: '#FBFAFE', border: '1px solid #EFEDF6' }}><span style={{ width: '16px', height: '16px', borderRadius: '5px', background: j === 0 ? '#EDE9FE' : '#CDF5EE', flexShrink: 0 }} /><span style={{ height: '5px', flex: 1, borderRadius: '3px', background: '#EFEDF6' }} /><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#0E9384" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}><path d="M20 6 9 17l-5-5" /></svg></div>)}
                    <div style={{ width: '100%', display: 'flex', alignItems: 'center', gap: '9px', padding: '7px 10px', borderRadius: '9px', background: '#fff', border: '1px dashed #E4DFF2' }}><span style={{ width: '16px', height: '16px', borderRadius: '5px', background: '#F2F1F6', flexShrink: 0 }} /><span style={{ height: '5px', width: '46px', borderRadius: '3px', background: '#F2F1F6' }} /><span style={{ flex: 1 }} /><span style={{ fontSize: '8px', fontWeight: 700, color: '#B4AEC6' }}>Syncing</span></div>
                  </>}
                  {i === 1 && <div style={{ width: '170px', borderRadius: '11px', border: '1px solid #EFEDF6', background: '#fff', boxShadow: '0 10px 20px -14px rgba(37,22,84,.4)', padding: '10px 11px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}><span style={{ fontSize: '7.5px', fontWeight: 700, letterSpacing: '.12em', color: '#B4AEC6' }}>PAYROLL</span><span style={{ fontSize: '7.5px', fontWeight: 700, color: '#0E9384' }}>4 paid</span></div>
                    <div style={{ marginTop: '8px', display: 'flex', flexDirection: 'column', gap: '5px' }}>
                      {['#EDE9FE','#CDF5EE','#FDE6C9'].map(bg => <div key={bg} style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><span style={{ width: '12px', height: '12px', borderRadius: '4px', background: bg, flexShrink: 0 }} /><span style={{ height: '5px', flex: 1, borderRadius: '3px', background: '#EFEDF6' }} /><span style={{ height: '5px', width: '20px', borderRadius: '3px', background: '#B8EBE0' }} /></div>)}
                    </div>
                    <div style={{ marginTop: '9px', paddingTop: '7px', borderTop: '1px solid #F2F1F6', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}><span style={{ fontSize: '7.5px', fontWeight: 700, color: '#8B85A0' }}>TOTAL</span><span style={{ fontSize: '10px', fontWeight: 700, color: '#1B1730' }}>£12,300</span></div>
                  </div>}
                  {i === 2 && <div style={{ position: 'relative', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <div style={{ position: 'absolute', left: '34px', top: '22px', width: '76px', height: '76px', borderRadius: '9px', background: '#FBFAFE', border: '1px solid #EFEDF6', transform: 'rotate(-7deg)' }} />
                    <div style={{ position: 'relative', width: '82px', height: '82px', borderRadius: '9px', background: '#fff', border: '1px solid #E4DFF2', boxShadow: '0 12px 22px -14px rgba(37,22,84,.45)', padding: '9px 10px', transform: 'rotate(4deg)' }}>
                      <span style={{ display: 'block', height: '5px', width: '40px', borderRadius: '3px', background: '#DDD5F5' }} />
                      <span style={{ display: 'block', marginTop: '7px', height: '4px', width: '100%', borderRadius: '3px', background: '#F2F1F6' }} />
                      <span style={{ display: 'block', marginTop: '5px', height: '4px', width: '80%', borderRadius: '3px', background: '#F2F1F6' }} />
                      <span style={{ display: 'block', marginTop: '5px', height: '4px', width: '90%', borderRadius: '3px', background: '#F2F1F6' }} />
                      <span style={{ display: 'flex', alignItems: 'center', gap: '4px', marginTop: '9px' }}><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#0E9384" strokeWidth="3.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg><span style={{ fontSize: '7.5px', fontWeight: 700, color: '#0E9384' }}>Closed</span></span>
                    </div>
                  </div>}
                </div>
                <h3 style={{ fontSize: '19px', fontWeight: 600, margin: '22px 0 0', color: '#1B1730' }}>{step.title}</h3>
                <p style={{ margin: '8px 0 0', fontSize: '14.5px', lineHeight: 1.55, color: '#5B5670' }}>{step.desc}</p>
              </AcctRevealSection>
            ))}
          </div>
          <AcctRevealSection reveal style={{ textAlign: 'center', marginTop: '40px' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '15px 28px', borderRadius: '999px', background: '#7C3AED', color: '#fff', fontWeight: 600, fontSize: '15.5px', cursor: 'pointer', whiteSpace: 'nowrap', boxShadow: '0 12px 26px -8px rgba(124,58,237,.55)' }}>See Plans &amp; Pricing
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
            </span>
          </AcctRevealSection>
        </div>
      </section>

      {/* ═══ BENTO FEATURE GRID ═══ */}
      <section style={{ background: '#F7F7F7', padding: '92px 24px' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <AcctRevealSection reveal style={{ textAlign: 'center', maxWidth: '660px', margin: '0 auto 52px' }}>
            <span style={{ fontSize: '11.5px', fontWeight: 600, letterSpacing: '.14em', color: '#7C3AED', textTransform: 'uppercase' }}>The whole accounting side</span>
            <h2 className="acct-section-heading" style={{ margin: '14px 0 0' }}>Payroll, tax, and the statements to prove it.</h2>
          </AcctRevealSection>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6,1fr)', gap: '20px' }}>
            {/* BIG: Payroll */}
            <AcctRevealSection reveal style={{ gridColumn: 'span 4', gridRow: 'span 2', background: '#fff', borderRadius: '22px', padding: '36px', border: '1px solid #EEEDF3', boxShadow: '0 20px 44px -28px rgba(37,22,84,.26)', display: 'flex', flexDirection: 'column' }}>
              <span style={{ display: 'inline-flex', alignSelf: 'flex-start', alignItems: 'center', gap: '7px', padding: '5px 12px', borderRadius: '999px', background: '#F5F3FF', color: '#7C3AED', fontSize: '11.5px', fontWeight: 600, border: '1px solid #E6DEFA', whiteSpace: 'nowrap' }}>Payroll</span>
              <h3 style={{ fontSize: '25px', fontWeight: 700, letterSpacing: '-.02em', margin: '18px 0 0', color: '#1B1730' }}>Pay the team, withholding handled</h3>
              <p style={{ margin: '11px 0 0', fontSize: '15.5px', lineHeight: 1.6, color: '#5B5670', maxWidth: '440px' }}>Pay your team, with tax withholding calculated automatically. No separate payroll provider, no spreadsheet of gross-to-net maths.</p>
              <div style={{ marginTop: '26px', flex: 1, minHeight: '200px', background: 'linear-gradient(160deg,#FBFAFE,#F4F1FE)', borderRadius: '16px', border: '1px solid #EEEAFB', padding: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ width: '100%', maxWidth: '400px', background: '#fff', borderRadius: '13px', border: '1px solid #ECE9F5', boxShadow: '0 20px 38px -24px rgba(37,22,84,.45)', padding: '16px 17px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '10px' }}>
                    <span style={{ fontSize: '11.5px', fontWeight: 700, color: '#1B1730', whiteSpace: 'nowrap' }}>Gross to net · 4 people</span>
                    <span style={{ fontSize: '10px', fontWeight: 700, color: '#0E9384', whiteSpace: 'nowrap' }}>Calculated</span>
                  </div>
                  <div style={{ marginTop: '13px', display: 'flex', flexDirection: 'column', gap: '9px' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 62px 62px', gap: '10px', alignItems: 'center' }}><span style={{ fontSize: '9px', fontWeight: 700, letterSpacing: '.1em', color: '#B4AEC6' }}>LINE</span><span style={{ fontSize: '9px', fontWeight: 700, letterSpacing: '.1em', color: '#B4AEC6', textAlign: 'right' }}>AMOUNT</span><span style={{ fontSize: '9px', fontWeight: 700, letterSpacing: '.1em', color: '#B4AEC6', textAlign: 'right' }}>RATE</span></div>
                    {[['Gross pay','£12,300','—'],['Income tax','−£2,214','18%'],['National Ins.','−£984','8%']].map(([l,a,r]) => (
                      <div key={l} style={{ display: 'grid', gridTemplateColumns: '1fr 62px 62px', gap: '10px', alignItems: 'center' }}><span style={{ fontSize: '12px', fontWeight: 600, color: '#1B1730' }}>{l}</span><span style={{ fontSize: '12px', fontWeight: 700, color: l === 'Gross pay' ? '#1B1730' : '#C0344E', textAlign: 'right', fontVariantNumeric: 'tabular-nums' }}>{a}</span><span style={{ fontSize: '11px', color: '#8B85A0', textAlign: 'right' }}>{r}</span></div>
                    ))}
                  </div>
                  <div style={{ marginTop: '13px', padding: '11px 13px', borderRadius: '11px', background: '#F1FCF9', border: '1px solid #CDF5EE', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '10px' }}>
                    <span style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '.1em', color: '#6FA69C', whiteSpace: 'nowrap' }}>NET TO PAY</span>
                    <span style={{ fontSize: '15px', fontWeight: 700, color: '#0E9384', fontVariantNumeric: 'tabular-nums', whiteSpace: 'nowrap' }}>£9,102</span>
                  </div>
                </div>
              </div>
            </AcctRevealSection>

            {/* Tax preparation */}
            <AcctRevealSection reveal revealDelay={100} style={{ gridColumn: 'span 2', background: '#1B1730', borderRadius: '22px', padding: '30px 28px', border: '1px solid #1B1730', boxShadow: '0 22px 46px -26px rgba(27,23,48,.6)', position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
              <div style={{ position: 'absolute', top: '-46px', right: '-30px', width: '170px', height: '170px', background: 'radial-gradient(circle,rgba(124,58,237,.45),transparent 68%)' }} />
              <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: '7px' }}>
                {[76, 58, 68].map((w, i) => (
                  <span key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><span style={{ width: '16px', height: '16px', borderRadius: '5px', background: 'rgba(124,58,237,.35)', border: '1px solid rgba(196,181,253,.45)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#C4B5FD" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg></span><span style={{ height: '5px', width: `${w}px`, borderRadius: '3px', background: 'rgba(255,255,255,.28)' }} /></span>
                ))}
              </div>
              <h3 style={{ position: 'relative', fontSize: '20px', fontWeight: 700, letterSpacing: '-.01em', margin: '22px 0 0', color: '#fff' }}>Tax preparation</h3>
              <p style={{ position: 'relative', margin: '9px 0 0', fontSize: '14px', lineHeight: 1.55, color: '#B7B1C9' }}>Organized, filing-ready records year-round — not a scramble in April.</p>
            </AcctRevealSection>

            {/* Financial statements */}
            <AcctRevealSection reveal revealDelay={180} style={{ gridColumn: 'span 2', background: '#fff', borderRadius: '22px', padding: '30px 28px', border: '1px solid #EEEDF3', boxShadow: '0 20px 44px -28px rgba(37,22,84,.26)', display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', alignItems: 'flex-end', gap: '6px', height: '46px' }}>
                {[['22px','#EDE9FE'],['34px','#DDD5F5'],['28px','#CDF5EE'],['46px','#7C3AED']].map(([h,bg], i) => <span key={i} style={{ width: '13px', height: h, borderRadius: '4px 4px 2px 2px', background: bg }} />)}
                <span style={{ marginLeft: '6px', display: 'inline-flex', alignItems: 'center', padding: '3px 8px', borderRadius: '999px', background: '#F1FCF9', border: '1px solid #CDF5EE', fontSize: '9.5px', fontWeight: 700, color: '#0E9384', whiteSpace: 'nowrap' }}>P&amp;L · BS · CF</span>
              </div>
              <h3 style={{ fontSize: '20px', fontWeight: 700, letterSpacing: '-.01em', margin: '22px 0 0', color: '#1B1730' }}>Financial statements</h3>
              <p style={{ margin: '9px 0 0', fontSize: '14px', lineHeight: 1.55, color: '#5B5670' }}>P&amp;L, balance sheet, cash flow — generated instantly.</p>
            </AcctRevealSection>

            {/* Bank reconciliation */}
            <AcctRevealSection reveal revealDelay={120} style={{ gridColumn: 'span 2', background: '#fff', borderRadius: '22px', padding: '28px', border: '1px solid #EEEDF3', boxShadow: '0 20px 44px -28px rgba(37,22,84,.26)' }}>
              <div style={{ height: '70px', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  {['#7C3AED','#0E9384','#7C3AED'].map((c, i) => <span key={i} style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><span style={{ width: '6px', height: '6px', borderRadius: '2px', background: c }} /><span style={{ height: '5px', flex: 1, borderRadius: '3px', background: c === '#0E9384' ? '#EFEDF6' : '#E4DFF2' }} /></span>)}
                </div>
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, animation: 'acct-spinSlow 9s linear infinite' }}><path d="M21 12a9 9 0 1 1-3.2-6.9" /><path d="M21 4v5h-5" /></svg>
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  {[0,1,2].map(i => <span key={i} style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><span style={{ height: '5px', flex: 1, borderRadius: '3px', background: i === 1 ? '#EFEDF6' : '#E4DFF2' }} /><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#0E9384" strokeWidth="3.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg></span>)}
                </div>
              </div>
              <h3 style={{ fontSize: '18px', fontWeight: 700, letterSpacing: '-.01em', margin: 0, color: '#1B1730' }}>Bank reconciliation</h3>
              <p style={{ margin: '8px 0 0', fontSize: '14px', lineHeight: 1.55, color: '#5B5670' }}>Transactions matched automatically against your accounts.</p>
            </AcctRevealSection>

            {/* Multi-entity */}
            <AcctRevealSection reveal revealDelay={200} style={{ gridColumn: 'span 2', background: '#fff', borderRadius: '22px', padding: '28px', border: '1px solid #EEEDF3', boxShadow: '0 20px 44px -28px rgba(37,22,84,.26)' }}>
              <div style={{ height: '70px', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '9px' }}>
                <span style={{ width: '44px', height: '44px', borderRadius: '13px', background: '#F5F3FF', border: '1px solid #E6DEFA', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h18M5 21V9l7-5 7 5v12" /><path d="M9 21v-6h6v6" /></svg></span>
                <span style={{ width: '38px', height: '38px', borderRadius: '12px', background: '#ECFDF9', border: '1px solid #CDF5EE', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#0E9384" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h18M5 21V9l7-5 7 5v12" /></svg></span>
                <span style={{ width: '32px', height: '32px', borderRadius: '11px', background: '#FEF6E7', border: '1px solid #FBEBC6', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: '13px', fontWeight: 700, color: '#B45309' }}>+</span>
              </div>
              <h3 style={{ fontSize: '18px', fontWeight: 700, letterSpacing: '-.01em', margin: 0, color: '#1B1730' }}>Multi-entity support</h3>
              <p style={{ margin: '8px 0 0', fontSize: '14px', lineHeight: 1.55, color: '#5B5670' }}>Manage more than one business or legal entity.</p>
            </AcctRevealSection>

            {/* Accountant access */}
            <AcctRevealSection reveal revealDelay={280} style={{ gridColumn: 'span 2', background: '#fff', borderRadius: '22px', padding: '28px', border: '1px solid #EEEDF3', boxShadow: '0 20px 44px -28px rgba(37,22,84,.26)' }}>
              <div style={{ height: '70px', marginBottom: '16px', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '7px' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><span style={{ width: '26px', height: '26px', borderRadius: '50%', background: '#EDE9FE', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '9.5px', fontWeight: 700, color: '#7C3AED', flexShrink: 0 }}>DA</span><span style={{ height: '5px', width: '60px', borderRadius: '3px', background: '#EFEDF6' }} /><span style={{ marginLeft: 'auto', display: 'inline-flex', padding: '3px 8px', borderRadius: '999px', background: '#F5F3FF', border: '1px solid #E6DEFA', fontSize: '8.5px', fontWeight: 700, color: '#7C3AED', whiteSpace: 'nowrap' }}>Edit</span></span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><span style={{ width: '26px', height: '26px', borderRadius: '50%', background: '#D5F5EF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '9.5px', fontWeight: 700, color: '#0E9384', flexShrink: 0 }}>MK</span><span style={{ height: '5px', width: '44px', borderRadius: '3px', background: '#EFEDF6' }} /><span style={{ marginLeft: 'auto', display: 'inline-flex', padding: '3px 8px', borderRadius: '999px', background: '#ECFDF9', border: '1px solid #CDF5EE', fontSize: '8.5px', fontWeight: 700, color: '#0E9384', whiteSpace: 'nowrap' }}>View</span></span>
              </div>
              <h3 style={{ fontSize: '18px', fontWeight: 700, letterSpacing: '-.01em', margin: 0, color: '#1B1730' }}>Accountant access</h3>
              <p style={{ margin: '8px 0 0', fontSize: '14px', lineHeight: 1.55, color: '#5B5670' }}>Invite your accountant with view or edit permissions.</p>
            </AcctRevealSection>
          </div>
          <AcctRevealSection reveal style={{ textAlign: 'center', marginTop: '40px' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '14px 26px', borderRadius: '999px', background: '#fff', color: '#2A2440', fontWeight: 600, fontSize: '15px', cursor: 'pointer', border: '1.5px solid #E4DFF2', whiteSpace: 'nowrap' }}>See How It Works
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
            </span>
          </AcctRevealSection>
        </div>
      </section>

      {/* ═══ ALT ROW 1: Payroll without the spreadsheet ═══ */}
      <section style={{ background: '#fff', padding: '92px 24px' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10" style={{ display: 'grid', gridTemplateColumns: '1.05fr 1fr', gap: '64px', alignItems: 'center' }}>
          <AcctRevealSection reveal style={{ position: 'relative' }}>
            <div style={{ position: 'absolute', inset: '18px -8px -16px 14px', background: 'linear-gradient(135deg,rgba(124,58,237,.10),rgba(20,184,166,.10))', borderRadius: '24px', filter: 'blur(2px)' }} />
            <div style={{ position: 'relative', background: '#fff', borderRadius: '20px', border: '1px solid #ECE9F5', boxShadow: '0 2px 4px -2px rgba(37,22,84,.12),0 30px 60px -30px rgba(37,22,84,.4)', overflow: 'hidden' }}>
              <div style={{ padding: '16px 22px', borderBottom: '1px solid #F0EEF6', display: 'flex', alignItems: 'center', gap: '11px', background: '#FBFAFE' }}>
                <span style={{ width: '32px', height: '32px', borderRadius: '9px', background: '#F5F3FF', border: '1px solid #E6DEFA', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M19 8v6M22 11h-6" /></svg></span>
                <div style={{ flex: 1, minWidth: 0 }}><div style={{ fontSize: '13.5px', fontWeight: 700, color: '#1B1730' }}>Payroll run · July</div><div style={{ fontSize: '11px', color: '#8B85A0' }}>4 people · pay date 28 Jul</div></div>
                <span style={{ fontSize: '10.5px', fontWeight: 700, color: '#B45309', whiteSpace: 'nowrap', flexShrink: 0 }}>Ready</span>
              </div>
              <div style={{ padding: '10px 14px 18px' }}>
                {[
                  { initials: 'AO', name: 'A. Okafor', role: 'Design · monthly', amount: '£3,240', bg: '#EDE9FE', fg: '#7C3AED' },
                  { initials: 'MB', name: 'M. Bergström', role: 'Engineering · monthly', amount: '£4,180', bg: '#D5F5EF', fg: '#0E9384' },
                  { initials: 'RD', name: 'R. Devi', role: 'Operations · monthly', amount: '£2,760', bg: '#FDE6C9', fg: '#B45309' },
                  { initials: 'TL', name: 'T. Lawson', role: 'Support · monthly', amount: '£2,120', bg: '#FDE0E9', fg: '#C0344E' },
                ].map((emp, i, arr) => (
                  <div key={emp.initials} style={{ display: 'grid', gridTemplateColumns: '1fr auto 96px', gap: '14px', alignItems: 'center', padding: '14px 10px', borderBottom: i < arr.length - 1 ? '1px solid #F7F6FA' : 'none' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', minWidth: 0 }}><span style={{ width: '34px', height: '34px', borderRadius: '11px', background: emp.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: 700, color: emp.fg, flexShrink: 0 }}>{emp.initials}</span><div style={{ minWidth: 0 }}><div style={{ fontSize: '14px', fontWeight: 600, color: '#1B1730' }}>{emp.name}</div><div style={{ fontSize: '11.5px', color: '#8B85A0' }}>{emp.role}</div></div></div>
                    <span style={{ fontSize: '14px', fontWeight: 700, color: '#1B1730', fontVariantNumeric: 'tabular-nums' }}>{emp.amount}</span>
                    <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '6px', padding: '5px 0', borderRadius: '999px', background: '#FEF9EF', border: '1px solid #FBEBC6', fontSize: '10.5px', fontWeight: 700, color: '#B45309' }}><span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#D97706' }} />Pending</span>
                  </div>
                ))}
                <div style={{ margin: '10px 10px 0', padding: '14px 16px', borderRadius: '14px', background: 'linear-gradient(140deg,#F7F5FF,#F1FCF9)', border: '1px solid #EDE9FE', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '14px' }}>
                  <div><div style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '.1em', color: '#8B85A0' }}>GROSS · TAX WITHHELD</div><div style={{ fontSize: '18px', fontWeight: 700, letterSpacing: '-.02em', color: '#1B1730', fontVariantNumeric: 'tabular-nums', lineHeight: 1.3 }}>£12,300 · £3,198</div></div>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '7px', padding: '10px 18px', borderRadius: '999px', background: '#7C3AED', color: '#fff', fontSize: '12px', fontWeight: 700, whiteSpace: 'nowrap', flexShrink: 0, boxShadow: '0 10px 22px -10px rgba(124,58,237,.7)' }}><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><polygon points="7 4 19 12 7 20" fill="#fff" stroke="none" /></svg>Run Payroll</span>
                </div>
              </div>
            </div>
          </AcctRevealSection>
          <AcctRevealSection reveal revealDelay={120}>
            <h2 className="acct-row-heading" style={{ margin: 0 }}>Payroll without the spreadsheet.</h2>
            <p style={{ margin: '18px 0 0', fontSize: '16px', lineHeight: 1.62, color: '#5B5670' }}>One screen, one button, and the maths that used to eat an afternoon is already done — including what has to go to the tax office.</p>
            <div style={{ marginTop: '30px', display: 'flex', flexDirection: 'column', gap: '22px' }}>
              {[
                { icon: '#7C3AED', bg: '#F5F3FF', title: 'Run payroll in a few clicks, taxes calculated automatically.', desc: 'Gross to net, withholding included, before you\u2019ve finished your coffee.', iconPath: <polygon points="7 4 19 12 7 20" fill="#7C3AED" stroke="none" /> },
                { icon: '#0E9384', bg: '#ECFDF9', title: 'Employees get paid and see their own pay history.', desc: 'No more forwarding payslips one at a time.', iconPath: <><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /></> },
                { icon: '#B45309', bg: '#FEF6E7', title: 'Filings handled without a separate payroll provider.', desc: 'One fewer subscription, one fewer login, one fewer export.', iconPath: <><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><path d="m9 15 2 2 4-4" /></> },
              ].map(b => (
                <div key={b.title} style={{ display: 'flex', gap: '15px' }}>
                  <div style={{ flexShrink: 0, width: '38px', height: '38px', borderRadius: '11px', background: b.bg, display: 'flex', alignItems: 'center', justifyContent: 'center' }}><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke={b.icon} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">{b.iconPath}</svg></div>
                  <div><div style={{ fontWeight: 600, fontSize: '16.5px', color: '#1B1730' }}>{b.title}</div><p style={{ margin: '5px 0 0', fontSize: '14.5px', lineHeight: 1.55, color: '#5B5670' }}>{b.desc}</p></div>
                </div>
              ))}
            </div>
          </AcctRevealSection>
        </div>
      </section>

      {/* ═══ ALT ROW 2: Ready for tax season ═══ */}
      <section style={{ background: '#F7F7F7', padding: '92px 24px' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10" style={{ display: 'grid', gridTemplateColumns: '1fr 1.05fr', gap: '64px', alignItems: 'center' }}>
          <AcctRevealSection reveal>
            <h2 className="acct-row-heading" style={{ margin: 0 }}>Ready for tax season, all year.</h2>
            <p style={{ margin: '18px 0 0', fontSize: '16px', lineHeight: 1.62, color: '#5B5670' }}>Statements that are already correct, records that are already sorted, and an accountant who can just log in and look.</p>
            <div style={{ marginTop: '30px', display: 'flex', flexDirection: 'column', gap: '22px' }}>
              {[
                { icon: '#7C3AED', bg: '#F5F3FF', title: 'Financial statements generate instantly, always up to date.', desc: 'P&L, balance sheet and cash flow off the same live data.', iconPath: <><path d="M3 3v18h18" /><path d="M7 15l4-5 3 3 5-7" /></> },
                { icon: '#0E9384', bg: '#ECFDF9', title: 'Records stay organized and filing-ready.', desc: 'Not scrambled together in April from four different folders.', iconPath: <><rect x="3" y="4" width="18" height="17" rx="3" /><path d="M8 2v4M16 2v4M3 10h18" /><path d="m9 15 2 2 4-4" /></> },
                { icon: '#E11D74', bg: '#FFEFF2', title: 'Give your accountant direct access.', desc: 'Instead of exporting spreadsheets back and forth.', iconPath: <><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M19 8v6M22 11h-6" /></> },
              ].map(b => (
                <div key={b.title} style={{ display: 'flex', gap: '15px' }}>
                  <div style={{ flexShrink: 0, width: '38px', height: '38px', borderRadius: '11px', background: b.bg, display: 'flex', alignItems: 'center', justifyContent: 'center' }}><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke={b.icon} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">{b.iconPath}</svg></div>
                  <div><div style={{ fontWeight: 600, fontSize: '16.5px', color: '#1B1730' }}>{b.title}</div><p style={{ margin: '5px 0 0', fontSize: '14.5px', lineHeight: 1.55, color: '#5B5670' }}>{b.desc}</p></div>
                </div>
              ))}
            </div>
          </AcctRevealSection>
          <AcctRevealSection reveal revealDelay={120} style={{ position: 'relative' }}>
            <div style={{ position: 'absolute', inset: '18px 14px -16px -8px', background: 'linear-gradient(135deg,rgba(124,58,237,.12),rgba(20,184,166,.12))', borderRadius: '24px', filter: 'blur(2px)' }} />
            <div style={{ position: 'relative', background: '#fff', borderRadius: '20px', border: '1px solid #ECE9F5', boxShadow: '0 2px 4px -2px rgba(37,22,84,.12),0 30px 60px -30px rgba(37,22,84,.4)', overflow: 'hidden' }}>
              <div style={{ padding: '16px 22px', borderBottom: '1px solid #F0EEF6', display: 'flex', alignItems: 'center', gap: '11px', background: '#FBFAFE' }}>
                <span style={{ width: '32px', height: '32px', borderRadius: '9px', background: '#ECFDF9', border: '1px solid #CDF5EE', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0E9384" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><path d="M9 17v-3M12 17v-5M15 17v-2" /></svg></span>
                <div style={{ flex: 1, minWidth: 0 }}><div style={{ fontSize: '13.5px', fontWeight: 700, color: '#1B1730' }}>Profit &amp; loss · FY 2026</div><div style={{ fontSize: '11px', color: '#8B85A0' }}>Generated just now</div></div>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', fontSize: '10.5px', fontWeight: 700, color: '#0E9384', whiteSpace: 'nowrap', flexShrink: 0 }}><span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#0E9384' }} />Live</span>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1.25fr) minmax(0,1fr)' }}>
                <div style={{ padding: '14px 18px 20px', borderRight: '1px solid #F2F1F6', minWidth: 0 }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '14px', padding: '8px 0 9px', borderBottom: '1px solid #F2F1F6' }}>
                    <span style={{ fontSize: '9.5px', fontWeight: 700, letterSpacing: '.12em', color: '#B4AEC6' }}>LINE</span>
                    <span style={{ fontSize: '9.5px', fontWeight: 700, letterSpacing: '.12em', color: '#B4AEC6' }}>YTD</span>
                  </div>
                  {[['Revenue','£214,600',false],['Cost of sales','−£78,400',true],['Payroll','−£73,800',true],['Operating costs','−£14,280',true]].map(([label, val, neg]) => (
                    <div key={label as string} style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '14px', alignItems: 'center', padding: '11px 0', borderBottom: '1px solid #F7F6FA' }}>
                      <span style={{ fontSize: '13.5px', fontWeight: 600, color: '#1B1730' }}>{label}</span>
                      <span style={{ fontSize: '13.5px', fontWeight: 700, color: neg ? '#C0344E' : '#1B1730', fontVariantNumeric: 'tabular-nums' }}>{val}</span>
                    </div>
                  ))}
                  <div style={{ marginTop: '6px', padding: '14px 16px', borderRadius: '14px', background: 'linear-gradient(140deg,#F7F5FF,#F1FCF9)', border: '1px solid #EDE9FE', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px' }}>
                    <div><div style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '.1em', color: '#8B85A0' }}>NET PROFIT</div><div style={{ fontSize: '22px', fontWeight: 700, letterSpacing: '-.02em', color: '#1B1730', fontVariantNumeric: 'tabular-nums', lineHeight: 1.25 }}>£48,120</div></div>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '6px 12px', borderRadius: '999px', background: '#fff', border: '1px solid #CDF5EE', fontSize: '11px', fontWeight: 700, color: '#0E9384', whiteSpace: 'nowrap', flexShrink: 0 }}><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#0E9384" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19V5M5 12l7-7 7 7" /></svg>11% YoY</span>
                  </div>
                </div>
                <div style={{ padding: '14px 16px 20px', background: '#FCFBFE', minWidth: 0 }}>
                  <div style={{ fontSize: '9.5px', fontWeight: 700, letterSpacing: '.12em', color: '#B4AEC6', whiteSpace: 'nowrap' }}>TAX READINESS</div>
                  <div style={{ marginTop: '11px', display: 'flex', flexDirection: 'column', gap: '11px' }}>
                    {['Transactions reconciled','Payroll taxes withheld','Expenses categorised'].map(l => (
                      <span key={l} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}><span style={{ width: '17px', height: '17px', borderRadius: '6px', background: '#0E9384', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '1px' }}><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg></span><span style={{ fontSize: '11.5px', fontWeight: 600, color: '#4A4560', lineHeight: 1.4 }}>{l}</span></span>
                    ))}
                    <span style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}><span style={{ width: '17px', height: '17px', borderRadius: '6px', background: '#fff', border: '1.5px solid #E4DFF2', flexShrink: 0, marginTop: '1px' }} /><span style={{ fontSize: '11.5px', fontWeight: 600, color: '#B4AEC6', lineHeight: 1.4 }}>Year-end review with accountant</span></span>
                  </div>
                  <div style={{ marginTop: '16px', padding: '11px 12px', borderRadius: '12px', background: '#fff', border: '1px solid #EFEDF6' }}>
                    <div style={{ fontSize: '9px', fontWeight: 700, letterSpacing: '.1em', color: '#B4AEC6', whiteSpace: 'nowrap' }}>SHARED WITH</div>
                    <div style={{ marginTop: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span style={{ width: '24px', height: '24px', borderRadius: '50%', background: '#EDE9FE', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '9px', fontWeight: 700, color: '#7C3AED', flexShrink: 0 }}>DA</span>
                      <div style={{ minWidth: 0 }}><div style={{ fontSize: '11px', fontWeight: 600, color: '#1B1730', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>D. Ashworth</div><div style={{ fontSize: '9px', color: '#8B85A0', whiteSpace: 'nowrap' }}>Accountant · edit</div></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AcctRevealSection>
        </div>
      </section>

      {/* ═══ TESTIMONIALS ═══ */}
      <section style={{ background: '#fff', padding: '92px 24px' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <AcctRevealSection reveal style={{ textAlign: 'center', maxWidth: '620px', margin: '0 auto 48px' }}>
            <span style={{ fontSize: '11.5px', fontWeight: 600, letterSpacing: '.14em', color: '#7C3AED', textTransform: 'uppercase' }}>What teams say</span>
            <h2 className="acct-section-heading" style={{ margin: '12px 0 0' }}>One fewer provider, one less scramble.</h2>
          </AcctRevealSection>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '22px' }}>
            {[
              { quote: '"We stopped paying for a separate payroll provider once this covered it properly."', name: 'Placeholder', role: 'Operations lead', bg: '#EDE9FE', fg: '#7C3AED' },
              { quote: '"Handing our accountant direct access instead of a folder of exports saved everyone a week at tax time."', name: 'Placeholder', role: 'Finance manager', bg: '#D5F5EF', fg: '#0E9384' },
              { quote: '"Bank reconciliation used to be a Sunday chore. Now it\u2019s just already done."', name: 'Placeholder', role: 'Founder', bg: '#FDE6C9', fg: '#B45309' },
            ].map((t, i) => (
              <AcctRevealSection key={i} reveal revealDelay={i * 100} style={{ position: 'relative', background: '#FBFAFE', border: '1px solid #ECE7F7', borderRadius: '20px', padding: '30px 28px', boxShadow: '0 18px 40px -30px rgba(124,58,237,.28)' }}>
                <svg width="30" height="30" viewBox="0 0 24 24" fill="#E4DBF7"><path d="M9.5 4C6 4 3 7 3 11v9h8v-9H6.5c0-2 1.5-3.5 3-3.5V4Zm11 0c-3.5 0-6.5 3-6.5 7v9H22v-9h-4.5c0-2 1.5-3.5 3-3.5V4Z" /></svg>
                <p style={{ fontSize: '16px', lineHeight: 1.55, fontWeight: 500, color: '#211C36', margin: '16px 0 0' }}>{t.quote}</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginTop: '24px' }}>
                  <div style={{ width: '42px', height: '42px', borderRadius: '50%', background: t.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 600, color: t.fg, fontSize: '14px' }}>PL</div>
                  <div><div style={{ fontWeight: 600, fontSize: '14.5px', color: '#1B1730' }}>{t.name}</div><div style={{ fontSize: '13px', color: '#8B85A0' }}>{t.role}</div></div>
                </div>
              </AcctRevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <FAQSection />

      {/* ═══ FINAL CTA ═══ */}
      <HomeFinalCTA />
    </div>
  );
}
