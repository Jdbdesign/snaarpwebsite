'use client';

import { useEffect, useRef, useState } from 'react';
import {
  ReceiptText, Scale, Percent, FileText, ArrowLeftRight, Clock,
  Filter, MoreHorizontal, ArrowUp, ArrowDown, ChevronDown, Download, Check,
} from 'lucide-react';

const PURPLE = '#7C3AED';
const TEAL = '#22C5A5';
const EXP = '#8B6CFF';
const MUTED = '#6b7090';

type ReportKey = 'pl' | 'balance' | 'vat' | 'tax' | 'cash' | 'aged';
const REPORTS: { key: ReportKey; label: string; Icon: typeof ReceiptText }[] = [
  { key: 'pl', label: 'Profit & Loss', Icon: ReceiptText },
  { key: 'balance', label: 'Balance Sheet', Icon: Scale },
  { key: 'vat', label: 'VAT Report', Icon: Percent },
  { key: 'tax', label: 'Tax Summary', Icon: FileText },
  { key: 'cash', label: 'Cash Flow', Icon: ArrowLeftRight },
  { key: 'aged', label: 'Aged Debtors', Icon: Clock },
];

// per-report dataset: title, income/expense figures, deltas, chart line paths, margin %
const DATA: Record<ReportKey, {
  title: string; income: number; expense: number; incDelta: string; expDelta: string;
  incLine: string; incArea: string; expLine: string; margin: number;
}> = {
  pl: {
    title: 'Profit & Loss', income: 125600, expense: 66430, incDelta: '12%', expDelta: '8%',
    incArea: 'M0 68.7 C7 66,29 58,43 57 C58 56,72 66,87 63 C101 60,116 42,130 39 C144 37,159 49,173 47 C188 45,202 31,217 26 C231 20,253 16,260 14 L260 108 L0 108 Z',
    incLine: 'M0 68.7 C7 66,29 58,43 57 C58 56,72 66,87 63 C101 60,116 42,130 39 C144 37,159 49,173 47 C188 45,202 31,217 26 C231 20,253 16,260 14',
    expLine: 'M0 78.5 C7 77,29 75,43 73 C58 70,72 65,87 65 C101 64,116 72,130 71 C144 70,159 60,173 59 C188 58,202 64,217 63 C231 62,253 53,260 51',
    margin: 47,
  },
  balance: {
    title: 'Balance Sheet', income: 214300, expense: 88900, incDelta: '9%', expDelta: '4%',
    incArea: 'M0 82 C7 80,29 60,43 58 C58 56,72 50,87 48 C101 46,116 40,130 36 C144 32,159 30,173 28 C188 26,202 22,217 20 C231 18,253 14,260 12 L260 108 L0 108 Z',
    incLine: 'M0 82 C7 80,29 60,43 58 C58 56,72 50,87 48 C101 46,116 40,130 36 C144 32,159 30,173 28 C188 26,202 22,217 20 C231 18,253 14,260 12',
    expLine: 'M0 90 C7 89,29 82,43 80 C58 78,72 76,87 74 C101 72,116 70,130 68 C144 66,159 64,173 62 C188 60,202 58,217 56 C231 54,253 52,260 50',
    margin: 63,
  },
  vat: {
    title: 'VAT Report', income: 38240, expense: 21160, incDelta: '6%', expDelta: '11%',
    incArea: 'M0 60 C7 62,29 70,43 68 C58 66,72 50,87 52 C101 54,116 66,130 64 C144 62,159 46,173 48 C188 50,202 60,217 58 C231 56,253 42,260 40 L260 108 L0 108 Z',
    incLine: 'M0 60 C7 62,29 70,43 68 C58 66,72 50,87 52 C101 54,116 66,130 64 C144 62,159 46,173 48 C188 50,202 60,217 58 C231 56,253 42,260 40',
    expLine: 'M0 72 C7 73,29 78,43 76 C58 74,72 68,87 70 C101 72,116 80,130 78 C144 76,159 70,173 72 C188 74,202 80,217 78 C231 76,253 68,260 66',
    margin: 32,
  },
  tax: {
    title: 'Tax Summary', income: 96800, expense: 42300, incDelta: '15%', expDelta: '5%',
    incArea: 'M0 74 C7 71,29 66,43 60 C58 55,72 58,87 54 C101 50,116 52,130 46 C144 40,159 44,173 38 C188 33,202 36,217 30 C231 24,253 20,260 16 L260 108 L0 108 Z',
    incLine: 'M0 74 C7 71,29 66,43 60 C58 55,72 58,87 54 C101 50,116 52,130 46 C144 40,159 44,173 38 C188 33,202 36,217 30 C231 24,253 20,260 16',
    expLine: 'M0 84 C7 83,29 80,43 79 C58 78,72 76,87 75 C101 74,116 72,130 71 C144 70,159 68,173 67 C188 66,202 64,217 63 C231 62,253 60,260 58',
    margin: 56,
  },
  cash: {
    title: 'Cash Flow', income: 152000, expense: 73450, incDelta: '18%', expDelta: '9%',
    incArea: 'M0 70 C7 64,29 74,43 66 C58 58,72 68,87 58 C101 48,116 60,130 50 C144 40,159 52,173 42 C188 32,202 44,217 34 C231 24,253 30,260 20 L260 108 L0 108 Z',
    incLine: 'M0 70 C7 64,29 74,43 66 C58 58,72 68,87 58 C101 48,116 60,130 50 C144 40,159 52,173 42 C188 32,202 44,217 34 C231 24,253 30,260 20',
    expLine: 'M0 80 C7 78,29 82,43 78 C58 74,72 78,87 74 C101 70,116 74,130 70 C144 66,159 70,173 66 C188 62,202 66,217 62 C231 58,253 56,260 54',
    margin: 52,
  },
  aged: {
    title: 'Aged Debtors', income: 41900, expense: 12400, incDelta: '3%', expDelta: '14%',
    incArea: 'M0 58 C7 60,29 54,43 56 C58 58,72 52,87 54 C101 56,116 50,130 52 C144 54,159 48,173 50 C188 52,202 46,217 48 C231 50,253 44,260 46 L260 108 L0 108 Z',
    incLine: 'M0 58 C7 60,29 54,43 56 C58 58,72 52,87 54 C101 56,116 50,130 52 C144 54,159 48,173 50 C188 52,202 46,217 48 C231 50,253 44,260 46',
    expLine: 'M0 88 C7 87,29 86,43 85 C58 84,72 83,87 82 C101 81,116 80,130 79 C144 78,159 77,173 76 C188 75,202 74,217 73 C231 72,253 71,260 70',
    margin: 74,
  },
};

const CIRC = 2 * Math.PI * 31; // donut circumference (r=31)

export function BooksReportsPreviewMockup({ autoplay = true }: { autoplay?: boolean } = {}) {
  const [active, setActive] = useState<ReportKey>('pl');
  const [income, setIncome] = useState(DATA.pl.income);
  const [expense, setExpense] = useState(DATA.pl.expense);
  const [chartT, setChartT] = useState(1);
  const [marginShown, setMarginShown] = useState(DATA.pl.margin);
  const [fmt, setFmt] = useState<'CSV' | 'Excel'>('CSV');
  const [dl, setDl] = useState<'idle' | 'busy' | 'done'>('idle');
  // static pointer that "rests" on the current target and does a small tap press
  const [cur, setCur] = useState({ x: 90, y: 150 });
  const [press, setPress] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  // animate stats + chart + donut whenever the active report changes
  useEffect(() => {
    const d = DATA[active];
    let raf = 0; const t0 = performance.now();
    const fromInc = income, fromExp = expense, fromMar = marginShown;
    const step = (t: number) => {
      const p = Math.min(1, (t - t0) / 900); const e = 1 - Math.pow(1 - p, 3);
      if (p >= 1) { setIncome(d.income); setExpense(d.expense); setMarginShown(d.margin); setChartT(1); return; }
      setIncome(Math.round(fromInc + (d.income - fromInc) * e));
      setExpense(Math.round(fromExp + (d.expense - fromExp) * e));
      setMarginShown(Math.round(fromMar + (d.margin - fromMar) * e));
      setChartT(p);
      raf = requestAnimationFrame(step);
    };
    setChartT(0); raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active]);

  useEffect(() => {
    if (!autoplay) return;
    let cancelled = false;
    const timers: ReturnType<typeof setTimeout>[] = [];
    const wait = (ms: number) => new Promise<void>((r) => { const t = setTimeout(r, ms); timers.push(t); });
    // place the pointer directly on a target (no gliding) then do a quick tap press
    const tapOn = (sel: string) => new Promise<void>((resolve) => {
      const root = rootRef.current; const el = root?.querySelector<HTMLElement>(`[data-r="${sel}"]`);
      if (root && el) {
        const rb = root.getBoundingClientRect(); const tb = el.getBoundingClientRect();
        const zoom = root.offsetWidth ? rb.width / root.offsetWidth : 1;
        setCur({ x: (tb.left - rb.left + tb.width * 0.62) / zoom, y: (tb.top - rb.top + tb.height / 2) / zoom });
      }
      setPress(true);
      const a = setTimeout(() => setPress(false), 160);
      const b = setTimeout(resolve, 260); timers.push(a, b);
    });

    const run = async () => {
      // full sidebar order — every report shows on the big card
      const order: ReportKey[] = ['pl', 'balance', 'vat', 'tax', 'cash', 'aged'];
      let i = 0;
      while (!cancelled) {
        const next = order[i];
        await tapOn(`nav-${next}`); if (cancelled) return;
        setActive(next);
        await wait(1500); if (cancelled) return;

        // every other report, also demo the export card (toggle format + download)
        if (i % 2 === 1) {
          const nextFmt = fmt === 'CSV' ? 'Excel' : 'CSV';
          await tapOn(`fmt-${nextFmt}`); setFmt(nextFmt); await wait(600);
          await tapOn('download'); setDl('busy'); await wait(950); setDl('done'); await wait(1000); setDl('idle');
          await wait(400);
        }
        i = (i + 1) % order.length;
      }
    };
    run();
    return () => { cancelled = true; timers.forEach(clearTimeout); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoplay, fmt]);

  const d = DATA[active];
  const gbp = (n: number) => '£' + n.toLocaleString('en-GB');
  const incUp = active !== 'aged';
  const marginDash = (marginShown / 100) * CIRC;

  return (
    <div ref={rootRef} style={{ position: 'relative', width: '700px', height: '440px', fontFamily: 'Poppins, sans-serif', color: '#1a1a1a' }}>
      {/* purple blob */}
      <div style={{ position: 'absolute', left: '20px', top: '10px', width: '660px', height: '400px', borderRadius: '26px', background: 'radial-gradient(circle at 60% 40%, rgb(238,233,255), rgba(238,233,255,0) 70%)' }} />

      {/* sidebar */}
      <div style={{ position: 'absolute', left: 0, top: '10px', width: '178px', height: '400px', borderRadius: '14px', background: '#fff', border: '1px solid #ECEBF5', boxShadow: 'rgba(40,20,130,0.28) 0px 24px 50px -24px', padding: '12px 10px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
        <div style={{ fontSize: '12px', fontWeight: 700, color: PURPLE, background: '#F1EDFF', borderRadius: '8px', padding: '9px 10px', marginBottom: '6px' }}>Reports</div>
        {REPORTS.map((r) => {
          const on = r.key === active;
          return (
            <div key={r.key} data-r={`nav-${r.key}`} style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '9px 10px', borderRadius: '8px', fontSize: '10.5px', background: on ? '#F7F5FF' : '#fff', color: on ? PURPLE : MUTED, fontWeight: on ? 700 : 500, border: `1px solid ${on ? '#E4DCFF' : '#F3F2F8'}`, transition: 'background 0.2s, color 0.2s, border-color 0.2s' }}>
              <r.Icon size={14} /><span>{r.label}</span>
            </div>
          );
        })}
      </div>

      {/* P&L card */}
      <div style={{ position: 'absolute', left: '192px', top: 0, width: '448px', height: '330px', borderRadius: '16px', background: '#fff', border: '1px solid #ECEBF5', boxShadow: 'rgba(40,20,130,0.3) 0px 30px 60px -28px', padding: '16px 18px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div>
            <div key={d.title} style={{ fontSize: '14px', fontWeight: 800, letterSpacing: '-0.01em', animation: 'br-fade 0.4s ease' }}>{d.title}</div>
            <div style={{ display: 'inline-flex', marginTop: '6px', fontSize: '9px', fontWeight: 600, color: MUTED, background: '#F5F5FA', borderRadius: '6px', padding: '3px 8px' }}>Apr 2025 – Mar 2026</div>
          </div>
          <span style={{ display: 'flex', gap: '6px', color: '#8C90A8' }}><Filter size={15} /><MoreHorizontal size={15} /></span>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
          <Stat label="Total Income" value={gbp(income)} delta={d.incDelta} up bg="#E7F8EE" fg="#16A34A" />
          <Stat label="Total Expenses" value={gbp(expense)} delta={d.expDelta} up={false} bg="#FDECEC" fg="#E11D48" />
        </div>
        <div style={{ flex: '1 1 0%', display: 'grid', gridTemplateColumns: '1fr 120px', gap: '10px', minHeight: 0 }}>
          {/* chart */}
          <div style={{ border: '1px solid #F0EFF6', borderRadius: '10px', padding: '10px', position: 'relative' }}>
            <div style={{ display: 'flex', gap: '10px', fontSize: '8px', color: MUTED, fontWeight: 600 }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><span style={{ width: '10px', height: '2.5px', borderRadius: '2px', background: TEAL }} />Income</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><span style={{ width: '10px', height: '2.5px', borderRadius: '2px', background: EXP }} />Expenses</span>
            </div>
            <svg width="260" height="110" style={{ position: 'absolute', left: '12px', top: '28px', overflow: 'visible' }}>
              {[0, 36, 72, 108].map((y, i) => <line key={y} x1={0} y1={y} x2={260} y2={y} style={{ stroke: i === 3 ? '#ECEBF5' : '#F3F2F8' }} />)}
              <path d={d.incArea} style={{ fill: 'rgba(34,197,165,0.08)', opacity: chartT }} />
              <path d={d.incLine} style={{ fill: 'none', stroke: TEAL, strokeWidth: 2, strokeLinecap: 'round', strokeDasharray: 340, strokeDashoffset: 340 * (1 - chartT) }} />
              <path d={d.expLine} style={{ fill: 'none', stroke: EXP, strokeWidth: 2, strokeLinecap: 'round', strokeDasharray: 340, strokeDashoffset: 340 * (1 - chartT) }} />
            </svg>
            <div style={{ position: 'absolute', left: '12px', right: '10px', bottom: '6px', display: 'flex', justifyContent: 'space-between', fontSize: '7.5px', color: '#A3A7BD' }}>
              {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'].map((m) => <span key={m}>{m}</span>)}
            </div>
          </div>
          {/* margin donut */}
          <div style={{ border: '1px solid #F0EFF6', borderRadius: '10px', padding: '10px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
            <span style={{ alignSelf: 'flex-start', display: 'flex', alignItems: 'center', gap: '4px', fontSize: '8px', color: MUTED, fontWeight: 600 }}><span style={{ width: '7px', height: '7px', borderRadius: '2px', background: PURPLE }} />Margin</span>
            <div style={{ position: 'relative', width: '80px', height: '80px' }}>
              <svg width="80" height="80" style={{ transform: 'rotate(-90deg)' }}>
                <circle cx={40} cy={40} r={31} style={{ fill: 'none', stroke: '#E6E1FF', strokeWidth: 13 }} />
                <circle cx={40} cy={40} r={31} style={{ fill: 'none', stroke: PURPLE, strokeWidth: 13, strokeLinecap: 'round', strokeDasharray: `${marginDash} 999`, transition: 'stroke-dasharray 0.2s' }} />
              </svg>
              <span style={{ position: 'absolute', inset: 0, display: 'grid', placeItems: 'center', fontSize: '12px', fontWeight: 800 }}>{marginShown}%</span>
            </div>
          </div>
        </div>
      </div>

      {/* export card */}
      <div style={{ position: 'absolute', left: '500px', top: '160px', width: '196px', borderRadius: '16px', background: '#fff', border: '1px solid #ECEBF5', boxShadow: 'rgba(40,20,130,0.35) 0px 30px 60px -20px', padding: '14px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <div style={{ fontSize: '12px', fontWeight: 800 }}>Export Report</div>
        {(['CSV', 'Excel'] as const).map((f) => {
          const on = f === fmt;
          return (
            <div key={f} data-r={`fmt-${f}`} style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '9px 10px', borderRadius: '9px', fontSize: '10.5px', fontWeight: 600, border: `1px solid ${on ? '#CFC2FF' : '#F0EFF6'}`, background: on ? '#F7F5FF' : '#fff', transition: 'background 0.2s, border-color 0.2s' }}>
              <span style={{ width: '14px', height: '14px', borderRadius: '50%', border: `1.5px solid ${on ? PURPLE : '#C3C6D6'}`, display: 'grid', placeItems: 'center' }}><span style={{ width: '6px', height: '6px', borderRadius: '50%', background: on ? PURPLE : 'transparent' }} /></span>
              {f}<ChevronDown size={14} style={{ marginLeft: 'auto', color: '#A3A7BD' }} />
            </div>
          );
        })}
        <button data-r="download" style={{ marginTop: '4px', height: '36px', border: 'none', borderRadius: '9px', background: dl === 'done' ? '#16A34A' : PURPLE, color: '#fff', fontSize: '11.5px', fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', boxShadow: 'rgba(124,58,237,0.8) 0px 10px 20px -10px', transform: press ? 'scale(0.96)' : 'scale(1)', transition: 'transform 0.13s, background 0.3s' }}>
          {dl === 'busy' ? <><span className="br-spin" style={{ width: '12px', height: '12px', border: '2px solid rgba(255,255,255,0.4)', borderTopColor: '#fff', borderRadius: '50%' }} /> Exporting…</>
            : dl === 'done' ? <><Check size={14} /> Exported</>
            : <><Download size={14} /> Download</>}
        </button>
      </div>

      {/* invisible click point — the pointer is hidden; only a soft ripple marks each tap */}
      {press && <span style={{ position: 'absolute', left: cur.x, top: cur.y, width: '24px', height: '24px', marginLeft: '-12px', marginTop: '-12px', borderRadius: '50%', background: 'rgba(124,58,237,0.16)', pointerEvents: 'none', zIndex: 50, animation: 'br-tap 0.5s ease-out' }} />}

      <style>{`
        @keyframes br-fade { from { opacity: 0; transform: translateY(-4px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes br-spin { to { transform: rotate(360deg); } }
        @keyframes br-tap { from { opacity: 0.9; transform: scale(0.4); } to { opacity: 0; transform: scale(1.9); } }
        .br-spin { animation: br-spin 0.7s linear infinite; }
      `}</style>
    </div>
  );
}

function Stat({ label, value, delta, up, bg, fg }: { label: string; value: string; delta: string; up: boolean; bg: string; fg: string }) {
  return (
    <div style={{ border: '1px solid #F0EFF6', borderRadius: '10px', padding: '10px 12px', background: '#FCFCFE' }}>
      <div style={{ fontSize: '9px', color: '#6B7090', fontWeight: 600 }}>{label}</div>
      <div style={{ fontSize: '18px', fontWeight: 800, marginTop: '5px', letterSpacing: '-0.02em' }}>{value}</div>
      <div style={{ display: 'inline-flex', alignItems: 'center', gap: '2px', marginTop: '4px', fontSize: '8.5px', fontWeight: 700, padding: '1px 5px', borderRadius: '4px', background: bg, color: fg }}>
        {up ? <ArrowUp size={10} /> : <ArrowDown size={10} />}{delta}
      </div>
    </div>
  );
}
