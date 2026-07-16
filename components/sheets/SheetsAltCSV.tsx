import { SheetsRevealSection } from './SheetsRevealSection';

export function SheetsAltCSV() {
  return (
    <section style={{ background: "#fff", paddingTop: "92px", paddingBottom: "92px" }}>
      <SheetsRevealSection className="max-w-7xl mx-auto px-6 lg:px-10" style={{ display: "grid", gridTemplateColumns: "1fr 1.05fr", gap: "64px", alignItems: "center" }}>
        <div data-sheets-reveal="">
          <h2 className="sheets-row-heading" style={{ margin: "0", color: "#1B1730" }}>Stop exporting CSVs just to build a report.</h2>
          <p className="sheets-lede" style={{ margin: "18px 0 0", color: "#5B5670" }}>Pulling numbers out of your CRM, into a spreadsheet, then back into a slide deck used to mean exporting and re-importing at every step. Sheets connects directly to your business data instead.</p>
          <div style={{ marginTop: "30px", display: "flex", flexDirection: "column", gap: "20px" }}>
            <div style={{ display: "flex", gap: "15px" }}>
              <div style={{ flexShrink: "0", width: "30px", height: "30px", borderRadius: "9px", background: "#F5F3FF", color: "#7C3AED", fontWeight: "700", fontSize: "14px", display: "flex", alignItems: "center", justifyContent: "center" }}>1</div>
              <div><div className="sheets-row-item-title" style={{ color: "#1B1730" }}>Pull data live.</div><p className="sheets-row-item-desc" style={{ margin: "4px 0 0", color: "#5B5670" }}>Connect a CRM view straight into a sheet — no manual export.</p></div>
            </div>
            <div style={{ display: "flex", gap: "15px" }}>
              <div style={{ flexShrink: "0", width: "30px", height: "30px", borderRadius: "9px", background: "#F5F3FF", color: "#7C3AED", fontWeight: "700", fontSize: "14px", display: "flex", alignItems: "center", justifyContent: "center" }}>2</div>
              <div><div className="sheets-row-item-title" style={{ color: "#1B1730" }}>Stay current.</div><p className="sheets-row-item-desc" style={{ margin: "4px 0 0", color: "#5B5670" }}>Refresh connected data with one click instead of rebuilding the sheet.</p></div>
            </div>
            <div style={{ display: "flex", gap: "15px" }}>
              <div style={{ flexShrink: "0", width: "30px", height: "30px", borderRadius: "9px", background: "#F5F3FF", color: "#7C3AED", fontWeight: "700", fontSize: "14px", display: "flex", alignItems: "center", justifyContent: "center" }}>3</div>
              <div><div className="sheets-row-item-title" style={{ color: "#1B1730" }}>Build once, reuse often.</div><p className="sheets-row-item-desc" style={{ margin: "4px 0 0", color: "#5B5670" }}>Save a connected sheet as a template for next month&apos;s report.</p></div>
            </div>
          </div>
        </div>
        {/* old way / new way illustration */}
        <div data-sheets-reveal="" data-sheets-reveal-delay="120" style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div style={{ position: "relative", background: "#FBFAFA", border: "1px solid #F0EEF0", borderRadius: "18px", padding: "24px 24px 22px" }}>
            <span style={{ position: "absolute", top: "14px", right: "16px", fontSize: "10.5px", fontWeight: "700", letterSpacing: ".1em", color: "#C0344E", textTransform: "uppercase" }}>Old way</span>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap" }}>
              <div style={{ width: "44px", height: "52px", borderRadius: "8px", background: "#fff", border: "1px solid #F0DDE1", position: "relative", display: "flex", alignItems: "center", justifyContent: "center", transform: "rotate(-6deg)" }}><span style={{ fontSize: "9px", fontWeight: "700", color: "#C0344E" }}>CSV</span></div>
              <div style={{ width: "44px", height: "52px", borderRadius: "8px", background: "#fff", border: "1px solid #F0DDE1", display: "flex", alignItems: "center", justifyContent: "center", transform: "rotate(4deg)", marginLeft: "-14px" }}><span style={{ fontSize: "9px", fontWeight: "700", color: "#C0344E" }}>CSV</span></div>
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#D99BA6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transform: "rotate(-14deg)" }}><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
              <div style={{ width: "44px", height: "52px", borderRadius: "8px", background: "#fff", border: "1px dashed #E0C4CA", display: "flex", alignItems: "center", justifyContent: "center", transform: "rotate(-3deg)" }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#D99BA6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg>
              </div>
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#D99BA6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transform: "rotate(8deg)" }}><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
              <div style={{ width: "44px", height: "52px", borderRadius: "8px", background: "#fff", border: "1px solid #F0DDE1", display: "flex", alignItems: "center", justifyContent: "center", transform: "rotate(5deg)" }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#D99BA6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"></rect><path d="M3 9h18"></path><path d="M9 3v18"></path></svg>
              </div>
            </div>
            <p style={{ margin: "16px 0 0", fontSize: "12.5px", color: "#B08790", fontWeight: "500" }}>Export · re-import · repeat every step</p>
          </div>
          <div style={{ display: "flex", justifyContent: "center", color: "#C7C2D6" }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14"></path><path d="m19 12-7 7-7-7"></path></svg>
          </div>
          <div style={{ position: "relative", background: "linear-gradient(150deg,#FBFAFE,#F3F0FC)", border: "1px solid #E9E4F6", borderRadius: "18px", padding: "24px", boxShadow: "0 18px 40px -26px rgba(124,58,237,.4)" }}>
            <span style={{ position: "absolute", top: "14px", right: "16px", fontSize: "10.5px", fontWeight: "700", letterSpacing: ".1em", color: "#0E9384", textTransform: "uppercase" }}>New way</span>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "16px", padding: "0 8px" }}>
              <div style={{ width: "56px", height: "56px", borderRadius: "14px", background: "#fff", border: "1px solid #CDF5EE", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "4px", boxShadow: "0 8px 18px -10px rgba(14,147,132,.4)" }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0E9384" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5v14a9 3 0 0 0 18 0V5"></path><path d="M3 12a9 3 0 0 0 18 0"></path></svg>
                <span style={{ fontSize: "9px", fontWeight: "600", color: "#8B85A0" }}>CRM</span>
              </div>
              <div style={{ flex: "1", position: "relative", height: "3px", background: "linear-gradient(90deg,#14B8A6,#7C3AED)", borderRadius: "2px" }}>
                <div data-flowdot="" style={{ position: "absolute", top: "-3px", width: "9px", height: "9px", borderRadius: "50%", background: "#fff", border: "2px solid #7C3AED", boxShadow: "0 0 8px rgba(124,58,237,.5)", animation: "sheets-flow-dot 2.4s linear infinite" }}></div>
              </div>
              <div style={{ width: "56px", height: "56px", borderRadius: "14px", background: "#fff", border: "1px solid #E7E2F5", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "4px", boxShadow: "0 8px 18px -10px rgba(124,58,237,.4)" }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"></rect><path d="M3 9h18"></path><path d="M9 3v18"></path></svg>
                <span style={{ fontSize: "9px", fontWeight: "600", color: "#8B85A0" }}>Sheet</span>
              </div>
            </div>
            <p style={{ margin: "16px 0 0", fontSize: "12.5px", color: "#7C3AED", fontWeight: "600", textAlign: "center" }}>One connected line — always current</p>
          </div>
        </div>
      </SheetsRevealSection>
    </section>
  );
}
