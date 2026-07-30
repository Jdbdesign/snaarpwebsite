'use client';

import { Star, HelpCircle, Settings, Undo2, Redo2, Printer, PaintBucket, Bold, Italic, Underline, AlignLeft, AlignCenter, AlignRight, AlignJustify, List, ListOrdered, Link, Image, MessageSquare, ChevronDown, Minus, Plus, Check } from 'lucide-react';

export function DocumentPreviewMockup() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', background: '#fff' }}>
      {/* Title bar */}
      <div style={{ display: 'flex', alignItems: 'center', padding: '8px 14px', borderBottom: '1px solid #f0f0f0', gap: '10px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flex: 1 }}>
          <div style={{ width: '20px', height: '20px', borderRadius: '4px', background: '#4285F4', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /></svg>
          </div>
          <span style={{ fontSize: '13px', fontWeight: 700, color: '#1a1a1a' }}>Q3 Marketing Plan</span>
          <Star size={13} style={{ color: '#ccc', cursor: 'default' }} />
          <span style={{ fontSize: '10px', color: '#999', display: 'flex', alignItems: 'center', gap: '3px' }}>
            <Check size={10} style={{ color: '#22c55e' }} /> All changes saved
          </span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          {/* Collaborator avatars */}
          <div style={{ display: 'flex', marginRight: '4px' }}>
            <div style={{ width: '22px', height: '22px', borderRadius: '50%', background: '#7C3AED', color: '#fff', fontSize: '8px', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid #fff', marginRight: '-6px', zIndex: 3 }}>SJ</div>
            <div style={{ width: '22px', height: '22px', borderRadius: '50%', background: '#0D9488', color: '#fff', fontSize: '8px', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid #fff', marginRight: '-6px', zIndex: 2 }}>AR</div>
            <div style={{ width: '22px', height: '22px', borderRadius: '50%', background: '#E11D74', color: '#fff', fontSize: '8px', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid #fff', zIndex: 1 }}>DT</div>
          </div>
          <button style={{ padding: '5px 12px', borderRadius: '14px', background: '#7C3AED', color: '#fff', fontSize: '10.5px', fontWeight: 600, border: 'none', cursor: 'default' }}>Share</button>
          <HelpCircle size={14} style={{ color: '#999' }} />
          <Settings size={14} style={{ color: '#999' }} />
          <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: '#7C3AED', color: '#fff', fontSize: '9px', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>AM</div>
        </div>
      </div>

      {/* Toolbar */}
      <div style={{ display: 'flex', alignItems: 'center', padding: '4px 14px', borderBottom: '1px solid #f0f0f0', gap: '2px', flexWrap: 'nowrap', overflow: 'hidden' }}>
        <ToolBtn><Undo2 size={12} /></ToolBtn>
        <ToolBtn><Redo2 size={12} /></ToolBtn>
        <ToolBtn><Printer size={12} /></ToolBtn>
        <ToolBtn><PaintBucket size={12} /></ToolBtn>
        <Divider />
        <DropdownBtn label="Normal text" />
        <DropdownBtn label="Poppins" />
        <DropdownBtn label="11" width="32px" />
        <Divider />
        <ToolBtn><Bold size={12} /></ToolBtn>
        <ToolBtn><Italic size={12} /></ToolBtn>
        <ToolBtn><Underline size={12} /></ToolBtn>
        <ToolBtn><span style={{ width: '12px', height: '12px', display: 'inline-block', borderBottom: '3px solid #1a1a1a', borderRadius: '1px' }} /></ToolBtn>
        <ToolBtn><span style={{ width: '12px', height: '12px', display: 'inline-block', background: '#FEF08A', borderRadius: '2px' }} /></ToolBtn>
        <Divider />
        <ToolBtn><AlignLeft size={12} /></ToolBtn>
        <ToolBtn><AlignCenter size={12} /></ToolBtn>
        <ToolBtn><AlignRight size={12} /></ToolBtn>
        <ToolBtn><AlignJustify size={12} /></ToolBtn>
        <Divider />
        <ToolBtn><List size={12} /></ToolBtn>
        <ToolBtn><ListOrdered size={12} /></ToolBtn>
        <ToolBtn><Minus size={12} /></ToolBtn>
        <ToolBtn><Plus size={12} /></ToolBtn>
        <Divider />
        <ToolBtn><Link size={12} /></ToolBtn>
        <ToolBtn><Image size={12} /></ToolBtn>
        <ToolBtn><MessageSquare size={12} /></ToolBtn>
      </div>

      {/* Document canvas */}
      <div style={{ flex: 1, background: '#F8F9FA', display: 'flex', justifyContent: 'center', padding: '20px 16px', overflow: 'hidden' }}>
        <div style={{ width: '100%', maxWidth: '560px', background: '#fff', borderRadius: '2px', boxShadow: '0 1px 3px rgba(0,0,0,0.08)', padding: '40px 50px', position: 'relative', fontSize: '11px', lineHeight: 1.7, color: '#333' }}>

          {/* Title */}
          <h1 style={{ fontSize: '22px', fontWeight: 700, color: '#1a1a1a', margin: '0 0 4px', letterSpacing: '-0.02em' }}>Q3 Marketing Plan</h1>
          <p style={{ fontSize: '9.5px', color: '#999', margin: '0 0 18px' }}>Last edited by Sarah Jenkins · 2 minutes ago</p>

          {/* Intro paragraph */}
          <p style={{ margin: '0 0 12px' }}>
            This document outlines our marketing priorities for Q3 2026, focusing on brand awareness expansion, product-led growth initiatives, and partnership development across key verticals.
          </p>
          <p style={{ margin: '0 0 12px' }}>
            Our team will coordinate cross-functional campaigns to drive qualified leads while maintaining cost efficiency across all channels.
          </p>

          {/* Collaborator cursor */}
          <div style={{ position: 'relative', display: 'inline' }}>
            <span style={{ position: 'absolute', left: '180px', top: '-2px', width: '2px', height: '14px', background: '#7C3AED', borderRadius: '1px' }} />
            <span style={{ position: 'absolute', left: '172px', top: '-14px', fontSize: '7px', fontWeight: 600, color: '#fff', background: '#7C3AED', padding: '1px 5px', borderRadius: '3px', whiteSpace: 'nowrap' }}>Sarah Jenkins</span>
          </div>

          {/* Subheading */}
          <h2 style={{ fontSize: '14px', fontWeight: 700, color: '#1a1a1a', margin: '20px 0 8px' }}>Key Objectives</h2>

          {/* Bullet list */}
          <ul style={{ margin: '0 0 14px', paddingLeft: '16px' }}>
            <li style={{ marginBottom: '4px' }}>Increase organic traffic by 35% through SEO and content strategy</li>
            <li style={{ marginBottom: '4px' }}>Launch product-led onboarding flow targeting mid-market accounts</li>
            <li style={{ marginBottom: '4px' }}>Establish 3 new channel partnerships in financial services</li>
            <li style={{ marginBottom: '4px' }}>Reduce CAC by 20% via improved attribution modelling</li>
          </ul>

          {/* Highlighted text with comment */}
          <p style={{ margin: '0 0 12px', position: 'relative' }}>
            The budget allocation for Q3 will prioritise{' '}
            <span style={{ background: '#FEF9C3', padding: '1px 2px', borderRadius: '2px' }}>digital advertising spend of approximately £48,000 across paid search and social channels</span>
            , with measurable ROI targets reviewed bi-weekly.
          </p>

          {/* Margin comment */}
          <div style={{ position: 'absolute', right: '-8px', top: '290px', width: '140px', background: '#fff', border: '1px solid #e8e5f0', borderRadius: '8px', padding: '8px 10px', boxShadow: '0 2px 8px -2px rgba(0,0,0,0.08)', fontSize: '9px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '5px', marginBottom: '4px' }}>
              <div style={{ width: '16px', height: '16px', borderRadius: '50%', background: '#0D9488', color: '#fff', fontSize: '6.5px', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>AR</div>
              <span style={{ fontWeight: 600, color: '#1a1a1a' }}>Alex Rivera</span>
            </div>
            <p style={{ margin: '0 0 3px', color: '#555', lineHeight: 1.4 }}>Can we get updated numbers here before Friday?</p>
            <span style={{ fontSize: '8px', color: '#aaa' }}>2h ago</span>
          </div>

          <p style={{ margin: '0' }}>
            Weekly stand-ups will ensure alignment between marketing, sales, and product teams throughout the quarter.
          </p>
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
