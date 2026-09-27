'use client';

import { useEffect, useRef, useState } from 'react';
import {
  LayoutGrid, FileEdit, Send, CheckCircle2, AlertTriangle, Plus, Check, Mail,
} from 'lucide-react';

const BLUE = '#4A2BE8';
const MUTED = '#6b7090';

type Filter = 'all' | 'draft' | 'sent' | 'paid' | 'overdue';
const FILTERS: { key: Filter; label: string; Icon: typeof LayoutGrid }[] = [
  { key: 'all', label: 'All Invoices', Icon: LayoutGrid },
  { key: 'draft', label: 'Draft', Icon: FileEdit },
  { key: 'sent', label: 'Sent', Icon: Send },
  { key: 'paid', label: 'Paid', Icon: CheckCircle2 },
  { key: 'overdue', label: 'Overdue', Icon: AlertTriangle },
];

type Status = 'Draft' | 'Sent' | 'Paid' | 'Overdue';
type Invoice = { no: string; who: string; date: string; amt: string; status: Status };
const STYLE: Record<Status, { c: string; bg: string }> = {
  Draft: { c: '#6b7090', bg: '#F1F1F6' },
  Sent: { c: '#2563EB', bg: '#EFF6FF' },
  Paid: { c: '#15803D', bg: '#DCFCE7' },
  Overdue: { c: '#DC2626', bg: '#FEE2E2' },
};

const INVOICES: Invoice[] = [
  { no: 'INV-0042', who: 'BrightCore Ltd', date: 'Today', amt: '£1,200.00', status: 'Sent' },
  { no: 'INV-0041', who: 'Metro Design Studio', date: '09 Jun', amt: '£2,800.00', status: 'Paid' },
  { no: 'INV-0040', who: 'Nexa Technologies', date: '28 May', amt: '£4,800.00', status: 'Overdue' },
  { no: 'INV-0039', who: 'Amara Okafor', date: '24 May', amt: '£960.00', status: 'Paid' },
  { no: 'INV-0038', who: 'Lumen Studio', date: '—', amt: '£1,450.00', status: 'Draft' },
  { no: 'INV-0037', who: 'Halcyon Group', date: '20 May', amt: '£3,200.00', status: 'Sent' },
];

const CIRC = 2 * Math.PI * 30;

export function BooksInvoicingMockup({ autoplay = true }: { autoplay?: boolean } = {}) {
  const [filter, setFilter] = useState<Filter>('all');
  const [rows, setRows] = useState<Invoice[]>(INVOICES);
  const [paidNow, setPaidNow] = useState<string | null>(null);   // no. of invoice just marked paid
  const [outstanding, setOutstanding] = useState(0);
  const [collected, setCollected] = useState(0);
  const [donut, setDonut] = useState(0);                          // paid-on-time %
  const [sendState, setSendState] = useState<'idle' | 'busy' | 'done'>('idle');
  const [toast, setToast] = useState<string | null>(null);
  const [cur, setCur] = useState({ x: 70, y: 130 });
  const [press, setPress] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  // count-up the stat tiles + donut on mount
  useEffect(() => {
    let raf = 0; const t0 = performance.now();
    const step = (t: number) => {
      const p = Math.min(1, (t - t0) / 1100); const e = 1 - Math.pow(1 - p, 3);
      if (p >= 1) { setOutstanding(14200); setCollected(38900); setDonut(92); return; }
      setOutstanding(Math.round(14200 * e)); setCollected(Math.round(38900 * e)); setDonut(Math.round(92 * e));
      raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, []);

  useEffect(() => {
    if (!autoplay) return;
    let cancelled = false;
    const timers: ReturnType<typeof setTimeout>[] = [];
    const wait = (ms: number) => new Promise<void>((r) => { const t = setTimeout(r, ms); timers.push(t); });
    const tapOn = (sel: string) => new Promise<void>((resolve) => {
      const root = rootRef.current; const el = root?.querySelector<HTMLElement>(`[data-i="${sel}"]`);
      if (root && el) {
        const rb = root.getBoundingClientRect(); const tb = el.getBoundingClientRect();
        const zoom = root.offsetWidth ? rb.width / root.offsetWidth : 1;
        setCur({ x: (tb.left - rb.left + tb.width * 0.6) / zoom, y: (tb.top - rb.top + tb.height / 2) / zoom });
      }
      setPress(true);
      const a = setTimeout(() => setPress(false), 160);
      const b = setTimeout(resolve, 260); timers.push(a, b);
    });

    const run = async () => {
      const order: Filter[] = ['all', 'sent', 'paid', 'overdue', 'draft'];
      let i = 0;
      while (!cancelled) {
        const next = order[i];
        await tapOn(`nav-${next}`); if (cancelled) return;
        setFilter(next); setPaidNow(null);
        await wait(1500); if (cancelled) return;

        // on the "sent" view, mark the top sent invoice as Paid (badge flips + toast)
        if (next === 'sent') {
          await tapOn('row-INV-0042');
          setRows((prev) => prev.map((r) => (r.no === 'INV-0042' ? { ...r, status: 'Paid', date: 'Today' } : r)));
          setPaidNow('INV-0042'); setToast('Payment received · £1,200.00');
          setOutstanding((v) => Math.max(0, v - 1200)); setCollected((v) => v + 1200);
          setDonut((v) => Math.min(96, v + 1));
          await wait(1900); setToast(null);
        }

        // on the "all" view, run the Send Invoice action
        if (next === 'all') {
          await tapOn('send-invoice'); setSendState('busy'); await wait(950); setSendState('done');
          setToast('Invoice INV-0043 sent'); await wait(1600); setSendState('idle'); setToast(null);
        }

        i = (i + 1) % order.length;
      }
    };
    run();
    return () => { cancelled = true; timers.forEach(clearTimeout); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoplay]);

  const gbp = (n: number) => '£' + n.toLocaleString('en-GB');
  const shown = rows.filter((r) => filter === 'all' || r.status.toLowerCase() === filter);
  const donutDash = (donut / 100) * CIRC;

  return (
    <div ref={rootRef} style={{ position: 'relative', width: '720px', height: '320px', fontFamily: 'Poppins, sans-serif', color: '#1a1a1a' }}>
      {/* sidebar */}
      <div style={{ position: 'absolute', left: 0, top: 0, width: '150px', height: '260px', borderRadius: '14px', background: '#fff', border: '1px solid #ECEBF5', boxShadow: 'rgba(40,20,130,0.28) 0px 24px 50px -24px', padding: '14px 10px', display: 'flex', flexDirection: 'column', gap: '3px' }}>
        <div style={{ fontSize: '12px', fontWeight: 800, padding: '0 6px 8px' }}>Invoices</div>
        {FILTERS.map((f) => {
          const on = f.key === filter;
          return (
            <div key={f.key} data-i={`nav-${f.key}`} style={{ display: 'flex', alignItems: 'center', gap: '7px', padding: '7px 8px', borderRadius: '7px', fontSize: '9.5px', background: on ? '#EEEAFF' : 'transparent', color: on ? BLUE : MUTED, fontWeight: on ? 700 : 500, transition: 'background 0.2s, color 0.2s' }}>
              <f.Icon size={13} /><span>{f.label}</span>
            </div>
          );
        })}
      </div>

      {/* main invoices card */}
      <div style={{ position: 'absolute', left: '150px', top: 0, width: '390px', height: '290px', borderRadius: '16px', background: '#fff', border: '1px solid #ECEBF5', boxShadow: 'rgba(40,20,130,0.3) 0px 30px 60px -28px', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
        <div style={{ padding: '14px 16px 0px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div>
            <div style={{ fontSize: '13px', fontWeight: 800 }}>Invoices</div>
            <div style={{ fontSize: '8.5px', color: '#8C90A8', marginTop: '4px' }}>{shown.length} {filter === 'all' ? 'total' : filter} · updated just now</div>
          </div>
          <span data-i="send-invoice" style={{ display: 'flex', alignItems: 'center', gap: '5px', background: sendState === 'done' ? '#16A34A' : BLUE, color: '#fff', borderRadius: '8px', padding: '6px 10px', fontSize: '9px', fontWeight: 700, transform: press ? 'scale(0.97)' : 'scale(1)', transition: 'transform 0.13s, background 0.3s' }}>
            {sendState === 'busy' ? <><span className="bi-spin" style={{ width: '10px', height: '10px', border: '2px solid rgba(255,255,255,0.4)', borderTopColor: '#fff', borderRadius: '50%' }} /> Sending…</>
              : sendState === 'done' ? <><Check size={11} /> Sent</>
              : <><Plus size={11} /> New Invoice</>}
          </span>
        </div>

        {/* stat tiles */}
        <div style={{ padding: '12px 16px 0px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
          <div style={{ border: '1px solid #F0EFF6', borderRadius: '10px', padding: '9px 11px', boxShadow: 'rgba(30,20,90,0.03) 0px 2px 6px' }}>
            <div style={{ fontSize: '8.5px', color: MUTED, fontWeight: 600 }}>Outstanding</div>
            <div style={{ fontSize: '16px', fontWeight: 800, marginTop: '4px' }}>{gbp(outstanding)}</div>
            <div style={{ fontSize: '8px', fontWeight: 700, color: '#EA580C', marginTop: '3px' }}>3 awaiting payment</div>
          </div>
          <div style={{ border: '1px solid #F0EFF6', borderRadius: '10px', padding: '9px 11px', boxShadow: 'rgba(30,20,90,0.03) 0px 2px 6px' }}>
            <div style={{ fontSize: '8.5px', color: MUTED, fontWeight: 600 }}>Paid this month</div>
            <div style={{ fontSize: '16px', fontWeight: 800, marginTop: '4px' }}>{gbp(collected)}</div>
            <div style={{ fontSize: '8px', fontWeight: 700, color: '#16A34A', marginTop: '3px' }}>▲ 18%</div>
          </div>
        </div>

        {/* invoice list */}
        <div style={{ padding: '12px 16px 14px', display: 'flex', flexDirection: 'column', gap: '6px', overflow: 'hidden', flex: '1 1 0%' }}>
          {shown.slice(0, 3).map((r, idx) => {
            const st = STYLE[r.status];
            const justPaid = paidNow === r.no;
            return (
              <div key={r.no} data-i={`row-${r.no}`} style={{ display: 'flex', alignItems: 'center', gap: '9px', border: `1px solid ${justPaid ? '#BBF7D0' : '#F0EFF6'}`, background: justPaid ? '#F0FDF4' : '#fff', borderRadius: '10px', padding: '8px 10px', animation: `bi-fade 0.4s ${idx * 0.05}s both`, transition: 'background 0.3s, border-color 0.3s' }}>
                <span style={{ width: '26px', height: '26px', borderRadius: '8px', background: '#F4F3F9', color: BLUE, display: 'grid', placeItems: 'center', fontSize: '8px', fontWeight: 800, flex: '0 0 auto' }}>{r.who.split(' ').map((w) => w[0]).slice(0, 2).join('')}</span>
                <div style={{ minWidth: 0, flex: 1 }}>
                  <div style={{ fontSize: '9.5px', fontWeight: 700, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{r.who}</div>
                  <div style={{ fontSize: '8px', color: MUTED }}>{r.no} · {r.date}</div>
                </div>
                <span style={{ fontSize: '10.5px', fontWeight: 700 }}>{r.amt}</span>
                <span style={{ fontSize: '7.5px', fontWeight: 700, color: st.c, background: st.bg, borderRadius: '5px', padding: '2px 7px', flex: '0 0 auto' }}>{r.status}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* paid-on-time donut widget */}
      <div style={{ position: 'absolute', left: '400px', top: '128px', width: '110px', height: '110px', borderRadius: '14px', background: '#fff', border: '1px solid #ECEBF5', boxShadow: 'rgba(40,20,130,0.35) 0px 20px 40px -20px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '3px' }}>
        <div style={{ position: 'relative', width: '68px', height: '68px' }}>
          <svg width="68" height="68" style={{ transform: 'rotate(-90deg)' }}>
            <circle cx={34} cy={34} r={30} style={{ fill: 'none', stroke: '#E6E1FF', strokeWidth: 11 }} />
            <circle cx={34} cy={34} r={30} style={{ fill: 'none', stroke: '#16A34A', strokeWidth: 11, strokeLinecap: 'round', strokeDasharray: `${donutDash} 999`, transition: 'stroke-dasharray 0.4s' }} />
          </svg>
          <span style={{ position: 'absolute', inset: 0, display: 'grid', placeItems: 'center', fontSize: '13px', fontWeight: 800 }}>{donut}%</span>
        </div>
        <span style={{ fontSize: '7.5px', color: MUTED, fontWeight: 600 }}>Paid on time</span>
      </div>

      {/* payment link / action card */}
      <div style={{ position: 'absolute', left: '526px', top: '72px', width: '186px', borderRadius: '16px', background: '#fff', border: '1px solid #ECEBF5', boxShadow: 'rgba(40,20,130,0.35) 0px 30px 60px -20px', padding: '14px', display: 'flex', flexDirection: 'column', gap: '9px' }}>
        <div style={{ fontSize: '12px', fontWeight: 800 }}>Payment Options</div>
        {[
          { key: 'card', label: 'Card', desc: 'Visa · Mastercard', bg: '#EFF6FF', fg: '#2563EB', on: true },
          { key: 'bank', label: 'Bank Transfer', desc: 'Faster Payments', bg: '#F3E8FF', fg: '#7C3AED', on: true },
          { key: 'link', label: 'Payment Link', desc: 'Share anywhere', bg: '#DCFCE7', fg: '#16A34A', on: true },
        ].map((o) => (
          <div key={o.key} style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '7px 8px', borderRadius: '8px', border: '1px solid #F0EFF6', fontSize: '9.5px' }}>
            <span style={{ width: '18px', height: '18px', borderRadius: '5px', display: 'grid', placeItems: 'center', background: o.bg, color: o.fg }}><Mail size={11} /></span>
            <div style={{ minWidth: 0 }}>
              <div style={{ fontWeight: 700 }}>{o.label}</div>
              <div style={{ fontSize: '7.5px', color: MUTED }}>{o.desc}</div>
            </div>
            <span style={{ marginLeft: 'auto', color: '#16A34A' }}><Check size={13} /></span>
          </div>
        ))}
      </div>

      {/* toast */}
      {toast && (
        <div style={{ position: 'absolute', left: '160px', bottom: '10px', zIndex: 40, background: '#111827', color: '#fff', borderRadius: '9px', padding: '8px 12px', fontSize: '9px', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '7px', whiteSpace: 'nowrap', boxShadow: 'rgba(20,10,60,0.3) 0px 12px 28px -10px', animation: 'bi-pop 0.3s ease' }}>
          <span style={{ width: '15px', height: '15px', borderRadius: '50%', background: '#22C55E', display: 'grid', placeItems: 'center' }}><Check size={10} color="#fff" /></span>{toast}
        </div>
      )}

      {/* invisible click point — pointer hidden, soft ripple marks each tap */}
      {press && <span style={{ position: 'absolute', left: cur.x, top: cur.y, width: '24px', height: '24px', marginLeft: '-12px', marginTop: '-12px', borderRadius: '50%', background: 'rgba(74,43,232,0.16)', pointerEvents: 'none', zIndex: 50, animation: 'bi-tap 0.5s ease-out' }} />}

      <style>{`
        @keyframes bi-fade { from { opacity: 0; transform: translateY(-4px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes bi-pop { from { opacity: 0; transform: translateY(6px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes bi-tap { from { opacity: 0.9; transform: scale(0.4); } to { opacity: 0; transform: scale(1.9); } }
        @keyframes bi-spin { to { transform: rotate(360deg); } }
        .bi-spin { animation: bi-spin 0.7s linear infinite; }
      `}</style>
    </div>
  );
}
