'use client';

import { useState } from 'react';
import { FileText, Upload, Wrench, Sparkles, Layers, Settings, Search, Menu, LayoutGrid, List, ClipboardList, RefreshCw, Pencil, Globe, PenLine, File, EyeOff, FileType, Image as ImageIcon, Table, Presentation, Code2, ArrowLeft, CheckCircle2, Droplet, Type, Highlighter, Square, Circle, Signature, StickyNote, Undo2, Redo2, ZoomIn, ZoomOut, Download, Trash2 } from 'lucide-react';
import { Coachmark } from '@/components/Coachmark';

const PDF_NAV = [
  { label: 'My Files', Icon: FileText },
  { label: 'Upload', Icon: Upload },
  { label: 'Tools', Icon: Wrench },
  { label: 'AI Tools', Icon: Sparkles },
  { label: 'Operations', Icon: Layers },
];

const PDF_ACTIONS = [
  { label: 'Convert PDF', Icon: RefreshCw, bg: '#eef2ff', color: '#4f46e5' },
  { label: 'Edit PDF', Icon: Pencil, bg: '#ecfdf5', color: '#dc2626' },
  { label: 'Translate PDF', Icon: Globe, bg: '#faf5ff', color: '#2563eb' },
  { label: 'Sign PDF', Icon: PenLine, bg: '#fff7ed', color: '#f59e0b' },
];

const TOOL_TABS = ['All tools', 'PDF tools', 'Convert to PDF', 'Image tools'];

const AI_TOOLS = [
  { title: 'Remove Watermark', desc: 'Clean up your images and PDF files with AI.', Icon: Droplet, banner: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)' },
  { title: 'Translate PDF', desc: 'Break language barriers in just a few clicks.', Icon: Globe, banner: 'linear-gradient(135deg, #a855f7 0%, #7C3AED 100%)' },
];

const TOOL_SECTIONS = [
  {
    group: 'PDF tools',
    tools: [
      { title: 'Edit PDF', desc: 'Add, edit, or remove text, images, and other elements.', Icon: Pencil, color: '#7C3AED' },
      { title: 'Redact Document', desc: 'Permanently remove sensitive information before sharing a PDF.', Icon: EyeOff, color: '#6366f1' },
      { title: 'Sign PDF', desc: 'Create and add an electronic signature to your document.', Icon: PenLine, color: '#ec4899' },
      { title: 'PDF to Word', desc: 'Convert your PDF into an editable Word document.', Icon: FileType, color: '#2563eb' },
      { title: 'PDF to PNG', desc: 'Turn PDF into a high-quality PNG image.', Icon: ImageIcon, color: '#10b981' },
      { title: 'PDF to Excel', desc: 'Extract tables from your PDF into an Excel spreadsheet.', Icon: Table, color: '#059669' },
      { title: 'PDF to JPG', desc: 'Export PDF pages as high-quality JPG images.', Icon: ImageIcon, color: '#a855f7' },
      { title: 'PDF to PPTX', desc: 'Convert PDF to PowerPoint presentations.', Icon: Presentation, color: '#ea580c' },
      { title: 'PDF to DOCX', desc: 'Convert PDF to Microsoft Word DOCX format.', Icon: FileType, color: '#2563eb' },
      { title: 'PDF to SVG', desc: 'Convert PDF pages to scalable vector graphics.', Icon: Code2, color: '#f59e0b' },
    ],
  },
  {
    group: 'Convert to PDF',
    tools: [
      { title: 'Word to PDF', desc: 'Convert Word documents to PDF format instantly.', Icon: FileType, color: '#2563eb' },
      { title: 'DOCX to PDF', desc: 'Convert DOCX documents to portable PDF format.', Icon: FileType, color: '#2563eb' },
      { title: 'SVG to PDF', desc: 'Convert SVG vector graphics to PDF.', Icon: Code2, color: '#f59e0b' },
    ],
  },
  {
    group: 'Image tools',
    tools: [
      { title: 'Image to PDF', desc: 'Convert images (PNG, JPG) to PDF documents.', Icon: ImageIcon, color: '#ec4899' },
    ],
  },
];

export function PdfPreviewMockup({ onEnd }: { onEnd?: () => void }) {
  const [activeNav, setActiveNav] = useState('My Files');
  const [tour, setTour] = useState(1); // 1=My Files, 2=Upload, 3=Editor, 4=Tools, 5=AI Tools, 0=done
  const [showEditor, setShowEditor] = useState(false);
  const [filter, setFilter] = useState('All');
  const [layout, setLayout] = useState<'list' | 'grid'>('grid');
  const [toolTab, setToolTab] = useState('All tools');
  const [openTool, setOpenTool] = useState<{ title: string; desc: string } | null>(null);

  // Full-screen Edit PDF interface
  if (showEditor) {
    const editTools = [
      { Icon: Type, label: 'Text' },
      { Icon: Highlighter, label: 'Highlight' },
      { Icon: Square, label: 'Rectangle' },
      { Icon: Circle, label: 'Circle' },
      { Icon: Signature, label: 'Sign' },
      { Icon: StickyNote, label: 'Note' },
      { Icon: ImageIcon, label: 'Image' },
    ];
    return (
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%', width: '100%', fontFamily: 'Poppins, sans-serif', color: '#1a1a1a', overflow: 'hidden', background: '#f1f2f4', position: 'relative' }}>
        {/* Editor tour coachmark */}
        {tour === 3 && (
          <div style={{ position: 'absolute', top: '150px', left: '50%', transform: 'translateX(-50%)', zIndex: 9999 }}>
            <Coachmark
              visible
              title="Edit your PDF"
              subtitle="Add text, highlights, shapes, and signatures right on the page, then Save or Download."
              onNext={() => { setShowEditor(false); setActiveNav('Tools'); setTour(4); }}
              top="0" left="0" arrowSide="top" arrowOffset="20px" buttonLabel="Next"
            />
          </div>
        )}

        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '10px 18px', background: '#fff', borderBottom: '1px solid #eee' }}>
          <div onClick={() => { setShowEditor(false); setActiveNav('My Files'); }} style={{ display: 'flex', alignItems: 'center', gap: '5px', color: '#7C3AED', fontSize: '11.5px', fontWeight: 500, cursor: 'pointer' }}>
            <ArrowLeft size={14} /> Back
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '7px', marginLeft: '6px' }}>
            <div style={{ width: '20px', height: '24px', borderRadius: '3px', background: '#fee2e2', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><File size={11} style={{ color: '#dc2626' }} /></div>
            <span style={{ fontSize: '12.5px', fontWeight: 600, color: '#1a1a1a' }}>Q3-Report.pdf</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginLeft: 'auto', color: '#888' }}>
            <Undo2 size={15} /> <Redo2 size={15} />
            <div style={{ width: '1px', height: '16px', background: '#e5e5e5' }} />
            <ZoomOut size={15} /> <span style={{ fontSize: '10px', color: '#555' }}>100%</span> <ZoomIn size={15} />
            <div style={{ width: '1px', height: '16px', background: '#e5e5e5' }} />
            <button style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', padding: '6px 12px', background: '#fff', color: '#555', border: '1px solid #e5e5e5', borderRadius: '16px', fontSize: '10.5px', fontWeight: 600, cursor: 'pointer' }}><Download size={12} /> Download</button>
            <button style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', padding: '6px 14px', background: '#7C3AED', color: '#fff', border: 'none', borderRadius: '16px', fontSize: '10.5px', fontWeight: 600, cursor: 'pointer' }}>Save</button>
          </div>
        </div>

        <div style={{ flex: 1, display: 'flex', overflow: 'hidden' }}>
          {/* Left toolbar */}
          <div style={{ width: '58px', flexShrink: 0, background: '#fff', borderRight: '1px solid #eee', padding: '12px 0', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
            {editTools.map((t, i) => (
              <div key={t.label} title={t.label} style={{ width: '38px', height: '38px', borderRadius: '9px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', background: i === 0 ? '#f3efff' : 'transparent', color: i === 0 ? '#7C3AED' : '#666' }}>
                <t.Icon size={16} />
              </div>
            ))}
          </div>

          {/* Document canvas */}
          <div style={{ flex: 1, overflowY: 'auto', display: 'flex', justifyContent: 'center', padding: '24px' }}>
            <div style={{ width: '420px', background: '#fff', borderRadius: '4px', boxShadow: '0 6px 24px -8px rgba(0,0,0,0.15)', padding: '38px 44px', minHeight: '540px' }}>
              <div style={{ fontSize: '18px', fontWeight: 700, color: '#1a1a1a', marginBottom: '4px' }}>Q3 Business Report</div>
              <div style={{ fontSize: '10px', color: '#999', marginBottom: '20px' }}>Prepared by David Miller · September 2026</div>

              <div style={{ fontSize: '12px', fontWeight: 700, color: '#1a1a1a', marginBottom: '8px' }}>Executive Summary</div>
              {[100, 96, 92, 78].map((w, i) => (
                <div key={i} style={{ height: '7px', width: `${w}%`, borderRadius: '3px', background: '#eceef1', marginBottom: '7px' }} />
              ))}

              <div style={{ height: '110px', borderRadius: '6px', background: '#f6f4fd', border: '1px solid #ece7fb', margin: '18px 0', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-around', padding: '14px' }}>
                {[52, 70, 44, 84, 62].map((h, i) => (
                  <div key={i} style={{ width: '26px', height: `${h}%`, borderRadius: '3px 3px 0 0', background: ['#7C3AED', '#0D9488', '#D97706', '#E11D74', '#2563EB'][i] }} />
                ))}
              </div>

              <div style={{ fontSize: '12px', fontWeight: 700, color: '#1a1a1a', marginBottom: '8px' }}>Key Highlights</div>
              {[100, 90, 95, 70, 88].map((w, i) => (
                <div key={i} style={{ height: '7px', width: `${w}%`, borderRadius: '3px', background: '#eceef1', marginBottom: '7px' }} />
              ))}
            </div>
          </div>

          {/* Right properties panel */}
          <div style={{ width: '190px', flexShrink: 0, background: '#fff', borderLeft: '1px solid #eee', padding: '16px 14px', overflowY: 'auto' }}>
            <div style={{ fontSize: '11.5px', fontWeight: 700, color: '#1a1a1a', marginBottom: '12px' }}>Text Properties</div>
            <div style={{ fontSize: '9px', color: '#999', marginBottom: '5px' }}>Font</div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '7px 10px', border: '1px solid #eee', borderRadius: '7px', fontSize: '10px', color: '#555', marginBottom: '12px' }}>Inter <span style={{ color: '#bbb' }}>▾</span></div>
            <div style={{ fontSize: '9px', color: '#999', marginBottom: '5px' }}>Size</div>
            <div style={{ display: 'flex', gap: '6px', marginBottom: '12px' }}>
              <div style={{ flex: 1, padding: '7px 10px', border: '1px solid #eee', borderRadius: '7px', fontSize: '10px', color: '#555' }}>14</div>
              <div style={{ padding: '7px 10px', border: '1px solid #eee', borderRadius: '7px', fontSize: '10px', color: '#555', fontWeight: 700 }}>B</div>
              <div style={{ padding: '7px 10px', border: '1px solid #eee', borderRadius: '7px', fontSize: '10px', color: '#555', fontStyle: 'italic' }}>I</div>
            </div>
            <div style={{ fontSize: '9px', color: '#999', marginBottom: '6px' }}>Color</div>
            <div style={{ display: 'flex', gap: '7px', marginBottom: '18px' }}>
              {['#1a1a1a', '#7C3AED', '#2563eb', '#dc2626', '#059669'].map((c, i) => (
                <div key={c} style={{ width: '20px', height: '20px', borderRadius: '50%', background: c, boxShadow: i === 0 ? '0 0 0 2px #7C3AED' : 'none' }} />
              ))}
            </div>
            <div style={{ borderTop: '1px solid #f0f0f0', paddingTop: '14px' }}>
              <div style={{ fontSize: '11.5px', fontWeight: 700, color: '#1a1a1a', marginBottom: '10px' }}>Pages</div>
              {[1, 2, 3].map((p) => (
                <div key={p} style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '6px', borderRadius: '7px', background: p === 1 ? '#f3efff' : 'transparent', marginBottom: '4px', cursor: 'pointer' }}>
                  <div style={{ width: '22px', height: '28px', borderRadius: '2px', background: '#fff', border: '1px solid #e5e5e5' }} />
                  <span style={{ fontSize: '10px', color: p === 1 ? '#7C3AED' : '#666', fontWeight: p === 1 ? 600 : 400 }}>Page {p}</span>
                  <Trash2 size={11} style={{ color: '#ccc', marginLeft: 'auto' }} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Full-screen tool detail page (covers sidebar)
  if (openTool) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%', width: '100%', fontFamily: 'Poppins, sans-serif', color: '#1a1a1a', overflow: 'hidden', background: '#f7f8fa' }}>
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', padding: '14px 26px', background: '#fff', borderBottom: '1px solid #f0f0f0', borderTop: '3px solid #3a2a1a' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{ width: '26px', height: '26px', borderRadius: '8px', background: '#7C3AED', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <FileText size={15} style={{ color: '#fff' }} />
            </div>
            <span style={{ fontSize: '15px', fontWeight: 700, color: '#1a1a1a' }}>Snaarp <span style={{ color: '#7C3AED' }}>PDF</span></span>
          </div>
          <div onClick={() => setOpenTool(null)} style={{ display: 'flex', alignItems: 'center', gap: '6px', marginLeft: 'auto', color: '#7C3AED', fontSize: '12px', fontWeight: 500, cursor: 'pointer' }}>
            <ArrowLeft size={14} /> Back to Tools
          </div>
        </div>

        {/* Centered content */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '22px' }}>
          <div style={{ fontSize: '28px', fontWeight: 700, color: '#1a1a1a', marginBottom: '8px' }}>{openTool.title}</div>
          <div style={{ fontSize: '13px', color: '#777', marginBottom: '28px' }}>{openTool.desc}</div>

          <div style={{ width: '330px', border: '1.5px dashed #d5d7dd', borderRadius: '12px', padding: '34px 24px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
            <div style={{ width: '46px', height: '46px', borderRadius: '12px', background: '#EDE9FE', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
              <Upload size={20} style={{ color: '#7C3AED' }} />
            </div>
            <div style={{ fontSize: '14px', fontWeight: 700, color: '#1a1a1a', marginBottom: '5px' }}>Drop your PDF Files here</div>
            <div style={{ fontSize: '12px', color: '#999', marginBottom: '4px' }}>or <span style={{ color: '#7C3AED', fontWeight: 500 }}>click to browse</span></div>
            <div style={{ fontSize: '10.5px', color: '#bbb' }}>Accepted: .pdf</div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginTop: '26px' }}>
            {['Privacy-focused', 'Easy to use', 'Lightning-fast'].map((f) => (
              <div key={f} style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '11.5px', color: '#555' }}>
                <CheckCircle2 size={14} style={{ color: '#22c55e' }} /> {f}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{ display: 'flex', height: '100%', width: '100%', fontFamily: 'Poppins, sans-serif', fontSize: '11px', color: '#1a1a1a', overflow: 'hidden', background: '#fff', position: 'relative' }}>
      {/* My Files intro coachmark */}
      {tour === 1 && activeNav === 'My Files' && (
        <div style={{ position: 'absolute', top: '270px', left: '50%', transform: 'translateX(-40px)', zIndex: 9999 }}>
          <Coachmark
            visible
            title="Snaarp PDF"
            subtitle="Convert, edit, translate, and sign PDFs — all your documents in one place."
            onNext={() => { setActiveNav('Upload'); setTour(2); }}
            top="0" left="0" arrowSide="top" arrowOffset="20px" buttonLabel="Next"
          />
        </div>
      )}

      {/* Upload pointer coachmark */}
      {tour === 2 && activeNav === 'Upload' && (
        <div style={{ position: 'absolute', top: '160px', left: '620px', zIndex: 9999 }}>
          <Coachmark
            visible
            title="Upload your PDF"
            subtitle="Drop a PDF here or click to browse, then start editing it."
            onNext={() => { setShowEditor(true); setTour(3); }}
            top="0" left="0" arrowSide="left" arrowOffset="24px" buttonLabel="Next"
          />
        </div>
      )}

      {/* Tools intro coachmark */}
      {tour === 4 && activeNav === 'Tools' && (
        <div style={{ position: 'absolute', top: '230px', left: '50%', transform: 'translateX(-60px)', zIndex: 9999 }}>
          <Coachmark
            visible
            title="All your PDF tools"
            subtitle="Convert, sign, redact, and transform PDFs — every tool in one place."
            onNext={() => { setActiveNav('AI Tools'); setTour(5); }}
            top="0" left="0" arrowSide="top" arrowOffset="20px" buttonLabel="Next"
          />
        </div>
      )}

      {/* AI Tools intro coachmark */}
      {tour === 5 && activeNav === 'AI Tools' && (
        <div style={{ position: 'absolute', top: '250px', left: '50%', transform: 'translateX(-60px)', zIndex: 9999 }}>
          <Coachmark
            visible
            title="AI-powered tools"
            subtitle="Remove watermarks and translate PDFs instantly with AI."
            onNext={() => { setTour(0); if (onEnd) onEnd(); }}
            top="0" left="0" arrowSide="top" arrowOffset="20px" buttonLabel="Done"
          />
        </div>
      )}

      {/* Sidebar */}
      <div style={{ width: '180px', flexShrink: 0, background: '#fff', borderRight: '1px solid #f0f0f0', padding: '14px 12px', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
        {/* Brand */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '9px', marginBottom: '22px', paddingLeft: '2px' }}>
          <Menu size={16} style={{ color: '#888' }} />
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <div style={{ width: '24px', height: '24px', borderRadius: '7px', background: '#7C3AED', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <FileText size={14} style={{ color: '#fff' }} />
            </div>
            <span style={{ fontSize: '15px', fontWeight: 700, color: '#1a1a1a' }}>PDF</span>
          </div>
        </div>

        {/* Nav */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '3px', flex: 1 }}>
          {PDF_NAV.map((item) => {
            const active = activeNav === item.label;
            return (
              <div key={item.label} onClick={() => setActiveNav(item.label)} style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '8px 11px', borderRadius: '8px', background: active ? '#f3efff' : 'transparent', color: active ? '#7C3AED' : '#555', fontWeight: active ? 600 : 500, fontSize: '11.5px', cursor: 'pointer' }}>
                <item.Icon size={15} />
                <span>{item.label}</span>
              </div>
            );
          })}
        </div>

        {/* Settings */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '8px 11px', borderRadius: '8px', color: '#555', fontSize: '11.5px', fontWeight: 500, cursor: 'pointer' }}>
          <Settings size={15} />
          <span>Settings</span>
        </div>
      </div>

      {/* Main */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
        {/* Top bar */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px', padding: '12px 22px', borderBottom: '1px solid #f0f0f0' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '8px 14px', background: '#f4f4f5', borderRadius: '20px', color: '#aaa', fontSize: '11px', flex: 1, maxWidth: '380px', margin: '0 auto' }}>
            <Search size={13} />
            <span>Search files...</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#888' }}>
            <ClipboardList size={16} />
            <LayoutGrid size={16} />
            <div style={{ width: '26px', height: '26px', borderRadius: '50%', background: '#EDE9FE', color: '#7C3AED', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px', fontWeight: 700 }}>Y</div>
          </div>
        </div>

        {/* Body - My Files */}
        {activeNav === 'My Files' && (
        <div style={{ flex: 1, overflow: 'hidden', padding: '22px 26px' }}>
          {/* Header row */}
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '18px' }}>
            <span style={{ fontSize: '22px', fontWeight: 700, color: '#1a1a1a' }}>My files</span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginLeft: 'auto' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '7px', padding: '7px 14px', background: '#f7f7f8', borderRadius: '18px', color: '#aaa', fontSize: '11px', width: '150px' }}>
                <Search size={12} />
                <span>Search files...</span>
              </div>
              <button style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '8px 16px', background: '#7C3AED', color: '#fff', border: 'none', borderRadius: '18px', fontSize: '11.5px', fontWeight: 600, cursor: 'pointer' }}>
                <Upload size={13} /> Upload file
              </button>
            </div>
          </div>

          {/* Action cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '14px', maxWidth: '560px', marginBottom: '22px' }}>
            {PDF_ACTIONS.map((a) => (
              <div key={a.label} style={{ background: a.bg, borderRadius: '12px', padding: '16px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '9px', cursor: 'pointer' }}>
                <a.Icon size={20} style={{ color: a.color }} />
                <span style={{ fontSize: '11px', fontWeight: 600, color: '#333' }}>{a.label}</span>
              </div>
            ))}
          </div>

          {/* Filter row */}
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '30px' }}>
            <div style={{ display: 'flex', gap: '6px' }}>
              <div onClick={() => setFilter('All')} style={{ padding: '4px 12px', borderRadius: '14px', fontSize: '10.5px', fontWeight: 600, cursor: 'pointer', background: filter === 'All' ? '#f3efff' : '#f5f5f5', color: filter === 'All' ? '#7C3AED' : '#888' }}>All 0</div>
              <div onClick={() => setFilter('PDF')} style={{ padding: '4px 12px', borderRadius: '14px', fontSize: '10.5px', fontWeight: 600, cursor: 'pointer', background: filter === 'PDF' ? '#f3efff' : '#f5f5f5', color: filter === 'PDF' ? '#7C3AED' : '#888' }}>PDF 0</div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginLeft: 'auto' }}>
              <div onClick={() => setLayout('list')} style={{ padding: '5px', borderRadius: '6px', cursor: 'pointer', background: layout === 'list' ? '#f3efff' : 'transparent', color: layout === 'list' ? '#7C3AED' : '#aaa', display: 'flex' }}><List size={14} /></div>
              <div onClick={() => setLayout('grid')} style={{ padding: '5px', borderRadius: '6px', cursor: 'pointer', background: layout === 'grid' ? '#f3efff' : 'transparent', color: layout === 'grid' ? '#7C3AED' : '#aaa', display: 'flex' }}><LayoutGrid size={14} /></div>
            </div>
          </div>

          {/* Empty state */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', paddingTop: '20px' }}>
            <div style={{ width: '54px', height: '54px', borderRadius: '12px', background: '#f4f4f5', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
              <File size={26} style={{ color: '#c4c4c4' }} strokeWidth={1.5} />
            </div>
            <div style={{ fontSize: '14px', fontWeight: 700, color: '#1a1a1a', marginBottom: '5px' }}>No files yet</div>
            <div style={{ fontSize: '11px', color: '#999' }}>Upload a PDF to get started</div>
          </div>
        </div>
        )}

        {/* Body - Upload */}
        {activeNav === 'Upload' && (
          <div style={{ flex: 1, overflow: 'hidden', padding: '22px 26px' }}>
            <div style={{ fontSize: '22px', fontWeight: 700, color: '#1a1a1a', marginBottom: '4px' }}>Upload PDF</div>
            <div style={{ fontSize: '12px', color: '#888', marginBottom: '22px' }}>Upload PDF files to view, edit, and manage them.</div>

            <div style={{ maxWidth: '430px', border: '1.5px dashed #dcdce0', borderRadius: '12px', padding: '38px 24px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
              <File size={38} style={{ color: '#c4c4c4' }} strokeWidth={1.5} />
              <div style={{ fontSize: '13px', fontWeight: 700, color: '#1a1a1a', marginTop: '14px', marginBottom: '5px' }}>Drop PDF Files Here</div>
              <div style={{ fontSize: '11px', color: '#999', marginBottom: '18px' }}>or <span style={{ color: '#7C3AED', fontWeight: 500 }}>click</span> to browse your files</div>
              <button onClick={() => setShowEditor(true)} style={{ padding: '10px 22px', background: '#7C3AED', color: '#fff', border: 'none', borderRadius: '10px', fontSize: '11px', fontWeight: 700, letterSpacing: '0.02em', cursor: 'pointer', textTransform: 'uppercase' }}>Upload PDF to Edit</button>
              <div style={{ fontSize: '10px', color: '#bbb', marginTop: '16px' }}>Maximum file size: 100MB</div>
            </div>
          </div>
        )}

        {/* Body - Tools */}
        {activeNav === 'Tools' && (
          <div style={{ flex: 1, overflowY: 'auto', padding: '22px 26px' }}>
            {/* Header row */}
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
              <span style={{ fontSize: '22px', fontWeight: 700, color: '#1a1a1a' }}>Tools</span>
              <button style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '8px 16px', background: '#7C3AED', color: '#fff', border: 'none', borderRadius: '18px', fontSize: '11.5px', fontWeight: 600, cursor: 'pointer', marginLeft: 'auto' }}>
                <Upload size={13} /> Upload file
              </button>
            </div>

            {/* Filter tabs */}
            <div style={{ display: 'flex', gap: '6px', marginBottom: '22px' }}>
              {TOOL_TABS.map((t) => {
                const active = toolTab === t;
                return (
                  <div key={t} onClick={() => setToolTab(t)} style={{ padding: '6px 14px', borderRadius: '16px', fontSize: '11px', fontWeight: 600, cursor: 'pointer', background: active ? '#f3efff' : '#f5f5f5', color: active ? '#7C3AED' : '#888' }}>{t}</div>
                );
              })}
            </div>

            {/* Sections */}
            {TOOL_SECTIONS.filter((s) => toolTab === 'All tools' || toolTab === s.group).map((section) => (
              <div key={section.group} style={{ marginBottom: '26px' }}>
                <div style={{ fontSize: '14px', fontWeight: 700, color: '#1a1a1a', marginBottom: '12px' }}>{section.group}</div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '14px' }}>
                  {section.tools.map((tool) => (
                    <div key={tool.title} onClick={() => setOpenTool({ title: tool.title, desc: tool.desc })} style={{ display: 'flex', alignItems: 'flex-start', gap: '11px', padding: '14px', borderRadius: '12px', border: '1px solid #f0f0f0', background: '#fff', cursor: 'pointer' }}>
                      <div style={{ width: '30px', height: '30px', borderRadius: '9px', background: tool.color, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <tool.Icon size={15} style={{ color: '#fff' }} />
                      </div>
                      <div style={{ minWidth: 0 }}>
                        <div style={{ fontSize: '12px', fontWeight: 600, color: '#1a1a1a', marginBottom: '4px' }}>{tool.title}</div>
                        <div style={{ fontSize: '10px', color: '#999', lineHeight: 1.5 }}>{tool.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Body - AI Tools */}
        {activeNav === 'AI Tools' && (
          <div style={{ flex: 1, overflowY: 'auto', padding: '22px 26px' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '22px' }}>
              <div>
                <div style={{ fontSize: '22px', fontWeight: 700, color: '#1a1a1a', marginBottom: '4px' }}>AI tools</div>
                <div style={{ fontSize: '11.5px', color: '#888' }}>Powered by artificial intelligence</div>
              </div>
              <button style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '8px 16px', background: '#7C3AED', color: '#fff', border: 'none', borderRadius: '18px', fontSize: '11.5px', fontWeight: 600, cursor: 'pointer', marginLeft: 'auto' }}>
                <Upload size={13} /> Upload file
              </button>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px', maxWidth: '520px' }}>
              {AI_TOOLS.map((tool) => (
                <div key={tool.title} style={{ borderRadius: '14px', border: '1px solid #f0f0f0', background: '#fff', overflow: 'hidden', cursor: 'pointer', boxShadow: '0 2px 8px -4px rgba(0,0,0,0.06)' }}>
                  <div style={{ height: '84px', background: tool.banner, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <tool.Icon size={30} style={{ color: 'rgba(255,255,255,0.92)' }} />
                  </div>
                  <div style={{ padding: '14px 16px 16px' }}>
                    <div style={{ fontSize: '13px', fontWeight: 700, color: '#1a1a1a', marginBottom: '5px' }}>{tool.title}</div>
                    <div style={{ fontSize: '10.5px', color: '#999', lineHeight: 1.5 }}>{tool.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Body - other nav placeholders */}
        {activeNav !== 'My Files' && activeNav !== 'Upload' && activeNav !== 'Tools' && activeNav !== 'AI Tools' && (
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '22px' }}>
            <div style={{ fontSize: '15px', fontWeight: 700, color: '#1a1a1a', marginBottom: '6px' }}>{activeNav}</div>
            <div style={{ fontSize: '11px', color: '#999' }}>This section is coming soon.</div>
          </div>
        )}
      </div>
    </div>
  );
}
