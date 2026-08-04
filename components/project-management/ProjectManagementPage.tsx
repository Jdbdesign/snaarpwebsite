'use client';

import { useRef, useState, useCallback, useEffect } from 'react';
import { usePmReveal } from './usePmReveal';
import { HomeFinalCTA } from '@/components/HomeFinalCTA';
import { StackTrustBar, PlainStackWrapper } from '@/components/sections/StackTrustBar';

const PM_STACK_APPS = [
  { iconSrc: '/assets/icons/search.jpg', name: 'Snaarp Contacts' },
  { iconSrc: '/assets/icons/chat-bubbles.jpg', name: 'Snaarp Teams' },
  { iconSrc: '/assets/icons/envelope.jpg', name: 'Snaarp Mail' },
  { iconSrc: '/assets/icons/cube.jpg', name: 'Snaarp Work Drive' },
];

interface Task {
  id: string;
  title: string;
  due: string;
  initials: string;
  c: string;
  p: 'high' | 'med' | 'low';
  stage: string;
}

const INITIAL_TASKS: Task[] = [
  { id: 't1', title: 'Draft Q4 launch brief', due: '12 Oct', initials: 'AR', c: '#7C3AED', p: 'high', stage: 'todo' },
  { id: 't2', title: 'Update pricing page copy', due: '18 Oct', initials: 'SP', c: '#B45309', p: 'low', stage: 'todo' },
  { id: 't3', title: 'Design onboarding emails', due: '14 Oct', initials: 'KM', c: '#0E9384', p: 'med', stage: 'doing' },
  { id: 't4', title: 'Supplier contract review', due: '15 Oct', initials: 'SP', c: '#B45309', p: 'high', stage: 'doing' },
  { id: 't5', title: 'Homepage hero mockups', due: '11 Oct', initials: 'AR', c: '#7C3AED', p: 'med', stage: 'review' },
  { id: 't6', title: 'Book venue for offsite', due: '4 Oct', initials: 'KM', c: '#0E9384', p: 'low', stage: 'done' },
];

const ORDER = ['todo', 'doing', 'review', 'done'];
const NUDGE_ID = 't1';

const AVATAR_TINTS: Record<string, string> = { '#7C3AED': '#EDE9FE', '#0E9384': '#D5F5EF', '#B45309': '#FDE6C9', '#E11D74': '#FEE2EC' };
const PRIORITY_COLORS: Record<string, string> = { high: '#E11D74', med: '#B45309', low: '#14B8A6' };

const FAQS = [
  { q: 'Can I see my project as a timeline, not just a board?', a: 'Yes — switch between board and timeline view for the same project.' },
  { q: 'Can I assign a task to someone and set a due date?', a: 'Yes — every task supports an owner, due date, and priority level.' },
  { q: 'Does Project Management come with templates?', a: 'Yes — start from a blank board or a library of pre-built project templates.' },
  { q: 'Is Project Management included in the £2 Starter plan?', a: 'Yes — included in every plan, no add-on required.' },
  { q: 'Can I attach files or comment directly on a task?', a: 'Yes — comments and attachments live on the task itself, no separate thread needed.' },
];

function avatarStyle(c: string) {
  return { flexShrink: 0, width: 22, height: 22, borderRadius: '50%', fontSize: '8px', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', background: AVATAR_TINTS[c] || '#EDE9FE', color: c } as React.CSSProperties;
}

function priorityDotStyle(p: string) {
  const col = PRIORITY_COLORS[p] || '#B4AEC6';
  return { flexShrink: 0, width: 7, height: 7, borderRadius: '50%', marginTop: 5, background: col } as React.CSSProperties;
}

function dueChipStyle(t: Task) {
  const soon = t.stage !== 'done' && (t.p === 'high' || t.id === 't5');
  const bg = t.stage === 'done' ? '#ECFDF9' : soon ? '#FEF6E7' : '#FBFAFE';
  const bd = t.stage === 'done' ? '#CDF5EE' : soon ? '#FBEBC6' : '#EDEBF2';
  const fg = t.stage === 'done' ? '#0E9384' : soon ? '#B45309' : '#8B85A0';
  return { display: 'inline-flex', alignItems: 'center', gap: 4, padding: '3px 8px', borderRadius: 999, whiteSpace: 'nowrap' as const, flexShrink: 0, fontSize: '9.5px', fontWeight: 600, background: bg, border: `1px solid ${bd}`, color: fg } as React.CSSProperties;
}

/* ─── Calendar SVG icon used in due chips ─── */
function CalendarMiniIcon() {
  return (
    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
}

/* ─── Task Card ─── */
function TaskCard({ t, draggingId, onPointerDown }: { t: Task; draggingId: string | null; onPointerDown: (id: string, e: React.PointerEvent) => void }) {
  const dragging = draggingId === t.id;
  const nudge = t.id === NUDGE_ID && !draggingId;
  const cardStyle: React.CSSProperties = {
    background: '#fff', border: '1px solid #ECE9F5', borderRadius: 11, padding: '11px 12px', cursor: 'grab', touchAction: 'none',
    boxShadow: '0 2px 4px -2px rgba(37,22,84,.18),0 10px 20px -14px rgba(37,22,84,.4)',
    transition: 'opacity .15s,box-shadow .15s,transform .15s',
    opacity: dragging ? 0.32 : 1,
    animation: nudge ? 'pm-nudge 3.4s ease-in-out 1.4s 2' : undefined,
  };
  return (
    <div onPointerDown={(e) => onPointerDown(t.id, e)} style={cardStyle}>
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: 7 }}>
        <span style={priorityDotStyle(t.p)} />
        <div style={{ fontSize: '12.5px', fontWeight: 600, color: '#1B1730', lineHeight: 1.32 }}>{t.title}</div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8, marginTop: 11 }}>
        <span style={dueChipStyle(t)}><CalendarMiniIcon />{t.due}</span>
        <span style={avatarStyle(t.c)}>{t.initials}</span>
      </div>
    </div>
  );
}

/* ─── Board Column ─── */
function BoardColumn({ stage, label, dotColor, labelColor, tasks, draggingId, onPointerDown }: {
  stage: string; label: string; dotColor: string; labelColor: string; tasks: Task[]; draggingId: string | null;
  onPointerDown: (id: string, e: React.PointerEvent) => void;
}) {
  return (
    <div data-col-stage={stage} style={{ flex: 1, minWidth: 0, background: '#fff', border: '1px solid #F0EEF6', borderRadius: 14, padding: '12px 11px', display: 'flex', flexDirection: 'column', gap: 10, minHeight: 274, transition: 'background .15s' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 7, padding: '0 3px 3px' }}>
        <span style={{ width: 8, height: 8, borderRadius: '50%', background: dotColor }} />
        <span style={{ fontSize: '11.5px', fontWeight: 700, color: labelColor, letterSpacing: '.01em' }}>{label}</span>
        <span style={{ marginLeft: 'auto', fontSize: '10.5px', fontWeight: 700, color: '#B4AEC6' }}>{tasks.length}</span>
      </div>
      {tasks.map((t) => <TaskCard key={t.id} t={t} draggingId={draggingId} onPointerDown={onPointerDown} />)}
    </div>
  );
}

/* ─── FAQ Item ─── */
function FaqItem({ q, a, open, toggle }: { q: string; a: string; open: boolean; toggle: () => void }) {
  const cardStyle: React.CSSProperties = {
    background: '#fff', border: `1px solid ${open ? '#E4DBF7' : '#EDEBF2'}`, borderRadius: 16, overflow: 'hidden',
    boxShadow: open ? '0 16px 34px -24px rgba(124,58,237,.3)' : 'none', transition: 'border-color .2s,box-shadow .2s',
  };
  const iconWrapStyle: React.CSSProperties = {
    flexShrink: 0, width: 28, height: 28, borderRadius: 8, background: open ? '#7C3AED' : '#F5F3FF',
    display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'background .2s',
  };
  const iconStroke = open ? '#fff' : '#7C3AED';
  const iconTransform: React.CSSProperties = { transform: `rotate(${open ? 45 : 0}deg)`, transition: 'transform .25s' };
  return (
    <div style={cardStyle}>
      <button onClick={toggle} style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, padding: '20px 24px', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', fontFamily: 'inherit' }}>
        <span style={{ fontSize: '16.5px', fontWeight: 600, color: '#1B1730' }}>{q}</span>
        <span style={iconWrapStyle}>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke={iconStroke} strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" style={iconTransform}>
            <line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" />
          </svg>
        </span>
      </button>
      {open && <div style={{ padding: '0 24px 22px', fontSize: '15px', lineHeight: 1.6, color: '#5B5670', maxWidth: 660 }}>{a}</div>}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   MAIN PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════════════════ */
export function ProjectManagementPage() {
  const pageRef = useRef<HTMLDivElement>(null);
  usePmReveal(pageRef);

  const [tasks, setTasks] = useState<Task[]>(INITIAL_TASKS);
  const [draggingId, setDraggingId] = useState<string | null>(null);
  const [faqOpen, setFaqOpen] = useState<number>(-1);

  const dragRef = useRef<{ id: string; origin: string; startX: number; startY: number; moved: boolean; over: string | null } | null>(null);
  const ghostRef = useRef<HTMLDivElement>(null);
  const reducedRef = useRef(false);

  useEffect(() => {
    reducedRef.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }, []);

  const byStage = useCallback((stage: string) => tasks.filter((t) => t.stage === stage), [tasks]);

  const advance = useCallback((id: string) => {
    setTasks((prev) => prev.map((t) => {
      if (t.id !== id) return t;
      const idx = ORDER.indexOf(t.stage);
      const next = ORDER[Math.min(idx + 1, ORDER.length - 1)];
      return next === t.stage ? t : { ...t, stage: next };
    }));
    pulseUpdated();
  }, []);

  const pulseUpdated = useCallback(() => {
    const dot = document.querySelector('[data-updated-dot]') as HTMLElement | null;
    if (!dot || reducedRef.current) return;
    dot.style.animation = 'none';
    void dot.offsetWidth;
    dot.style.animation = 'pm-savedPop .6s ease-out, pm-livePulse 2.6s ease-out infinite';
  }, []);

  const positionGhost = useCallback((x: number, y: number) => {
    const g = ghostRef.current;
    if (g) { g.style.left = (x - 93) + 'px'; g.style.top = (y - 26) + 'px'; }
  }, []);

  const onPointerDown = useCallback((id: string, e: React.PointerEvent) => {
    if (e.button !== 0) return;
    if (reducedRef.current) { advance(id); return; }
    e.preventDefault();
    const t = tasks.find((x) => x.id === id);
    if (!t) return;
    dragRef.current = { id, origin: t.stage, startX: e.clientX, startY: e.clientY, moved: false, over: null };
    document.body.style.userSelect = 'none';
    setDraggingId(id);
    positionGhost(e.clientX, e.clientY);

    const onMove = (ev: PointerEvent) => {
      const d = dragRef.current;
      if (!d) return;
      ev.preventDefault();
      if (Math.hypot(ev.clientX - d.startX, ev.clientY - d.startY) > 6) d.moved = true;
      positionGhost(ev.clientX, ev.clientY);
      let over: string | null = null;
      document.querySelectorAll<HTMLElement>('[data-col-stage]').forEach((el) => {
        const r = el.getBoundingClientRect();
        if (ev.clientX >= r.left && ev.clientX <= r.right && ev.clientY >= r.top && ev.clientY <= r.bottom) over = el.getAttribute('data-col-stage');
      });
      d.over = over;
      document.querySelectorAll<HTMLElement>('[data-col-stage]').forEach((el) => {
        const hot = el.getAttribute('data-col-stage') === over && over !== d.origin;
        el.style.background = hot ? '#F5F2FD' : '';
        el.style.borderColor = hot ? '#C9BEEE' : '';
      });
    };

    const onUp = () => {
      const d = dragRef.current;
      dragRef.current = null;
      document.removeEventListener('pointermove', onMove);
      document.removeEventListener('pointerup', onUp);
      document.removeEventListener('pointercancel', onUp);
      document.body.style.userSelect = '';
      document.querySelectorAll<HTMLElement>('[data-col-stage]').forEach((el) => { el.style.background = ''; el.style.borderColor = ''; });
      if (!d) { setDraggingId(null); return; }
      let target = d.origin;
      if (d.over && d.over !== d.origin) target = d.over;
      else if (!d.moved) target = ORDER[Math.min(ORDER.indexOf(d.origin) + 1, ORDER.length - 1)];
      const changed = target !== d.origin;
      setTasks((prev) => prev.map((tt) => tt.id === d.id ? { ...tt, stage: target } : tt));
      setDraggingId(null);
      if (changed) pulseUpdated();
    };

    document.addEventListener('pointermove', onMove);
    document.addEventListener('pointerup', onUp);
    document.addEventListener('pointercancel', onUp);
  }, [tasks, advance, positionGhost, pulseUpdated]);

  const doneCount = byStage('done').length;
  const doneLabel = `${doneCount} of ${tasks.length} done`;
  const boardHint = reducedRef.current ? 'Tap a task to move it to the next stage' : 'Drag a task to another column — or tap a card to advance it';
  const dragTask = draggingId ? tasks.find((t) => t.id === draggingId) : null;

  return (
    <div ref={pageRef} style={{ minWidth: 0, overflowX: 'hidden', background: '#fff', lineHeight: 1.5 }}>

      {/* ════════ HERO ════════ */}
      <section style={{ background: 'linear-gradient(180deg,#FBFAFF 0%,#fff 74%)', padding: '70px 24px 96px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: -160, left: '50%', transform: 'translateX(-50%)', width: 900, height: 520, background: 'radial-gradient(ellipse at center,rgba(124,58,237,.11),transparent 66%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', top: 180, right: -140, width: 420, height: 420, background: 'radial-gradient(circle,rgba(20,184,166,.09),transparent 68%)', pointerEvents: 'none' }} />

        <div className="max-w-7xl mx-auto px-6 lg:px-10" style={{ position: 'relative' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0,1.05fr)', gap: 56, alignItems: 'center' }}>
            <div data-pm-reveal="">
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '7px 14px', borderRadius: 999, background: '#F5F3FF', color: '#7C3AED', fontWeight: 600, fontSize: '12px', letterSpacing: '.09em', textTransform: 'uppercase', border: '1px solid #EDE9FE', whiteSpace: 'nowrap' }}>
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#7C3AED' }} />Run the Business · Project Management
              </span>
              <h1 className="pm-hero-heading" style={{ margin: '22px 0 0', color: '#1B1730' }}>Plan it.<br /><span style={{ color: '#7C3AED' }}>Track it. Ship it.</span></h1>
              <p style={{ fontSize: '18px', lineHeight: 1.62, color: '#5B5670', margin: '22px 0 0', maxWidth: 516 }}>Boards, tasks, and timelines for work that actually moves. See what&apos;s due, who&apos;s on it, and what&apos;s next — without a separate tool for every team.</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 13, marginTop: 28 }}>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '15px 28px', borderRadius: 999, background: '#7C3AED', color: '#fff', fontWeight: 600, fontSize: '15.5px', cursor: 'pointer', boxShadow: '0 12px 26px -8px rgba(124,58,237,.6)' }}>Start for £2/month</span>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '15px 26px', borderRadius: 999, background: '#fff', color: '#2A2440', fontWeight: 600, fontSize: '15.5px', cursor: 'pointer', border: '1.5px solid #E4DFF2' }}>See how it works
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 9, marginTop: 22, fontSize: '13.5px', color: '#8B85A0', fontWeight: 500 }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#14B8A6" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
                GDPR compliant · No credit card required
              </div>
            </div>
            <div data-pm-reveal="" data-pm-reveal-delay="140" style={{ position: 'relative' }}>
              <div style={{ background: '#fff', borderRadius: 18, border: '1px solid rgba(236,233,245,.05)', overflow: 'hidden', boxShadow: '0 1px 3px -1px rgba(37,22,84,.08),0 24px 48px -20px rgba(37,22,84,.18)', transform: 'scale(1.05)', transformOrigin: 'top left' }}>
              {/* board chrome */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '15px 20px', borderBottom: '1px solid #F0EEF6', background: '#FBFAFE' }}>
                <span style={{ width: 30, height: 30, borderRadius: 9, background: '#F5F3FF', border: '1px solid #E6DEFA', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M8 7v7" /><path d="M12 7v10" /><path d="M16 7v4" /></svg>
                </span>
                <div style={{ minWidth: 0 }}>
                  <div style={{ fontSize: '14.5px', fontWeight: 700, color: '#1B1730', letterSpacing: '-.01em', lineHeight: 1.2 }}>Q4 Launch</div>
                  <div style={{ fontSize: '11px', color: '#A39EB4', fontWeight: 500 }}>6 tasks · 3 people</div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 4, marginLeft: 18, padding: 3, borderRadius: 999, background: '#F2F0F9', border: '1px solid #EBE8F4' }}>
                  <span style={{ padding: '5px 13px', borderRadius: 999, background: '#fff', color: '#1B1730', fontSize: '11.5px', fontWeight: 600, boxShadow: '0 2px 6px -2px rgba(37,22,84,.22)' }}>Board</span>
                  <span style={{ padding: '5px 13px', borderRadius: 999, color: '#8B85A0', fontSize: '11.5px', fontWeight: 600, cursor: 'pointer' }}>Timeline</span>
                </div>
                <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 16 }}>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <span style={{ width: 26, height: 26, borderRadius: '50%', background: '#EDE9FE', color: '#7C3AED', fontSize: '9.5px', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid #fff' }}>AR</span>
                    <span style={{ width: 26, height: 26, borderRadius: '50%', background: '#D5F5EF', color: '#0E9384', fontSize: '9.5px', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid #fff', marginLeft: -8 }}>KM</span>
                    <span style={{ width: 26, height: 26, borderRadius: '50%', background: '#FDE6C9', color: '#B45309', fontSize: '9.5px', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid #fff', marginLeft: -8 }}>SP</span>
                  </div>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 7, fontSize: '11.5px', fontWeight: 600, color: '#0E9384', whiteSpace: 'nowrap' }}>
                    <span data-updated-dot="" style={{ width: 8, height: 8, borderRadius: '50%', background: '#14B8A6', animation: 'pm-livePulse 2.6s ease-out infinite' }} />Updated
                  </span>
                </div>
              </div>

              {/* columns */}
              <div style={{ padding: 18, background: '#FBFAFE' }}>
                <div style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                  <BoardColumn stage="todo" label="To Do" dotColor="#8B85A0" labelColor="#5B5670" tasks={byStage('todo')} draggingId={draggingId} onPointerDown={onPointerDown} />
                  <BoardColumn stage="doing" label="In Progress" dotColor="#7C3AED" labelColor="#7C3AED" tasks={byStage('doing')} draggingId={draggingId} onPointerDown={onPointerDown} />
                  <BoardColumn stage="review" label="Review" dotColor="#B45309" labelColor="#B45309" tasks={byStage('review')} draggingId={draggingId} onPointerDown={onPointerDown} />
                  <BoardColumn stage="done" label="Done" dotColor="#0E9384" labelColor="#0E9384" tasks={byStage('done')} draggingId={draggingId} onPointerDown={onPointerDown} />
                </div>
              </div>
            </div>

            {/* drag ghost */}
            {dragTask && (
              <div ref={ghostRef} style={{ position: 'fixed', left: 0, top: 0, zIndex: 9999, pointerEvents: 'none', width: 186, padding: '11px 12px', borderRadius: 12, background: '#fff', border: '1.5px solid #C9BEEE', boxShadow: '0 26px 46px -14px rgba(37,22,84,.5)', transform: 'rotate(-4deg)' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 7 }}>
                  <span style={priorityDotStyle(dragTask.p)} />
                  <div style={{ fontSize: '12.5px', fontWeight: 600, color: '#1B1730', lineHeight: 1.32 }}>{dragTask.title}</div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8, marginTop: 11 }}>
                  <span style={dueChipStyle(dragTask)}>{dragTask.due}</span>
                  <span style={avatarStyle(dragTask.c)}>{dragTask.initials}</span>
                </div>
              </div>
            )}

            {/* floating badge */}
            <div style={{ position: 'absolute', bottom: -18, right: -14, display: 'flex', alignItems: 'center', gap: 10, padding: '11px 15px', borderRadius: 14, background: '#fff', border: '1px solid #EFEDF6', boxShadow: '0 18px 38px -18px rgba(37,22,84,.3)', animation: 'pm-floaty 5.5s ease-in-out infinite' }}>
              <span style={{ width: 32, height: 32, borderRadius: 9, background: '#ECFDF9', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#0E9384" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
              </span>
              <div style={{ lineHeight: 1.25 }}><div style={{ fontSize: '11.5px', fontWeight: 700, color: '#1B1730' }}>{doneLabel}</div><div style={{ fontSize: '9.5px', color: '#8B85A0' }}>Q4 Launch board</div></div>
            </div>
          </div>
          </div>
        </div>
      </section>

      {/* ════════ TRUST BAR ════════ */}
      <StackTrustBar Wrapper={PlainStackWrapper} apps={PM_STACK_APPS} />

      {/* ════════ STATS ROW (4-card bento) ════════ */}
      <section style={{ background: '#F7F7F7', padding: '80px 24px' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 20 }}>
          <div data-pm-reveal="" style={{ background: '#fff', borderRadius: 20, padding: '30px 28px', border: '1px solid #EEEDF3', boxShadow: '0 14px 34px -22px rgba(37,22,84,.22)', display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', gap: 5, height: 46, alignItems: 'stretch' }}>
              <span style={{ flex: 1, borderRadius: 4, background: '#EDE9FE' }} />
              <span style={{ flex: 1, borderRadius: 4, background: '#7C3AED' }} />
              <span style={{ flex: 1, borderRadius: 4, background: '#D9CEF3' }} />
              <span style={{ flex: 1, borderRadius: 4, background: '#F1EDFC' }} />
            </div>
            <div style={{ fontSize: '38px', fontWeight: 700, letterSpacing: '-.02em', color: '#1B1730', marginTop: 16, lineHeight: 1 }}>1<span style={{ fontSize: '20px', fontWeight: 600, marginLeft: 5 }}>board</span></div>
            <p style={{ margin: '8px 0 0', fontSize: '14px', lineHeight: 1.55, color: '#5B5670' }}>Every task, one view — no scattered spreadsheets.</p>
          </div>

          <div data-pm-reveal="" data-pm-reveal-delay="90" style={{ background: '#1B1730', borderRadius: 20, padding: '30px 28px', border: '1px solid #1B1730', boxShadow: '0 20px 44px -24px rgba(27,23,48,.6)', position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
            <div style={{ position: 'absolute', top: -40, right: -30, width: 150, height: 150, background: 'radial-gradient(circle,rgba(20,184,166,.34),transparent 68%)' }} />
            <div style={{ position: 'relative', width: 46, height: 46, borderRadius: 12, background: 'rgba(20,184,166,.18)', border: '1px solid rgba(20,184,166,.42)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="#7DE0D0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><polyline points="12 7 12 12 15.5 14" /></svg>
            </div>
            <div style={{ position: 'relative', fontSize: '30px', fontWeight: 700, letterSpacing: '-.02em', color: '#fff', marginTop: 20 }}>On time</div>
            <p style={{ position: 'relative', margin: '8px 0 0', fontSize: '14px', lineHeight: 1.55, color: '#B7B1C9' }}>See what&apos;s due before it&apos;s overdue.</p>
          </div>

          <div data-pm-reveal="" data-pm-reveal-delay="180" style={{ background: 'linear-gradient(150deg,#7C3AED,#6D28D9)', borderRadius: 20, padding: '30px 28px', border: '1px solid #6D28D9', boxShadow: '0 20px 44px -22px rgba(124,58,237,.6)', position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div style={{ position: 'absolute', bottom: -50, left: -30, width: 160, height: 160, background: 'radial-gradient(circle,rgba(255,255,255,.16),transparent 68%)' }} />
            <div style={{ position: 'relative', fontSize: '56px', fontWeight: 700, letterSpacing: '-.03em', color: '#fff', lineHeight: 1 }}>0<span style={{ fontSize: '26px', fontWeight: 600, marginLeft: 4 }}>min</span></div>
            <p style={{ position: 'relative', margin: '10px 0 0', fontSize: '14px', lineHeight: 1.55, color: 'rgba(255,255,255,.82)' }}>Setup time — no install required.</p>
          </div>

          <div data-pm-reveal="" data-pm-reveal-delay="270" style={{ background: '#fff', borderRadius: 20, padding: '30px 28px', border: '1px solid #EEEDF3', boxShadow: '0 14px 34px -22px rgba(37,22,84,.22)', display: 'flex', flexDirection: 'column' }}>
            <div style={{ position: 'relative', width: 60, height: 50 }}>
              <div style={{ position: 'absolute', left: 6, top: 0, width: 36, height: 30, borderRadius: 8, background: '#FFEFF2', border: '1px solid #FBD5DD', transform: 'rotate(-9deg)' }} />
              <div style={{ position: 'absolute', left: 16, top: 3, width: 36, height: 30, borderRadius: 8, background: '#ECFDF9', border: '1px solid #CDF5EE', transform: 'rotate(8deg)' }} />
              <div style={{ position: 'absolute', left: 11, top: 8, width: 38, height: 32, borderRadius: 8, background: '#fff', border: '1px solid #E4DFF2', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 8px 16px -10px rgba(37,22,84,.34)' }}>
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M9 7v8" /><path d="M15 7v5" /></svg>
              </div>
            </div>
            <div style={{ fontSize: '30px', fontWeight: 700, letterSpacing: '-.02em', color: '#1B1730', marginTop: 18 }}>1 place</div>
            <p style={{ margin: '8px 0 0', fontSize: '14px', lineHeight: 1.55, color: '#5B5670' }}>Projects live alongside Mail, Teams &amp; the rest.</p>
          </div>
        </div>
      </section>

      {/* ════════ 3 STEPS ════════ */}
      <section style={{ background: '#fff', padding: '92px 24px' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div data-pm-reveal="" style={{ textAlign: 'center', maxWidth: 620, margin: '0 auto 52px' }}>
            <h2 className="pm-section-heading" style={{ margin: 0 }}>Get started in 3 easy steps</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 24 }}>
            {/* Step 1 */}
            <div data-pm-reveal="" style={{ background: '#FBFAFE', borderRadius: 20, padding: '32px 30px', border: '1px solid #F0EEF7' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 36, height: 36, borderRadius: 10, background: '#7C3AED', color: '#fff', fontWeight: 700, fontSize: '15px', boxShadow: '0 8px 16px -6px rgba(124,58,237,.5)' }}>1</div>
              <div style={{ marginTop: 22, height: 124, borderRadius: 14, background: '#fff', border: '1px solid #EFEDF6', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 9, overflow: 'hidden', padding: '0 18px' }}>
                <div style={{ flex: 1, height: 76, borderRadius: 9, background: '#FBFAFE', border: '1px solid #EFEDF6', padding: '7px 6px', display: 'flex', flexDirection: 'column', gap: 5 }}><span style={{ height: 5, width: '52%', borderRadius: 3, background: '#E4DFF2' }} /><span style={{ height: 16, borderRadius: 5, background: '#F3F1F9' }} /></div>
                <div style={{ flex: 1, height: 76, borderRadius: 9, background: '#F5F3FF', border: '1.5px solid #7C3AED', padding: '7px 6px', display: 'flex', flexDirection: 'column', gap: 5, boxShadow: '0 10px 20px -12px rgba(124,58,237,.55)' }}><span style={{ height: 5, width: '60%', borderRadius: 3, background: '#C9BEEE' }} /><span style={{ height: 16, borderRadius: 5, background: '#fff', border: '1px solid #E6DEFA' }} /></div>
                <div style={{ flex: 1, height: 76, borderRadius: 9, border: '1.5px dashed #DDD6EE', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C7C2D6" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg></div>
              </div>
              <h3 style={{ fontSize: '19px', fontWeight: 600, margin: '22px 0 0', color: '#1B1730' }}>Create a board</h3>
              <p style={{ margin: '8px 0 0', fontSize: '14.5px', lineHeight: 1.55, color: '#5B5670' }}>Start blank or from a project template.</p>
            </div>

            {/* Step 2 */}
            <div data-pm-reveal="" data-pm-reveal-delay="100" style={{ background: '#FBFAFE', borderRadius: 20, padding: '32px 30px', border: '1px solid #F0EEF7' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 36, height: 36, borderRadius: 10, background: '#7C3AED', color: '#fff', fontWeight: 700, fontSize: '15px', boxShadow: '0 8px 16px -6px rgba(124,58,237,.5)' }}>2</div>
              <div style={{ marginTop: 22, height: 124, borderRadius: 14, background: '#fff', border: '1px solid #EFEDF6', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 10, overflow: 'hidden', padding: '0 20px' }}>
                <div style={{ fontSize: '12.5px', fontWeight: 700, color: '#1B1730' }}>Draft Q4 launch brief</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 7, flexWrap: 'wrap' }}>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5, padding: '4px 9px', borderRadius: 999, background: '#F5F3FF', border: '1px solid #E6DEFA', fontSize: '9.5px', fontWeight: 700, color: '#7C3AED' }}><span style={{ width: 13, height: 13, borderRadius: '50%', background: '#EDE9FE', color: '#7C3AED', fontSize: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700 }}>AR</span>Ade R.</span>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4, padding: '4px 9px', borderRadius: 999, background: '#FBFAFE', border: '1px solid #EDEBF2', fontSize: '9.5px', fontWeight: 600, color: '#8B85A0' }}>
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#8B85A0" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" /><line x1="3" y1="10" x2="21" y2="10" /></svg>12 Oct
                  </span>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4, padding: '4px 9px', borderRadius: 999, background: '#FFEFF2', border: '1px solid #FBD5DD', fontSize: '9.5px', fontWeight: 700, color: '#E11D74' }}><span style={{ width: 5, height: 5, borderRadius: '50%', background: '#E11D74' }} />High</span>
                </div>
              </div>
              <h3 style={{ fontSize: '19px', fontWeight: 600, margin: '22px 0 0', color: '#1B1730' }}>Add tasks</h3>
              <p style={{ margin: '8px 0 0', fontSize: '14.5px', lineHeight: 1.55, color: '#5B5670' }}>Assign owners, due dates, and priority.</p>
            </div>

            {/* Step 3 */}
            <div data-pm-reveal="" data-pm-reveal-delay="200" style={{ background: '#FBFAFE', borderRadius: 20, padding: '32px 30px', border: '1px solid #F0EEF7' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 36, height: 36, borderRadius: 10, background: '#7C3AED', color: '#fff', fontWeight: 700, fontSize: '15px', boxShadow: '0 8px 16px -6px rgba(124,58,237,.5)' }}>3</div>
              <div style={{ marginTop: 22, height: 124, borderRadius: 14, background: '#fff', border: '1px solid #EFEDF6', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, overflow: 'hidden', padding: '0 16px', position: 'relative' }}>
                <div style={{ flex: 1, height: 78, borderRadius: 9, background: '#FBFAFE', border: '1px solid #EFEDF6' }} />
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C7C2D6" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                <div style={{ flex: 1, height: 78, borderRadius: 9, background: '#ECFDF9', border: '1.5px solid #CDF5EE', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ width: 26, height: 26, borderRadius: '50%', background: '#fff', border: '1px solid #CDF5EE', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0E9384" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg></span>
                </div>
                <div style={{ position: 'absolute', left: '30%', top: 26, width: 96, background: '#fff', border: '1.5px solid #7C3AED', borderRadius: 9, padding: '8px 9px', boxShadow: '0 20px 36px -14px rgba(124,58,237,.5)', transform: 'rotate(-6deg)', zIndex: 3 }}>
                  <span style={{ display: 'block', height: 5, width: '82%', borderRadius: 3, background: '#D9CEF3' }} />
                  <span style={{ display: 'block', height: 4, width: '52%', borderRadius: 2, background: '#EFEDF6', marginTop: 6 }} />
                </div>
              </div>
              <h3 style={{ fontSize: '19px', fontWeight: 600, margin: '22px 0 0', color: '#1B1730' }}>Track progress</h3>
              <p style={{ margin: '8px 0 0', fontSize: '14.5px', lineHeight: 1.55, color: '#5B5670' }}>Move tasks across the board as work happens.</p>
            </div>
          </div>
          <div data-pm-reveal="" style={{ textAlign: 'center', marginTop: 40 }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '15px 28px', borderRadius: 999, background: '#7C3AED', color: '#fff', fontWeight: 600, fontSize: '15.5px', cursor: 'pointer', boxShadow: '0 12px 26px -8px rgba(124,58,237,.55)' }}>Start for £2/month
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
            </span>
          </div>
        </div>
      </section>

      {/* ════════ BENTO FEATURE GRID ════════ */}
      <section style={{ background: '#F7F7F7', padding: '92px 24px' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div data-pm-reveal="" style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto 52px' }}>
            <span style={{ fontSize: '11.5px', fontWeight: 600, letterSpacing: '.14em', color: '#7C3AED', textTransform: 'uppercase' }}>Everything a project needs</span>
            <h2 className="pm-section-heading" style={{ margin: '14px 0 0' }}>A board, not a to-do list.</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6,1fr)', gap: 20 }}>

            {/* BIG : Kanban boards */}
            <div data-pm-reveal="" style={{ gridColumn: 'span 4', background: '#fff', borderRadius: 22, padding: 36, border: '1px solid #EEEDF3', boxShadow: '0 20px 44px -28px rgba(37,22,84,.26)', display: 'flex', gap: 32, alignItems: 'center' }}>
              <div style={{ flex: 1, minWidth: 0 }}>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: 7, padding: '5px 12px', borderRadius: 999, background: '#F5F3FF', color: '#7C3AED', fontSize: '11.5px', fontWeight: 600, border: '1px solid #EDE9FE', whiteSpace: 'nowrap' }}>Core</span>
                <h3 style={{ fontSize: '25px', fontWeight: 700, letterSpacing: '-.02em', margin: '18px 0 0', color: '#1B1730' }}>Kanban boards</h3>
                <p style={{ margin: '11px 0 0', fontSize: '15.5px', lineHeight: 1.6, color: '#5B5670' }}>Drag-and-drop tasks across custom stages — shape the board around how your team actually works.</p>
              </div>
              <div style={{ flexShrink: 0, width: 290, background: 'linear-gradient(160deg,#FBFAFE,#F4F1FC)', borderRadius: 16, border: '1px solid #F0EEF7', padding: 16, display: 'flex', gap: 9 }}>
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 7 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}><span style={{ width: 6, height: 6, borderRadius: '50%', background: '#8B85A0' }} /><span style={{ fontSize: '8.5px', fontWeight: 700, color: '#5B5670' }}>To Do</span></div>
                  <div style={{ background: '#fff', border: '1px solid #EFEDF6', borderRadius: 8, padding: 8 }}><span style={{ display: 'block', height: 4, width: '80%', borderRadius: 2, background: '#E4DFF2' }} /><span style={{ display: 'block', height: 4, width: '45%', borderRadius: 2, background: '#F1EFF7', marginTop: 5 }} /></div>
                  <div style={{ background: '#fff', border: '1px solid #EFEDF6', borderRadius: 8, padding: 8 }}><span style={{ display: 'block', height: 4, width: '66%', borderRadius: 2, background: '#E4DFF2' }} /><span style={{ display: 'block', height: 4, width: '40%', borderRadius: 2, background: '#F1EFF7', marginTop: 5 }} /></div>
                </div>
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 7 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}><span style={{ width: 6, height: 6, borderRadius: '50%', background: '#7C3AED' }} /><span style={{ fontSize: '8.5px', fontWeight: 700, color: '#7C3AED' }}>In Progress</span></div>
                  <div style={{ background: '#fff', border: '1.5px solid #7C3AED', borderRadius: 8, padding: 8, boxShadow: '0 12px 22px -10px rgba(124,58,237,.5)', transform: 'rotate(-3deg)' }}><span style={{ display: 'block', height: 4, width: '74%', borderRadius: 2, background: '#D9CEF3' }} /><span style={{ display: 'block', height: 4, width: '48%', borderRadius: 2, background: '#EDE9FE', marginTop: 5 }} /></div>
                </div>
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 7 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}><span style={{ width: 6, height: 6, borderRadius: '50%', background: '#0E9384' }} /><span style={{ fontSize: '8.5px', fontWeight: 700, color: '#0E9384' }}>Done</span></div>
                  <div style={{ background: '#fff', border: '1px solid #EFEDF6', borderRadius: 8, padding: 8 }}><span style={{ display: 'block', height: 4, width: '62%', borderRadius: 2, background: '#CDEDE6' }} /><span style={{ display: 'block', height: 4, width: '42%', borderRadius: 2, background: '#D5F5EF', marginTop: 5 }} /></div>
                </div>
              </div>
            </div>

            {/* Task assignments */}
            <div data-pm-reveal="" data-pm-reveal-delay="100" style={{ gridColumn: 'span 2', background: '#fff', borderRadius: 22, padding: '30px 28px', border: '1px solid #EEEDF3', boxShadow: '0 20px 44px -28px rgba(37,22,84,.26)', display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 9, marginBottom: 20 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 9, padding: '8px 10px', borderRadius: 10, background: '#FBFAFE', border: '1px solid #F0EEF6' }}><span style={{ width: 24, height: 24, borderRadius: '50%', background: '#EDE9FE', color: '#7C3AED', fontSize: '8.5px', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>AR</span><span style={{ height: 5, flex: 1, borderRadius: 3, background: '#E4DFF2' }} /></div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 9, padding: '8px 10px', borderRadius: 10, background: '#FBFAFE', border: '1px solid #F0EEF6' }}><span style={{ width: 24, height: 24, borderRadius: '50%', background: '#D5F5EF', color: '#0E9384', fontSize: '8.5px', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>KM</span><span style={{ height: 5, width: '64%', borderRadius: 3, background: '#E4DFF2' }} /></div>
              </div>
              <h3 style={{ fontSize: '19px', fontWeight: 700, letterSpacing: '-.01em', margin: 0, color: '#1B1730' }}>Task assignments</h3>
              <p style={{ margin: '8px 0 0', fontSize: '14px', lineHeight: 1.55, color: '#5B5670' }}>Clear ownership on every task.</p>
            </div>

            {/* Timeline view */}
            <div data-pm-reveal="" data-pm-reveal-delay="140" style={{ gridColumn: 'span 3', background: '#fff', borderRadius: 22, padding: 30, border: '1px solid #EEEDF3', boxShadow: '0 20px 44px -28px rgba(37,22,84,.26)' }}>
              <h3 style={{ fontSize: '20px', fontWeight: 700, letterSpacing: '-.01em', margin: 0, color: '#1B1730' }}>Timeline view</h3>
              <p style={{ margin: '9px 0 0', fontSize: '14.5px', lineHeight: 1.55, color: '#5B5670' }}>See a project laid out on a calendar or Gantt-style view.</p>
              <div style={{ marginTop: 22, background: '#FBFAFE', border: '1px solid #F0EEF6', borderRadius: 13, padding: '14px 16px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '8.5px', fontWeight: 700, color: '#B4AEC6', letterSpacing: '.04em', marginBottom: 11 }}><span>W40</span><span>W41</span><span>W42</span><span>W43</span></div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  <div style={{ height: 14, borderRadius: 999, background: '#EDE9FE', width: '58%' }} />
                  <div style={{ height: 14, borderRadius: 999, background: '#7C3AED', width: '42%', marginLeft: '22%' }} />
                  <div style={{ height: 14, borderRadius: 999, background: '#CDF5EE', width: '34%', marginLeft: '48%' }} />
                  <div style={{ height: 14, borderRadius: 999, background: '#FDE6C9', width: '26%', marginLeft: '66%' }} />
                </div>
              </div>
            </div>

            {/* Due dates & reminders */}
            <div data-pm-reveal="" data-pm-reveal-delay="200" style={{ gridColumn: 'span 3', background: '#fff', borderRadius: 22, padding: 30, border: '1px solid #EEEDF3', boxShadow: '0 20px 44px -28px rgba(37,22,84,.26)', display: 'flex', alignItems: 'center', gap: 24 }}>
              <div style={{ flex: 1, minWidth: 0 }}>
                <h3 style={{ fontSize: '20px', fontWeight: 700, letterSpacing: '-.01em', margin: 0, color: '#1B1730' }}>Due dates &amp; reminders</h3>
                <p style={{ margin: '9px 0 0', fontSize: '14.5px', lineHeight: 1.55, color: '#5B5670' }}>Never miss a deadline — anything approaching its date nudges you first.</p>
              </div>
              <div style={{ flexShrink: 0, position: 'relative', width: 66, height: 66, borderRadius: 18, background: '#FEF6E7', border: '1px solid #FBEBC6', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#B45309" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" /><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" /></svg>
                <span style={{ position: 'absolute', top: -4, right: -4, width: 20, height: 20, borderRadius: '50%', background: '#E11D74', color: '#fff', fontSize: '10px', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid #fff' }}>3</span>
              </div>
            </div>

            {/* Project templates */}
            <div data-pm-reveal="" data-pm-reveal-delay="240" style={{ gridColumn: 'span 3', background: '#fff', borderRadius: 22, padding: 30, border: '1px solid #EEEDF3', boxShadow: '0 20px 44px -28px rgba(37,22,84,.26)', display: 'flex', alignItems: 'center', gap: 24 }}>
              <div style={{ flex: 1, minWidth: 0 }}>
                <h3 style={{ fontSize: '20px', fontWeight: 700, letterSpacing: '-.01em', margin: 0, color: '#1B1730' }}>Project templates</h3>
                <p style={{ margin: '9px 0 0', fontSize: '14.5px', lineHeight: 1.55, color: '#5B5670' }}>Start from a ready-made structure instead of a blank board.</p>
              </div>
              <div style={{ flexShrink: 0, position: 'relative', width: 88, height: 70 }}>
                <div style={{ position: 'absolute', left: 0, top: 8, width: 60, height: 54, borderRadius: 10, background: '#FBFAFE', border: '1px solid #EFEDF6', transform: 'rotate(-7deg)' }} />
                <div style={{ position: 'absolute', left: 12, top: 4, width: 60, height: 54, borderRadius: 10, background: '#F5F3FF', border: '1px solid #E6DEFA', transform: 'rotate(4deg)' }} />
                <div style={{ position: 'absolute', left: 24, top: 0, width: 60, height: 58, borderRadius: 10, background: '#fff', border: '1px solid #E4DFF2', boxShadow: '0 12px 24px -14px rgba(37,22,84,.4)', padding: '9px 10px', display: 'flex', flexDirection: 'column', gap: 5 }}>
                  <span style={{ height: 4, width: '70%', borderRadius: 2, background: '#D9CEF3' }} />
                  <span style={{ height: 4, width: '90%', borderRadius: 2, background: '#F1EFF7' }} />
                  <span style={{ height: 4, width: '56%', borderRadius: 2, background: '#F1EFF7' }} />
                  <span style={{ height: 4, width: '76%', borderRadius: 2, background: '#F1EFF7' }} />
                </div>
              </div>
            </div>

            {/* Attachments & comments */}
            <div data-pm-reveal="" data-pm-reveal-delay="280" style={{ gridColumn: 'span 3', background: '#fff', borderRadius: 22, padding: 30, border: '1px solid #EEEDF3', boxShadow: '0 20px 44px -28px rgba(37,22,84,.26)', display: 'flex', alignItems: 'center', gap: 24 }}>
              <div style={{ flex: 1, minWidth: 0 }}>
                <h3 style={{ fontSize: '20px', fontWeight: 700, letterSpacing: '-.01em', margin: 0, color: '#1B1730' }}>Attachments &amp; comments</h3>
                <p style={{ margin: '9px 0 0', fontSize: '14.5px', lineHeight: 1.55, color: '#5B5670' }}>Discussion and files live on the task itself.</p>
              </div>
              <div style={{ flexShrink: 0, width: 140, display: 'flex', flexDirection: 'column', gap: 8 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '7px 9px', borderRadius: 9, background: '#FBFAFE', border: '1px solid #F0EEF6' }}><span style={{ width: 20, height: 20, borderRadius: 6, background: '#EDE9FE', color: '#7C3AED', fontSize: '7.5px', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>SP</span><span style={{ height: 4, flex: 1, borderRadius: 2, background: '#E4DFF2' }} /></div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '7px 9px', borderRadius: 9, background: '#fff', border: '1px solid #E4DFF2', boxShadow: '0 8px 16px -12px rgba(37,22,84,.34)' }}><span style={{ width: 20, height: 20, borderRadius: 6, background: '#FFEFF2', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#C0344E" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48" /></svg></span><span style={{ fontSize: '8.5px', fontWeight: 600, color: '#5B5670' }}>brief-v2.pdf</span></div>
              </div>
            </div>
          </div>
          <div data-pm-reveal="" style={{ textAlign: 'center', marginTop: 40 }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '14px 26px', borderRadius: 999, background: '#fff', color: '#2A2440', fontWeight: 600, fontSize: '15px', cursor: 'pointer', border: '1.5px solid #E4DFF2' }}>See How It Works
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
            </span>
          </div>
        </div>
      </section>

      {/* ════════ ALT ROW 1 : See the whole project at a glance ════════ */}
      <section style={{ background: '#fff', padding: '92px 24px' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10" style={{ display: 'grid', gridTemplateColumns: '1.05fr 1fr', gap: 64, alignItems: 'center' }}>
          <div data-pm-reveal="" style={{ position: 'relative' }}>
            <div style={{ position: 'absolute', inset: '18px -8px -16px 14px', background: 'linear-gradient(135deg,rgba(124,58,237,.10),rgba(20,184,166,.10))', borderRadius: 24, filter: 'blur(2px)' }} />
            <div style={{ position: 'relative', background: '#fff', borderRadius: 20, border: '1px solid #ECE9F5', boxShadow: '0 30px 60px -30px rgba(37,22,84,.3)', overflow: 'hidden' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 9, padding: '12px 16px', borderBottom: '1px solid #F0EEF6', background: '#FBFAFE' }}>
                <span style={{ width: 24, height: 24, borderRadius: 7, background: '#F5F3FF', border: '1px solid #E6DEFA', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M9 7v8" /><path d="M15 7v5" /></svg></span>
                <span style={{ fontSize: '12.5px', fontWeight: 700, color: '#1B1730' }}>Website Refresh</span>
                <span style={{ marginLeft: 'auto', display: 'inline-flex', alignItems: 'center', gap: 5, padding: '4px 10px', borderRadius: 999, background: '#fff', border: '1px solid #EBE8F4', fontSize: '9.5px', fontWeight: 600, color: '#8B85A0' }}>
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#8B85A0" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><line x1="4" y1="6" x2="20" y2="6" /><line x1="7" y1="12" x2="17" y2="12" /><line x1="10" y1="18" x2="14" y2="18" /></svg>Filter: Ade R.
                </span>
              </div>
              <div style={{ padding: 18, display: 'flex', gap: 10, alignItems: 'flex-start', position: 'relative' }}>
                <div style={{ flex: 1, background: '#FBFAFE', border: '1px solid #F0EEF6', borderRadius: 11, padding: '9px 8px', display: 'flex', flexDirection: 'column', gap: 8, minHeight: 196 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 5, padding: '0 2px' }}><span style={{ width: 6, height: 6, borderRadius: '50%', background: '#8B85A0' }} /><span style={{ fontSize: '9px', fontWeight: 700, color: '#5B5670' }}>To Do</span></div>
                  <div style={{ background: '#fff', border: '1px solid #EFEDF6', borderRadius: 9, padding: 9 }}><div style={{ fontSize: '10px', fontWeight: 600, color: '#1B1730', lineHeight: 1.3 }}>Update pricing copy</div><div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 7 }}><span style={{ fontSize: '8.5px', fontWeight: 600, color: '#8B85A0' }}>18 Oct</span><span style={{ width: 15, height: 15, borderRadius: '50%', background: '#FDE6C9', color: '#B45309', fontSize: '6.5px', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>SP</span></div></div>
                </div>
                <div style={{ flex: 1, background: '#F3F0FB', border: '1.5px dashed #C9BEEE', borderRadius: 11, padding: '9px 8px', display: 'flex', flexDirection: 'column', gap: 8, minHeight: 196 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 5, padding: '0 2px' }}><span style={{ width: 6, height: 6, borderRadius: '50%', background: '#7C3AED' }} /><span style={{ fontSize: '9px', fontWeight: 700, color: '#7C3AED' }}>In Progress</span></div>
                  <div style={{ height: 52, borderRadius: 9, border: '1.5px dashed #C9BEEE', background: 'rgba(255,255,255,.5)' }} />
                </div>
                <div style={{ flex: 1, background: '#FBFAFE', border: '1px solid #F0EEF6', borderRadius: 11, padding: '9px 8px', display: 'flex', flexDirection: 'column', gap: 8, minHeight: 196 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 5, padding: '0 2px' }}><span style={{ width: 6, height: 6, borderRadius: '50%', background: '#0E9384' }} /><span style={{ fontSize: '9px', fontWeight: 700, color: '#0E9384' }}>Done</span></div>
                  <div style={{ background: '#fff', border: '1px solid #EFEDF6', borderRadius: 9, padding: 9 }}><div style={{ fontSize: '10px', fontWeight: 600, color: '#1B1730', lineHeight: 1.3 }}>Book venue for offsite</div><div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 7 }}><span style={{ fontSize: '8.5px', fontWeight: 600, color: '#0E9384' }}>Done</span><span style={{ width: 15, height: 15, borderRadius: '50%', background: '#D5F5EF', color: '#0E9384', fontSize: '6.5px', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>KM</span></div></div>
                </div>
                {/* card mid-drag (static) */}
                <div style={{ position: 'absolute', left: '36%', top: 78, width: 132, background: '#fff', border: '1.5px solid #7C3AED', borderRadius: 10, padding: '9px 10px', boxShadow: '0 22px 40px -12px rgba(124,58,237,.5)', transform: 'rotate(-5deg)', zIndex: 5 }}>
                  <div style={{ fontSize: '10px', fontWeight: 600, color: '#1B1730', lineHeight: 1.3 }}>Homepage hero mockups</div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 7 }}><span style={{ fontSize: '8.5px', fontWeight: 600, color: '#B45309' }}>11 Oct</span><span style={{ width: 15, height: 15, borderRadius: '50%', background: '#EDE9FE', color: '#7C3AED', fontSize: '6.5px', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>AR</span></div>
                </div>
              </div>
            </div>
          </div>

          <div data-pm-reveal="" data-pm-reveal-delay="120">
            <h2 className="pm-row-heading" style={{ margin: 0 }}>See the whole project at a glance.</h2>
            <p style={{ margin: '18px 0 0', fontSize: '16px', lineHeight: 1.62, color: '#5B5670' }}>One board shows every stage at once — what&apos;s queued, what&apos;s moving, and what&apos;s already shipped.</p>
            <div style={{ marginTop: 30, display: 'flex', flexDirection: 'column', gap: 22 }}>
              <div style={{ display: 'flex', gap: 15 }}>
                <div style={{ flexShrink: 0, width: 38, height: 38, borderRadius: 11, background: '#F5F3FF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 9h14M5 15h14M9 5l-4 4 4 4M15 11l4 4-4 4" /></svg></div>
                <div><div style={{ fontWeight: 600, fontSize: '16.5px', color: '#1B1730' }}>Drag tasks between stages as work progresses.</div><p style={{ margin: '5px 0 0', fontSize: '14.5px', lineHeight: 1.55, color: '#5B5670' }}>Move a card the moment something changes — no forms, no status meetings.</p></div>
              </div>
              <div style={{ display: 'flex', gap: 15 }}>
                <div style={{ flexShrink: 0, width: 38, height: 38, borderRadius: 11, background: '#FEF6E7', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#B45309" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" /></svg></div>
                <div><div style={{ fontWeight: 600, fontSize: '16.5px', color: '#1B1730' }}>Filter the board by owner, due date, or priority.</div><p style={{ margin: '5px 0 0', fontSize: '14.5px', lineHeight: 1.55, color: '#5B5670' }}>Narrow it down to just the work that&apos;s yours this week.</p></div>
              </div>
              <div style={{ display: 'flex', gap: 15 }}>
                <div style={{ flexShrink: 0, width: 38, height: 38, borderRadius: 11, background: '#ECFDF9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#0E9384" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" /><line x1="3" y1="10" x2="21" y2="10" /><line x1="8" y1="14" x2="16" y2="14" /></svg></div>
                <div><div style={{ fontWeight: 600, fontSize: '16.5px', color: '#1B1730' }}>Switch between board and timeline view.</div><p style={{ margin: '5px 0 0', fontSize: '14.5px', lineHeight: 1.55, color: '#5B5670' }}>Same project, two shapes — without losing your place.</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════ ALT ROW 2 : Nothing falls through the cracks ════════ */}
      <section style={{ background: '#F7F7F7', padding: '92px 24px' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10" style={{ display: 'grid', gridTemplateColumns: '1fr 1.05fr', gap: 64, alignItems: 'center' }}>
          <div data-pm-reveal="">
            <h2 className="pm-row-heading" style={{ margin: 0 }}>Nothing falls through the cracks.</h2>
            <p style={{ margin: '18px 0 0', fontSize: '16px', lineHeight: 1.62, color: '#5B5670' }}>Every task carries its own owner, deadline, conversation, and files — so the context never lives in someone&apos;s inbox.</p>
            <div style={{ marginTop: 30, display: 'flex', flexDirection: 'column', gap: 22 }}>
              <div style={{ display: 'flex', gap: 15 }}>
                <div style={{ flexShrink: 0, width: 38, height: 38, borderRadius: 11, background: '#F5F3FF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /></svg></div>
                <div><div style={{ fontWeight: 600, fontSize: '16.5px', color: '#1B1730' }}>Every task has a clear owner and due date.</div><p style={{ margin: '5px 0 0', fontSize: '14.5px', lineHeight: 1.55, color: '#5B5670' }}>No more &quot;who&apos;s picking this up?&quot; in a group chat.</p></div>
              </div>
              <div style={{ display: 'flex', gap: 15 }}>
                <div style={{ flexShrink: 0, width: 38, height: 38, borderRadius: 11, background: '#ECFDF9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#0E9384" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg></div>
                <div><div style={{ fontWeight: 600, fontSize: '16.5px', color: '#1B1730' }}>Comments and files stay attached to the task.</div><p style={{ margin: '5px 0 0', fontSize: '14.5px', lineHeight: 1.55, color: '#5B5670' }}>Not scattered across email threads and shared folders.</p></div>
              </div>
              <div style={{ display: 'flex', gap: 15 }}>
                <div style={{ flexShrink: 0, width: 38, height: 38, borderRadius: 11, background: '#FEF6E7', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#B45309" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" /><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" /></svg></div>
                <div><div style={{ fontWeight: 600, fontSize: '16.5px', color: '#1B1730' }}>Automatic reminders before a deadline lands.</div><p style={{ margin: '5px 0 0', fontSize: '14.5px', lineHeight: 1.55, color: '#5B5670' }}>Anything approaching its due date gets flagged for you.</p></div>
              </div>
            </div>
          </div>

          <div data-pm-reveal="" data-pm-reveal-delay="120" style={{ position: 'relative' }}>
            <div style={{ position: 'absolute', inset: '18px 14px -16px -8px', background: 'linear-gradient(135deg,rgba(124,58,237,.12),rgba(20,184,166,.10))', borderRadius: 24, filter: 'blur(2px)' }} />
            <div style={{ position: 'relative', background: '#fff', borderRadius: 20, border: '1px solid #ECE9F5', boxShadow: '0 30px 60px -30px rgba(37,22,84,.3)', overflow: 'hidden' }}>
              {/* task detail header */}
              <div style={{ padding: '18px 20px', borderBottom: '1px solid #F0EEF6' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5, padding: '4px 10px', borderRadius: 999, background: '#F5F3FF', border: '1px solid #E6DEFA', fontSize: '10px', fontWeight: 700, color: '#7C3AED' }}><span style={{ width: 5, height: 5, borderRadius: '50%', background: '#7C3AED' }} />In Progress</span>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5, padding: '4px 10px', borderRadius: 999, background: '#FFEFF2', border: '1px solid #FBD5DD', fontSize: '10px', fontWeight: 700, color: '#E11D74' }}><span style={{ width: 5, height: 5, borderRadius: '50%', background: '#E11D74' }} />High</span>
                  <span style={{ marginLeft: 'auto', fontSize: '10.5px', color: '#B4AEC6', fontWeight: 500 }}>Website Refresh</span>
                </div>
                <div style={{ fontSize: '17px', fontWeight: 700, color: '#1B1730', marginTop: 13, letterSpacing: '-.01em' }}>Homepage hero mockups</div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 18, marginTop: 15 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}><span style={{ fontSize: '10px', fontWeight: 600, letterSpacing: '.08em', textTransform: 'uppercase', color: '#B4AEC6' }}>Assignee</span><span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}><span style={{ width: 20, height: 20, borderRadius: '50%', background: '#EDE9FE', color: '#7C3AED', fontSize: '7.5px', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>AR</span><span style={{ fontSize: '12.5px', fontWeight: 600, color: '#211C36' }}>Ade R.</span></span></div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}><span style={{ fontSize: '10px', fontWeight: 600, letterSpacing: '.08em', textTransform: 'uppercase', color: '#B4AEC6' }}>Due</span><span style={{ display: 'inline-flex', alignItems: 'center', gap: 5, padding: '3px 9px', borderRadius: 999, background: '#FEF6E7', border: '1px solid #FBEBC6', fontSize: '11px', fontWeight: 700, color: '#B45309' }}><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#B45309" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" /><line x1="3" y1="10" x2="21" y2="10" /></svg>11 Oct · in 2 days</span></div>
                </div>
              </div>

              {/* attachment */}
              <div style={{ padding: '16px 20px', borderBottom: '1px solid #F0EEF6' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 11, padding: '11px 13px', borderRadius: 12, background: '#FBFAFE', border: '1px solid #F0EEF6' }}>
                  <span style={{ width: 34, height: 34, borderRadius: 9, background: '#fff', border: '1px solid #E4DFF2', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C0344E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /></svg></span>
                  <div style={{ minWidth: 0, flex: 1 }}><div style={{ fontSize: '12.5px', fontWeight: 600, color: '#1B1730' }}>hero-mockups-v2.pdf</div><div style={{ fontSize: '10.5px', color: '#8B85A0' }}>2.4 MB · from Work Drive</div></div>
                  <span style={{ fontSize: '10.5px', fontWeight: 600, color: '#7C3AED', whiteSpace: 'nowrap' }}>Open</span>
                </div>
              </div>
              {/* comments */}
              <div style={{ padding: '16px 20px 20px', display: 'flex', flexDirection: 'column', gap: 14 }}>
                <span style={{ fontSize: '10px', fontWeight: 600, letterSpacing: '.08em', textTransform: 'uppercase', color: '#B4AEC6' }}>Comments</span>
                <div style={{ display: 'flex', gap: 11 }}>
                  <span style={{ width: 28, height: 28, borderRadius: '50%', background: '#D5F5EF', color: '#0E9384', fontSize: '9px', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>KM</span>
                  <div style={{ flex: 1, background: '#FBFAFE', border: '1px solid #F0EEF6', borderRadius: 12, padding: '10px 13px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10 }}><span style={{ fontSize: '12px', fontWeight: 600, color: '#1B1730' }}>Kira M.</span><span style={{ fontSize: '10px', color: '#B4AEC6' }}>2h ago</span></div>
                    <p style={{ margin: '4px 0 0', fontSize: '12px', lineHeight: 1.5, color: '#5B5670' }}>Second version looks right — happy to move this to Review.</p>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: 11 }}>
                  <span style={{ width: 28, height: 28, borderRadius: '50%', background: '#EDE9FE', color: '#7C3AED', fontSize: '9px', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>AR</span>
                  <div style={{ flex: 1, background: '#FBFAFE', border: '1px solid #F0EEF6', borderRadius: 12, padding: '10px 13px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10 }}><span style={{ fontSize: '12px', fontWeight: 600, color: '#1B1730' }}>Ade R.</span><span style={{ fontSize: '10px', color: '#B4AEC6' }}>Yesterday</span></div>
                    <p style={{ margin: '4px 0 0', fontSize: '12px', lineHeight: 1.5, color: '#5B5670' }}>Attached the updated file — copy still needs a pass.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════ TESTIMONIALS ════════ */}
      <section style={{ background: '#fff', padding: '92px 24px' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div data-pm-reveal="" style={{ textAlign: 'center', maxWidth: 600, margin: '0 auto 48px' }}>
            <span style={{ fontSize: '11.5px', fontWeight: 600, letterSpacing: '.14em', color: '#7C3AED', textTransform: 'uppercase' }}>What teams say</span>
            <h2 className="pm-band-heading" style={{ margin: '12px 0 0' }}>A board the whole team actually checks.</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 22 }}>
            {[
              { quote: '\u201CWe went from three different spreadsheets to one board everyone actually checks.\u201D', bg: '#EDE9FE', color: '#7C3AED' },
              { quote: '\u201CBeing able to see the whole project timeline instead of just a task list changed how we plan.\u201D', bg: '#D5F5EF', color: '#0E9384' },
              { quote: '\u201CNobody asks \u2018who owns this\u2019 anymore \u2014 it\u2019s right there on the card.\u201D', bg: '#FDE6C9', color: '#B45309' },
            ].map((item, i) => (
              <div key={i} data-pm-reveal="" data-pm-reveal-delay={i * 100} style={{ position: 'relative', background: '#FBFAFE', border: '1px solid #ECE7F7', borderRadius: 20, padding: '30px 28px', boxShadow: '0 18px 40px -30px rgba(124,58,237,.28)' }}>
                <svg width="30" height="30" viewBox="0 0 24 24" fill="#E4DBF7"><path d="M9.5 4C6 4 3 7 3 11v9h8v-9H6.5c0-2 1.5-3.5 3-3.5V4Zm11 0c-3.5 0-6.5 3-6.5 7v9H22v-9h-4.5c0-2 1.5-3.5 3-3.5V4Z" /></svg>
                <p style={{ fontSize: '16px', lineHeight: 1.55, fontWeight: 500, color: '#211C36', margin: '16px 0 0' }}>{item.quote}</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginTop: 24 }}>
                  <div style={{ width: 42, height: 42, borderRadius: '50%', background: item.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 600, color: item.color, fontSize: '14px' }}>—</div>
                  <div><div style={{ fontWeight: 600, fontSize: '14.5px', color: '#1B1730' }}>Placeholder</div><div style={{ fontSize: '13px', color: '#8B85A0' }}>Role TBC</div></div>
                </div>
                <span style={{ position: 'absolute', bottom: 12, right: 14, fontSize: '9px', fontWeight: 600, letterSpacing: '.06em', color: '#C4BDD6', textTransform: 'uppercase' }}>TODO · real quote</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════ FAQ ════════ */}
      <section style={{ background: '#F7F7F7', padding: '92px 24px' }}>
        <div style={{ maxWidth: 820, margin: '0 auto' }}>
          <div data-pm-reveal="" style={{ textAlign: 'center', marginBottom: 44 }}>
            <span style={{ fontSize: '11.5px', fontWeight: 600, letterSpacing: '.14em', color: '#7C3AED', textTransform: 'uppercase' }}>Questions</span>
            <h2 className="pm-band-heading" style={{ margin: '12px 0 0' }}>Project Management, answered.</h2>
          </div>
          <div data-pm-reveal="" style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {FAQS.map((f, i) => (
              <FaqItem key={i} q={f.q} a={f.a} open={faqOpen === i} toggle={() => setFaqOpen(faqOpen === i ? -1 : i)} />
            ))}
          </div>
        </div>
      </section>

      {/* ════════ FINAL CTA ════════ */}
      <HomeFinalCTA />

    </div>
  );
}
