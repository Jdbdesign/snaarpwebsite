'use client';

import { useEffect, useState } from 'react';
import {
  LayoutDashboard,
  Kanban,
  GanttChartSquare,
  Folder,
  BarChart3,
  RefreshCw,
  CheckCircle2,
  Circle,
  Users,
  Flame,
  TrendingUp,
  Clock,
  MessageSquare,
  CheckSquare,
  AlertCircle,
  FileText,
  Image as ImageIcon,
  FileSpreadsheet,
  FileType,
  MoreHorizontal,
  ArrowUpRight,
} from 'lucide-react';

const BRAND = '#7C3AED';

const TABS = [
  { key: 'Overview', Icon: LayoutDashboard },
  { key: 'Board', Icon: Kanban },
  { key: 'Timeline', Icon: GanttChartSquare },
  { key: 'Files', Icon: Folder },
  { key: 'Reports', Icon: BarChart3 },
] as const;
type TabKey = (typeof TABS)[number]['key'];

// ── Timeline (Gantt) data ───────────────────────────────────────────────
// Each bar: gridColumn start/end over an 18-col grid (Aug..Oct, 6 ticks/mo),
// plus color and done flag. "Today" marker sits at column 13.
const GANTT_ROWS = [
  { name: 'Website Redesign', start: 1, span: 4, color: '#3B82F6', done: true },
  { name: 'Product Strategy', start: 3, span: 4, color: '#60A5FA', done: true },
  { name: 'Design & Prototyping', start: 6, span: 3, color: BRAND, done: false, tail: '#A78BFA' },
  { name: 'Development', start: 7, span: 5, color: '#2563EB', done: false },
  { name: 'Testing', start: 9, span: 5, color: '#22C55E', done: false },
  { name: 'Marketing Campaign', start: 11, span: 6, color: '#F97316', done: false },
  { name: 'Launch', start: 15, span: 3, color: '#F87171', done: false },
];

// ── Board (Kanban) data ─────────────────────────────────────────────────
const BOARD = [
  {
    title: 'To Do', count: 3, color: '#8A8F9E',
    cards: [
      { title: 'Wireframe dashboard', tag: 'Design', tagColor: BRAND, tagBg: '#F3EFFF', who: '#7C3AED', pr: '#F87171' },
      { title: 'Set up analytics', tag: 'Dev', tagColor: '#2563EB', tagBg: '#EFF6FF', who: '#2563EB', pr: '#FBBF24' },
      { title: 'Draft launch email', tag: 'Marketing', tagColor: '#F97316', tagBg: '#FFF4EC', who: '#F97316', pr: '#34D399' },
    ],
  },
  {
    title: 'In Progress', count: 2, color: '#2563EB',
    cards: [
      { title: 'Build component library', tag: 'Dev', tagColor: '#2563EB', tagBg: '#EFF6FF', who: '#0891B2', pr: '#F87171' },
      { title: 'User research interviews', tag: 'Research', tagColor: '#0891B2', tagBg: '#ECFEFF', who: '#E11D48', pr: '#FBBF24' },
    ],
  },
  {
    title: 'Review', count: 2, color: '#F59E0B',
    cards: [
      { title: 'Homepage copy', tag: 'Content', tagColor: '#D97706', tagBg: '#FFFBEB', who: '#D97706', pr: '#34D399' },
      { title: 'API contract', tag: 'Dev', tagColor: '#2563EB', tagBg: '#EFF6FF', who: '#2563EB', pr: '#F87171' },
    ],
  },
  {
    title: 'Done', count: 3, color: '#22C55E',
    cards: [
      { title: 'Brand guidelines', tag: 'Design', tagColor: BRAND, tagBg: '#F3EFFF', who: '#7C3AED', pr: '#34D399' },
      { title: 'Kickoff meeting', tag: 'Ops', tagColor: '#8A8F9E', tagBg: '#F1F2F5', who: '#0891B2', pr: '#34D399' },
      { title: 'Repo & CI setup', tag: 'Dev', tagColor: '#2563EB', tagBg: '#EFF6FF', who: '#2563EB', pr: '#34D399' },
    ],
  },
];

// ── Files data ──────────────────────────────────────────────────────────
const FILES = [
  { name: 'Brand Guidelines.pdf', meta: 'PDF · 4.2 MB · Maya Chen', Icon: FileType, color: '#DC2626', bg: '#FEF2F2', when: '2h ago' },
  { name: 'Homepage Mockups.fig', meta: 'Figma · 18 MB · Sofia A.', Icon: ImageIcon, color: BRAND, bg: '#F3EFFF', when: 'Yesterday' },
  { name: 'Q4 Budget.xlsx', meta: 'Sheet · 240 KB · James O.', Icon: FileSpreadsheet, color: '#059669', bg: '#ECFDF5', when: '2d ago' },
  { name: 'API Spec v2.docx', meta: 'Doc · 1.1 MB · Daniel W.', Icon: FileText, color: '#2563EB', bg: '#EFF6FF', when: '3d ago' },
  { name: 'User Flows.png', meta: 'Image · 3.4 MB · Sofia A.', Icon: ImageIcon, color: '#0891B2', bg: '#ECFEFF', when: '5d ago' },
];

// ── Reports data ────────────────────────────────────────────────────────
const BURNDOWN = [92, 84, 79, 66, 58, 47, 40, 31]; // remaining pts per week
const VELOCITY = [28, 34, 31, 40, 37, 44]; // pts delivered per sprint

const ACTIVITY = [
  { who: 'Sofia A.', color: '#E11D48', text: 'completed', target: 'Homepage Mockups', when: '12m', Icon: CheckSquare, ic: '#22C55E' },
  { who: 'James O.', color: '#2563EB', text: 'commented on', target: 'API contract', when: '48m', Icon: MessageSquare, ic: BRAND },
  { who: 'Daniel W.', color: '#0891B2', text: 'flagged a blocker on', target: 'Development', when: '2h', Icon: AlertCircle, ic: '#DC2626' },
  { who: 'Maya Chen', color: BRAND, text: 'created', target: 'Launch checklist', when: '4h', Icon: CheckCircle2, ic: '#22C55E' },
];

function Avatar({ color, size = 18, letter }: { color: string; size?: number; letter?: string }) {
  return (
    <span style={{ width: size, height: size, borderRadius: '50%', background: color, color: '#fff', fontSize: size * 0.5, fontWeight: 700, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, border: '1.5px solid #fff' }}>
      {letter}
    </span>
  );
}

export function ProjectTimelinePreviewMockup({ autoCycle = true }: { autoCycle?: boolean } = {}) {
  const [tab, setTab] = useState<TabKey>('Overview');
  const [paused, setPaused] = useState(false);
  // Bumped on every manual tab click; the auto-cycle effect re-arms its timer
  // from that click, so a manual selection resets the dwell rather than
  // firing an immediate auto-advance (prevents flicker / double transitions).
  const [manualAt, setManualAt] = useState(0);

  const selectTab = (key: TabKey) => { setTab(key); setManualAt((n) => n + 1); };

  // Gentle auto-cycle through the tabs so the demo shows every view; pauses
  // on hover so a visitor can explore.
  useEffect(() => {
    if (!autoCycle || paused) return;
    const order: TabKey[] = ['Overview', 'Board', 'Timeline', 'Files', 'Reports'];
    const id = setInterval(() => {
      setTab((cur) => order[(order.indexOf(cur) + 1) % order.length]);
    }, 3800);
    return () => clearInterval(id);
  }, [autoCycle, paused, manualAt]);

  return (
    <div
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      style={{ display: 'flex', flexDirection: 'column', height: '100%', width: '100%', fontFamily: 'Poppins, sans-serif', color: '#1a1a1a', background: '#fff', overflow: 'hidden' }}
    >
      {/* Header */}
      <div style={{ padding: '20px 24px 0', flexShrink: 0 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
          <div style={{ width: '30px', height: '30px', borderRadius: '9px', background: BRAND, display: 'grid', placeItems: 'center', flexShrink: 0 }}>
            <GanttChartSquare size={16} style={{ color: '#fff' }} />
          </div>
          <span style={{ fontSize: '17px', fontWeight: 800, letterSpacing: '-0.02em' }}>Project Timeline</span>
          <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ fontSize: '11px', fontWeight: 600, color: BRAND, background: '#F3EFFF', borderRadius: '8px', padding: '6px 12px' }}>Aug 2026 – Oct 2026</span>
            <span style={{ width: '30px', height: '30px', borderRadius: '8px', border: '1px solid #eef0f2', display: 'grid', placeItems: 'center', color: '#999', cursor: 'pointer' }}><RefreshCw size={13} /></span>
          </div>
        </div>

        {/* Tabs */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '22px', borderBottom: '1px solid #eef0f2' }}>
          {TABS.map((t) => {
            const active = t.key === tab;
            return (
              <button
                key={t.key}
                onClick={() => selectTab(t.key)}
                style={{
                  display: 'flex', alignItems: 'center', gap: '7px', background: 'none', border: 'none', cursor: 'pointer',
                  padding: '0 0 12px', fontSize: '13px', fontWeight: active ? 700 : 500, fontFamily: 'inherit',
                  color: active ? BRAND : '#8A8F9E', borderBottom: active ? `2px solid ${BRAND}` : '2px solid transparent',
                  marginBottom: '-1px', transition: 'color 0.2s ease',
                }}
              >
                <t.Icon size={14} /> {t.key}
              </button>
            );
          })}
        </div>
      </div>

      {/* Body */}
      <div style={{ flex: 1, position: 'relative', overflow: 'hidden' }}>
        <div key={tab} style={{ position: 'absolute', inset: 0, padding: '18px 24px', animation: 'ptm-fade 0.45s cubic-bezier(0.22,1,0.36,1)' }}>
          {tab === 'Timeline' && <TimelineView />}
          {tab === 'Overview' && <OverviewView />}
          {tab === 'Board' && <BoardView />}
          {tab === 'Files' && <FilesView />}
          {tab === 'Reports' && <ReportsView />}
        </div>
      </div>

      {/* Footer stat cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '14px', padding: '0 24px 22px', flexShrink: 0 }}>
        <StatCard Icon={CheckCircle2} iconColor="#22C55E" iconBg="#ECFDF5" title="7 / 7" sub="Milestones" />
        <StatCard Icon={Users} iconColor={BRAND} iconBg="#F3EFFF" title="12" sub="Team members" />
        <StatCard Icon={Flame} iconColor="#F97316" iconBg="#FFF4EC" title="On track" sub="Project status" titleSize={17} />
      </div>

      <style>{`
        @keyframes ptm-fade { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes ptm-grow { from { transform: scaleX(0); } to { transform: scaleX(1); } }
        @keyframes ptm-rise { from { transform: scaleY(0); } to { transform: scaleY(1); } }
      `}</style>
    </div>
  );
}

function StatCard({ Icon, iconColor, iconBg, title, sub, titleSize = 20 }: { Icon: typeof CheckCircle2; iconColor: string; iconBg: string; title: string; sub: string; titleSize?: number }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', border: '1px solid #eef0f2', borderRadius: '14px', padding: '14px 16px' }}>
      <div style={{ width: '34px', height: '34px', borderRadius: '10px', background: iconBg, display: 'grid', placeItems: 'center', flexShrink: 0 }}>
        <Icon size={17} style={{ color: iconColor }} />
      </div>
      <div>
        <div style={{ fontSize: `${titleSize}px`, fontWeight: 800, lineHeight: 1.1 }}>{title}</div>
        <div style={{ fontSize: '11px', color: '#8A8F9E', marginTop: '2px' }}>{sub}</div>
      </div>
    </div>
  );
}

/* ═══════════════════════════ TIMELINE (Gantt) ═══════════════════════════ */
function TimelineView() {
  const months = ['Aug', 'Sep', 'Oct'];
  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      {/* Month header */}
      <div style={{ display: 'grid', gridTemplateColumns: '150px 1fr', marginBottom: '10px' }}>
        <div style={{ fontSize: '11px', fontWeight: 700, color: '#8A8F9E' }}>Task</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', position: 'relative' }}>
          {months.map((mo) => (
            <div key={mo} style={{ fontSize: '11px', fontWeight: 700, color: '#8A8F9E', borderLeft: '1px solid #f0f0f2', paddingLeft: '8px' }}>{mo}</div>
          ))}
          {/* "Today" pill, offset above so it never collides with a month label */}
          <span style={{ position: 'absolute', left: `${((13 - 1) / 18) * 100}%`, top: '-3px', transform: 'translateX(-50%)', fontSize: '8.5px', fontWeight: 700, color: '#fff', background: BRAND, borderRadius: '5px', padding: '1px 6px', whiteSpace: 'nowrap' }}>Today</span>
        </div>
      </div>

      {/* Rows */}
      <div style={{ flex: 1, position: 'relative' }}>
        {GANTT_ROWS.map((r, idx) => (
          <div key={r.name} style={{ display: 'grid', gridTemplateColumns: '150px 1fr', alignItems: 'center', height: `${100 / GANTT_ROWS.length}%`, minHeight: '30px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '11.5px', fontWeight: 600, color: '#333' }}>
              {r.done
                ? <CheckCircle2 size={14} style={{ color: '#22C55E', flexShrink: 0 }} />
                : <Circle size={14} style={{ color: '#cfd2da', flexShrink: 0 }} />}
              <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{r.name}</span>
            </div>
            <div style={{ position: 'relative', height: '100%', display: 'grid', gridTemplateColumns: 'repeat(18, 1fr)', alignItems: 'center' }}>
              {/* faint month separators */}
              {[6, 12].map((c) => (
                <span key={c} style={{ position: 'absolute', left: `${(c / 18) * 100}%`, top: 0, bottom: 0, width: '1px', background: '#f4f4f7' }} />
              ))}
              <div
                style={{
                  gridColumn: `${r.start} / span ${r.span}`,
                  height: '15px', borderRadius: '8px',
                  background: r.tail ? `linear-gradient(90deg, ${r.color}, ${r.tail})` : r.color,
                  display: 'flex', alignItems: 'center', justifyContent: 'flex-end', paddingRight: '6px', gap: '2px',
                  transformOrigin: 'left center', animation: `ptm-grow 0.6s cubic-bezier(0.22,1,0.36,1) ${idx * 0.06}s both`,
                  boxShadow: `0 4px 10px -4px ${r.color}`,
                }}
              >
                <span style={{ width: '3px', height: '3px', borderRadius: '50%', background: 'rgba(255,255,255,0.9)' }} />
                <span style={{ width: '3px', height: '3px', borderRadius: '50%', background: 'rgba(255,255,255,0.9)' }} />
              </div>
            </div>
          </div>
        ))}
        {/* Today marker line spanning the chart area (chart starts at 150px) */}
        <div style={{ position: 'absolute', left: `calc(150px + (12 / 18) * (100% - 150px))`, top: 0, bottom: 0, width: '1.5px', background: BRAND, opacity: 0.45 }} />
      </div>
    </div>
  );
}

/* ═══════════════════════════ OVERVIEW ═══════════════════════════ */
function OverviewView() {
  const kpis = [
    { label: 'Progress', value: '62%', sub: '+8% this week', Icon: TrendingUp, color: BRAND, bg: '#F3EFFF' },
    { label: 'Tasks done', value: '48/77', sub: '29 remaining', Icon: CheckSquare, color: '#22C55E', bg: '#ECFDF5' },
    { label: 'Hours logged', value: '412', sub: 'this month', Icon: Clock, color: '#2563EB', bg: '#EFF6FF' },
  ];
  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', gap: '14px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px' }}>
        {kpis.map((k, i) => (
          <div key={k.label} style={{ border: '1px solid #eef0f2', borderRadius: '12px', padding: '12px 14px', animation: `ptm-fade 0.4s ${i * 0.05}s both` }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
              <span style={{ fontSize: '11px', fontWeight: 600, color: '#8A8F9E' }}>{k.label}</span>
              <span style={{ width: '24px', height: '24px', borderRadius: '7px', background: k.bg, display: 'grid', placeItems: 'center' }}><k.Icon size={13} style={{ color: k.color }} /></span>
            </div>
            <div style={{ fontSize: '20px', fontWeight: 800 }}>{k.value}</div>
            <div style={{ fontSize: '10px', color: '#22C55E', fontWeight: 600, marginTop: '2px' }}>{k.sub}</div>
          </div>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: '14px', flex: 1, minHeight: 0 }}>
        {/* Overall progress + phase bars */}
        <div style={{ border: '1px solid #eef0f2', borderRadius: '12px', padding: '14px 16px', display: 'flex', flexDirection: 'column' }}>
          <span style={{ fontSize: '12px', fontWeight: 700, marginBottom: '12px' }}>Phase Progress</span>
          {[
            { name: 'Discovery', pct: 100, color: '#22C55E' },
            { name: 'Design', pct: 82, color: BRAND },
            { name: 'Development', pct: 54, color: '#2563EB' },
            { name: 'Launch', pct: 18, color: '#F97316' },
          ].map((p, i) => (
            <div key={p.name} style={{ marginBottom: '12px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', marginBottom: '5px' }}>
                <span style={{ fontWeight: 600, color: '#444' }}>{p.name}</span>
                <span style={{ fontWeight: 700, color: '#666' }}>{p.pct}%</span>
              </div>
              <div style={{ height: '6px', borderRadius: '4px', background: '#f0f0f2', overflow: 'hidden' }}>
                <div style={{ height: '100%', width: `${p.pct}%`, borderRadius: '4px', background: p.color, transformOrigin: 'left', animation: `ptm-grow 0.6s ${i * 0.08}s both` }} />
              </div>
            </div>
          ))}
        </div>

        {/* Activity feed */}
        <div style={{ border: '1px solid #eef0f2', borderRadius: '12px', padding: '14px 16px', overflow: 'hidden' }}>
          <span style={{ fontSize: '12px', fontWeight: 700, marginBottom: '12px', display: 'block' }}>Recent Activity</span>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '11px' }}>
            {ACTIVITY.map((a, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '9px', animation: `ptm-fade 0.4s ${i * 0.06}s both` }}>
                <span style={{ width: '22px', height: '22px', borderRadius: '7px', background: '#f7f7fb', display: 'grid', placeItems: 'center', flexShrink: 0, marginTop: '1px' }}><a.Icon size={12} style={{ color: a.ic }} /></span>
                <span style={{ fontSize: '10.5px', color: '#555', lineHeight: 1.4 }}>
                  <b style={{ color: '#222' }}>{a.who}</b> {a.text} <b style={{ color: '#222' }}>{a.target}</b>
                  <span style={{ display: 'block', fontSize: '9px', color: '#aaa', marginTop: '1px' }}>{a.when} ago</span>
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════ BOARD (Kanban) ═══════════════════════════ */
function BoardView() {
  return (
    <div style={{ height: '100%', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '12px' }}>
      {BOARD.map((col, ci) => (
        <div key={col.title} style={{ display: 'flex', flexDirection: 'column', minHeight: 0 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '10px' }}>
            <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: col.color }} />
            <span style={{ fontSize: '11px', fontWeight: 700, color: '#333' }}>{col.title}</span>
            <span style={{ fontSize: '9.5px', fontWeight: 700, color: '#999', background: '#f1f2f5', borderRadius: '20px', padding: '1px 7px' }}>{col.count}</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '9px' }}>
            {col.cards.map((c, i) => (
              <div key={c.title} style={{ background: '#fff', border: '1px solid #eef0f2', borderRadius: '10px', padding: '10px 11px', boxShadow: '0 1px 2px rgba(20,20,60,0.04)', animation: `ptm-fade 0.4s ${(ci * 3 + i) * 0.04}s both` }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '9px' }}>
                  <span style={{ fontSize: '8px', fontWeight: 700, color: c.tagColor, background: c.tagBg, borderRadius: '5px', padding: '2px 6px' }}>{c.tag}</span>
                  <span style={{ marginLeft: 'auto', width: '6px', height: '6px', borderRadius: '50%', background: c.pr }} />
                </div>
                <div style={{ fontSize: '10.5px', fontWeight: 600, color: '#222', lineHeight: 1.3, marginBottom: '9px' }}>{c.title}</div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <Avatar color={c.who} size={17} />
                  <span style={{ marginLeft: 'auto', fontSize: '8.5px', color: '#aaa', display: 'flex', alignItems: 'center', gap: '3px' }}><MessageSquare size={9} /> 2</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

/* ═══════════════════════════ FILES ═══════════════════════════ */
function FilesView() {
  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '12px' }}>
        <span style={{ fontSize: '12px', fontWeight: 700 }}>Project Files</span>
        <span style={{ fontSize: '10px', color: '#8A8F9E', marginLeft: '8px' }}>24 files · 3 folders</span>
        <span style={{ marginLeft: 'auto', fontSize: '10px', fontWeight: 600, color: BRAND, display: 'flex', alignItems: 'center', gap: '3px', cursor: 'pointer' }}>View all <ArrowUpRight size={11} /></span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '9px' }}>
        {FILES.slice(0, 4).map((f, i) => (
          <div key={f.name} style={{ display: 'flex', alignItems: 'center', gap: '12px', border: '1px solid #eef0f2', borderRadius: '10px', padding: '10px 13px', animation: `ptm-fade 0.4s ${i * 0.05}s both` }}>
            <span style={{ width: '30px', height: '30px', borderRadius: '9px', background: f.bg, display: 'grid', placeItems: 'center', flexShrink: 0 }}><f.Icon size={15} style={{ color: f.color }} /></span>
            <div style={{ minWidth: 0, flex: 1 }}>
              <div style={{ fontSize: '11.5px', fontWeight: 600, color: '#222', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{f.name}</div>
              <div style={{ fontSize: '9.5px', color: '#999' }}>{f.meta}</div>
            </div>
            <span style={{ fontSize: '9.5px', color: '#aaa', flexShrink: 0 }}>{f.when}</span>
            <MoreHorizontal size={14} style={{ color: '#ccc', flexShrink: 0 }} />
          </div>
        ))}
      </div>
    </div>
  );
}

/* ═══════════════════════════ REPORTS ═══════════════════════════ */
function ReportsView() {
  const maxBurn = Math.max(...BURNDOWN);
  const maxVel = Math.max(...VELOCITY);
  // build a smooth-ish polyline for burndown
  const w = 100, h = 100;
  const pts = BURNDOWN.map((v, i) => `${(i / (BURNDOWN.length - 1)) * w},${h - (v / maxBurn) * h}`).join(' ');
  const area = `0,${h} ${pts} ${w},${h}`;
  return (
    <div style={{ height: '100%', display: 'grid', gridTemplateColumns: '1.25fr 1fr', gap: '14px' }}>
      {/* Burndown */}
      <div style={{ border: '1px solid #eef0f2', borderRadius: '12px', padding: '14px 16px', display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '4px' }}>
          <span style={{ fontSize: '12px', fontWeight: 700 }}>Burndown</span>
          <span style={{ marginLeft: 'auto', fontSize: '9.5px', fontWeight: 700, color: '#22C55E', background: '#ECFDF5', borderRadius: '5px', padding: '2px 7px' }}>On pace</span>
        </div>
        <span style={{ fontSize: '9.5px', color: '#999', marginBottom: '10px' }}>Remaining story points · 8 weeks</span>
        <div style={{ flex: 1, position: 'relative', minHeight: 0 }}>
          <svg viewBox="0 0 100 100" preserveAspectRatio="none" style={{ width: '100%', height: '100%', overflow: 'visible' }}>
            <defs>
              <linearGradient id="ptm-burn" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={BRAND} stopOpacity="0.28" />
                <stop offset="100%" stopColor={BRAND} stopOpacity="0" />
              </linearGradient>
            </defs>
            <polygon points={area} fill="url(#ptm-burn)" />
            <polyline points={pts} fill="none" stroke={BRAND} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" />
            {BURNDOWN.map((v, i) => (
              <circle key={i} cx={(i / (BURNDOWN.length - 1)) * w} cy={h - (v / maxBurn) * h} r="1.6" fill="#fff" stroke={BRAND} strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
            ))}
          </svg>
        </div>
      </div>

      {/* Velocity bars */}
      <div style={{ border: '1px solid #eef0f2', borderRadius: '12px', padding: '14px 16px', display: 'flex', flexDirection: 'column' }}>
        <span style={{ fontSize: '12px', fontWeight: 700, marginBottom: '2px' }}>Velocity</span>
        <span style={{ fontSize: '9.5px', color: '#999', marginBottom: '12px' }}>Points / sprint</span>
        <div style={{ flex: 1, display: 'flex', alignItems: 'flex-end', gap: '8px', minHeight: 0 }}>
          {VELOCITY.map((v, i) => (
            <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '5px', height: '100%', justifyContent: 'flex-end' }}>
              <div style={{ width: '100%', maxWidth: '18px', height: `${(v / maxVel) * 100}%`, borderRadius: '5px 5px 2px 2px', background: i === VELOCITY.length - 1 ? BRAND : '#DDD3FF', transformOrigin: 'bottom', animation: `ptm-rise 0.5s cubic-bezier(0.22,1,0.36,1) ${i * 0.06}s both` }} />
              <span style={{ fontSize: '8px', color: '#aaa' }}>S{i + 1}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
