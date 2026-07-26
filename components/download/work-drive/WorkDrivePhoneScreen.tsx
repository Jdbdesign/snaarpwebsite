// High-fidelity mobile phone screen for Work Drive Download page.
// Shows: simplified file list with icons and names, search bar, and floating upload button.

import { AVATARS } from '../avatarPaths';

export function WorkDrivePhoneScreen() {
  return (
    <div className="work-drive-phone-screen">
      {/* Status bar */}
      <div className="flex items-center justify-between px-4 pt-2 pb-1">
        <span className="text-[8px] font-semibold text-[#5B5670]">9:41</span>
        <div className="flex items-center gap-1">
          <span className="block h-[6px] w-[14px] rounded-sm bg-[#1B1730]" />
          <span className="block h-[6px] w-[6px] rounded-full bg-[#1B1730]" />
        </div>
      </div>

      {/* Header */}
      <div className="flex items-center justify-between px-4 py-2">
        <span className="text-[10px] font-bold text-[#1B1730]">Work Drive</span>
        <div className="w-5 h-5 rounded-full overflow-hidden">
          <img src={AVATARS.jacob} alt="" className="w-full h-full object-cover" />
        </div>
      </div>

      {/* Search bar */}
      <div className="mx-3 mb-2.5 flex items-center gap-2 rounded-lg bg-[#F7F6FA] border border-[#F0EEF6] px-2.5 py-1.5">
        <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#A79FBE" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.4-4.4" /></svg>
        <span className="text-[8px] font-medium text-[#A79FBE]">Search files...</span>
      </div>

      {/* File list */}
      <div className="flex flex-col gap-0.5 px-3">
        {[
          { name: 'Client Projects', type: 'folder', color: '#7C3AED' },
          { name: 'Team Assets', type: 'folder', color: '#7C3AED' },
          { name: 'Q4 Campaign Brief.pdf', type: 'pdf', color: '#E11D48' },
          { name: 'Budget 2026.xlsx', type: 'sheet', color: '#0E9384' },
          { name: 'Brand Guidelines.fig', type: 'file', color: '#D97706' },
          { name: 'Meeting Notes.doc', type: 'doc', color: '#3B82F6' },
        ].map((file) => (
          <div key={file.name} className="flex items-center gap-2 rounded-lg px-2 py-1.5 hover:bg-[#FBFAFE]">
            <span className="w-5 h-5 rounded-md flex items-center justify-center flex-shrink-0" style={{ background: file.type === 'folder' ? '#F3EFFF' : '#F7F6FA', border: `1px solid ${file.type === 'folder' ? '#E6DEFA' : '#F0EEF6'}` }}>
              {file.type === 'folder' ? (
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke={file.color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" /></svg>
              ) : (
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke={file.color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><path d="M14 2v6h6" /></svg>
              )}
            </span>
            <span className="text-[8px] font-medium text-[#1B1730] truncate">{file.name}</span>
          </div>
        ))}
      </div>

      {/* Floating upload button */}
      <div className="absolute bottom-4 right-4 w-8 h-8 rounded-full bg-[#7C3AED] flex items-center justify-center shadow-lg">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M5 12h14" /></svg>
      </div>
    </div>
  );
}
