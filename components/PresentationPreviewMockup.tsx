'use client';

import { Star, HelpCircle, Settings, Undo2, Redo2, Bold, Italic, Underline, AlignLeft, ChevronDown, Check, Plus, Play, Image, Type } from 'lucide-react';

/* ─── Slide thumbnail mini-renderers ─── */
function ThumbTitle() {
  return (
    <div style={{ width: '100%', height: '100%', background: 'linear-gradient(135deg, #7C3AED 0%, #6D28D9 100%)', borderRadius: '3px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '6px' }}>
      <div style={{ width: '60%', height: '4px', background: 'rgba(255,255,255,0.9)', borderRadius: '2px', marginBottom: '3px' }} />
      <div style={{ width: '40%', height: '2.5px', background: 'rgba(255,255,255,0.5)', borderRadius: '2px' }} />
    </div>
  );
}
function ThumbAgenda() {
  return (
    <div style={{ width: '100%', height: '100%', background: '#fff', borderRadius: '3px', border: '1px solid #f0f0f0', padding: '5px 7px', display: 'flex', flexDirection: 'column', gap: '2.5px', justifyContent: 'center' }}>
      <div style={{ width: '45%', height: '3px', background: '#1a1a1a', borderRadius: '1px' }} />
      <div style={{ width: '70%', height: '2px', background: '#ddd', borderRadius: '1px' }} />
      <div style={{ width: '60%', height: '2px', background: '#ddd', borderRadius: '1px' }} />
      <div style={{ width: '65%', height: '2px', background: '#ddd', borderRadius: '1px' }} />
    </div>
  );
}
function ThumbChart() {
  return (
    <div style={{ width: '100%', height: '100%', background: '#fff', borderRadius: '3px', border: '2px solid #7C3AED', padding: '4px 6px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', gap: '0' }}>
      <div style={{ width: '50%', height: '2.5px', background: '#1a1a1a', borderRadius: '1px', marginBottom: '3px' }} />
      <div style={{ display: 'flex', alignItems: 'flex-end', gap: '3px', flex: 1, paddingTop: '2px' }}>
        <div style={{ flex: 1, height: '55%', background: '#7C3AED', borderRadius: '1px' }} />
        <div style={{ flex: 1, height: '75%', background: '#0D9488', borderRadius: '1px' }} />
        <div style={{ flex: 1, height: '45%', background: '#D97706', borderRadius: '1px' }} />
        <div style={{ flex: 1, height: '90%', background: '#E11D74', borderRadius: '1px' }} />
      </div>
    </div>
  );
}
function ThumbTeam() {
  return (
    <div style={{ width: '100%', height: '100%', background: '#fff', borderRadius: '3px', border: '1px solid #f0f0f0', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px' }}>
      <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#7C3AED' }} />
      <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#0D9488' }} />
      <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#E11D74' }} />
    </div>
  );
}
function ThumbThanks() {
  return (
    <div style={{ width: '100%', height: '100%', background: 'linear-gradient(135deg, #6D28D9 0%, #7C3AED 100%)', borderRadius: '3px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ width: '50%', height: '3.5px', background: 'rgba(255,255,255,0.85)', borderRadius: '2px' }} />
    </div>
  );
}

const THUMBS = [ThumbTitle, ThumbAgenda, ThumbChart, ThumbTeam, ThumbThanks];
const ACTIVE_SLIDE = 2; // chart slide

export function PresentationPreviewMockup() {
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
        <div style={{ display: 'flex', alignItems: 'center', gap: '2px', padding: '3px 8px', borderRadius: '4px', border: '1px solid #e8e8e8', fontSize: '9.5px', color: '#555', cursor: 'default' }}>
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
        <div style={{ width: '80px', borderRight: '1px solid #f0f0f0', padding: '10px 8px', display: 'flex', flexDirection: 'column', gap: '6px', background: '#fafafa', overflowY: 'hidden' }}>
          {THUMBS.map((Thumb, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              <span style={{ fontSize: '8px', color: '#aaa', width: '10px', textAlign: 'right' }}>{i + 1}</span>
              <div style={{ width: '54px', height: '36px', flexShrink: 0 }}>
                <Thumb />
              </div>
            </div>
          ))}
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginTop: '2px' }}>
            <span style={{ width: '10px' }} />
            <div style={{ width: '54px', height: '24px', borderRadius: '4px', border: '1px dashed #ccc', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'default' }}>
              <Plus size={10} style={{ color: '#aaa' }} />
            </div>
          </div>
        </div>

        {/* Active slide canvas */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', background: '#E8E8E8', padding: '16px', overflow: 'hidden' }}>
          <div style={{ flex: 1, background: '#fff', borderRadius: '4px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)', position: 'relative', padding: '28px 32px', display: 'flex', flexDirection: 'column' }}>

            {/* Slide heading */}
            <div style={{ marginBottom: '4px' }}>
              <h2 style={{ fontSize: '18px', fontWeight: 700, color: '#1a1a1a', margin: 0, letterSpacing: '-0.02em' }}>Q3 Revenue Growth</h2>
              <div style={{ width: '60px', height: '3px', background: '#7C3AED', borderRadius: '2px', marginTop: '5px' }} />
            </div>

            {/* Bar chart */}
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', paddingTop: '12px', position: 'relative' }}>
              {/* Selection handles */}
              <div style={{ position: 'absolute', top: '8px', left: '-4px', width: '7px', height: '7px', border: '2px solid #7C3AED', background: '#fff', borderRadius: '1px' }} />
              <div style={{ position: 'absolute', top: '8px', right: '-4px', width: '7px', height: '7px', border: '2px solid #7C3AED', background: '#fff', borderRadius: '1px' }} />
              <div style={{ position: 'absolute', bottom: '30px', left: '-4px', width: '7px', height: '7px', border: '2px solid #7C3AED', background: '#fff', borderRadius: '1px' }} />
              <div style={{ position: 'absolute', bottom: '30px', right: '-4px', width: '7px', height: '7px', border: '2px solid #7C3AED', background: '#fff', borderRadius: '1px' }} />

              {/* Bars */}
              <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'center', gap: '20px', flex: 1, paddingBottom: '4px' }}>
                {[
                  { label: 'Jan', value: '£42k', height: '50%', color: '#7C3AED' },
                  { label: 'Feb', value: '£58k', height: '68%', color: '#0D9488' },
                  { label: 'Mar', value: '£51k', height: '58%', color: '#D97706' },
                  { label: 'Apr', value: '£74k', height: '88%', color: '#E11D74' },
                  { label: 'May', value: '£82k', height: '96%', color: '#7C3AED' },
                ].map((bar) => (
                  <div key={bar.label} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', width: '44px' }}>
                    <span style={{ fontSize: '9px', fontWeight: 600, color: '#333' }}>{bar.value}</span>
                    <div style={{ width: '32px', height: bar.height, background: bar.color, borderRadius: '4px 4px 0 0', minHeight: '20px' }} />
                    <span style={{ fontSize: '8.5px', color: '#888' }}>{bar.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Source line */}
            <div style={{ fontSize: '8px', color: '#bbb', textAlign: 'right', marginTop: '6px' }}>Source: Internal Sales Data</div>
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
