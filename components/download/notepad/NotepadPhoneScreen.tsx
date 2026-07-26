// High-fidelity mobile phone screen for Notepad Download page.
// Shows: a notes list with rich previews, timestamps, and a quick note open.

export function NotepadPhoneScreen() {
  return (
    <div className="notepad-phone-screen">
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
        <span className="text-[10px] font-bold text-[#1B1730]">Notepad</span>
        <span className="w-5 h-5 rounded-full bg-[#7C3AED] flex items-center justify-center shadow-md">
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M5 12h14" /></svg>
        </span>
      </div>

      {/* Search bar */}
      <div className="mx-3 mb-2.5 flex items-center gap-2 rounded-lg bg-[#F7F6FA] border border-[#F0EEF6] px-2.5 py-1.5">
        <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#A79FBE" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.4-4.4" /></svg>
        <span className="text-[8px] font-medium text-[#A79FBE]">Search notes...</span>
      </div>

      {/* Notes list */}
      <div className="flex flex-col gap-1.5 px-3">
        {/* Note 1 - pinned, with checklist */}
        <div className="rounded-xl bg-[#F3EFFF] border border-[#E6DEFA] p-2.5">
          <div className="flex items-center justify-between mb-1">
            <span className="text-[8px] font-bold text-[#7C3AED]">Meeting prep</span>
            <span className="text-[5.5px] font-semibold text-[#A79FBE]">Pinned</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-[6.5px] text-[#5B5670] flex items-center gap-1">
              <span className="w-2 h-2 rounded-sm border border-[#0E9384] bg-[#ECFDF9] flex items-center justify-center">
                <svg width="5" height="5" viewBox="0 0 24 24" fill="none" stroke="#0E9384" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
              </span>
              Review Q3 numbers
            </span>
            <span className="text-[6.5px] text-[#5B5670] flex items-center gap-1">
              <span className="w-2 h-2 rounded-sm border border-[#0E9384] bg-[#ECFDF9] flex items-center justify-center">
                <svg width="5" height="5" viewBox="0 0 24 24" fill="none" stroke="#0E9384" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
              </span>
              Prep slide deck intro
            </span>
            <span className="text-[6.5px] text-[#5B5670] flex items-center gap-1">
              <span className="w-2 h-2 rounded-sm border border-[#E6DEFA] bg-white" />
              Email agenda to team
            </span>
          </div>
        </div>

        {/* Note 2 */}
        <div className="rounded-xl bg-white border border-[#F0EEF6] p-2.5">
          <div className="flex items-center justify-between mb-1">
            <span className="text-[8px] font-bold text-[#1B1730]">Product ideas</span>
            <span className="text-[5.5px] text-[#A79FBE]">2h ago</span>
          </div>
          <p className="text-[6.5px] leading-[1.5] text-[#5B5670]">
            Offline mode for Document - users keep asking. Also: keyboard shortcuts panel for Sheets. Talk to Sofia about the onboarding flow.
          </p>
        </div>

        {/* Note 3 */}
        <div className="rounded-xl bg-white border border-[#F0EEF6] p-2.5">
          <div className="flex items-center justify-between mb-1">
            <span className="text-[8px] font-bold text-[#1B1730]">Call notes - Devon</span>
            <span className="text-[5.5px] text-[#A79FBE]">Yesterday</span>
          </div>
          <p className="text-[6.5px] leading-[1.5] text-[#5B5670]">
            Wants to consolidate three tools into one. Budget confirmed. Follow up Friday re: timeline.
          </p>
        </div>

        {/* Note 4 */}
        <div className="rounded-xl bg-white border border-[#F0EEF6] p-2.5">
          <div className="flex items-center justify-between mb-1">
            <span className="text-[8px] font-bold text-[#1B1730]">Links to save</span>
            <span className="text-[5.5px] text-[#A79FBE]">3d ago</span>
          </div>
          <p className="text-[6.5px] leading-[1.5] text-[#7C3AED]">
            figma.com/file/q3-rebrand...
          </p>
        </div>
      </div>
    </div>
  );
}
