import { SheetsRevealSection } from './SheetsRevealSection';

export function SheetsStatsRow() {
  return (
    <section style={{ background: "#F7F7F7", paddingTop: "80px", paddingBottom: "80px" }}>
      <SheetsRevealSection className="max-w-7xl mx-auto px-6 lg:px-10" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "22px" }}>
        <div data-sheets-reveal="" style={{ background: "#fff", borderRadius: "20px", padding: "34px 32px", border: "1px solid #EEEDF3", boxShadow: "0 14px 34px -22px rgba(37,22,84,.22)" }}>
          <div style={{ width: "44px", height: "44px", borderRadius: "12px", background: "#F5F3FF", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "20px" }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"></path><path d="m19 9-5 5-4-4-3 3"></path></svg>
          </div>
          <div className="sheets-stat-number" style={{ color: "#1B1730" }}>Live data</div>
          <p className="sheets-card-desc" style={{ margin: "9px 0 0", color: "#5B5670" }}>Pull numbers straight from CRM, no manual entry.</p>
        </div>
        <div data-sheets-reveal="" data-sheets-reveal-delay="100" style={{ background: "#fff", borderRadius: "20px", padding: "34px 32px", border: "1px solid #EEEDF3", boxShadow: "0 14px 34px -22px rgba(37,22,84,.22)" }}>
          <div style={{ width: "44px", height: "44px", borderRadius: "12px", background: "#ECFDF9", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "20px" }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0E9384" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 2v6h-6"></path><path d="M3 12a9 9 0 0 1 15-6.7L21 8"></path><path d="M3 22v-6h6"></path><path d="M21 12a9 9 0 0 1-15 6.7L3 16"></path></svg>
          </div>
          <div className="sheets-stat-number" style={{ color: "#1B1730" }}>Real-time</div>
          <p className="sheets-card-desc" style={{ margin: "9px 0 0", color: "#5B5670" }}>Edits sync instantly for everyone in the sheet.</p>
        </div>
        <div data-sheets-reveal="" data-sheets-reveal-delay="200" style={{ background: "#fff", borderRadius: "20px", padding: "34px 32px", border: "1px solid #EEEDF3", boxShadow: "0 14px 34px -22px rgba(37,22,84,.22)" }}>
          <div style={{ width: "44px", height: "44px", borderRadius: "12px", background: "#FFEFF2", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "20px" }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C0344E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 12 2 2 4-4"></path><path d="M21 12c-1 0-3-1-3-3s2-3 3-3-1-2-3-2-3 2-3 2-1-2-3-2-3 2-3 2 2 1 2 3-2 3-3 3 1 2 3 2 3-2 3-2 1 2 3 2 3-2 3-2Z"></path></svg>
          </div>
          <div className="sheets-stat-number" style={{ color: "#1B1730" }}>1 click</div>
          <p className="sheets-card-desc" style={{ margin: "9px 0 0", color: "#5B5670" }}>To share a sheet in Teams or attach it in Mail.</p>
        </div>
      </SheetsRevealSection>
    </section>
  );
}
