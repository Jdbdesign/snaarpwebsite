'use client';

import { useState, useCallback } from 'react';
import { Star, HelpCircle, Settings, Undo2, Redo2, Bold, Italic, Underline, AlignLeft, ChevronDown, ChevronLeft, ChevronRight, Check, Plus, Play, Image, Type, X, Globe, Copy } from 'lucide-react';
import { Coachmark } from '@/components/Coachmark';

/* ─── Slide canvas renderers ─── */
function SlideTitleCanvas() {
  return (
    <div style={{ width: '100%', height: '100%', background: 'linear-gradient(135deg, #7C3AED 0%, #5B21B6 100%)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '40px', color: '#fff', textAlign: 'center' }}>
      <h1 style={{ fontSize: '24px', fontWeight: 800, margin: '0 0 8px', letterSpacing: '-0.03em' }}>Q3 Investor Pitch</h1>
      <p style={{ fontSize: '11px', margin: 0, opacity: 0.7 }}>Snaarp Inc. · July 2026</p>
      <div style={{ width: '40px', height: '3px', background: 'rgba(255,255,255,0.4)', borderRadius: '2px', marginTop: '16px' }} />
    </div>
  );
}
function SlideAgendaCanvas() {
  return (
    <div style={{ width: '100%', height: '100%', background: '#fff', padding: '28px 36px', display: 'flex', flexDirection: 'column' }}>
      <h2 style={{ fontSize: '18px', fontWeight: 700, color: '#1a1a1a', margin: '0 0 4px' }}>Agenda</h2>
      <div style={{ width: '40px', height: '3px', background: '#7C3AED', borderRadius: '2px', marginBottom: '18px' }} />
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {['Company overview & mission', 'Q3 revenue & growth metrics', 'Product roadmap highlights', 'Go-to-market strategy', 'Financial projections & ask'].map((item, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{ width: '22px', height: '22px', borderRadius: '6px', background: '#F3EFFF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '9px', fontWeight: 700, color: '#7C3AED' }}>{i + 1}</div>
            <span style={{ fontSize: '11px', color: '#333' }}>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
function SlideChartCanvas() {
  const bars = [
    { label: 'Jan', value: '£42k', pct: 42, color: '#7C3AED' },
    { label: 'Feb', value: '£58k', pct: 58, color: '#0D9488' },
    { label: 'Mar', value: '£51k', pct: 51, color: '#D97706' },
    { label: 'Apr', value: '£74k', pct: 74, color: '#E11D74' },
    { label: 'May', value: '£82k', pct: 82, color: '#7C3AED' },
  ];
  return (
    <div style={{ width: '100%', height: '100%', background: '#fff', padding: '24px 32px', display: 'flex', flexDirection: 'column', position: 'relative' }}>
      <h2 style={{ fontSize: '16px', fontWeight: 700, color: '#1a1a1a', margin: '0 0 4px' }}>Q3 Revenue Growth</h2>
      <div style={{ width: '50px', height: '3px', background: '#7C3AED', borderRadius: '2px', marginBottom: '6px' }} />
      <p style={{ fontSize: '9px', color: '#888', margin: '0 0 12px' }}>Monthly recurring revenue (MRR) in thousands</p>
      <div style={{ flex: 1, display: 'flex', alignItems: 'flex-end', justifyContent: 'center', gap: '16px', paddingBottom: '4px' }}>
        {bars.map((bar) => (
          <div key={bar.label} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', width: '48px' }}>
            <span style={{ fontSize: '9.5px', fontWeight: 700, color: '#333' }}>{bar.value}</span>
            <div style={{ width: '34px', height: `${bar.pct * 1.8}px`, background: bar.color, borderRadius: '5px 5px 2px 2px', minHeight: '24px' }} />
            <span style={{ fontSize: '9px', color: '#888', fontWeight: 500 }}>{bar.label}</span>
          </div>
        ))}
      </div>
      <div style={{ fontSize: '8px', color: '#bbb', textAlign: 'right', marginTop: '6px' }}>Source: Internal Sales Data · July 2026</div>
    </div>
  );
}
function SlideTeamCanvas() {
  const team = [
    { initials: 'SJ', name: 'Sarah Jenkins', role: 'CEO', bg: '#7C3AED' },
    { initials: 'AR', name: 'Alex Rivera', role: 'CTO', bg: '#0D9488' },
    { initials: 'MC', name: 'Mike Chen', role: 'VP Sales', bg: '#D97706' },
  ];
  return (
    <div style={{ width: '100%', height: '100%', background: '#fff', padding: '28px 36px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <h2 style={{ fontSize: '16px', fontWeight: 700, color: '#1a1a1a', margin: '0 0 4px' }}>Leadership Team</h2>
      <div style={{ width: '40px', height: '3px', background: '#7C3AED', borderRadius: '2px', marginBottom: '24px' }} />
      <div style={{ display: 'flex', gap: '28px' }}>
        {team.map((p) => (
          <div key={p.initials} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: p.bg, color: '#fff', fontSize: '13px', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{p.initials}</div>
            <span style={{ fontSize: '10px', fontWeight: 600, color: '#1a1a1a' }}>{p.name}</span>
            <span style={{ fontSize: '8.5px', color: '#888' }}>{p.role}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
function SlideThanksCanvas() {
  return (
    <div style={{ width: '100%', height: '100%', background: 'linear-gradient(135deg, #5B21B6 0%, #7C3AED 100%)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: '#fff', textAlign: 'center', padding: '40px' }}>
      <h1 style={{ fontSize: '22px', fontWeight: 800, margin: '0 0 8px' }}>Thank You</h1>
      <p style={{ fontSize: '10px', margin: 0, opacity: 0.7 }}>Questions? hello@snaarp.com</p>
    </div>
  );
}
function SlideBlankCanvas() {
  return (
    <div style={{ width: '100%', height: '100%', background: '#fff', padding: '36px 44px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div style={{ padding: '8px 12px', borderRadius: '4px', border: '1px dashed #ddd', color: '#bbb', fontSize: '14px', fontWeight: 600 }}>Click to add title</div>
      <div style={{ flex: 1, padding: '12px', borderRadius: '4px', border: '1px dashed #eee', color: '#ccc', fontSize: '11px' }}>Click to add text</div>
    </div>
  );
}

/* ─── Thumbnails ─── */
function ThumbTitle() { return <div style={{ width: '100%', height: '100%', background: 'linear-gradient(135deg, #7C3AED, #5B21B6)', borderRadius: '3px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}><div style={{ width: '60%', height: '4px', background: 'rgba(255,255,255,0.9)', borderRadius: '2px', marginBottom: '3px' }} /><div style={{ width: '40%', height: '2.5px', background: 'rgba(255,255,255,0.5)', borderRadius: '2px' }} /></div>; }
function ThumbAgenda() { return <div style={{ width: '100%', height: '100%', background: '#fff', borderRadius: '3px', border: '1px solid #f0f0f0', padding: '4px 6px', display: 'flex', flexDirection: 'column', gap: '2px', justifyContent: 'center' }}><div style={{ width: '45%', height: '3px', background: '#1a1a1a', borderRadius: '1px' }} /><div style={{ width: '70%', height: '2px', background: '#E5E5E5', borderRadius: '1px' }} /><div style={{ width: '60%', height: '2px', background: '#E5E5E5', borderRadius: '1px' }} /><div style={{ width: '65%', height: '2px', background: '#E5E5E5', borderRadius: '1px' }} /></div>; }
function ThumbChart() { return <div style={{ width: '100%', height: '100%', background: '#fff', borderRadius: '3px', border: '1px solid #f0f0f0', padding: '3px 5px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}><div style={{ display: 'flex', alignItems: 'flex-end', gap: '2px', flex: 1, paddingTop: '6px' }}><div style={{ flex: 1, height: '45%', background: '#7C3AED', borderRadius: '1px' }} /><div style={{ flex: 1, height: '65%', background: '#0D9488', borderRadius: '1px' }} /><div style={{ flex: 1, height: '52%', background: '#D97706', borderRadius: '1px' }} /><div style={{ flex: 1, height: '78%', background: '#E11D74', borderRadius: '1px' }} /><div style={{ flex: 1, height: '88%', background: '#7C3AED', borderRadius: '1px' }} /></div></div>; }
function ThumbTeam() { return <div style={{ width: '100%', height: '100%', background: '#fff', borderRadius: '3px', border: '1px solid #f0f0f0', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '3px' }}><div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#7C3AED' }} /><div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#0D9488' }} /><div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#D97706' }} /></div>; }
function ThumbThanks() { return <div style={{ width: '100%', height: '100%', background: 'linear-gradient(135deg, #5B21B6, #7C3AED)', borderRadius: '3px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><div style={{ width: '50%', height: '3.5px', background: 'rgba(255,255,255,0.85)', borderRadius: '2px' }} /></div>; }
function ThumbBlank() { return <div style={{ width: '100%', height: '100%', background: '#fff', borderRadius: '3px', border: '1px solid #f0f0f0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><div style={{ width: '50%', height: '3px', background: '#eee', borderRadius: '1px' }} /></div>; }

const INITIAL_SLIDES = [
  { Canvas: SlideTitleCanvas, Thumb: ThumbTitle, note: '' },
  { Canvas: SlideAgendaCanvas, Thumb: ThumbAgenda, note: 'Keep this to 60 seconds max.' },
  { Canvas: SlideChartCanvas, Thumb: ThumbChart, note: 'Emphasize the April/May acceleration — this is the number the board will ask about first.' },
  { Canvas: SlideTeamCanvas, Thumb: ThumbTeam, note: 'Mention we are hiring 3 more engineers in Q4.' },
  { Canvas: SlideThanksCanvas, Thumb: ThumbThanks, note: '' },
];

const LAYOUTS = ['Title Only', 'Title + Content', 'Two Content', 'Section Header', 'Blank'];

export function PresentationPreviewMockup({ onEnd }: { onEnd?: () => void }) {
  const [slides, setSlides] = useState(INITIAL_SLIDES);
  const [activeSlide, setActiveSlide] = useState(2);
  const [presenting, setPresenting] = useState(false);
  const [coachStep, setCoachStep] = useState(1); // 1=add slide, 2=share btn, 3=copy link, 4=present btn, 5=end in present, 0=done
  const [notesOpen, setNotesOpen] = useState(false);
  const [layoutOpen, setLayoutOpen] = useState(false);
  const [currentLayout, setCurrentLayout] = useState('Title + Content');
  const [shareOpen, setShareOpen] = useState(false);
  const [linkCopied, setLinkCopied] = useState(false);

  const addSlide = useCallback(() => {
    const newSlide = { Canvas: SlideBlankCanvas, Thumb: ThumbBlank, note: '' };
    setSlides((s) => [...s, newSlide]);
    setActiveSlide(slides.length);
    setCoachStep(2);
  }, [slides.length]);

  const handleCopyLink = async () => {
    try { await navigator.clipboard.writeText('slides.snaarp.com/d/q3-investor-pitch-m4k1'); } catch {}
    setLinkCopied(true);
    setTimeout(() => setLinkCopied(false), 2000);
  };

  const selectLayout = (layout: string) => {
    setCurrentLayout(layout);
    setLayoutOpen(false);
  };

  const ActiveCanvas = slides[activeSlide]?.Canvas || SlideBlankCanvas;

  /* ─── Present mode ─── */
  if (presenting) {
    return (
      <div style={{ width: '100%', height: '100%', background: '#1a1a1a', display: 'flex', flexDirection: 'column', position: 'relative' }}>
        <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px' }}>
          <div style={{ width: '100%', maxWidth: '100%', height: '100%', borderRadius: '4px', overflow: 'hidden' }}>
            <ActiveCanvas />
          </div>
        </div>
        {/* Prev/Next */}
        <div onClick={() => setActiveSlide((s) => Math.max(0, s - 1))} style={{ position: 'absolute', left: '8px', top: '50%', transform: 'translateY(-50%)', width: '28px', height: '28px', borderRadius: '50%', background: 'rgba(255,255,255,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
          <ChevronLeft size={14} style={{ color: '#fff' }} />
        </div>
        <div onClick={() => setActiveSlide((s) => Math.min(slides.length - 1, s + 1))} style={{ position: 'absolute', right: '8px', top: '50%', transform: 'translateY(-50%)', width: '28px', height: '28px', borderRadius: '50%', background: 'rgba(255,255,255,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
          <ChevronRight size={14} style={{ color: '#fff' }} />
        </div>
        {/* Exit + slide count */}
        <div onClick={() => setPresenting(false)} style={{ position: 'absolute', top: '10px', right: '14px', padding: '4px 10px', borderRadius: '6px', background: 'rgba(255,255,255,0.1)', fontSize: '9px', color: '#ccc', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px' }}>
          <X size={10} /> Exit
        </div>
        <div style={{ position: 'absolute', bottom: '10px', right: '14px', fontSize: '9px', color: '#888' }}>{activeSlide + 1} / {slides.length}</div>
        {/* End coachmark in present mode */}
        {coachStep === 5 && (
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 40 }}>
            <Coachmark visible title="You're Presenting!" subtitle="Navigate slides or exit when done" onNext={() => { setCoachStep(0); setPresenting(false); if (onEnd) onEnd(); }} top="0px" left="0px" arrowSide="bottom" arrowOffset="80px" buttonLabel="End" />
          </div>
        )}
      </div>
    );
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', background: '#fff', position: 'relative', overflow: 'visible' }}>
      {/* Title bar */}
      <div style={{ display: 'flex', alignItems: 'center', padding: '8px 14px', borderBottom: '1px solid #f0f0f0', gap: '10px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flex: 1 }}>
          <div style={{ width: '20px', height: '20px', borderRadius: '4px', background: '#F4B400', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /></svg>
          </div>
          <span style={{ fontSize: '13px', fontWeight: 700, color: '#1a1a1a' }}>Q3 Investor Pitch</span>
          <Star size={13} style={{ color: '#ccc' }} />
          <span style={{ fontSize: '10px', color: '#999', display: 'flex', alignItems: 'center', gap: '3px' }}><Check size={10} style={{ color: '#22c55e' }} /> Saved</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <div style={{ display: 'flex', marginRight: '4px' }}>
            <div style={{ width: '22px', height: '22px', borderRadius: '50%', background: '#7C3AED', color: '#fff', fontSize: '8px', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid #fff', marginRight: '-6px', zIndex: 3 }}>SJ</div>
            <div style={{ width: '22px', height: '22px', borderRadius: '50%', background: '#0D9488', color: '#fff', fontSize: '8px', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid #fff', zIndex: 2 }}>AR</div>
          </div>
          <div style={{ position: 'relative' }}>
            <button onClick={() => { setPresenting(true); if (coachStep === 4) setCoachStep(5); }} style={{ display: 'flex', alignItems: 'center', gap: '4px', padding: '5px 12px', borderRadius: '14px', background: '#7C3AED', color: '#fff', fontSize: '10.5px', fontWeight: 600, border: 'none', cursor: 'pointer' }}><Play size={10} fill="#fff" /> Present</button>
            {coachStep === 4 && !presenting && (
              <div style={{ position: 'absolute', top: '32px', right: '0px', zIndex: 40 }}>
                <Coachmark visible title="Present Your Deck" subtitle="Enter full-screen presentation mode" onNext={() => { setPresenting(true); setCoachStep(5); }} top="0px" left="0px" arrowSide="top" arrowOffset="30px" buttonLabel="Next" />
              </div>
            )}
          </div>
          <button onClick={() => { setShareOpen(true); if (coachStep === 2) setCoachStep(3); }} style={{ padding: '5px 12px', borderRadius: '14px', background: '#fff', color: '#555', fontSize: '10.5px', fontWeight: 600, border: '1px solid #e8e8e8', cursor: 'pointer', position: 'relative' }}>
            Share
            {coachStep === 2 && !shareOpen && (
              <div style={{ position: 'absolute', top: '32px', right: '0px', zIndex: 40 }}>
                <Coachmark visible title="Share Presentation" subtitle="Invite collaborators to view or edit" onNext={() => { setShareOpen(true); setCoachStep(3); }} top="0px" left="0px" arrowSide="top" arrowOffset="30px" buttonLabel="Next" />
              </div>
            )}
          </button>
          <HelpCircle size={14} style={{ color: '#999' }} />
          <Settings size={14} style={{ color: '#999' }} />
          <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: '#7C3AED', color: '#fff', fontSize: '9px', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>AM</div>
        </div>
      </div>

      {/* Toolbar */}
      <div style={{ display: 'flex', alignItems: 'center', padding: '4px 14px', borderBottom: '1px solid #f0f0f0', gap: '3px', overflow: 'hidden' }}>
        <ToolBtn><Undo2 size={12} /></ToolBtn>
        <ToolBtn><Redo2 size={12} /></ToolBtn>
        <div style={{ display: 'flex', alignItems: 'center', gap: '2px', padding: '3px 8px', borderRadius: '4px', border: '1px solid #e8e8e8', fontSize: '9.5px', color: '#555' }}><Plus size={9} /> New slide</div>
        <Divider />
        <DropdownBtn label="100%" />
        <ToolBtn><Image size={12} /></ToolBtn>
        <ToolBtn><Type size={12} /></ToolBtn>
        <Divider />
        <DropdownBtn label="Poppins" />
        <DropdownBtn label="18" width="30px" />
        <ToolBtn><Bold size={12} /></ToolBtn>
        <ToolBtn><Italic size={12} /></ToolBtn>
        <ToolBtn><Underline size={12} /></ToolBtn>
        <Divider />
        <ToolBtn><AlignLeft size={12} /></ToolBtn>
        <div style={{ position: 'relative' }}>
          <div onClick={() => setLayoutOpen(!layoutOpen)} style={{ display: 'flex', alignItems: 'center', gap: '2px', padding: '3px 6px', borderRadius: '4px', border: '1px solid #e8e8e8', fontSize: '9.5px', color: '#555', cursor: 'pointer' }}>{currentLayout} <ChevronDown size={9} style={{ color: '#999' }} /></div>
          {layoutOpen && (
            <div style={{ position: 'absolute', top: '28px', left: 0, background: '#fff', border: '1px solid #eee', borderRadius: '8px', boxShadow: '0 4px 16px -4px rgba(0,0,0,0.12)', padding: '6px', zIndex: 30, width: '120px' }}>
              {LAYOUTS.map((l) => (
                <div key={l} onClick={() => selectLayout(l)} style={{ padding: '5px 8px', borderRadius: '4px', fontSize: '9px', color: currentLayout === l ? '#7C3AED' : '#555', fontWeight: currentLayout === l ? 600 : 400, cursor: 'pointer', background: currentLayout === l ? '#F3EFFF' : 'transparent' }}>{l}</div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Body */}
      <div style={{ flex: 1, display: 'flex', overflow: 'visible' }}>
        {/* Slide thumbnails */}
        <div style={{ width: '80px', borderRight: '1px solid #f0f0f0', padding: '10px 8px', display: 'flex', flexDirection: 'column', gap: '6px', background: '#fafafa', overflow: 'visible' }}>
          {slides.map((slide, i) => (
            <div key={i} onClick={() => { setActiveSlide(i); setNotesOpen(false); }} style={{ display: 'flex', alignItems: 'center', gap: '4px', cursor: 'pointer' }}>
              <span style={{ fontSize: '8px', color: activeSlide === i ? '#7C3AED' : '#aaa', width: '10px', textAlign: 'right', fontWeight: activeSlide === i ? 700 : 400 }}>{i + 1}</span>
              <div style={{ width: '54px', height: '36px', flexShrink: 0, borderRadius: '4px', overflow: 'hidden', border: activeSlide === i ? '2px solid #7C3AED' : '2px solid transparent', transition: 'border-color 0.15s' }}>
                <slide.Thumb />
              </div>
            </div>
          ))}
          {/* Add slide */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginTop: '2px', position: 'relative' }}>
            <span style={{ width: '10px' }} />
            <div onClick={addSlide} style={{ width: '54px', height: '24px', borderRadius: '4px', border: '1px dashed #ccc', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
              <Plus size={10} style={{ color: '#aaa' }} />
            </div>
            {coachStep === 1 && (
              <div style={{ position: 'absolute', top: '30px', left: '-4px', zIndex: 40 }}>
                <Coachmark visible title="Add a Slide" subtitle="Build out your deck one slide at a time" onNext={addSlide} top="0px" left="0px" arrowSide="top" arrowOffset="20px" buttonLabel="Next" />
              </div>
            )}
          </div>
        </div>

        {/* Canvas */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', background: '#E8E8E8', padding: '14px', overflow: 'hidden' }}>
          <div style={{ flex: 1, borderRadius: '4px', boxShadow: '0 2px 12px rgba(0,0,0,0.1)', overflow: 'hidden' }}>
            <ActiveCanvas />
          </div>
          {/* Speaker notes */}
          <div onClick={() => setNotesOpen(true)} style={{ marginTop: '8px', padding: notesOpen ? '10px 12px' : '6px 12px', background: '#fff', borderRadius: '4px', border: '1px solid #e8e8e8', fontSize: '9.5px', color: notesOpen ? '#333' : '#bbb', transition: 'padding 0.2s, min-height 0.2s', minHeight: notesOpen ? '50px' : '28px', cursor: 'text', position: 'relative' }}>
            {notesOpen ? (
              <>
                <div style={{ position: 'absolute', top: '4px', right: '8px', cursor: 'pointer' }} onClick={(e) => { e.stopPropagation(); setNotesOpen(false); }}><ChevronDown size={10} style={{ color: '#999', transform: 'rotate(180deg)' }} /></div>
                {slides[activeSlide]?.note || 'No notes for this slide yet.'}
              </>
            ) : 'Click to add speaker notes'}
          </div>
        </div>
      </div>

      {/* Share modal */}
      {shareOpen && (
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 50 }}>
          <div style={{ width: '320px', background: '#fff', borderRadius: '14px', boxShadow: '0 8px 30px -8px rgba(0,0,0,0.2)', padding: '18px 20px', overflow: 'visible', position: 'relative' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
              <span style={{ fontSize: '12px', fontWeight: 700, color: '#1a1a1a' }}>Share &lsquo;Q3 Investor Pitch&rsquo;</span>
              <X size={14} onClick={() => setShareOpen(false)} style={{ color: '#999', cursor: 'pointer' }} />
            </div>
            <div style={{ padding: '7px 10px', borderRadius: '8px', border: '1px solid #e8e8e8', marginBottom: '10px', fontSize: '10px', color: '#aaa' }}>Add people or groups</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginBottom: '12px' }}>
              {[{ i: 'SJ', name: 'Sarah Jenkins', role: 'Editor', bg: '#7C3AED' }, { i: 'AR', name: 'Alex Rivera', role: 'Editor', bg: '#0D9488' }].map((p) => (
                <div key={p.name} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <div style={{ width: '20px', height: '20px', borderRadius: '50%', background: p.bg, color: '#fff', fontSize: '7px', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{p.i}</div>
                  <span style={{ flex: 1, fontSize: '10px', fontWeight: 500, color: '#333' }}>{p.name}</span>
                  <span style={{ fontSize: '9px', color: '#999', padding: '2px 6px', borderRadius: '4px', border: '1px solid #eee' }}>{p.role}</span>
                </div>
              ))}
            </div>
            <div style={{ height: '1px', background: '#f0f0f0', margin: '12px 0' }} />
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
              <Globe size={13} style={{ color: '#999' }} />
              <span style={{ flex: 1, fontSize: '10px', color: '#333' }}>Anyone with the link</span>
              <span style={{ fontSize: '9px', color: '#999', padding: '2px 6px', borderRadius: '4px', border: '1px solid #eee' }}>Viewer</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '14px', position: 'relative' }}>
              <div style={{ flex: 1, padding: '6px 10px', borderRadius: '6px', background: '#F8F9FA', border: '1px solid #e8e8e8', fontSize: '9px', color: '#666', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>slides.snaarp.com/d/q3-investor-pitch-m4k1</div>
              <button onClick={handleCopyLink} style={{ display: 'flex', alignItems: 'center', gap: '4px', padding: '5px 10px', borderRadius: '6px', background: linkCopied ? '#ECFDF5' : '#F8F9FA', border: '1px solid ' + (linkCopied ? '#A7F3D0' : '#e8e8e8'), fontSize: '9px', fontWeight: 600, color: linkCopied ? '#166534' : '#555', cursor: 'pointer' }}>
                {linkCopied ? <><Check size={10} /> Copied</> : <><Copy size={10} /> Copy</>}
              </button>
              {coachStep === 3 && (
                <div style={{ position: 'absolute', top: '36px', left: '0px', zIndex: 60 }}>
                  <Coachmark visible title="Copy Share Link" subtitle="Share this link with anyone" onNext={() => { setCoachStep(4); setShareOpen(false); }} top="0px" left="0px" arrowSide="top" arrowOffset="30px" buttonLabel="Next" />
                </div>
              )}
            </div>
            <button onClick={() => setShareOpen(false)} style={{ width: '100%', padding: '8px', borderRadius: '8px', background: '#7C3AED', color: '#fff', fontSize: '11px', fontWeight: 600, border: 'none', cursor: 'pointer' }}>Done</button>
          </div>
        </div>
      )}
    </div>
  );
}

/* ─── Helpers ─── */
function ToolBtn({ children }: { children: React.ReactNode }) {
  return <div style={{ width: '24px', height: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '4px', color: '#555', cursor: 'default' }}>{children}</div>;
}
function DropdownBtn({ label, width }: { label: string; width?: string }) {
  return <div style={{ display: 'flex', alignItems: 'center', gap: '2px', padding: '3px 6px', borderRadius: '4px', border: '1px solid #e8e8e8', fontSize: '9.5px', color: '#555', cursor: 'default', whiteSpace: 'nowrap', width: width || 'auto' }}>{label}<ChevronDown size={9} style={{ color: '#999' }} /></div>;
}
function Divider() {
  return <div style={{ width: '1px', height: '18px', background: '#e8e8e8', margin: '0 4px' }} />;
}
