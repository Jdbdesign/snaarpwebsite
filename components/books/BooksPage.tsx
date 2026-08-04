'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { useBooksReveal } from './useBooksReveal';
import { HomeFinalCTA } from '@/components/HomeFinalCTA';
import { StackTrustBar, PlainStackWrapper } from '@/components/sections/StackTrustBar';

const BOOKS_STACK_APPS = [
  { iconSrc: '/assets/icons/search.jpg', name: 'Snaarp Contacts' },
  { iconSrc: '/assets/icons/chat-bubbles.jpg', name: 'Snaarp Teams' },
  { iconSrc: '/assets/icons/envelope.jpg', name: 'Snaarp Mail' },
  { iconSrc: '/assets/icons/cube.jpg', name: 'Snaarp Work Drive' },
];

/* ─── Types ─── */
interface Invoice {
  id: string;
  client: string;
  initials: string;
  tint: string;
  amount: number;
  meta: string;
  status: string;
  paidLabel?: string;
  seq?: number;
}

interface AnimVals {
  paid: number;
  out: number;
  bal: number;
  pnl: number;
}

interface FeedEntry {
  title: string;
  sub: string;
  amount: string;
  income: boolean;
}

/* ─── Constants ─── */
const BASE_BALANCE = 5172;
const BASE_INCOME = 860;
const BASE_EXPENSE = 652;
const CURRENCY = '\u00a3';

const SEED: Invoice[] = [
  { id: 'INV-0142', client: 'Harbour & Co', initials: 'HC', tint: 'violet', amount: 2480, meta: 'Due 28 Jul', status: 'Pending' },
  { id: 'INV-0139', client: 'Larkspur Studio', initials: 'LS', tint: 'teal', amount: 1240, meta: 'Paid 12 Jul', status: 'Paid', paidLabel: '12 Jul', seq: 1 },
  { id: 'INV-0131', client: 'Wexford Ltd', initials: 'WF', tint: 'rose', amount: 1860, meta: '9 days late', status: 'Overdue' },
  { id: 'INV-0144', client: 'Meridian Co', initials: 'MC', tint: 'amber', amount: 1800, meta: 'Due 04 Aug', status: 'Pending' },
];

const FAQS = [
  { q: 'Do I need accounting knowledge to use Books?', a: 'No \u2014 invoicing and bookkeeping are handled in plain language, with no accounting background required.' },
  { q: 'Does bookkeeping update automatically when an invoice is paid?', a: 'Yes \u2014 income and expenses log automatically as money moves, no manual entry needed.' },
  { q: 'Can I set up invoices to send automatically on a schedule?', a: 'Yes \u2014 recurring invoices can be set up once and sent automatically to repeat clients.' },
  { q: 'Is Books included in the \u00a32 Starter plan?', a: 'Yes \u2014 included in every plan, no add-on required.' },
  { q: 'Can I bill clients in a currency other than my own?', a: 'Yes \u2014 multi-currency invoicing is supported.' },
];

/* ─── Helpers ─── */
function money(n: number) {
  return CURRENCY + Math.round(n).toLocaleString('en-GB');
}

function tone(status: string) {
  if (status === 'Paid') return { bg: '#ECFDF9', bd: '#CDF5EE', fg: '#0E9384', dot: '#0E9384' };
  if (status === 'Overdue') return { bg: '#FFF6F8', bd: '#FBD5DD', fg: '#C0344E', dot: '#E11D74' };
  return { bg: '#FEF9EF', bd: '#FBEBC6', fg: '#B45309', dot: '#D97706' };
}

function avatarStyle(tint: string) {
  const map: Record<string, string> = {
    violet: 'background:#EDE9FE;color:#7C3AED',
    teal: 'background:#D5F5EF;color:#0E9384',
    rose: 'background:#FDE0E9;color:#C0344E',
    amber: 'background:#FDE6C9;color:#B45309',
  };
  return map[tint] || map.violet;
}

function computeTargets(list: Invoice[]): AnimVals {
  const paid = list.filter((i) => i.status === 'Paid').reduce((s, i) => s + i.amount, 0);
  const out = list.filter((i) => i.status !== 'Paid').reduce((s, i) => s + i.amount, 0);
  return { paid, out, bal: BASE_BALANCE + paid, pnl: paid + BASE_INCOME - BASE_EXPENSE };
}

/* ─── Main Component ─── */
export function BooksPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  useBooksReveal(containerRef);

  const [invoices, setInvoices] = useState<Invoice[]>(() => SEED.map((i) => ({ ...i })));
  const [filter, setFilter] = useState<'All' | 'Open' | 'Paid'>('All');
  const [synced, setSynced] = useState(false);
  const [anim, setAnim] = useState<AnimVals>(() => computeTargets(SEED));
  const [openFaq, setOpenFaq] = useState<number>(-1);
  const seqRef = useRef(1);
  const rafRef = useRef<number | null>(null);
  const animRef = useRef<AnimVals>(anim);
  animRef.current = anim;

  const reduced = useRef(false);
  useEffect(() => {
    reduced.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    // auto-demo: pay INV-0142 after 1.8s
    if (!reduced.current) {
      const t = setTimeout(() => togglePaid('INV-0142'), 1800);
      return () => clearTimeout(t);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const animate = useCallback((to: AnimVals) => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    const from = { ...animRef.current };
    const start = performance.now();
    const dur = 720;
    const step = (now: number) => {
      const p = Math.min(1, (now - start) / dur);
      const e = 1 - Math.pow(1 - p, 3);
      setAnim({
        paid: from.paid + (to.paid - from.paid) * e,
        out: from.out + (to.out - from.out) * e,
        bal: from.bal + (to.bal - from.bal) * e,
        pnl: from.pnl + (to.pnl - from.pnl) * e,
      });
      if (p < 1) rafRef.current = requestAnimationFrame(step);
      else rafRef.current = null;
    };
    rafRef.current = requestAnimationFrame(step);
  }, []);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const togglePaid = useCallback((id: string) => {
    setInvoices((prev) => {
      const list = prev.map((i) => {
        if (i.id !== id) return i;
        const orig = SEED.find((s) => s.id === id)!;
        if (i.status === 'Paid') {
          return { ...i, status: orig.status, meta: orig.meta, paidLabel: orig.paidLabel || undefined, seq: orig.seq || 0 };
        }
        seqRef.current += 1;
        return { ...i, status: 'Paid', meta: 'Paid just now', paidLabel: 'just now', seq: seqRef.current };
      });
      const next = computeTargets(list);
      if (reduced.current) {
        setAnim(next);
      } else {
        setSynced(true);
        animate(next);
        setTimeout(() => setSynced(false), 1900);
      }
      return list;
    });
  }, [animate]);

  // Derived values
  const visible = invoices.filter((i) => filter === 'All' || (filter === 'Paid' ? i.status === 'Paid' : i.status !== 'Paid'));
  const openCount = invoices.filter((i) => i.status !== 'Paid').length;
  const paidCount = invoices.filter((i) => i.status === 'Paid').length;

  const paidEntries: FeedEntry[] = invoices
    .filter((i) => i.status === 'Paid')
    .sort((a, b) => (b.seq || 0) - (a.seq || 0))
    .map((i) => ({ title: i.client, sub: i.id + ' \u00b7 ' + (i.paidLabel || 'just now'), amount: '+' + money(i.amount), income: true }));
  const baseEntries: FeedEntry[] = [
    { title: 'Snaarp Stack', sub: 'Expense \u00b7 09 Jul', amount: '\u2212' + money(12), income: false },
    { title: 'Studio rent', sub: 'Expense \u00b7 07 Jul', amount: '\u2212' + money(640), income: false },
    { title: 'Meridian Co', sub: 'INV-0136 \u00b7 04 Jul', amount: '+' + money(860), income: true },
  ];
  const feed = [...paidEntries, ...baseEntries].slice(0, 4);

  const pnlBarHeight = Math.max(10, Math.min(30, Math.round(anim.pnl / 120)));

  const chipStyle = (active: boolean) =>
    'padding:4px 11px;border-radius:999px;font-family:inherit;font-size:10.5px;font-weight:700;cursor:pointer;white-space:nowrap;transition:background .2s,color .2s,border-color .2s;'
    + (active ? 'background:#7C3AED;color:#fff;border:1px solid #7C3AED' : 'background:#fff;color:#8B85A0;border:1px solid #EFEDF6');

  return (
    <div ref={containerRef} style={{ minWidth: 0, overflowX: 'hidden', background: '#fff', lineHeight: 1.5 }}>

      {/* ============ HERO ============ */}
      <section style={{ background: 'linear-gradient(180deg,#FBFAFF 0%,#fff 72%)', padding: '74px 24px 116px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: -120, right: -60, width: 560, height: 560, background: 'radial-gradient(circle,rgba(124,58,237,.11),transparent 66%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: -160, left: -100, width: 420, height: 420, background: 'radial-gradient(circle,rgba(20,184,166,.09),transparent 68%)', pointerEvents: 'none' }} />
        <div className="max-w-7xl mx-auto px-6 lg:px-10" style={{ display: 'grid', gridTemplateColumns: 'minmax(0,.92fr) minmax(0,1.15fr)', gap: 52, alignItems: 'center', position: 'relative' }}>
          <div data-books-reveal="">
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '7px 14px', borderRadius: 999, background: '#F5F3FF', color: '#7C3AED', fontWeight: 600, fontSize: 12, letterSpacing: '.09em', textTransform: 'uppercase', border: '1px solid #EDE9FE', whiteSpace: 'nowrap' }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#7C3AED' }} />Finance · Books
            </span>
            <h1 className="books-hero-heading" style={{ margin: '22px 0 0', color: '#1B1730' }}>Send invoices.<br /><span style={{ color: '#7C3AED' }}>Keep the books straight.</span></h1>
            <p style={{ fontSize: 18, lineHeight: 1.6, color: '#5B5670', margin: '22px 0 0', maxWidth: 520 }}>Invoicing and bookkeeping that don&rsquo;t need an accounting degree to run. Send professional invoices, track what&rsquo;s owed, and keep a clean set of books &mdash; synced with the rest of the Stack.</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 13, marginTop: 32 }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '15px 28px', borderRadius: 999, background: '#7C3AED', color: '#fff', fontWeight: 600, fontSize: 15.5, cursor: 'pointer', boxShadow: '0 12px 26px -8px rgba(124,58,237,.6)' }}>Start for £2/month</span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 9, padding: '15px 26px', borderRadius: 999, background: '#fff', color: '#2A2440', fontWeight: 600, fontSize: 15.5, cursor: 'pointer', border: '1.5px solid #E4DFF2', whiteSpace: 'nowrap' }}>
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="16" rx="3" /><path d="M8 3v4M16 3v4M3 11h18" /></svg>
                Book a Call
              </span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 9, marginTop: 26, fontSize: 13.5, color: '#8B85A0', fontWeight: 500 }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#14B8A6" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
              GDPR compliant · No credit card required
            </div>
          </div>

          {/* HERO VISUAL */}
          <div data-books-reveal="" data-books-reveal-delay="140" style={{ position: 'relative', minWidth: 0 }}>
            <div style={{ position: 'absolute', inset: '24px -12px -20px 14px', background: 'linear-gradient(135deg,rgba(124,58,237,.08),rgba(20,184,166,.06))', borderRadius: 28, filter: 'blur(6px)', pointerEvents: 'none' }} />
            <div style={{ position: 'relative', background: '#fff', borderRadius: 20, border: '1px solid #ECE9F5', boxShadow: '0 1px 3px -1px rgba(37,22,84,.08),0 24px 48px -20px rgba(37,22,84,.18)', overflow: 'hidden' }}>
              {/* app top bar */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 11, padding: '12px 16px', borderBottom: '1px solid #F0EEF6', background: '#FBFAFE' }}>
                <span style={{ width: 24, height: 24, borderRadius: 8, background: 'linear-gradient(135deg,#7C3AED,#9F67F5)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5V5a2 2 0 0 1 2-2h13v18H6a2 2 0 0 1-2-1.5z" /><path d="M8 8h7" /></svg></span>
                <span style={{ fontSize: 13, fontWeight: 700, color: '#1B1730', whiteSpace: 'nowrap' }}>Books</span>
                <span style={{ width: 1, height: 15, background: '#E9E6F2' }} />
                <span style={{ fontSize: 11.5, fontWeight: 600, color: '#8B85A0', whiteSpace: 'nowrap' }}>July 2026</span>
                <span style={{ flex: 1 }} />
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '5px 11px', borderRadius: 999, background: '#fff', whiteSpace: 'nowrap', flexShrink: 0, transition: 'border-color .3s', border: `1px solid ${synced ? '#CDF5EE' : '#ECE9F5'}`, animation: synced ? 'books-syncPulse 1.1s ease-out 2' : 'none' }}>
                  <span style={{ width: 6, height: 6, borderRadius: '50%', flexShrink: 0, transition: 'background .3s', background: synced ? '#0E9384' : '#C7C2D6' }} />
                  <span style={{ fontSize: 10.5, fontWeight: 700, whiteSpace: 'nowrap', transition: 'color .3s', color: synced ? '#0E9384' : '#8B85A0' }}>{synced ? 'Syncing\u2026' : 'Synced'}</span>
                </span>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5, padding: '6px 12px', borderRadius: 999, background: '#7C3AED', color: '#fff', fontSize: 11, fontWeight: 700, whiteSpace: 'nowrap', flexShrink: 0, cursor: 'pointer', boxShadow: '0 8px 18px -9px rgba(124,58,237,.7)' }}><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M5 12h14" /></svg>New invoice</span>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '54px minmax(0,1fr)' }}>
                {/* nav rail */}
                <div style={{ borderRight: '1px solid #F2F1F6', background: '#FCFBFE', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 7, padding: '14px 0 16px' }}>
                  <span style={{ width: 32, height: 32, borderRadius: 10, background: '#F0EAFE', border: '1px solid #E1D6FB', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="9" rx="2" /><rect x="14" y="3" width="7" height="5" rx="2" /><rect x="14" y="12" width="7" height="9" rx="2" /><rect x="3" y="16" width="7" height="5" rx="2" /></svg></span>
                  <span style={{ width: 32, height: 32, borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center' }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#B4AEC6" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /></svg></span>
                  <span style={{ width: 32, height: 32, borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center' }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#B4AEC6" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5V5a2 2 0 0 1 2-2h13v18H6a2 2 0 0 1-2-1.5z" /><path d="M8 8h7M8 12h5" /></svg></span>
                  <span style={{ width: 32, height: 32, borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center' }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#B4AEC6" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18" /><path d="M7 15l4-5 3 3 5-7" /></svg></span>
                  <span style={{ flex: 1 }} />
                  <span style={{ width: 28, height: 28, borderRadius: '50%', background: '#EDE9FE', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 10.5, fontWeight: 700, color: '#7C3AED' }}>JR</span>
                </div>

                {/* content */}
                <div style={{ padding: '16px 18px 18px', minWidth: 0 }}>
                  {/* KPI tiles */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,minmax(0,1fr))', gap: 11 }}>
                    <div style={{ padding: '13px 14px', borderRadius: 14, background: '#fff', border: '1px solid #EFEDF6', boxShadow: '0 10px 22px -18px rgba(37,22,84,.4)' }}>
                      <div style={{ fontSize: 9, fontWeight: 700, letterSpacing: '.12em', color: '#B4AEC6', whiteSpace: 'nowrap' }}>OUTSTANDING</div>
                      <div style={{ fontSize: 19, fontWeight: 700, letterSpacing: '-.02em', color: '#1B1730', fontVariantNumeric: 'tabular-nums', marginTop: 3, whiteSpace: 'nowrap' }}>{money(anim.out)}</div>
                      <div style={{ fontSize: 10, color: '#8B85A0', marginTop: 2, whiteSpace: 'nowrap' }}>{openCount === 1 ? '1 invoice open' : `${openCount} invoices open`}</div>
                    </div>
                    <div style={{ padding: '13px 14px', borderRadius: 14, background: '#F1FCF9', border: '1px solid #CDF5EE' }}>
                      <div style={{ fontSize: 9, fontWeight: 700, letterSpacing: '.12em', color: '#7FB8AE', whiteSpace: 'nowrap' }}>PAID · JULY</div>
                      <div style={{ fontSize: 19, fontWeight: 700, letterSpacing: '-.02em', color: '#0E9384', fontVariantNumeric: 'tabular-nums', marginTop: 3, whiteSpace: 'nowrap' }}>{money(anim.paid)}</div>
                      <div style={{ fontSize: 10, color: '#6FA69C', marginTop: 2, whiteSpace: 'nowrap' }}>{paidCount === 1 ? '1 invoice settled' : `${paidCount} invoices settled`}</div>
                    </div>
                    <div style={{ position: 'relative', overflow: 'hidden', padding: '13px 14px', borderRadius: 14, background: '#1B1730', border: '1px solid #1B1730' }}>
                      <div style={{ position: 'absolute', top: -30, right: -24, width: 96, height: 96, background: 'radial-gradient(circle,rgba(124,58,237,.5),transparent 68%)' }} />
                      <div style={{ position: 'relative', fontSize: 9, fontWeight: 700, letterSpacing: '.12em', color: '#8E88A3', whiteSpace: 'nowrap' }}>BALANCE</div>
                      <div style={{ position: 'relative', fontSize: 19, fontWeight: 700, letterSpacing: '-.02em', color: '#fff', fontVariantNumeric: 'tabular-nums', marginTop: 3, whiteSpace: 'nowrap' }}>{money(anim.bal)}</div>
                      <div style={{ position: 'relative', fontSize: 10, color: '#B7B1C9', marginTop: 2, whiteSpace: 'nowrap' }}>Live · updates on payment</div>
                    </div>
                  </div>

                  <div style={{ marginTop: 14, display: 'grid', gridTemplateColumns: 'minmax(0,1.6fr) minmax(0,1fr)', gap: 14, alignItems: 'start' }}>
                    {/* invoice table */}
                    <div style={{ minWidth: 0 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
                        <span style={{ fontSize: 11.5, fontWeight: 700, color: '#1B1730', marginRight: 2 }}>Invoices</span>
                        <button onClick={() => setFilter('All')} style={{ ...parseStyle(chipStyle(filter === 'All')) }}>All</button>
                        <button onClick={() => setFilter('Open')} style={{ ...parseStyle(chipStyle(filter === 'Open')) }}>Open</button>
                        <button onClick={() => setFilter('Paid')} style={{ ...parseStyle(chipStyle(filter === 'Paid')) }}>Paid</button>
                      </div>
                      <div style={{ marginTop: 9, borderRadius: 14, border: '1px solid #EFEDF6', background: '#fff', boxShadow: '0 10px 22px -20px rgba(37,22,84,.45)', padding: 6, minHeight: 214 }}>
                        {visible.map((i) => {
                          const t = tone(i.status);
                          return (
                            <div key={i.id} style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) auto 88px', gap: 10, alignItems: 'center', padding: '9px 10px', borderRadius: 11, transition: 'background .2s', background: i.status === 'Paid' ? '#FCFEFD' : 'transparent' }}>
                              <div style={{ display: 'flex', alignItems: 'center', gap: 9, minWidth: 0 }}>
                                <span style={{ width: 30, height: 30, borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, fontWeight: 700, flexShrink: 0, ...(parseStyle(avatarStyle(i.tint))) }}>{i.initials}</span>
                                <div style={{ minWidth: 0 }}>
                                  <div style={{ fontSize: 12.5, fontWeight: 600, color: '#1B1730', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{i.client}</div>
                                  <div style={{ fontSize: 10.5, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', color: i.status === 'Overdue' ? '#C0344E' : '#8B85A0' }}>{i.meta}</div>
                                </div>
                              </div>
                              <span style={{ fontSize: 12.5, fontWeight: 700, color: '#1B1730', fontVariantNumeric: 'tabular-nums', whiteSpace: 'nowrap' }}>{money(i.amount)}</span>
                              <button onClick={() => togglePaid(i.id)} style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 5, width: 88, padding: '5px 0', borderRadius: 999, fontFamily: 'inherit', fontSize: 10.5, fontWeight: 700, cursor: 'pointer', whiteSpace: 'nowrap', transition: 'background .3s,border-color .3s,color .3s,box-shadow .3s', background: t.bg, border: `1.5px solid ${t.bd}`, color: t.fg, boxShadow: i.status === 'Paid' ? '0 8px 18px -12px rgba(14,147,132,.8)' : 'none' }}>
                                <span style={{ width: 6, height: 6, borderRadius: '50%', flexShrink: 0, transition: 'background .3s', background: t.dot }} />{i.status}
                              </button>
                            </div>
                          );
                        })}
                        {visible.length === 0 && (
                          <div style={{ height: 200, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11.5, color: '#B4AEC6' }}>Nothing here — try another filter</div>
                        )}
                      </div>
                    </div>

                    {/* activity + P&L */}
                    <div style={{ minWidth: 0 }}>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <span style={{ fontSize: 11.5, fontWeight: 700, color: '#1B1730' }}>Ledger</span>
                        <span style={{ fontSize: 10, fontWeight: 600, color: '#B4AEC6', whiteSpace: 'nowrap' }}>Auto-logged</span>
                      </div>
                      <div style={{ marginTop: 9, borderRadius: 14, border: '1px solid #EFEDF6', background: '#fff', boxShadow: '0 10px 22px -20px rgba(37,22,84,.45)', padding: '8px 10px', height: 145, overflow: 'hidden' }}>
                        {feed.map((f, idx) => (
                          <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '6px 0', borderTop: idx === 0 ? 'none' : '1px solid #F7F6FA' }}>
                            <span style={{ width: 22, height: 22, borderRadius: 7, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, background: f.income ? '#ECFDF9' : '#FFF6F8', border: f.income ? '1px solid #CDF5EE' : '1px solid #FBD5DD' }}>
                              {f.income ? (
                                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#0E9384" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19V5M5 12l7-7 7 7" /></svg>
                              ) : (
                                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#E11D74" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M19 12l-7 7-7-7" /></svg>
                              )}
                            </span>
                            <div style={{ flex: 1, minWidth: 0 }}>
                              <div style={{ fontSize: 11, fontWeight: 600, color: '#1B1730', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{f.title}</div>
                              <div style={{ fontSize: 9.5, color: '#8B85A0', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{f.sub}</div>
                            </div>
                            <span style={{ fontSize: 11, fontWeight: 700, whiteSpace: 'nowrap', fontVariantNumeric: 'tabular-nums', color: f.income ? '#0E9384' : '#C0344E' }}>{f.amount}</span>
                          </div>
                        ))}
                      </div>
                      <div style={{ marginTop: 11, padding: '12px 13px', borderRadius: 14, background: 'linear-gradient(140deg,#F7F5FF,#F1FCF9)', border: '1px solid #EDE9FE' }}>
                        <div style={{ fontSize: 9, fontWeight: 700, letterSpacing: '.12em', color: '#8B85A0', whiteSpace: 'nowrap' }}>PROFIT &amp; LOSS · JULY</div>
                        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 8, marginTop: 4 }}>
                          <span style={{ fontSize: 17, fontWeight: 700, letterSpacing: '-.02em', color: '#1B1730', fontVariantNumeric: 'tabular-nums', whiteSpace: 'nowrap' }}>+{money(anim.pnl)}</span>
                          <span style={{ display: 'flex', alignItems: 'flex-end', gap: 3 }}>
                            <span style={{ width: 7, height: 14, borderRadius: 2, background: '#DDD5F5' }} />
                            <span style={{ width: 7, height: 20, borderRadius: 2, background: '#C4B5FD' }} />
                            <span style={{ width: 7, height: 12, borderRadius: 2, background: '#B8EBE0' }} />
                            <span style={{ width: 7, borderRadius: 2, background: '#7C3AED', transition: 'height .5s cubic-bezier(.16,1,.3,1)', height: pnlBarHeight }} />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div style={{ marginTop: 18, textAlign: 'center', fontSize: 11, color: '#B4AEC6', fontWeight: 500 }}>Click any status pill to mark it paid — the books update live</div>
          </div>
        </div>
      </section>

      {/* ============ TRUST BAR ============ */}
      <StackTrustBar Wrapper={PlainStackWrapper} apps={BOOKS_STACK_APPS} />

      {/* ============ STATS ROW (4-card bento) ============ */}
      <section style={{ background: '#F7F7F7', padding: '80px 24px' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 20 }}>
          <div data-books-reveal="" style={{ background: '#fff', borderRadius: 20, padding: '30px 28px', border: '1px solid #EEEDF3', boxShadow: '0 14px 34px -22px rgba(37,22,84,.22)', display: 'flex', flexDirection: 'column' }}>
            <div style={{ width: 46, height: 46, borderRadius: 13, background: '#ECFDF9', border: '1px solid #CDF5EE', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="#0E9384" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12a9 9 0 1 1-3.2-6.9" /><path d="M21 4v5h-5" /><path d="m9 12 2 2 4-4" /></svg>
            </div>
            <div style={{ fontSize: 28, fontWeight: 700, letterSpacing: '-.02em', color: '#1B1730', marginTop: 18, lineHeight: 1.1 }}>Auto-tracked</div>
            <p style={{ margin: '9px 0 0', fontSize: 14, lineHeight: 1.55, color: '#5B5670' }}>Every invoice and payment logged automatically.</p>
          </div>
          <div data-books-reveal="" data-books-reveal-delay="90" style={{ background: '#1B1730', borderRadius: 20, padding: '30px 28px', border: '1px solid #1B1730', boxShadow: '0 20px 44px -24px rgba(27,23,48,.6)', position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
            <div style={{ position: 'absolute', top: -40, right: -30, width: 150, height: 150, background: 'radial-gradient(circle,rgba(124,58,237,.4),transparent 68%)' }} />
            <div style={{ position: 'relative', width: 46, height: 46, borderRadius: 13, background: 'rgba(124,58,237,.22)', border: '1px solid rgba(159,103,245,.4)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="#C4B5FD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3.5 2" /></svg>
            </div>
            <div style={{ position: 'relative', fontSize: 25, fontWeight: 700, letterSpacing: '-.02em', color: '#fff', marginTop: 18, lineHeight: 1.12 }}>Always<br />current</div>
            <p style={{ position: 'relative', margin: '9px 0 0', fontSize: 14, lineHeight: 1.55, color: '#B7B1C9' }}>Books update the moment money moves.</p>
          </div>
          <div data-books-reveal="" data-books-reveal-delay="180" style={{ background: 'linear-gradient(150deg,#7C3AED,#6D28D9)', borderRadius: 20, padding: '30px 28px', border: '1px solid #6D28D9', boxShadow: '0 20px 44px -22px rgba(124,58,237,.6)', position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div style={{ position: 'absolute', bottom: -50, left: -30, width: 160, height: 160, background: 'radial-gradient(circle,rgba(255,255,255,.16),transparent 68%)' }} />
            <div style={{ position: 'relative', fontSize: 56, fontWeight: 700, letterSpacing: '-.03em', color: '#fff', lineHeight: 1 }}>0<span style={{ fontSize: 26, fontWeight: 600, marginLeft: 4 }}>min</span></div>
            <p style={{ position: 'relative', margin: '10px 0 0', fontSize: 14, lineHeight: 1.55, color: 'rgba(255,255,255,.82)' }}>Setup time — no install required.</p>
          </div>
          <div data-books-reveal="" data-books-reveal-delay="270" style={{ background: '#fff', borderRadius: 20, padding: '30px 28px', border: '1px solid #EEEDF3', boxShadow: '0 14px 34px -22px rgba(37,22,84,.22)', display: 'flex', flexDirection: 'column' }}>
            <div style={{ position: 'relative', width: 56, height: 50 }}>
              <div style={{ position: 'absolute', left: 8, top: 0, width: 38, height: 28, borderRadius: 6, background: '#FFEFF2', border: '1px solid #FBD5DD', transform: 'rotate(-8deg)' }} />
              <div style={{ position: 'absolute', left: 14, top: 3, width: 38, height: 28, borderRadius: 6, background: '#ECFDF9', border: '1px solid #CDF5EE', transform: 'rotate(7deg)' }} />
              <div style={{ position: 'absolute', left: 10, top: 7, width: 38, height: 30, borderRadius: 6, background: '#fff', border: '1px solid #E4DFF2', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 8px 16px -10px rgba(37,22,84,.3)' }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5V5a2 2 0 0 1 2-2h13v18H6a2 2 0 0 1-2-1.5z" /><path d="M8 8h7M8 12h5" /></svg></div>
            </div>
            <div style={{ fontSize: 44, fontWeight: 700, letterSpacing: '-.02em', color: '#1B1730', marginTop: 14, lineHeight: 1 }}>1<span style={{ fontSize: 20, fontWeight: 600, marginLeft: 6 }}>place</span></div>
            <p style={{ margin: '8px 0 0', fontSize: 14, lineHeight: 1.55, color: '#5B5670' }}>Invoicing and bookkeeping beside the rest of the Stack.</p>
          </div>
        </div>
      </section>

      {/* ============ 3 STEPS ============ */}
      <section style={{ background: '#fff', padding: '92px 24px' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div data-books-reveal="" style={{ textAlign: 'center', maxWidth: 620, margin: '0 auto 52px' }}>
            <h2 className="books-section-heading" style={{ margin: 0 }}>Get started in 3 easy steps</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 24 }}>
            <div data-books-reveal="" style={{ background: '#FBFAFE', borderRadius: 20, padding: '32px 30px', border: '1px solid #F0EEF7' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 36, height: 36, borderRadius: 10, background: '#7C3AED', color: '#fff', fontWeight: 700, fontSize: 15, boxShadow: '0 8px 16px -6px rgba(124,58,237,.5)' }}>1</div>
              <div style={{ marginTop: 22, height: 120, borderRadius: 14, background: '#fff', border: '1px solid #EFEDF6', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', padding: '0 20px' }}>
                <div style={{ width: 150, borderRadius: 10, border: '1px solid #EFEDF6', background: '#fff', boxShadow: '0 10px 20px -14px rgba(37,22,84,.4)', padding: '11px 12px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}><span style={{ fontSize: 7.5, fontWeight: 700, letterSpacing: '.12em', color: '#B4AEC6' }}>INVOICE</span><span style={{ width: 24, height: 8, borderRadius: 3, background: '#EDE9FE' }} /></div>
                  <div style={{ marginTop: 9, display: 'flex', flexDirection: 'column', gap: 5 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}><span style={{ height: 5, width: 62, borderRadius: 3, background: '#EFEDF6' }} /><span style={{ height: 5, width: 24, borderRadius: 3, background: '#E4DFF2' }} /></div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}><span style={{ height: 5, width: 50, borderRadius: 3, background: '#EFEDF6' }} /><span style={{ height: 5, width: 22, borderRadius: 3, background: '#E4DFF2' }} /></div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}><span style={{ height: 5, width: 56, borderRadius: 3, background: '#EFEDF6' }} /><span style={{ height: 5, width: 20, borderRadius: 3, background: '#E4DFF2' }} /></div>
                  </div>
                  <div style={{ marginTop: 10, paddingTop: 8, borderTop: '1px solid #F2F1F6', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}><span style={{ fontSize: 7.5, fontWeight: 700, color: '#8B85A0' }}>TOTAL</span><span style={{ fontSize: 10, fontWeight: 700, color: '#1B1730' }}>£2,480</span></div>
                </div>
              </div>
              <h3 style={{ fontSize: 19, fontWeight: 600, margin: '22px 0 0', color: '#1B1730' }}>Create an invoice</h3>
              <p style={{ margin: '8px 0 0', fontSize: 14.5, lineHeight: 1.55, color: '#5B5670' }}>Add line items, set terms, send it out.</p>
            </div>

            <div data-books-reveal="" data-books-reveal-delay="100" style={{ background: '#FBFAFE', borderRadius: 20, padding: '32px 30px', border: '1px solid #F0EEF7' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 36, height: 36, borderRadius: 10, background: '#7C3AED', color: '#fff', fontWeight: 700, fontSize: 15, boxShadow: '0 8px 16px -6px rgba(124,58,237,.5)' }}>2</div>
              <div style={{ marginTop: 22, height: 120, borderRadius: 14, background: '#fff', border: '1px solid #EFEDF6', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 8, overflow: 'hidden', padding: '0 22px' }}>
                <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '7px 10px', borderRadius: 9, background: '#F1FCF9', border: '1px solid #CDF5EE' }}><span style={{ height: 5, width: 52, borderRadius: 3, background: '#B8EBE0' }} /><span style={{ fontSize: 8.5, fontWeight: 700, color: '#0E9384' }}>Paid</span></div>
                <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '7px 10px', borderRadius: 9, background: '#FEF9EF', border: '1px solid #FBEBC6' }}><span style={{ height: 5, width: 40, borderRadius: 3, background: '#F1DDAE' }} /><span style={{ fontSize: 8.5, fontWeight: 700, color: '#B45309' }}>Pending</span></div>
                <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '7px 10px', borderRadius: 9, background: '#FFF6F8', border: '1px solid #FBD5DD' }}><span style={{ height: 5, width: 46, borderRadius: 3, background: '#F3C3D0' }} /><span style={{ fontSize: 8.5, fontWeight: 700, color: '#C0344E' }}>Overdue</span></div>
              </div>
              <h3 style={{ fontSize: 19, fontWeight: 600, margin: '22px 0 0', color: '#1B1730' }}>Track what&rsquo;s owed</h3>
              <p style={{ margin: '8px 0 0', fontSize: 14.5, lineHeight: 1.55, color: '#5B5670' }}>See paid, pending, and overdue at a glance.</p>
            </div>
            <div data-books-reveal="" data-books-reveal-delay="200" style={{ background: '#FBFAFE', borderRadius: 20, padding: '32px 30px', border: '1px solid #F0EEF7' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 36, height: 36, borderRadius: 10, background: '#7C3AED', color: '#fff', fontWeight: 700, fontSize: 15, boxShadow: '0 8px 16px -6px rgba(124,58,237,.5)' }}>3</div>
              <div style={{ marginTop: 22, height: 120, borderRadius: 14, background: '#fff', border: '1px solid #EFEDF6', display: 'flex', alignItems: 'flex-end', justifyContent: 'center', gap: 9, overflow: 'hidden', padding: '0 20px 22px' }}>
                <span style={{ width: 16, height: 34, borderRadius: '5px 5px 3px 3px', background: '#EDE9FE' }} />
                <span style={{ width: 16, height: 52, borderRadius: '5px 5px 3px 3px', background: '#DDD5F5' }} />
                <span style={{ width: 16, height: 42, borderRadius: '5px 5px 3px 3px', background: '#CDF5EE' }} />
                <span style={{ width: 16, height: 64, borderRadius: '5px 5px 3px 3px', background: '#7C3AED' }} />
                <span style={{ width: 16, height: 48, borderRadius: '5px 5px 3px 3px', background: '#B8EBE0' }} />
              </div>
              <h3 style={{ fontSize: 19, fontWeight: 600, margin: '22px 0 0', color: '#1B1730' }}>Keep clean books</h3>
              <p style={{ margin: '8px 0 0', fontSize: 14.5, lineHeight: 1.55, color: '#5B5670' }}>Income and expenses log automatically as money moves.</p>
            </div>
          </div>
          <div data-books-reveal="" style={{ textAlign: 'center', marginTop: 40 }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '15px 28px', borderRadius: 999, background: '#7C3AED', color: '#fff', fontWeight: 600, fontSize: 15.5, cursor: 'pointer', boxShadow: '0 12px 26px -8px rgba(124,58,237,.55)' }}>Start for £2/month
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
            </span>
          </div>
        </div>
      </section>

      {/* ============ BENTO FEATURE GRID ============ */}
      <section style={{ background: '#F7F7F7', padding: '92px 24px' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div data-books-reveal="" style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto 52px' }}>
            <span style={{ fontSize: 11.5, fontWeight: 600, letterSpacing: '.14em', color: '#7C3AED', textTransform: 'uppercase' }}>Everything the money side needs</span>
            <h2 className="books-section-heading" style={{ margin: '14px 0 0' }}>Invoices out, books straight.</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6,1fr)', gap: 20 }}>
            {/* BIG: Professional invoicing */}
            <div data-books-reveal="" style={{ gridColumn: 'span 3', gridRow: 'span 2', background: '#fff', borderRadius: 22, padding: 36, border: '1px solid #EEEDF3', boxShadow: '0 20px 44px -28px rgba(37,22,84,.26)', display: 'flex', flexDirection: 'column' }}>
              <span style={{ display: 'inline-flex', alignSelf: 'flex-start', alignItems: 'center', gap: 7, padding: '5px 12px', borderRadius: 999, background: '#F5F3FF', color: '#7C3AED', fontSize: 11.5, fontWeight: 600, border: '1px solid #E6DEFA', whiteSpace: 'nowrap' }}>Invoicing</span>
              <h3 style={{ fontSize: 25, fontWeight: 700, letterSpacing: '-.02em', margin: '18px 0 0', color: '#1B1730' }}>Professional invoicing</h3>
              <p style={{ margin: '11px 0 0', fontSize: 15.5, lineHeight: 1.6, color: '#5B5670', maxWidth: 400 }}>Branded invoices, sent in seconds. Your logo, your terms, your numbers — laid out cleanly enough that clients pay without asking questions.</p>
              <div style={{ marginTop: 28, flex: 1, minHeight: 210, background: 'linear-gradient(160deg,#FBFAFE,#F4F1FE)', borderRadius: 16, border: '1px solid #EEEAFB', padding: 26, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ width: 230, background: '#fff', borderRadius: 12, border: '1px solid #ECE9F5', boxShadow: '0 20px 38px -22px rgba(37,22,84,.45)', overflow: 'hidden' }}>
                  <div style={{ height: 4, background: 'linear-gradient(90deg,#7C3AED,#A78BFA)' }} />
                  <div style={{ padding: 16 }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 7 }}><span style={{ width: 20, height: 20, borderRadius: 6, background: 'linear-gradient(135deg,#7C3AED,#9F67F5)' }} /><span style={{ fontSize: 10, fontWeight: 700, color: '#1B1730' }}>Your studio</span></div>
                      <span style={{ fontSize: 8, fontWeight: 700, letterSpacing: '.1em', color: '#B4AEC6' }}>INV-0143</span>
                    </div>
                    <div style={{ marginTop: 14, display: 'flex', flexDirection: 'column', gap: 7 }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}><span style={{ height: 6, width: 96, borderRadius: 3, background: '#EFEDF6' }} /><span style={{ height: 6, width: 30, borderRadius: 3, background: '#E4DFF2' }} /></div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}><span style={{ height: 6, width: 78, borderRadius: 3, background: '#EFEDF6' }} /><span style={{ height: 6, width: 26, borderRadius: 3, background: '#E4DFF2' }} /></div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}><span style={{ height: 6, width: 88, borderRadius: 3, background: '#EFEDF6' }} /><span style={{ height: 6, width: 28, borderRadius: 3, background: '#E4DFF2' }} /></div>
                    </div>
                    <div style={{ marginTop: 14, padding: '10px 12px', borderRadius: 10, background: '#FBFAFE', border: '1px solid #F0EEF7', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ fontSize: 9, fontWeight: 700, color: '#8B85A0' }}>TOTAL</span><span style={{ fontSize: 14, fontWeight: 700, color: '#1B1730' }}>£1,940</span>
                    </div>
                    <div style={{ marginTop: 12, display: 'flex', justifyContent: 'center' }}><span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '7px 14px', borderRadius: 999, background: '#7C3AED', color: '#fff', fontSize: 9.5, fontWeight: 700, boxShadow: '0 10px 20px -10px rgba(124,58,237,.7)' }}><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M22 2 11 13" /><path d="M22 2 15 22l-4-9-9-4z" /></svg>Send invoice</span></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Payment tracking */}
            <div data-books-reveal="" data-books-reveal-delay="100" style={{ gridColumn: 'span 3', background: '#fff', borderRadius: 22, padding: '28px 30px', border: '1px solid #EEEDF3', boxShadow: '0 20px 44px -28px rgba(37,22,84,.26)', display: 'flex', alignItems: 'center', gap: 24 }}>
              <div style={{ flex: 1 }}>
                <h3 style={{ fontSize: 20, fontWeight: 700, letterSpacing: '-.01em', margin: 0, color: '#1B1730' }}>Payment tracking</h3>
                <p style={{ margin: '9px 0 0', fontSize: 14.5, lineHeight: 1.55, color: '#5B5670' }}>See paid, pending, and overdue at a glance — no spreadsheet to cross-check.</p>
              </div>
              <div style={{ flexShrink: 0, display: 'flex', flexDirection: 'column', gap: 7 }}>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '5px 11px', borderRadius: 999, background: '#ECFDF9', border: '1px solid #CDF5EE', fontSize: 10.5, fontWeight: 700, color: '#0E9384' }}><span style={{ width: 6, height: 6, borderRadius: '50%', background: '#0E9384' }} />Paid</span>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '5px 11px', borderRadius: 999, background: '#FEF9EF', border: '1px solid #FBEBC6', fontSize: 10.5, fontWeight: 700, color: '#B45309' }}><span style={{ width: 6, height: 6, borderRadius: '50%', background: '#D97706' }} />Pending</span>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '5px 11px', borderRadius: 999, background: '#FFF6F8', border: '1px solid #FBD5DD', fontSize: 10.5, fontWeight: 700, color: '#C0344E' }}><span style={{ width: 6, height: 6, borderRadius: '50%', background: '#E11D74' }} />Overdue</span>
              </div>
            </div>

            {/* Automatic bookkeeping */}
            <div data-books-reveal="" data-books-reveal-delay="180" style={{ gridColumn: 'span 3', background: '#fff', borderRadius: 22, padding: '28px 30px', border: '1px solid #EEEDF3', boxShadow: '0 20px 44px -28px rgba(37,22,84,.26)', display: 'flex', alignItems: 'center', gap: 24 }}>
              <div style={{ flex: 1 }}>
                <h3 style={{ fontSize: 20, fontWeight: 700, letterSpacing: '-.01em', margin: 0, color: '#1B1730' }}>Automatic bookkeeping</h3>
                <p style={{ margin: '9px 0 0', fontSize: 14.5, lineHeight: 1.55, color: '#5B5670' }}>Income and expenses recorded as they happen — the books keep themselves.</p>
              </div>
              <div style={{ flexShrink: 0, display: 'flex', alignItems: 'center', gap: 10 }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}><span style={{ width: 6, height: 6, borderRadius: 2, background: '#0E9384' }} /><span style={{ height: 5, width: 44, borderRadius: 3, background: '#E4DFF2' }} /></span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}><span style={{ width: 6, height: 6, borderRadius: 2, background: '#E11D74' }} /><span style={{ height: 5, width: 34, borderRadius: 3, background: '#EFEDF6' }} /></span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}><span style={{ width: 6, height: 6, borderRadius: 2, background: '#0E9384' }} /><span style={{ height: 5, width: 40, borderRadius: 3, background: '#E4DFF2' }} /></span>
                </div>
                <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ animation: 'books-spinSlow 9s linear infinite' }}><path d="M21 12a9 9 0 1 1-3.2-6.9" /><path d="M21 4v5h-5" /></svg>
              </div>
            </div>

            {/* Recurring invoices */}
            <div data-books-reveal="" data-books-reveal-delay="120" style={{ gridColumn: 'span 2', background: '#fff', borderRadius: 22, padding: 28, border: '1px solid #EEEDF3', boxShadow: '0 20px 44px -28px rgba(37,22,84,.26)' }}>
              <div style={{ height: 70, marginBottom: 18, display: 'flex', alignItems: 'center', gap: 11 }}>
                <div style={{ width: 44, height: 44, borderRadius: 12, background: '#F5F3FF', border: '1px solid #E6DEFA', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 2l4 4-4 4" /><path d="M3 11V9a4 4 0 0 1 4-4h14" /><path d="M7 22l-4-4 4-4" /><path d="M21 13v2a4 4 0 0 1-4 4H3" /></svg></div>
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 6 }}><span style={{ height: 6, width: '66%', borderRadius: 3, background: '#E4DFF2' }} /><span style={{ height: 5, width: '44%', borderRadius: 3, background: '#EFEDF6' }} /></div>
              </div>
              <h3 style={{ fontSize: 18, fontWeight: 700, letterSpacing: '-.01em', margin: 0, color: '#1B1730' }}>Recurring invoices</h3>
              <p style={{ margin: '8px 0 0', fontSize: 14, lineHeight: 1.55, color: '#5B5670' }}>Set it once for repeat clients.</p>
            </div>

            {/* Simple reports */}
            <div data-books-reveal="" data-books-reveal-delay="200" style={{ gridColumn: 'span 2', background: '#fff', borderRadius: 22, padding: 28, border: '1px solid #EEEDF3', boxShadow: '0 20px 44px -28px rgba(37,22,84,.26)' }}>
              <div style={{ height: 70, marginBottom: 18, display: 'flex', alignItems: 'flex-end', gap: 7, paddingBottom: 4 }}>
                <span style={{ width: 14, height: 26, borderRadius: '4px 4px 2px 2px', background: '#EDE9FE' }} />
                <span style={{ width: 14, height: 40, borderRadius: '4px 4px 2px 2px', background: '#DDD5F5' }} />
                <span style={{ width: 14, height: 32, borderRadius: '4px 4px 2px 2px', background: '#CDF5EE' }} />
                <span style={{ width: 14, height: 52, borderRadius: '4px 4px 2px 2px', background: '#7C3AED' }} />
                <span style={{ width: 14, height: 44, borderRadius: '4px 4px 2px 2px', background: '#B8EBE0' }} />
                <span style={{ marginLeft: 6, display: 'inline-flex', alignItems: 'center', gap: 4, padding: '3px 8px', borderRadius: 999, background: '#ECFDF9', border: '1px solid #CDF5EE', fontSize: 9.5, fontWeight: 700, color: '#0E9384' }}>P&amp;L</span>
              </div>
              <h3 style={{ fontSize: 18, fontWeight: 700, letterSpacing: '-.01em', margin: 0, color: '#1B1730' }}>Simple reports</h3>
              <p style={{ margin: '8px 0 0', fontSize: 14, lineHeight: 1.55, color: '#5B5670' }}>Profit &amp; loss, outstanding balances, at a glance.</p>
            </div>

            {/* Multi-currency */}
            <div data-books-reveal="" data-books-reveal-delay="280" style={{ gridColumn: 'span 2', background: '#fff', borderRadius: 22, padding: 28, border: '1px solid #EEEDF3', boxShadow: '0 20px 44px -28px rgba(37,22,84,.26)' }}>
              <div style={{ height: 70, marginBottom: 18, display: 'flex', alignItems: 'center', gap: 8 }}>
                <span style={{ width: 40, height: 40, borderRadius: 12, background: '#F5F3FF', border: '1px solid #E6DEFA', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 17, fontWeight: 700, color: '#7C3AED' }}>£</span>
                <span style={{ width: 40, height: 40, borderRadius: 12, background: '#ECFDF9', border: '1px solid #CDF5EE', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 17, fontWeight: 700, color: '#0E9384' }}>$</span>
                <span style={{ width: 40, height: 40, borderRadius: 12, background: '#FEF6E7', border: '1px solid #FBEBC6', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 17, fontWeight: 700, color: '#B45309' }}>&euro;</span>
              </div>
              <h3 style={{ fontSize: 18, fontWeight: 700, letterSpacing: '-.01em', margin: 0, color: '#1B1730' }}>Multi-currency support</h3>
              <p style={{ margin: '8px 0 0', fontSize: 14, lineHeight: 1.55, color: '#5B5670' }}>Bill clients in their currency.</p>
            </div>
          </div>
          <div data-books-reveal="" style={{ textAlign: 'center', marginTop: 40 }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '14px 26px', borderRadius: 999, background: '#fff', color: '#2A2440', fontWeight: 600, fontSize: 15, cursor: 'pointer', border: '1.5px solid #E4DFF2' }}>See How It Works
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
            </span>
          </div>
        </div>
      </section>

      {/* ============ ALT ROW 1: Get paid without the chasing ============ */}
      <section style={{ background: '#fff', padding: '92px 24px' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10" style={{ display: 'grid', gridTemplateColumns: '1.05fr 1fr', gap: 64, alignItems: 'center' }}>
          <div data-books-reveal="" style={{ position: 'relative' }}>
            <div style={{ position: 'absolute', inset: '18px -8px -16px 14px', background: 'linear-gradient(135deg,rgba(124,58,237,.10),rgba(20,184,166,.10))', borderRadius: 24, filter: 'blur(2px)' }} />
            <div style={{ position: 'relative', background: '#fff', borderRadius: 20, border: '1px solid #ECE9F5', boxShadow: '0 2px 4px -2px rgba(37,22,84,.12),0 30px 60px -30px rgba(37,22,84,.4)', overflow: 'hidden' }}>
              <div style={{ padding: '16px 22px', borderBottom: '1px solid #F0EEF6', display: 'flex', alignItems: 'center', gap: 11, background: '#FBFAFE' }}>
                <span style={{ width: 32, height: 32, borderRadius: 9, background: '#F5F3FF', border: '1px solid #E6DEFA', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /></svg></span>
                <div style={{ flex: 1 }}><div style={{ fontSize: 13.5, fontWeight: 700, color: '#1B1730' }}>Invoices</div><div style={{ fontSize: 11, color: '#8B85A0' }}>3 open · £6,140 outstanding</div></div>
                <span style={{ fontSize: 10.5, fontWeight: 600, color: '#B4AEC6' }}>July</span>
              </div>
              <div style={{ padding: '10px 14px 18px' }}>
                {/* invoice rows */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr auto auto', gap: 14, alignItems: 'center', padding: '14px 10px', borderBottom: '1px solid #F7F6FA' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}><span style={{ width: 34, height: 34, borderRadius: 11, background: '#EDE9FE', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 700, color: '#7C3AED' }}>HC</span><div><div style={{ fontSize: 14, fontWeight: 600, color: '#1B1730' }}>Harbour &amp; Co</div><div style={{ fontSize: 11.5, color: '#8B85A0' }}>INV-0142 · due 28 Jul</div></div></div>
                  <span style={{ fontSize: 14, fontWeight: 700, color: '#1B1730', fontVariantNumeric: 'tabular-nums' }}>£2,480</span>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '5px 11px', borderRadius: 999, background: '#FEF9EF', border: '1px solid #FBEBC6', fontSize: 10.5, fontWeight: 700, color: '#B45309' }}><span style={{ width: 6, height: 6, borderRadius: '50%', background: '#D97706' }} />Pending</span>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr auto auto', gap: 14, alignItems: 'center', padding: '14px 10px', borderBottom: '1px solid #F7F6FA' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}><span style={{ width: 34, height: 34, borderRadius: 11, background: '#D5F5EF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 700, color: '#0E9384' }}>LS</span><div><div style={{ fontSize: 14, fontWeight: 600, color: '#1B1730' }}>Larkspur Studio</div><div style={{ fontSize: 11.5, color: '#8B85A0' }}>INV-0139 · paid 12 Jul</div></div></div>
                  <span style={{ fontSize: 14, fontWeight: 700, color: '#1B1730', fontVariantNumeric: 'tabular-nums' }}>£1,240</span>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '5px 11px', borderRadius: 999, background: '#ECFDF9', border: '1px solid #CDF5EE', fontSize: 10.5, fontWeight: 700, color: '#0E9384' }}><span style={{ width: 6, height: 6, borderRadius: '50%', background: '#0E9384' }} />Paid</span>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr auto auto', gap: 14, alignItems: 'center', padding: '14px 10px', borderBottom: '1px solid #F7F6FA' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}><span style={{ width: 34, height: 34, borderRadius: 11, background: '#FDE0E9', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 700, color: '#C0344E' }}>WF</span><div><div style={{ fontSize: 14, fontWeight: 600, color: '#1B1730' }}>Wexford Ltd</div><div style={{ fontSize: 11.5, color: '#8B85A0' }}>INV-0131 · 9 days late</div></div></div>
                  <span style={{ fontSize: 14, fontWeight: 700, color: '#1B1730', fontVariantNumeric: 'tabular-nums' }}>£1,860</span>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '5px 11px', borderRadius: 999, background: '#FFF6F8', border: '1px solid #FBD5DD', fontSize: 10.5, fontWeight: 700, color: '#C0344E' }}><span style={{ width: 6, height: 6, borderRadius: '50%', background: '#E11D74' }} />Overdue</span>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr auto auto', gap: 14, alignItems: 'center', padding: '14px 10px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}><span style={{ width: 34, height: 34, borderRadius: 11, background: '#FDE6C9', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 700, color: '#B45309' }}>MC</span><div><div style={{ fontSize: 14, fontWeight: 600, color: '#1B1730' }}>Meridian Co</div><div style={{ fontSize: 11.5, color: '#8B85A0' }}>INV-0144 · due 04 Aug</div></div></div>
                  <span style={{ fontSize: 14, fontWeight: 700, color: '#1B1730', fontVariantNumeric: 'tabular-nums' }}>£1,800</span>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '5px 11px', borderRadius: 999, background: '#FEF9EF', border: '1px solid #FBEBC6', fontSize: 10.5, fontWeight: 700, color: '#B45309' }}><span style={{ width: 6, height: 6, borderRadius: '50%', background: '#D97706' }} />Pending</span>
                </div>
                <div style={{ margin: '8px 10px 0', padding: '11px 14px', borderRadius: 12, background: '#FFF6F8', border: '1px solid #FBD5DD', display: 'flex', alignItems: 'center', gap: 9 }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#E11D74" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4v5h5" /><path d="M20 20v-5h-5" /><path d="M4 9a8 8 0 0 1 14-3M20 15a8 8 0 0 1-14 3" /></svg>
                  <span style={{ fontSize: 11.5, fontWeight: 600, color: '#C0344E' }}>Reminder sent automatically · Wexford Ltd</span>
                </div>
              </div>
            </div>
          </div>

          <div data-books-reveal="" data-books-reveal-delay="120">
            <h2 className="books-row-heading" style={{ margin: 0 }}>Get paid without the chasing.</h2>
            <p style={{ margin: '18px 0 0', fontSize: 16, lineHeight: 1.62, color: '#5B5670' }}>Every invoice you&rsquo;ve sent, in one list, colour-coded by where it stands — and the polite nudge on anything late goes out on its own.</p>
            <div style={{ marginTop: 30, display: 'flex', flexDirection: 'column', gap: 22 }}>
              <div style={{ display: 'flex', gap: 15 }}>
                <div style={{ flexShrink: 0, width: 38, height: 38, borderRadius: 11, background: '#F5F3FF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 2 11 13" /><path d="M22 2 15 22l-4-9-9-4z" /></svg></div>
                <div><div style={{ fontWeight: 600, fontSize: 16.5, color: '#1B1730' }}>Send a professional invoice in under a minute.</div><p style={{ margin: '5px 0 0', fontSize: 14.5, lineHeight: 1.55, color: '#5B5670' }}>Pull the client from Contacts, add line items, hit send.</p></div>
              </div>
              <div style={{ display: 'flex', gap: 15 }}>
                <div style={{ flexShrink: 0, width: 38, height: 38, borderRadius: 11, background: '#ECFDF9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#0E9384" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><path d="m9 12 2 2 4-4" /></svg></div>
                <div><div style={{ fontWeight: 600, fontSize: 16.5, color: '#1B1730' }}>See exactly which invoices are paid, pending, or overdue.</div><p style={{ margin: '5px 0 0', fontSize: 14.5, lineHeight: 1.55, color: '#5B5670' }}>One glance tells you what&rsquo;s landed and what hasn&rsquo;t.</p></div>
              </div>
              <div style={{ display: 'flex', gap: 15 }}>
                <div style={{ flexShrink: 0, width: 38, height: 38, borderRadius: 11, background: '#FFEFF2', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#E11D74" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4v5h5" /><path d="M20 20v-5h-5" /><path d="M4 9a8 8 0 0 1 14-3M20 15a8 8 0 0 1-14 3" /></svg></div>
                <div><div style={{ fontWeight: 600, fontSize: 16.5, color: '#1B1730' }}>Automatic reminders go out for anything overdue.</div><p style={{ margin: '5px 0 0', fontSize: 14.5, lineHeight: 1.55, color: '#5B5670' }}>You don&rsquo;t have to write the awkward follow-up email.</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ ALT ROW 2: Books that keep themselves ============ */}
      <section style={{ background: '#F7F7F7', padding: '92px 24px' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10" style={{ display: 'grid', gridTemplateColumns: '1fr 1.05fr', gap: 64, alignItems: 'center' }}>
          <div data-books-reveal="">
            <h2 className="books-row-heading" style={{ margin: 0 }}>Books that keep themselves.</h2>
            <p style={{ margin: '18px 0 0', fontSize: 16, lineHeight: 1.62, color: '#5B5670' }}>Money moves, the ledger updates. No end-of-month scramble, no reconciling a spreadsheet against a bank feed at midnight.</p>
            <div style={{ marginTop: 30, display: 'flex', flexDirection: 'column', gap: 22 }}>
              <div style={{ display: 'flex', gap: 15 }}>
                <div style={{ flexShrink: 0, width: 38, height: 38, borderRadius: 11, background: '#ECFDF9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#0E9384" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12a9 9 0 1 1-3.2-6.9" /><path d="M21 4v5h-5" /></svg></div>
                <div><div style={{ fontWeight: 600, fontSize: 16.5, color: '#1B1730' }}>Every invoice and payment logs automatically.</div><p style={{ margin: '5px 0 0', fontSize: 14.5, lineHeight: 1.55, color: '#5B5670' }}>The entry appears the moment the money lands.</p></div>
              </div>
              <div style={{ display: 'flex', gap: 15 }}>
                <div style={{ flexShrink: 0, width: 38, height: 38, borderRadius: 11, background: '#F5F3FF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="3" /><path d="M3 9h18M9 21V9" /></svg></div>
                <div><div style={{ fontWeight: 600, fontSize: 16.5, color: '#1B1730' }}>No manual data entry or spreadsheet reconciliation.</div><p style={{ margin: '5px 0 0', fontSize: 14.5, lineHeight: 1.55, color: '#5B5670' }}>Nothing to re-key, nothing to forget to re-key.</p></div>
              </div>
              <div style={{ display: 'flex', gap: 15 }}>
                <div style={{ flexShrink: 0, width: 38, height: 38, borderRadius: 11, background: '#FEF6E7', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#B45309" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18" /><path d="M7 15l4-5 3 3 5-7" /></svg></div>
                <div><div style={{ fontWeight: 600, fontSize: 16.5, color: '#1B1730' }}>A clean profit &amp; loss view, always up to date.</div><p style={{ margin: '5px 0 0', fontSize: 14.5, lineHeight: 1.55, color: '#5B5670' }}>Know where the month stands without asking anyone.</p></div>
              </div>
            </div>
          </div>

          <div data-books-reveal="" data-books-reveal-delay="120" style={{ position: 'relative' }}>
            <div style={{ position: 'absolute', inset: '18px 14px -16px -8px', background: 'linear-gradient(135deg,rgba(124,58,237,.12),rgba(20,184,166,.12))', borderRadius: 24, filter: 'blur(2px)' }} />
            <div style={{ position: 'relative', background: '#fff', borderRadius: 20, border: '1px solid #ECE9F5', boxShadow: '0 2px 4px -2px rgba(37,22,84,.12),0 30px 60px -30px rgba(37,22,84,.4)', overflow: 'hidden' }}>
              <div style={{ padding: '16px 22px', borderBottom: '1px solid #F0EEF6', display: 'flex', alignItems: 'center', gap: 11, background: '#FBFAFE' }}>
                <span style={{ width: 32, height: 32, borderRadius: 9, background: '#ECFDF9', border: '1px solid #CDF5EE', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0E9384" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5V5a2 2 0 0 1 2-2h13v18H6a2 2 0 0 1-2-1.5z" /><path d="M8 7h7M8 11h7M8 15h4" /></svg></span>
                <div style={{ flex: 1 }}><div style={{ fontSize: 13.5, fontWeight: 700, color: '#1B1730' }}>General ledger</div><div style={{ fontSize: 11, color: '#8B85A0' }}>Updated automatically</div></div>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5, fontSize: 10.5, fontWeight: 700, color: '#0E9384' }}><span style={{ width: 6, height: 6, borderRadius: '50%', background: '#0E9384' }} />Live</span>
              </div>
              <div style={{ padding: '8px 22px 20px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr auto auto', gap: 16, padding: '12px 0 9px', borderBottom: '1px solid #F2F1F6' }}>
                  <span style={{ fontSize: 9.5, fontWeight: 700, letterSpacing: '.12em', color: '#B4AEC6' }}>ENTRY</span>
                  <span style={{ fontSize: 9.5, fontWeight: 700, letterSpacing: '.12em', color: '#B4AEC6' }}>AMOUNT</span>
                  <span style={{ fontSize: 9.5, fontWeight: 700, letterSpacing: '.12em', color: '#B4AEC6', minWidth: 66, textAlign: 'right' }}>BALANCE</span>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr auto auto', gap: 16, alignItems: 'center', padding: '12px 0', borderBottom: '1px solid #F7F6FA' }}>
                  <div><div style={{ fontSize: 13.5, fontWeight: 600, color: '#1B1730' }}>Meridian Co</div><div style={{ fontSize: 11, color: '#8B85A0' }}>Income · INV-0136</div></div>
                  <span style={{ fontSize: 13.5, fontWeight: 700, color: '#0E9384', fontVariantNumeric: 'tabular-nums' }}>+£860</span>
                  <span style={{ fontSize: 13.5, fontWeight: 600, color: '#5B5670', fontVariantNumeric: 'tabular-nums', minWidth: 66, textAlign: 'right' }}>£5,824</span>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr auto auto', gap: 16, alignItems: 'center', padding: '12px 0', borderBottom: '1px solid #F7F6FA' }}>
                  <div><div style={{ fontSize: 13.5, fontWeight: 600, color: '#1B1730' }}>Studio rent</div><div style={{ fontSize: 11, color: '#8B85A0' }}>Expense · July</div></div>
                  <span style={{ fontSize: 13.5, fontWeight: 700, color: '#C0344E', fontVariantNumeric: 'tabular-nums' }}>{'\u2212'}£640</span>
                  <span style={{ fontSize: 13.5, fontWeight: 600, color: '#5B5670', fontVariantNumeric: 'tabular-nums', minWidth: 66, textAlign: 'right' }}>£5,184</span>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr auto auto', gap: 16, alignItems: 'center', padding: '12px 0', borderBottom: '1px solid #F7F6FA' }}>
                  <div><div style={{ fontSize: 13.5, fontWeight: 600, color: '#1B1730' }}>Snaarp Stack</div><div style={{ fontSize: 11, color: '#8B85A0' }}>Expense · subscription</div></div>
                  <span style={{ fontSize: 13.5, fontWeight: 700, color: '#C0344E', fontVariantNumeric: 'tabular-nums' }}>{'\u2212'}£12</span>
                  <span style={{ fontSize: 13.5, fontWeight: 600, color: '#5B5670', fontVariantNumeric: 'tabular-nums', minWidth: 66, textAlign: 'right' }}>£5,172</span>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr auto auto', gap: 16, alignItems: 'center', padding: '12px 0' }}>
                  <div><div style={{ fontSize: 13.5, fontWeight: 600, color: '#1B1730' }}>Larkspur Studio</div><div style={{ fontSize: 11, color: '#8B85A0' }}>Income · INV-0139</div></div>
                  <span style={{ fontSize: 13.5, fontWeight: 700, color: '#0E9384', fontVariantNumeric: 'tabular-nums' }}>+£1,240</span>
                  <span style={{ fontSize: 13.5, fontWeight: 600, color: '#5B5670', fontVariantNumeric: 'tabular-nums', minWidth: 66, textAlign: 'right' }}>£6,412</span>
                </div>
                <div style={{ marginTop: 10, padding: '16px 18px', borderRadius: 14, background: 'linear-gradient(140deg,#F7F5FF,#F1FCF9)', border: '1px solid #EDE9FE', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div><div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '.1em', color: '#8B85A0' }}>PROFIT &amp; LOSS · JULY</div><div style={{ fontSize: 22, fontWeight: 700, letterSpacing: '-.02em', color: '#1B1730', fontVariantNumeric: 'tabular-nums', lineHeight: 1.25 }}>+£1,448</div></div>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '6px 12px', borderRadius: 999, background: '#fff', border: '1px solid #CDF5EE', fontSize: 11, fontWeight: 700, color: '#0E9384', whiteSpace: 'nowrap', flexShrink: 0 }}><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#0E9384" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19V5M5 12l7-7 7 7" /></svg>18% MoM</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ TESTIMONIALS ============ */}
      <section style={{ background: '#fff', padding: '92px 24px' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div data-books-reveal="" style={{ textAlign: 'center', maxWidth: 600, margin: '0 auto 48px' }}>
            <span style={{ fontSize: 11.5, fontWeight: 600, letterSpacing: '.14em', color: '#7C3AED', textTransform: 'uppercase' }}>What teams say</span>
            <h2 className="books-band-heading" style={{ margin: '12px 0 0' }}>Less admin, faster payment.</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 22 }}>
            <div data-books-reveal="" style={{ position: 'relative', background: '#FBFAFE', border: '1px solid #ECE7F7', borderRadius: 20, padding: '30px 28px', boxShadow: '0 18px 40px -30px rgba(124,58,237,.28)' }}>
              <svg width="30" height="30" viewBox="0 0 24 24" fill="#E4DBF7"><path d="M9.5 4C6 4 3 7 3 11v9h8v-9H6.5c0-2 1.5-3.5 3-3.5V4Zm11 0c-3.5 0-6.5 3-6.5 7v9H22v-9h-4.5c0-2 1.5-3.5 3-3.5V4Z" /></svg>
              <p style={{ fontSize: 16, lineHeight: 1.55, fontWeight: 500, color: '#211C36', margin: '16px 0 0' }}>&ldquo;I used to dread bookkeeping. Now it basically does itself as invoices get paid.&rdquo;</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginTop: 24 }}>
                <div style={{ width: 42, height: 42, borderRadius: '50%', background: '#EDE9FE', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 600, color: '#7C3AED', fontSize: 14 }}>PL</div>
                <div><div style={{ fontWeight: 600, fontSize: 14.5, color: '#1B1730' }}>Placeholder</div><div style={{ fontSize: 13, color: '#8B85A0' }}>Studio owner</div></div>
              </div>
              <span style={{ position: 'absolute', bottom: 12, right: 14, fontSize: 9, fontWeight: 600, letterSpacing: '.06em', color: '#C4BDD6', textTransform: 'uppercase' }}>TODO · real quote</span>
            </div>
            <div data-books-reveal="" data-books-reveal-delay="100" style={{ position: 'relative', background: '#FBFAFE', border: '1px solid #ECE7F7', borderRadius: 20, padding: '30px 28px', boxShadow: '0 18px 40px -30px rgba(124,58,237,.28)' }}>
              <svg width="30" height="30" viewBox="0 0 24 24" fill="#E4DBF7"><path d="M9.5 4C6 4 3 7 3 11v9h8v-9H6.5c0-2 1.5-3.5 3-3.5V4Zm11 0c-3.5 0-6.5 3-6.5 7v9H22v-9h-4.5c0-2 1.5-3.5 3-3.5V4Z" /></svg>
              <p style={{ fontSize: 16, lineHeight: 1.55, fontWeight: 500, color: '#211C36', margin: '16px 0 0' }}>&ldquo;Recurring invoices for retainer clients alone saved me hours a month.&rdquo;</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginTop: 24 }}>
                <div style={{ width: 42, height: 42, borderRadius: '50%', background: '#D5F5EF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 600, color: '#0E9384', fontSize: 14 }}>PL</div>
                <div><div style={{ fontWeight: 600, fontSize: 14.5, color: '#1B1730' }}>Placeholder</div><div style={{ fontSize: 13, color: '#8B85A0' }}>Consultant</div></div>
              </div>
              <span style={{ position: 'absolute', bottom: 12, right: 14, fontSize: 9, fontWeight: 600, letterSpacing: '.06em', color: '#C4BDD6', textTransform: 'uppercase' }}>TODO · real quote</span>
            </div>
            <div data-books-reveal="" data-books-reveal-delay="200" style={{ position: 'relative', background: '#FBFAFE', border: '1px solid #ECE7F7', borderRadius: 20, padding: '30px 28px', boxShadow: '0 18px 40px -30px rgba(124,58,237,.28)' }}>
              <svg width="30" height="30" viewBox="0 0 24 24" fill="#E4DBF7"><path d="M9.5 4C6 4 3 7 3 11v9h8v-9H6.5c0-2 1.5-3.5 3-3.5V4Zm11 0c-3.5 0-6.5 3-6.5 7v9H22v-9h-4.5c0-2 1.5-3.5 3-3.5V4Z" /></svg>
              <p style={{ fontSize: 16, lineHeight: 1.55, fontWeight: 500, color: '#211C36', margin: '16px 0 0' }}>&ldquo;Being able to see overdue invoices at a glance means I actually chase them now.&rdquo;</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginTop: 24 }}>
                <div style={{ width: 42, height: 42, borderRadius: '50%', background: '#FDE6C9', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 600, color: '#B45309', fontSize: 14 }}>PL</div>
                <div><div style={{ fontWeight: 600, fontSize: 14.5, color: '#1B1730' }}>Placeholder</div><div style={{ fontSize: 13, color: '#8B85A0' }}>Agency founder</div></div>
              </div>
              <span style={{ position: 'absolute', bottom: 12, right: 14, fontSize: 9, fontWeight: 600, letterSpacing: '.06em', color: '#C4BDD6', textTransform: 'uppercase' }}>TODO · real quote</span>
            </div>
          </div>
        </div>
      </section>

      {/* ============ FAQ ============ */}
      <section style={{ background: '#F7F7F7', padding: '92px 24px' }}>
        <div style={{ maxWidth: 820, margin: '0 auto' }}>
          <div data-books-reveal="" style={{ textAlign: 'center', marginBottom: 44 }}>
            <span style={{ fontSize: 11.5, fontWeight: 600, letterSpacing: '.14em', color: '#7C3AED', textTransform: 'uppercase' }}>Questions</span>
            <h2 className="books-band-heading" style={{ margin: '12px 0 0' }}>Books, answered.</h2>
          </div>
          <div data-books-reveal="" style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {FAQS.map((item, i) => {
              const isOpen = openFaq === i;
              return (
                <div key={i} style={{ background: '#fff', border: `1px solid ${isOpen ? '#E4DBF7' : '#EDEBF2'}`, borderRadius: 16, overflow: 'hidden', boxShadow: isOpen ? '0 16px 34px -24px rgba(124,58,237,.3)' : 'none', transition: 'border-color .2s,box-shadow .2s' }}>
                  <button onClick={() => setOpenFaq(isOpen ? -1 : i)} style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, padding: '20px 24px', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', fontFamily: 'inherit' }}>
                    <span style={{ fontSize: 16.5, fontWeight: 600, color: '#1B1730' }}>{item.q}</span>
                    <span style={{ flexShrink: 0, width: 28, height: 28, borderRadius: 8, background: isOpen ? '#7C3AED' : '#F5F3FF', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'background .2s' }}>
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke={isOpen ? '#fff' : '#7C3AED'} strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" style={{ transform: `rotate(${isOpen ? 45 : 0}deg)`, transition: 'transform .25s' }}><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg>
                    </span>
                  </button>
                  {isOpen && (
                    <div style={{ padding: '0 24px 22px', fontSize: 15, lineHeight: 1.6, color: '#5B5670', maxWidth: 660 }}>{item.a}</div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============ FINAL CTA ============ */}
      <HomeFinalCTA />

    </div>
  );
}

/* ─── Utility: parse CSS string to React style object ─── */
function parseStyle(css: string): Record<string, string> {
  const obj: Record<string, string> = {};
  css.split(';').forEach((pair) => {
    const [key, ...vals] = pair.split(':');
    if (!key || !vals.length) return;
    const prop = key.trim().replace(/-([a-z])/g, (_, c) => c.toUpperCase());
    obj[prop] = vals.join(':').trim();
  });
  return obj;
}
