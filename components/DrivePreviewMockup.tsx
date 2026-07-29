'use client';

import { Search, ChevronDown, Plus, FolderOpen, Clock, Star, Trash2, Users, MoreHorizontal, Filter, Calendar, Settings, HelpCircle, LayoutGrid, LayoutList, Upload } from 'lucide-react';

const SIDEBAR_NAV = [
  { label: 'My Files', active: true },
  { label: 'Shared with Me', active: false },
  { label: 'Recent', active: false },
  { label: 'Starred', active: false },
  { label: 'Trash', active: false },
];

const FOLDERS_NAV = [
  { label: 'Marketing Assets', color: '#7C3AED' },
  { label: 'Client Contracts', color: '#F59E0B' },
  { label: 'Team Docs', color: '#0E9384' },
];

const FILES = [
  { name: 'Marketing Assets', type: 'folder', icon: '/assets/icons/drive-folder.svg', detail: '12 items', shared: false },
  { name: 'Client Contracts', type: 'folder', icon: '/assets/icons/drive-folder.svg', detail: '8 items', shared: false },
  { name: 'Q3 Financial Report.pdf', type: 'pdf', icon: '/assets/icons/drive-pdf.svg', detail: '2.4 MB · Edited 2d ago', shared: true },
  { name: 'Brand Guidelines.docx', type: 'doc', icon: '/assets/icons/drive-doc.svg', detail: '5.1 MB · Edited 5d ago', shared: false },
  { name: 'Product Roadmap.xlsx', type: 'sheet', icon: '/assets/icons/drive-sheet.svg', detail: '1.8 MB · Edited 1w ago', shared: true },
  { name: 'Team Photo.jpg', type: 'image', icon: '/assets/icons/drive-jpeg.svg', detail: '4.2 MB · Edited 3d ago', shared: false },
  { name: 'Onboarding Deck.pptx', type: 'pptx', icon: '/assets/icons/drive-pptx.svg', detail: '8.6 MB · Edited 1w ago', shared: false },
  { name: 'Meeting Notes.docx', type: 'doc', icon: '/assets/icons/drive-doc.svg', detail: '0.9 MB · Edited today', shared: false },
  { name: 'Team Docs', type: 'folder', icon: '/assets/icons/drive-folder.svg', detail: '6 items', shared: false },
  { name: 'Invoice Q2.pdf', type: 'pdf', icon: '/assets/icons/drive-pdf.svg', detail: '1.2 MB · Edited 4d ago', shared: false },
  { name: 'Design Mockups', type: 'folder', icon: '/assets/icons/drive-folder.svg', detail: '15 items', shared: true },
  { name: 'Sprint Retro.docx', type: 'doc', icon: '/assets/icons/drive-doc.svg', detail: '0.6 MB · Edited 1d ago', shared: false },
];


export function DrivePreviewMockup() {
  return (
    <div style={{ display: 'flex', height: '620px', width: '100%', fontFamily: 'Poppins, sans-serif', fontSize: '11px', color: '#1a1a1a', overflow: 'hidden' }}>
      {/* App switcher strip */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px', padding: '12px 5px', background: '#fafafa', borderRight: '1px solid #f0f0f0', flexShrink: 0 }}>
        {[
          { src: '/assets/icons/envelope.jpg', alt: 'Mail' },
          { src: '/assets/icons/apps-meet-logo.png', alt: 'Meet', size: '18px' },
          { src: '/assets/icons/search.jpg', alt: 'Contacts' },
          { src: '', alt: 'Kalender', lucide: true },
          { src: '/assets/icons/apps-lock.jpg', alt: 'Lock' },
          { src: '/assets/icons/cube.jpg', alt: 'Drive' },
          { src: '/assets/icons/apps-sheet.jpg', alt: 'Sheet' },
          { src: '/assets/icons/ai-sparkle.jpg', alt: 'More' },
        ].map((item, i) => (
          <div key={i} style={{ width: '26px', height: '26px', borderRadius: '7px', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
            {(item as any).lucide ? (
              <Calendar size={16} style={{ color: '#7C3AED' }} />
            ) : (
              <img src={item.src} alt={item.alt} style={{ width: (item as any).size || '22px', height: (item as any).size || '22px', borderRadius: '5px', objectFit: 'cover' }} />
            )}
          </div>
        ))}
      </div>

      {/* Sidebar */}
      <div style={{ width: '130px', flexShrink: 0, borderRight: '1px solid #f0f0f0', padding: '10px 8px', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '7px', marginBottom: '14px' }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="2" strokeLinecap="round"><path d="M4 6h16M4 12h16M4 18h16" /></svg>
          <span style={{ fontSize: '14px', fontWeight: 700, color: '#1a1a1a' }}>Snaarp</span>
        </div>

        {/* Upload button */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '5px', padding: '6px 12px', background: '#7C3AED', color: '#fff', borderRadius: '18px', fontSize: '9.5px', fontWeight: 600, marginBottom: '14px', width: 'fit-content' }}>
          <Upload size={11} />
          <span>Upload</span>
        </div>

        {/* Nav items */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
          {SIDEBAR_NAV.map((item) => (
            <div key={item.label} style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '5px 8px', borderRadius: '5px', background: item.active ? '#f3efff' : 'transparent', color: item.active ? '#7C3AED' : '#555', fontWeight: item.active ? 600 : 400, fontSize: '10.5px' }}>
              <FolderOpen size={11} />
              <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{item.label}</span>
            </div>
          ))}
        </div>

        {/* Folders */}
        <div style={{ paddingTop: '10px', borderTop: '1px solid #f0f0f0', marginTop: '14px' }}>
          <div style={{ fontSize: '9px', fontWeight: 600, color: '#888', marginBottom: '6px' }}>Folders</div>
          {FOLDERS_NAV.map((folder) => (
            <div key={folder.label} style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '9px', color: '#555', padding: '2px 0' }}>
              <FolderOpen size={10} style={{ color: folder.color }} />
              <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{folder.label}</span>
            </div>
          ))}
        </div>

        {/* Storage indicator */}
        <div style={{ marginTop: 'auto', paddingTop: '10px', borderTop: '1px solid #f0f0f0' }}>
          <div style={{ fontSize: '8px', color: '#888', marginBottom: '4px' }}>6.2 GB of 10 GB used</div>
          <div style={{ width: '100%', height: '4px', borderRadius: '2px', background: '#f0f0f0' }}>
            <div style={{ width: '62%', height: '100%', borderRadius: '2px', background: '#7C3AED' }} />
          </div>
        </div>
      </div>

      {/* Main content */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
        {/* Top bar */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '8px 12px', borderBottom: '1px solid #f0f0f0' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '5px', padding: '5px 10px', background: '#f5f5f5', borderRadius: '18px', color: '#999', fontSize: '10px', flex: 1, maxWidth: '180px' }}>
            <Search size={12} />
            <span>Search files...</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginLeft: 'auto', color: '#777' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '3px', padding: '3px 8px', borderRadius: '14px', border: '1px solid #e8e8e8', fontSize: '9px', fontWeight: 500, color: '#333' }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#22c55e' }} />
              <span>Active</span>
              <ChevronDown size={10} />
            </div>
            <HelpCircle size={14} />
            <Settings size={14} />
            <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: '#7C3AED', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '9px', fontWeight: 700 }}>AM</div>
          </div>
        </div>

        {/* Toolbar */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '6px 12px', borderBottom: '1px solid #f0f0f0' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#888' }}>
            <Filter size={12} />
            <span style={{ fontSize: '10px', fontWeight: 600, color: '#1a1a1a' }}>My Files</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            {/* View toggle — Grid active */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              <div style={{ padding: '3px 5px', borderRadius: '4px', background: '#f3efff', color: '#7C3AED' }}>
                <LayoutGrid size={13} />
              </div>
              <div style={{ padding: '3px 5px', borderRadius: '4px', color: '#ccc' }}>
                <LayoutList size={13} />
              </div>
            </div>
            <span style={{ fontSize: '9px', color: '#999' }}>12 items</span>
          </div>
        </div>

        {/* File grid */}
        <div style={{ flex: 1, padding: '10px 12px', overflow: 'hidden' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px', height: '100%' }}>
            {FILES.map((file, i) => (
              <div key={i} style={{ borderRadius: '10px', border: '1px solid #f0f0f0', background: '#fff', padding: '10px', display: 'flex', flexDirection: 'column', position: 'relative', overflow: 'hidden' }}>
                {/* Overflow menu */}
                <div style={{ position: 'absolute', top: '6px', right: '6px', color: '#ccc' }}>
                  <MoreHorizontal size={12} />
                </div>
                {/* Shared icon */}
                {file.shared && (
                  <div style={{ position: 'absolute', top: '6px', right: '22px', color: '#7C3AED' }}>
                    <Users size={10} />
                  </div>
                )}
                {/* File icon area */}
                <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f9f9f9', borderRadius: '8px', marginBottom: '8px', minHeight: '60px' }}>
                  <img src={file.icon} alt={file.type} style={{ width: '32px', height: '32px', objectFit: 'contain' }} />
                </div>
                {/* File name */}
                <div style={{ fontSize: '9.5px', fontWeight: 600, color: '#1a1a1a', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', marginBottom: '2px' }}>
                  {file.name}
                </div>
                {/* Detail */}
                <div style={{ fontSize: '8px', color: '#999', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                  {file.detail}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
