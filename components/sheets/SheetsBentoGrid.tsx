import type { CSSProperties } from 'react';
import { SheetsRevealSection } from './SheetsRevealSection';

export function SheetsBentoGrid() {
  return (
    <section style={{ background: "#F7F7F7", paddingTop: "92px", paddingBottom: "92px" }}>
      <SheetsRevealSection className="max-w-7xl mx-auto px-6 lg:px-10">
        <div data-sheets-reveal="" style={{ textAlign: "center", maxWidth: "640px", margin: "0 auto 52px" }}>
          <span style={{ fontSize: "11.5px", fontWeight: "600", letterSpacing: ".14em", color: "#7C3AED", textTransform: "uppercase" }}>Why teams choose Sheets</span>
          <h2 className="sheets-section-heading" style={{ margin: "14px 0 0", color: "#1B1730" }}>A spreadsheet that keeps up with your team.</h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1.35fr 1fr", gridTemplateRows: "auto auto", gap: "22px" }}>
          {/* big hero cell: Connected to CRM */}
          <div data-sheets-reveal="" style={{ gridRow: "span 2", background: "#fff", borderRadius: "22px", padding: "38px", border: "1px solid #EEEDF3", boxShadow: "0 20px 44px -28px rgba(37,22,84,.26)", display: "flex", flexDirection: "column" }}>
            <span style={{ display: "inline-flex", alignSelf: "flex-start", alignItems: "center", gap: "7px", padding: "5px 12px", borderRadius: "999px", background: "#ECFDF9", color: "#0E9384", fontSize: "11.5px", fontWeight: "600", border: "1px solid #CDF5EE", whiteSpace: "nowrap" }}>Core differentiator</span>
            <h3 className="sheets-card-title" style={{ margin: "18px 0 0", color: "#1B1730" }}>Connected to CRM</h3>
            <p className="sheets-card-desc" style={{ margin: "11px 0 0", color: "#5B5670", maxWidth: "400px" }}>Pull live numbers from your CRM into a sheet — no exporting and re-importing.</p>
            {/* illustration: live values moving from CRM into the sheet */}
            <div style={{ marginTop: "30px", flex: "1", minHeight: "210px", background: "linear-gradient(160deg,#FBFAFE,#F4F1FC)", borderRadius: "16px", border: "1px solid #F0EEF7", position: "relative", display: "flex", alignItems: "center", gap: "14px", padding: "24px", overflow: "hidden" }}>
              <div style={{ width: "142px", flexShrink: "0", background: "#fff", border: "1px solid #E7E2F5", borderRadius: "12px", boxShadow: "0 12px 24px -16px rgba(37,22,84,.34)", overflow: "hidden" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "6px", padding: "8px 10px", background: "#ECFDF9", borderBottom: "1px solid #CDF5EE" }}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#0E9384" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5v14a9 3 0 0 0 18 0V5"></path><path d="M3 12a9 3 0 0 0 18 0"></path></svg>
                  <span style={{ fontSize: "10px", fontWeight: "600", color: "#0E9384" }}>Snaarp CRM</span>
                  <span style={{ marginLeft: "auto", width: "5px", height: "5px", borderRadius: "50%", background: "#14B8A6", animation: "sheets-badge-glow 2.2s ease-in-out infinite" }}></span>
                </div>
                <div style={{ padding: "5px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "5px 7px", fontSize: "9.5px", color: "#5B5670", borderRadius: "5px", animation: "sheets-range-hi 6s ease-in-out infinite" }}><span>Northwind</span><span style={{ fontWeight: "700", color: "#211C36" }}>£4.2k</span></div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "5px 7px", fontSize: "9.5px", color: "#5B5670", borderRadius: "5px", animation: "sheets-range-hi 6s ease-in-out infinite", animationDelay: "1.5s" }}><span>Brightpath</span><span style={{ fontWeight: "700", color: "#211C36" }}>£5.6k</span></div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "5px 7px", fontSize: "9.5px", color: "#5B5670", borderRadius: "5px", animation: "sheets-range-hi 6s ease-in-out infinite", animationDelay: "3s" }}><span>Vantage</span><span style={{ fontWeight: "700", color: "#211C36" }}>£6.3k</span></div>
                </div>
              </div>
              <div style={{ flex: "1", position: "relative", height: "2px", minWidth: "34px", background: "repeating-linear-gradient(90deg,#DFD8F2 0 5px,transparent 5px 11px)" }}>
                <div data-flowdot="" style={{ position: "absolute", top: "calc(50% - 5px)", width: "10px", height: "10px", borderRadius: "50%", background: "#14B8A6", boxShadow: "0 0 10px rgba(20,184,166,.75)", animation: "sheets-flow-dot 3s linear infinite" }}></div>
                <div data-flowdot="" style={{ position: "absolute", top: "calc(50% - 5px)", width: "10px", height: "10px", borderRadius: "50%", background: "#7C3AED", boxShadow: "0 0 10px rgba(124,58,237,.6)", animation: "sheets-flow-dot 3s linear infinite", animationDelay: "1.5s" }}></div>
              </div>
              <div style={{ width: "160px", flexShrink: "0", background: "#fff", border: "1px solid #E7E2F5", borderRadius: "12px", boxShadow: "0 12px 24px -16px rgba(37,22,84,.34)", overflow: "hidden" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "5px", padding: "7px 10px", background: "#F5F3FF", borderBottom: "1px solid #EDE9FE" }}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"></rect><path d="M3 9h18"></path><path d="M9 3v18"></path></svg>
                  <span style={{ fontSize: "10px", fontWeight: "600", color: "#7C3AED" }}>Revenue.sheet</span>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 56px", fontSize: "9.5px" }}>
                  <div style={{ padding: "6px 8px", color: "#8B85A0", fontWeight: "600", borderBottom: "1px solid #F1EEF9", borderRight: "1px solid #F1EEF9" }}>ACCOUNT</div>
                  <div style={{ padding: "6px 8px", color: "#0E9384", fontWeight: "600", borderBottom: "1px solid #F1EEF9" }}>MRR</div>
                  <div style={{ padding: "6px 8px", color: "#211C36", borderBottom: "1px solid #F1EEF9", borderRight: "1px solid #F1EEF9" }}>Northwind</div>
                  <div style={{ padding: "6px 8px", fontWeight: "700", color: "#7C3AED", borderBottom: "1px solid #F1EEF9", animation: "sheets-cell-fill 6s ease-in-out infinite" }}>£4.2k</div>
                  <div style={{ padding: "6px 8px", color: "#211C36", borderBottom: "1px solid #F1EEF9", borderRight: "1px solid #F1EEF9" }}>Brightpath</div>
                  <div style={{ padding: "6px 8px", fontWeight: "700", color: "#7C3AED", borderBottom: "1px solid #F1EEF9", animation: "sheets-cell-fill 6s ease-in-out infinite", animationDelay: "1.5s" }}>£5.6k</div>
                  <div style={{ padding: "6px 8px", color: "#211C36", borderRight: "1px solid #F1EEF9" }}>Vantage</div>
                  <div style={{ padding: "6px 8px", fontWeight: "700", color: "#7C3AED", animation: "sheets-cell-fill 6s ease-in-out infinite", animationDelay: "3s" }}>£6.3k</div>
                </div>
              </div>
            </div>
          </div>
          {/* real-time collaboration */}
          <div data-sheets-reveal="" data-sheets-reveal-delay="100" style={{ background: "#fff", borderRadius: "22px", padding: "30px", border: "1px solid #EEEDF3", boxShadow: "0 20px 44px -28px rgba(37,22,84,.26)" }}>
            <h3 className="sheets-card-title" style={{ margin: "0", color: "#1B1730" }}>Real-time collaboration</h3>
            <p className="sheets-card-desc" style={{ margin: "9px 0 0", color: "#5B5670" }}>See teammates&apos; edits and cursors as they happen, no version confusion.</p>
            <div style={{ marginTop: "20px", height: "118px", borderRadius: "13px", background: "#FBFAFE", border: "1px solid #F0EEF7", position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", inset: "0", display: "grid", gridTemplateColumns: "repeat(5,1fr)", gridTemplateRows: "repeat(3,1fr)" }}>
                <div style={{ borderRight: "1px solid #F0EEF7", borderBottom: "1px solid #F0EEF7" }}></div><div style={{ borderRight: "1px solid #F0EEF7", borderBottom: "1px solid #F0EEF7" }}></div><div style={{ borderRight: "1px solid #F0EEF7", borderBottom: "1px solid #F0EEF7" }}></div><div style={{ borderRight: "1px solid #F0EEF7", borderBottom: "1px solid #F0EEF7" }}></div><div style={{ borderBottom: "1px solid #F0EEF7" }}></div>
                <div style={{ borderRight: "1px solid #F0EEF7", borderBottom: "1px solid #F0EEF7" }}></div><div style={{ borderRight: "1px solid #F0EEF7", borderBottom: "1px solid #F0EEF7" }}></div><div style={{ borderRight: "1px solid #F0EEF7", borderBottom: "1px solid #F0EEF7" }}></div><div style={{ borderRight: "1px solid #F0EEF7", borderBottom: "1px solid #F0EEF7" }}></div><div style={{ borderBottom: "1px solid #F0EEF7" }}></div>
                <div style={{ borderRight: "1px solid #F0EEF7" }}></div><div style={{ borderRight: "1px solid #F0EEF7" }}></div><div style={{ borderRight: "1px solid #F0EEF7" }}></div><div style={{ borderRight: "1px solid #F0EEF7" }}></div><div></div>
              </div>
              <div style={{ position: "absolute", left: "20%", top: "0", width: "20%", height: "33.33%", "--sel": "#7C3AED", animation: "sheets-sel-blink 4.5s ease-in-out infinite" } as CSSProperties}></div>
              <div style={{ position: "absolute", left: "20%", top: "0", width: "20%", height: "33.33%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "10px", fontWeight: "700", color: "#7C3AED", animation: "sheets-typed-val 4.5s ease-in-out infinite" }}>£8.4k</div>
              <div style={{ position: "absolute", left: "60%", top: "33.33%", width: "20%", height: "33.33%", "--sel": "#0E9384", animation: "sheets-sel-blink 5.2s ease-in-out infinite", animationDelay: "1.1s" } as CSSProperties}></div>
              <div style={{ position: "absolute", left: "60%", top: "33.33%", width: "20%", height: "33.33%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "10px", fontWeight: "700", color: "#0E9384", animation: "sheets-typed-val 5.2s ease-in-out infinite", animationDelay: "1.1s" }}>Won</div>
              <div style={{ position: "absolute", top: "8px", left: "33%", animation: "sheets-cursor-drift-a 4.5s ease-in-out infinite" }}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="#7C3AED"><path d="m3 3 7.5 18 2.5-7 7-2.5z"></path></svg>
                <span style={{ position: "absolute", top: "13px", left: "11px", padding: "1px 6px", borderRadius: "5px", background: "#7C3AED", color: "#fff", fontSize: "9px", fontWeight: "600", whiteSpace: "nowrap" }}>Ray</span>
              </div>
              <div style={{ position: "absolute", top: "46px", left: "60%", animation: "sheets-cursor-drift-b 5.2s ease-in-out infinite" }}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="#0E9384"><path d="m3 3 7.5 18 2.5-7 7-2.5z"></path></svg>
                <span style={{ position: "absolute", top: "13px", left: "11px", padding: "1px 6px", borderRadius: "5px", background: "#0E9384", color: "#fff", fontSize: "9px", fontWeight: "600", whiteSpace: "nowrap" }}>Jo</span>
              </div>
            </div>
          </div>
          {/* familiar formulas */}
          <div data-sheets-reveal="" data-sheets-reveal-delay="200" style={{ background: "#fff", borderRadius: "22px", padding: "30px", border: "1px solid #EEEDF3", boxShadow: "0 20px 44px -28px rgba(37,22,84,.26)" }}>
            <h3 className="sheets-card-title" style={{ margin: "0", color: "#1B1730" }}>Familiar formulas</h3>
            <p className="sheets-card-desc" style={{ margin: "9px 0 0", color: "#5B5670" }}>Everything you already know how to do in a spreadsheet, works exactly the same here.</p>
            <div style={{ marginTop: "20px", display: "flex", flexDirection: "column", gap: "10px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "9px", background: "#FBFAFE", border: "1px solid #F0EEF7", borderRadius: "10px", padding: "11px 13px" }}>
                <span style={{ fontStyle: "italic", fontWeight: "700", fontSize: "13px", color: "#B4AEC6", fontFamily: "Georgia,serif" }}>fx</span>
                <span style={{ fontFamily: "ui-monospace,'SF Mono',Menlo,monospace", fontSize: "13px", color: "#5B5670" }}>=SUM(<span style={{ color: "#7C3AED" }}>B2:B8</span>)</span>
                <span style={{ width: "2px", height: "15px", background: "#7C3AED", animation: "sheets-caret-blink 1.1s step-end infinite" }}></span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "9px" }}>
                <div style={{ flex: "1", display: "flex", gap: "4px" }}>
                  <div style={{ flex: "1", padding: "7px 0", textAlign: "center", fontSize: "10px", fontWeight: "500", color: "#5B5670", fontVariantNumeric: "tabular-nums", background: "#FBFAFE", border: "1px solid #F0EEF7", borderRadius: "6px", animation: "sheets-range-hi 4.8s ease-in-out infinite" }}>4.2</div>
                  <div style={{ flex: "1", padding: "7px 0", textAlign: "center", fontSize: "10px", fontWeight: "500", color: "#5B5670", fontVariantNumeric: "tabular-nums", background: "#FBFAFE", border: "1px solid #F0EEF7", borderRadius: "6px", animation: "sheets-range-hi 4.8s ease-in-out infinite", animationDelay: ".4s" }}>2.8</div>
                  <div style={{ flex: "1", padding: "7px 0", textAlign: "center", fontSize: "10px", fontWeight: "500", color: "#5B5670", fontVariantNumeric: "tabular-nums", background: "#FBFAFE", border: "1px solid #F0EEF7", borderRadius: "6px", animation: "sheets-range-hi 4.8s ease-in-out infinite", animationDelay: ".8s" }}>5.6</div>
                  <div style={{ flex: "1", padding: "7px 0", textAlign: "center", fontSize: "10px", fontWeight: "500", color: "#5B5670", fontVariantNumeric: "tabular-nums", background: "#FBFAFE", border: "1px solid #F0EEF7", borderRadius: "6px", animation: "sheets-range-hi 4.8s ease-in-out infinite", animationDelay: "1.2s" }}>3.1</div>
                  <div style={{ flex: "1", padding: "7px 0", textAlign: "center", fontSize: "10px", fontWeight: "500", color: "#5B5670", fontVariantNumeric: "tabular-nums", background: "#FBFAFE", border: "1px solid #F0EEF7", borderRadius: "6px", animation: "sheets-range-hi 4.8s ease-in-out infinite", animationDelay: "1.6s" }}>6.3</div>
                  <div style={{ flex: "1", padding: "7px 0", textAlign: "center", fontSize: "10px", fontWeight: "500", color: "#5B5670", fontVariantNumeric: "tabular-nums", background: "#FBFAFE", border: "1px solid #F0EEF7", borderRadius: "6px", animation: "sheets-range-hi 4.8s ease-in-out infinite", animationDelay: "2s" }}>2.5</div>
                </div>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#B4AEC6" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", background: "#F5F3FF", border: "1px solid #EDE9FE", borderRadius: "10px", padding: "9px 14px", fontWeight: "700", fontSize: "14px", color: "#7C3AED", fontVariantNumeric: "tabular-nums", animation: "sheets-result-pop 4.8s ease-in-out infinite" }}>£30,110</div>
              </div>
            </div>
          </div>
          {/* saved to work drive */}
          <div data-sheets-reveal="" data-sheets-reveal-delay="300" style={{ gridColumn: "1 / -1", background: "#fff", borderRadius: "22px", padding: "32px 38px", border: "1px solid #EEEDF3", boxShadow: "0 20px 44px -28px rgba(37,22,84,.26)", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "30px" }}>
            <div style={{ maxWidth: "440px" }}>
              <h3 className="sheets-card-title" style={{ margin: "0", color: "#1B1730" }}>Saved to Work Drive automatically</h3>
              <p className="sheets-card-desc" style={{ margin: "9px 0 0", color: "#5B5670" }}>Every sheet lives in your shared drive, findable and backed up — no &quot;final_v3_FINAL&quot; files.</p>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "14px", flexShrink: "0" }}>
              <div style={{ position: "relative", width: "236px", height: "82px" }}>
                <span style={{ position: "absolute", left: "118px", top: "20px", transform: "translateX(-50%)", fontSize: "10.5px", fontWeight: "600", color: "#0E9384", whiteSpace: "nowrap", zIndex: "4" }}>Auto-saved</span>
                <div style={{ position: "absolute", left: "60px", right: "56px", top: "50%", height: "2px", background: "repeating-linear-gradient(90deg,#DDD6EF 0 5px,transparent 5px 11px)" }}></div>
                {/* the sheet you're working on */}
                <div style={{ position: "absolute", left: "-12px", top: "8px", width: "66px", height: "66px", borderRadius: "11px", background: "#fff", border: "1px solid #E7E2F5", boxShadow: "0 12px 22px -10px rgba(37,22,84,.34)", overflow: "hidden" }}>
                  <div style={{ height: "15px", background: "#F5F3FF", borderBottom: "1px solid #EDE9FE" }}></div>
                  <div style={{ padding: "7px", display: "grid", gridTemplateRows: "1fr 1fr 1fr", gap: "4px" }}>
                    <div style={{ height: "5px", borderRadius: "2px", background: "#EDE9FE" }}></div>
                    <div style={{ height: "5px", borderRadius: "2px", background: "#F1EEF9", animation: "sheets-cell-flash-v 3.6s ease-in-out infinite" }}></div>
                    <div style={{ height: "5px", borderRadius: "2px", background: "#F1EEF9" }}></div>
                  </div>
                </div>
                {/* your cursor working on it */}
                <div style={{ position: "absolute", left: "26px", top: "48px", zIndex: "3", animation: "sheets-work-nudge 3.6s ease-in-out infinite" }}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="#7C3AED"><path d="m3 3 7.5 18 2.5-7 7-2.5z"></path></svg>
                  <span style={{ position: "absolute", top: "13px", left: "11px", padding: "1px 6px", borderRadius: "5px", background: "#7C3AED", color: "#fff", fontSize: "9px", fontWeight: "600", whiteSpace: "nowrap" }}>You</span>
                </div>
                {/* the save flying into the drive */}
                <div style={{ position: "absolute", left: "4px", top: "22px", width: "34px", height: "40px", borderRadius: "8px", background: "#fff", border: "1px solid #E7E2F5", boxShadow: "0 8px 16px -8px rgba(124,58,237,.45)", display: "flex", alignItems: "center", justifyContent: "center", "--tx": "162px", animation: "sheets-travel-to-drive 3.6s ease-in-out infinite" } as CSSProperties}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"></rect><path d="M3 9h18"></path><path d="M9 3v18"></path></svg>
                </div>
                {/* work drive */}
                <div style={{ position: "absolute", right: "0", top: "16px", width: "56px", height: "50px", borderRadius: "11px", background: "#ECFDF9", border: "1px solid #CDF5EE", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0E9384" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"></path></svg>
                  <span style={{ position: "absolute", bottom: "-6px", right: "-6px", width: "23px", height: "23px", borderRadius: "50%", background: "#14B8A6", border: "2px solid #fff", display: "flex", alignItems: "center", justifyContent: "center", animation: "sheets-check-pop 3.6s ease-in-out infinite" }}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"></path></svg>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div data-sheets-reveal="" style={{ textAlign: "center", marginTop: "40px" }}>
          <a href="#" style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "14px 26px", borderRadius: "999px", background: "#fff", color: "#2A2440", fontWeight: "600", fontSize: "15px", cursor: "pointer", border: "1.5px solid #E4DFF2" }}>See How It Works
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          </a>
        </div>
      </SheetsRevealSection>
    </section>
  );
}
