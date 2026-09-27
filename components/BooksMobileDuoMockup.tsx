'use client';

import { useEffect, useRef, useState } from 'react';
import {
  Bell, FileText, Receipt, Landmark, BarChart3, Home, MoreHorizontal,
  ChevronRight, Check, Send, SlidersHorizontal, Plus, ArrowUp,
} from 'lucide-react';

const BRAND = '#7C3AED';
const MUTED = '#8A8F9E';

const PHONE_FRAME = 'linear-gradient(150deg, rgb(90,90,102) 0%, rgb(31,31,37) 30%, rgb(52,52,60) 70%, rgb(20,20,24) 100%)';
const PHONE_SHADOW = 'rgba(40,20,130,0.5) 0px 40px 70px -24px';

/* Shared device shell: metal frame -> side buttons -> black rim -> screen. */
function PhoneShell({ left, top, rotate, children, rootRef }: {
  left: number; top: number; rotate: number; children: React.ReactNode;
  rootRef?: React.Ref<HTMLDivElement>;
}) {
  return (
    <div style={{ position: 'absolute', left: `${left}px`, top: `${top}px`, width: '240px', height: '490px', borderRadius: '44px', background: PHONE_FRAME, padding: '3px', transform: `rotate(${rotate}deg)`, boxShadow: PHONE_SHADOW }}>
      <span style={{ position: 'absolute', left: '-2px', top: '104px', width: '3px', height: '28px', borderRadius: '2px', background: 'rgb(42,42,49)' }} />
      <span style={{ position: 'absolute', left: '-2px', top: '144px', width: '3px', height: '44px', borderRadius: '2px', background: 'rgb(42,42,49)' }} />
      <span style={{ position: 'absolute', right: '-2px', top: '140px', width: '3px', height: '60px', borderRadius: '2px', background: 'rgb(42,42,49)' }} />
      <div style={{ position: 'relative', width: '100%', height: '100%', borderRadius: '41px', background: 'rgb(8,8,10)', padding: '8px' }}>
        <div ref={rootRef} style={{ position: 'relative', width: '100%', height: '100%', borderRadius: '34px', background: '#fff', overflow: 'hidden', display: 'flex', flexDirection: 'column', fontFamily: 'Poppins, sans-serif', color: '#1a1a1a' }}>
          <span style={{ position: 'absolute', top: '9px', left: '50%', marginLeft: '-40px', width: '80px', height: '23px', borderRadius: '12px', background: '#000', zIndex: 30 }} />
          {children}
        </div>
      </div>
    </div>
  );
}

function StatusBar() {
  return (
    <div style={{ height: '38px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '4px 20px 0px 24px', fontSize: '11px', fontWeight: 700, flex: '0 0 auto' }}>
      <span>9:41</span><span>•••• ᯤ ▮</span>
    </div>
  );
}

export function BooksMobileDuoMockup() {
  return (
    <div style={{ position: 'relative', width: '580px', height: '540px' }}>
      <PhoneA />
      <PhoneB />
      <style>{`
        @keyframes md-slideup { from { opacity: 0; transform: translateY(14px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes md-fade { from { opacity: 0; } to { opacity: 1; } }
        @keyframes md-rowin { from { opacity: 0; transform: translateY(-8px); max-height: 0; } to { opacity: 1; transform: translateY(0); max-height: 60px; } }
      `}</style>
    </div>
  );
}

/* ═══════════════════════════ PHONE A — money flow (tap ripples) ═══════════════════════════ */
function PhoneA() {
  const [balance, setBalance] = useState(0);
  const [sheet, setSheet] = useState<null | 'invoice' | 'expense'>(null);
  const [fill, setFill] = useState(0);
  const [toast, setToast] = useState<string | null>(null);
  const [ripple, setRipple] = useState<{ x: number; y: number; k: number }>({ x: 0, y: 0, k: 0 });
  const [activeQA, setActiveQA] = useState<string | null>(null);
  const rootRef = useRef<HTMLDivElement>(null);

  // count-up balance
  useEffect(() => {
    let raf = 0; const t0 = performance.now(); const target = 550000;
    const step = (t: number) => { const p = Math.min(1, (t - t0) / 1300); setBalance(Math.round(target * (1 - Math.pow(1 - p, 3)))); if (p < 1) raf = requestAnimationFrame(step); };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, []);

  useEffect(() => {
    let cancelled = false;
    const timers: ReturnType<typeof setTimeout>[] = [];
    const wait = (ms: number) => new Promise<void>((r) => { const t = setTimeout(r, ms); timers.push(t); });
    const tap = (sel: string) => new Promise<void>((resolve) => {
      const root = rootRef.current; const el = root?.querySelector<HTMLElement>(`[data-a="${sel}"]`);
      if (root && el) {
        const rb = root.getBoundingClientRect(); const tb = el.getBoundingClientRect();
        const zoom = root.offsetWidth ? rb.width / root.offsetWidth : 1;
        setRipple((r) => ({ x: (tb.left - rb.left + tb.width / 2) / zoom, y: (tb.top - rb.top + tb.height / 2) / zoom, k: r.k + 1 }));
      }
      const t = setTimeout(resolve, 300); timers.push(t);
    });

    const run = async () => {
      while (!cancelled) {
        setSheet(null); setFill(0); setToast(null); setActiveQA(null);
        await wait(2200); if (cancelled) return;

        // Create Invoice
        setActiveQA('qa-invoice'); await tap('qa-invoice'); setActiveQA(null); setSheet('invoice'); await wait(700);
        for (let i = 1; i <= 2; i++) { await tap(`f-${i}`); setFill(i); await wait(520); if (cancelled) return; }
        await tap('sheet-send'); setSheet(null); setToast('Invoice sent · £1,200'); await wait(1700);
        setToast(null); await wait(1200); if (cancelled) return;

        // Add Expense
        setActiveQA('qa-expense'); await tap('qa-expense'); setActiveQA(null); setSheet('expense'); await wait(700);
        for (let i = 1; i <= 2; i++) { await tap(`f-${i}`); setFill(i); await wait(520); if (cancelled) return; }
        await tap('sheet-send'); setSheet(null); setFill(0); setToast('Expense saved · £210'); await wait(1700);
        setToast(null); await wait(1000);
      }
    };
    run();
    return () => { cancelled = true; timers.forEach(clearTimeout); };
  }, []);

  const gbp = '£' + balance.toLocaleString('en-GB') + '.00';
  const qa = [
    { key: 'qa-invoice', label: 'Create Invoice', Icon: FileText, c: '#2563EB', bg: '#E8F0FF' },
    { key: 'qa-expense', label: 'Add Expense', Icon: Receipt, c: '#16A34A', bg: '#E3F8EA' },
    { key: 'qa-bank', label: 'Connect Bank', Icon: Landmark, c: BRAND, bg: '#EEE9FF' },
    { key: 'qa-reports', label: 'View Reports', Icon: BarChart3, c: '#EA580C', bg: '#FFF4EC' },
  ];

  return (
    <PhoneShell left={36} top={10} rotate={-7} rootRef={rootRef}>
      <StatusBar />
      {/* app header */}
      <div style={{ padding: '10px 16px 0px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <span style={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
          <span style={{ width: '22px', height: '22px', borderRadius: '6px', background: '#EEE9FF', display: 'grid', placeItems: 'center', color: BRAND, fontWeight: 800, fontSize: '12px' }}>b</span>
          <span style={{ fontWeight: 800, fontSize: '14px', letterSpacing: '-0.05em' }}>snaarp</span>
        </span>
        <Bell size={16} color="#8C90A8" />
      </div>
      {/* balance */}
      <div style={{ margin: '18px 16px 0px' }}>
        <div style={{ fontSize: '10px', color: MUTED, fontWeight: 600 }}>Total Balance</div>
        <div style={{ fontSize: '23px', fontWeight: 800, letterSpacing: '-0.03em', marginTop: '4px' }}>{gbp}</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '3px', fontSize: '9.5px', color: '#16A34A', fontWeight: 700, marginTop: '4px' }}><ArrowUp size={11} />12% this month</div>
      </div>
      {/* quick actions */}
      <div style={{ padding: '18px 14px 0px', display: 'flex', flexDirection: 'column', gap: '9px' }}>
        {qa.map((a) => (
          <div key={a.key} data-a={a.key} style={{ display: 'flex', alignItems: 'center', gap: '11px', padding: '10px 11px', borderRadius: '12px', border: `1px solid ${activeQA === a.key ? BRAND : '#F0EFF6'}`, background: activeQA === a.key ? '#FaF8FF' : '#fff', boxShadow: 'rgba(30,20,90,0.05) 0px 3px 8px', fontSize: '11px', fontWeight: 600, transition: 'border-color 0.15s, background 0.15s' }}>
            <span style={{ width: '28px', height: '28px', borderRadius: '9px', display: 'grid', placeItems: 'center', background: a.bg, color: a.c }}><a.Icon size={16} /></span>
            {a.label}
            <ChevronRight size={15} style={{ marginLeft: 'auto', color: '#c3c6d6' }} />
          </div>
        ))}
      </div>
      {/* bottom nav */}
      <div style={{ marginTop: 'auto', borderTop: '1px solid #F0EFF6', display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', padding: '8px 4px 18px', position: 'relative' }}>
        {[{ l: 'Home', I: Home, on: true }, { l: 'Invoices', I: FileText }, { l: 'Expenses', I: Receipt }, { l: 'More', I: MoreHorizontal }].map((n) => (
          <div key={n.l} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2px', fontSize: '8px', fontWeight: 600, color: n.on ? BRAND : '#A3A7BD' }}><n.I size={17} />{n.l}</div>
        ))}
        <span style={{ position: 'absolute', bottom: '6px', left: '50%', marginLeft: '-38px', width: '76px', height: '4px', borderRadius: '3px', background: 'rgb(11,13,42)' }} />
      </div>

      {/* bottom sheet */}
      {sheet && (
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(17,17,25,0.3)', zIndex: 20, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', animation: 'md-fade 0.25s ease' }}>
          <div style={{ background: '#fff', borderRadius: '20px 20px 34px 34px', padding: '16px 16px 22px', animation: 'md-slideup 0.32s cubic-bezier(0.22,1,0.36,1)' }}>
            <div style={{ width: '34px', height: '4px', borderRadius: '3px', background: '#e2e3ea', margin: '0 auto 12px' }} />
            <div style={{ fontSize: '13px', fontWeight: 800, marginBottom: '12px' }}>{sheet === 'invoice' ? 'New Invoice' : 'Add Expense'}</div>
            <AField label={sheet === 'invoice' ? 'Customer' : 'Merchant'} value={sheet === 'invoice' ? 'BrightCore Ltd' : 'AWS Hosting'} filled={fill >= 1} dataA="f-1" />
            <AField label="Amount" value={sheet === 'invoice' ? '£1,200.00' : '£210.00'} filled={fill >= 2} dataA="f-2" />
            <div data-a="sheet-send" style={{ marginTop: '6px', background: BRAND, color: '#fff', borderRadius: '11px', padding: '11px', textAlign: 'center', fontSize: '11px', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}>
              <Send size={13} /> {sheet === 'invoice' ? 'Create & Send' : 'Save Expense'}
            </div>
          </div>
        </div>
      )}
      {/* toast */}
      {toast && (
        <div style={{ position: 'absolute', bottom: '78px', left: '14px', right: '14px', zIndex: 25, background: '#111827', color: '#fff', borderRadius: '11px', padding: '10px 12px', fontSize: '10px', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '7px', animation: 'md-slideup 0.3s ease' }}>
          <span style={{ width: '16px', height: '16px', borderRadius: '50%', background: '#22C55E', display: 'grid', placeItems: 'center' }}><Check size={11} color="#fff" /></span>{toast}
        </div>
      )}
      {/* tap ripple */}
      <span key={ripple.k} style={{ position: 'absolute', left: ripple.x, top: ripple.y, width: '40px', height: '40px', marginLeft: '-20px', marginTop: '-20px', borderRadius: '50%', background: 'rgba(124,58,237,0.28)', pointerEvents: 'none', zIndex: 40, animation: ripple.k ? 'md-ripple-a 0.5s ease-out forwards' : 'none' }} />
      <style>{`@keyframes md-ripple-a { from { opacity: 0.85; transform: scale(0.3); } to { opacity: 0; transform: scale(1.8); } }`}</style>
    </PhoneShell>
  );
}

function AField({ label, value, filled, dataA }: { label: string; value: string; filled: boolean; dataA: string }) {
  return (
    <div style={{ marginBottom: '10px' }}>
      <div style={{ fontSize: '9px', fontWeight: 600, color: MUTED, marginBottom: '4px' }}>{label}</div>
      <div data-a={dataA} style={{ height: '30px', border: `1px solid ${filled ? BRAND : '#e6e5ef'}`, borderRadius: '9px', padding: '0 11px', display: 'flex', alignItems: 'center', fontSize: '10.5px', color: filled ? '#1a1a1a' : '#bbb', background: '#fff', transition: 'border-color 0.2s' }}>
        {filled ? value : `Select ${label.toLowerCase()}…`}
      </div>
    </div>
  );
}

/* ═══════════════════════════ PHONE B — invoices tabs + live list ═══════════════════════════ */
type Row = { who: string; no: string; date: string; amt: string; status: 'Paid' | 'Sent' | 'Overdue' };
const ALL_ROWS: Row[] = [
  { who: 'BrightCore Ltd', no: 'INV-0023', date: '12 Jun', amt: '£1,200.00', status: 'Paid' },
  { who: 'Metro Design', no: 'INV-0022', date: '09 Jun', amt: '£2,800.00', status: 'Sent' },
  { who: 'Nexa Tech', no: 'INV-0021', date: '28 May', amt: '£4,800.00', status: 'Overdue' },
  { who: 'Amara Okafor', no: 'INV-0020', date: '24 May', amt: '£960.00', status: 'Paid' },
  { who: 'Lumen Studio', no: 'INV-0019', date: '18 May', amt: '£1,450.00', status: 'Sent' },
];
const NEW_ROW: Row = { who: 'BrightCore Ltd', no: 'INV-0024', date: 'Today', amt: '£1,200.00', status: 'Sent' };
const STATUS_STYLE: Record<Row['status'], { c: string; bg: string }> = {
  Paid: { c: '#15803D', bg: '#DCFCE7' },
  Sent: { c: '#2563EB', bg: '#EFF6FF' },
  Overdue: { c: '#DC2626', bg: '#FEE2E2' },
};
const TABS = ['All', 'Paid', 'Overdue'] as const;
type Tab = typeof TABS[number];

function PhoneB() {
  const [tab, setTab] = useState<Tab>('All');
  const [rows, setRows] = useState<Row[]>(ALL_ROWS);
  const [added, setAdded] = useState(false);
  const [btnPulse, setBtnPulse] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let cancelled = false;
    const timers: ReturnType<typeof setTimeout>[] = [];
    const wait = (ms: number) => new Promise<void>((r) => { const t = setTimeout(r, ms); timers.push(t); });

    const run = async () => {
      // offset start so the two phones are visibly out of phase
      await wait(900);
      while (!cancelled) {
        setTab('All'); setRows(ALL_ROWS); setAdded(false);
        await wait(2100); if (cancelled) return;
        setTab('Paid'); await wait(2100); if (cancelled) return;
        setTab('Overdue'); await wait(2100); if (cancelled) return;
        setTab('All'); await wait(1400); if (cancelled) return;
        // "Create Invoice" -> new row slides in on top
        setBtnPulse(true); await wait(260); setBtnPulse(false);
        setRows([NEW_ROW, ...ALL_ROWS]); setAdded(true);
        await wait(2600); if (cancelled) return;
      }
    };
    run();
    return () => { cancelled = true; timers.forEach(clearTimeout); };
  }, []);

  const shown = rows.filter((r) => tab === 'All' || r.status === tab);

  return (
    <PhoneShell left={310} top={44} rotate={1.5} rootRef={rootRef}>
      <StatusBar />
      {/* header */}
      <div style={{ padding: '12px 16px 0px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <span style={{ fontSize: '16px', fontWeight: 800, letterSpacing: '-0.02em' }}>Invoices</span>
        <SlidersHorizontal size={16} color="#8C90A8" />
      </div>
      {/* tabs */}
      <div style={{ margin: '14px 14px 0px', padding: '3px', borderRadius: '10px', background: '#F4F3F9', display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '2px' }}>
        {TABS.map((t) => {
          const on = t === tab;
          return (
            <button key={t} style={{ height: '26px', border: 'none', borderRadius: '8px', fontSize: '10px', fontWeight: 700, cursor: 'pointer', background: on ? '#fff' : 'transparent', color: on ? BRAND : '#8C90A8', boxShadow: on ? 'rgba(30,20,90,0.1) 0px 2px 6px' : 'none', transition: '0.2s' }}>{t}</button>
          );
        })}
      </div>
      {/* list */}
      <div style={{ padding: '12px 14px 0px', display: 'flex', flexDirection: 'column', gap: '8px', overflow: 'hidden', flex: '1 1 0%' }}>
        {shown.slice(0, 4).map((r, i) => {
          const st = STATUS_STYLE[r.status];
          const isNew = added && i === 0 && r.no === NEW_ROW.no;
          return (
            <div key={r.no + tab} style={{ background: isNew ? '#F5F1FF' : '#fff', border: `1px solid ${isNew ? '#E4D9FF' : '#F0EFF6'}`, borderRadius: '11px', padding: '10px 11px', boxShadow: 'rgba(30,20,90,0.04) 0px 2px 6px', animation: `md-fade 0.4s ${i * 0.05}s both` }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '4px' }}>
                <span style={{ fontSize: '10.5px', fontWeight: 700 }}>{r.who}</span>
                <span style={{ marginLeft: 'auto', fontSize: '7.5px', fontWeight: 700, color: st.c, background: st.bg, borderRadius: '5px', padding: '2px 7px' }}>{r.status}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ fontSize: '8.5px', color: MUTED }}>{r.no} · {r.date}</span>
                <span style={{ fontSize: '11px', fontWeight: 700 }}>{r.amt}</span>
              </div>
            </div>
          );
        })}
      </div>
      {/* create invoice button */}
      <div style={{ padding: '0 14px 20px', flex: '0 0 auto' }}>
        <button style={{ width: '100%', height: '40px', border: 'none', borderRadius: '11px', background: BRAND, color: '#fff', fontSize: '12px', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', boxShadow: 'rgba(124,58,237,0.7) 0px 10px 18px -8px', transform: btnPulse ? 'scale(0.95)' : 'scale(1)', transition: 'transform 0.15s' }}>
          <Plus size={16} /> Create Invoice
        </button>
      </div>
      <span style={{ position: 'absolute', bottom: '7px', left: '50%', marginLeft: '-38px', width: '76px', height: '4px', borderRadius: '3px', background: 'rgb(11,13,42)' }} />
    </PhoneShell>
  );
}
