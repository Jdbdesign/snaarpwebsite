// High-fidelity mobile phone screen for PDF Reader Download page.
// Shows: real text content, highlighted passage, comment, and signature field.

export function PdfReaderPhoneScreen() {
  return (
    <div className="pdf-reader-phone-screen">
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
        <span className="text-[9px] font-bold text-[#1B1730] truncate">Advisory Agreement.pdf</span>
        <span className="flex items-center gap-1 rounded-full bg-[#F3EFFF] border border-[#E6DEFA] px-2 py-0.5 text-[7px] font-bold text-[#7C3AED]">
          <svg width="7" height="7" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z" /></svg>
          Sign
        </span>
      </div>

      {/* PDF page with real content */}
      <div className="mx-3 mt-2 rounded-lg bg-white border border-[#EFEDF6] p-3 shadow-sm overflow-hidden">
        {/* Title */}
        <div className="text-[9px] font-extrabold text-[#1B1730] mb-1">Advisory Agreement</div>
        <div className="text-[6px] text-[#8B85A0] mb-2.5">Effective Date: 1 April 2026</div>

        {/* Section 1 */}
        <div className="text-[7px] font-bold text-[#1B1730] mb-1">1. Scope of Services</div>
        <p className="text-[6.5px] leading-[1.5] text-[#5B5670] mb-2">
          The Adviser agrees to provide ongoing financial advisory services including portfolio management, investment strategy, and periodic reviews.
        </p>

        {/* Section 2 with highlight */}
        <div className="text-[7px] font-bold text-[#1B1730] mb-1">2. Term and Termination</div>
        <p className="text-[6.5px] leading-[1.5] text-[#5B5670] mb-1.5">
          This agreement continues for twelve months, <span className="bg-[#FEF3CD] border border-[#FBEBC6] rounded-sm px-0.5">renewable unless terminated with 30 days&apos; notice</span>.
        </p>

        {/* Comment indicator */}
        <div className="flex items-center gap-1.5 rounded-md bg-[#FEF6E7] border border-[#FBEBC6] px-2 py-1 mb-2">
          <span className="w-3 h-3 rounded-full bg-[#FBBF24] flex items-center justify-center flex-shrink-0">
            <span className="text-[4px] font-bold text-white">J</span>
          </span>
          <span className="text-[6px] text-[#92400E]">"Confirm 30-day notice matches our SLA"</span>
        </div>

        {/* Section 3 */}
        <div className="text-[7px] font-bold text-[#1B1730] mb-1">3. Fee Structure</div>
        {/* Mini table */}
        <div className="rounded-md border border-[#F0EEF6] overflow-hidden mb-2.5 text-[5.5px]">
          <div className="grid grid-cols-3 bg-[#FAF9FD] border-b border-[#F0EEF6] font-bold text-[#8B85A0]">
            <span className="py-1 px-1.5">Service</span>
            <span className="py-1 px-1.5">Type</span>
            <span className="py-1 px-1.5">Rate</span>
          </div>
          <div className="grid grid-cols-3 border-b border-[#F7F6FA] text-[#3B3550]">
            <span className="py-1 px-1.5 font-semibold">Portfolio Mgmt</span>
            <span className="py-1 px-1.5">Annual</span>
            <span className="py-1 px-1.5 font-bold">0.75%</span>
          </div>
          <div className="grid grid-cols-3 text-[#3B3550]">
            <span className="py-1 px-1.5 font-semibold">Planning</span>
            <span className="py-1 px-1.5">Fixed</span>
            <span className="py-1 px-1.5 font-bold">£2,500</span>
          </div>
        </div>

        {/* Signature field */}
        <div className="rounded-md border-2 border-dashed border-[#E6DEFA] p-2 flex items-center gap-2">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M17 3a2.85 2.85 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" /></svg>
          <div>
            <div className="text-[6px] font-bold text-[#7C3AED]">Tap to sign</div>
            <div className="text-[5px] text-[#8B85A0]">Add your signature</div>
          </div>
        </div>
      </div>

      {/* Bottom toolbar */}
      <div className="flex items-center justify-around px-4 mt-2 pt-2 border-t border-[#F0EEF6]">
        {[
          { label: 'Highlight', color: '#D97706' },
          { label: 'Comment', color: '#3B82F6' },
          { label: 'Sign', color: '#7C3AED' },
        ].map((tool) => (
          <span key={tool.label} className="flex flex-col items-center gap-0.5">
            <span className="w-5 h-5 rounded-md flex items-center justify-center" style={{ background: `${tool.color}15` }}>
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke={tool.color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z" /></svg>
            </span>
            <span className="text-[6px] font-semibold text-[#8B85A0]">{tool.label}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
