'use client';

import { useEffect, useRef, useState } from 'react';
import {
  Home, FileText, Receipt, MoreHorizontal, Bell, ChevronRight, ChevronLeft,
  Plus, Landmark, BarChart3, Check, User, Settings, Moon, Cloud, LogOut, Send,
} from 'lucide-react';

const BRAND = '#7C3AED';
const MUTED = '#8A8F9E';

type Screen = 'home' | 'createInvoice' | 'invoices' | 'invoiceDetail' | 'expenses' | 'addExpense' | 'more';
type Tab = 'Home' | 'Invoices' | 'Expenses' | 'More';

const TABS: { key: Tab; Icon: typeof Home }[] = [
  { key: 'Home', Icon: Home },
  { key: 'Invoices', Icon: FileText },
  { key: 'Expenses', Icon: Receipt },
  { key: 'More', Icon: MoreHorizontal },
];

const INVOICES = [
  { no: 'INV-0042', who: 'BrightCore Ltd', amt: '£1,200.00', status: 'Paid', sc: '#15803D', sbg: '#DCFCE7' },
  { no: 'INV-0041', who: 'Metro Design', amt: '£2,800.00', status: 'Sent', sc: '#2563EB', sbg: '#EFF6FF' },
  { no: 'INV-0040', who: 'Nexa Technologies', amt: '£4,800.00', status: 'Overdue', sc: '#DC2626', sbg: '#FEE2E2' },
];
const EXPENSES = [
  { name: 'Adobe Creative Cloud', cat: 'Software', amt: '£49.99', icon: '🎨' },
  { name: 'Office Supplies', cat: 'Supplies', amt: '£128.40', icon: '📦' },
  { name: 'Client Lunch', cat: 'Meals', amt: '£64.00', icon: '🍽️' },
];
const NEW_EXPENSE = { name: 'AWS Hosting', cat: 'Software', amt: '£210.00', icon: '☁️' };

export function BooksMobilePreviewMockup({ autoplay = true }: { autoplay?: boolean } = {}) {
  const [screen, setScreen] = useState<Screen>('home');
  const [tab, setTab] = useState<Tab>('Home');
  const [balance, setBalance] = useState(0);          // count-up
  const [invFill, setInvFill] = useState(0);          // create-invoice field fill
  const [expFill, setExpFill] = useState(0);          // add-expense field fill
  const [expenses, setExpenses] = useState(EXPENSES);
  const [toast, setToast] = useState<string | null>(null);
  const [ripple, setRipple] = useState<{ x: number; y: number; on: boolean }>({ x: 0, y: 0, on: false });
  const rootRef = useRef<HTMLDivElement>(null);

  // count-up the balance whenever Home is shown
  useEffect(() => {
    if (screen !== 'home') return;
    let raf = 0; const t0 = performance.now(); const target = 550000;
    const step = (t: number) => { const p = Math.min(1, (t - t0) / 1200); setBalance(Math.round(target * (1 - Math.pow(1 - p, 3)))); if (p < 1) raf = requestAnimationFrame(step); };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [screen]);

  // ── autoplay engine (tap ripples, no cursor) ──────────────────────────
  useEffect(() => {
    if (!autoplay) return;
    let cancelled = false;
    const timers: ReturnType<typeof setTimeout>[] = [];
    const wait = (ms: number) => new Promise<void>((res) => { const t = setTimeout(res, ms); timers.push(t); });

    // fire a ripple centered on a data-m target
    const tap = (sel: string) => new Promise<void>((resolve) => {
      const root = rootRef.current;
      const el = root?.querySelector<HTMLElement>(`[data-m="${sel}"]`);
      if (root && el) {
        const rb = root.getBoundingClientRect(); const tb = el.getBoundingClientRect();
        const zoom = root.offsetWidth ? rb.width / root.offsetWidth : 1;
        setRipple({ x: (tb.left - rb.left + tb.width / 2) / zoom, y: (tb.top - rb.top + tb.height / 2) / zoom, on: true });
      }
      const t = setTimeout(() => { setRipple((r) => ({ ...r, on: false })); resolve(); }, 380);
      timers.push(t);
    });

    const reset = () => { setScreen('home'); setTab('Home'); setInvFill(0); setExpFill(0); setExpenses(EXPENSES); setToast(null); };

    const run = async () => {
      while (!cancelled) {
        reset();
        await wait(1900); if (cancelled) return;

        // 1) Home -> tap "Create Invoice"
        await tap('qa-invoice'); setScreen('createInvoice'); await wait(900);
        for (let i = 1; i <= 3; i++) { await tap(`invf-${i}`); setInvFill(i); await wait(520); }
        await tap('inv-create'); setToast('Invoice created & sent'); await wait(1400);
        setToast(null); setScreen('home'); setTab('Home'); await wait(1200);
        if (cancelled) return;

        // 2) bottom nav Invoices -> list -> detail
        await tap('tab-Invoices'); setTab('Invoices'); setScreen('invoices'); await wait(1500);
        await tap('inv-row-0'); setScreen('invoiceDetail'); await wait(2100);
        if (cancelled) return;

        // 3) bottom nav Expenses -> add expense
        await tap('tab-Expenses'); setTab('Expenses'); setScreen('expenses'); await wait(1400);
        await tap('add-expense'); setScreen('addExpense'); await wait(900);
        for (let i = 1; i <= 2; i++) { await tap(`expf-${i}`); setExpFill(i); await wait(520); }
        await tap('exp-save'); setExpenses((p) => [NEW_EXPENSE, ...p]); setToast('Expense added'); setScreen('expenses'); await wait(1600);
        setToast(null);
        if (cancelled) return;

        // 4) bottom nav More
        await tap('tab-More'); setTab('More'); setScreen('more'); await wait(1900);
        if (cancelled) return;

        // 5) back Home
        await tap('tab-Home'); setTab('Home'); setScreen('home'); await wait(1200);
      }
    };
    run();
    return () => { cancelled = true; timers.forEach(clearTimeout); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoplay]);

  const fmt = (n: number) => '£' + n.toLocaleString('en-GB') + '.00';

  return (
    <div style={{ position: 'absolute', left: '532px', top: '128px', width: '204px', height: '420px', borderRadius: '40px', padding: '3px', background: 'linear-gradient(150deg, rgb(90,90,102) 0%, rgb(31,31,37) 30%, rgb(52,52,60) 70%, rgb(20,20,24) 100%)', boxShadow: 'rgba(40,20,130,0.55) 0px 40px 70px -24px, rgba(20,10,60,0.4) 0px 12px 24px -12px' }}>
      {/* side buttons */}
      <span style={{ position: 'absolute', left: '-2px', top: '92px', width: '3px', height: '24px', borderRadius: '2px', background: 'rgb(42,42,49)' }} />
      <span style={{ position: 'absolute', left: '-2px', top: '126px', width: '3px', height: '38px', borderRadius: '2px', background: 'rgb(42,42,49)' }} />
      <span style={{ position: 'absolute', right: '-2px', top: '120px', width: '3px', height: '52px', borderRadius: '2px', background: 'rgb(42,42,49)' }} />
      {/* inner black rim — gives the phone its thick, realistic device edge */}
      <div style={{ position: 'relative', width: '100%', height: '100%', borderRadius: '37px', background: 'rgb(8,8,10)', padding: '6px' }}>
      <div ref={rootRef} style={{ position: 'relative', width: '100%', height: '100%', borderRadius: '31px', overflow: 'hidden', background: '#F7F7FB', fontFamily: 'Poppins, sans-serif', color: '#1a1a1a', fontSize: '8px' }}>
        {/* notch */}
        <div style={{ position: 'absolute', top: '5px', left: '50%', transform: 'translateX(-50%)', width: '58px', height: '13px', borderRadius: '8px', background: '#111', zIndex: 30 }} />
        {/* status bar */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '6px 14px 2px', fontSize: '7.5px', fontWeight: 700 }}>
          <span>9:41</span><span>•••• ᯤ ▮</span>
        </div>
        {/* app header */}
        <div style={{ display: 'flex', alignItems: 'center', padding: '4px 12px 8px' }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '11px', fontWeight: 800 }}><span style={{ width: '15px', height: '15px', borderRadius: '5px', background: BRAND, display: 'grid', placeItems: 'center', color: '#fff', fontSize: '8px' }}>b</span>snaarp</span>
          <Bell size={12} style={{ marginLeft: 'auto', color: '#555' }} />
        </div>

        {/* screen body */}
        <div style={{ position: 'absolute', top: '46px', bottom: '34px', left: 0, right: 0, overflow: 'hidden' }}>
          <div key={screen} style={{ position: 'absolute', inset: 0, padding: '0 12px', overflow: 'hidden', animation: 'bm-slide 0.4s cubic-bezier(0.22,1,0.36,1)' }}>
            {screen === 'home' && <HomeScreen balance={fmt(balance)} />}
            {screen === 'createInvoice' && <CreateInvoiceScreen fill={invFill} />}
            {screen === 'invoices' && <InvoicesScreen />}
            {screen === 'invoiceDetail' && <InvoiceDetailScreen />}
            {screen === 'expenses' && <ExpensesScreen expenses={expenses} />}
            {screen === 'addExpense' && <AddExpenseScreen fill={expFill} />}
            {screen === 'more' && <MoreScreen />}
          </div>
        </div>

        {/* toast */}
        {toast && (
          <div style={{ position: 'absolute', bottom: '42px', left: '12px', right: '12px', zIndex: 25, background: '#111827', color: '#fff', borderRadius: '9px', padding: '7px 10px', fontSize: '8px', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '6px', animation: 'bm-slide 0.3s ease' }}>
            <Check size={11} style={{ color: '#4ADE80' }} /> {toast}
          </div>
        )}

        {/* bottom tab bar */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '34px', background: '#fff', borderTop: '1px solid #eef0f2', display: 'flex', alignItems: 'center', justifyContent: 'space-around', zIndex: 20 }}>
          {TABS.map((tb) => {
            const active = tb.key === tab;
            return (
              <div key={tb.key} data-m={`tab-${tb.key}`} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1px', color: active ? BRAND : '#B0B4C0' }}>
                <tb.Icon size={13} />
                <span style={{ fontSize: '6px', fontWeight: active ? 700 : 500 }}>{tb.key}</span>
              </div>
            );
          })}
        </div>

        {/* tap ripple */}
        <span style={{ position: 'absolute', left: ripple.x, top: ripple.y, width: '30px', height: '30px', marginLeft: '-15px', marginTop: '-15px', borderRadius: '50%', background: 'rgba(124,58,237,0.35)', transform: ripple.on ? 'scale(1.2)' : 'scale(0)', opacity: ripple.on ? 1 : 0, transition: 'transform 0.38s ease-out, opacity 0.38s ease-out', pointerEvents: 'none', zIndex: 40 }} />
      </div>
      </div>

      <style>{`
        @keyframes bm-slide { from { opacity: 0; transform: translateX(10px); } to { opacity: 1; transform: translateX(0); } }
        @keyframes bm-fade { from { opacity: 0; transform: translateY(5px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes bm-grow { from { transform: scaleX(0); } to { transform: scaleX(1); } }
      `}</style>
    </div>
  );
}

/* ═══════════ Home ═══════════ */
function HomeScreen({ balance }: { balance: string }) {
  const actions = [
    { key: 'qa-invoice', label: 'Create Invoice', Icon: FileText, c: '#2563EB', bg: '#EFF6FF' },
    { key: 'qa-expense', label: 'Add Expense', Icon: Receipt, c: '#16A34A', bg: '#E3F8EA' },
    { key: 'qa-bank', label: 'Connect Bank', Icon: Landmark, c: BRAND, bg: '#F3EFFF' },
    { key: 'qa-reports', label: 'View Reports', Icon: BarChart3, c: '#EA580C', bg: '#FFF4EC' },
  ];
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <div style={{ background: 'linear-gradient(150deg,#EDE9FE,#F5F3FF)', borderRadius: '12px', padding: '10px 12px', marginBottom: '10px' }}>
        <div style={{ fontSize: '8px', color: MUTED, marginBottom: '2px' }}>Total Balance</div>
        <div style={{ fontSize: '17px', fontWeight: 800, letterSpacing: '-0.02em' }}>{balance}</div>
        <div style={{ fontSize: '7.5px', fontWeight: 700, color: '#16A34A', marginTop: '2px' }}>↑ 12% this month</div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        {actions.map((a, i) => (
          <div key={a.key} data-m={a.key} style={{ display: 'flex', alignItems: 'center', gap: '9px', background: '#fff', border: '1px solid #eef0f2', borderRadius: '11px', padding: '9px 11px', animation: `bm-fade 0.4s ${i * 0.06}s both` }}>
            <span style={{ width: '24px', height: '24px', borderRadius: '8px', background: a.bg, display: 'grid', placeItems: 'center' }}><a.Icon size={13} style={{ color: a.c }} /></span>
            <span style={{ fontSize: '9px', fontWeight: 600 }}>{a.label}</span>
            <ChevronRight size={12} style={{ marginLeft: 'auto', color: '#ccc' }} />
          </div>
        ))}
      </div>
    </div>
  );
}

/* ═══════════ Create Invoice ═══════════ */
function MField({ label, value, filled, dataM }: { label: string; value: string; filled: boolean; dataM: string }) {
  return (
    <div style={{ marginBottom: '9px' }}>
      <div style={{ fontSize: '7.5px', fontWeight: 600, color: MUTED, marginBottom: '3px' }}>{label}</div>
      <div data-m={dataM} style={{ height: '24px', border: `1px solid ${filled ? BRAND : '#e6e5ef'}`, borderRadius: '7px', padding: '0 9px', display: 'flex', alignItems: 'center', fontSize: '8.5px', color: filled ? '#1a1a1a' : '#bbb', background: '#fff', transition: 'border-color 0.2s' }}>
        {filled ? value : `Select ${label.toLowerCase()}`}
      </div>
    </div>
  );
}
function MobileHeader({ title }: { title: string }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '7px', marginBottom: '10px' }}>
      <ChevronLeft size={14} style={{ color: '#555' }} /><span style={{ fontSize: '11px', fontWeight: 800 }}>{title}</span>
    </div>
  );
}
function CreateInvoiceScreen({ fill }: { fill: number }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <MobileHeader title="Create Invoice" />
      <MField label="Customer" value="BrightCore Ltd" filled={fill >= 1} dataM="invf-1" />
      <MField label="Item" value="Marketing Retainer" filled={fill >= 2} dataM="invf-2" />
      <MField label="Amount" value="£1,200.00" filled={fill >= 3} dataM="invf-3" />
      <div style={{ marginTop: 'auto', marginBottom: '4px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '8px', color: MUTED, marginBottom: '3px' }}><span>Total</span><span style={{ fontWeight: 800, color: '#1a1a1a', fontSize: '11px' }}>{fill >= 3 ? '£1,200.00' : '£0.00'}</span></div>
        <div data-m="inv-create" style={{ background: BRAND, color: '#fff', borderRadius: '9px', padding: '9px', textAlign: 'center', fontSize: '9px', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '5px' }}><Send size={11} /> Create &amp; Send</div>
      </div>
    </div>
  );
}

/* ═══════════ Invoices list ═══════════ */
function InvoicesScreen() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <div style={{ fontSize: '11px', fontWeight: 800, marginBottom: '9px' }}>Invoices</div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '7px' }}>
        {INVOICES.map((inv, i) => (
          <div key={inv.no} data-m={`inv-row-${i}`} style={{ background: '#fff', border: '1px solid #eef0f2', borderRadius: '10px', padding: '9px 10px', animation: `bm-fade 0.4s ${i * 0.06}s both` }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '4px' }}>
              <span style={{ fontSize: '8.5px', fontWeight: 700 }}>{inv.no}</span>
              <span style={{ marginLeft: 'auto', fontSize: '6.5px', fontWeight: 700, color: inv.sc, background: inv.sbg, borderRadius: '5px', padding: '2px 6px' }}>{inv.status}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span style={{ fontSize: '7.5px', color: MUTED }}>{inv.who}</span>
              <span style={{ fontSize: '9px', fontWeight: 700 }}>{inv.amt}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ═══════════ Invoice detail ═══════════ */
function InvoiceDetailScreen() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <MobileHeader title="INV-0042" />
      <div style={{ background: '#fff', border: '1px solid #eef0f2', borderRadius: '11px', padding: '11px', marginBottom: '9px' }}>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
          <span style={{ fontSize: '15px', fontWeight: 800 }}>£1,200.00</span>
          <span style={{ marginLeft: 'auto', fontSize: '6.5px', fontWeight: 700, color: '#15803D', background: '#DCFCE7', borderRadius: '5px', padding: '2px 6px' }}>Paid</span>
        </div>
        {[['Customer', 'BrightCore Ltd'], ['Issued', '24 Jun 2026'], ['Due', 'Due on receipt']].map(([l, v]) => (
          <div key={l} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '8px', padding: '4px 0', borderTop: '1px solid #f4f3f8' }}><span style={{ color: MUTED }}>{l}</span><span style={{ fontWeight: 600 }}>{v}</span></div>
        ))}
      </div>
      <div style={{ background: '#fff', border: '1px solid #eef0f2', borderRadius: '11px', padding: '11px' }}>
        <div style={{ fontSize: '8.5px', fontWeight: 700, marginBottom: '6px' }}>Items</div>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '8px', padding: '3px 0' }}><span>Marketing Retainer ×1</span><span style={{ fontWeight: 600 }}>1,200.00</span></div>
      </div>
      <div style={{ marginTop: 'auto', display: 'flex', gap: '6px' }}>
        <div style={{ flex: 1, background: BRAND, color: '#fff', borderRadius: '8px', padding: '7px', textAlign: 'center', fontSize: '8px', fontWeight: 700 }}>Send Reminder</div>
        <div style={{ flex: 1, border: '1px solid #e6e5ef', color: '#555', borderRadius: '8px', padding: '7px', textAlign: 'center', fontSize: '8px', fontWeight: 600 }}>Download</div>
      </div>
    </div>
  );
}

/* ═══════════ Expenses ═══════════ */
function ExpensesScreen({ expenses }: { expenses: typeof EXPENSES }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '9px' }}>
        <span style={{ fontSize: '11px', fontWeight: 800 }}>Expenses</span>
        <span data-m="add-expense" style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '3px', background: BRAND, color: '#fff', borderRadius: '7px', padding: '4px 8px', fontSize: '8px', fontWeight: 700 }}><Plus size={10} /> Add</span>
      </div>
      <div style={{ background: 'linear-gradient(150deg,#FFF4EC,#FFF9F5)', borderRadius: '11px', padding: '9px 11px', marginBottom: '10px' }}>
        <div style={{ fontSize: '7.5px', color: MUTED }}>This month</div>
        <div style={{ fontSize: '15px', fontWeight: 800 }}>£8,430.00</div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '7px' }}>
        {expenses.map((e, i) => (
          <div key={e.name + i} style={{ display: 'flex', alignItems: 'center', gap: '9px', background: '#fff', border: '1px solid #eef0f2', borderRadius: '10px', padding: '8px 10px', animation: i === 0 && expenses.length > 3 ? 'bm-fade 0.5s ease' : undefined }}>
            <span style={{ width: '22px', height: '22px', borderRadius: '7px', background: '#f4f4f7', display: 'grid', placeItems: 'center', fontSize: '10px' }}>{e.icon}</span>
            <div style={{ minWidth: 0, flex: 1 }}>
              <div style={{ fontSize: '8.5px', fontWeight: 600, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{e.name}</div>
              <div style={{ fontSize: '7px', color: MUTED }}>{e.cat}</div>
            </div>
            <span style={{ fontSize: '9px', fontWeight: 700 }}>{e.amt}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ═══════════ Add Expense ═══════════ */
function AddExpenseScreen({ fill }: { fill: number }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <MobileHeader title="Add Expense" />
      <MField label="Merchant" value="AWS Hosting" filled={fill >= 1} dataM="expf-1" />
      <MField label="Amount" value="£210.00" filled={fill >= 2} dataM="expf-2" />
      <div style={{ marginBottom: '9px' }}>
        <div style={{ fontSize: '7.5px', fontWeight: 600, color: MUTED, marginBottom: '4px' }}>Category</div>
        <div style={{ display: 'flex', gap: '5px', flexWrap: 'wrap' }}>
          {['Software', 'Supplies', 'Travel', 'Meals'].map((c) => (
            <span key={c} style={{ fontSize: '7.5px', fontWeight: 600, padding: '4px 8px', borderRadius: '20px', background: c === 'Software' ? BRAND : '#fff', color: c === 'Software' ? '#fff' : MUTED, border: '1px solid #eef0f2' }}>{c}</span>
          ))}
        </div>
      </div>
      <div data-m="exp-save" style={{ marginTop: 'auto', background: BRAND, color: '#fff', borderRadius: '9px', padding: '9px', textAlign: 'center', fontSize: '9px', fontWeight: 700 }}>Save Expense</div>
    </div>
  );
}

/* ═══════════ More ═══════════ */
function MoreScreen() {
  const items = [
    { label: 'Profile', Icon: User, c: '#2563EB', bg: '#EFF6FF' },
    { label: 'Notifications', Icon: Bell, c: '#EA580C', bg: '#FFF4EC', badge: '3' },
    { label: 'Offline mode', Icon: Cloud, c: '#16A34A', bg: '#E3F8EA', toggle: true },
    { label: 'Dark mode', Icon: Moon, c: BRAND, bg: '#F3EFFF', toggle: false },
    { label: 'Settings', Icon: Settings, c: '#6b7090', bg: '#f1f2f5' },
    { label: 'Sign out', Icon: LogOut, c: '#DC2626', bg: '#FEF2F2' },
  ];
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '9px', background: '#fff', border: '1px solid #eef0f2', borderRadius: '11px', padding: '10px', marginBottom: '9px' }}>
        <span style={{ width: '30px', height: '30px', borderRadius: '50%', background: BRAND, color: '#fff', display: 'grid', placeItems: 'center', fontSize: '12px', fontWeight: 800 }}>V</span>
        <div><div style={{ fontSize: '9px', fontWeight: 700 }}>Victor Adeyemi</div><div style={{ fontSize: '7px', color: MUTED }}>victor@snaarp.com</div></div>
        <span style={{ marginLeft: 'auto', fontSize: '6.5px', fontWeight: 700, color: BRAND, background: '#F3EFFF', borderRadius: '5px', padding: '2px 6px' }}>PRO</span>
      </div>
      <div style={{ background: '#fff', border: '1px solid #eef0f2', borderRadius: '11px', overflow: 'hidden' }}>
        {items.map((m, i) => (
          <div key={m.label} style={{ display: 'flex', alignItems: 'center', gap: '9px', padding: '8px 10px', borderTop: i ? '1px solid #f4f3f8' : 'none', animation: `bm-fade 0.4s ${i * 0.04}s both` }}>
            <span style={{ width: '20px', height: '20px', borderRadius: '6px', background: m.bg, display: 'grid', placeItems: 'center' }}><m.Icon size={11} style={{ color: m.c }} /></span>
            <span style={{ fontSize: '8.5px', fontWeight: 600, color: m.label === 'Sign out' ? '#DC2626' : '#222' }}>{m.label}</span>
            <span style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center' }}>
              {m.badge && <span style={{ fontSize: '6.5px', fontWeight: 700, color: '#fff', background: '#F87171', borderRadius: '20px', padding: '1px 5px', marginRight: '5px' }}>{m.badge}</span>}
              {'toggle' in m
                ? <span style={{ width: '24px', height: '13px', borderRadius: '10px', background: m.toggle ? BRAND : '#e2e3ea', position: 'relative' }}><span style={{ position: 'absolute', top: '2px', left: m.toggle ? '12px' : '2px', width: '9px', height: '9px', borderRadius: '50%', background: '#fff', transition: 'left 0.2s' }} /></span>
                : m.label !== 'Sign out' && <ChevronRight size={12} style={{ color: '#ccc' }} />}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
