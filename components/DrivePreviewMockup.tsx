'use client';

import { useState, useEffect } from 'react';
import { Search, ChevronDown, Plus, FolderOpen, Clock, Star, Trash2, Users, MoreHorizontal, Filter, Settings, HelpCircle, LayoutGrid, LayoutList, Upload, X, CheckCircle, Copy, Check, Download, Pencil, Link, ChevronRight } from 'lucide-react';
import { Coachmark } from '@/components/Coachmark';

const FOLDERS_NAV = [
  { label: 'Marketing Assets', color: '#7C3AED' },
  { label: 'Client Contracts', color: '#F59E0B' },
  { label: 'Team Docs', color: '#0E9384' },
];

const FILES_ROOT = [
  { name: 'Marketing Assets', type: 'folder', icon: '/assets/icons/drive-folder.svg', detail: '12 items', shared: false, size: '', modified: '' },
  { name: 'Client Contracts', type: 'folder', icon: '/assets/icons/drive-folder.svg', detail: '8 items', shared: false, size: '', modified: '' },
  { name: 'Team Docs', type: 'folder', icon: '/assets/icons/drive-folder.svg', detail: '6 items', shared: false, size: '', modified: '' },
  { name: 'Q3 Financial Report.pdf', type: 'pdf', icon: '/assets/icons/drive-pdf.svg', detail: '2.4 MB · Edited 2d ago', shared: true, size: '2.4 MB', modified: '2 days ago' },
  { name: 'Brand Guidelines.docx', type: 'doc', icon: '/assets/icons/drive-doc.svg', detail: '5.1 MB · Edited 5d ago', shared: false, size: '5.1 MB', modified: '5 days ago' },
  { name: 'Product Roadmap.xlsx', type: 'sheet', icon: '/assets/icons/drive-sheet.svg', detail: '1.8 MB · Edited 1w ago', shared: true, size: '1.8 MB', modified: '1 week ago' },
  { name: 'Team Photo.jpg', type: 'image', icon: '/assets/icons/drive-jpeg.svg', detail: '4.2 MB · Edited 3d ago', shared: false, size: '4.2 MB', modified: '3 days ago' },
  { name: 'Onboarding Deck.pptx', type: 'pptx', icon: '/assets/icons/drive-pptx.svg', detail: '8.6 MB · Edited 1w ago', shared: false, size: '8.6 MB', modified: '1 week ago' },
  { name: 'Meeting Notes.docx', type: 'doc', icon: '/assets/icons/drive-doc.svg', detail: '0.9 MB · Edited today', shared: false, size: '0.9 MB', modified: 'today' },
  { name: 'Invoice Q2.pdf', type: 'pdf', icon: '/assets/icons/drive-pdf.svg', detail: '1.2 MB · Edited 4d ago', shared: false, size: '1.2 MB', modified: '4 days ago' },
  { name: 'Design Mockups', type: 'folder', icon: '/assets/icons/drive-folder.svg', detail: '15 items', shared: true, size: '', modified: '' },
  { name: 'Sprint Retro.docx', type: 'doc', icon: '/assets/icons/drive-doc.svg', detail: '0.6 MB · Edited 1d ago', shared: false, size: '0.6 MB', modified: '1 day ago' },
];

const FOLDER_CONTENTS: Record<string, typeof FILES_ROOT> = {
  'Marketing Assets': [
    { name: 'Logo_Pack.zip', type: 'doc', icon: '/assets/icons/drive-doc.svg', detail: '12 MB · Edited 3d ago', shared: false, size: '12 MB', modified: '3 days ago' },
    { name: 'Brand_Photos.jpg', type: 'image', icon: '/assets/icons/drive-jpeg.svg', detail: '8.4 MB · Edited 1w ago', shared: true, size: '8.4 MB', modified: '1 week ago' },
    { name: 'Social_Templates.pptx', type: 'pptx', icon: '/assets/icons/drive-pptx.svg', detail: '4.2 MB · Edited 2d ago', shared: false, size: '4.2 MB', modified: '2 days ago' },
  ],
  'Client Contracts': [
    { name: 'Acme_NDA.pdf', type: 'pdf', icon: '/assets/icons/drive-pdf.svg', detail: '1.1 MB · Edited 2w ago', shared: true, size: '1.1 MB', modified: '2 weeks ago' },
    { name: 'Northwind_SOW.pdf', type: 'pdf', icon: '/assets/icons/drive-pdf.svg', detail: '2.3 MB · Edited 1w ago', shared: false, size: '2.3 MB', modified: '1 week ago' },
    { name: 'Brightline_MSA.docx', type: 'doc', icon: '/assets/icons/drive-doc.svg', detail: '0.8 MB · Edited 5d ago', shared: false, size: '0.8 MB', modified: '5 days ago' },
  ],
  'Team Docs': [
    { name: 'Handbook.pdf', type: 'pdf', icon: '/assets/icons/drive-pdf.svg', detail: '3.2 MB · Edited 1w ago', shared: false, size: '3.2 MB', modified: '1 week ago' },
    { name: 'Onboarding_Guide.docx', type: 'doc', icon: '/assets/icons/drive-doc.svg', detail: '1.5 MB · Edited 2d ago', shared: true, size: '1.5 MB', modified: '2 days ago' },
    { name: 'Benefits_Summary.xlsx', type: 'sheet', icon: '/assets/icons/drive-sheet.svg', detail: '0.9 MB · Edited 4d ago', shared: false, size: '0.9 MB', modified: '4 days ago' },
  ],
};

type ViewMode = 'grid' | 'list';
type ModalState = 'none' | 'upload' | 'preview';
type UploadState = 'idle' | 'uploading' | 'done';

export function DrivePreviewMockup({ onEnd }: { onEnd?: () => void }) {
  const [files, setFiles] = useState(FILES_ROOT);
  const [viewMode, setViewMode] = useState<ViewMode>('grid');
  const [modal, setModal] = useState<ModalState>('none');
  const [uploadState, setUploadState] = useState<UploadState>('idle');
  const [uploadProgress, setUploadProgress] = useState(0);
  const [showStep1, setShowStep1] = useState(false);
  const [showStep2, setShowStep2] = useState(false);
  const [showStep3, setShowStep3] = useState(false);
  const [showStep4, setShowStep4] = useState(false);
  const [showDoneCoachmark, setShowDoneCoachmark] = useState(false);
  const [showUploadCoachmark, setShowUploadCoachmark] = useState(false);
  const [showShareCoachmark, setShowShareCoachmark] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMsg, setToastMsg] = useState('');
  const [previewFile, setPreviewFile] = useState(FILES_ROOT[3]);
  const [showSharePanel, setShowSharePanel] = useState(false);
  const [copied, setCopied] = useState(false);
  const [currentFolder, setCurrentFolder] = useState<string | null>(null);

  useEffect(() => { const t = setTimeout(() => setShowStep1(true), 600); return () => clearTimeout(t); }, []);

  function toast(msg: string) { setToastMsg(msg); setShowToast(true); setTimeout(() => setShowToast(false), 2000); }

  function handleOpenUpload() {
    setShowStep1(false);
    setTimeout(() => { setModal('upload'); setUploadState('idle'); setUploadProgress(0); setTimeout(() => setShowUploadCoachmark(true), 400); }, 180);
  }

  function handleStartUpload() {
    setUploadState('uploading');
    let p = 0;
    const interval = setInterval(() => {
      p += 5;
      setUploadProgress(p);
      if (p >= 100) {
        clearInterval(interval);
        setUploadState('done');
        setTimeout(() => {
          setModal('none');
          const newFile = { name: 'Project_Brief.pdf', type: 'pdf', icon: '/assets/icons/drive-pdf.svg', detail: '1.8 MB · Edited just now', shared: false, size: '1.8 MB', modified: 'just now' };
          setFiles([newFile, ...files]);
          toast('File uploaded');
          setTimeout(() => setShowStep2(true), 2200);
        }, 600);
      }
    }, 30);
  }

  function handleOpenPreview(file: typeof FILES_ROOT[0]) {
    if (file.type === 'folder') { setCurrentFolder(file.name); return; }
    setShowStep2(false);
    setPreviewFile(file);
    setShowSharePanel(false);
    setModal('preview');
    setTimeout(() => setShowShareCoachmark(true), 400);
  }

  function handleCopyLink() {
    try { navigator.clipboard.writeText('drive.snaarp.com/s/qb3x9k2'); } catch {}
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  }

  const displayFiles = currentFolder ? (FOLDER_CONTENTS[currentFolder] || []) : files;

  return (
    <div style={{ display: 'flex', height: '620px', width: '100%', fontFamily: 'Poppins, sans-serif', fontSize: '11px', color: '#1a1a1a', overflow: 'hidden', position: 'relative' }}>
      {showToast && (<div style={{ position: 'absolute', top: '12px', left: '50%', transform: 'translateX(-50%)', zIndex: 200, display: 'flex', alignItems: 'center', gap: '6px', padding: '8px 16px', background: '#ECFDF5', border: '1px solid #A7F3D0', borderRadius: '20px', boxShadow: '0 4px 12px -4px rgba(0,0,0,0.1)' }}><CheckCircle size={14} style={{ color: '#22c55e' }} /><span style={{ fontSize: '11px', fontWeight: 600, color: '#166534' }}>{toastMsg}</span></div>)}

      <Coachmark visible={showStep1 && modal === 'none'} title="Upload a File" subtitle="Add documents to your Drive and share them instantly" onNext={handleOpenUpload} top="50px" left="100px" arrowSide="left" />
      <Coachmark visible={showStep2 && modal === 'none'} title="Preview File" subtitle="Click any file to see details and share it" onNext={() => handleOpenPreview(displayFiles.find(f => f.type !== 'folder') || displayFiles[0])} top="90px" left="300px" arrowSide="left" />
      <Coachmark visible={showStep3 && modal === 'none' && !currentFolder} title="Open a Folder" subtitle="Click a folder to see all the files inside it" onNext={() => { setShowStep3(false); setCurrentFolder('Marketing Assets'); setTimeout(() => setShowStep4(true), 400); }} top="80px" left="460px" arrowSide="left" />
      <Coachmark visible={showStep4 && modal === 'none' && !!currentFolder} title="All Done!" subtitle="You have explored Snaarp Drive. Continue to the next tool." onNext={() => { setShowStep4(false); if (onEnd) onEnd(); }} top="200px" left="350px" arrowSide="left" buttonLabel="End" />

      {/* Sidebar */}
      <div style={{ width: '130px', flexShrink: 0, borderRight: '1px solid #f0f0f0', padding: '10px 8px', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '7px', marginBottom: '14px' }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="2" strokeLinecap="round"><path d="M4 6h16M4 12h16M4 18h16" /></svg>
          <span style={{ fontSize: '14px', fontWeight: 700, color: '#1a1a1a' }}>Snaarp</span>
        </div>
        <div onClick={handleOpenUpload} style={{ display: 'flex', alignItems: 'center', gap: '5px', padding: '6px 12px', background: '#7C3AED', color: '#fff', borderRadius: '18px', fontSize: '9.5px', fontWeight: 600, marginBottom: '14px', width: 'fit-content', cursor: 'pointer' }}><Upload size={11} /><span>Upload</span></div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
          {[{ label: 'My Files', active: !currentFolder }, { label: 'Shared with Me', active: false }, { label: 'Recent', active: false }, { label: 'Starred', active: false }, { label: 'Trash', active: false }].map((item) => (
            <div key={item.label} onClick={item.label === 'My Files' ? () => setCurrentFolder(null) : undefined} style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '5px 8px', borderRadius: '5px', background: item.active ? '#f3efff' : 'transparent', color: item.active ? '#7C3AED' : '#555', fontWeight: item.active ? 600 : 400, fontSize: '10.5px', cursor: item.label === 'My Files' ? 'pointer' : 'default' }}><FolderOpen size={11} /><span>{item.label}</span></div>
          ))}
        </div>
        <div style={{ paddingTop: '10px', borderTop: '1px solid #f0f0f0', marginTop: '14px' }}>
          <div style={{ fontSize: '9px', fontWeight: 600, color: '#888', marginBottom: '6px' }}>Folders</div>
          {FOLDERS_NAV.map((f) => (
            <div key={f.label} onClick={() => setCurrentFolder(f.label)} style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '9px', color: '#555', padding: '2px 0', cursor: 'pointer' }}><FolderOpen size={10} style={{ color: f.color }} /><span>{f.label}</span></div>
          ))}
        </div>
        <div style={{ marginTop: 'auto', paddingTop: '10px', borderTop: '1px solid #f0f0f0' }}>
          <div style={{ fontSize: '8px', color: '#888', marginBottom: '4px' }}>6.2 GB of 10 GB used</div>
          <div style={{ width: '100%', height: '4px', borderRadius: '2px', background: '#f0f0f0' }}><div style={{ width: '62%', height: '100%', borderRadius: '2px', background: '#7C3AED' }} /></div>
        </div>
      </div>

      {/* Main */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden', position: 'relative' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '8px 12px', borderBottom: '1px solid #f0f0f0' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '5px', padding: '5px 10px', background: '#f5f5f5', borderRadius: '18px', color: '#999', fontSize: '10px', flex: 1, maxWidth: '180px' }}><Search size={12} /><span>Search files...</span></div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginLeft: 'auto', color: '#777' }}>
            <HelpCircle size={14} /><Settings size={14} />
            <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: '#7C3AED', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '9px', fontWeight: 700 }}>AM</div>
          </div>
        </div>
        {/* Toolbar */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '6px 12px', borderBottom: '1px solid #f0f0f0' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#888', fontSize: '10px' }}>
            {currentFolder ? (<><span onClick={() => setCurrentFolder(null)} style={{ color: '#7C3AED', cursor: 'pointer', fontWeight: 500 }}>My Files</span><ChevronRight size={10} /><span style={{ fontWeight: 600, color: '#1a1a1a' }}>{currentFolder}</span></>) : (<><Filter size={12} /><span style={{ fontWeight: 600, color: '#1a1a1a' }}>My Files</span></>)}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              <div onClick={() => setViewMode('grid')} style={{ padding: '3px 5px', borderRadius: '4px', background: viewMode === 'grid' ? '#f3efff' : 'transparent', color: viewMode === 'grid' ? '#7C3AED' : '#ccc', cursor: 'pointer' }}><LayoutGrid size={13} /></div>
              <div onClick={() => setViewMode('list')} style={{ padding: '3px 5px', borderRadius: '4px', background: viewMode === 'list' ? '#f3efff' : 'transparent', color: viewMode === 'list' ? '#7C3AED' : '#ccc', cursor: 'pointer' }}><LayoutList size={13} /></div>
            </div>
            <span style={{ fontSize: '9px', color: '#999' }}>{displayFiles.length} items</span>
          </div>
        </div>

        {/* Grid View */}
        {viewMode === 'grid' && (<div style={{ flex: 1, padding: '10px 12px', overflow: 'hidden' }}><div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px', height: '100%', alignContent: 'start' }}>
          {displayFiles.slice(0, 12).map((file, i) => (
            <div key={i} onClick={() => handleOpenPreview(file)} style={{ borderRadius: '10px', border: '1px solid #f0f0f0', background: '#fff', padding: '10px', display: 'flex', flexDirection: 'column', cursor: 'pointer', position: 'relative', maxHeight: '120px' }}>
              <MoreHorizontal size={10} style={{ position: 'absolute', top: '6px', right: '6px', color: '#ccc' }} />
              {file.shared && <Users size={9} style={{ position: 'absolute', top: '6px', right: '20px', color: '#7C3AED' }} />}
              <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f9f9f9', borderRadius: '8px', marginBottom: '8px', minHeight: '50px' }}><img src={file.icon} alt={file.type} style={{ width: '28px', height: '28px', objectFit: 'contain' }} /></div>
              <div style={{ fontSize: '9px', fontWeight: 600, color: '#1a1a1a', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{file.name}</div>
              <div style={{ fontSize: '7.5px', color: '#999', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{file.detail}</div>
            </div>
          ))}
        </div></div>)}

        {/* List View */}
        {viewMode === 'list' && (<div style={{ flex: 1, overflow: 'hidden' }}>
          {displayFiles.slice(0, 12).map((file, i) => (
            <div key={i} onClick={() => handleOpenPreview(file)} style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '8px 12px', borderBottom: '1px solid #f8f8f8', cursor: 'pointer' }}>
              <img src={file.icon} alt={file.type} style={{ width: '22px', height: '22px', objectFit: 'contain' }} />
              <div style={{ flex: 1, minWidth: 0 }}><div style={{ fontSize: '10px', fontWeight: 600, color: '#1a1a1a', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{file.name}</div></div>
              <span style={{ fontSize: '8.5px', color: '#999', flexShrink: 0 }}>{file.size || file.detail}</span>
              <span style={{ fontSize: '8.5px', color: '#999', flexShrink: 0 }}>{file.modified || ''}</span>
              {file.shared && <Users size={10} style={{ color: '#7C3AED', flexShrink: 0 }} />}
              <MoreHorizontal size={10} style={{ color: '#ccc', flexShrink: 0 }} />
            </div>
          ))}
        </div>)}

        {/* Upload Modal */}
        {modal === 'upload' && (
          <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(0,0,0,0.3)', zIndex: 50 }}>
            <div style={{ width: '280px', background: '#fff', borderRadius: '14px', boxShadow: '0 8px 30px -8px rgba(0,0,0,0.2)', overflow: 'visible' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 14px', background: '#1a1a1a', borderRadius: '14px 14px 0 0' }}>
                <span style={{ fontSize: '12px', fontWeight: 600, color: '#fff' }}>Upload File</span>
                <div onClick={() => setModal('none')} style={{ cursor: 'pointer', color: '#aaa' }}><X size={13} /></div>
              </div>
              <div style={{ padding: '20px 14px', position: 'relative' }}>
                {uploadState === 'idle' && (
                  <>
                    <Coachmark visible={showUploadCoachmark} title="Click to Upload" subtitle="Select or drop a file to start uploading" onNext={() => { setShowUploadCoachmark(false); handleStartUpload(); }} top="-100px" left="20px" arrowSide="bottom" arrowOffset="100px" />
                    <div onClick={() => { setShowUploadCoachmark(false); handleStartUpload(); }} style={{ border: '2px dashed #e0e0e0', borderRadius: '12px', padding: '30px', textAlign: 'center', cursor: 'pointer' }}>
                      <Upload size={24} style={{ color: '#7C3AED', margin: '0 auto 10px' }} />
                      <div style={{ fontSize: '10px', color: '#555' }}>Drag and drop a file here, or click to browse</div>
                    </div>
                  </>
                )}
                {uploadState === 'uploading' && (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <img src="/assets/icons/drive-pdf.svg" alt="pdf" style={{ width: '20px', height: '20px' }} />
                      <span style={{ fontSize: '10px', fontWeight: 600, color: '#1a1a1a' }}>Project_Brief.pdf</span>
                    </div>
                    <div style={{ height: '6px', borderRadius: '3px', background: '#f0f0f0' }}><div style={{ height: '100%', borderRadius: '3px', background: '#7C3AED', width: `${uploadProgress}%`, transition: 'width 0.1s' }} /></div>
                    <div style={{ fontSize: '9px', color: '#888' }}>{uploadProgress}%</div>
                  </div>
                )}
                {uploadState === 'done' && (
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', justifyContent: 'center' }}>
                    <CheckCircle size={20} style={{ color: '#22c55e' }} />
                    <span style={{ fontSize: '11px', fontWeight: 600, color: '#22c55e' }}>Upload complete</span>
                  </div>
                )}
              </div>
              {uploadState === 'idle' && (
                <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '10px 14px', borderTop: '1px solid #f0f0f0' }}>
                  <button onClick={() => setModal('none')} style={{ padding: '5px 14px', background: '#fff', color: '#555', border: '1px solid #e0e0e0', borderRadius: '14px', fontSize: '10px', cursor: 'pointer' }}>Cancel</button>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Preview Drawer */}
        {modal === 'preview' && (
          <div style={{ position: 'absolute', top: 0, right: 0, bottom: 0, width: '250px', background: '#fff', borderLeft: '1px solid #e8e8e8', boxShadow: '-4px 0 20px -8px rgba(0,0,0,0.1)', zIndex: 50, display: 'flex', flexDirection: 'column', overflow: 'visible' }}>
            <div style={{ padding: '16px 14px', textAlign: 'center', borderBottom: '1px solid #f0f0f0', position: 'relative' }}>
              <div onClick={() => { setModal('none'); setShowDoneCoachmark(false); }} style={{ position: 'absolute', top: '10px', right: '10px', cursor: 'pointer', color: '#888' }}><X size={13} /></div>
              <img src={previewFile.icon} alt="" style={{ width: '36px', height: '36px', margin: '0 auto 8px', objectFit: 'contain' }} />
              <div style={{ fontSize: '12px', fontWeight: 700, color: '#1a1a1a' }}>{previewFile.name}</div>
              <div style={{ fontSize: '9px', color: '#888', marginTop: '3px' }}>{previewFile.size}</div>
            </div>
            <div style={{ padding: '14px', flex: 1, display: 'flex', flexDirection: 'column', gap: '10px', overflow: 'hidden' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><Clock size={11} style={{ color: '#7C3AED' }} /><span style={{ fontSize: '9.5px', color: '#555' }}>Modified {previewFile.modified}</span></div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><Users size={11} style={{ color: '#7C3AED' }} /><span style={{ fontSize: '9.5px', color: '#555' }}>Owner: You</span></div>
              {/* Preview placeholder */}
              <div style={{ flex: 1, background: '#f9f9f9', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '80px' }}>
                <img src={previewFile.icon} alt="" style={{ width: '24px', height: '24px', opacity: 0.4 }} />
              </div>
              {/* Share panel */}
              {showSharePanel && (
                <div style={{ padding: '10px', background: '#f9f9f9', borderRadius: '8px', border: '1px solid #e8e8e8' }}>
                  <div style={{ fontSize: '9px', fontWeight: 600, color: '#888', marginBottom: '4px' }}>Share link</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '5px', marginBottom: '6px' }}>
                    <span style={{ fontSize: '9px', color: '#555', flex: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>drive.snaarp.com/s/qb3x9k2</span>
                    <div onClick={handleCopyLink} style={{ cursor: 'pointer', color: copied ? '#22c55e' : '#7C3AED', display: 'flex', alignItems: 'center', gap: '2px' }}>{copied ? <Check size={10} /> : <Copy size={10} />}<span style={{ fontSize: '7px', fontWeight: 600 }}>{copied ? 'Copied' : 'Copy'}</span></div>
                  </div>
                  <div style={{ fontSize: '8px', color: '#888' }}>Anyone with the link can view</div>
                </div>
              )}
              <div style={{ fontSize: '9px', color: '#888' }}>You edited this {previewFile.modified}</div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '5px', padding: '10px 14px', borderTop: '1px solid #f0f0f0', position: 'relative' }}>
              <Coachmark visible={showShareCoachmark} title="Share & Download" subtitle="Share a link or download this file to your device" onNext={() => { setShowShareCoachmark(false); setModal('none'); setTimeout(() => setShowStep3(true), 400); }} top="-120px" left="-30px" arrowSide="bottom" arrowOffset="60px" />
              <button onClick={() => { setShowShareCoachmark(false); setShowSharePanel(!showSharePanel); }} style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '3px', padding: '5px 0', background: '#fff', border: '1px solid #e0e0e0', borderRadius: '8px', fontSize: '8.5px', fontWeight: 500, color: '#555', cursor: 'pointer' }}><Link size={10} /> Share</button>
              <button onClick={() => toast('Download started')} style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '3px', padding: '5px 0', background: '#fff', border: '1px solid #e0e0e0', borderRadius: '8px', fontSize: '8.5px', fontWeight: 500, color: '#555', cursor: 'pointer' }}><Download size={10} /> Download</button>
              <button onClick={() => { setModal('none'); setTimeout(() => setShowStep3(true), 400); }} style={{ padding: '5px 10px', background: '#7C3AED', border: 'none', borderRadius: '8px', fontSize: '8.5px', fontWeight: 600, color: '#fff', cursor: 'pointer' }}>Done</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
