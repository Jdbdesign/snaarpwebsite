import { SheetsRevealSection } from './SheetsRevealSection';

export function SheetsAltCollab() {
  return (
    <section style={{ background: "#F7F7F7", paddingTop: "92px", paddingBottom: "92px" }}>
      <SheetsRevealSection className="max-w-7xl mx-auto px-6 lg:px-10" style={{ display: "grid", gridTemplateColumns: "1.05fr 1fr", gap: "64px", alignItems: "center" }}>
        {/* collab mockup */}
        <div data-sheets-reveal="" style={{ order: "0", position: "relative" }}>
          <div style={{ background: "#fff", borderRadius: "20px", border: "1px solid #ECE9F5", boxShadow: "0 30px 60px -30px rgba(37,22,84,.3)", overflow: "hidden" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", padding: "12px 15px", borderBottom: "1px solid #F0EEF6", background: "#FBFAFE" }}>
              <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#FB7185" }}></span><span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#FBBF24" }}></span><span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#34D399" }}></span>
              <span style={{ marginLeft: "auto", display: "flex" }}>
                <span style={{ width: "24px", height: "24px", borderRadius: "50%", background: "#EDE9FE", border: "2px solid #fff", fontSize: "9px", fontWeight: "600", color: "#7C3AED", display: "flex", alignItems: "center", justifyContent: "center" }}>RT</span>
                <span style={{ width: "24px", height: "24px", borderRadius: "50%", background: "#D5F5EF", border: "2px solid #fff", marginLeft: "-8px", fontSize: "9px", fontWeight: "600", color: "#0E9384", display: "flex", alignItems: "center", justifyContent: "center" }}>JM</span>
                <span style={{ width: "24px", height: "24px", borderRadius: "50%", background: "#FDE6C9", border: "2px solid #fff", marginLeft: "-8px", fontSize: "9px", fontWeight: "600", color: "#B45309", display: "flex", alignItems: "center", justifyContent: "center" }}>AS</span>
              </span>
            </div>
            <div style={{ position: "relative", padding: "0" }}>
              <div style={{ display: "grid", gridTemplateColumns: "38px 1.15fr repeat(4,1fr)", fontSize: "12.5px", color: "#3B3550" }}>
                <div style={{ background: "#FAF9FD", borderBottom: "1px solid #EEECF5", borderRight: "1px solid #EEECF5", padding: "13px 0", textAlign: "center", color: "#B4AEC6", fontSize: "10.5px" }}></div>
                <div style={{ background: "#FAF9FD", borderBottom: "1px solid #EEECF5", borderRight: "1px solid #EEECF5", padding: "13px 13px", fontWeight: "600", color: "#8B85A0", fontSize: "10.5px" }}>REGION</div>
                <div style={{ background: "#FAF9FD", borderBottom: "1px solid #EEECF5", borderRight: "1px solid #EEECF5", padding: "13px 13px", fontWeight: "600", color: "#8B85A0", fontSize: "10.5px" }}>Q1</div>
                <div style={{ background: "#FAF9FD", borderBottom: "1px solid #EEECF5", borderRight: "1px solid #EEECF5", padding: "13px 13px", fontWeight: "600", color: "#8B85A0", fontSize: "10.5px" }}>Q2</div>
                <div style={{ background: "#FAF9FD", borderBottom: "1px solid #EEECF5", borderRight: "1px solid #EEECF5", padding: "13px 13px", fontWeight: "600", color: "#8B85A0", fontSize: "10.5px" }}>Q3</div>
                <div style={{ background: "#FAF9FD", borderBottom: "1px solid #EEECF5", padding: "13px 13px", fontWeight: "600", color: "#8B85A0", fontSize: "10.5px" }}>Q4</div>

                <div style={{ background: "#FAF9FD", borderBottom: "1px solid #F3F1F9", borderRight: "1px solid #EEECF5", padding: "16px 0", textAlign: "center", color: "#B4AEC6" }}>1</div>
                <div style={{ borderBottom: "1px solid #F3F1F9", borderRight: "1px solid #F3F1F9", padding: "16px 13px", fontWeight: "500" }}>North</div>
                <div style={{ borderBottom: "1px solid #F3F1F9", borderRight: "1px solid #F3F1F9", padding: "16px 13px", fontVariantNumeric: "tabular-nums" }}>£9,800</div>
                <div style={{ borderBottom: "1px solid #F3F1F9", borderRight: "1px solid #F3F1F9", padding: "16px 13px", fontVariantNumeric: "tabular-nums" }}>£11,100</div>
                <div style={{ borderBottom: "1px solid #F3F1F9", borderRight: "1px solid #F3F1F9", padding: "16px 13px", fontVariantNumeric: "tabular-nums" }}>£12,400</div>
                <div style={{ borderBottom: "1px solid #F3F1F9", padding: "16px 13px", fontVariantNumeric: "tabular-nums", position: "relative" }}>£14,900</div>

                <div style={{ background: "#FAF9FD", borderBottom: "1px solid #F3F1F9", borderRight: "1px solid #EEECF5", padding: "16px 0", textAlign: "center", color: "#B4AEC6" }}>2</div>
                <div style={{ borderBottom: "1px solid #F3F1F9", borderRight: "1px solid #F3F1F9", padding: "16px 13px", fontWeight: "500" }}>South</div>
                <div style={{ borderBottom: "1px solid #F3F1F9", borderRight: "1px solid #F3F1F9", padding: "16px 13px", fontVariantNumeric: "tabular-nums" }}>£7,200</div>
                <div style={{ borderBottom: "1px solid #F3F1F9", borderRight: "1px solid #F3F1F9", padding: "16px 13px", fontVariantNumeric: "tabular-nums" }}>£8,400</div>
                <div style={{ borderBottom: "1px solid #F3F1F9", borderRight: "1px solid #F3F1F9", padding: "16px 13px", fontVariantNumeric: "tabular-nums", position: "relative", borderRadius: "3px", animation: "sheets-edit-sel 8s ease-in-out infinite" }}>£9,850<span style={{ display: "inline-block", width: "2px", height: "13px", background: "#0E9384", marginLeft: "1px", verticalAlign: "-2px", animation: "sheets-edit-caret 8s ease-in-out infinite" }}></span></div>
                <div style={{ borderBottom: "1px solid #F3F1F9", padding: "16px 13px", fontVariantNumeric: "tabular-nums" }}>£11,200</div>

                <div style={{ background: "#FAF9FD", borderBottom: "1px solid #F3F1F9", borderRight: "1px solid #EEECF5", padding: "16px 0", textAlign: "center", color: "#B4AEC6" }}>3</div>
                <div style={{ borderBottom: "1px solid #F3F1F9", borderRight: "1px solid #F3F1F9", padding: "16px 13px", fontWeight: "500" }}>West</div>
                <div style={{ borderBottom: "1px solid #F3F1F9", borderRight: "1px solid #F3F1F9", padding: "16px 13px", fontVariantNumeric: "tabular-nums" }}>£5,600</div>
                <div style={{ borderBottom: "1px solid #F3F1F9", borderRight: "1px solid #F3F1F9", padding: "16px 13px", fontVariantNumeric: "tabular-nums" }}>£6,900</div>
                <div style={{ borderBottom: "1px solid #F3F1F9", borderRight: "1px solid #F3F1F9", padding: "16px 13px", fontVariantNumeric: "tabular-nums" }}>£7,300</div>
                <div style={{ borderBottom: "1px solid #F3F1F9", padding: "16px 13px", fontVariantNumeric: "tabular-nums" }}>£8,640</div>

                <div style={{ background: "#FAF9FD", borderRight: "1px solid #EEECF5", padding: "16px 0", textAlign: "center", color: "#B4AEC6" }}>4</div>
                <div style={{ borderRight: "1px solid #F3F1F9", padding: "16px 13px", fontWeight: "500" }}>East</div>
                <div style={{ borderRight: "1px solid #F3F1F9", padding: "16px 13px", fontVariantNumeric: "tabular-nums" }}>£3,900</div>
                <div style={{ borderRight: "1px solid #F3F1F9", padding: "16px 13px", fontVariantNumeric: "tabular-nums" }}>£4,600</div>
                <div style={{ borderRight: "1px solid #F3F1F9", padding: "16px 13px", fontVariantNumeric: "tabular-nums" }}>£5,120</div>
                <div style={{ padding: "16px 13px", fontVariantNumeric: "tabular-nums" }}>£6,300</div>
              </div>

              {/* comment marker on Q4 North + click ring */}
              <div style={{ position: "absolute", top: "56px", right: "14px", zIndex: "4" }}>
                <div style={{ position: "relative", width: "28px", height: "28px", borderRadius: "50% 50% 50% 3px", background: "#FBBF24", boxShadow: "0 6px 14px -4px rgba(180,83,9,.5)", display: "flex", alignItems: "center", justifyContent: "center", animation: "sheets-click-tap 8s ease-in-out infinite" }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                </div>
                <div style={{ position: "absolute", inset: "-6px", borderRadius: "50%", border: "2px solid #FBBF24", animation: "sheets-click-ring 8s ease-in-out infinite", pointerEvents: "none" }}></div>
              </div>

              {/* comment popover */}
              <div style={{ position: "absolute", top: "14px", right: "52px", width: "176px", background: "#fff", border: "1px solid #EDEBF2", borderRadius: "12px", boxShadow: "0 16px 32px -12px rgba(37,22,84,.36)", padding: "11px 12px", zIndex: "6", transformOrigin: "bottom right", animation: "sheets-comment-pop 8s ease-in-out infinite" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "7px" }}>
                  <span style={{ width: "20px", height: "20px", borderRadius: "50%", background: "#EDE9FE", color: "#7C3AED", fontSize: "8.5px", fontWeight: "700", display: "flex", alignItems: "center", justifyContent: "center" }}>RT</span>
                  <span style={{ fontSize: "10.5px", fontWeight: "600", color: "#211C36" }}>Ray T.</span>
                  <span style={{ marginLeft: "auto", fontSize: "9px", color: "#B4AEC6" }}>now</span>
                </div>
                <p style={{ margin: "7px 0 0", fontSize: "10.5px", lineHeight: "1.45", color: "#5B5670" }}>Can we confirm the Q4 North figure before the review?</p>
              </div>

              {/* Ray cursor tapping the comment */}
              <div style={{ position: "absolute", top: "68px", right: "32px", zIndex: "5", animation: "sheets-click-tap 8s ease-in-out infinite" }}>
                <svg width="17" height="17" viewBox="0 0 24 24" fill="#7C3AED"><path d="m3 3 7.5 18 2.5-7 7-2.5z"></path></svg>
                <span style={{ position: "absolute", top: "15px", left: "13px", padding: "2px 7px", borderRadius: "6px", background: "#7C3AED", color: "#fff", fontSize: "9.5px", fontWeight: "600", whiteSpace: "nowrap" }}>Ray T.</span>
              </div>

              {/* Jo cursor editing South / Q3 */}
              <div style={{ position: "absolute", top: "120px", left: "360px", zIndex: "5", animation: "sheets-work-nudge 8s ease-in-out infinite" }}>
                <svg width="17" height="17" viewBox="0 0 24 24" fill="#0E9384"><path d="m3 3 7.5 18 2.5-7 7-2.5z"></path></svg>
                <span style={{ position: "absolute", top: "15px", left: "13px", padding: "2px 7px", borderRadius: "6px", background: "#0E9384", color: "#fff", fontSize: "9.5px", fontWeight: "600", whiteSpace: "nowrap" }}>Jo M.</span>
              </div>
            </div>
          </div>
        </div>
        <div data-sheets-reveal="" data-sheets-reveal-delay="120">
          <h2 className="sheets-row-heading" style={{ margin: "0", color: "#1B1730" }}>Built for working together, not just one person.</h2>
          <div style={{ marginTop: "28px", display: "flex", flexDirection: "column", gap: "22px" }}>
            <div style={{ display: "flex", gap: "15px" }}>
              <div style={{ flexShrink: "0", width: "38px", height: "38px", borderRadius: "11px", background: "#F5F3FF", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path><circle cx="12" cy="12" r="3"></circle></svg>
              </div>
              <div><div className="sheets-row-item-title" style={{ color: "#1B1730" }}>See edits as they happen.</div><p className="sheets-row-item-desc" style={{ margin: "5px 0 0", color: "#5B5670" }}>Everyone&apos;s changes and cursors update live, no &quot;who has the latest version&quot; confusion.</p></div>
            </div>
            <div style={{ display: "flex", gap: "15px" }}>
              <div style={{ flexShrink: "0", width: "38px", height: "38px", borderRadius: "11px", background: "#FEF6E7", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#B45309" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
              </div>
              <div><div className="sheets-row-item-title" style={{ color: "#1B1730" }}>Comment without cluttering the sheet.</div><p className="sheets-row-item-desc" style={{ margin: "5px 0 0", color: "#5B5670" }}>Leave a note on a cell instead of a side conversation in chat.</p></div>
            </div>
            <div style={{ display: "flex", gap: "15px" }}>
              <div style={{ flexShrink: "0", width: "38px", height: "38px", borderRadius: "11px", background: "#ECFDF9", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#0E9384" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
              </div>
              <div><div className="sheets-row-item-title" style={{ color: "#1B1730" }}>Control who can edit.</div><p className="sheets-row-item-desc" style={{ margin: "5px 0 0", color: "#5B5670" }}>Set view-only or edit access per sheet, down to specific people.</p></div>
            </div>
          </div>
        </div>
      </SheetsRevealSection>
    </section>
  );
}
