import { SheetsRevealSection } from './SheetsRevealSection';
import { Price } from '@/components/currency/Price';

export function SheetsHero() {
  return (
    <section style={{ background: "linear-gradient(180deg,#FBFAFF 0%,#fff 68%)", paddingTop: "74px", paddingBottom: "96px", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: "-120px", right: "-80px", width: "520px", height: "520px", background: "radial-gradient(circle,rgba(124,58,237,.10),transparent 66%)", pointerEvents: "none" }}></div>
      <SheetsRevealSection className="max-w-7xl mx-auto px-6 lg:px-10" style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) minmax(0,1.08fr)", gap: "56px", alignItems: "stretch", position: "relative" }}>
        <div data-sheets-reveal="">
          <span style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "7px 14px", borderRadius: "999px", background: "#F5F3FF", color: "#7C3AED", fontWeight: "600", fontSize: "12px", letterSpacing: ".09em", textTransform: "uppercase", border: "1px solid #EDE9FE", whiteSpace: "nowrap" }}>
            <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#7C3AED" }}></span>Create &amp; Store · Sheets
          </span>
          <h1 className="sheets-hero-heading" style={{ margin: "22px 0 0", color: "#1B1730" }}>Spreadsheets that<br /><span style={{ color: "#7C3AED" }}>talk to your business.</span></h1>
          <p className="sheets-lede" style={{ color: "#5B5670", margin: "22px 0 0", maxWidth: "490px" }}>Build a sheet, pull in real numbers from CRM, and share it with your team — no exporting to CSV and re-uploading somewhere else.</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "13px", marginTop: "32px" }}>
            <a href="#" style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "15px 28px", borderRadius: "999px", background: "#7C3AED", color: "#fff", fontWeight: "600", fontSize: "15.5px", cursor: "pointer", boxShadow: "0 12px 26px -8px rgba(124,58,237,.6)" }}>Start for <Price amount={2} />/month</a>
            <a href="#" style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "15px 26px", borderRadius: "999px", background: "#fff", color: "#2A2440", fontWeight: "600", fontSize: "15.5px", cursor: "pointer", border: "1.5px solid #E4DFF2" }}>See how it works
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
            </a>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "9px", marginTop: "26px", fontSize: "13.5px", color: "#8B85A0", fontWeight: "500" }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#14B8A6" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"></path></svg>
            GDPR compliant · No credit card required
          </div>
        </div>

        {/* Spreadsheet mockup */}
        <div data-sheets-reveal="" data-sheets-reveal-delay="120" style={{ position: "relative", display: "flex" }}>
          <div style={{ position: "absolute", inset: "14px -10px -18px 20px", background: "linear-gradient(135deg,rgba(124,58,237,.14),rgba(20,184,166,.10))", borderRadius: "26px", filter: "blur(2px)" }}></div>
          <div style={{ position: "relative", flex: "1", display: "flex", flexDirection: "column", background: "#fff", borderRadius: "20px", border: "1px solid #ECE9F5", boxShadow: "0 34px 70px -26px rgba(37,22,84,.32),0 10px 24px -14px rgba(37,22,84,.14)", overflow: "hidden" }}>
            {/* window bar */}
            <div style={{ display: "flex", alignItems: "center", gap: "8px", padding: "13px 16px", borderBottom: "1px solid #F0EEF6", background: "#FBFAFE" }}>
              <span style={{ width: "11px", height: "11px", borderRadius: "50%", background: "#FB7185" }}></span>
              <span style={{ width: "11px", height: "11px", borderRadius: "50%", background: "#FBBF24" }}></span>
              <span style={{ width: "11px", height: "11px", borderRadius: "50%", background: "#34D399" }}></span>
              <span style={{ marginLeft: "10px", fontSize: "12.5px", fontWeight: "600", color: "#8B85A0" }}>Q3 Pipeline — Revenue.sheet</span>
              <span style={{ marginLeft: "auto", display: "inline-flex", alignItems: "center", gap: "6px", padding: "4px 9px", borderRadius: "7px", background: "#ECFDF9", border: "1px solid #CDF5EE", fontSize: "10.5px", fontWeight: "600", color: "#0E9384", animation: "sheets-crm-pulse 2.8s ease-in-out infinite" }}>
                <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#14B8A6" }}></span>Synced from CRM
              </span>
            </div>
            {/* formula bar */}
            <div style={{ display: "flex", alignItems: "center", gap: "10px", padding: "9px 14px", borderBottom: "1px solid #F0EEF6", background: "#fff" }}>
              <span style={{ fontStyle: "italic", fontWeight: "700", fontSize: "13px", color: "#B4AEC6", fontFamily: "Georgia,serif" }}>fx</span>
              <div style={{ flex: "1", fontFamily: "ui-monospace,'SF Mono',Menlo,monospace", fontSize: "12.5px", color: "#5B5670", background: "#F7F6FB", border: "1px solid #EEECF5", borderRadius: "7px", padding: "6px 10px" }}>=SUM(<span style={{ color: "#7C3AED" }}>D2:D9</span>)</div>
            </div>
            {/* grid */}
            <div style={{ fontSize: "12px", color: "#3B3550", flex: "1", display: "flex", flexDirection: "column" }}>
              <div style={{ display: "grid", gridTemplateColumns: "30px 1.5fr .9fr .9fr 74px", background: "#FAF9FD", borderBottom: "1px solid #EEECF5", fontWeight: "600", color: "#8B85A0", fontSize: "10.5px", letterSpacing: ".04em" }}>
                <div style={{ padding: "8px 6px", textAlign: "center", borderRight: "1px solid #EEECF5" }}></div>
                <div style={{ padding: "8px 10px", borderRight: "1px solid #EEECF5" }}>ACCOUNT</div>
                <div style={{ padding: "8px 10px", borderRight: "1px solid #EEECF5" }}>STAGE</div>
                <div style={{ padding: "8px 10px", borderRight: "1px solid #EEECF5", color: "#0E9384", display: "flex", alignItems: "center", gap: "5px" }}>MRR<span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#14B8A6", animation: "sheets-badge-glow 2.4s ease-in-out infinite" }}></span></div>
                <div style={{ padding: "8px 8px", textAlign: "center" }}>TREND</div>
              </div>
              {/* rows */}
              <div data-sheetrow="" style={{ display: "grid", gridTemplateColumns: "30px 1.5fr .9fr .9fr 74px", borderBottom: "1px solid #F3F1F9" }}>
                <div style={{ padding: "9px 6px", textAlign: "center", color: "#B4AEC6", background: "#FAF9FD", borderRight: "1px solid #EEECF5" }}>1</div>
                <div style={{ padding: "9px 10px", borderRight: "1px solid #F3F1F9", fontWeight: "500", color: "#211C36" }}>Northwind Ltd</div>
                <div style={{ padding: "9px 10px", borderRight: "1px solid #F3F1F9" }}><span style={{ padding: "2px 7px", borderRadius: "5px", background: "#EDE9FE", color: "#7C3AED", fontSize: "10px", fontWeight: "600" }}>Won</span></div>
                <div style={{ padding: "9px 10px", borderRight: "1px solid #F3F1F9", fontVariantNumeric: "tabular-nums", position: "relative", animation: "sheets-cell-flash-m 5.5s ease-in-out infinite" }}>£4,200</div>
                <div style={{ padding: "6px 8px", display: "flex", alignItems: "flex-end", gap: "2px", justifyContent: "center", animation: "sheets-spark-pulse 4s ease-in-out infinite" }}>
                  <span style={{ width: "4px", height: "8px", background: "#CBBEF6", borderRadius: "1px" }}></span><span style={{ width: "4px", height: "12px", background: "#B49CF0", borderRadius: "1px" }}></span><span style={{ width: "4px", height: "9px", background: "#CBBEF6", borderRadius: "1px" }}></span><span style={{ width: "4px", height: "16px", background: "#7C3AED", borderRadius: "1px" }}></span>
                </div>
              </div>
              <div data-sheetrow="" style={{ display: "grid", gridTemplateColumns: "30px 1.5fr .9fr .9fr 74px", borderBottom: "1px solid #F3F1F9" }}>
                <div style={{ padding: "9px 6px", textAlign: "center", color: "#B4AEC6", background: "#FAF9FD", borderRight: "1px solid #EEECF5" }}>2</div>
                <div style={{ padding: "9px 10px", borderRight: "1px solid #F3F1F9", fontWeight: "500", color: "#211C36" }}>Acme Digital</div>
                <div style={{ padding: "9px 10px", borderRight: "1px solid #F3F1F9" }}><span style={{ padding: "2px 7px", borderRadius: "5px", background: "#FEF3C7", color: "#B45309", fontSize: "10px", fontWeight: "600" }}>Proposal</span></div>
                <div style={{ padding: "9px 10px", borderRight: "1px solid #F3F1F9", fontVariantNumeric: "tabular-nums" }}>£2,850</div>
                <div style={{ padding: "6px 8px", display: "flex", alignItems: "flex-end", gap: "2px", justifyContent: "center" }}>
                  <span style={{ width: "4px", height: "10px", background: "#CBBEF6", borderRadius: "1px" }}></span><span style={{ width: "4px", height: "7px", background: "#B49CF0", borderRadius: "1px" }}></span><span style={{ width: "4px", height: "13px", background: "#CBBEF6", borderRadius: "1px" }}></span><span style={{ width: "4px", height: "15px", background: "#7C3AED", borderRadius: "1px" }}></span>
                </div>
              </div>
              <div data-sheetrow="" style={{ display: "grid", gridTemplateColumns: "30px 1.5fr .9fr .9fr 74px", borderBottom: "1px solid #F3F1F9", background: "#FCFBFE" }}>
                <div style={{ padding: "9px 6px", textAlign: "center", color: "#B4AEC6", background: "#FAF9FD", borderRight: "1px solid #EEECF5" }}>3</div>
                <div style={{ padding: "9px 10px", borderRight: "1px solid #F3F1F9", fontWeight: "500", color: "#211C36" }}>Brightpath Co</div>
                <div style={{ padding: "9px 10px", borderRight: "1px solid #F3F1F9" }}><span style={{ padding: "2px 7px", borderRadius: "5px", background: "#EDE9FE", color: "#7C3AED", fontSize: "10px", fontWeight: "600" }}>Won</span></div>
                <div style={{ padding: "9px 10px", borderRight: "1px solid #F3F1F9", fontVariantNumeric: "tabular-nums", animation: "sheets-cell-flash-v 6.5s ease-in-out infinite", animationDelay: "1.2s" }}>£5,640</div>
                <div style={{ padding: "6px 8px", display: "flex", alignItems: "flex-end", gap: "2px", justifyContent: "center" }}>
                  <span style={{ width: "4px", height: "7px", background: "#CBBEF6", borderRadius: "1px" }}></span><span style={{ width: "4px", height: "11px", background: "#B49CF0", borderRadius: "1px" }}></span><span style={{ width: "4px", height: "14px", background: "#CBBEF6", borderRadius: "1px" }}></span><span style={{ width: "4px", height: "18px", background: "#7C3AED", borderRadius: "1px" }}></span>
                </div>
              </div>
              <div data-sheetrow="" style={{ display: "grid", gridTemplateColumns: "30px 1.5fr .9fr .9fr 74px", borderBottom: "1px solid #F3F1F9" }}>
                <div style={{ padding: "9px 6px", textAlign: "center", color: "#B4AEC6", background: "#FAF9FD", borderRight: "1px solid #EEECF5" }}>4</div>
                <div style={{ padding: "9px 10px", borderRight: "1px solid #F3F1F9", fontWeight: "500", color: "#211C36" }}>Meridian Group</div>
                <div style={{ padding: "9px 10px", borderRight: "1px solid #F3F1F9" }}><span style={{ padding: "2px 7px", borderRadius: "5px", background: "#FFE4E9", color: "#C0344E", fontSize: "10px", fontWeight: "600" }}>Negotiation</span></div>
                <div style={{ padding: "9px 10px", borderRight: "1px solid #F3F1F9", fontVariantNumeric: "tabular-nums" }}>£3,120</div>
                <div style={{ padding: "6px 8px", display: "flex", alignItems: "flex-end", gap: "2px", justifyContent: "center" }}>
                  <span style={{ width: "4px", height: "12px", background: "#CBBEF6", borderRadius: "1px" }}></span><span style={{ width: "4px", height: "9px", background: "#B49CF0", borderRadius: "1px" }}></span><span style={{ width: "4px", height: "11px", background: "#CBBEF6", borderRadius: "1px" }}></span><span style={{ width: "4px", height: "13px", background: "#7C3AED", borderRadius: "1px" }}></span>
                </div>
              </div>
              <div data-sheetrow="" style={{ display: "grid", gridTemplateColumns: "30px 1.5fr .9fr .9fr 74px", borderBottom: "1px solid #F3F1F9", background: "#FCFBFE" }}>
                <div style={{ padding: "9px 6px", textAlign: "center", color: "#B4AEC6", background: "#FAF9FD", borderRight: "1px solid #EEECF5" }}>5</div>
                <div style={{ padding: "9px 10px", borderRight: "1px solid #F3F1F9", fontWeight: "500", color: "#211C36" }}>Cedar &amp; Co</div>
                <div style={{ padding: "9px 10px", borderRight: "1px solid #F3F1F9" }}><span style={{ padding: "2px 7px", borderRadius: "5px", background: "#FEF3C7", color: "#B45309", fontSize: "10px", fontWeight: "600" }}>Proposal</span></div>
                <div style={{ padding: "9px 10px", borderRight: "1px solid #F3F1F9", fontVariantNumeric: "tabular-nums", animation: "sheets-cell-flash-m 7s ease-in-out infinite", animationDelay: "2.4s" }}>£1,980</div>
                <div style={{ padding: "6px 8px", display: "flex", alignItems: "flex-end", gap: "2px", justifyContent: "center" }}>
                  <span style={{ width: "4px", height: "9px", background: "#CBBEF6", borderRadius: "1px" }}></span><span style={{ width: "4px", height: "12px", background: "#B49CF0", borderRadius: "1px" }}></span><span style={{ width: "4px", height: "8px", background: "#CBBEF6", borderRadius: "1px" }}></span><span style={{ width: "4px", height: "14px", background: "#7C3AED", borderRadius: "1px" }}></span>
                </div>
              </div>
              <div data-sheetrow="" style={{ display: "grid", gridTemplateColumns: "30px 1.5fr .9fr .9fr 74px", borderBottom: "1px solid #F3F1F9" }}>
                <div style={{ padding: "9px 6px", textAlign: "center", color: "#B4AEC6", background: "#FAF9FD", borderRight: "1px solid #EEECF5" }}>6</div>
                <div style={{ padding: "9px 10px", borderRight: "1px solid #F3F1F9", fontWeight: "500", color: "#211C36" }}>Vantage Media</div>
                <div style={{ padding: "9px 10px", borderRight: "1px solid #F3F1F9" }}><span style={{ padding: "2px 7px", borderRadius: "5px", background: "#EDE9FE", color: "#7C3AED", fontSize: "10px", fontWeight: "600" }}>Won</span></div>
                <div style={{ padding: "9px 10px", borderRight: "1px solid #F3F1F9", fontVariantNumeric: "tabular-nums" }}>£6,310</div>
                <div style={{ padding: "6px 8px", display: "flex", alignItems: "flex-end", gap: "2px", justifyContent: "center" }}>
                  <span style={{ width: "4px", height: "8px", background: "#CBBEF6", borderRadius: "1px" }}></span><span style={{ width: "4px", height: "13px", background: "#B49CF0", borderRadius: "1px" }}></span><span style={{ width: "4px", height: "15px", background: "#CBBEF6", borderRadius: "1px" }}></span><span style={{ width: "4px", height: "19px", background: "#7C3AED", borderRadius: "1px" }}></span>
                </div>
              </div>
              <div style={{ flex: "1", display: "flex", flexDirection: "column", justifyContent: "center", gap: "11px", padding: "18px 16px", background: "linear-gradient(180deg,#fff,#FCFBFE)", borderTop: "1px solid #F3F1F9" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <span style={{ fontSize: "10px", fontWeight: "600", letterSpacing: ".07em", color: "#8B85A0" }}>MRR BY STAGE</span>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: "5px", fontSize: "10px", color: "#B4AEC6" }}>Q3 · live<span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#14B8A6", animation: "sheets-badge-glow 2.4s ease-in-out infinite" }}></span></span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "9px" }}>
                  <span style={{ width: "66px", fontSize: "10.5px", color: "#5B5670", fontWeight: "500" }}>Won</span>
                  <div style={{ flex: "1", height: "9px", borderRadius: "5px", background: "#F1EEF9", overflow: "hidden" }}><div style={{ width: "100%", height: "100%", borderRadius: "5px", background: "#7C3AED" }}></div></div>
                  <span style={{ width: "52px", textAlign: "right", fontSize: "10.5px", fontWeight: "600", color: "#211C36", fontVariantNumeric: "tabular-nums" }}>£19,620</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "9px" }}>
                  <span style={{ width: "66px", fontSize: "10.5px", color: "#5B5670", fontWeight: "500" }}>Negotiation</span>
                  <div style={{ flex: "1", height: "9px", borderRadius: "5px", background: "#F1EEF9", overflow: "hidden" }}><div style={{ width: "29%", height: "100%", borderRadius: "5px", background: "#FB7185" }}></div></div>
                  <span style={{ width: "52px", textAlign: "right", fontSize: "10.5px", fontWeight: "600", color: "#211C36", fontVariantNumeric: "tabular-nums" }}>£5,660</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "9px" }}>
                  <span style={{ width: "66px", fontSize: "10.5px", color: "#5B5670", fontWeight: "500" }}>Proposal</span>
                  <div style={{ flex: "1", height: "9px", borderRadius: "5px", background: "#F1EEF9", overflow: "hidden" }}><div style={{ width: "25%", height: "100%", borderRadius: "5px", background: "#FBBF24" }}></div></div>
                  <span style={{ width: "52px", textAlign: "right", fontSize: "10.5px", fontWeight: "600", color: "#211C36", fontVariantNumeric: "tabular-nums" }}>£4,830</span>
                </div>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "30px 1.5fr .9fr .9fr 74px", background: "#FAF9FD", fontWeight: "600", borderTop: "1px solid #EEECF5" }}>
                <div style={{ padding: "9px 6px", textAlign: "center", color: "#B4AEC6", borderRight: "1px solid #EEECF5" }}></div>
                <div style={{ padding: "9px 10px", borderRight: "1px solid #EEECF5", color: "#8B85A0", fontSize: "10.5px", letterSpacing: ".03em" }}>TOTAL MRR</div>
                <div style={{ padding: "9px 10px", borderRight: "1px solid #EEECF5" }}></div>
                <div style={{ padding: "9px 10px", borderRight: "1px solid #EEECF5", color: "#7C3AED", fontVariantNumeric: "tabular-nums" }}>£30,110</div>
                <div style={{ padding: "9px 8px" }}></div>
              </div>
            </div>
          </div>
        </div>
      </SheetsRevealSection>
    </section>
  );
}
