'use client';

import { useEffect, useRef, useState, type CSSProperties } from 'react';
import { CrmRevealSection } from './CrmRevealSection';
import { Price } from '@/components/currency/Price';

type Stage = 'new' | 'contacted' | 'proposal' | 'won';

interface Deal {
  id: string;
  company: string;
  value: string;
  initials: string;
  c: string;
  stage: Stage;
}

interface DragState {
  id: string;
  origin: Stage;
  startX: number;
  startY: number;
  moved: boolean;
  over: Stage | null;
}

const INITIAL_DEALS: Deal[] = [
  { id: 'd1', company: 'Northwind Traders', value: '£4,200', initials: 'JD', c: '#7C3AED', stage: 'new' },
  { id: 'd2', company: 'Loop & Co', value: '£2,800', initials: 'SP', c: '#0E9384', stage: 'new' },
  { id: 'd3', company: 'Meridian Labs', value: '£9,500', initials: 'AR', c: '#B45309', stage: 'contacted' },
  { id: 'd4', company: 'Harbor & Main', value: '£3,100', initials: 'KM', c: '#E11D74', stage: 'contacted' },
  { id: 'd5', company: 'Vertex Group', value: '£18,000', initials: 'TB', c: '#7C3AED', stage: 'proposal' },
  { id: 'd6', company: 'Blue Sky Media', value: '£6,400', initials: 'RM', c: '#0E9384', stage: 'won' },
];

const STAGE_ORDER: Stage[] = ['new', 'contacted', 'proposal', 'won'];
const SAMPLE_ID = 'd1';

const AVATAR_TINTS: Record<string, string> = {
  '#7C3AED': '#EDE9FE',
  '#0E9384': '#D5F5EF',
  '#B45309': '#FDE6C9',
  '#E11D74': '#FEE2EC',
};

const STAGE_META: Record<Stage, { label: string; color: string }> = {
  new: { label: 'New', color: '#7C3AED' },
  contacted: { label: 'Contacted', color: '#B45309' },
  proposal: { label: 'Proposal', color: '#E11D74' },
  won: { label: 'Won', color: '#0E9384' },
};

function avatarStyle(c: string): CSSProperties {
  return {
    flexShrink: 0,
    width: '17px',
    height: '17px',
    borderRadius: '50%',
    fontSize: '7px',
    fontWeight: 700,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: AVATAR_TINTS[c] || '#EDE9FE',
    color: c,
  };
}

// Draggable sales pipeline board, ported 1:1 from the standalone bundle's
// Component class (startDrag/onDragMove/onDragUp). Uses native Pointer
// Events — same mechanism the bundle used — which natively covers mouse,
// touch, and pen without a separate library; touch-action:none on the
// cards (below) stops the browser intercepting the gesture as a page
// scroll. Ghost position + column highlight are applied via direct DOM
// mutation during the drag (not React state) to match the original's
// per-frame performance characteristics; only drag start/end go through
// setState. Reduced-motion doesn't disable dragging itself (it isn't
// CSS-animation-driven) — it only strips the floaty/nudge/pulse keyframe
// animations via the .crm-page prefers-reduced-motion rule in globals.css,
// same as the bundle's own global reduced-motion override.
export function CrmHero() {
  const [deals, setDeals] = useState<Deal[]>(INITIAL_DEALS);
  const [draggingId, setDraggingId] = useState<string | null>(null);
  const [pulseKey, setPulseKey] = useState(0);

  const boardRef = useRef<HTMLDivElement>(null);
  const ghostRef = useRef<HTMLDivElement>(null);
  const dragRef = useRef<DragState | null>(null);

  function positionGhost(x: number, y: number) {
    const g = ghostRef.current;
    if (g) {
      g.style.left = `${x - 66}px`;
      g.style.top = `${y - 22}px`;
    }
  }

  function setColumnHighlight(over: Stage | null, origin: Stage) {
    boardRef.current?.querySelectorAll<HTMLElement>('[data-col-stage]').forEach((el) => {
      const stage = el.getAttribute('data-col-stage');
      el.style.background = stage === over && over !== origin ? '#F3F0FB' : '';
    });
  }

  useEffect(() => {
    function onDragMove(ev: PointerEvent) {
      const d = dragRef.current;
      if (!d) return;
      ev.preventDefault();
      if (Math.hypot(ev.clientX - d.startX, ev.clientY - d.startY) > 6) d.moved = true;
      positionGhost(ev.clientX, ev.clientY);
      let over: Stage | null = null;
      boardRef.current?.querySelectorAll<HTMLElement>('[data-col-stage]').forEach((el) => {
        const r = el.getBoundingClientRect();
        if (ev.clientX >= r.left && ev.clientX <= r.right && ev.clientY >= r.top && ev.clientY <= r.bottom) {
          over = el.getAttribute('data-col-stage') as Stage;
        }
      });
      d.over = over;
      setColumnHighlight(over, d.origin);
    }

    function onDragUp() {
      const d = dragRef.current;
      dragRef.current = null;
      document.body.style.userSelect = '';
      if (d) setColumnHighlight(null, d.origin);
      if (!d) {
        setDraggingId(null);
        return;
      }
      let target: Stage = d.origin;
      if (d.over && d.over !== d.origin) target = d.over;
      else if (!d.moved) target = STAGE_ORDER[Math.min(STAGE_ORDER.indexOf(d.origin) + 1, STAGE_ORDER.length - 1)];
      const changed = target !== d.origin;
      setDeals((prev) => prev.map((dl) => (dl.id === d.id ? { ...dl, stage: target } : dl)));
      setDraggingId(null);
      if (changed) setPulseKey((k) => k + 1);
    }

    document.addEventListener('pointermove', onDragMove, { passive: false });
    document.addEventListener('pointerup', onDragUp);
    document.addEventListener('pointercancel', onDragUp);
    return () => {
      document.removeEventListener('pointermove', onDragMove);
      document.removeEventListener('pointerup', onDragUp);
      document.removeEventListener('pointercancel', onDragUp);
    };
  }, []);

  function startDrag(id: string, e: React.PointerEvent) {
    if (e.button !== 0) return;
    e.preventDefault();
    const deal = deals.find((dl) => dl.id === id);
    if (!deal) return;
    dragRef.current = { id, origin: deal.stage, startX: e.clientX, startY: e.clientY, moved: false, over: null };
    document.body.style.userSelect = 'none';
    setDraggingId(id);
    positionGhost(e.clientX, e.clientY);
  }

  const dragDeal = draggingId ? deals.find((d) => d.id === draggingId) ?? null : null;
  const dealsByStage = (stage: Stage) => deals.filter((d) => d.stage === stage);

  return (
    <section style={{ background: 'linear-gradient(180deg,#FBFAFF 0%,#fff 70%)', paddingTop: '74px', paddingBottom: '104px', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: '-120px', right: '-60px', width: '560px', height: '560px', background: 'radial-gradient(circle,rgba(124,58,237,.10),transparent 66%)', pointerEvents: 'none' }}></div>
      <div style={{ position: 'absolute', bottom: '-160px', left: '-100px', width: '420px', height: '420px', background: 'radial-gradient(circle,rgba(20,184,166,.09),transparent 68%)', pointerEvents: 'none' }}></div>
      <CrmRevealSection className="max-w-7xl mx-auto px-6 lg:px-10" style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0,1.12fr)', gap: '56px', alignItems: 'center', position: 'relative' }}>
        <div data-crm-reveal="">
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '7px 14px', borderRadius: '999px', background: '#F5F3FF', color: '#7C3AED', fontWeight: 600, fontSize: '12px', letterSpacing: '.09em', textTransform: 'uppercase', border: '1px solid #EDE9FE', whiteSpace: 'nowrap' }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#7C3AED' }}></span>Grow Revenue · CRM
          </span>
          <h1 className="crm-hero-heading" style={{ margin: '22px 0 0', color: '#1B1730' }}>
            Know every deal.<br />
            <span style={{ color: '#7C3AED' }}>See what&apos;s next.</span>
          </h1>
          <p className="crm-lede" style={{ color: '#5B5670', margin: '22px 0 0', maxWidth: '508px' }}>Contacts, pipeline, and reporting — without the enterprise setup. Every deal, every conversation, and every next step in one view, synced with the rest of the Stack.</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '13px', marginTop: '32px' }}>
            <a href="#" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '15px 28px', borderRadius: '999px', background: '#7C3AED', color: '#fff', fontWeight: 600, fontSize: '15.5px', cursor: 'pointer', boxShadow: '0 12px 26px -8px rgba(124,58,237,.6)' }}>Start for <Price amount={2} />/month</a>
            <a href="#" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '15px 26px', borderRadius: '999px', background: '#fff', color: '#2A2440', fontWeight: 600, fontSize: '15.5px', cursor: 'pointer', border: '1.5px solid #E4DFF2' }}>See how it works
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
            </a>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '9px', marginTop: '26px', fontSize: '13.5px', color: '#8B85A0', fontWeight: 500 }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#14B8A6" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"></path></svg>
            GDPR compliant · No credit card required
          </div>
        </div>

        {/* HERO VISUAL: interactive draggable pipeline */}
        <div data-crm-reveal="" data-crm-reveal-delay="140" style={{ position: 'relative' }}>
          <div style={{ position: 'relative' }}>
            <div style={{ background: '#fff', borderRadius: '20px', border: '1px solid #ECE9F5', overflow: 'hidden', boxShadow: '0 34px 70px -34px rgba(37,22,84,.34)' }}>
              {/* top bar */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '13px 18px', borderBottom: '1px solid #F0EEF6', background: '#FBFAFE' }}>
                <span style={{ width: '28px', height: '28px', borderRadius: '8px', background: '#F5F3FF', border: '1px solid #E6DEFA', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="6" x2="7" y2="6"></line><line x1="3" y1="12" x2="7" y2="12"></line><line x1="3" y1="18" x2="7" y2="18"></line><rect x="10" y="4" width="11" height="4" rx="1"></rect><rect x="10" y="10" width="11" height="4" rx="1"></rect><rect x="10" y="16" width="7" height="4" rx="1"></rect></svg>
                </span>
                <span style={{ fontSize: '14px', fontWeight: 700, color: '#1B1730', letterSpacing: '-.01em' }}>Sales pipeline</span>
                <span style={{ marginLeft: 'auto', display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '11px', fontWeight: 600, color: '#0E9384' }}>
                  <span
                    key={pulseKey}
                    style={{
                      width: '8px',
                      height: '8px',
                      borderRadius: '50%',
                      background: '#14B8A6',
                      animation: pulseKey === 0 ? 'crm-live-pulse 2.6s ease-out infinite' : 'crm-saved-pop .6s ease-out, crm-live-pulse 2.6s ease-out infinite',
                    }}
                  ></span>Updated
                </span>
              </div>

              {/* board */}
              <div ref={boardRef} style={{ padding: '14px', background: '#FBFAFE' }}>
                <div style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                  {STAGE_ORDER.map((stage) => {
                    const meta = STAGE_META[stage];
                    const stageDeals = dealsByStage(stage);
                    return (
                      <div
                        key={stage}
                        data-col-stage={stage}
                        style={{ flex: 1, minWidth: 0, background: '#FBFAFE', border: '1px solid #F0EEF6', borderRadius: '12px', padding: '9px 8px', display: 'flex', flexDirection: 'column', gap: '8px', minHeight: '224px', transition: 'background .15s' }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '5px', padding: '0 2px 2px' }}>
                          <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: meta.color }}></span>
                          <span style={{ fontSize: '9.5px', fontWeight: 700, color: meta.color, letterSpacing: '.02em' }}>{meta.label}</span>
                          <span style={{ marginLeft: 'auto', fontSize: '9px', fontWeight: 700, color: '#B4AEC6' }}>{stageDeals.length}</span>
                        </div>
                        {stageDeals.map((d) => {
                          const dragging = draggingId === d.id;
                          const nudge = d.id === SAMPLE_ID && !draggingId;
                          return (
                            <div
                              key={d.id}
                              onPointerDown={(e) => startDrag(d.id, e)}
                              style={{
                                background: '#fff',
                                border: '1px solid #ECE9F5',
                                borderRadius: '9px',
                                padding: '8px 9px',
                                cursor: 'grab',
                                touchAction: 'none',
                                boxShadow: '0 6px 14px -10px rgba(37,22,84,.4)',
                                transition: 'opacity .15s, box-shadow .15s',
                                opacity: dragging ? 0.35 : 1,
                                animation: nudge ? 'crm-nudge 3.2s ease-in-out 1.2s 2' : undefined,
                              }}
                            >
                              <div style={{ fontSize: '10.5px', fontWeight: 600, color: '#1B1730', lineHeight: 1.25 }}>{d.company}</div>
                              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '7px' }}>
                                <span style={{ fontSize: '10.5px', fontWeight: 700, color: '#211C36' }}>{d.value}</span>
                                <span style={avatarStyle(d.c)}>{d.initials}</span>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* drag ghost */}
            {dragDeal && (
              <div ref={ghostRef} style={{ position: 'fixed', left: 0, top: 0, zIndex: 9999, pointerEvents: 'none', width: '132px', padding: '9px 11px', borderRadius: '11px', background: '#fff', border: '1px solid #E4DFF2', boxShadow: '0 22px 40px -12px rgba(37,22,84,.5)', transform: 'rotate(-4deg)' }}>
                <div style={{ fontSize: '10.5px', fontWeight: 600, color: '#1B1730', lineHeight: 1.25 }}>{dragDeal.company}</div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '7px' }}>
                  <span style={{ fontSize: '10.5px', fontWeight: 700, color: '#211C36' }}>{dragDeal.value}</span>
                  <span style={avatarStyle(dragDeal.c)}>{dragDeal.initials}</span>
                </div>
              </div>
            )}

            {/* floating badge */}
            <div style={{ position: 'absolute', bottom: '-16px', left: '-18px', display: 'flex', alignItems: 'center', gap: '9px', padding: '10px 14px', borderRadius: '14px', background: '#fff', border: '1px solid #EFEDF6', boxShadow: '0 18px 38px -18px rgba(37,22,84,.3)', animation: 'crm-floaty 5.5s ease-in-out infinite' }}>
              <span style={{ width: '30px', height: '30px', borderRadius: '9px', background: '#ECFDF9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0E9384" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"></path><path d="m19 9-5 5-4-4-3 3"></path></svg></span>
              <div style={{ lineHeight: 1.2 }}><div style={{ fontSize: '11px', fontWeight: 700, color: '#1B1730' }}>Pipeline value</div><div style={{ fontSize: '9px', color: '#8B85A0' }}>£44,000 across 6 deals</div></div>
            </div>
          </div>
          <div style={{ marginTop: '24px', textAlign: 'center', fontSize: '11px', color: '#B4AEC6', fontWeight: 500 }}>Drag a deal to another stage — or tap a card to advance it</div>
        </div>
      </CrmRevealSection>
    </section>
  );
}
