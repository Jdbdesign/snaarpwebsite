// High-fidelity mobile phone screen for Document Download page.
// Shows: simplified document view with visible text and a collaborator cursor.

import { AVATARS } from '../avatarPaths';

export function DocumentPhoneScreen() {
  return (
    <div className="document-phone-screen">
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
        <div className="flex items-center gap-2">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><path d="M14 2v6h6" /></svg>
          <span className="text-[9px] font-bold text-[#1B1730]">Q4 Launch Plan</span>
        </div>
        <div className="flex items-center gap-1">
          <span className="w-4 h-4 rounded-full overflow-hidden border border-white shadow-sm">
            <img src={AVATARS.amaraChen} alt="" className="w-full h-full object-cover" />
          </span>
          <span className="w-4 h-4 rounded-full overflow-hidden border border-white shadow-sm -ml-1.5">
            <img src={AVATARS.arlo} alt="" className="w-full h-full object-cover" />
          </span>
          <span className="text-[7px] font-semibold text-[#0E9384] ml-1">Live</span>
        </div>
      </div>

      {/* Document body */}
      <div className="px-4 py-3">
        {/* Heading */}
        <div className="text-[10px] font-bold text-[#1B1730] mb-2">Q4 Launch Plan</div>

        {/* Paragraph with collaborator cursor */}
        <div className="relative">
          <p className="text-[8px] leading-[1.6] text-[#5B5670] mb-2">
            The campaign launches on October 14 with a coordinated push across email, social, and paid. The landing page goes live one week earlier for
          </p>
          {/* Collaborator cursor */}
          <span className="absolute top-[14px] left-[92px] w-[1px] h-[10px] bg-[#E11D74]" />
          <span className="absolute top-[11px] left-[88px] rounded-sm bg-[#E11D74] px-1 py-[0.5px] text-[5px] font-bold text-white whitespace-nowrap">Amara</span>
        </div>

        <p className="text-[8px] leading-[1.6] text-[#5B5670] mb-2">
          early sign-ups. Creative assets are due by September 28.
        </p>

        {/* Bullet list */}
        <div className="flex flex-col gap-1 ml-2 mb-2">
          <span className="text-[7.5px] text-[#5B5670] flex items-center gap-1.5">
            <span className="w-1 h-1 rounded-full bg-[#7C3AED] flex-shrink-0" />
            Email sequence finalized
          </span>
          <span className="text-[7.5px] text-[#5B5670] flex items-center gap-1.5">
            <span className="w-1 h-1 rounded-full bg-[#7C3AED] flex-shrink-0" />
            Landing page copy approved
          </span>
          <span className="text-[7.5px] text-[#5B5670] flex items-center gap-1.5">
            <span className="w-1 h-1 rounded-full bg-[#7C3AED] flex-shrink-0" />
            Social assets in review
          </span>
        </div>

        {/* Comment indicator */}
        <div className="flex items-center gap-1.5 mt-2 rounded-lg bg-[#FEF6E7] border border-[#FBEBC6] px-2 py-1.5">
          <span className="w-3.5 h-3.5 rounded-full overflow-hidden flex-shrink-0">
            <img src={AVATARS.arlo} alt="" className="w-full h-full object-cover" />
          </span>
          <span className="text-[7px] text-[#92400E]">"Should we move this up a week?"</span>
        </div>
      </div>
    </div>
  );
}
