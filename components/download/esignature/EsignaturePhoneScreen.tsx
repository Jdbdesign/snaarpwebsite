// High-fidelity mobile phone screen for eSignature Download page.
// Shows: document to sign with "Tap to sign" field and signer status.

export function EsignaturePhoneScreen() {
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
        <span className="text-[10px] font-bold text-[#1B1730]">Sign Document</span>
        <span className="text-[7px] font-bold text-[#D97706]">1 of 2 signed</span>
      </div>

      {/* Document preview */}
      <div className="px-3 pt-2.5 flex flex-col gap-2">
        {/* Document card */}
        <div className="rounded-xl bg-[#F7F6FA] border border-[#F0EEF6] p-3">
          <div className="text-[7px] font-bold text-[#5B5670] mb-1">Service Agreement</div>
          <div className="text-[6px] text-[#8B85A0] mb-2">Sent by Acme Corp</div>
          {/* Simulated document lines */}
          <div className="flex flex-col gap-1 mb-3">
            <div className="w-full h-[3px] rounded bg-[#E6DEFA]" />
            <div className="w-[85%] h-[3px] rounded bg-[#E6DEFA]" />
            <div className="w-[90%] h-[3px] rounded bg-[#E6DEFA]" />
            <div className="w-[70%] h-[3px] rounded bg-[#E6DEFA]" />
          </div>
          {/* Signature field */}
          <div className="rounded-lg border-2 border-dashed border-[#7C3AED] p-3 bg-[#F3EFFF] flex items-center justify-center">
            <div className="text-center">
              <svg className="mx-auto mb-1" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" /></svg>
              <span className="text-[7px] font-bold text-[#7C3AED]">Tap to Sign</span>
            </div>
          </div>
        </div>

        {/* Signer status */}
        <div>
          <span className="text-[7px] font-bold text-[#5B5670] uppercase tracking-wider mb-1.5 block">Signers</span>
          <div className="flex flex-col gap-1">
            <div className="rounded-lg bg-[#ECFDF9] border border-[#CDF5EE] p-2 flex items-center justify-between">
              <span className="text-[7px] font-semibold text-[#1B1730]">Sarah Johnson (Acme)</span>
              <span className="text-[6px] font-bold text-[#0E9384]">Signed ✓</span>
            </div>
            <div className="rounded-lg bg-white border border-[#F0EEF6] p-2 flex items-center justify-between">
              <span className="text-[7px] font-semibold text-[#1B1730]">You</span>
              <span className="text-[6px] font-bold text-[#D97706]">Pending</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
