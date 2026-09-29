'use client';

import { useEffect, useRef, useState } from 'react';
import {
  Home, LayoutDashboard, TrendingUp, CheckSquare, Contact, Mail, Package,
  Plug, Sparkles, BarChart3, FileText, ClipboardList, Search, Settings, Bell,
  Grid3x3, Plus, ChevronRight, Phone, MessageSquare, Check, X,
  List as ListIcon, LayoutGrid, PhoneCall,
} from 'lucide-react';

const BRAND = '#7C3AED';
const MUTED = '#6b7090';

type Screen = 'dashboard' | 'prospects' | 'forecasts' | 'tasks' | 'calls';

// ── sidebar nav model ───────────────────────────────────────────────────
const NAV: { key: string; label: string; Icon: typeof Home; screen?: Screen; group?: string; children?: { label: string; screen?: Screen }[] }[] = [
  { key: 'home', label: 'Home', Icon: Home },
  { key: 'dashboards', label: 'Dashboards', Icon: LayoutDashboard, screen: 'dashboard' },
  { key: 'sales', label: 'Sales', Icon: TrendingUp, group: 'CRM', children: [{ label: 'Prospects', screen: 'prospects' }, { label: 'Forecasts', screen: 'forecasts' }] },
  { key: 'activities', label: 'Activities', Icon: CheckSquare, children: [{ label: 'Tasks', screen: 'tasks' }, { label: 'Calendar' }, { label: 'Calls', screen: 'calls' }] },
  { key: 'contacts', label: 'Contacts', Icon: Contact },
  { key: 'email', label: 'Email', Icon: Mail },
  { key: 'inventory', label: 'Inventory', Icon: Package },
  { key: 'integrations', label: 'Integrations', Icon: Plug },
  { key: 'ai', label: 'AI & Journeys', Icon: Sparkles },
  { key: 'analytics', label: 'Analytics', Icon: BarChart3, group: 'MANAGE' },
  { key: 'reports', label: 'Reports', Icon: FileText },
  { key: 'requests', label: 'My Requests', Icon: ClipboardList },
];

// ── prospect kanban data ────────────────────────────────────────────────
type Card = { id: string; name: string; co: string; ini: string; c: string };
type StageKey = 'qualified' | 'meeting' | 'proposal' | 'negotiation' | 'won';
const STAGES: { key: StageKey; label: string; dot: string; pct: string }[] = [
  { key: 'qualified', label: 'Qualified', dot: '#7C3AED', pct: '10%' },
  { key: 'meeting', label: 'Meeting', dot: '#8B5CF6', pct: '25%' },
  { key: 'proposal', label: 'Proposal', dot: '#2563EB', pct: '50%' },
  { key: 'negotiation', label: 'Negotiation', dot: '#EA580C', pct: '75%' },
  { key: 'won', label: 'Closed Won', dot: '#16A34A', pct: '100%' },
];
const INITIAL_CARDS: Record<StageKey, Card[]> = {
  qualified: [
    { id: 'q1', name: 'Grace Adeyemi', co: 'Northwind Retail', ini: 'GA', c: '#7C3AED' },
    { id: 'q2', name: 'Marcus Cole', co: 'Bluepeak Logistics', ini: 'MC', c: '#2563EB' },
    { id: 'q3', name: 'Priya Sharma', co: 'Sharma & Co.', ini: 'PS', c: '#DB2777' },
  ],
  meeting: [
    { id: 'm1', name: 'Lauren Kim', co: 'Kim Digital', ini: 'LK', c: '#EA580C' },
    { id: 'm2', name: 'Tomiwa Bakare', co: 'Bakare Textiles', ini: 'TB', c: '#0EA5E9' },
  ],
  proposal: [
    { id: 'p1', name: 'Victor Ade', co: 'Ade Logistics', ini: 'VA', c: '#7C3AED' },
    { id: 'p2', name: 'Hannah Brooks', co: 'Brooks Media', ini: 'HB', c: '#16A34A' },
    { id: 'p3', name: 'Samuel Otieno', co: 'Otieno Foods', ini: 'SO', c: '#2563EB' },
  ],
  negotiation: [
    { id: 'n1', name: 'Ryan Mitchell', co: 'Mitchell Freight', ini: 'RM', c: '#DB2777' },
    { id: 'n2', name: 'Aisha Bello', co: 'Bello Fashions', ini: 'AB', c: '#7C3AED' },
  ],
  won: [
    { id: 'w1', name: 'Chinedu Eze', co: 'Eze Motors', ini: 'CE', c: '#DB2777' },
    { id: 'w2', name: 'Sofia Alvarez', co: 'Alvarez Design', ini: 'SA', c: '#EA580C' },
  ],
};
const NEW_CARD: Card = { id: 'new', name: 'Daniel Osei', co: 'Osei Furnishings', ini: 'DO', c: '#16A34A' };

export function CrmDashboardDemo({ autoplay = true }: { autoplay?: boolean } = {}) {
  const [screen, setScreen] = useState<Screen>('dashboard');
  const [activeNav, setActiveNav] = useState('dashboards');
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const [modal, setModal] = useState<null | 'contact' | 'phone'>(null);
  const [formFill, setFormFill] = useState(0);
  const [cards, setCards] = useState<Record<StageKey, Card[]>>(INITIAL_CARDS);
  const [dragId, setDragId] = useState<string | null>(null);
  const [dropStage, setDropStage] = useState<StageKey | null>(null);
  const [filled, setFilled] = useState(false); // forecasts/tasks/calls populated

  const [cur, setCur] = useState({ x: 120, y: 120 });
  const [press, setPress] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!autoplay) return;
    let cancelled = false;
    const timers: ReturnType<typeof setTimeout>[] = [];
    const wait = (ms: number) => new Promise<void>((r) => { const t = setTimeout(r, ms); timers.push(t); });
    const centerOf = (sel: string) => {
      const root = rootRef.current; const el = root?.querySelector<HTMLElement>(`[data-c="${sel}"]`);
      if (!root || !el) return null;
      const rb = root.getBoundingClientRect(); const tb = el.getBoundingClientRect();
      const zoom = root.offsetWidth ? rb.width / root.offsetWidth : 1;
      return { x: (tb.left - rb.left + tb.width / 2) / zoom, y: (tb.top - rb.top + tb.height / 2) / zoom };
    };
    const moveTo = (sel: string, hold = 620) => new Promise<void>((resolve) => {
      const c = centerOf(sel); if (c) setCur(c);
      const t = setTimeout(resolve, hold); timers.push(t);
    });
    const clickFx = () => new Promise<void>((resolve) => { setPress(true); const a = setTimeout(() => setPress(false), 150); const b = setTimeout(resolve, 260); timers.push(a, b); });
    const tap = async (sel: string) => { await moveTo(sel); await clickFx(); };

    const reset = () => {
      setScreen('dashboard'); setActiveNav('dashboards'); setOpenGroup(null); setModal(null);
      setFormFill(0); setCards(INITIAL_CARDS); setDragId(null); setDropStage(null); setFilled(false);
      setCur({ x: 120, y: 120 });
    };

    const run = async () => {
      while (!cancelled) {
        reset();
        await wait(1800); if (cancelled) return;

        // 1) Click Sales -> Prospects
        await tap('nav-sales'); setOpenGroup('sales'); await wait(500);
        await tap('sub-Prospects'); setActiveNav('sales'); setScreen('prospects'); await wait(1500); if (cancelled) return;

        // 2) Click Add Prospect -> modal
        await tap('add-prospect'); setModal('contact'); await wait(900);
        for (let i = 1; i <= 3; i++) { await tap(`field-${i}`); setFormFill(i); await wait(480); if (cancelled) return; }
        // 3) Click Add Contact -> new card in Qualified
        await tap('add-contact'); setModal(null);
        setCards((c) => ({ ...c, qualified: [...c.qualified, NEW_CARD] }));
        await wait(1400); if (cancelled) return;

        // 4) Drag the new card from Qualified to Meeting
        await moveTo('card-new'); setDragId('new'); await wait(300);
        await moveTo('col-meeting'); setDropStage('meeting'); await wait(400);
        setCards((c) => ({ ...c, qualified: c.qualified.filter((x) => x.id !== 'new'), meeting: [...c.meeting, NEW_CARD] }));
        setDragId(null); setDropStage(null); await wait(1300); if (cancelled) return;

        // 5) Forecasts
        await tap('sub-Forecasts'); setScreen('forecasts'); setFilled(true); await wait(2400); if (cancelled) return;

        // 6) Activities -> Tasks
        await tap('nav-activities'); setOpenGroup('activities'); await wait(500);
        await tap('sub-Tasks'); setActiveNav('activities'); setScreen('tasks'); await wait(2400); if (cancelled) return;

        // 7) Calls
        await tap('sub-Calls'); setScreen('calls'); await wait(1500);
        // 8) Make a Call -> phone modal
        await tap('make-call'); setModal('phone'); await wait(2400); setModal(null);
        await wait(600);
      }
    };
    run();
    return () => { cancelled = true; timers.forEach(clearTimeout); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoplay]);

  return (
    <div ref={rootRef} style={{ position: 'absolute', left: 0, top: 0, width: '840px', height: '540px', borderRadius: '16px', background: '#fff', border: '1px solid rgb(233,231,244)', boxShadow: 'rgba(40,20,130,0.35) 0px 60px 100px -40px, rgba(20,10,60,0.18) 0px 20px 40px -24px', overflow: 'hidden', display: 'flex', fontFamily: 'Poppins, sans-serif', color: '#1a1a2e' }}>
      {/* ── sidebar ── */}
      <div style={{ width: '150px', flex: '0 0 auto', borderRight: '1px solid #F0EFF6', background: '#fff', padding: '12px 9px', display: 'flex', flexDirection: 'column', gap: '1px', overflow: 'hidden' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '7px', padding: '2px 7px 12px' }}>
          <span style={{ width: '24px', height: '24px', borderRadius: '7px', background: 'linear-gradient(145deg,#8B5CF6,#6D28D9)', display: 'grid', placeItems: 'center' }}><Contact size={13} color="#fff" /></span>
          <span style={{ fontWeight: 800, fontSize: '14px', letterSpacing: '-0.02em' }}>CRM</span>
        </div>
        {NAV.map((n) => {
          const active = n.key === activeNav;
          const open = openGroup === n.key;
          return (
            <div key={n.key}>
              {n.group && <div style={{ fontSize: '8px', fontWeight: 700, letterSpacing: '0.1em', color: '#AAAEBE', padding: '10px 8px 4px' }}>{n.group}</div>}
              <div data-c={`nav-${n.key}`} style={{ display: 'flex', alignItems: 'center', gap: '9px', padding: '6px 8px', borderRadius: '7px', fontSize: '10.5px', fontWeight: active ? 700 : 500, color: active ? BRAND : '#5A5F7D', background: active ? '#F1EDFF' : 'transparent', transition: 'background 0.2s, color 0.2s' }}>
                <n.Icon size={14} color={active ? BRAND : '#8C90A8'} /><span>{n.label}</span>
                {n.children && <ChevronRight size={12} style={{ marginLeft: 'auto', color: '#B4B8C8', transform: open ? 'rotate(90deg)' : 'none', transition: 'transform 0.2s' }} />}
              </div>
              {n.children && open && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', padding: '2px 0 2px 30px' }}>
                  {n.children.map((c) => {
                    const subActive = (c.screen === 'prospects' && screen === 'prospects') || (c.screen === 'forecasts' && screen === 'forecasts') || (c.screen === 'tasks' && screen === 'tasks') || (c.screen === 'calls' && screen === 'calls');
                    return <div key={c.label} data-c={`sub-${c.label}`} style={{ fontSize: '10px', fontWeight: subActive ? 700 : 500, color: subActive ? BRAND : '#6b7090', padding: '5px 6px' }}>{c.label}</div>;
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* ── main ── */}
      <div style={{ flex: '1 1 0%', minWidth: 0, display: 'flex', flexDirection: 'column' }}>
        {/* top bar */}
        <div style={{ height: '44px', borderBottom: '1px solid #F0EFF6', display: 'flex', alignItems: 'center', gap: '10px', padding: '0 14px', flex: '0 0 auto' }}>
          <ListIcon size={16} color="#8C90A8" />
          <span style={{ flex: 1, maxWidth: '360px', height: '25px', borderRadius: '8px', background: '#F5F5FA', display: 'flex', alignItems: 'center', gap: '6px', padding: '0 10px', color: '#A3A7BD', fontSize: '10px' }}><Search size={13} /> Search contacts…</span>
          <span style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '11px', color: '#8C90A8' }}><Settings size={15} /><Bell size={15} /><Grid3x3 size={15} /><span style={{ width: '25px', height: '25px', borderRadius: '50%', background: 'linear-gradient(135deg,#7C4DFF,#6D28D9)', color: '#fff', fontSize: '10px', fontWeight: 700, display: 'grid', placeItems: 'center' }}>V</span></span>
        </div>

        {/* screen body */}
        <div style={{ flex: '1 1 0%', minHeight: 0, position: 'relative', background: '#F7F7FB', overflow: 'hidden' }}>
          <div key={screen} style={{ position: 'absolute', inset: 0, overflow: 'hidden', animation: 'cd-fade 0.35s ease' }}>
            {screen === 'dashboard' && <DashboardScreen />}
            {screen === 'prospects' && <ProspectsScreen cards={cards} dragId={dragId} dropStage={dropStage} />}
            {screen === 'forecasts' && <ForecastsScreen filled={filled} />}
            {screen === 'tasks' && <TasksScreen filled={filled} />}
            {screen === 'calls' && <CallsScreen filled={filled} />}
          </div>

          {/* Add Contact modal */}
          {modal === 'contact' && <AddContactModal fill={formFill} />}
          {/* Phone modal */}
          {modal === 'phone' && <PhoneModal />}
        </div>
      </div>

      {/* cursor */}
      <div style={{ position: 'absolute', left: cur.x, top: cur.y, zIndex: 60, pointerEvents: 'none', transform: `translate(-2px,-1px) scale(${press ? 0.82 : 1})`, transition: 'left 0.6s cubic-bezier(0.5,0,0.2,1), top 0.6s cubic-bezier(0.5,0,0.2,1), transform 0.13s ease', filter: 'drop-shadow(0 3px 5px rgba(20,10,60,0.35))' }}>
        <svg width="20" height="24" viewBox="0 0 20 24" fill="none"><path d="M2 2 L2 18 L6.2 14.2 L9 20.6 L11.6 19.4 L8.8 13.2 L14.4 13.2 Z" fill="#fff" stroke="#1a1a2e" strokeWidth="1.3" strokeLinejoin="round" /></svg>
      </div>

      <style>{`
        @keyframes cd-fade { from { opacity: 0; transform: translateY(6px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes cd-pop { from { opacity: 0; transform: scale(0.96); } to { opacity: 1; transform: scale(1); } }
        @keyframes cd-cardin { from { opacity: 0; transform: translateY(-6px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>
    </div>
  );
}

/* ═══════════ Dashboard (Lead Contact) ═══════════ */
function DashboardScreen() {
  const kpis = [
    { l: 'New Leads', v: '1,284', d: '18%', up: true, Icon: Contact, bg: '#EEE9FF', fg: BRAND },
    { l: 'Contacted', v: '946', d: '12%', up: true, Icon: Phone, bg: '#E8F0FF', fg: '#2563EB' },
    { l: 'Qualified', v: '512', d: '9%', up: true, Icon: Check, bg: '#E3F8EA', fg: '#16A34A' },
    { l: 'Conversion', v: '38%', d: '3%', up: false, Icon: TrendingUp, bg: '#FFEDE2', fg: '#EA580C' },
  ];
  const bars = [58, 74, 46, 88, 66, 95, 72, 84];
  return (
    <div style={{ position: 'absolute', inset: 0, padding: '14px 16px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div><div style={{ fontSize: '16px', fontWeight: 800 }}>Lead Contact</div><div style={{ fontSize: '9px', color: '#8C90A8', marginTop: '2px' }}>9 widgets · updated today</div></div>
        <div style={{ display: 'flex', gap: '8px' }}><span style={{ height: '26px', border: '1px solid #ECEBF5', background: '#fff', borderRadius: '8px', padding: '0 10px', display: 'flex', alignItems: 'center', gap: '5px', fontSize: '9.5px', fontWeight: 600 }}><Plus size={12} color={BRAND} /> Add Widget</span><span style={{ height: '26px', background: BRAND, color: '#fff', borderRadius: '8px', padding: '0 12px', display: 'flex', alignItems: 'center', gap: '5px', fontSize: '9.5px', fontWeight: 700 }}>Save</span></div>
      </div>
      <div style={{ display: 'flex', gap: '12px' }}>
        {kpis.map((k) => (
          <div key={k.l} style={{ flex: 1, border: '1px solid #F0EFF6', borderRadius: '12px', padding: '12px 13px', background: '#fff' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}><span style={{ fontSize: '9px', fontWeight: 700, color: '#8C90A8', textTransform: 'uppercase' }}>{k.l}</span><span style={{ width: '24px', height: '24px', borderRadius: '7px', background: k.bg, display: 'grid', placeItems: 'center' }}><k.Icon size={13} color={k.fg} /></span></div>
            <div style={{ fontSize: '24px', fontWeight: 800, marginTop: '8px' }}>{k.v}</div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '2px', marginTop: '6px', fontSize: '9px', fontWeight: 700, padding: '1px 6px', borderRadius: '5px', background: k.up ? '#E7F8EE' : '#FDECEC', color: k.up ? '#16A34A' : '#E11D48' }}>{k.up ? '▲' : '▼'}{k.d}</div>
          </div>
        ))}
      </div>
      <div style={{ display: 'flex', gap: '12px', flex: 1, minHeight: 0 }}>
        <div style={{ flex: 1, border: '1px solid #F0EFF6', borderRadius: '12px', padding: '13px 15px', background: '#fff', display: 'flex', flexDirection: 'column' }}>
          <span style={{ fontSize: '11px', fontWeight: 700 }}>Leads by Channel</span>
          <div style={{ flex: 1, display: 'flex', alignItems: 'flex-end', gap: '10px', paddingTop: '10px' }}>
            {bars.map((h, i) => <div key={i} style={{ flex: 1, height: `${h}%`, maxWidth: '22px', borderRadius: '5px 5px 0 0', background: i === 5 ? BRAND : '#C9B8F5' }} />)}
          </div>
        </div>
        <div style={{ width: '230px', border: '1px solid #F0EFF6', borderRadius: '12px', padding: '13px 15px', background: '#fff' }}>
          <span style={{ fontSize: '11px', fontWeight: 700 }}>Lead Source</span>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '7px', marginTop: '10px' }}>
            {[['Web Forms', '38%', BRAND], ['Referral', '26%', '#2563EB'], ['Ads', '20%', '#16A34A'], ['Social', '16%', '#EA580C']].map(([l, v, c]) => (
              <div key={l} style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '9.5px' }}><span style={{ width: '8px', height: '8px', borderRadius: '2px', background: c as string }} /><span>{l}</span><span style={{ marginLeft: 'auto', fontWeight: 700, color: MUTED }}>{v}</span></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ═══════════ Prospects (Kanban) ═══════════ */
function ProspectsScreen({ cards, dragId, dropStage }: { cards: Record<StageKey, Card[]>; dragId: string | null; dropStage: StageKey | null }) {
  return (
    <div style={{ position: 'absolute', inset: 0, padding: '14px 16px', display: 'flex', flexDirection: 'column' }}>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '12px' }}>
        <div><div style={{ fontSize: '16px', fontWeight: 800 }}>Prospects</div><div style={{ fontSize: '9px', color: '#8C90A8', marginTop: '2px' }}>16 open prospects</div></div>
        <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ display: 'flex', border: '1px solid #ECEBF5', borderRadius: '8px', overflow: 'hidden', fontSize: '9px', fontWeight: 600 }}>
            <span style={{ padding: '5px 9px', background: '#F1EDFF', color: BRAND, display: 'flex', alignItems: 'center', gap: '4px' }}><LayoutGrid size={11} /> Kanban</span>
            <span style={{ padding: '5px 9px', color: MUTED }}>List</span>
            <span style={{ padding: '5px 9px', color: MUTED }}>Grid</span>
          </span>
          <span data-c="add-prospect" style={{ height: '28px', background: BRAND, color: '#fff', borderRadius: '8px', padding: '0 12px', display: 'flex', alignItems: 'center', gap: '5px', fontSize: '10px', fontWeight: 700 }}><Plus size={13} /> Add Prospect</span>
        </div>
      </div>
      <div style={{ flex: 1, minHeight: 0, display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '8px', overflow: 'hidden' }}>
        {STAGES.map((st) => {
          const isDrop = dropStage === st.key;
          return (
            <div key={st.key} data-c={`col-${st.key}`} style={{ display: 'flex', flexDirection: 'column', gap: '6px', background: isDrop ? '#F1EDFF' : 'transparent', borderRadius: '8px', padding: '2px', transition: 'background 0.2s' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '9px', fontWeight: 700, padding: '2px 3px' }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: st.dot }} />{st.label}
                <span style={{ marginLeft: 'auto', color: '#B4B8C8' }}>{cards[st.key].length}</span>
              </div>
              {cards[st.key].map((cd) => (
                <div key={cd.id} data-c={`card-${cd.id}`} style={{ background: '#fff', border: '1px solid #EEEDF5', borderRadius: '9px', padding: '7px 8px', boxShadow: 'rgba(30,20,90,0.04) 0px 1px 4px', opacity: dragId === cd.id ? 0.5 : 1, animation: cd.id === 'new' ? 'cd-cardin 0.4s ease' : undefined }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '5px' }}>
                    <span style={{ width: '20px', height: '20px', borderRadius: '50%', background: cd.c, color: '#fff', fontSize: '7px', fontWeight: 700, display: 'grid', placeItems: 'center', flex: '0 0 auto' }}>{cd.ini}</span>
                    <span style={{ minWidth: 0 }}><span style={{ display: 'block', fontSize: '8.5px', fontWeight: 700, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{cd.name}</span><span style={{ display: 'block', fontSize: '6.5px', color: MUTED }}>{cd.co}</span></span>
                  </div>
                  <div style={{ display: 'flex', gap: '3px' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '2px', fontSize: '6px', fontWeight: 600, color: '#2563EB', background: '#EFF6FF', borderRadius: '4px', padding: '2px 4px' }}><Mail size={7} /> Email</span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '2px', fontSize: '6px', fontWeight: 600, color: '#16A34A', background: '#E7F8EE', borderRadius: '4px', padding: '2px 4px' }}><Phone size={7} /> Call</span>
                  </div>
                </div>
              ))}
              <div style={{ border: '1px dashed #DAD8E8', borderRadius: '9px', padding: '6px', textAlign: 'center', fontSize: '7.5px', color: '#B4B8C8' }}>+ Add prospect</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* ═══════════ Add Contact modal ═══════════ */
function AddContactModal({ fill }: { fill: number }) {
  const F = ({ label, ph, req, filled, val }: { label: string; ph: string; req?: boolean; filled?: boolean; val?: string }) => (
    <div style={{ flex: 1 }}>
      <div style={{ fontSize: '8.5px', fontWeight: 600, color: '#5A5F7D', marginBottom: '3px' }}>{label}{req && ' *'}</div>
      <div style={{ height: '26px', border: `1px solid ${filled ? BRAND : '#E6E5EF'}`, borderRadius: '7px', padding: '0 9px', display: 'flex', alignItems: 'center', fontSize: '9px', color: filled ? '#1a1a2e' : '#bbb', background: '#fff', transition: 'border-color 0.2s' }}>{filled ? val : ph}</div>
    </div>
  );
  return (
    <div style={{ position: 'absolute', inset: 0, background: 'rgba(17,17,25,0.35)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 40, animation: 'cd-fade 0.25s ease' }}>
      <div style={{ width: '78%', maxHeight: '90%', background: '#fff', borderRadius: '14px', boxShadow: 'rgba(20,10,60,0.3) 0px 30px 70px -20px', padding: '16px 18px', overflow: 'hidden', animation: 'cd-pop 0.3s cubic-bezier(0.22,1.4,0.5,1)' }}>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '14px' }}><span style={{ fontSize: '14px', fontWeight: 800 }}>Add Contact</span><X size={15} style={{ marginLeft: 'auto', color: '#aaa' }} /></div>
        <div style={{ display: 'flex', gap: '12px', marginBottom: '10px' }}><F label="First name" ph="John" req filled={fill >= 1} val="Daniel" /><F label="Last name" ph="Doe" req filled={fill >= 1} val="Osei" /></div>
        <div style={{ marginBottom: '10px' }}><F label="Email" ph="john@example.com" filled={fill >= 2} val="daniel@oseifurnishings.com" /></div>
        <div style={{ display: 'flex', gap: '12px', marginBottom: '10px' }}><F label="Phone" ph="+1 555 123 4567" filled={fill >= 3} val="+44 7700 900321" /><F label="Company" ph="Acme Inc" filled={fill >= 3} val="Osei Furnishings" /></div>
        <div style={{ display: 'flex', gap: '12px', marginBottom: '14px' }}><F label="Source" ph="Select source" /><F label="Status" ph="Lead" filled val="Lead" /></div>
        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '8px' }}>
          <span style={{ height: '30px', border: '1px solid #E6E5EF', color: '#5A5F7D', borderRadius: '8px', padding: '0 14px', display: 'flex', alignItems: 'center', fontSize: '10px', fontWeight: 600 }}>Cancel</span>
          <span data-c="add-contact" style={{ height: '30px', background: BRAND, color: '#fff', borderRadius: '8px', padding: '0 16px', display: 'flex', alignItems: 'center', gap: '5px', fontSize: '10px', fontWeight: 700 }}><Check size={12} /> Add Contact</span>
        </div>
      </div>
    </div>
  );
}

/* ═══════════ Forecasts ═══════════ */
function ForecastsScreen({ filled }: { filled: boolean }) {
  const stages = [
    { l: 'Qualified', pct: '10%', deals: 6, w: '£18,200', t: '£182,000', bar: 12 },
    { l: 'Meeting', pct: '25%', deals: 4, w: '£31,500', t: '£126,000', bar: 28 },
    { l: 'Proposal', pct: '50%', deals: 5, w: '£62,000', t: '£124,000', bar: 55 },
    { l: 'Negotiation', pct: '75%', deals: 3, w: '£58,500', t: '£78,000', bar: 72 },
    { l: 'Closed Won', pct: '100%', deals: 2, w: '£47,000', t: '£47,000', bar: 100 },
  ];
  return (
    <div style={{ position: 'absolute', inset: 0, padding: '14px 16px', display: 'flex', flexDirection: 'column', gap: '12px', overflow: 'hidden' }}>
      <div><div style={{ fontSize: '16px', fontWeight: 800 }}>Sales Forecasting</div><div style={{ fontSize: '9px', color: '#8C90A8', marginTop: '2px' }}>Weighted pipeline, per-rep forecasts, quota tracking and at-risk deals.</div></div>
      <div style={{ display: 'flex', gap: '18px', fontSize: '10px', fontWeight: 600, borderBottom: '1px solid #ECEBF5', paddingBottom: '8px' }}>
        <span style={{ color: BRAND, fontWeight: 700, borderBottom: `2px solid ${BRAND}`, paddingBottom: '8px', marginBottom: '-9px' }}>Weighted Pipeline</span>
        <span style={{ color: MUTED }}>By Rep</span><span style={{ color: MUTED }}>Targets</span><span style={{ color: MUTED }}>Pipeline Risk</span>
      </div>
      <div style={{ display: 'flex', gap: '12px' }}>
        {[['Total Pipeline', filled ? '£557,000' : '£0', '#fff'], ['Weighted Forecast', filled ? '£217,200' : '£0', '#F5F1FF'], ['Quota Attainment', filled ? '87%' : '0%', '#fff']].map(([l, v, bg], i) => (
          <div key={l} style={{ flex: 1, border: '1px solid #F0EFF6', borderRadius: '12px', padding: '12px 14px', background: bg as string }}>
            <div style={{ fontSize: '9.5px', color: MUTED, fontWeight: 600 }}>{l}</div>
            <div style={{ fontSize: '22px', fontWeight: 800, marginTop: '6px', color: i === 1 ? BRAND : '#1a1a2e' }}>{v}</div>
            {i === 2 && <div style={{ fontSize: '8px', color: MUTED, marginTop: '3px' }}>{filled ? '£217,200 of £250,000' : '£0 of £0'}</div>}
          </div>
        ))}
      </div>
      <div style={{ border: '1px solid #F0EFF6', borderRadius: '12px', padding: '13px 15px', background: '#fff', flex: 1, minHeight: 0 }}>
        <div style={{ fontSize: '11.5px', fontWeight: 700, marginBottom: '10px' }}>Pipeline by stage</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '9px' }}>
          {stages.map((s) => (
            <div key={s.l}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '9px', marginBottom: '3px' }}><span><b>{s.l}</b> · {s.pct} · {filled ? s.deals : 0} deals</span><span style={{ fontWeight: 700 }}>{filled ? s.w : '£0'} → {filled ? s.t : '£0'}</span></div>
              <div style={{ height: '6px', borderRadius: '4px', background: '#F0EFF6', overflow: 'hidden' }}><div style={{ height: '100%', width: filled ? `${s.bar}%` : '0%', background: BRAND, borderRadius: '4px', transition: 'width 0.6s ease' }} /></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ═══════════ Tasks ═══════════ */
function TasksScreen({ filled }: { filled: boolean }) {
  const tasks = [
    { t: 'Follow up with Grace Adeyemi', due: 'Today · 2:00 PM', pr: 'High', prc: '#DC2626', prb: '#FEE2E2', st: 'In Progress', done: false },
    { t: 'Send proposal to Victor Ade', due: 'Today · 4:30 PM', pr: 'High', prc: '#DC2626', prb: '#FEE2E2', st: 'To Do', done: false },
    { t: 'Prepare demo for Brooks Media', due: 'Tomorrow · 10:00 AM', pr: 'Medium', prc: '#EA580C', prb: '#FFEDE2', st: 'To Do', done: false },
    { t: 'Call Ryan Mitchell re: contract', due: 'Tomorrow · 1:00 PM', pr: 'Medium', prc: '#EA580C', prb: '#FFEDE2', st: 'To Do', done: false },
    { t: 'Onboard Chinedu Eze', due: '28 Sep', pr: 'Low', prc: '#16A34A', prb: '#E3F8EA', st: 'Done', done: true },
    { t: 'Update CRM records', due: '29 Sep', pr: 'Low', prc: '#16A34A', prb: '#E3F8EA', st: 'Done', done: true },
  ];
  return (
    <div style={{ position: 'absolute', inset: 0, padding: '14px 16px', display: 'flex', flexDirection: 'column', gap: '12px', overflow: 'hidden' }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div><div style={{ fontSize: '16px', fontWeight: 800 }}>Tasks</div><div style={{ fontSize: '9px', color: '#8C90A8', marginTop: '2px' }}>{filled ? '6 total tasks · 2 completed' : '0 total tasks'}</div></div>
        <div style={{ marginLeft: 'auto', display: 'flex', gap: '8px' }}>
          <span style={{ display: 'flex', border: '1px solid #ECEBF5', borderRadius: '8px', overflow: 'hidden', fontSize: '9px', fontWeight: 600 }}><span style={{ padding: '5px 10px', background: '#F1EDFF', color: BRAND }}>List</span><span style={{ padding: '5px 10px', color: MUTED }}>Board</span></span>
          <span style={{ height: '28px', background: BRAND, color: '#fff', borderRadius: '8px', padding: '0 12px', display: 'flex', alignItems: 'center', gap: '5px', fontSize: '10px', fontWeight: 700 }}><Plus size={13} /> Add Task</span>
        </div>
      </div>
      <div style={{ display: 'flex', gap: '8px' }}>
        <span style={{ flex: 1, height: '28px', border: '1px solid #ECEBF5', borderRadius: '8px', background: '#fff', display: 'flex', alignItems: 'center', gap: '6px', padding: '0 10px', fontSize: '9px', color: '#A3A7BD' }}><Search size={12} /> Search tasks…</span>
        <span style={{ width: '90px', height: '28px', border: '1px solid #ECEBF5', borderRadius: '8px', background: '#fff', display: 'flex', alignItems: 'center', padding: '0 10px', fontSize: '9px', color: MUTED }}>All statuses</span>
        <span style={{ width: '90px', height: '28px', border: '1px solid #ECEBF5', borderRadius: '8px', background: '#fff', display: 'flex', alignItems: 'center', padding: '0 10px', fontSize: '9px', color: MUTED }}>All priorities</span>
      </div>
      <div style={{ border: '1px solid #F0EFF6', borderRadius: '12px', background: '#fff', overflow: 'hidden', flex: 1, minHeight: 0 }}>
        {filled ? tasks.map((tk, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '9px 14px', borderBottom: i < tasks.length - 1 ? '1px solid #F4F3F8' : 'none', animation: `cd-cardin 0.35s ${i * 0.05}s both` }}>
            <span style={{ width: '15px', height: '15px', borderRadius: '4px', border: `1.5px solid ${tk.done ? '#16A34A' : '#CBD0DE'}`, background: tk.done ? '#16A34A' : '#fff', display: 'grid', placeItems: 'center', flex: '0 0 auto' }}>{tk.done && <Check size={10} color="#fff" />}</span>
            <span style={{ flex: 1, minWidth: 0, fontSize: '10.5px', fontWeight: 600, textDecoration: tk.done ? 'line-through' : 'none', color: tk.done ? '#A3A7BD' : '#1a1a2e', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{tk.t}</span>
            <span style={{ fontSize: '8.5px', color: MUTED, whiteSpace: 'nowrap' }}>{tk.due}</span>
            <span style={{ fontSize: '7.5px', fontWeight: 700, color: tk.prc, background: tk.prb, borderRadius: '5px', padding: '2px 7px' }}>{tk.pr}</span>
            <span style={{ fontSize: '7.5px', fontWeight: 700, color: MUTED, background: '#F1F1F6', borderRadius: '5px', padding: '2px 7px', width: '60px', textAlign: 'center' }}>{tk.st}</span>
          </div>
        )) : <div style={{ height: '100%', display: 'grid', placeItems: 'center', fontSize: '11px', color: '#A3A7BD' }}>No tasks yet. Create your first task!</div>}
      </div>
    </div>
  );
}

/* ═══════════ Calls ═══════════ */
function CallsScreen({ filled }: { filled: boolean }) {
  const cards = [
    { t: 'Make a Call', d: 'Open dial pad and call via Telnyx', Icon: Phone, bg: '#E7F8EE', fg: '#16A34A', key: 'make-call' },
    { t: 'SMS / WhatsApp', d: 'Send SMS or WhatsApp message', Icon: MessageSquare, bg: '#E8F0FF', fg: '#2563EB' },
    { t: 'Connect Provider', d: 'Add Twilio, WhatsApp Business, or VoIP', Icon: Settings, bg: '#F1EDFF', fg: BRAND },
  ];
  const recent = [
    { name: 'Grace Adeyemi', dir: 'Outbound', time: 'Today · 2:14 PM', dur: '4:32', st: 'Completed', sc: '#16A34A' },
    { name: 'Victor Ade', dir: 'Inbound', time: 'Today · 11:02 AM', dur: '2:18', st: 'Completed', sc: '#16A34A' },
    { name: 'Ryan Mitchell', dir: 'Outbound', time: 'Yesterday · 4:40 PM', dur: '—', st: 'Missed', sc: '#DC2626' },
    { name: 'Hannah Brooks', dir: 'Outbound', time: 'Yesterday · 10:15 AM', dur: '6:05', st: 'Completed', sc: '#16A34A' },
  ];
  return (
    <div style={{ position: 'absolute', inset: 0, padding: '14px 16px', display: 'flex', flexDirection: 'column', gap: '12px', overflow: 'hidden' }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div><div style={{ fontSize: '16px', fontWeight: 800 }}>Calls</div><div style={{ fontSize: '9px', color: '#8C90A8', marginTop: '2px' }}>Make calls, send WhatsApp messages, and manage calling providers</div></div>
        <div style={{ marginLeft: 'auto', display: 'flex', gap: '8px' }}>
          <span style={{ height: '28px', border: '1px solid #ECEBF5', background: '#fff', borderRadius: '8px', padding: '0 10px', display: 'flex', alignItems: 'center', gap: '5px', fontSize: '9.5px', fontWeight: 600 }}><Settings size={12} /> Providers</span>
          <span style={{ height: '28px', background: BRAND, color: '#fff', borderRadius: '8px', padding: '0 12px', display: 'flex', alignItems: 'center', gap: '5px', fontSize: '10px', fontWeight: 700 }}><PhoneCall size={12} /> New Call</span>
        </div>
      </div>
      <div style={{ display: 'flex', gap: '12px' }}>
        {cards.map((c) => (
          <div key={c.t} data-c={c.key} style={{ flex: 1, border: '1px solid #F0EFF6', borderRadius: '12px', padding: '14px', background: '#fff' }}>
            <span style={{ width: '32px', height: '32px', borderRadius: '9px', background: c.bg, display: 'grid', placeItems: 'center' }}><c.Icon size={16} color={c.fg} /></span>
            <div style={{ fontSize: '11.5px', fontWeight: 700, marginTop: '9px' }}>{c.t}</div>
            <div style={{ fontSize: '8.5px', color: MUTED, marginTop: '3px', lineHeight: 1.4 }}>{c.d}</div>
          </div>
        ))}
      </div>
      <div style={{ border: '1px solid #F0EFF6', borderRadius: '12px', background: '#fff', padding: '13px 15px', flex: 1, minHeight: 0, display: 'flex', flexDirection: 'column' }}>
        <span style={{ fontSize: '11.5px', fontWeight: 700, marginBottom: '8px' }}>Recent Calls</span>
        {filled ? (
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {recent.map((r, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '8px 0', borderBottom: i < recent.length - 1 ? '1px solid #F4F3F8' : 'none', animation: `cd-cardin 0.35s ${i * 0.05}s both` }}>
                <span style={{ width: '26px', height: '26px', borderRadius: '50%', background: r.st === 'Missed' ? '#FEE2E2' : '#E7F8EE', color: r.sc, display: 'grid', placeItems: 'center', flex: '0 0 auto' }}><Phone size={12} /></span>
                <span style={{ flex: 1, minWidth: 0 }}><span style={{ display: 'block', fontSize: '10px', fontWeight: 700 }}>{r.name}</span><span style={{ display: 'block', fontSize: '8px', color: MUTED }}>{r.dir} · {r.time}</span></span>
                <span style={{ fontSize: '9px', color: MUTED }}>{r.dur}</span>
                <span style={{ fontSize: '7.5px', fontWeight: 700, color: r.sc, background: r.st === 'Missed' ? '#FEE2E2' : '#E7F8EE', borderRadius: '5px', padding: '2px 7px' }}>{r.st}</span>
              </div>
            ))}
          </div>
        ) : <div style={{ flex: 1, display: 'grid', placeItems: 'center', color: '#A3A7BD', fontSize: '10px' }}>No calls logged yet</div>}
      </div>
    </div>
  );
}

/* ═══════════ Phone modal ═══════════ */
function PhoneModal() {
  const keys = [['1', ''], ['2', 'ABC'], ['3', 'DEF'], ['4', 'GHI'], ['5', 'JKL'], ['6', 'MNO'], ['7', 'PQRS'], ['8', 'TUV'], ['9', 'WXYZ'], ['*', ''], ['0', '+'], ['#', '']];
  return (
    <div style={{ position: 'absolute', inset: 0, background: 'rgba(17,17,25,0.35)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 40, animation: 'cd-fade 0.25s ease' }}>
      <div style={{ width: '250px', background: '#fff', borderRadius: '14px', boxShadow: 'rgba(20,10,60,0.3) 0px 30px 70px -20px', padding: '16px', animation: 'cd-pop 0.3s cubic-bezier(0.22,1.4,0.5,1)' }}>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '12px' }}><span style={{ fontSize: '13px', fontWeight: 800 }}>Phone</span><X size={14} style={{ marginLeft: 'auto', color: '#aaa' }} /></div>
        <div style={{ height: '34px', borderRadius: '8px', background: '#F5F5FA', display: 'flex', alignItems: 'center', padding: '0 12px', fontSize: '11px', color: '#A3A7BD', marginBottom: '12px' }}>Enter number</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '7px' }}>
          {keys.map(([n, sub]) => (
            <div key={n} style={{ height: '38px', borderRadius: '9px', background: '#F7F7FB', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', lineHeight: 1 }}>
              <span style={{ fontSize: '15px', fontWeight: 700 }}>{n}</span>{sub && <span style={{ fontSize: '5.5px', color: MUTED, letterSpacing: '0.05em', marginTop: '1px' }}>{sub}</span>}
            </div>
          ))}
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', margin: '14px 0 10px' }}>
          <span style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#16A34A', display: 'grid', placeItems: 'center' }}><Phone size={18} color="#fff" /></span>
        </div>
        <div style={{ fontSize: '8px', color: '#B45309', background: '#FEF9E7', border: '1px solid #FDE68A', borderRadius: '7px', padding: '7px 9px', textAlign: 'center' }}>Calling not configured. Ask your admin to set up a phone number.</div>
      </div>
    </div>
  );
}
