// High-fidelity mobile phone screen for Zeus Contacts Download page.
// Shows: enriched contact card view optimized for mobile.

import { AVATARS } from '../avatarPaths';

export function ZeusContactsPhoneScreen() {
  return (
    <div className="zeus-contacts-phone-screen">
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
        <div className="flex items-center gap-1.5">
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>
          <span className="text-[9px] font-bold text-[#1B1730]">Zeus Contacts</span>
        </div>
        <span className="text-[6.5px] font-semibold text-[#7C3AED]">124 credits</span>
      </div>

      {/* Contact card */}
      <div className="mx-3 mt-2.5 rounded-xl bg-white border border-[#F0EEF6] p-3 shadow-sm">
        <div className="flex items-center gap-2.5 mb-2.5 pb-2 border-b border-[#F0EEF6]">
          <span className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0">
            <img src={AVATARS.priyaNair} alt="" className="w-full h-full object-cover" />
          </span>
          <div className="flex-1">
            <div className="text-[9px] font-bold text-[#1B1730]">Sarah Chen</div>
            <div className="text-[6.5px] text-[#5B5670]">VP of Sales · Globex Ltd</div>
          </div>
          <span className="flex items-center gap-0.5 rounded-full bg-[#ECFDF9] border border-[#CDF5EE] px-1.5 py-0.5 text-[5.5px] font-bold text-[#0E9384]">
            <svg width="5" height="5" viewBox="0 0 24 24" fill="none" stroke="#0E9384" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
            Verified
          </span>
        </div>

        {/* Fields */}
        <div className="flex flex-col gap-1.5">
          {[
            { label: 'Email', value: 's.chen@globex.io' },
            { label: 'Phone', value: '+44 7700 900123' },
            { label: 'Location', value: 'London, UK' },
            { label: 'Company size', value: '120–250 employees' },
          ].map((f) => (
            <div key={f.label} className="flex items-center justify-between px-2 py-1.5 rounded-md bg-[#FBFAFE] border border-[#F0EEF6]">
              <span className="text-[6px] font-bold text-[#A79FBE] uppercase">{f.label}</span>
              <span className="text-[7px] font-semibold text-[#1B1730]">{f.value}</span>
            </div>
          ))}
        </div>

        {/* Lead score */}
        <div className="flex items-center justify-between mt-2.5 pt-2 border-t border-[#F0EEF6]">
          <div>
            <span className="text-[6px] font-bold text-[#A79FBE] uppercase">Lead Score</span>
            <div className="text-[12px] font-extrabold text-[#7C3AED]">87</div>
          </div>
          <span className="flex items-center gap-1 rounded-full bg-[#7C3AED] px-2.5 py-1.5 text-[7px] font-bold text-white">
            Add to CRM
          </span>
        </div>
      </div>

      {/* Quick results below */}
      <div className="mx-3 mt-2 flex flex-col gap-1">
        {[
          { name: 'Marcus Webb', role: 'CTO · Initech' },
          { name: 'Elena Ruiz', role: 'Head of Ops · Wonka' },
        ].map((c) => (
          <div key={c.name} className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg border border-[#F0EEF6]">
            <span className="w-4 h-4 rounded-full bg-[#F3EFFF] flex items-center justify-center flex-shrink-0">
              <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="4" /><path d="M4 21c0-4 3.6-6.5 8-6.5s8 2.5 8 6.5" /></svg>
            </span>
            <div>
              <div className="text-[7px] font-bold text-[#1B1730]">{c.name}</div>
              <div className="text-[6px] text-[#8B85A0]">{c.role}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
