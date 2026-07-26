// High-fidelity mobile phone screen for AI Compose Download page.
// Shows: compose screen with a generated draft, Shorter/Medium/Longer
// toggle, and Copy/Insert/Regenerate actions - condensed for mobile.

export function AIComposePhoneScreen() {
  return (
    <div className="ai-compose-phone-screen">
      {/* Status bar */}
      <div className="flex items-center justify-between px-4 pt-2 pb-1">
        <span className="text-[8px] font-semibold text-[#5B5670]">9:41</span>
        <div className="flex items-center gap-1">
          <span className="block h-[6px] w-[14px] rounded-sm bg-[#1B1730]" />
          <span className="block h-[6px] w-[6px] rounded-full bg-[#1B1730]" />
        </div>
      </div>

      {/* Compose header */}
      <div className="flex items-center justify-between px-4 py-2 border-b border-[#F0EEF6]">
        <div className="flex items-center gap-2">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7" /></svg>
          <span className="text-[10px] font-bold text-[#1B1730]">New Message</span>
        </div>
        <span className="flex items-center gap-1 rounded-full bg-[#F3EFFF] px-2 py-0.5 text-[8px] font-bold text-[#7C3AED]">
          <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3v18M3 12l4-4 4 4M13 8l4-4 4 4" /></svg>
          AI
        </span>
      </div>

      {/* To / Subject */}
      <div className="px-4 py-2 border-b border-[#F0EEF6]">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-[8px] font-semibold text-[#A79FBE]">To:</span>
          <span className="text-[8px] font-medium text-[#1B1730]">alex@client.io</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[8px] font-semibold text-[#A79FBE]">Subject:</span>
          <span className="text-[8px] font-medium text-[#1B1730]">Invoice follow-up</span>
        </div>
      </div>

      {/* Prompt area */}
      <div className="mx-3 mt-3 rounded-xl bg-[#FBFAFE] border border-[#F0EDF7] p-3">
        <span className="text-[7px] font-bold tracking-wider text-[#A79FBE] uppercase">Prompt</span>
        <p className="mt-1 text-[9px] leading-relaxed text-[#5B5670]">Follow up about the invoice, keep it friendly</p>
        <div className="mt-2 flex justify-end">
          <span className="flex items-center gap-1 rounded-full bg-[#7C3AED] px-2.5 py-1 text-[7px] font-bold text-white">
            <svg width="7" height="7" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3v18M3 12l4-4 4 4M13 8l4-4 4 4" /></svg>
            Generate
          </span>
        </div>
      </div>

      {/* Generated draft */}
      <div className="mx-3 mt-2.5 rounded-xl bg-[#F3EFFF] border border-[#E6DEFA] p-3">
        <div className="flex items-center gap-1 mb-2">
          <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3v18M3 12l4-4 4 4M13 8l4-4 4 4" /></svg>
          <span className="text-[7px] font-bold text-[#7C3AED] tracking-wide">DRAFT READY</span>
        </div>
        <p className="text-[8.5px] leading-[1.5] text-[#1B1730]">
          Hi Alex,<br /><br />
          Just a quick note to follow up on the invoice I sent last week. Let me know if you need anything else.<br /><br />
          Best,<br />Grace
        </p>

        {/* Length toggle */}
        <div className="mt-2.5 flex items-center gap-1.5">
          <span className="rounded-full border border-[#E6DEFA] bg-white px-2 py-0.5 text-[7px] font-semibold text-[#8B85A0]">Shorter</span>
          <span className="rounded-full bg-[#7C3AED] px-2 py-0.5 text-[7px] font-bold text-white">Medium</span>
          <span className="rounded-full border border-[#E6DEFA] bg-white px-2 py-0.5 text-[7px] font-semibold text-[#8B85A0]">Longer</span>
        </div>

        {/* Action buttons */}
        <div className="mt-2.5 flex items-center gap-1.5">
          <span className="flex items-center gap-1 rounded-full bg-[#7C3AED] px-2.5 py-1 text-[7px] font-bold text-white">
            <svg width="7" height="7" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
            Insert
          </span>
          <span className="flex items-center gap-1 rounded-full border border-[#E6DEFA] bg-white px-2 py-1 text-[7px] font-semibold text-[#7C3AED]">
            <svg width="7" height="7" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M1 4v6h6M23 20v-6h-6" /><path d="M20.5 9A9 9 0 0 0 5.6 5.6L1 10m22 4-4.6 4.4A9 9 0 0 1 3.5 15" /></svg>
            Regenerate
          </span>
        </div>
      </div>
    </div>
  );
}
