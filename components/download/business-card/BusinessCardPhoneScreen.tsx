// High-fidelity mobile phone screen for Business Card Download page.
// Shows: rendered digital card front and center with Share button and QR code.

import { AVATARS } from '../avatarPaths';

export function BusinessCardPhoneScreen() {
  return (
    <div className="business-card-phone-screen">
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
        <span className="text-[10px] font-bold text-[#1B1730]">My Card</span>
        <span className="flex items-center gap-1 rounded-full bg-[#ECFDF9] border border-[#CDF5EE] px-2 py-0.5 text-[7px] font-bold text-[#0E9384]">
          <svg width="6" height="6" viewBox="0 0 24 24" fill="none" stroke="#0E9384" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
          Live
        </span>
      </div>

      {/* Card */}
      <div className="mx-3 mt-3 rounded-2xl bg-gradient-to-br from-[#FBFAFE] to-[#F3EFFF] border border-[#E6DEFA] p-4 text-center">
        {/* Avatar */}
        <div className="mx-auto w-10 h-10 rounded-full overflow-hidden shadow-lg">
          <img src={AVATARS.jacob} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="mt-2 text-[10px] font-bold text-[#1B1730]">Jacob Mitchell</div>
        <div className="text-[7.5px] text-[#8B85A0] mt-0.5">Head of Design · Snaarp</div>
        {/* Contact icons */}
        <div className="flex items-center justify-center gap-1.5 mt-2.5">
          {['phone', 'mail', 'globe', 'linkedin'].map((key) => (
            <span key={key} className="w-5 h-5 rounded-md bg-[#F3EFFF] border border-[#E6DEFA] flex items-center justify-center">
              <span className="block w-2.5 h-2.5 rounded-full bg-[#C4B5FD]" />
            </span>
          ))}
        </div>
      </div>

      {/* QR code section */}
      <div className="mx-3 mt-2.5 rounded-xl bg-[#FBFAFE] border border-[#F0EDF7] p-3 flex items-center gap-3">
        {/* Mini QR */}
        <div className="w-10 h-10 rounded-lg bg-white border border-[#E6DEFA] flex items-center justify-center flex-shrink-0">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="2" width="8" height="8" rx="1" />
            <rect x="14" y="2" width="8" height="8" rx="1" />
            <rect x="2" y="14" width="8" height="8" rx="1" />
            <path d="M14 14h2v2h-2zM20 14h2v2h-2zM14 20h2v2h-2zM20 20h2v2h-2zM17 17h2v2h-2z" />
          </svg>
        </div>
        <div className="flex-1">
          <div className="text-[8px] font-bold text-[#1B1730]">Scan to save</div>
          <div className="text-[7px] text-[#8B85A0]">snaarp.com/card/jacob-mitchell</div>
        </div>
      </div>

      {/* Share button */}
      <div className="mx-3 mt-2.5">
        <span className="flex items-center justify-center gap-1.5 w-full rounded-full bg-[#7C3AED] py-2.5 text-[9px] font-bold text-white shadow-lg">
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" /><path d="m8.6 13.5 6.8 4M15.4 6.5l-6.8 4" /></svg>
          Share Card
        </span>
      </div>
    </div>
  );
}
