'use client';

import { useEffect, useRef, useState } from 'react';
import {
  Home, Package, ShoppingCart, ShoppingBag, Landmark, BookOpen, BarChart3,
  FileText, Settings, ChevronRight, ChevronDown, Plus, Search, X, Check,
  Send, CreditCard, Download,
} from 'lucide-react';

const BRAND = '#7C3AED';
const MUTED = '#6b7090';

// ── Data (generated, fuller than the reference) ─────────────────────────
type Item = { name: string; pdesc: string; prate: string; desc: string; rate: string; unit: string };
const SEED_ITEMS: Item[] = [
  { name: 'Premium Coffee Beans', pdesc: 'Wholesale purchase', prate: '£12.00', desc: 'Retail sale', rate: '£20.00', unit: 'kg' },
  { name: 'Consulting Hour', pdesc: 'Contractor cost', prate: '£45.00', desc: 'Advisory service', rate: '£90.00', unit: 'hrs' },
  { name: 'Office Chair', pdesc: 'Supplier cost', prate: '£65.00', desc: 'Ergonomic chair', rate: '£120.00', unit: 'pcs' },
  { name: 'Website Package', pdesc: 'Build cost', prate: '£400.00', desc: 'Design & build', rate: '£950.00', unit: 'pcs' },
  { name: 'Cleaning Service', pdesc: 'Staff cost', prate: '£30.00', desc: 'Monthly clean', rate: '£75.00', unit: 'job' },
];
const NEW_ITEM: Item = { name: 'Marketing Retainer', pdesc: 'Agency cost', prate: '£500.00', desc: 'Monthly retainer', rate: '£1,200.00', unit: 'mo' };

type Customer = { name: string; email: string; phone: string };
const SEED_CUSTOMERS: Customer[] = [
  { name: 'BrightCore Ltd', email: 'hello@brightcore.co.uk', phone: '020 7946 0011' },
  { name: 'Metro Design Studio', email: 'studio@metrodesign.com', phone: '0161 496 0234' },
  { name: 'Nexa Technologies', email: 'accounts@nexatech.io', phone: '0131 560 1188' },
  { name: 'Amara Okafor', email: 'amara.okafor@gmail.com', phone: '07700 900432' },
];
const NEW_CUSTOMER: Customer = { name: 'Lumen Studio', email: 'billing@lumenstudio.co', phone: '07700 900876' };

type Invoice = { no: string; customer: string; date: string; due: string; amount: string; balance: string; status: string; sc: string; sbg: string };
const SEED_INVOICES: Invoice[] = [
  { no: 'INV-0004', customer: 'BrightCore Ltd', date: '12 Jun', due: '26 Jun', amount: 'GBP 1,200.00', balance: 'GBP 0.00', status: 'Paid', sc: '#15803D', sbg: '#DCFCE7' },
  { no: 'INV-0003', customer: 'Metro Design Studio', date: '09 Jun', due: '23 Jun', amount: 'GBP 2,800.00', balance: 'GBP 2,800.00', status: 'Sent', sc: '#2563EB', sbg: '#EFF6FF' },
  { no: 'INV-0002', customer: 'Nexa Technologies', date: '28 May', due: '11 Jun', amount: 'GBP 4,800.00', balance: 'GBP 4,800.00', status: 'Overdue', sc: '#DC2626', sbg: '#FEE2E2' },
  { no: 'INV-0001', customer: 'Amara Okafor', date: '24 May', due: '07 Jun', amount: 'GBP 960.00', balance: 'GBP 0.00', status: 'Paid', sc: '#15803D', sbg: '#DCFCE7' },
];

const NAV_TOP = [
  { key: 'Home', Icon: Home },
  { key: 'Products', Icon: Package },
];
const SALES_CHILDREN = ['Customers', 'Quotes', 'Invoices', 'Sales Receipts', 'Recurring Invoices', 'Payments Received', 'Credit Notes'];
const NAV_BOTTOM = [
  { key: 'Purchases', Icon: ShoppingBag, chev: true },
  { key: 'Banking', Icon: Landmark, chev: true },
  { key: 'Accountant', Icon: BookOpen, chev: true },
  { key: 'Reports', Icon: BarChart3 },
  { key: 'Documents', Icon: FileText },
  { key: 'Settings', Icon: Settings },
];

// Screen keys drive both the sidebar highlight and the tablet body.
type Screen = 'dashboard' | 'products' | 'newItem' | 'customers' | 'newCustomer' | 'invoices' | 'invoiceDetail';

export function BooksAppPreviewMockup({ autoplay = true }: { autoplay?: boolean } = {}) {
  const [screen, setScreen] = useState<Screen>('dashboard');
  const [items, setItems] = useState<Item[]>(SEED_ITEMS);
  const [customers, setCustomers] = useState<Customer[]>(SEED_CUSTOMERS);
  const [salesOpen, setSalesOpen] = useState(false);
  // form-fill progress (0 = empty, 1..n = fields filled)
  const [itemFill, setItemFill] = useState(0);
  const [custFill, setCustFill] = useState(0);
  const [cursor, setCursor] = useState({ x: 60, y: 40, clicking: false, visible: false });

  const containerRef = useRef<HTMLDivElement>(null);

  // active sidebar label derived from screen
  const activeNav =
    screen === 'dashboard' ? 'Home'
    : screen === 'products' || screen === 'newItem' ? 'Products'
    : 'Sales';
  const activeSalesChild =
    screen === 'customers' || screen === 'newCustomer' ? 'Customers'
    : screen === 'invoices' || screen === 'invoiceDetail' ? 'Invoices'
    : null;

  // ── autoplay engine ───────────────────────────────────────────────────
  useEffect(() => {
    if (!autoplay) return;
    let cancelled = false;
    const timers: ReturnType<typeof setTimeout>[] = [];
    const wait = (ms: number) => new Promise<void>((res) => { const t = setTimeout(res, ms); timers.push(t); });

    const moveTo = (sel: string) => new Promise<void>((resolve) => {
      const root = containerRef.current;
      const el = root?.querySelector<HTMLElement>(`[data-b="${sel}"]`);
      if (!root || !el) { resolve(); return; }
      const rb = root.getBoundingClientRect();
      const tb = el.getBoundingClientRect();
      const zoom = root.offsetWidth ? rb.width / root.offsetWidth : 1;
      setCursor((c) => ({ ...c, x: (tb.left - rb.left + tb.width / 2) / zoom, y: (tb.top - rb.top + tb.height / 2) / zoom, visible: true, clicking: false }));
      resolve();
    });
    const click = async () => { setCursor((c) => ({ ...c, clicking: true })); await wait(230); setCursor((c) => ({ ...c, clicking: false })); };

    const reset = () => {
      setScreen('dashboard'); setSalesOpen(false); setItemFill(0); setCustFill(0);
      setItems(SEED_ITEMS); setCustomers(SEED_CUSTOMERS);
    };

    const run = async () => {
      while (!cancelled) {
        reset();
        setCursor({ x: 60, y: 40, clicking: false, visible: true });
        await wait(1500); if (cancelled) return;

        // 1) Products
        await moveTo('nav-Products'); await wait(700); await click(); setScreen('products'); await wait(1600);
        if (cancelled) return;
        // 2) + New -> New Item form
        await moveTo('new-item'); await wait(700); await click(); setScreen('newItem'); await wait(900);
        // fill fields one by one
        for (let i = 1; i <= 4; i++) { await moveTo(`itemfield-${i}`); await wait(430); setItemFill(i); await wait(360); }
        if (cancelled) return;
        // Save -> row added
        await moveTo('item-save'); await wait(650); await click();
        setItems((prev) => [NEW_ITEM, ...prev]); setScreen('products'); await wait(1900);
        if (cancelled) return;

        // 3) Sales -> Customers
        await moveTo('nav-Sales'); await wait(600); await click(); setSalesOpen(true); await wait(700);
        await moveTo('sub-Customers'); await wait(600); await click(); setScreen('customers'); await wait(1700);
        if (cancelled) return;
        // 4) + New Customer -> form
        await moveTo('new-customer'); await wait(700); await click(); setScreen('newCustomer'); await wait(900);
        for (let i = 1; i <= 3; i++) { await moveTo(`custfield-${i}`); await wait(430); setCustFill(i); await wait(360); }
        await moveTo('customer-save'); await wait(650); await click();
        setCustomers((prev) => [NEW_CUSTOMER, ...prev]); setScreen('customers'); await wait(1900);
        if (cancelled) return;

        // 5) Sales -> Invoices
        await moveTo('sub-Invoices'); await wait(650); await click(); setScreen('invoices'); await wait(1700);
        if (cancelled) return;
        // 6) click an invoice row -> detail
        await moveTo('invoice-row-0'); await wait(700); await click(); setScreen('invoiceDetail'); await wait(2300);
        if (cancelled) return;

        // 7) back to dashboard
        await moveTo('nav-Home'); await wait(700); await click(); setScreen('dashboard'); await wait(1400);
      }
    };
    run();
    return () => { cancelled = true; timers.forEach(clearTimeout); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoplay]);

  return (
    <div ref={containerRef} style={{ position: 'relative', width: '100%', height: '100%', borderRadius: '20px', overflow: 'hidden', background: '#fff', display: 'flex', fontFamily: 'Poppins, sans-serif', color: '#1a1a1a', fontSize: '10px' }}>
      {/* Top bar spanning full width would sit above; keep a compact top bar inside main. */}
      {/* Sidebar */}
      <div style={{ width: '118px', flexShrink: 0, borderRight: '1px solid #f0eff6', padding: '10px 8px', display: 'flex', flexDirection: 'column', gap: '1px', overflow: 'hidden', background: '#fff' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '2px 6px 10px' }}>
          <span style={{ width: '18px', height: '18px', borderRadius: '5px', background: BRAND, display: 'grid', placeItems: 'center', color: '#fff', fontSize: '10px', fontWeight: 800 }}>b</span>
          <span style={{ fontSize: '11px', fontWeight: 800, letterSpacing: '-0.02em' }}>Snaarp Books</span>
        </div>
        {NAV_TOP.map((n) => (
          <NavRow key={n.key} label={n.key} Icon={n.Icon} active={activeNav === n.key} dataB={`nav-${n.key}`} />
        ))}
        {/* Sales (expandable) */}
        <NavRow label="Sales" Icon={ShoppingCart} active={activeNav === 'Sales'} chev={salesOpen ? 'down' : 'right'} dataB="nav-Sales" />
        {salesOpen && (
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {SALES_CHILDREN.map((c) => (
              <div key={c} data-b={`sub-${c}`} style={{ padding: '4px 8px 4px 26px', borderRadius: '6px', fontSize: '9px', fontWeight: activeSalesChild === c ? 700 : 500, color: activeSalesChild === c ? BRAND : MUTED, cursor: 'pointer', background: activeSalesChild === c ? '#f5f2ff' : 'transparent' }}>{c}</div>
            ))}
          </div>
        )}
        {NAV_BOTTOM.map((n) => (
          <NavRow key={n.key} label={n.key} Icon={n.Icon} chev={n.chev ? 'right' : undefined} dataB={`nav-${n.key}`} />
        ))}
      </div>

      {/* Main */}
      <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', background: '#fafafc' }}>
        {/* top bar */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '8px 14px', borderBottom: '1px solid #f0eff6', background: '#fff', flexShrink: 0 }}>
          <div style={{ flex: 1, maxWidth: '200px', display: 'flex', alignItems: 'center', gap: '6px', background: '#f4f4f7', borderRadius: '7px', padding: '5px 9px' }}>
            <Search size={11} style={{ color: '#aaa' }} /><span style={{ fontSize: '9px', color: '#aaa' }}>Search… ( / )</span>
          </div>
          <span data-b="new-top" style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '4px', background: BRAND, color: '#fff', borderRadius: '7px', padding: '5px 10px', fontSize: '9px', fontWeight: 700 }}><Plus size={11} /> New</span>
          <span style={{ width: '20px', height: '20px', borderRadius: '50%', background: BRAND, color: '#fff', display: 'grid', placeItems: 'center', fontSize: '9px', fontWeight: 700 }}>V</span>
        </div>

        <div style={{ flex: 1, minHeight: 0, overflow: 'hidden', position: 'relative' }}>
          <div key={screen} style={{ position: 'absolute', inset: 0, padding: '12px 14px', overflow: 'hidden', animation: 'bk-fade 0.4s cubic-bezier(0.22,1,0.36,1)' }}>
            {screen === 'dashboard' && <DashboardScreen />}
            {screen === 'products' && <ProductsScreen items={items} />}
            {screen === 'newItem' && <NewItemScreen fill={itemFill} />}
            {screen === 'customers' && <CustomersScreen customers={customers} />}
            {screen === 'newCustomer' && <NewCustomerScreen fill={custFill} />}
            {screen === 'invoices' && <InvoicesScreen invoices={SEED_INVOICES} />}
            {screen === 'invoiceDetail' && <InvoiceDetailScreen inv={SEED_INVOICES[0]} />}
          </div>
        </div>
      </div>

      {/* Animated cursor */}
      {autoplay && cursor.visible && (
        <div style={{ position: 'absolute', left: 0, top: 0, zIndex: 50, pointerEvents: 'none', transform: `translate(${cursor.x - 2}px, ${cursor.y - 1}px)`, transition: 'transform 0.7s cubic-bezier(0.22,1,0.36,1)' }}>
          <span style={{ position: 'absolute', left: '-8px', top: '-8px', width: '26px', height: '26px', borderRadius: '50%', background: 'rgba(124,58,237,0.28)', transform: cursor.clicking ? 'scale(1.4)' : 'scale(0.2)', opacity: cursor.clicking ? 1 : 0, transition: 'transform 0.25s ease-out, opacity 0.25s ease-out' }} />
          <svg width="17" height="17" viewBox="0 0 24 24" style={{ filter: 'drop-shadow(0 2px 3px rgba(0,0,0,0.25))', transform: cursor.clicking ? 'scale(0.82)' : 'scale(1)', transition: 'transform 0.12s ease' }}>
            <path d="M5 3l3.5 15 2.5-6 6-2.5L5 3z" fill="#fff" stroke="#1a1a1a" strokeWidth="1.5" strokeLinejoin="round" />
          </svg>
        </div>
      )}

      <style>{`
        @keyframes bk-fade { from { opacity: 0; transform: translateY(6px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes bk-grow { from { transform: scaleX(0); } to { transform: scaleX(1); } }
        @keyframes bk-rowin { from { opacity: 0; transform: translateY(-6px); background: #f3efff; } to { opacity: 1; transform: translateY(0); } }
      `}</style>
    </div>
  );
}

function NavRow({ label, Icon, active, chev, dataB }: { label: string; Icon: typeof Home; active?: boolean; chev?: 'right' | 'down'; dataB: string }) {
  return (
    <div data-b={dataB} style={{ display: 'flex', alignItems: 'center', gap: '7px', padding: '6px 8px', borderRadius: '7px', fontSize: '9.5px', cursor: 'pointer', background: active ? '#f1edff' : 'transparent', color: active ? BRAND : MUTED, fontWeight: active ? 700 : 500 }}>
      <Icon size={13} /><span>{label}</span>
      {chev === 'right' && <ChevronRight size={11} style={{ marginLeft: 'auto', color: '#b0b4c6' }} />}
      {chev === 'down' && <ChevronDown size={11} style={{ marginLeft: 'auto', color: BRAND }} />}
    </div>
  );
}

/* ═══════════════ Dashboard ═══════════════ */
function DashboardScreen() {
  const kpis = [
    { label: 'Income', value: '£25,600', delta: '12%', up: true, c: '#2563EB', bg: '#EFF6FF' },
    { label: 'Expenses', value: '£8,430', delta: '9%', up: false, c: '#EA580C', bg: '#FFEDE2' },
    { label: 'Profit', value: '£67,070', delta: '16%', up: true, c: '#16A34A', bg: '#E3F8EA' },
  ];
  const bars = [[26, 16], [44, 24], [30, 42], [16, 22], [58, 30], [74, 42]];
  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <div style={{ fontSize: '13px', fontWeight: 800, marginBottom: '1px' }}>Welcome back, Victor 👋</div>
      <div style={{ fontSize: '8.5px', color: MUTED, marginBottom: '10px' }}>Here&apos;s what&apos;s happening with your business today</div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '8px', marginBottom: '10px' }}>
        {kpis.map((k) => (
          <div key={k.label} style={{ background: '#fff', border: '1px solid #f0eff6', borderRadius: '10px', padding: '9px 10px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '5px', marginBottom: '5px' }}>
              <span style={{ width: '16px', height: '16px', borderRadius: '5px', background: k.bg, display: 'grid', placeItems: 'center', fontSize: '8px', color: k.c }}>●</span>
              <span style={{ fontSize: '8px', color: MUTED }}>{k.label}</span>
            </div>
            <div style={{ fontSize: '13px', fontWeight: 800 }}>{k.value}</div>
            <div style={{ fontSize: '7.5px', fontWeight: 700, color: k.up ? '#16A34A' : '#DC2626' }}>{k.up ? '↑' : '↓'} {k.delta}</div>
          </div>
        ))}
      </div>
      <div style={{ background: '#fff', border: '1px solid #f0eff6', borderRadius: '10px', padding: '10px', flex: 1, minHeight: 0, display: 'flex', flexDirection: 'column' }}>
        <div style={{ fontSize: '9.5px', fontWeight: 700, marginBottom: '8px' }}>Cash Flow</div>
        <div style={{ flex: 1, display: 'flex', alignItems: 'flex-end', gap: '10px', minHeight: 0, paddingBottom: '4px' }}>
          {bars.map((b, i) => (
            <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '3px', height: '100%', justifyContent: 'flex-end' }}>
              <div style={{ display: 'flex', gap: '2px', alignItems: 'flex-end', height: '100%', width: '100%', justifyContent: 'center' }}>
                <div style={{ width: '7px', height: `${b[0]}%`, borderRadius: '2px', background: BRAND, transformOrigin: 'bottom', animation: `bk-grow 0.5s ${i * 0.05}s both` }} />
                <div style={{ width: '7px', height: `${b[1]}%`, borderRadius: '2px', background: '#22C55E', transformOrigin: 'bottom', animation: `bk-grow 0.5s ${i * 0.05}s both` }} />
              </div>
              <span style={{ fontSize: '6.5px', color: '#aaa' }}>{['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'][i]}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ═══════════════ Products (Active Items) ═══════════════ */
function ProductsScreen({ items }: { items: Item[] }) {
  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
        <span style={{ fontSize: '12px', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '4px' }}>Active Items <ChevronDown size={12} style={{ color: MUTED }} /></span>
        <span data-b="new-item" style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '4px', background: BRAND, color: '#fff', borderRadius: '7px', padding: '5px 11px', fontSize: '9px', fontWeight: 700 }}><Plus size={11} /> New</span>
      </div>
      <div style={{ background: '#fff', border: '1px solid #f0eff6', borderRadius: '10px', overflow: 'hidden' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1.4fr 0.9fr 0.7fr', gap: '6px', padding: '7px 10px', background: '#faf9fc', fontSize: '7.5px', fontWeight: 700, color: '#9a9fb5', letterSpacing: '0.03em', textTransform: 'uppercase' }}>
          <span>Name</span><span>Description</span><span>Rate</span><span>Unit</span>
        </div>
        {items.map((it, i) => (
          <div key={it.name + i} style={{ display: 'grid', gridTemplateColumns: '1.4fr 1.4fr 0.9fr 0.7fr', gap: '6px', padding: '8px 10px', borderTop: '1px solid #f4f3f8', fontSize: '9px', alignItems: 'center', animation: i === 0 && items.length > 5 ? 'bk-rowin 0.5s ease' : undefined }}>
            <span style={{ color: BRAND, fontWeight: 600 }}>{it.name}</span>
            <span style={{ color: '#555' }}>{it.desc}</span>
            <span style={{ fontWeight: 600 }}>{it.rate}</span>
            <span style={{ color: MUTED }}>{it.unit}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ═══════════════ New Item form ═══════════════ */
function Field({ label, value, filled, required, dataB, w }: { label: string; value?: string; filled?: boolean; required?: boolean; dataB?: string; w?: string }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
      <span style={{ width: '64px', fontSize: '8.5px', fontWeight: 600, color: required ? '#DC2626' : '#555', flexShrink: 0 }}>{label}{required ? '*' : ''}</span>
      <div data-b={dataB} style={{ flex: w ? undefined : 1, width: w, height: '22px', border: `1px solid ${filled ? BRAND : '#e6e5ef'}`, borderRadius: '6px', padding: '0 8px', display: 'flex', alignItems: 'center', fontSize: '8.5px', color: filled ? '#1a1a1a' : '#bbb', background: '#fff', transition: 'border-color 0.2s' }}>
        {filled ? value : `Enter ${label.toLowerCase()}`}
      </div>
    </div>
  );
}

function NewItemScreen({ fill }: { fill: number }) {
  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
        <span style={{ fontSize: '12px', fontWeight: 800 }}>New Item</span>
        <X size={13} style={{ marginLeft: 'auto', color: '#aaa' }} />
      </div>
      <div style={{ background: '#fff', border: '1px solid #f0eff6', borderRadius: '10px', padding: '12px', flex: 1, minHeight: 0 }}>
        <Field label="Name" required value={NEW_ITEM.name} filled={fill >= 1} dataB="itemfield-1" />
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
          <span style={{ width: '64px', fontSize: '8.5px', fontWeight: 600, color: '#555' }}>Type</span>
          <span data-b="itemfield-2" style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '8.5px' }}>
            <span style={{ width: '11px', height: '11px', borderRadius: '50%', border: `3px solid ${fill >= 2 ? BRAND : '#ccc'}` }} /> Goods
            <span style={{ width: '11px', height: '11px', borderRadius: '50%', border: '1.5px solid #ccc', marginLeft: '8px' }} /> Service
          </span>
        </div>
        <div style={{ borderTop: '1px solid #f2f1f7', margin: '4px 0 10px' }} />
        <div style={{ fontSize: '9px', fontWeight: 700, color: '#1a1a1a', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '5px' }}><Check size={11} style={{ color: BRAND }} /> Sales Information</div>
        <Field label="Selling Price" required value={NEW_ITEM.rate} filled={fill >= 3} dataB="itemfield-3" w="90px" />
        <div style={{ fontSize: '9px', fontWeight: 700, color: '#1a1a1a', margin: '10px 0 8px', display: 'flex', alignItems: 'center', gap: '5px' }}><Check size={11} style={{ color: BRAND }} /> Purchase Information</div>
        <Field label="Cost Price" required value={NEW_ITEM.prate} filled={fill >= 4} dataB="itemfield-4" w="90px" />
      </div>
      <div style={{ display: 'flex', gap: '8px', marginTop: '10px' }}>
        <span data-b="item-save" style={{ background: BRAND, color: '#fff', borderRadius: '7px', padding: '6px 18px', fontSize: '9.5px', fontWeight: 700 }}>Save</span>
        <span style={{ color: MUTED, padding: '6px 8px', fontSize: '9.5px', fontWeight: 600 }}>Cancel</span>
      </div>
    </div>
  );
}

/* ═══════════════ Customers ═══════════════ */
function CustomersScreen({ customers }: { customers: Customer[] }) {
  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <div style={{ fontSize: '12px', fontWeight: 800, marginBottom: '10px' }}>Customers</div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
        <div style={{ flex: 1, display: 'flex', alignItems: 'center', gap: '5px', background: '#fff', border: '1px solid #eee', borderRadius: '7px', padding: '5px 9px' }}><Search size={10} style={{ color: '#bbb' }} /><span style={{ fontSize: '8.5px', color: '#bbb' }}>Search by name…</span></div>
        <span style={{ fontSize: '8.5px', color: '#555', border: '1px solid #eee', borderRadius: '7px', padding: '5px 10px', background: '#fff' }}>Active ▾</span>
        <span data-b="new-customer" style={{ display: 'flex', alignItems: 'center', gap: '4px', background: BRAND, color: '#fff', borderRadius: '7px', padding: '5px 11px', fontSize: '9px', fontWeight: 700 }}><Plus size={11} /> New Customer</span>
      </div>
      <div style={{ background: '#fff', border: '1px solid #f0eff6', borderRadius: '10px', overflow: 'hidden' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr 1fr 0.6fr', gap: '6px', padding: '7px 10px', background: '#faf9fc', fontSize: '7.5px', fontWeight: 700, color: '#9a9fb5', textTransform: 'uppercase' }}>
          <span>Name</span><span>Email</span><span>Phone</span><span>Status</span>
        </div>
        {customers.map((c, i) => (
          <div key={c.email + i} style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr 1fr 0.6fr', gap: '6px', padding: '8px 10px', borderTop: '1px solid #f4f3f8', fontSize: '8.5px', alignItems: 'center', animation: i === 0 && customers.length > 4 ? 'bk-rowin 0.5s ease' : undefined }}>
            <span style={{ fontWeight: 600 }}>{c.name}</span>
            <span style={{ color: '#555' }}>{c.email}</span>
            <span style={{ color: MUTED }}>{c.phone}</span>
            <span style={{ fontSize: '7px', fontWeight: 700, color: '#15803D', background: '#DCFCE7', borderRadius: '5px', padding: '2px 6px', justifySelf: 'start' }}>Active</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ═══════════════ New Customer form ═══════════════ */
function NewCustomerScreen({ fill }: { fill: number }) {
  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <div style={{ fontSize: '12px', fontWeight: 800, marginBottom: '10px' }}>New Customer</div>
      <div style={{ background: '#fff', border: '1px solid #f0eff6', borderRadius: '10px', padding: '12px', flex: 1, minHeight: 0 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '9px' }}>
          <span style={{ width: '70px', fontSize: '8.5px', fontWeight: 600, color: '#555' }}>Customer Type</span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '8.5px' }}>
            <span style={{ width: '11px', height: '11px', borderRadius: '50%', border: `3px solid ${BRAND}` }} /> Business
            <span style={{ width: '11px', height: '11px', borderRadius: '50%', border: '1.5px solid #ccc', marginLeft: '8px' }} /> Individual
          </span>
        </div>
        <Field label="Display Name" required value={NEW_CUSTOMER.name} filled={fill >= 1} dataB="custfield-1" />
        <Field label="Email" value={NEW_CUSTOMER.email} filled={fill >= 2} dataB="custfield-2" />
        <Field label="Phone" value={NEW_CUSTOMER.phone} filled={fill >= 3} dataB="custfield-3" w="120px" />
        <div style={{ display: 'flex', gap: '10px', borderBottom: '1px solid #f2f1f7', paddingBottom: '6px', marginTop: '4px', fontSize: '8px' }}>
          <span style={{ color: BRAND, fontWeight: 700, borderBottom: `2px solid ${BRAND}`, paddingBottom: '4px' }}>Other Details</span>
          <span style={{ color: MUTED }}>Address</span>
          <span style={{ color: MUTED }}>Contact Persons</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '9px' }}>
          <span style={{ width: '70px', fontSize: '8.5px', fontWeight: 600, color: '#555' }}>Currency</span>
          <div style={{ flex: 1, height: '22px', border: '1px solid #e6e5ef', borderRadius: '6px', padding: '0 8px', display: 'flex', alignItems: 'center', fontSize: '8.5px', color: '#1a1a1a' }}>GBP – British Pound</div>
        </div>
      </div>
      <div style={{ display: 'flex', gap: '8px', marginTop: '10px' }}>
        <span data-b="customer-save" style={{ background: BRAND, color: '#fff', borderRadius: '7px', padding: '6px 18px', fontSize: '9.5px', fontWeight: 700 }}>Save</span>
        <span style={{ color: MUTED, padding: '6px 8px', fontSize: '9.5px', fontWeight: 600 }}>Cancel</span>
      </div>
    </div>
  );
}

/* ═══════════════ Invoices ═══════════════ */
function InvoicesScreen({ invoices }: { invoices: Invoice[] }) {
  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
        <span style={{ fontSize: '12px', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '4px' }}>All Invoices <ChevronDown size={12} style={{ color: MUTED }} /></span>
        <span style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '4px', background: BRAND, color: '#fff', borderRadius: '7px', padding: '5px 11px', fontSize: '9px', fontWeight: 700 }}><Plus size={11} /> New</span>
      </div>
      <div style={{ background: '#fff', border: '1px solid #f0eff6', borderRadius: '10px', overflow: 'hidden' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '0.8fr 1.3fr 0.8fr 1fr 0.6fr', gap: '6px', padding: '7px 10px', background: '#faf9fc', fontSize: '7.5px', fontWeight: 700, color: '#9a9fb5', textTransform: 'uppercase' }}>
          <span>Invoice#</span><span>Customer</span><span>Date</span><span>Amount</span><span>Status</span>
        </div>
        {invoices.map((inv, i) => (
          <div key={inv.no} data-b={`invoice-row-${i}`} style={{ display: 'grid', gridTemplateColumns: '0.8fr 1.3fr 0.8fr 1fr 0.6fr', gap: '6px', padding: '8px 10px', borderTop: '1px solid #f4f3f8', fontSize: '8.5px', alignItems: 'center', cursor: 'pointer' }}>
            <span style={{ fontWeight: 600 }}>{inv.no}</span>
            <span style={{ color: '#555' }}>{inv.customer}</span>
            <span style={{ color: MUTED }}>{inv.date}</span>
            <span style={{ fontWeight: 600 }}>{inv.amount}</span>
            <span style={{ fontSize: '7px', fontWeight: 700, color: inv.sc, background: inv.sbg, borderRadius: '5px', padding: '2px 6px', justifySelf: 'start' }}>{inv.status}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ═══════════════ Invoice detail ═══════════════ */
function InvoiceDetailScreen({ inv }: { inv: Invoice }) {
  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '7px', marginBottom: '10px', flexWrap: 'wrap' }}>
        <span style={{ fontSize: '12px', fontWeight: 800 }}>Invoice {inv.no}</span>
        <span style={{ fontSize: '7px', fontWeight: 700, color: inv.sc, background: inv.sbg, borderRadius: '5px', padding: '2px 6px' }}>{inv.status}</span>
        <span style={{ marginLeft: 'auto', display: 'flex', gap: '5px' }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: '3px', background: BRAND, color: '#fff', borderRadius: '6px', padding: '4px 8px', fontSize: '8px', fontWeight: 700 }}><Send size={9} /> Send</span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '3px', background: '#16A34A', color: '#fff', borderRadius: '6px', padding: '4px 8px', fontSize: '8px', fontWeight: 700 }}><CreditCard size={9} /> Payment Link</span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '3px', border: '1px solid #e6e5ef', color: '#555', borderRadius: '6px', padding: '4px 8px', fontSize: '8px', fontWeight: 600 }}><Download size={9} /> PDF</span>
        </span>
      </div>
      <div style={{ background: '#fff', border: '1px solid #f0eff6', borderRadius: '10px', padding: '11px', marginBottom: '9px' }}>
        <div style={{ fontSize: '9px', fontWeight: 700, marginBottom: '8px' }}>Invoice Details</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '8px', fontSize: '8px' }}>
          {[['Customer', inv.customer], ['Invoice Date', '24 Jun 2026'], ['Due Date', inv.due + ' 2026'], ['Payment Terms', 'Due on Receipt']].map(([l, v]) => (
            <div key={l}><div style={{ color: MUTED, marginBottom: '2px' }}>{l}</div><div style={{ fontWeight: 600 }}>{v}</div></div>
          ))}
        </div>
      </div>
      <div style={{ background: '#fff', border: '1px solid #f0eff6', borderRadius: '10px', padding: '11px', flex: 1, minHeight: 0 }}>
        <div style={{ fontSize: '9px', fontWeight: 700, marginBottom: '8px' }}>Items</div>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 0.6fr 0.8fr 0.9fr', gap: '6px', fontSize: '7.5px', color: '#9a9fb5', textTransform: 'uppercase', fontWeight: 700, paddingBottom: '6px', borderBottom: '1px solid #f2f1f7' }}>
          <span>Item</span><span>Qty</span><span>Rate</span><span style={{ textAlign: 'right' }}>Amount</span>
        </div>
        {[['Marketing Retainer', '1', '1,200.00', '1,200.00'], ['Consulting Hour', '4', '90.00', '360.00']].map((r) => (
          <div key={r[0]} style={{ display: 'grid', gridTemplateColumns: '2fr 0.6fr 0.8fr 0.9fr', gap: '6px', fontSize: '8.5px', padding: '7px 0', borderBottom: '1px solid #f6f5fa', alignItems: 'center' }}>
            <span style={{ fontWeight: 600 }}>{r[0]}</span><span>{r[1]}</span><span>{r[2]}</span><span style={{ textAlign: 'right' }}>{r[3]}</span>
          </div>
        ))}
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '8px' }}>
          <div style={{ width: '120px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '8px', color: MUTED, marginBottom: '4px' }}><span>Sub Total</span><span>1,560.00</span></div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '10px', fontWeight: 800 }}><span>Total (GBP)</span><span style={{ color: BRAND }}>1,560.00</span></div>
          </div>
        </div>
      </div>
    </div>
  );
}
