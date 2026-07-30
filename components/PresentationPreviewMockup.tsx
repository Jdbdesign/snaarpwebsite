'use client';

import { useState } from 'react';
import { Star, HelpCircle, Settings, Undo2, Redo2, Bold, Italic, Underline, AlignLeft, ChevronDown, Check, Plus, Play, Image, Type } from 'lucide-react';

/* ─── Slide content renderers (full canvas) ─── */
function SlideTitleCanvas() {
  return (
    <div style={{ width: '100%', height: '100%', background: 'linear-gradient(135deg, #7C3AED 0%, #5B21B6 100%)', borderRadius: '4px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '40px', color: '#fff', textAlign: 'center' }}>
      <h1 style={{ fontSize: '24px', fontWeight: 800, margin: '0 0 8px', letterSpacing: '-0.03em' }}>Q3 Investor Pitch</h1>
      <p style={{ fontSize: '11px', margin: 0, opacity: 0.7 }}>Snaarp Inc. · July 2026</p>
      <div style={{ width: '40px', height: '3px', background: 'rgba(255,255,255,0.4)', borderRadius: '2px', marginTop: '16px' }} />
    </div>
  );
}

function SlideAgendaCanvas() {
  return (
    <div style={{ width: '100%', height: '100%', background: '#fff', borderRadius: '4px', padding: '28px 36px', display: 'flex', flexDirection: 'column' }}>
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
    <div style={{ width: '100%', height: '100%', background: '#fff', borderRadius: '4px', padding: '24px 32px', display: 'flex', flexDirection: 'column', position: 'relative' }}>
      <h2 style={{ fontSize: '16px', fontWeight: 700, color: '#1a1a1a', margin: '0 0 4px' }}>Q3 Revenue Growth</h2>
      <div style={{ width: '50px', height: '3px', background: '#7C3AED', borderRadius: '2px', marginBottom: '6px' }} />
      <p style={{ fontSize: '9px', color: '#888', margin: '0 0 12px' }}>Monthly recurring revenue (MRR) in thousands</p>

      {/* Selection handles */}
      <div style={{ position: 'absolute', top: '18px', left: '22px', width: '7px', height: '7px', border: '2px solid #7C3AED', background: '#fff', borderRadius: '1px' }} />
      <div style={{ position: 'absolute', top: '18px', right: '22px', width: '7px', height: '7px', border: '2px solid #7C3AED', background: '#fff', borderRadius: '1px' }} />
      <div style={{ position: 'absolute', bottom: '40px', left: '22px', width: '7px', height: '7px', border: '2px solid #7C3AED', background: '#fff', borderRadius: '1px' }} />
      <div style={{ position: 'absolute', bottom: '40px', right: '22px', width: '7px', height: '7px', border: '2px solid #7C3AED', background: '#fff', borderRadius: '1px' }} />

      {/* Chart area */}
      <div style={{ flex: 1, display: 'flex', alignItems: 'flex-end', justifyContent: 'center', gap: '16px', paddingBottom: '4px' }}>
        {bars.map((bar) => (
          <div key={bar.label} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', width: '48px' }}>
            <span style={{ fontSize: '9.5px', fontWeight: 700, color: '#333' }}>{bar.value}</span>
            <div style={{ width: '34px', height: `${bar.pct * 1.8}px`, background: bar.color, borderRadius: '5px 5px 2px 2px', minHeight: '24px', transition: 'height 0.3s ease' }} />
            <span style={{ fontSize: '9px', color: '#888', fontWeight: 500 }}>{bar.label}</span>
          </div>
        ))}
      </div>

      {/* Trend line hint */}
      <div style={{ position: 'absolute', top: '60px', left: '60px', right: '60px', height: '1px', background: 'repeating-linear-gradient(90deg, #ddd 0, #ddd 4px, transparent 4px, transparent 8px)' }} />

      <div style={{ fontSize: '8px', color: '#bbb', textAlign: 'right', marginTop: '6px' }}>Source: Internal Sales Data · Updated July 2026</div>
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
    <div style={{ width: '100%', height: '100%', background: '#fff', borderRadius: '4px', padding: '28px 36px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
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
    <div style={{ width: '100%', height: '100%', background: 'linear-gradient(135deg, #5B21B6 0%, #7C3AED 100%)', borderRadius: '4px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: '#fff', textAlign: 'center', padding: '40px' }}>
      <h1 style={{ fontSize: '22px', fontWeight: 800, margin: '0 0 8px' }}>Thank You</h1>
      <p style={{ fontSize: '10px', margin: 0, opacity: 0.7 }}>Questions? hello@snaarp.com</p>
      <div style={{ width: '40px', height: '3px', background: 'rgba(255,255,255,0.3)', borderRadius: '2px', marginTop: '16px' }} />
    </div>
  );
}

const SLIDE_CANVASES = [SlideTitleCanvas, SlideAgendaCanvas, SlideChartCanvas, SlideTeamCanvas, SlideThanksCanvas];

/* ─── Slide thumbnail mini-renderers ─── */
function ThumbTitle() {
  return (
    <div style={{ width: '100%', height: '100%', background: 'linear-gradient(135deg, #7C3AED, #5B21B6)', borderRadius: '3px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '4px' }}>
      <div style={{ width: '60%', height: '4px', background: 'rgba(255,255,255,0.9)', borderRadius: '2px', marginBottom: '3px' }} />
      <div style={{ width: '40%', height: '2.5px', background: 'rgba(255,255,255,0.5)', borderRadius: '2px' }} />
    </div>
  );
}
function ThumbAgenda() {
  return (
    <div style={{ width: '100%', height: '100%', background: '#fff', borderRadius: '3px', border: '1px solid #f0f0f0', padding: '4px 6px', display: 'flex', flexDirection: 'column', gap: '2px', justifyContent: 'center' }}>
      <div style={{ width: '45%', height: '3px', background: '#1a1a1a', borderRadius: '1px' }} />
      <div style={{ width: '70%', height: '2px', background: '#E5E5E5', borderRadius: '1px' }} />
      <div style={{ width: '60%', height: '2px', background: '#E5E5E5', borderRadius: '1px' }} />
      <div style={{ width: '65%', height: '2px', background: '#E5E5E5', borderRadius: '1px' }} />
      <div style={{ width: '55%', height: '2px', background: '#E5E5E5', borderRadius: '1px' }} />
    </div>
  );
}
function ThumbChart() {
  return (
    <div style={{ width: '100%', height: '100%', background: '#fff', borderRadius: '3px', border: '1px solid #f0f0f0', padding: '3px 5px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
      <div style={{ width: '50%', height: '2.5px', background: '#1a1a1a', borderRadius: '1px', marginBottom: '2px' }} />
      <div style={{ display: 'flex', alignItems: 'flex-end', gap: '2px', flex: 1, paddingTop: '3px' }}>
        <div style={{ flex: 1, height: '45%', background: '#7C3AED', borderRadius: '1px' }} />
        <div style={{ flex: 1, height: '65%', background: '#0D9488', borderRadius: '1px' }} />
        <div style={{ flex: 1, height: '52%', background: '#D97706', borderRadius: '1px' }} />
        <div style={{ flex: 1, height: '78%', background: '#E11D74', borderRadius: '1px' }} />
        <div style={{ flex: 1, height: '88%', background: '#7C3AED', borderRadius: '1px' }} />
      </div>
    </div>
  );
}
function ThumbTeam() {
  return (
    <div style={{ width: '100%', height: '100%', background: '#fff', borderRadius: '3px', border: '1px solid #f0f0f0', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '3px' }}>
      <div style={{ width: '40%', height: '2.5px', background: '#1a1a1a', borderRadius: '1px' }} />
      <div style={{ display: 'flex', gap: '3px', marginTop: '2px' }}>
        <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#7C3AED' }} />
        <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#0D9488' }} />
        <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#D97706' }} />
      </div>
    </div>
  );
}
function ThumbThanks() {
  return (
    <div style={{ width: '100%', height: '100%', background: 'linear-gradient(135deg, #5B21B6, #7C3AED)', borderRadius: '3px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ width: '50%', height: '3.5px', background: 'rgba(255,255,255,0.85)', borderRadius: '2px' }} />
      <div style={{ width: '35%', height: '2px', background: 'rgba(255,255,255,0.4)', borderRadius: '1px', marginTop: '3px' }} />
    </div>
  );
}

const THUMBS = [ThumbTitle, ThumbAgenda, ThumbChart, ThumbTeam, ThumbThanks];

export function PresentationPreviewMockup() {
  const [activeSlide, setActiveSlide] = useState(2); // chart slide

  const ActiveCanvas = SLIDE_CANVASES[activeSlide];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', background: '#fff' }}>
      {/* Title bar */}
      <div style={{ display: 'flex', alignItems: 'center', padding: '8px 14px', borderBottom: '1px solid #f0f0f0', gap: '10px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flex: 1 }}>
          <div style={{ width: '20px', height: '20px', borderRadius: '4px', background: '#F4B400', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /></svg>
          </div>
          <span style={{ fontSize: '13px', fontWeight: 700, color: '#1a1a1a' }}>Q3 Investor Pitch</span>
          <Star size={13} style={{ color: '#ccc' }} />
          <span style={{ fontSize: '10px', color: '#999', display: 'flex', alignItems: 'center', gap: '3px' }}>
            <Check size={10} style={{ color: '#22c55e' }} /> Saved
          </span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <div style={{ display: 'flex', marginRight: '4px' }}>
            <div style={{ width: '22px', height: '22px', borderRadius: '50%', background: '#7C3AED', color: '#fff', fontSize: '8px', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid #fff', marginRight: '-6px', zIndex: 3 }}>SJ</div>
            <div style={{ width: '22px', height: '22px', borderRadius: '50%', background: '#0D9488', color: '#fff', fontSize: '8px', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid #fff', zIndex: 2 }}>AR</div>
          </div>
          <button style={{ display: 'flex', alignItems: 'center', gap: '4px', padding: '5px 12px', borderRadius: '14px', background: '#7C3AED', color: '#fff', fontSize: '10.5px', fontWeight: 600, border: 'none', cursor: 'default' }}>
            <Play size={10} fill="#fff" /> Present
          </button>
          <button style={{ padding: '5px 12px', borderRadius: '14px', background: '#fff', color: '#555', fontSize: '10.5px', fontWeight: 600, border: '1px solid #e8e8e8', cursor: 'default' }}>Share</button>
          <HelpCircle size={14} style={{ color: '#999' }} />
          <Settings size={14} style={{ color: '#999' }} />
          <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: '#7C3AED', color: '#fff', fontSize: '9px', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>AM</div>
        </div>
      </div>

      {/* Toolbar */}
      <div style={{ display: 'flex', alignItems: 'center', padding: '4px 14px', borderBottom: '1px solid #f0f0f0', gap: '3px', overflow: 'hidden' }}>
        <ToolBtn><Undo2 size={12} /></ToolBtn>
        <ToolBtn><Redo2 size={12} /></ToolBtn>
        <div style={{ display: 'flex', alignItems: 'center', gap: '2px', padding: '3px 8px', borderRadius: '4px', border: '1px solid #e8e8e8', fontSize: '9.5px', color: '#555' }}>
          <Plus size={9} /> New slide
        </div>
        <Divider />
        <DropdownBtn label="100%" />
        <ToolBtn><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /></svg></ToolBtn>
        <ToolBtn><Image size={12} /></ToolBtn>
        <ToolBtn><Type size={12} /></ToolBtn>
        <Divider />
        <DropdownBtn label="Poppins" />
        <DropdownBtn label="18" width="30px" />
        <ToolBtn><Bold size={12} /></ToolBtn>
        <ToolBtn><Italic size={12} /></ToolBtn>
        <ToolBtn><Underline size={12} /></ToolBtn>
        <ToolBtn><span style={{ width: '12px', height: '12px', borderBottom: '3px solid #1a1a1a', borderRadius: '1px', display: 'inline-block' }} /></ToolBtn>
        <Divider />
        <ToolBtn><AlignLeft size={12} /></ToolBtn>
        <DropdownBtn label="Layout" />
      </div>

      {/* Body: thumbnails + canvas */}
      <div style={{ flex: 1, display: 'flex', overflow: 'hidden' }}>
        {/* Slide thumbnails */}
        <div style={{ width: '80px', borderRight: '1px solid #f0f0f0', padding: '10px 8px', display: 'flex', flexDirection: 'column', gap: '6px', background: '#fafafa', overflowY: 'auto' }}>
          {THUMBS.map((Thumb, i) => (
            <div key={i} onClick={() => setActiveSlide(i)} style={{ display: 'flex', alignItems: 'center', gap: '4px', cursor: 'pointer' }}>
              <span style={{ fontSize: '8px', color: activeSlide === i ? '#7C3AED' : '#aaa', width: '10px', textAlign: 'right', fontWeight: activeSlide === i ? 700 : 400 }}>{i + 1}</span>
              <div style={{ width: '54px', height: '36px', flexShrink: 0, borderRadius: '4px', overflow: 'hidden', border: activeSlide === i ? '2px solid #7C3AED' : '2px solid transparent', transition: 'border-color 0.15s' }}>
                <Thumb />
              </div>
            </div>
          ))}
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginTop: '2px' }}>
            <span style={{ width: '10px' }} />
            <div style={{ width: '54px', height: '24px', borderRadius: '4px', border: '1px dashed #ccc', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Plus size={10} style={{ color: '#aaa' }} />
            </div>
          </div>
        </div>

        {/* Active slide canvas */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', background: '#E8E8E8', padding: '14px', overflow: 'hidden' }}>
          <div style={{ flex: 1, borderRadius: '4px', boxShadow: '0 2px 12px rgba(0,0,0,0.1)', overflow: 'hidden' }}>
            <ActiveCanvas />
          </div>
          {/* Speaker notes bar */}
          <div style={{ marginTop: '8px', padding: '6px 12px', background: '#fff', borderRadius: '4px', border: '1px solid #e8e8e8', fontSize: '9.5px', color: '#bbb' }}>
            Click to add speaker notes
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Toolbar helpers ─── */
function ToolBtn({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ width: '24px', height: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '4px', color: '#555', cursor: 'default' }}>
      {children}
    </div>
  );
}
function DropdownBtn({ label, width }: { label: string; width?: string }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '2px', padding: '3px 6px', borderRadius: '4px', border: '1px solid #e8e8e8', fontSize: '9.5px', color: '#555', cursor: 'default', whiteSpace: 'nowrap', width: width || 'auto' }}>
      {label}
      <ChevronDown size={9} style={{ color: '#999' }} />
    </div>
  );
}
function Divider() {
  return <div style={{ width: '1px', height: '18px', background: '#e8e8e8', margin: '0 4px' }} />;
}
