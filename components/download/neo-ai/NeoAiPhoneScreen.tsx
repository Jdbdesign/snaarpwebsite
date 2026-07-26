// High-fidelity mobile phone screen for Neo AI Download page.
// Shows: chat conversation with Neo AI showing a question and formatted response.

export function NeoAiPhoneScreen() {
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
        <div className="flex items-center gap-1.5">
          <span className="w-4 h-4 rounded-full bg-gradient-to-br from-[#7C3AED] to-[#4C1D95] flex items-center justify-center">
            <span className="text-[6px] font-bold text-white">N</span>
          </span>
          <span className="text-[10px] font-bold text-[#1B1730]">Neo AI</span>
        </div>
        <span className="text-[6px] font-semibold text-[#0E9384] px-1.5 py-0.5 rounded bg-[#ECFDF9]">Connected</span>
      </div>

      {/* Chat messages */}
      <div className="px-3 pt-2.5 flex flex-col gap-2">
        {/* User message */}
        <div className="flex justify-end">
          <div className="max-w-[80%] py-2 px-2.5 rounded-xl rounded-br-sm bg-[#7C3AED]">
            <span className="text-[7px] font-semibold text-white">Who hasn&apos;t completed their security training yet?</span>
          </div>
        </div>

        {/* Neo AI response */}
        <div className="flex gap-1.5">
          <span className="w-4 h-4 rounded-full bg-gradient-to-br from-[#7C3AED] to-[#4C1D95] flex-shrink-0 flex items-center justify-center mt-0.5">
            <span className="text-[5px] font-bold text-white">N</span>
          </span>
          <div className="max-w-[85%] py-2 px-2.5 rounded-xl rounded-tl-sm bg-[#F7F6FA] border border-[#F0EEF6]">
            <div className="text-[6.5px] font-bold text-[#1B1730] mb-1.5">I checked Elearn for you:</div>
            <div className="text-[6px] text-[#5B5670] mb-2">3 team members haven&apos;t finished Security Awareness:</div>
            {[
              { name: 'Arlo Davis', progress: '45%' },
              { name: 'Marcus Webb', progress: '28%' },
              { name: 'Priya Nair', progress: '0%' },
            ].map((person) => (
              <div key={person.name} className="flex items-center justify-between py-0.5">
                <span className="text-[6px] font-semibold text-[#1B1730]">{person.name}</span>
                <span className="text-[5.5px] font-bold text-[#D97706]">{person.progress}</span>
              </div>
            ))}
            <div className="text-[5.5px] text-[#8B85A0] mt-2 italic">Source: Elearn \u2022 Security Awareness course</div>
          </div>
        </div>

        {/* Suggestions */}
        <div className="flex flex-col gap-1 mt-1">
          <span className="text-[5.5px] font-bold text-[#8B85A0]">Follow up:</span>
          <div className="flex flex-wrap gap-1">
            {['Send them a reminder', 'Show deadline status'].map((s) => (
              <span key={s} className="text-[5.5px] font-semibold text-[#7C3AED] px-2 py-1 rounded-full bg-[#F3EFFF] border border-[#E6DEFA]">{s}</span>
            ))}
          </div>
        </div>

        {/* Input area */}
        <div className="mt-2 flex items-center gap-2 p-2 rounded-xl bg-white border border-[#F0EEF6]">
          <span className="text-[6.5px] text-[#A79FBE] flex-1">Ask Neo anything...</span>
          <span className="w-5 h-5 rounded-full bg-[#7C3AED] flex items-center justify-center">
            <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" /></svg>
          </span>
        </div>
      </div>
    </div>
  );
}
