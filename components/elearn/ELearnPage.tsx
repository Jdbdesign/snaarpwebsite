'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { ElearnRevealSection } from './ElearnRevealSection';
import { HomeFinalCTA } from '@/components/HomeFinalCTA';
import { StackTrustBar, PlainStackWrapper } from '@/components/sections/StackTrustBar';

/* ───── Data ───── */
const CHECKLIST = [
  { id: 'c1', label: 'Welcome & company handbook', meta: 'Lesson · 8 min', tag: 'Lesson' as const },
  { id: 'c2', label: 'Data Security 101', meta: 'Course + quiz · 20 min', tag: 'Compliance' as const },
  { id: 'c3', label: 'Meet your team', meta: 'Checklist item', tag: 'Task' as const },
  { id: 'c4', label: 'Set up your workspace apps', meta: 'Checklist item', tag: 'Task' as const },
];

const FAQS = [
  { q: 'Can I build my own training courses?', a: 'Yes — the course builder supports lessons, quizzes, and videos, built from scratch or a template.' },
  { q: 'Does ELearn track onboarding as well as training courses?', a: 'Yes — onboarding checklists and course completion are both tracked in the same dashboard.' },
  { q: "Will I know if someone's compliance training is overdue?", a: 'Yes — the compliance dashboard flags overdue items and sends automatic reminders.' },
  { q: 'Is ELearn included in the £2 Starter plan?', a: 'Yes — included in every plan, no add-on required.' },
  { q: 'Do people get a certificate when they finish a course?', a: 'Yes — certificates generate automatically on completion.' },
];

const ELEARN_APPS = [
  { iconSrc: '/assets/icons/search.jpg', name: 'Contacts' },
  { iconSrc: '/assets/icons/chat-bubbles.jpg', name: 'Teams' },
  { iconSrc: '/assets/icons/envelope.jpg', name: 'Mail' },
  { iconSrc: '/assets/icons/cube.jpg', name: 'Work Drive' },
];

const TEAM_SIZE = 12;
const OTHERS_DONE = 8;

const TAG_TINTS: Record<string, { bg: string; bd: string; fg: string }> = {
  Compliance: { bg: '#FEF6E7', bd: '#FBEBC6', fg: '#B45309' },
  Lesson: { bg: '#F5F3FF', bd: '#E6DEFA', fg: '#7C3AED' },
  Task: { bg: '#FBFAFE', bd: '#EDEBF2', fg: '#8B85A0' },
};

/* ───── Hero Checklist Hook ───── */
function useHeroChecklist() {
  const [done, setDone] = useState<Record<string, boolean>>({ c1: true });
  const [justToggled, setJustToggled] = useState<string | null>(null);
  const reducedMotion = useRef(false);
  const savedDotRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    reducedMotion.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reducedMotion.current) setDone({ c1: true, c2: true });
  }, []);

  const toggle = useCallback((id: string) => {
    setDone((prev) => {
      const next = { ...prev };
      if (next[id]) delete next[id]; else next[id] = true;
      return next;
    });
    setJustToggled(id);
    // pulse saved dot
    const dot = savedDotRef.current;
    if (dot && !reducedMotion.current) {
      dot.style.animation = 'none';
      void dot.offsetWidth;
      dot.style.animation = 'elearn-savedPop .55s ease-out, elearn-livePulse 2.4s ease-out infinite';
    }
    setTimeout(() => setJustToggled(null), 520);
  }, []);

  const doneCount = CHECKLIST.filter((it) => done[it.id]).length;
  const total = CHECKLIST.length;
  const pct = Math.round((doneCount / total) * 100);
  const teamPct = Math.round(((OTHERS_DONE + doneCount / total) / TEAM_SIZE) * 100);
  const allDone = doneCount === total;
  const circumference = 163.4;

  return { done, justToggled, toggle, doneCount, total, pct, teamPct, allDone, circumference, savedDotRef, reducedMotion };
}

/* ───── FAQ Hook ───── */
function useFaq() {
  const [openIdx, setOpenIdx] = useState(-1);
  const toggle = useCallback((i: number) => setOpenIdx((prev) => (prev === i ? -1 : i)), []);
  return { openIdx, toggle };
}

/* ───── Main Component ───── */
export function ELearnPage() {
  const pageRef = useRef<HTMLDivElement>(null);
  const hero = useHeroChecklist();
  const faq = useFaq();

  return (
    <div ref={pageRef} style={{ minWidth: 0, overflowX: 'hidden', background: '#fff', lineHeight: 1.5 }}>
      {/* ═══ HERO ═══ */}
      <section style={{ background: 'linear-gradient(180deg,#FBFAFF 0%,#fff 76%)', padding: '74px 24px 104px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-190px', left: '8%', width: '820px', height: '520px', background: 'radial-gradient(ellipse at center,rgba(124,58,237,.12),transparent 66%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', top: '210px', right: '-160px', width: '460px', height: '460px', background: 'radial-gradient(circle,rgba(20,184,166,.09),transparent 68%)', pointerEvents: 'none' }} />

        <div className="max-w-7xl mx-auto px-6 lg:px-10" style={{ position: 'relative', display: 'grid', gridTemplateColumns: 'minmax(0,.92fr) minmax(0,1.04fr)', gap: '60px', alignItems: 'center' }}>
          {/* Left copy */}
          <ElearnRevealSection reveal>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '7px 14px', borderRadius: '999px', background: '#F5F3FF', color: '#7C3AED', fontWeight: 600, fontSize: '12px', letterSpacing: '.09em', textTransform: 'uppercase', border: '1px solid #EDE9FE', whiteSpace: 'nowrap' }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#7C3AED' }} />
              Run the Business · ELearn
            </span>
            <h1 className="elearn-hero-heading" style={{ margin: '22px 0 0', color: '#1B1730' }}>
              Train your team.<br /><span style={{ color: '#7C3AED' }}>Track it as it happens.</span>
            </h1>
            <p style={{ fontSize: '18px', lineHeight: 1.62, color: '#5B5670', margin: '22px 0 0', maxWidth: '490px' }}>
              Build training courses, run onboarding checklists, and keep compliance on track — all in one place. See exactly who&apos;s completed what, without chasing spreadsheets.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '13px', marginTop: '30px' }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '15px 28px', borderRadius: '999px', background: '#7C3AED', color: '#fff', fontWeight: 600, fontSize: '15.5px', cursor: 'pointer', boxShadow: '0 12px 26px -8px rgba(124,58,237,.6)' }}>Start for £2/month</span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '15px 26px', borderRadius: '999px', background: '#fff', color: '#2A2440', fontWeight: 600, fontSize: '15.5px', cursor: 'pointer', border: '1.5px solid #E4DFF2' }}>
                See how it works
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
              </span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '9px', marginTop: '22px', fontSize: '13.5px', color: '#8B85A0', fontWeight: 500 }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#14B8A6" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
              GDPR compliant · No credit card required
            </div>
          </ElearnRevealSection>

          {/* Right — LIVE COURSE CARD */}
          <ElearnRevealSection reveal revealDelay={110} style={{ position: 'relative', paddingBottom: '96px' }}>
            <div style={{ background: '#fff', borderRadius: '22px', border: '1px solid #ECE9F5', overflow: 'hidden', boxShadow: '0 1px 3px -1px rgba(37,22,84,.08),0 24px 48px -20px rgba(37,22,84,.18)' }}>
              {/* course chrome */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '13px', padding: '16px 20px', borderBottom: '1px solid #F0EEF6', background: '#FBFAFE' }}>
                <span style={{ width: '34px', height: '34px', borderRadius: '10px', background: '#F5F3FF', border: '1px solid #E6DEFA', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10 12 5 2 10l10 5 10-5Z" /><path d="M6 12.5V17c0 1.5 2.7 3 6 3s6-1.5 6-3v-4.5" /></svg>
                </span>
                <div style={{ minWidth: 0 }}>
                  <div style={{ fontSize: '14.5px', fontWeight: 700, color: '#1B1730', letterSpacing: '-.01em', lineHeight: 1.25 }}>New Starter Onboarding</div>
                  <div style={{ fontSize: '11px', color: '#A39EB4', fontWeight: 500 }}>Week 1 · assigned to 12 people</div>
                </div>
                <span style={{ marginLeft: 'auto', display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '5px 11px', borderRadius: '999px', background: '#fff', border: '1px solid #EBE8F4', fontSize: '10.5px', fontWeight: 700, color: '#8B85A0', whiteSpace: 'nowrap' }}>
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#8B85A0" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" /><line x1="3" y1="10" x2="21" y2="10" /></svg>Due Fri
                </span>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '7px', fontSize: '11.5px', fontWeight: 700, color: '#0E9384', whiteSpace: 'nowrap' }}>
                  <span ref={hero.savedDotRef} style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#14B8A6' }} />
                  {hero.allDone ? 'Course complete · saved' : 'Saved'}
                </span>
              </div>

              {/* progress bar */}
              <div style={{ padding: '20px 20px 4px' }}>
                <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: '12px' }}>
                  <span style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '.1em', textTransform: 'uppercase', color: '#B4AEC6' }}>Your progress</span>
                  <span style={{ fontSize: '13px', fontWeight: 700, color: '#1B1730' }}>{hero.doneCount} of {hero.total} · {hero.pct}%</span>
                </div>
                <div style={{ marginTop: '10px', height: '9px', borderRadius: '999px', background: '#F1EFF8', overflow: 'hidden' }}>
                  <div style={{ height: '100%', borderRadius: '999px', width: `${hero.pct}%`, background: 'linear-gradient(90deg,#7C3AED,#9F67F5)', transition: 'width .5s cubic-bezier(.16,1,.3,1)' }} />
                </div>
              </div>

              {/* interactive checklist */}
              <div style={{ padding: '18px 14px 6px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {CHECKLIST.map((it) => {
                  const isDone = !!hero.done[it.id];
                  const pop = hero.justToggled === it.id && !hero.reducedMotion.current;
                  const tint = TAG_TINTS[it.tag] || TAG_TINTS.Task;
                  return (
                    <div
                      key={it.id}
                      role="button"
                      tabIndex={0}
                      onClick={() => hero.toggle(it.id)}
                      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); hero.toggle(it.id); } }}
                      style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 14px', borderRadius: '13px', cursor: 'pointer', userSelect: 'none', outline: 'none', transition: 'background .18s,border-color .18s,box-shadow .18s', background: isDone ? '#FBFAFE' : '#fff', border: `1px solid ${isDone ? '#F0EEF6' : '#EDEBF2'}`, boxShadow: isDone ? 'none' : '0 2px 5px -3px rgba(37,22,84,.2)' }}
                    >
                      <span style={{ flexShrink: 0, width: '22px', height: '22px', borderRadius: '7px', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'background .18s,border-color .18s', background: isDone ? '#7C3AED' : '#fff', border: `1.5px solid ${isDone ? '#7C3AED' : '#DDD6EE'}` }}>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: isDone ? 1 : 0, transition: 'opacity .15s', animation: pop ? 'elearn-checkPop .42s ease-out' : undefined }}><path d="M20 6 9 17l-5-5" /></svg>
                      </span>
                      <div style={{ minWidth: 0, flex: 1 }}>
                        <div style={{ fontSize: '13.5px', lineHeight: 1.35, transition: 'color .2s', fontWeight: isDone ? 500 : 600, color: isDone ? '#A39EB4' : '#1B1730', textDecoration: isDone ? 'line-through' : 'none' }}>{it.label}</div>
                        <div style={{ fontSize: '10.5px', color: '#B4AEC6', fontWeight: 500, marginTop: '2px' }}>{it.meta}</div>
                      </div>
                      <span style={{ flexShrink: 0, padding: '4px 9px', borderRadius: '999px', fontSize: '9.5px', fontWeight: 700, whiteSpace: 'nowrap', background: tint.bg, border: `1px solid ${tint.bd}`, color: tint.fg }}>{it.tag}</span>
                    </div>
                  );
                })}
              </div>

              {/* footer hint */}
              <div style={{ padding: '6px 20px 18px' }}>
                <span style={{ display: 'block', fontSize: '11px', color: '#B4AEC6', fontWeight: 500 }}>
                  {hero.allDone ? 'Certificate issued automatically' : 'Tick an item — progress updates for you and your team'}
                </span>
              </div>
            </div>

            {/* team-wide completion ring */}
            <div style={{ position: 'absolute', left: '-34px', bottom: '10px', display: 'flex', alignItems: 'center', gap: '14px', padding: '14px 18px 14px 14px', borderRadius: '18px', background: '#fff', border: '1px solid #EFEDF6', boxShadow: '0 22px 44px -20px rgba(37,22,84,.34)', animation: 'elearn-floaty 6s ease-in-out infinite' }}>
              <div style={{ position: 'relative', width: '62px', height: '62px', flexShrink: 0 }}>
                <svg width="62" height="62" viewBox="0 0 62 62" style={{ transform: 'rotate(-90deg)' }}>
                  <circle cx="31" cy="31" r="26" fill="none" stroke="#F1EFF8" strokeWidth="8" />
                  <circle cx="31" cy="31" r="26" fill="none" stroke="#7C3AED" strokeWidth="8" strokeLinecap="round" strokeDasharray="163.4" style={{ strokeDashoffset: (hero.circumference * (1 - hero.teamPct / 100)).toFixed(1), transition: 'stroke-dashoffset .6s cubic-bezier(.16,1,.3,1)' }} />
                </svg>
                <span style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '15px', fontWeight: 700, color: '#1B1730', letterSpacing: '-.02em' }}>{hero.teamPct}%</span>
              </div>
              <div style={{ lineHeight: 1.3 }}>
                <div style={{ fontSize: '12.5px', fontWeight: 700, color: '#1B1730' }}>Team-wide complete</div>
                <div style={{ fontSize: '10.5px', color: '#8B85A0', fontWeight: 500, marginTop: '2px' }}>{OTHERS_DONE} of {TEAM_SIZE} finished · {hero.doneCount}/{hero.total} yours</div>
              </div>
            </div>
          </ElearnRevealSection>
        </div>
      </section>

      {/* ═══ TRUST BAR ═══ */}
      <StackTrustBar Wrapper={PlainStackWrapper} apps={ELEARN_APPS} />

      {/* ═══ STATS ROW (4-card bento) ═══ */}
      <section style={{ background: '#F7F7F7', padding: '80px 24px' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '20px' }}>
          <ElearnRevealSection reveal style={{ background: '#fff', borderRadius: '20px', padding: '30px 28px', border: '1px solid #EEEDF3', boxShadow: '0 14px 34px -22px rgba(37,22,84,.22)', display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', height: '46px', justifyContent: 'center' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><span style={{ width: '13px', height: '13px', borderRadius: '4px', background: '#7C3AED', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg></span><span style={{ height: '5px', width: '64%', borderRadius: '3px', background: '#E4DFF2' }} /></span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><span style={{ width: '13px', height: '13px', borderRadius: '4px', background: '#7C3AED', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg></span><span style={{ height: '5px', width: '48%', borderRadius: '3px', background: '#E4DFF2' }} /></span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><span style={{ width: '13px', height: '13px', borderRadius: '4px', border: '1.5px solid #DDD6EE' }} /><span style={{ height: '5px', width: '56%', borderRadius: '3px', background: '#F1EFF7' }} /></span>
            </div>
            <div style={{ fontSize: '30px', fontWeight: 700, letterSpacing: '-.02em', color: '#1B1730', marginTop: '18px', lineHeight: 1.1 }}>Auto-tracked</div>
            <p style={{ margin: '8px 0 0', fontSize: '14px', lineHeight: 1.55, color: '#5B5670' }}>Every course and checklist completion logged automatically.</p>
          </ElearnRevealSection>

          <ElearnRevealSection reveal revealDelay={90} style={{ background: '#1B1730', borderRadius: '20px', padding: '30px 28px', border: '1px solid #1B1730', boxShadow: '0 20px 44px -24px rgba(27,23,48,.6)', position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
            <div style={{ position: 'absolute', top: '-40px', right: '-30px', width: '150px', height: '150px', background: 'radial-gradient(circle,rgba(20,184,166,.34),transparent 68%)' }} />
            <div style={{ position: 'relative', width: '46px', height: '46px', borderRadius: '12px', background: 'rgba(20,184,166,.18)', border: '1px solid rgba(20,184,166,.42)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="#7DE0D0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21.2 8A10 10 0 1 1 12 2" /><polyline points="12 7 12 12 15.5 14" /><path d="M17 3h5v5" /></svg>
            </div>
            <div style={{ position: 'relative', fontSize: '28px', fontWeight: 700, letterSpacing: '-.02em', color: '#fff', marginTop: '20px', lineHeight: 1.12 }}>Always current</div>
            <p style={{ position: 'relative', margin: '8px 0 0', fontSize: '14px', lineHeight: 1.55, color: '#B7B1C9' }}>See who&apos;s done, who&apos;s overdue, in real time.</p>
          </ElearnRevealSection>

          <ElearnRevealSection reveal revealDelay={180} style={{ background: 'linear-gradient(150deg,#7C3AED,#6D28D9)', borderRadius: '20px', padding: '30px 28px', border: '1px solid #6D28D9', boxShadow: '0 20px 44px -22px rgba(124,58,237,.6)', position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div style={{ position: 'absolute', bottom: '-50px', left: '-30px', width: '160px', height: '160px', background: 'radial-gradient(circle,rgba(255,255,255,.16),transparent 68%)' }} />
            <div style={{ position: 'relative', fontSize: '56px', fontWeight: 700, letterSpacing: '-.03em', color: '#fff', lineHeight: 1 }}>0<span style={{ fontSize: '26px', fontWeight: 600, marginLeft: '4px' }}>min</span></div>
            <p style={{ position: 'relative', margin: '10px 0 0', fontSize: '14px', lineHeight: 1.55, color: 'rgba(255,255,255,.82)' }}>Setup time — no install required.</p>
          </ElearnRevealSection>

          <ElearnRevealSection reveal revealDelay={270} style={{ background: '#fff', borderRadius: '20px', padding: '30px 28px', border: '1px solid #EEEDF3', boxShadow: '0 14px 34px -22px rgba(37,22,84,.22)', display: 'flex', flexDirection: 'column' }}>
            <div style={{ position: 'relative', width: '64px', height: '50px' }}>
              <div style={{ position: 'absolute', left: '4px', top: '2px', width: '36px', height: '30px', borderRadius: '8px', background: '#FEF6E7', border: '1px solid #FBEBC6', transform: 'rotate(-10deg)' }} />
              <div style={{ position: 'absolute', left: '18px', top: '4px', width: '36px', height: '30px', borderRadius: '8px', background: '#ECFDF9', border: '1px solid #CDF5EE', transform: 'rotate(9deg)' }} />
              <div style={{ position: 'absolute', left: '11px', top: '9px', width: '38px', height: '32px', borderRadius: '8px', background: '#fff', border: '1px solid #E4DFF2', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 8px 16px -10px rgba(37,22,84,.34)' }}>
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10 12 5 2 10l10 5 10-5Z" /><path d="M6 12.5V17c0 1.5 2.7 3 6 3s6-1.5 6-3v-4.5" /></svg>
              </div>
            </div>
            <div style={{ fontSize: '30px', fontWeight: 700, letterSpacing: '-.02em', color: '#1B1730', marginTop: '18px' }}>1 place</div>
            <p style={{ margin: '8px 0 0', fontSize: '14px', lineHeight: 1.55, color: '#5B5670' }}>Training lives alongside the rest of the Stack.</p>
          </ElearnRevealSection>
        </div>
      </section>

      {/* ═══ 3 STEPS ═══ */}
      <section style={{ background: '#fff', padding: '92px 24px' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <ElearnRevealSection reveal style={{ textAlign: 'center', maxWidth: '620px', margin: '0 auto 52px' }}>
            <h2 className="elearn-section-heading">Get started in 3 easy steps</h2>
          </ElearnRevealSection>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '24px' }}>
            {/* Step 1 */}
            <ElearnRevealSection reveal style={{ background: '#FBFAFE', borderRadius: '20px', padding: '32px 30px', border: '1px solid #F0EEF7' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '36px', height: '36px', borderRadius: '10px', background: '#7C3AED', color: '#fff', fontWeight: 700, fontSize: '15px', boxShadow: '0 8px 16px -6px rgba(124,58,237,.5)' }}>1</div>
              <div style={{ marginTop: '22px', height: '124px', borderRadius: '14px', background: '#fff', border: '1px solid #EFEDF6', display: 'flex', alignItems: 'center', gap: '9px', overflow: 'hidden', padding: '0 18px' }}>
                <div style={{ flex: 1, height: '82px', borderRadius: '9px', background: '#FBFAFE', border: '1px solid #EFEDF6', padding: '8px 7px', display: 'flex', flexDirection: 'column', gap: '5px' }}><span style={{ height: '22px', borderRadius: '5px', background: '#F3F1F9' }} /><span style={{ height: '4px', width: '70%', borderRadius: '2px', background: '#E9E5F3' }} /><span style={{ height: '4px', width: '44%', borderRadius: '2px', background: '#F1EFF7' }} /></div>
                <div style={{ flex: 1, height: '82px', borderRadius: '9px', background: '#F5F3FF', border: '1.5px solid #7C3AED', padding: '8px 7px', display: 'flex', flexDirection: 'column', gap: '5px', boxShadow: '0 10px 20px -12px rgba(124,58,237,.55)' }}><span style={{ height: '22px', borderRadius: '5px', background: '#fff', border: '1px solid #E6DEFA', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><polygon points="10 8 16 12 10 16 10 8" /><circle cx="12" cy="12" r="9" /></svg></span><span style={{ height: '4px', width: '62%', borderRadius: '2px', background: '#C9BEEE' }} /><span style={{ height: '4px', width: '40%', borderRadius: '2px', background: '#E6DEFA' }} /></div>
                <div style={{ flex: 1, height: '82px', borderRadius: '9px', border: '1.5px dashed #DDD6EE', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C7C2D6" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg></div>
              </div>
              <h3 style={{ fontSize: '19px', fontWeight: 600, margin: '22px 0 0', color: '#1B1730' }}>Build a course or checklist</h3>
              <p style={{ margin: '8px 0 0', fontSize: '14.5px', lineHeight: 1.55, color: '#5B5670' }}>From scratch or a ready-made template.</p>
            </ElearnRevealSection>

            {/* Step 2 */}
            <ElearnRevealSection reveal revealDelay={100} style={{ background: '#FBFAFE', borderRadius: '20px', padding: '32px 30px', border: '1px solid #F0EEF7' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '36px', height: '36px', borderRadius: '10px', background: '#7C3AED', color: '#fff', fontWeight: 700, fontSize: '15px', boxShadow: '0 8px 16px -6px rgba(124,58,237,.5)' }}>2</div>
              <div style={{ marginTop: '22px', height: '124px', borderRadius: '14px', background: '#fff', border: '1px solid #EFEDF6', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '11px', overflow: 'hidden', padding: '0 20px' }}>
                <div style={{ fontSize: '12.5px', fontWeight: 700, color: '#1B1730' }}>Assign &ldquo;Data Security 101&rdquo;</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '7px', flexWrap: 'wrap' }}>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', padding: '4px 9px', borderRadius: '999px', background: '#F5F3FF', border: '1px solid #E6DEFA', fontSize: '9.5px', fontWeight: 700, color: '#7C3AED' }}><span style={{ width: '13px', height: '13px', borderRadius: '50%', background: '#EDE9FE', color: '#7C3AED', fontSize: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700 }}>AR</span>Ade R.</span>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', padding: '4px 9px', borderRadius: '999px', background: '#ECFDF9', border: '1px solid #CDF5EE', fontSize: '9.5px', fontWeight: 700, color: '#0E9384' }}>
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#0E9384" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /></svg>Ops team
                  </span>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', padding: '4px 9px', borderRadius: '999px', background: '#FBFAFE', border: '1px solid #EDEBF2', fontSize: '9.5px', fontWeight: 600, color: '#8B85A0' }}>+ 9 more</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '9.5px', fontWeight: 600, color: '#B45309', background: '#FEF6E7', border: '1px solid #FBEBC6', borderRadius: '999px', padding: '4px 9px', alignSelf: 'flex-start' }}>
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#B45309" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" /><line x1="3" y1="10" x2="21" y2="10" /></svg>Due in 7 days
                </div>
              </div>
              <h3 style={{ fontSize: '19px', fontWeight: 600, margin: '22px 0 0', color: '#1B1730' }}>Assign it</h3>
              <p style={{ margin: '8px 0 0', fontSize: '14.5px', lineHeight: 1.55, color: '#5B5670' }}>To a person, a team, or the whole company.</p>
            </ElearnRevealSection>

            {/* Step 3 */}
            <ElearnRevealSection reveal revealDelay={200} style={{ background: '#FBFAFE', borderRadius: '20px', padding: '32px 30px', border: '1px solid #F0EEF7' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '36px', height: '36px', borderRadius: '10px', background: '#7C3AED', color: '#fff', fontWeight: 700, fontSize: '15px', boxShadow: '0 8px 16px -6px rgba(124,58,237,.5)' }}>3</div>
              <div style={{ marginTop: '22px', height: '124px', borderRadius: '14px', background: '#fff', border: '1px solid #EFEDF6', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '18px', overflow: 'hidden', padding: '0 20px' }}>
                <div style={{ position: 'relative', width: '64px', height: '64px', flexShrink: 0 }}>
                  <svg width="64" height="64" viewBox="0 0 64 64" style={{ transform: 'rotate(-90deg)' }}>
                    <circle cx="32" cy="32" r="27" fill="none" stroke="#F1EFF8" strokeWidth="8" />
                    <circle cx="32" cy="32" r="27" fill="none" stroke="#7C3AED" strokeWidth="8" strokeLinecap="round" strokeDasharray="169.6" strokeDashoffset="52" />
                  </svg>
                  <span style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px', fontWeight: 700, color: '#1B1730' }}>69%</span>
                </div>
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '7px', minWidth: 0 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><span style={{ width: '16px', height: '16px', borderRadius: '50%', background: '#D5F5EF', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#0E9384" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg></span><span style={{ height: '4px', flex: 1, borderRadius: '2px', background: '#D5F5EF' }} /></div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><span style={{ width: '16px', height: '16px', borderRadius: '50%', background: '#D5F5EF', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#0E9384" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg></span><span style={{ height: '4px', width: '72%', borderRadius: '2px', background: '#D5F5EF' }} /></div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><span style={{ width: '16px', height: '16px', borderRadius: '50%', background: '#FEF6E7', border: '1px solid #FBEBC6', flexShrink: 0 }} /><span style={{ height: '4px', width: '54%', borderRadius: '2px', background: '#F1EFF7' }} /></div>
                </div>
              </div>
              <h3 style={{ fontSize: '19px', fontWeight: 600, margin: '22px 0 0', color: '#1B1730' }}>Track completion</h3>
              <p style={{ margin: '8px 0 0', fontSize: '14.5px', lineHeight: 1.55, color: '#5B5670' }}>See progress update as people work through it.</p>
            </ElearnRevealSection>
          </div>
          <ElearnRevealSection reveal style={{ textAlign: 'center', marginTop: '40px' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '15px 28px', borderRadius: '999px', background: '#7C3AED', color: '#fff', fontWeight: 600, fontSize: '15.5px', cursor: 'pointer', boxShadow: '0 12px 26px -8px rgba(124,58,237,.55)' }}>
              Start for £2/month
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
            </span>
          </ElearnRevealSection>
        </div>
      </section>

      {/* ═══ BENTO FEATURE GRID ═══ */}
      <section style={{ background: '#F7F7F7', padding: '92px 24px' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <ElearnRevealSection reveal style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 52px' }}>
            <span style={{ fontSize: '11.5px', fontWeight: 600, letterSpacing: '.14em', color: '#7C3AED', textTransform: 'uppercase' }}>Everything training needs</span>
            <h2 className="elearn-section-heading" style={{ margin: '14px 0 0' }}>Courses, checklists, and proof it happened.</h2>
          </ElearnRevealSection>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6,1fr)', gap: '20px' }}>
            {/* Course builder (span 4) */}
            <ElearnRevealSection reveal style={{ gridColumn: 'span 4', background: '#fff', borderRadius: '22px', padding: '36px', border: '1px solid #EEEDF3', boxShadow: '0 20px 44px -28px rgba(37,22,84,.26)', display: 'flex', gap: '32px', alignItems: 'center' }}>
              <div style={{ flex: 1, minWidth: 0 }}>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '7px', padding: '5px 12px', borderRadius: '999px', background: '#F5F3FF', color: '#7C3AED', fontSize: '11.5px', fontWeight: 600, border: '1px solid #EDE9FE', whiteSpace: 'nowrap' }}>Core</span>
                <h3 className="elearn-row-heading" style={{ margin: '18px 0 0' }}>Course builder</h3>
                <p style={{ margin: '11px 0 0', fontSize: '15.5px', lineHeight: 1.6, color: '#5B5670' }}>Lessons, quizzes, and videos in one place — build a course once and reuse it for every new hire.</p>
              </div>
              <div style={{ flexShrink: 0, width: '290px', background: 'linear-gradient(160deg,#FBFAFE,#F4F1FC)', borderRadius: '16px', border: '1px solid #F0EEF7', padding: '16px', display: 'flex', flexDirection: 'column', gap: '9px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '9px', background: '#fff', border: '1px solid #EFEDF6', borderRadius: '10px', padding: '9px 10px' }}>
                  <span style={{ width: '24px', height: '24px', borderRadius: '7px', background: '#EDE9FE', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5V6a2 2 0 0 1 2-2h11a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H6.5A2.5 2.5 0 0 1 4 19.5Z" /></svg></span>
                  <div style={{ flex: 1, minWidth: 0 }}><span style={{ display: 'block', height: '4px', width: '64%', borderRadius: '2px', background: '#E4DFF2' }} /><span style={{ display: 'block', height: '4px', width: '38%', borderRadius: '2px', background: '#F1EFF7', marginTop: '5px' }} /></div>
                  <span style={{ fontSize: '8px', fontWeight: 700, color: '#B4AEC6' }}>Lesson</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '9px', background: '#fff', border: '1.5px solid #7C3AED', borderRadius: '10px', padding: '9px 10px', boxShadow: '0 12px 22px -12px rgba(124,58,237,.5)' }}>
                  <span style={{ width: '24px', height: '24px', borderRadius: '7px', background: '#7C3AED', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><polygon points="10 8 16 12 10 16 10 8" /><rect x="2" y="4" width="20" height="16" rx="2" /></svg></span>
                  <div style={{ flex: 1, minWidth: 0 }}><span style={{ display: 'block', height: '4px', width: '72%', borderRadius: '2px', background: '#D9CEF3' }} /><span style={{ display: 'block', height: '4px', width: '44%', borderRadius: '2px', background: '#EDE9FE', marginTop: '5px' }} /></div>
                  <span style={{ fontSize: '8px', fontWeight: 700, color: '#7C3AED' }}>Video</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '9px', background: '#fff', border: '1px solid #EFEDF6', borderRadius: '10px', padding: '9px 10px' }}>
                  <span style={{ width: '24px', height: '24px', borderRadius: '7px', background: '#FEF6E7', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#B45309" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M9.1 9a3 3 0 1 1 4.6 2.4c-.9.6-1.7 1.2-1.7 2.3" /><line x1="12" y1="18" x2="12" y2="18" /></svg></span>
                  <div style={{ flex: 1, minWidth: 0 }}><span style={{ display: 'block', height: '4px', width: '56%', borderRadius: '2px', background: '#E4DFF2' }} /><span style={{ display: 'block', height: '4px', width: '32%', borderRadius: '2px', background: '#F1EFF7', marginTop: '5px' }} /></div>
                  <span style={{ fontSize: '8px', fontWeight: 700, color: '#B45309' }}>Quiz</span>
                </div>
                <div style={{ border: '1.5px dashed #DDD6EE', borderRadius: '10px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#C7C2D6" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg></div>
              </div>
            </ElearnRevealSection>

            {/* Onboarding checklists (span 2) */}
            <ElearnRevealSection reveal revealDelay={100} style={{ gridColumn: 'span 2', background: '#fff', borderRadius: '22px', padding: '30px 28px', border: '1px solid #EEEDF3', boxShadow: '0 20px 44px -28px rgba(37,22,84,.26)', display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '9px', padding: '8px 10px', borderRadius: '10px', background: '#FBFAFE', border: '1px solid #F0EEF6' }}><span style={{ width: '18px', height: '18px', borderRadius: '5px', background: '#7C3AED', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg></span><span style={{ height: '5px', flex: 1, borderRadius: '3px', background: '#E4DFF2' }} /></div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '9px', padding: '8px 10px', borderRadius: '10px', background: '#FBFAFE', border: '1px solid #F0EEF6' }}><span style={{ width: '18px', height: '18px', borderRadius: '5px', background: '#7C3AED', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg></span><span style={{ height: '5px', width: '66%', borderRadius: '3px', background: '#E4DFF2' }} /></div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '9px', padding: '8px 10px', borderRadius: '10px', background: '#fff', border: '1px solid #EDEBF2' }}><span style={{ width: '18px', height: '18px', borderRadius: '5px', border: '1.5px solid #DDD6EE', flexShrink: 0 }} /><span style={{ height: '5px', width: '52%', borderRadius: '3px', background: '#F1EFF7' }} /></div>
              </div>
              <h3 style={{ fontSize: '19px', fontWeight: 700, letterSpacing: '-.01em', margin: 0, color: '#1B1730' }}>Onboarding checklists</h3>
              <p style={{ margin: '8px 0 0', fontSize: '14px', lineHeight: 1.55, color: '#5B5670' }}>A guided first-week plan for every new hire.</p>
            </ElearnRevealSection>

            {/* Compliance tracking (span 3) */}
            <ElearnRevealSection reveal revealDelay={140} style={{ gridColumn: 'span 3', background: '#fff', borderRadius: '22px', padding: '30px', border: '1px solid #EEEDF3', boxShadow: '0 20px 44px -28px rgba(37,22,84,.26)' }}>
              <h3 style={{ fontSize: '20px', fontWeight: 700, letterSpacing: '-.01em', margin: 0, color: '#1B1730' }}>Compliance tracking</h3>
              <p style={{ margin: '9px 0 0', fontSize: '14.5px', lineHeight: 1.55, color: '#5B5670' }}>See who&apos;s certified and who&apos;s overdue.</p>
              <div style={{ marginTop: '22px', background: '#FBFAFE', border: '1px solid #F0EEF6', borderRadius: '13px', padding: '14px 16px', display: 'flex', flexDirection: 'column', gap: '9px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><span style={{ width: '22px', height: '22px', borderRadius: '50%', background: '#EDE9FE', color: '#7C3AED', fontSize: '8px', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>AR</span><span style={{ height: '6px', flex: 1, borderRadius: '999px', background: '#D5F5EF' }} /><span style={{ fontSize: '9px', fontWeight: 700, color: '#0E9384', width: '52px', textAlign: 'right' }}>Certified</span></div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><span style={{ width: '22px', height: '22px', borderRadius: '50%', background: '#D5F5EF', color: '#0E9384', fontSize: '8px', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>KM</span><span style={{ height: '6px', flex: 1, borderRadius: '999px', background: '#D5F5EF' }} /><span style={{ fontSize: '9px', fontWeight: 700, color: '#0E9384', width: '52px', textAlign: 'right' }}>Certified</span></div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><span style={{ width: '22px', height: '22px', borderRadius: '50%', background: '#FDE6C9', color: '#B45309', fontSize: '8px', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>SP</span><span style={{ height: '6px', flex: 1, borderRadius: '999px', background: '#F1EFF7', position: 'relative', overflow: 'hidden' }}><span style={{ position: 'absolute', inset: 0, width: '44%', background: '#FBBF24', borderRadius: '999px' }} /></span><span style={{ fontSize: '9px', fontWeight: 700, color: '#E11D74', width: '52px', textAlign: 'right' }}>Overdue</span></div>
              </div>
            </ElearnRevealSection>

            {/* Progress dashboards (span 3) */}
            <ElearnRevealSection reveal revealDelay={200} style={{ gridColumn: 'span 3', background: '#fff', borderRadius: '22px', padding: '30px', border: '1px solid #EEEDF3', boxShadow: '0 20px 44px -28px rgba(37,22,84,.26)', display: 'flex', alignItems: 'center', gap: '24px' }}>
              <div style={{ flex: 1, minWidth: 0 }}>
                <h3 style={{ fontSize: '20px', fontWeight: 700, letterSpacing: '-.01em', margin: 0, color: '#1B1730' }}>Progress dashboards</h3>
                <p style={{ margin: '9px 0 0', fontSize: '14.5px', lineHeight: 1.55, color: '#5B5670' }}>Team-wide completion at a glance, not a spreadsheet export.</p>
              </div>
              <div style={{ flexShrink: 0, display: 'flex', alignItems: 'flex-end', gap: '6px', height: '70px' }}>
                <span style={{ width: '14px', height: '34px', borderRadius: '5px', background: '#EDE9FE' }} />
                <span style={{ width: '14px', height: '52px', borderRadius: '5px', background: '#D9CEF3' }} />
                <span style={{ width: '14px', height: '70px', borderRadius: '5px', background: '#7C3AED' }} />
                <span style={{ width: '14px', height: '44px', borderRadius: '5px', background: '#CDF5EE' }} />
              </div>
            </ElearnRevealSection>

            {/* Automatic reminders (span 3) */}
            <ElearnRevealSection reveal revealDelay={240} style={{ gridColumn: 'span 3', background: '#fff', borderRadius: '22px', padding: '30px', border: '1px solid #EEEDF3', boxShadow: '0 20px 44px -28px rgba(37,22,84,.26)', display: 'flex', alignItems: 'center', gap: '24px' }}>
              <div style={{ flex: 1, minWidth: 0 }}>
                <h3 style={{ fontSize: '20px', fontWeight: 700, letterSpacing: '-.01em', margin: 0, color: '#1B1730' }}>Automatic reminders</h3>
                <p style={{ margin: '9px 0 0', fontSize: '14.5px', lineHeight: 1.55, color: '#5B5670' }}>Nudge anyone falling behind, without chasing them yourself.</p>
              </div>
              <div style={{ flexShrink: 0, position: 'relative', width: '66px', height: '66px', borderRadius: '18px', background: '#FEF6E7', border: '1px solid #FBEBC6', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#B45309" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" /><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" /></svg>
                <span style={{ position: 'absolute', top: '-4px', right: '-4px', width: '20px', height: '20px', borderRadius: '50%', background: '#E11D74', color: '#fff', fontSize: '10px', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid #fff' }}>2</span>
              </div>
            </ElearnRevealSection>

            {/* Certificates (span 3) */}
            <ElearnRevealSection reveal revealDelay={280} style={{ gridColumn: 'span 3', background: '#fff', borderRadius: '22px', padding: '30px', border: '1px solid #EEEDF3', boxShadow: '0 20px 44px -28px rgba(37,22,84,.26)', display: 'flex', alignItems: 'center', gap: '24px' }}>
              <div style={{ flex: 1, minWidth: 0 }}>
                <h3 style={{ fontSize: '20px', fontWeight: 700, letterSpacing: '-.01em', margin: 0, color: '#1B1730' }}>Certificates</h3>
                <p style={{ margin: '9px 0 0', fontSize: '14.5px', lineHeight: 1.55, color: '#5B5670' }}>Issued automatically on course completion.</p>
              </div>
              <div style={{ flexShrink: 0, position: 'relative', width: '104px', height: '74px' }}>
                <div style={{ position: 'absolute', left: 0, top: '6px', width: '74px', height: '60px', borderRadius: '10px', background: '#FBFAFE', border: '1px solid #EFEDF6', transform: 'rotate(-6deg)' }} />
                <div style={{ position: 'absolute', left: '14px', top: 0, width: '78px', height: '66px', borderRadius: '10px', background: '#fff', border: '1px solid #E4DFF2', boxShadow: '0 14px 26px -14px rgba(37,22,84,.4)', padding: '10px 11px', display: 'flex', flexDirection: 'column', gap: '5px' }}>
                  <span style={{ height: '4px', width: '52%', borderRadius: '2px', background: '#D9CEF3' }} />
                  <span style={{ height: '4px', width: '78%', borderRadius: '2px', background: '#F1EFF7' }} />
                  <span style={{ height: '4px', width: '64%', borderRadius: '2px', background: '#F1EFF7' }} />
                  <span style={{ marginTop: 'auto', alignSelf: 'flex-end', width: '22px', height: '22px', borderRadius: '50%', background: '#F5F3FF', border: '1px solid #E6DEFA', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="6" /><path d="M15.5 13.5 17 22l-5-3-5 3 1.5-8.5" /></svg></span>
                </div>
              </div>
            </ElearnRevealSection>
          </div>
          <ElearnRevealSection reveal style={{ textAlign: 'center', marginTop: '40px' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '14px 26px', borderRadius: '999px', background: '#fff', color: '#2A2440', fontWeight: 600, fontSize: '15px', cursor: 'pointer', border: '1.5px solid #E4DFF2' }}>
              See How It Works
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
            </span>
          </ElearnRevealSection>
        </div>
      </section>

      {/* ═══ ALT ROW 1: Onboarding that runs itself ═══ */}
      <section style={{ background: '#fff', padding: '92px 24px' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10" style={{ display: 'grid', gridTemplateColumns: '1.05fr 1fr', gap: '64px', alignItems: 'center' }}>
          <ElearnRevealSection reveal style={{ position: 'relative' }}>
            <div style={{ position: 'absolute', inset: '18px -8px -16px 14px', background: 'linear-gradient(135deg,rgba(124,58,237,.10),rgba(20,184,166,.10))', borderRadius: '24px', filter: 'blur(2px)' }} />
            <div style={{ position: 'relative', background: '#fff', borderRadius: '20px', border: '1px solid #ECE9F5', boxShadow: '0 30px 60px -30px rgba(37,22,84,.3)', overflow: 'hidden' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '14px 18px', borderBottom: '1px solid #F0EEF6', background: '#FBFAFE' }}>
                <span style={{ width: '26px', height: '26px', borderRadius: '8px', background: '#F5F3FF', border: '1px solid #E6DEFA', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 11l3 3L22 4" /><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" /></svg></span>
                <div><div style={{ fontSize: '12.5px', fontWeight: 700, color: '#1B1730' }}>First Week · Priya S.</div><div style={{ fontSize: '10px', color: '#A39EB4', fontWeight: 500 }}>Day 3 of 5</div></div>
                <span style={{ marginLeft: 'auto', fontSize: '10.5px', fontWeight: 700, color: '#7C3AED', background: '#F5F3FF', border: '1px solid #E6DEFA', borderRadius: '999px', padding: '4px 10px' }}>3 of 5 done</span>
              </div>
              <div style={{ padding: '16px 18px', display: 'flex', flexDirection: 'column', gap: '9px' }}>
                {[
                  { label: 'Sign your contract in eSignature', done: true, day: 'Mon' },
                  { label: 'Read the team handbook', done: true, day: 'Tue' },
                  { label: 'Complete Data Security 101', done: true, day: 'Just now', highlight: true },
                  { label: 'Meet your team in Teams', done: false, day: 'Thu' },
                  { label: 'Set up your workspace apps', done: false, day: 'Fri' },
                ].map((item) => (
                  <div key={item.label} style={{ display: 'flex', alignItems: 'center', gap: '11px', padding: '11px 13px', borderRadius: '12px', background: item.highlight ? '#fff' : item.done ? '#FBFAFE' : '#fff', border: item.highlight ? '1.5px solid #C9BEEE' : item.done ? '1px solid #F0EEF6' : '1px solid #EDEBF2', boxShadow: item.highlight ? '0 12px 24px -16px rgba(124,58,237,.5)' : 'none' }}>
                    {item.done ? (
                      <span style={{ width: '20px', height: '20px', borderRadius: '6px', background: '#7C3AED', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, animation: item.highlight ? 'elearn-checkPop .5s ease-out' : undefined }}><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg></span>
                    ) : (
                      <span style={{ width: '20px', height: '20px', borderRadius: '6px', border: '1.5px solid #DDD6EE', flexShrink: 0 }} />
                    )}
                    <span style={{ fontSize: '12.5px', fontWeight: item.highlight ? 600 : 500, color: item.done && !item.highlight ? '#A39EB4' : '#1B1730', textDecoration: item.done && !item.highlight ? 'line-through' : 'none' }}>{item.label}</span>
                    <span style={{ marginLeft: 'auto', fontSize: '9.5px', fontWeight: item.highlight ? 700 : 600, color: item.highlight ? '#7C3AED' : item.done ? '#0E9384' : '#B4AEC6', whiteSpace: 'nowrap' }}>{item.day}</span>
                  </div>
                ))}
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '0 18px 18px' }}>
                <div style={{ flex: 1, height: '7px', borderRadius: '999px', background: '#F1EFF8', overflow: 'hidden' }}><div style={{ width: '60%', height: '100%', borderRadius: '999px', background: 'linear-gradient(90deg,#7C3AED,#9F67F5)' }} /></div>
                <span style={{ fontSize: '10.5px', fontWeight: 700, color: '#7C3AED' }}>60%</span>
              </div>
            </div>
          </ElearnRevealSection>

          <ElearnRevealSection reveal revealDelay={120}>
            <h2 className="elearn-row-heading" style={{ textWrap: 'pretty' }}>Onboarding that runs itself.</h2>
            <p style={{ margin: '18px 0 0', fontSize: '16px', lineHeight: 1.62, color: '#5B5670' }}>Every new starter gets the same guided first week — and you can see how far they&apos;ve got without asking.</p>
            <div style={{ marginTop: '30px', display: 'flex', flexDirection: 'column', gap: '22px' }}>
              <div style={{ display: 'flex', gap: '15px' }}>
                <div style={{ flexShrink: 0, width: '38px', height: '38px', borderRadius: '11px', background: '#F5F3FF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 11l3 3L22 4" /><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" /></svg></div>
                <div style={{ fontWeight: 600, fontSize: '16.5px', color: '#1B1730' }}>A guided checklist walks every new hire through their first week.</div>
              </div>
              <div style={{ display: 'flex', gap: '15px' }}>
                <div style={{ flexShrink: 0, width: '38px', height: '38px', borderRadius: '11px', background: '#ECFDF9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#0E9384" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z" /><circle cx="12" cy="12" r="3" /></svg></div>
                <div style={{ fontWeight: 600, fontSize: '16.5px', color: '#1B1730' }}>Managers see completion status without asking.</div>
              </div>
              <div style={{ display: 'flex', gap: '15px' }}>
                <div style={{ flexShrink: 0, width: '38px', height: '38px', borderRadius: '11px', background: '#FEF6E7', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#B45309" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12a9 9 0 1 1-6.2-8.6" /><polyline points="21 3 21 9 15 9" /></svg></div>
                <div style={{ fontWeight: 600, fontSize: '16.5px', color: '#1B1730' }}>Assign the same checklist automatically to every new starter.</div>
              </div>
            </div>
          </ElearnRevealSection>
        </div>
      </section>

      {/* ═══ ALT ROW 2: Compliance you can actually see ═══ */}
      <section style={{ background: '#F7F7F7', padding: '92px 24px' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10" style={{ display: 'grid', gridTemplateColumns: '1fr 1.05fr', gap: '64px', alignItems: 'center' }}>
          <ElearnRevealSection reveal>
            <h2 className="elearn-row-heading" style={{ textWrap: 'pretty' }}>Compliance you can actually see.</h2>
            <p style={{ margin: '18px 0 0', fontSize: '16px', lineHeight: 1.62, color: '#5B5670' }}>One dashboard for the whole company — certified, in progress, and overdue, without building a report first.</p>
            <div style={{ marginTop: '30px', display: 'flex', flexDirection: 'column', gap: '22px' }}>
              <div style={{ display: 'flex', gap: '15px' }}>
                <div style={{ flexShrink: 0, width: '38px', height: '38px', borderRadius: '11px', background: '#F5F3FF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" /><path d="m9 12 2 2 4-4" /></svg></div>
                <div style={{ fontWeight: 600, fontSize: '16.5px', color: '#1B1730' }}>See exactly who&apos;s certified and who&apos;s overdue, company-wide.</div>
              </div>
              <div style={{ display: 'flex', gap: '15px' }}>
                <div style={{ flexShrink: 0, width: '38px', height: '38px', borderRadius: '11px', background: '#FEF6E7', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#B45309" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" /><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" /></svg></div>
                <div style={{ fontWeight: 600, fontSize: '16.5px', color: '#1B1730' }}>Automatic reminders go out before a deadline is missed.</div>
              </div>
              <div style={{ display: 'flex', gap: '15px' }}>
                <div style={{ flexShrink: 0, width: '38px', height: '38px', borderRadius: '11px', background: '#ECFDF9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#0E9384" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="6" /><path d="M15.5 13.5 17 22l-5-3-5 3 1.5-8.5" /></svg></div>
                <div style={{ fontWeight: 600, fontSize: '16.5px', color: '#1B1730' }}>Certificates generate automatically the moment a course is completed.</div>
              </div>
            </div>
          </ElearnRevealSection>

          <ElearnRevealSection reveal revealDelay={120} style={{ position: 'relative' }}>
            <div style={{ position: 'absolute', inset: '18px 14px -16px -8px', background: 'linear-gradient(135deg,rgba(124,58,237,.12),rgba(20,184,166,.10))', borderRadius: '24px', filter: 'blur(2px)' }} />
            <div style={{ position: 'relative', background: '#fff', borderRadius: '20px', border: '1px solid #ECE9F5', boxShadow: '0 30px 60px -30px rgba(37,22,84,.3)', overflow: 'hidden' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '16px 20px', borderBottom: '1px solid #F0EEF6' }}>
                <div><div style={{ fontSize: '13px', fontWeight: 700, color: '#1B1730' }}>Data Security 101 · Company-wide</div><div style={{ fontSize: '10.5px', color: '#A39EB4', fontWeight: 500 }}>Annual · deadline 30 Sep</div></div>
                <span style={{ marginLeft: 'auto', display: 'inline-flex', alignItems: 'center', gap: '5px', padding: '4px 10px', borderRadius: '999px', background: '#FFEFF2', border: '1px solid #FBD5DD', fontSize: '10px', fontWeight: 700, color: '#E11D74' }}>3 overdue</span>
              </div>
              <div style={{ padding: '22px 20px', display: 'flex', alignItems: 'center', gap: '26px', borderBottom: '1px solid #F0EEF6' }}>
                <div style={{ position: 'relative', width: '104px', height: '104px', flexShrink: 0 }}>
                  <svg width="104" height="104" viewBox="0 0 104 104" style={{ transform: 'rotate(-90deg)' }}>
                    <circle cx="52" cy="52" r="44" fill="none" stroke="#F1EFF8" strokeWidth="12" />
                    <circle cx="52" cy="52" r="44" fill="none" stroke="#7C3AED" strokeWidth="12" strokeLinecap="round" strokeDasharray="276.5" strokeDashoffset="66" />
                  </svg>
                  <span style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}><span style={{ fontSize: '23px', fontWeight: 700, color: '#1B1730', letterSpacing: '-.03em', lineHeight: 1 }}>76%</span><span style={{ fontSize: '9px', fontWeight: 600, color: '#A39EB4' }}>complete</span></span>
                </div>
                <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', gap: '11px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '9px' }}><span style={{ width: '9px', height: '9px', borderRadius: '3px', background: '#7C3AED', flexShrink: 0 }} /><span style={{ fontSize: '12.5px', fontWeight: 600, color: '#211C36' }}>Certified</span><span style={{ marginLeft: 'auto', fontSize: '12.5px', fontWeight: 700, color: '#1B1730' }}>38</span></div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '9px' }}><span style={{ width: '9px', height: '9px', borderRadius: '3px', background: '#FBBF24', flexShrink: 0 }} /><span style={{ fontSize: '12.5px', fontWeight: 600, color: '#211C36' }}>In progress</span><span style={{ marginLeft: 'auto', fontSize: '12.5px', fontWeight: 700, color: '#1B1730' }}>9</span></div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '9px' }}><span style={{ width: '9px', height: '9px', borderRadius: '3px', background: '#E11D74', flexShrink: 0 }} /><span style={{ fontSize: '12.5px', fontWeight: 600, color: '#211C36' }}>Overdue</span><span style={{ marginLeft: 'auto', fontSize: '12.5px', fontWeight: 700, color: '#1B1730' }}>3</span></div>
                </div>
              </div>
              <div style={{ padding: '16px 20px 20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}><span style={{ fontSize: '10px', fontWeight: 600, letterSpacing: '.08em', textTransform: 'uppercase', color: '#B4AEC6' }}>Overdue</span><span style={{ fontSize: '10.5px', fontWeight: 600, color: '#7C3AED', cursor: 'pointer' }}>Remind all</span></div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '11px', padding: '10px 12px', borderRadius: '12px', background: '#FFF7F9', border: '1px solid #FBE3EA' }}>
                  <span style={{ width: '28px', height: '28px', borderRadius: '50%', background: '#FEE2EC', color: '#C0344E', fontSize: '9px', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>SP</span>
                  <div style={{ minWidth: 0, flex: 1 }}><div style={{ fontSize: '12.5px', fontWeight: 600, color: '#1B1730' }}>Sam P.</div><div style={{ fontSize: '10px', color: '#A39EB4', fontWeight: 500 }}>Operations · 6 days overdue</div></div>
                  <span style={{ fontSize: '10px', fontWeight: 700, color: '#7C3AED', whiteSpace: 'nowrap' }}>Remind</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '11px', padding: '10px 12px', borderRadius: '12px', background: '#FFF7F9', border: '1px solid #FBE3EA' }}>
                  <span style={{ width: '28px', height: '28px', borderRadius: '50%', background: '#FEE2EC', color: '#C0344E', fontSize: '9px', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>TN</span>
                  <div style={{ minWidth: 0, flex: 1 }}><div style={{ fontSize: '12.5px', fontWeight: 600, color: '#1B1730' }}>Tomas N.</div><div style={{ fontSize: '10px', color: '#A39EB4', fontWeight: 500 }}>Support · 2 days overdue</div></div>
                  <span style={{ fontSize: '10px', fontWeight: 700, color: '#7C3AED', whiteSpace: 'nowrap' }}>Remind</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '11px', padding: '10px 12px', borderRadius: '12px', background: '#FBFAFE', border: '1px solid #F0EEF6' }}>
                  <span style={{ width: '28px', height: '28px', borderRadius: '50%', background: '#FDE6C9', color: '#B45309', fontSize: '9px', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>LH</span>
                  <div style={{ minWidth: 0, flex: 1 }}><div style={{ fontSize: '12.5px', fontWeight: 600, color: '#1B1730' }}>Lena H.</div><div style={{ fontSize: '10px', color: '#A39EB4', fontWeight: 500 }}>Finance · due tomorrow</div></div>
                  <span style={{ fontSize: '10px', fontWeight: 600, color: '#B45309', whiteSpace: 'nowrap' }}>Reminded</span>
                </div>
              </div>
            </div>
          </ElearnRevealSection>
        </div>
      </section>

      {/* ═══ TESTIMONIALS ═══ */}
      <section style={{ background: '#fff', padding: '92px 24px' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <ElearnRevealSection reveal style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 48px' }}>
            <span style={{ fontSize: '11.5px', fontWeight: 600, letterSpacing: '.14em', color: '#7C3AED', textTransform: 'uppercase' }}>What teams say</span>
            <h2 className="elearn-section-heading" style={{ margin: '12px 0 0' }}>Training that gets finished.</h2>
          </ElearnRevealSection>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '22px' }}>
            {[
              { quote: '\u201COnboarding used to be a document nobody read. Now it\u2019s a checklist that actually gets done.\u201D', tint: '#EDE9FE', fg: '#7C3AED' },
              { quote: '\u201CBeing able to see compliance status at a glance instead of chasing people down changed our audit prep completely.\u201D', tint: '#D5F5EF', fg: '#0E9384' },
              { quote: '\u201CBuilding a course took an afternoon, and it\u2019s been reused for every new hire since.\u201D', tint: '#FDE6C9', fg: '#B45309' },
            ].map((t, i) => (
              <ElearnRevealSection key={i} reveal revealDelay={i * 100} style={{ position: 'relative', background: '#FBFAFE', border: '1px solid #ECE7F7', borderRadius: '20px', padding: '30px 28px', boxShadow: '0 18px 40px -30px rgba(124,58,237,.28)' }}>
                <svg width="30" height="30" viewBox="0 0 24 24" fill="#E4DBF7"><path d="M9.5 4C6 4 3 7 3 11v9h8v-9H6.5c0-2 1.5-3.5 3-3.5V4Zm11 0c-3.5 0-6.5 3-6.5 7v9H22v-9h-4.5c0-2 1.5-3.5 3-3.5V4Z" /></svg>
                <p style={{ fontSize: '16px', lineHeight: 1.55, fontWeight: 500, color: '#211C36', margin: '16px 0 0' }}>{t.quote}</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginTop: '24px' }}>
                  <div style={{ width: '42px', height: '42px', borderRadius: '50%', background: t.tint, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 600, color: t.fg, fontSize: '14px' }}>&mdash;</div>
                  <div><div style={{ fontWeight: 600, fontSize: '14.5px', color: '#1B1730' }}>Placeholder</div><div style={{ fontSize: '13px', color: '#8B85A0' }}>Role TBC</div></div>
                </div>
              </ElearnRevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <section style={{ background: '#F7F7F7', padding: '92px 24px' }}>
        <div style={{ maxWidth: '820px', margin: '0 auto' }}>
          <ElearnRevealSection reveal style={{ textAlign: 'center', marginBottom: '44px' }}>
            <span style={{ fontSize: '11.5px', fontWeight: 600, letterSpacing: '.14em', color: '#7C3AED', textTransform: 'uppercase' }}>Questions</span>
            <h2 className="elearn-section-heading" style={{ margin: '12px 0 0' }}>ELearn, answered.</h2>
          </ElearnRevealSection>
          <ElearnRevealSection reveal style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {FAQS.map((item, i) => {
              const isOpen = faq.openIdx === i;
              return (
                <div key={i} style={{ background: '#fff', border: `1px solid ${isOpen ? '#E4DBF7' : '#EDEBF2'}`, borderRadius: '16px', overflow: 'hidden', boxShadow: isOpen ? '0 16px 34px -24px rgba(124,58,237,.3)' : 'none', transition: 'border-color .2s,box-shadow .2s' }}>
                  <button
                    onClick={() => faq.toggle(i)}
                    style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px', padding: '20px 24px', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', fontFamily: 'inherit' }}
                  >
                    <span style={{ fontSize: '16.5px', fontWeight: 600, color: '#1B1730' }}>{item.q}</span>
                    <span style={{ flexShrink: 0, width: '28px', height: '28px', borderRadius: '8px', background: isOpen ? '#7C3AED' : '#F5F3FF', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'background .2s' }}>
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke={isOpen ? '#fff' : '#7C3AED'} strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" style={{ transform: `rotate(${isOpen ? 45 : 0}deg)`, transition: 'transform .25s' }}><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg>
                    </span>
                  </button>
                  {isOpen && (
                    <div style={{ padding: '0 24px 22px', fontSize: '15px', lineHeight: 1.6, color: '#5B5670', maxWidth: '660px' }}>{item.a}</div>
                  )}
                </div>
              );
            })}
          </ElearnRevealSection>
        </div>
      </section>

      {/* ═══ PRE-FOOTER CTA ═══ */}
      <HomeFinalCTA />
    </div>
  );
}
