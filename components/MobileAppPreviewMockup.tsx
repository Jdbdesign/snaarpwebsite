'use client';

import { useEffect, useState } from 'react';
import {
  Home,
  CheckCircle2,
  FolderKanban,
  MoreHorizontal,
  Bell,
  ShieldCheck,
  ChevronRight,
  ChevronLeft,
  Circle,
  Clock,
  Flag,
  Star,
  Cloud,
  Moon,
  LogOut,
  Send,
  Paperclip,
  CheckSquare,
  Calendar,
  Users,
  TrendingUp,
} from 'lucide-react';

const BRAND = '#7C3AED';

type NavKey = 'Home' | 'Tasks' | 'Projects' | 'More';
const NAV: { key: NavKey; Icon: typeof Home }[] = [
  { key: 'Home', Icon: Home },
  { key: 'Tasks', Icon: CheckCircle2 },
  { key: 'Projects', Icon: FolderKanban },
  { key: 'More', Icon: MoreHorizontal },
];

const PROJECTS = [
  { name: 'Website Redesign', status: 'In progress', pct: 60, color: '#2563EB', bg: '#EFF6FF', Icon: FolderKanban },
  { name: 'Product Launch', status: 'On track', pct: 45, color: '#059669', bg: '#ECFDF5', Icon: TrendingUp },
  { name: 'Marketing Campaign', status: 'Planning', pct: 30, color: '#F97316', bg: '#FFF4EC', Icon: Star },
];

const TASKS = [
  { title: 'Design homepage', tag: 'Design', tagColor: BRAND, tagBg: '#F3EFFF', time: '10:00', pr: '#F87171', done: false },
  { title: 'Review pull requests', tag: 'Dev', tagColor: '#2563EB', tagBg: '#EFF6FF', time: '12:30', pr: '#FBBF24', done: false },
  { title: 'Team standup', tag: 'Ops', tagColor: '#8A8F9E', tagBg: '#F1F2F5', time: '09:00', pr: '#34D399', done: true },
  { title: 'Send client update', tag: 'Marketing', tagColor: '#F97316', tagBg: '#FFF4EC', time: '15:00', pr: '#34D399', done: false },
];

const MORE_ITEMS = [
  { label: 'Notifications', Icon: Bell, color: '#2563EB', bg: '#EFF6FF', right: '3' },
  { label: 'Offline mode', Icon: Cloud, color: '#059669', bg: '#ECFDF5', toggle: true },
  { label: 'Dark mode', Icon: Moon, color: BRAND, bg: '#F3EFFF', toggle: false },
  { label: 'Team members', Icon: Users, color: '#F97316', bg: '#FFF4EC', right: '12' },
  { label: 'Sign out', Icon: LogOut, color: '#DC2626', bg: '#FEF2F2' },
];

function StatusBar({ dark = false }: { dark?: boolean }) {
  const c = dark ? '#fff' : '#1a1a1a';
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '8px 18px 2px', fontSize: '11px', fontWeight: 700, color: c }}>
      <span>9:41</span>
      <span style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '10px' }}>
        <span>••••</span><span>ᯤ</span><span>▮</span>
      </span>
    </div>
  );
}

/* ═══════════════════════ PHONE A — main app with bottom nav ═══════════════════════ */
function PhoneA({ nav }: { nav: NavKey }) {
  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', display: 'flex', flexDirection: 'column', background: '#F7F7FB', overflow: 'hidden' }}>
      <StatusBar />
      {/* Header */}
      <div style={{ padding: '6px 18px 10px', flexShrink: 0 }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <span style={{ fontSize: '15px', fontWeight: 800, letterSpacing: '-0.02em' }}>snaarp</span>
          <span style={{ marginLeft: 'auto', position: 'relative' }}>
            <Bell size={16} style={{ color: '#555' }} />
            <span style={{ position: 'absolute', top: '-2px', right: '-2px', width: '7px', height: '7px', borderRadius: '50%', background: '#F87171', border: '1.5px solid #F7F7FB' }} />
          </span>
        </div>
      </div>

      {/* Screen body (switches by nav) */}
      <div style={{ flex: 1, position: 'relative', overflow: 'hidden' }}>
        <div key={nav} style={{ position: 'absolute', inset: 0, padding: '0 18px', overflow: 'hidden', animation: 'map-slide 0.4s cubic-bezier(0.22,1,0.36,1)' }}>
          {nav === 'Home' && <HomeScreen />}
          {nav === 'Tasks' && <TasksScreen />}
          {nav === 'Projects' && <ProjectsScreen />}
          {nav === 'More' && <MoreScreen />}
        </div>
      </div>

      {/* Bottom nav */}
      <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', padding: '10px 8px 16px', background: '#fff', borderTop: '1px solid #eef0f2', flexShrink: 0 }}>
        {NAV.map((n) => {
          const active = n.key === nav;
          return (
            <div key={n.key} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '3px', color: active ? BRAND : '#B0B4C0', transition: 'color 0.25s ease' }}>
              <div style={{ position: 'relative', display: 'grid', placeItems: 'center' }}>
                {active && <span style={{ position: 'absolute', inset: '-6px -10px', background: '#F3EFFF', borderRadius: '10px' }} />}
                <n.Icon size={17} style={{ position: 'relative' }} />
              </div>
              <span style={{ fontSize: '8px', fontWeight: active ? 700 : 500 }}>{n.key}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function HomeScreen() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <div style={{ fontSize: '15px', fontWeight: 800, marginBottom: '1px' }}>Good morning, Alex 👋</div>
      <div style={{ fontSize: '10px', color: '#8A8F9E', marginBottom: '12px' }}>Let&apos;s make it happen</div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '14px' }}>
        <div style={{ background: '#fff', borderRadius: '13px', padding: '11px 12px', border: '1px solid #eef0f2' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '7px', marginBottom: '6px' }}>
            <span style={{ width: '24px', height: '24px', borderRadius: '8px', background: '#F3EFFF', display: 'grid', placeItems: 'center' }}><CheckSquare size={12} style={{ color: BRAND }} /></span>
            <span style={{ fontSize: '18px', fontWeight: 800 }}>10</span>
          </div>
          <span style={{ fontSize: '9px', color: '#8A8F9E' }}>My Tasks</span>
        </div>
        <div style={{ background: '#fff', borderRadius: '13px', padding: '11px 12px', border: '1px solid #eef0f2' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '7px', marginBottom: '6px' }}>
            <span style={{ width: '24px', height: '24px', borderRadius: '8px', background: '#FEF2F2', display: 'grid', placeItems: 'center' }}><ShieldCheck size={12} style={{ color: '#DC2626' }} /></span>
            <span style={{ fontSize: '18px', fontWeight: 800 }}>5</span>
          </div>
          <span style={{ fontSize: '9px', color: '#8A8F9E' }}>Overdue</span>
        </div>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '9px' }}>
        <span style={{ fontSize: '11.5px', fontWeight: 700 }}>My Projects</span>
        <span style={{ marginLeft: 'auto', fontSize: '9px', fontWeight: 600, color: BRAND }}>See all</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '9px' }}>
        {PROJECTS.map((p, i) => (
          <div key={p.name} style={{ background: '#fff', borderRadius: '13px', padding: '11px 12px', border: '1px solid #eef0f2', display: 'flex', alignItems: 'center', gap: '10px', animation: `map-fade 0.4s ${i * 0.06}s both` }}>
            <span style={{ width: '30px', height: '30px', borderRadius: '9px', background: p.bg, display: 'grid', placeItems: 'center', flexShrink: 0 }}><p.Icon size={14} style={{ color: p.color }} /></span>
            <div style={{ minWidth: 0, flex: 1 }}>
              <div style={{ fontSize: '11px', fontWeight: 700, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{p.name}</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginTop: '4px' }}>
                <span style={{ fontSize: '8.5px', color: '#8A8F9E' }}>{p.status} · {p.pct}%</span>
              </div>
              <div style={{ height: '4px', borderRadius: '3px', background: '#f0f0f2', overflow: 'hidden', marginTop: '4px' }}>
                <div style={{ height: '100%', width: `${p.pct}%`, borderRadius: '3px', background: p.color, transformOrigin: 'left', animation: `map-grow 0.6s ${i * 0.08}s both` }} />
              </div>
            </div>
            <ChevronRight size={14} style={{ color: '#ccc', flexShrink: 0 }} />
          </div>
        ))}
      </div>
    </div>
  );
}

function TasksScreen() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <div style={{ fontSize: '15px', fontWeight: 800, marginBottom: '1px' }}>My Tasks</div>
      <div style={{ fontSize: '10px', color: '#8A8F9E', marginBottom: '12px' }}>Today · 4 tasks</div>
      <div style={{ display: 'flex', gap: '6px', marginBottom: '12px' }}>
        {['All', 'Today', 'Upcoming'].map((t, i) => (
          <span key={t} style={{ fontSize: '9px', fontWeight: 700, padding: '5px 11px', borderRadius: '20px', background: i === 1 ? BRAND : '#fff', color: i === 1 ? '#fff' : '#8A8F9E', border: '1px solid #eef0f2' }}>{t}</span>
        ))}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '9px' }}>
        {TASKS.map((t, i) => (
          <div key={t.title} style={{ background: '#fff', borderRadius: '13px', padding: '11px 12px', border: '1px solid #eef0f2', display: 'flex', alignItems: 'center', gap: '10px', animation: `map-fade 0.4s ${i * 0.06}s both` }}>
            {t.done
              ? <span style={{ width: '17px', height: '17px', borderRadius: '6px', background: BRAND, display: 'grid', placeItems: 'center', flexShrink: 0 }}><CheckSquare size={10} style={{ color: '#fff' }} /></span>
              : <span style={{ width: '17px', height: '17px', borderRadius: '6px', border: '1.6px solid #d5d7e0', flexShrink: 0 }} />}
            <div style={{ minWidth: 0, flex: 1 }}>
              <div style={{ fontSize: '11px', fontWeight: 600, color: '#222', textDecoration: t.done ? 'line-through' : 'none', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{t.title}</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '7px', marginTop: '4px' }}>
                <span style={{ fontSize: '7.5px', fontWeight: 700, color: t.tagColor, background: t.tagBg, borderRadius: '5px', padding: '2px 6px' }}>{t.tag}</span>
                <span style={{ fontSize: '8.5px', color: '#8A8F9E', display: 'flex', alignItems: 'center', gap: '3px' }}><Clock size={9} /> {t.time}</span>
              </div>
            </div>
            <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: t.pr, flexShrink: 0 }} />
          </div>
        ))}
      </div>
    </div>
  );
}

function ProjectsScreen() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <div style={{ fontSize: '15px', fontWeight: 800, marginBottom: '1px' }}>Projects</div>
      <div style={{ fontSize: '10px', color: '#8A8F9E', marginBottom: '12px' }}>3 active · 1 planning</div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '11px' }}>
        {PROJECTS.map((p, i) => (
          <div key={p.name} style={{ background: '#fff', borderRadius: '14px', padding: '13px', border: '1px solid #eef0f2', animation: `map-fade 0.4s ${i * 0.07}s both` }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '9px', marginBottom: '10px' }}>
              <span style={{ width: '30px', height: '30px', borderRadius: '9px', background: p.bg, display: 'grid', placeItems: 'center' }}><p.Icon size={14} style={{ color: p.color }} /></span>
              <div>
                <div style={{ fontSize: '11.5px', fontWeight: 700 }}>{p.name}</div>
                <div style={{ fontSize: '8.5px', color: '#8A8F9E' }}>{p.status}</div>
              </div>
              <span style={{ marginLeft: 'auto', fontSize: '13px', fontWeight: 800, color: p.color }}>{p.pct}%</span>
            </div>
            <div style={{ height: '5px', borderRadius: '4px', background: '#f0f0f2', overflow: 'hidden', marginBottom: '9px' }}>
              <div style={{ height: '100%', width: `${p.pct}%`, borderRadius: '4px', background: p.color, transformOrigin: 'left', animation: `map-grow 0.6s ${i * 0.08}s both` }} />
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '8.5px', color: '#8A8F9E' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '3px' }}><CheckSquare size={9} /> {Math.round(p.pct / 5)} tasks</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '3px' }}><Calendar size={9} /> Due Oct</span>
              <span style={{ marginLeft: 'auto', display: 'flex' }}>
                {['#7C3AED', '#2563EB', '#059669'].map((c, k) => <span key={k} style={{ width: '15px', height: '15px', borderRadius: '50%', background: c, border: '1.5px solid #fff', marginLeft: k ? '-5px' : 0 }} />)}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function MoreScreen() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <div style={{ background: '#fff', borderRadius: '14px', padding: '14px', border: '1px solid #eef0f2', display: 'flex', alignItems: 'center', gap: '11px', marginBottom: '14px' }}>
        <span style={{ width: '40px', height: '40px', borderRadius: '50%', background: BRAND, display: 'grid', placeItems: 'center', color: '#fff', fontSize: '15px', fontWeight: 800 }}>A</span>
        <div>
          <div style={{ fontSize: '12.5px', fontWeight: 700 }}>Alex Carter</div>
          <div style={{ fontSize: '9px', color: '#8A8F9E' }}>alex.carter@snaarp.com</div>
        </div>
        <span style={{ marginLeft: 'auto', fontSize: '8px', fontWeight: 700, color: BRAND, background: '#F3EFFF', borderRadius: '6px', padding: '3px 8px' }}>PRO</span>
      </div>
      <div style={{ background: '#fff', borderRadius: '14px', border: '1px solid #eef0f2', overflow: 'hidden' }}>
        {MORE_ITEMS.map((m, i) => (
          <div key={m.label} style={{ display: 'flex', alignItems: 'center', gap: '11px', padding: '11px 13px', borderTop: i ? '1px solid #f2f3f5' : 'none', animation: `map-fade 0.4s ${i * 0.05}s both` }}>
            <span style={{ width: '26px', height: '26px', borderRadius: '8px', background: m.bg, display: 'grid', placeItems: 'center', flexShrink: 0 }}><m.Icon size={13} style={{ color: m.color }} /></span>
            <span style={{ fontSize: '11px', fontWeight: 600, color: m.label === 'Sign out' ? '#DC2626' : '#222' }}>{m.label}</span>
            <span style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center' }}>
              {m.right && <span style={{ fontSize: '8.5px', fontWeight: 700, color: '#fff', background: m.label === 'Notifications' ? '#F87171' : '#B0B4C0', borderRadius: '20px', padding: '1px 7px', marginRight: '6px' }}>{m.right}</span>}
              {'toggle' in m
                ? <span style={{ width: '28px', height: '16px', borderRadius: '10px', background: m.toggle ? BRAND : '#e2e3ea', position: 'relative', flexShrink: 0 }}><span style={{ position: 'absolute', top: '2px', left: m.toggle ? '14px' : '2px', width: '12px', height: '12px', borderRadius: '50%', background: '#fff', transition: 'left 0.2s ease' }} /></span>
                : m.label !== 'Sign out' && <ChevronRight size={14} style={{ color: '#ccc' }} />}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ═══════════════════════ PHONE B — contextual detail (syncs with nav) ═══════════════════════ */
function PhoneB({ nav }: { nav: NavKey }) {
  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', display: 'flex', flexDirection: 'column', background: '#fff', overflow: 'hidden' }}>
      <StatusBar />
      <div key={nav} style={{ flex: 1, minHeight: 0, animation: 'map-slide 0.4s cubic-bezier(0.22,1,0.36,1)' }}>
        {nav === 'Tasks' || nav === 'Home' ? <TaskDetail /> : nav === 'Projects' ? <ProjectDetail /> : <NotificationsDetail />}
      </div>
    </div>
  );
}

function DetailHeader({ title }: { title: string }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '8px 16px 12px' }}>
      <ChevronLeft size={17} style={{ color: '#555' }} />
      <span style={{ fontSize: '13px', fontWeight: 700 }}>{title}</span>
      <MoreHorizontal size={16} style={{ color: '#999', marginLeft: 'auto' }} />
    </div>
  );
}

function TaskDetail() {
  const checklist = [
    { t: 'Create wireframes', done: true },
    { t: 'Design responsive view', done: true },
    { t: 'Design mobile view', done: false },
    { t: 'Upload final assets', done: false },
  ];
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <DetailHeader title="Task Details" />
      <div style={{ flex: 1, overflow: 'hidden', padding: '0 16px' }}>
        <div style={{ fontSize: '15px', fontWeight: 800, marginBottom: '9px' }}>Design homepage</div>
        <div style={{ display: 'flex', gap: '7px', marginBottom: '13px' }}>
          <span style={{ fontSize: '8px', fontWeight: 700, color: BRAND, background: '#F3EFFF', borderRadius: '5px', padding: '3px 8px' }}>Design</span>
          <span style={{ fontSize: '8px', fontWeight: 700, color: '#DC2626', background: '#FEF2F2', borderRadius: '5px', padding: '3px 8px', display: 'flex', alignItems: 'center', gap: '3px' }}><Flag size={8} /> High</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '10px', color: '#555', marginBottom: '7px' }}>
          <span style={{ width: '20px', height: '20px', borderRadius: '50%', background: BRAND, color: '#fff', display: 'grid', placeItems: 'center', fontSize: '9px', fontWeight: 700 }}>A</span>
          Alex Carter
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '10px', color: '#8A8F9E', marginBottom: '14px' }}><Calendar size={11} /> Aug 24 – Aug 26</div>

        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '9px' }}>
          <span style={{ fontSize: '10.5px', fontWeight: 700 }}>Checklist</span>
          <span style={{ marginLeft: 'auto', fontSize: '9px', color: '#8A8F9E' }}>2/4</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '14px' }}>
          {checklist.map((c, i) => (
            <div key={c.t} style={{ display: 'flex', alignItems: 'center', gap: '9px', animation: `map-fade 0.4s ${i * 0.05}s both` }}>
              {c.done
                ? <span style={{ width: '15px', height: '15px', borderRadius: '5px', background: BRAND, display: 'grid', placeItems: 'center' }}><CheckSquare size={9} style={{ color: '#fff' }} /></span>
                : <Circle size={15} style={{ color: '#d5d7e0' }} />}
              <span style={{ fontSize: '10.5px', color: c.done ? '#aaa' : '#333', textDecoration: c.done ? 'line-through' : 'none' }}>{c.t}</span>
            </div>
          ))}
        </div>

        <div style={{ background: BRAND, color: '#fff', borderRadius: '11px', padding: '11px', textAlign: 'center', fontSize: '11px', fontWeight: 700, marginBottom: '14px' }}>Mark as complete</div>

        <div style={{ fontSize: '10.5px', fontWeight: 700, marginBottom: '8px' }}>Comments</div>
      </div>
      <div style={{ padding: '10px 16px', borderTop: '1px solid #eef0f2', display: 'flex', alignItems: 'center', gap: '9px' }}>
        <span style={{ width: '24px', height: '24px', borderRadius: '50%', background: '#E11D48', color: '#fff', display: 'grid', placeItems: 'center', fontSize: '10px', fontWeight: 700 }}>S</span>
        <span style={{ flex: 1, fontSize: '10px', color: '#aaa' }}>Add a comment...</span>
        <Paperclip size={14} style={{ color: '#bbb' }} />
        <span style={{ width: '28px', height: '28px', borderRadius: '50%', background: BRAND, display: 'grid', placeItems: 'center', flexShrink: 0 }}><Send size={13} style={{ color: '#fff' }} /></span>
      </div>
    </div>
  );
}

function ProjectDetail() {
  const phases = [
    { name: 'Discovery', pct: 100, color: '#22C55E' },
    { name: 'Design', pct: 78, color: BRAND },
    { name: 'Build', pct: 40, color: '#2563EB' },
  ];
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <DetailHeader title="Project" />
      <div style={{ flex: 1, overflow: 'hidden', padding: '0 16px' }}>
        <div style={{ fontSize: '15px', fontWeight: 800, marginBottom: '4px' }}>Website Redesign</div>
        <div style={{ fontSize: '9.5px', color: '#8A8F9E', marginBottom: '14px' }}>In progress · Due Oct 12</div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '9px', marginBottom: '14px' }}>
          <div style={{ background: '#F7F7FB', borderRadius: '11px', padding: '10px' }}>
            <div style={{ fontSize: '16px', fontWeight: 800, color: BRAND }}>60%</div>
            <div style={{ fontSize: '8.5px', color: '#8A8F9E' }}>Complete</div>
          </div>
          <div style={{ background: '#F7F7FB', borderRadius: '11px', padding: '10px' }}>
            <div style={{ fontSize: '16px', fontWeight: 800 }}>15/25</div>
            <div style={{ fontSize: '8.5px', color: '#8A8F9E' }}>Tasks</div>
          </div>
        </div>

        <div style={{ fontSize: '10.5px', fontWeight: 700, marginBottom: '10px' }}>Phases</div>
        {phases.map((p, i) => (
          <div key={p.name} style={{ marginBottom: '11px', animation: `map-fade 0.4s ${i * 0.06}s both` }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '9.5px', marginBottom: '5px' }}>
              <span style={{ fontWeight: 600, color: '#444' }}>{p.name}</span>
              <span style={{ fontWeight: 700, color: '#666' }}>{p.pct}%</span>
            </div>
            <div style={{ height: '5px', borderRadius: '4px', background: '#f0f0f2', overflow: 'hidden' }}>
              <div style={{ height: '100%', width: `${p.pct}%`, borderRadius: '4px', background: p.color, transformOrigin: 'left', animation: `map-grow 0.6s ${i * 0.08}s both` }} />
            </div>
          </div>
        ))}

        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '4px' }}>
          <span style={{ fontSize: '9.5px', color: '#8A8F9E' }}>Team</span>
          <span style={{ display: 'flex' }}>
            {['#7C3AED', '#2563EB', '#059669', '#F97316'].map((c, k) => <span key={k} style={{ width: '20px', height: '20px', borderRadius: '50%', background: c, border: '1.5px solid #fff', marginLeft: k ? '-6px' : 0 }} />)}
          </span>
        </div>
      </div>
    </div>
  );
}

function NotificationsDetail() {
  const notes = [
    { who: 'Sofia', text: 'assigned you a task', when: '5m', color: '#E11D48', Icon: CheckSquare, ic: BRAND },
    { who: 'James', text: 'mentioned you in a comment', when: '20m', color: '#2563EB', Icon: Bell, ic: '#2563EB' },
    { who: 'System', text: 'Sprint 4 starts tomorrow', when: '1h', color: BRAND, Icon: Calendar, ic: '#F97316' },
    { who: 'Daniel', text: 'completed “API contract”', when: '3h', color: '#0891B2', Icon: CheckCircle2, ic: '#22C55E' },
  ];
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <DetailHeader title="Notifications" />
      <div style={{ flex: 1, overflow: 'hidden', padding: '0 16px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '11px' }}>
          {notes.map((n, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', animation: `map-fade 0.4s ${i * 0.06}s both` }}>
              <span style={{ position: 'relative', flexShrink: 0 }}>
                <span style={{ width: '30px', height: '30px', borderRadius: '50%', background: n.color, color: '#fff', display: 'grid', placeItems: 'center', fontSize: '11px', fontWeight: 700 }}>{n.who[0]}</span>
                <span style={{ position: 'absolute', bottom: '-2px', right: '-2px', width: '15px', height: '15px', borderRadius: '50%', background: '#fff', display: 'grid', placeItems: 'center' }}><n.Icon size={9} style={{ color: n.ic }} /></span>
              </span>
              <div style={{ minWidth: 0, flex: 1 }}>
                <div style={{ fontSize: '10.5px', color: '#444', lineHeight: 1.4 }}><b style={{ color: '#222' }}>{n.who}</b> {n.text}</div>
                <div style={{ fontSize: '8.5px', color: '#aaa', marginTop: '2px' }}>{n.when} ago</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════ Phone frame + composition ═══════════════════════ */
function PhoneFrame({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) {
  return (
    <div style={{ borderRadius: '38px', padding: '9px', background: 'linear-gradient(155deg, #2b2b31, #16161a)', boxShadow: '0 40px 70px -30px rgba(30,20,90,0.5)', ...style }}>
      <div style={{ position: 'relative', borderRadius: '30px', overflow: 'hidden', background: '#fff', width: '100%', height: '100%' }}>
        {/* notch */}
        <div style={{ position: 'absolute', top: '8px', left: '50%', transform: 'translateX(-50%)', width: '78px', height: '20px', borderRadius: '12px', background: '#111', zIndex: 20 }} />
        {children}
      </div>
    </div>
  );
}

export function MobileAppPreviewMockup({ autoCycle = true }: { autoCycle?: boolean } = {}) {
  const [nav, setNav] = useState<NavKey>('Home');
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (!autoCycle || paused) return;
    const order: NavKey[] = ['Home', 'Tasks', 'Projects', 'More'];
    const id = setInterval(() => setNav((c) => order[(order.indexOf(c) + 1) % order.length]), 3400);
    return () => clearInterval(id);
  }, [autoCycle, paused]);

  return (
    <div
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      style={{ position: 'relative', width: '100%', height: '100%', fontFamily: 'Poppins, sans-serif', color: '#1a1a1a' }}
    >
      {/* Back phone (B) — offset up/right */}
      <PhoneFrame style={{ position: 'absolute', width: '224px', height: '470px', right: '2%', top: '34px', zIndex: 1 }}>
        <PhoneB nav={nav} />
      </PhoneFrame>
      {/* Front phone (A) — bottom nav driver */}
      <PhoneFrame style={{ position: 'absolute', width: '236px', height: '498px', left: '2%', top: '0px', zIndex: 2 }}>
        <PhoneA nav={nav} />
      </PhoneFrame>

      <style>{`
        @keyframes map-fade { from { opacity: 0; transform: translateY(6px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes map-slide { from { opacity: 0; transform: translateX(10px); } to { opacity: 1; transform: translateX(0); } }
        @keyframes map-grow { from { transform: scaleX(0); } to { transform: scaleX(1); } }
      `}</style>
    </div>
  );
}
