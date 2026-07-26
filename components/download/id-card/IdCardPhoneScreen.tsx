// High-fidelity mobile phone screen for ID Card Download page.
// Shows: digital ID card front and center with QR code and "Tap to verify" button.

export function IdCardPhoneScreen() {
  return (
    <div className="crm-phone-screen">
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
        <span className="text-[10px] font-bold text-[#1B1730]">My ID Card</span>
        <span className="text-[6.5px] font-bold text-[#0E9384] px-1.5 py-0.5 rounded bg-[#ECFDF9]">Verified</span>
      </div>

      {/* Digital ID Card */}
      <div className="px-3 pt-3 flex flex-col items-center gap-2">
        <div className="w-full rounded-xl bg-gradient-to-br from-[#7C3AED] to-[#4C1D95] p-4 text-center">
          {/* Company badge */}
          <div className="text-[7px] font-bold text-white/80 tracking-wider uppercase mb-2">Snaarp Technologies</div>
          {/* Avatar placeholder */}
          <div className="w-12 h-12 rounded-full bg-white/20 mx-auto mb-2 flex items-center justify-center border-2 border-white/40">
            <span className="text-[14px] font-bold text-white">JS</span>
          </div>
          {/* Name */}
          <div className="text-[10px] font-bold text-white mb-0.5">Jacob Smith</div>
          <div className="text-[7px] text-white/80 mb-1">Senior Engineer</div>
          <div className="text-[6px] text-white/60">Engineering &middot; Level 3 Access</div>
          {/* QR Code placeholder */}
          <div className="mt-3 mx-auto w-14 h-14 rounded-lg bg-white p-1">
            <div className="w-full h-full rounded bg-[#1B1730] grid grid-cols-5 grid-rows-5 gap-[1px] p-[3px]">
              {Array.from({ length: 25 }).map((_, i) => (
                <span key={i} className={`rounded-[1px] ${[0,1,4,5,6,9,10,12,14,15,16,19,20,21,24].includes(i) ? 'bg-white' : 'bg-transparent'}`} />
              ))}
            </div>
          </div>
          <div className="text-[5.5px] text-white/60 mt-1.5">EMP-2847 &middot; Expires Dec 2026</div>
        </div>

        {/* Tap to verify button */}
        <div className="w-full py-2.5 rounded-xl bg-[#0E9384] text-center">
          <span className="text-[8px] font-bold text-white">Tap to Verify</span>
        </div>

        {/* Access info */}
        <div className="w-full rounded-lg bg-[#F7F6FA] border border-[#F0EEF6] p-2.5">
          <div className="text-[6.5px] font-bold text-[#5B5670] mb-1.5">Building Access</div>
          <div className="flex items-center justify-between text-[6px]">
            <span className="text-[#8B85A0]">Main Office</span>
            <span className="text-[#0E9384] font-bold">Level 3</span>
          </div>
          <div className="flex items-center justify-between text-[6px] mt-1">
            <span className="text-[#8B85A0]">Server Room</span>
            <span className="text-[#0E9384] font-bold">Authorized</span>
          </div>
          <div className="flex items-center justify-between text-[6px] mt-1">
            <span className="text-[#8B85A0]">Parking Garage</span>
            <span className="text-[#0E9384] font-bold">B1-B3</span>
          </div>
        </div>
      </div>
    </div>
  );
}
