// High-fidelity mobile phone screen for Presentation Download page.
// Shows: a slide preview with title, subtitle, and a filmstrip of slide thumbnails.

export function PresentationPhoneScreen() {
  return (
    <div className="presentation-phone-screen">
      {/* Status bar */}
      <div className="flex items-center justify-between px-4 pt-2 pb-1">
        <span className="text-[8px] font-semibold text-[#5B5670]">9:41</span>
        <div className="flex items-center gap-1">
          <span className="block h-[6px] w-[14px] rounded-sm bg-[#1B1730]" />
          <span className="block h-[6px] w-[6px] rounded-full bg-[#1B1730]" />
        </div>
      </div>

      {/* Header */}
      <div className="flex items-center justify-between px-4 py-2 border-b border-[#F0EEF6]">
        <span className="text-[9px] font-bold text-[#1B1730]">Q3 Team Offsite</span>
        <span className="flex items-center gap-1 text-[7px] font-semibold text-[#7C3AED]">
          <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3" /></svg>
          Present
        </span>
      </div>

      {/* Current slide preview */}
      <div className="mx-3 mt-3 rounded-xl bg-gradient-to-br from-[#1B1730] to-[#2D2650] p-5 text-center aspect-[16/10]">
        <div className="text-[11px] font-bold text-white mt-2">Q3 Team Offsite</div>
        <div className="text-[7.5px] text-[#C4B5FD] mt-1">Two days · Lisbon · 15–16 September</div>
        <div className="mt-3 flex items-center justify-center gap-1.5">
          <span className="w-5 h-0.5 rounded-full bg-[#7C3AED]" />
          <span className="w-5 h-0.5 rounded-full bg-[#5B5670]" />
          <span className="w-5 h-0.5 rounded-full bg-[#5B5670]" />
          <span className="w-5 h-0.5 rounded-full bg-[#5B5670]" />
          <span className="w-5 h-0.5 rounded-full bg-[#5B5670]" />
        </div>
      </div>

      {/* Filmstrip thumbnails */}
      <div className="flex items-center gap-1.5 px-3 mt-2.5 overflow-hidden">
        {[
          { label: 'Title', active: true, bg: '#1B1730' },
          { label: 'Agenda', active: false, bg: '#0F766E' },
          { label: 'Venue', active: false, bg: '#92400E' },
          { label: 'Team', active: false, bg: '#9D174D' },
          { label: 'Wrap', active: false, bg: '#1B1730' },
        ].map((slide) => (
          <div key={slide.label} className="flex-shrink-0 w-11 rounded-md overflow-hidden" style={{ border: slide.active ? '1.5px solid #7C3AED' : '1px solid #F0EEF6' }}>
            <div className="h-7 flex items-center justify-center" style={{ background: slide.bg }}>
              <span className="text-[5px] font-bold text-white">{slide.label}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom toolbar */}
      <div className="flex items-center justify-between px-4 mt-3 pt-2 border-t border-[#F0EEF6]">
        <span className="text-[7px] font-semibold text-[#8B85A0]">Slide 1 of 5</span>
        <div className="flex items-center gap-2">
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z" /></svg>
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#A79FBE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" /><path d="m8.6 13.5 6.8 4M15.4 6.5l-6.8 4" /></svg>
        </div>
      </div>
    </div>
  );
}
