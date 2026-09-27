'use client';

import { useEffect, useRef, useState } from 'react';
import {
  LayoutDashboard, FileText, Receipt, ShoppingCart, Landmark, Contact,
  Percent, BarChart3, Settings, Search, MessageSquare, Bell, LayoutGrid,
  Lock, Wallet, ShoppingBag, TrendingUp, ArrowUp, ArrowDown, CalendarDays,
  ChevronDown, Plus, Send, Check, X,
} from 'lucide-react';

const BRAND = '#7C3AED';
const MUTED = '#6b7090';

// ── sidebar nav (matches the frozen markup) ─────────────────────────────
const NAV: { key: string; Icon: typeof LayoutDashboard; screen?: Screen }[] = [
  { key: 'Dashboard', Icon: LayoutDashboard, screen: 'dashboard' },
  { key: 'Invoices', Icon: FileText, screen: 'invoices' },
  { key: 'Expenses', Icon: Receipt },
  { key: 'Purchases', Icon: ShoppingCart },
  { key: 'Banking', Icon: Landmark },
  { key: 'Contacts', Icon: Contact },
  { key: 'Taxes', Icon: Percent },
  { key: 'Reports', Icon: BarChart3, screen: 'reports' },
  { key: 'Settings', Icon: Settings },
];

type Screen = 'dashboard' | 'invoices' | 'reports';

// cash-flow chart points (matches the frozen path geometry, x over 0..330, y over 0..136)
const CF = [
  { x: 0, y: 53.5, m: 'Jan', v: '£12,400' },
  { x: 55, y: 34.5, m: 'Feb', v: '£19,800' },
  { x: 110, y: 59.4, m: 'Mar', v: '£15,100' },
  { x: 165, y: 67.5, m: 'Apr', v: '£13,600' },
  { x: 220, y: 46.2, m: 'May', v: '£21,300' },
  { x: 275, y: 7.0, m: 'Jun', v: '£28,450' },
  { x: 330, y: 39.4, m: 'Jul', v: '£18,900' },
];
const CF_AREA = 'M0.0 53.5 C9.2 50.3,36.7 33.5,55.0 34.5 C73.3 35.4,91.7 53.9,110.0 59.4 C128.3 64.9,146.7 69.7,165.0 67.5 C183.3 65.4,201.7 56.3,220.0 46.2 C238.3 36.2,256.7 8.2,275.0 7.0 C293.3 5.9,320.8 34.0,330.0 39.4 L330 136 L0 136 Z';
const CF_LINE = 'M0.0 53.5 C9.2 50.3,36.7 33.5,55.0 34.5 C73.3 35.4,91.7 53.9,110.0 59.4 C128.3 64.9,146.7 69.7,165.0 67.5 C183.3 65.4,201.7 56.3,220.0 46.2 C238.3 36.2,256.7 8.2,275.0 7.0 C293.3 5.9,320.8 34.0,330.0 39.4';

type Inv = { no: string; who: string; date: string; amt: string; status: string; sc: string; sbg: string };
const BASE_INVOICES: Inv[] = [
  { no: 'INV-0041', who: 'Metro Design Studio', date: '09 Jun', amt: '£2,800.00', status: 'Sent', sc: '#2563EB', sbg: '#EFF6FF' },
  { no: 'INV-0040', who: 'Nexa Technologies', date: '28 May', amt: '£4,800.00', status: 'Overdue', sc: '#DC2626', sbg: '#FEE2E2' },
  { no: 'INV-0039', who: 'Amara Okafor', date: '24 May', amt: '£960.00', status: 'Paid', sc: '#15803D', sbg: '#DCFCE7' },
  { no: 'INV-0038', who: 'BrightCore Ltd', date: '18 May', amt: '£1,450.00', status: 'Paid', sc: '#15803D', sbg: '#DCFCE7' },
];
const NEW_INVOICE: Inv = { no: 'INV-0042', who: 'BrightCore Ltd', date: 'Today', amt: '£1,200.00', status: 'Sent', sc: '#2563EB', sbg: '#EFF6FF' };

export function BooksDashboardPreviewMockup({ autoplay = true }: { autoplay?: boolean } = {}) {
  const [screen, setScreen] = useState<Screen>('dashboard');
  const [nav, setNav] = useState('Dashboard');
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [profit, setProfit] = useState(0);
  const [chartT, setChartT] = useState(0);           // 0..1 chart draw progress
  const [tipIdx, setTipIdx] = useState(5);           // active cash-flow point (Jun default)
  const [invoices, setInvoices] = useState(BASE_INVOICES);
  const [composer, setComposer] = useState(false);   // invoice composer overlay
  const [invFill, setInvFill] = useState(0);
  const [toast, setToast] = useState<string | null>(null);
  const [newRow, setNewRow] = useState(false);       // highlight the freshly added invoice
  const [reportsT, setReportsT] = useState(0);       // reports animation progress

  const [cur, setCur] = useState({ x: 360, y: 250 });
  const [press, setPress] = useState(false);
  const [ripple, setRipple] = useState<{ x: number; y: number; k: number }>({ x: 0, y: 0, k: 0 });
  const rootRef = useRef<HTMLDivElement>(null);

  // count-up stats when dashboard visible
  useEffect(() => {
    if (screen !== 'dashboard') return;
    let raf = 0; const t0 = performance.now();
    const step = (t: number) => {
      const p = Math.min(1, (t - t0) / 1100); const e = 1 - Math.pow(1 - p, 3);
      setIncome(Math.round(25600 * e)); setExpense(Math.round(8430 * e)); setProfit(Math.round(67070 * e));
      setChartT(p);
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [screen]);

  // reports draw-in
  useEffect(() => {
    if (screen !== 'reports') { setReportsT(0); return; }
    let raf = 0; const t0 = performance.now();
    const step = (t: number) => { const p = Math.min(1, (t - t0) / 900); setReportsT(p); if (p < 1) raf = requestAnimationFrame(step); };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [screen]);

  // ── cursor-driven autoplay ────────────────────────────────────────────
  useEffect(() => {
    if (!autoplay) return;
    let cancelled = false;
    const timers: ReturnType<typeof setTimeout>[] = [];
    const wait = (ms: number) => new Promise<void>((r) => { const t = setTimeout(r, ms); timers.push(t); });

    // move cursor to a data-d target's center (zoom-aware)
    const moveTo = (sel: string) => new Promise<void>((resolve) => {
      const root = rootRef.current;
      const el = root?.querySelector<HTMLElement>(`[data-d="${sel}"]`);
      if (!root || !el) { resolve(); return; }
      const rb = root.getBoundingClientRect(); const tb = el.getBoundingClientRect();
      const zoom = root.offsetWidth ? rb.width / root.offsetWidth : 1;
      const x = (tb.left - rb.left + tb.width / 2) / zoom;
      const y = (tb.top - rb.top + tb.height / 2) / zoom;
      setCur({ x, y });
      const t = setTimeout(resolve, 620); timers.push(t);
    });
    const click = () => new Promise<void>((resolve) => {
      setPress(true);
      setCur((c) => { setRipple((r) => ({ x: c.x, y: c.y, k: r.k + 1 })); return c; });
      const t1 = setTimeout(() => setPress(false), 150);
      const t2 = setTimeout(resolve, 260); timers.push(t1, t2);
    });
    const tap = async (sel: string) => { await moveTo(sel); await click(); };

    const reset = () => {
      setScreen('dashboard'); setNav('Dashboard'); setComposer(false); setInvFill(0);
      setInvoices(BASE_INVOICES); setToast(null); setNewRow(false); setTipIdx(5);
      setCur({ x: 360, y: 250 });
    };

    const run = async () => {
      while (!cancelled) {
        reset();
        await wait(1600); if (cancelled) return;

        // 1) glide the tooltip across the cash-flow chart
        for (let i = 0; i <= 6; i++) { await moveTo(`cf-${i}`); setTipIdx(i); await wait(340); if (cancelled) return; }
        await wait(500);

        // 2) Quick Action -> Create Invoice (composer)
        await tap('qa-invoice'); setComposer(true); await wait(800);
        for (let i = 1; i <= 3; i++) { await tap(`cf-field-${i}`); setInvFill(i); await wait(480); if (cancelled) return; }
        await tap('composer-send');
        setComposer(false); setToast('Invoice INV-0042 sent to BrightCore Ltd'); await wait(1500);
        setToast(null); if (cancelled) return;

        // 3) sidebar -> Invoices (new row on top, highlighted)
        await tap('nav-Invoices'); setNav('Invoices'); setScreen('invoices');
        setInvoices([NEW_INVOICE, ...BASE_INVOICES]); setNewRow(true); await wait(2400);
        setNewRow(false); if (cancelled) return;

        // 4) sidebar -> Reports (charts animate)
        await tap('nav-Reports'); setNav('Reports'); setScreen('reports'); await wait(2600);
        if (cancelled) return;

        // 5) back to Dashboard
        await tap('nav-Dashboard'); setNav('Dashboard'); setScreen('dashboard'); await wait(1400);
      }
    };
    run();
    return () => { cancelled = true; timers.forEach(clearTimeout); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoplay]);

  const gbp = (n: number) => '£' + n.toLocaleString('en-GB');

  return (
    <div
      ref={rootRef}
      style={{ position: 'relative', width: '100%', height: '100%', borderRadius: '6px', overflow: 'hidden', background: '#fff', display: 'flex', flexDirection: 'column', fontFamily: 'Poppins, sans-serif', color: '#1a1a1a', fontSize: '10px' }}
    >
      {/* ── browser chrome ── */}
      <div style={{ height: '28px', background: '#F4F3F8', borderBottom: '1px solid #E8E7F0', display: 'flex', alignItems: 'center', gap: '12px', padding: '0 12px', flex: '0 0 auto' }}>
        <span style={{ display: 'flex', gap: '5px' }}>
          <span style={{ width: '9px', height: '9px', borderRadius: '50%', background: '#FF5F57' }} />
          <span style={{ width: '9px', height: '9px', borderRadius: '50%', background: '#FEBC2E' }} />
          <span style={{ width: '9px', height: '9px', borderRadius: '50%', background: '#28C840' }} />
        </span>
        <span style={{ margin: '0 auto', width: '280px', height: '17px', borderRadius: '5px', background: '#fff', border: '1px solid #E8E7F0', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px', fontSize: '8.5px', color: MUTED }}>
          <Lock size={9} /> books.snaarp.com/{screen === 'invoices' ? 'invoices' : screen === 'reports' ? 'reports' : 'dashboard'}
        </span>
      </div>

      {/* ── app top bar ── */}
      <div style={{ height: '36px', borderBottom: '1px solid #F0EFF6', display: 'flex', alignItems: 'center', padding: '0 14px', gap: '14px', flex: '0 0 auto' }}>
        <span style={{ display: 'flex', alignItems: 'center', gap: '6px', width: '112px' }}>
          <span style={{ width: '17px', height: '17px', borderRadius: '5px', background: '#EEE9FF', display: 'grid', placeItems: 'center', color: BRAND, fontWeight: 800, fontSize: '9px' }}>b</span>
          <span style={{ fontWeight: 800, fontSize: '12px', letterSpacing: '-0.05em' }}>snaarp</span>
        </span>
        <span style={{ width: '300px', height: '22px', borderRadius: '7px', background: '#F5F5FA', display: 'flex', alignItems: 'center', gap: '6px', padding: '0 8px', color: '#A3A7BD', fontSize: '9px' }}>
          <Search size={11} /> Search…<span style={{ marginLeft: 'auto', fontSize: '8px', border: '1px solid #E3E2EC', borderRadius: '4px', padding: '0 4px' }}>⌘K</span>
        </span>
        <span style={{ marginLeft: 'auto', display: 'flex', gap: '12px', alignItems: 'center', color: '#8C90A8' }}>
          <MessageSquare size={13} /><Bell size={13} /><LayoutGrid size={13} />
          <span style={{ width: '20px', height: '20px', borderRadius: '50%', background: 'linear-gradient(135deg,#7C4DFF,#6D28D9)', color: '#fff', fontSize: '8px', fontWeight: 700, display: 'grid', placeItems: 'center' }}>VA</span>
        </span>
      </div>

      {/* ── body: sidebar + screen ── */}
      <div style={{ flex: '1 1 0%', display: 'flex', minHeight: 0 }}>
        {/* sidebar */}
        <div style={{ width: '126px', borderRight: '1px solid #F0EFF6', padding: '12px 8px', display: 'flex', flexDirection: 'column', gap: '3px', flex: '0 0 auto' }}>
          {NAV.map((n) => {
            const active = n.key === nav;
            return (
              <div key={n.key} data-d={`nav-${n.key}`} style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '6px 9px', borderRadius: '7px', fontSize: '9.5px', background: active ? '#F1EDFF' : 'transparent', color: active ? BRAND : MUTED, fontWeight: active ? 700 : 500, transition: 'background 0.2s, color 0.2s' }}>
                <n.Icon size={13} /><span>{n.key}</span>
              </div>
            );
          })}
        </div>

        {/* screen content */}
        <div style={{ flex: '1 1 0%', minWidth: 0, position: 'relative', background: '#FCFCFE', overflow: 'hidden' }}>
          <div key={screen} style={{ position: 'absolute', inset: 0, padding: '16px 18px', display: 'flex', flexDirection: 'column', gap: '12px', animation: 'bd-slide 0.42s cubic-bezier(0.22,1,0.36,1)' }}>
            {screen === 'dashboard' && (
              <DashboardScreen income={gbp(income)} expense={gbp(expense)} profit={gbp(profit)} chartT={chartT} tipIdx={tipIdx} />
            )}
            {screen === 'invoices' && <InvoicesScreen invoices={invoices} newRow={newRow} />}
            {screen === 'reports' && <ReportsScreen t={reportsT} />}
          </div>

          {/* invoice composer overlay */}
          {composer && (
            <div style={{ position: 'absolute', inset: 0, background: 'rgba(17,17,25,0.28)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 15, animation: 'bd-fade 0.25s ease' }}>
              <div style={{ width: '78%', background: '#fff', borderRadius: '12px', boxShadow: 'rgba(20,10,60,0.28) 0px 24px 60px -20px', padding: '14px 16px', animation: 'bd-pop 0.3s cubic-bezier(0.22,1.4,0.5,1)' }}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '12px' }}>
                  <span style={{ fontSize: '12px', fontWeight: 800 }}>New Invoice</span>
                  <X size={13} style={{ marginLeft: 'auto', color: '#aaa' }} />
                </div>
                <CField label="Customer" value="BrightCore Ltd" filled={invFill >= 1} dataD="cf-field-1" />
                <CField label="Item" value="Marketing Retainer" filled={invFill >= 2} dataD="cf-field-2" />
                <CField label="Amount" value="£1,200.00" filled={invFill >= 3} dataD="cf-field-3" />
                <div style={{ display: 'flex', alignItems: 'center', marginTop: '12px' }}>
                  <span style={{ fontSize: '9px', color: MUTED }}>Total</span>
                  <span style={{ marginLeft: '6px', fontSize: '13px', fontWeight: 800 }}>{invFill >= 3 ? '£1,200.00' : '£0.00'}</span>
                  <span data-d="composer-send" style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '5px', background: BRAND, color: '#fff', borderRadius: '8px', padding: '8px 14px', fontSize: '9.5px', fontWeight: 700 }}>
                    <Send size={11} /> Create &amp; Send
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* toast */}
          {toast && (
            <div style={{ position: 'absolute', bottom: '14px', left: '50%', transform: 'translateX(-50%)', zIndex: 18, background: '#111827', color: '#fff', borderRadius: '9px', padding: '8px 13px', fontSize: '9px', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '7px', whiteSpace: 'nowrap', boxShadow: 'rgba(20,10,60,0.3) 0px 12px 28px -10px', animation: 'bd-pop 0.3s ease' }}>
              <span style={{ width: '15px', height: '15px', borderRadius: '50%', background: '#22C55E', display: 'grid', placeItems: 'center' }}><Check size={10} color="#fff" /></span>
              {toast}
            </div>
          )}
        </div>
      </div>

      {/* ── cursor + click ripple ── */}
      <span
        key={ripple.k}
        style={{ position: 'absolute', left: ripple.x, top: ripple.y, width: '26px', height: '26px', marginLeft: '-13px', marginTop: '-13px', borderRadius: '50%', border: `2px solid ${BRAND}`, background: 'rgba(124,58,237,0.18)', pointerEvents: 'none', zIndex: 50, animation: ripple.k ? 'bd-ripple 0.55s ease-out forwards' : 'none' }}
      />
      <div style={{ position: 'absolute', left: cur.x, top: cur.y, zIndex: 55, pointerEvents: 'none', transform: `translate(-3px,-2px) scale(${press ? 0.82 : 1})`, transition: 'left 0.55s cubic-bezier(0.5,0,0.2,1), top 0.55s cubic-bezier(0.5,0,0.2,1), transform 0.13s ease', filter: 'drop-shadow(0 3px 5px rgba(20,10,60,0.35))' }}>
        <svg width="20" height="24" viewBox="0 0 20 24" fill="none">
          <path d="M2 2 L2 18 L6.2 14.2 L9 20.6 L11.6 19.4 L8.8 13.2 L14.4 13.2 Z" fill="#fff" stroke="#1a1a2e" strokeWidth="1.3" strokeLinejoin="round" />
        </svg>
      </div>

      <style>{`
        @keyframes bd-slide { from { opacity: 0; transform: translateX(12px); } to { opacity: 1; transform: translateX(0); } }
        @keyframes bd-fade { from { opacity: 0; } to { opacity: 1; } }
        @keyframes bd-pop { from { opacity: 0; transform: scale(0.94) translate(-50%,4px); } to { opacity: 1; transform: scale(1) translate(-50%,0); } }
        @keyframes bd-ripple { from { opacity: 0.9; transform: scale(0.3); } to { opacity: 0; transform: scale(2.1); } }
        @keyframes bd-rise { from { transform: scaleY(0); } to { transform: scaleY(1); } }
      `}</style>
    </div>
  );
}

/* ═══════════ composer field ═══════════ */
function CField({ label, value, filled, dataD }: { label: string; value: string; filled: boolean; dataD: string }) {
  return (
    <div style={{ marginBottom: '9px' }}>
      <div style={{ fontSize: '8.5px', fontWeight: 600, color: MUTED, marginBottom: '3px' }}>{label}</div>
      <div data-d={dataD} style={{ height: '26px', border: `1px solid ${filled ? BRAND : '#E6E5EF'}`, borderRadius: '7px', padding: '0 10px', display: 'flex', alignItems: 'center', fontSize: '9.5px', color: filled ? '#1a1a1a' : '#bbb', background: '#fff', transition: 'border-color 0.2s' }}>
        {filled ? value : `Select ${label.toLowerCase()}…`}
      </div>
    </div>
  );
}

/* ═══════════ Dashboard ═══════════ */
function DashboardScreen({ income, expense, profit, chartT, tipIdx }: { income: string; expense: string; profit: string; chartT: number; tipIdx: number }) {
  const stats = [
    { label: 'Income', val: income, delta: '12%', up: true, Icon: Wallet, c: '#2563EB', bg: '#E8F0FF' },
    { label: 'Expenses', val: expense, delta: '9%', up: false, Icon: ShoppingBag, c: '#EA580C', bg: '#FFEDE2' },
    { label: 'Profit', val: profit, delta: '16%', up: true, Icon: TrendingUp, c: '#16A34A', bg: '#E3F8EA' },
  ];
  const tip = CF[tipIdx];
  const drawLen = 620;
  return (
    <>
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
        <div>
          <div style={{ fontSize: '16px', fontWeight: 800, letterSpacing: '-0.02em', display: 'flex', alignItems: 'center', gap: '5px' }}>Good morning, Victor 👋</div>
          <div style={{ fontSize: '9px', color: '#8C90A8', marginTop: '3px' }}>Here&apos;s your business overview for today</div>
        </div>
        <span style={{ height: '24px', border: '1px solid #ECEBF5', background: '#fff', borderRadius: '7px', padding: '0 8px', display: 'flex', alignItems: 'center', gap: '4px', fontSize: '9px', fontWeight: 600 }}>
          <CalendarDays size={11} color="#8C90A8" /> Last 30 days <ChevronDown size={12} color="#8C90A8" />
        </span>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '10px' }}>
        {stats.map((s) => (
          <div key={s.label} style={{ background: '#fff', border: '1px solid #F0EFF6', borderRadius: '10px', padding: '10px 12px', boxShadow: 'rgba(30,20,90,0.04) 0px 2px 8px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '9px', color: MUTED, fontWeight: 600 }}>
              <span style={{ width: '15px', height: '15px', borderRadius: '4px', display: 'grid', placeItems: 'center', background: s.bg, color: s.c }}><s.Icon size={10} /></span>{s.label}
            </div>
            <div style={{ fontSize: '18px', fontWeight: 800, letterSpacing: '-0.02em', marginTop: '7px' }}>{s.val}</div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '2px', marginTop: '5px', fontSize: '8.5px', fontWeight: 700, padding: '1px 5px', borderRadius: '4px', background: s.up ? '#E7F8EE' : '#FDECEC', color: s.up ? '#16A34A' : '#E11D48' }}>
              {s.up ? <ArrowUp size={9} /> : <ArrowDown size={9} />}{s.delta}
            </div>
          </div>
        ))}
      </div>

      <div style={{ flex: '1 1 0%', minHeight: 0, display: 'grid', gridTemplateColumns: 'minmax(0,1fr) 150px', gap: '10px' }}>
        {/* cash flow chart */}
        <div style={{ background: '#fff', border: '1px solid #F0EFF6', borderRadius: '10px', padding: '10px 12px', display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '10.5px', fontWeight: 700 }}>Total Cash Flow</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '8.5px', color: MUTED, fontWeight: 600, border: '1px solid #F0EFF6', borderRadius: '5px', padding: '2px 6px' }}>
              <span style={{ width: '7px', height: '7px', borderRadius: '2px', background: BRAND }} />Balance
            </span>
          </div>
          <div style={{ display: 'flex', gap: '6px', marginTop: '8px', flex: '1 1 0%' }}>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', fontSize: '7px', color: '#A3A7BD', paddingBottom: '14px', width: '20px' }}>
              <span>£30k</span><span>£20k</span><span>£10k</span><span>0</span>
            </div>
            <div style={{ position: 'relative', width: '330px', height: '150px' }}>
              <svg width="330" height="136" style={{ position: 'absolute', left: 0, top: 0, overflow: 'visible' }}>
                {[0, 45, 90, 136].map((y, i) => <line key={y} x1={0} y1={y} x2={330} y2={y} style={{ stroke: i === 3 ? '#ECEBF5' : '#F3F2F8' }} />)}
                <path d={CF_AREA} style={{ fill: 'rgba(124,58,237,0.07)', opacity: chartT }} />
                <path d={CF_LINE} style={{ fill: 'none', stroke: BRAND, strokeWidth: 2.2, strokeLinecap: 'round', strokeDasharray: drawLen, strokeDashoffset: drawLen * (1 - chartT) }} />
                <line x1={tip.x} y1={tip.y} x2={tip.x} y2={136} style={{ stroke: BRAND, strokeWidth: 1, strokeDasharray: '3,3', opacity: 0.5 }} />
                {CF.map((p, i) => <circle key={i} cx={p.x} cy={p.y} r={2.6} style={{ fill: '#fff', stroke: BRAND, strokeWidth: 1.6, opacity: chartT }} />)}
                <circle cx={tip.x} cy={tip.y} r={5} style={{ fill: BRAND, stroke: '#fff', strokeWidth: 2.5, opacity: chartT }} />
              </svg>
              {/* tooltip */}
              <div style={{ position: 'absolute', left: tip.x, top: tip.y - 22, transform: 'translateX(-50%)', background: BRAND, color: '#fff', fontSize: '8.5px', fontWeight: 700, padding: '3px 7px', borderRadius: '5px', whiteSpace: 'nowrap', boxShadow: 'rgba(124,58,237,0.6) 0px 6px 14px -4px', transition: 'left 0.3s, top 0.3s', opacity: chartT }}>{tip.v}</div>
              {/* invisible hover targets for the cursor */}
              <div style={{ position: 'absolute', left: 0, right: 0, top: 0, height: '136px', display: 'flex' }}>
                {CF.map((_, i) => <div key={i} data-d={`cf-${i}`} style={{ flex: '1 1 0%' }} />)}
              </div>
              <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, display: 'flex', justifyContent: 'space-between', fontSize: '7.5px', color: '#A3A7BD' }}>
                {CF.map((p) => <span key={p.m}>{p.m}</span>)}
              </div>
            </div>
          </div>
        </div>

        {/* quick actions */}
        <div style={{ background: '#fff', border: '1px solid #F0EFF6', borderRadius: '10px', padding: '10px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
          <span style={{ fontSize: '10.5px', fontWeight: 700, marginBottom: '2px' }}>Quick Actions</span>
          {[
            { key: 'qa-invoice', label: 'Create Invoice', Icon: FileText, c: '#2563EB', bg: '#E8F0FF' },
            { key: 'qa-expense', label: 'Add Expense', Icon: Receipt, c: '#16A34A', bg: '#E3F8EA' },
            { key: 'qa-bank', label: 'Connect Bank', Icon: Landmark, c: BRAND, bg: '#EEE9FF' },
            { key: 'qa-reports', label: 'View Reports', Icon: BarChart3, c: BRAND, bg: '#F3E8FF' },
          ].map((a) => (
            <div key={a.key} data-d={a.key} style={{ display: 'flex', alignItems: 'center', gap: '7px', padding: '7px 8px', borderRadius: '8px', border: '1px solid #F0EFF6', fontSize: '8.5px', fontWeight: 600, whiteSpace: 'nowrap' }}>
              <span style={{ width: '18px', height: '18px', borderRadius: '6px', display: 'grid', placeItems: 'center', background: a.bg, color: a.c }}><a.Icon size={11} /></span>{a.label}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

/* ═══════════ Invoices ═══════════ */
function InvoicesScreen({ invoices, newRow }: { invoices: Inv[]; newRow: boolean }) {
  return (
    <>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div>
          <div style={{ fontSize: '15px', fontWeight: 800 }}>Invoices</div>
          <div style={{ fontSize: '9px', color: '#8C90A8', marginTop: '2px' }}>{invoices.length} invoices · £{invoices.length > 4 ? '11,210' : '10,010'}.00 total</div>
        </div>
        <span style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '5px', background: BRAND, color: '#fff', borderRadius: '8px', padding: '7px 11px', fontSize: '9px', fontWeight: 700 }}><Plus size={11} /> New Invoice</span>
      </div>
      <div style={{ background: '#fff', border: '1px solid #F0EFF6', borderRadius: '10px', overflow: 'hidden' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 1.6fr 1fr 1fr 0.9fr', padding: '8px 12px', fontSize: '8px', fontWeight: 700, color: '#A3A7BD', textTransform: 'uppercase', letterSpacing: '0.04em', background: '#FAFAFC', borderBottom: '1px solid #F0EFF6' }}>
          <span>Invoice</span><span>Customer</span><span>Date</span><span>Amount</span><span>Status</span>
        </div>
        {invoices.map((inv, i) => (
          <div key={inv.no} style={{ display: 'grid', gridTemplateColumns: '1.1fr 1.6fr 1fr 1fr 0.9fr', padding: '9px 12px', fontSize: '9px', alignItems: 'center', borderBottom: i < invoices.length - 1 ? '1px solid #F4F3F8' : 'none', background: newRow && i === 0 ? '#F5F1FF' : '#fff', animation: newRow && i === 0 ? 'bd-fade 0.5s ease' : undefined }}>
            <span style={{ fontWeight: 700, color: BRAND }}>{inv.no}</span>
            <span style={{ color: '#2A2E4D' }}>{inv.who}</span>
            <span style={{ color: MUTED }}>{inv.date}</span>
            <span style={{ fontWeight: 700 }}>{inv.amt}</span>
            <span><span style={{ fontSize: '7.5px', fontWeight: 700, color: inv.sc, background: inv.sbg, borderRadius: '5px', padding: '2px 7px' }}>{inv.status}</span></span>
          </div>
        ))}
      </div>
    </>
  );
}

/* ═══════════ Reports ═══════════ */
function ReportsScreen({ t }: { t: number }) {
  const bars = [
    { m: 'Feb', h: 44 }, { m: 'Mar', h: 62 }, { m: 'Apr', h: 38 },
    { m: 'May', h: 78 }, { m: 'Jun', h: 92 }, { m: 'Jul', h: 70 },
  ];
  const donut = [
    { label: 'Payroll', v: 42, c: '#7C3AED' },
    { label: 'Software', v: 24, c: '#2563EB' },
    { label: 'Office', v: 18, c: '#16A34A' },
    { label: 'Other', v: 16, c: '#EA580C' },
  ];
  // donut arc math
  let acc = 0;
  const R = 26, C = 2 * Math.PI * R;
  return (
    <>
      <div>
        <div style={{ fontSize: '15px', fontWeight: 800 }}>Reports</div>
        <div style={{ fontSize: '9px', color: '#8C90A8', marginTop: '2px' }}>Financial performance · last 6 months</div>
      </div>
      <div style={{ flex: '1 1 0%', minHeight: 0, display: 'grid', gridTemplateColumns: 'minmax(0,1fr) 190px', gap: '10px' }}>
        {/* revenue bar chart */}
        <div style={{ background: '#fff', border: '1px solid #F0EFF6', borderRadius: '10px', padding: '12px 14px', display: 'flex', flexDirection: 'column' }}>
          <span style={{ fontSize: '10.5px', fontWeight: 700 }}>Revenue by Month</span>
          <div style={{ flex: '1 1 0%', display: 'flex', alignItems: 'flex-end', gap: '14px', padding: '14px 6px 0' }}>
            {bars.map((b, i) => (
              <div key={b.m} style={{ flex: '1 1 0%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '5px', height: '100%', justifyContent: 'flex-end' }}>
                <div style={{ width: '100%', maxWidth: '24px', height: `${b.h * t}%`, minHeight: '2px', background: i === 4 ? BRAND : '#C9B8F5', borderRadius: '5px 5px 0 0', transition: 'height 0.1s' }} />
                <span style={{ fontSize: '8px', color: MUTED }}>{b.m}</span>
              </div>
            ))}
          </div>
        </div>
        {/* expense donut */}
        <div style={{ background: '#fff', border: '1px solid #F0EFF6', borderRadius: '10px', padding: '12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <span style={{ fontSize: '10px', fontWeight: 700, alignSelf: 'flex-start' }}>Expense Split</span>
          <svg width="80" height="80" viewBox="0 0 70 70" style={{ margin: '8px 0' }}>
            <g transform="rotate(-90 35 35)">
              {donut.map((d) => {
                const len = (d.v / 100) * C * t;
                const el = <circle key={d.label} cx={35} cy={35} r={R} fill="none" stroke={d.c} strokeWidth={9} strokeDasharray={`${len} ${C}`} strokeDashoffset={-acc * t} strokeLinecap="butt" />;
                acc += (d.v / 100) * C;
                return el;
              })}
            </g>
            <text x={35} y={33} textAnchor="middle" style={{ fontSize: '9px', fontWeight: 800, fill: '#1a1a1a' }}>£8.4k</text>
            <text x={35} y={43} textAnchor="middle" style={{ fontSize: '5.5px', fill: MUTED }}>this month</text>
          </svg>
          <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '4px' }}>
            {donut.map((d) => (
              <div key={d.label} style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '8px' }}>
                <span style={{ width: '7px', height: '7px', borderRadius: '2px', background: d.c }} />
                <span style={{ color: '#2A2E4D' }}>{d.label}</span>
                <span style={{ marginLeft: 'auto', fontWeight: 700, color: MUTED }}>{d.v}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
