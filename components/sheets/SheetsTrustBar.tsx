import { SheetsRevealSection } from './SheetsRevealSection';

export function SheetsTrustBar() {
  return (
    <section style={{ background: "#fff", paddingTop: "38px", paddingBottom: "38px", borderTop: "1px solid #F2F1F6", borderBottom: "1px solid #F2F1F6" }}>
      <SheetsRevealSection reveal className="max-w-7xl mx-auto px-6 lg:px-10" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "22px" }}>
        <span style={{ fontSize: "11.5px", fontWeight: "600", letterSpacing: ".14em", color: "#A39EB4", textTransform: "uppercase" }}>Works across the stack</span>
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "center", gap: "38px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "11px" }}>
            <div style={{ width: "38px", height: "38px", borderRadius: "10px", background: "#F5F3FF", display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid #EDE9FE" }}>
              <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
            </div>
            <span style={{ fontWeight: "600", fontSize: "15px", color: "#4A4560" }}>Snaarp CRM</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "11px" }}>
            <div style={{ width: "38px", height: "38px", borderRadius: "10px", background: "#ECFDF9", display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid #CDF5EE" }}>
              <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#0E9384" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="14" width="20" height="8" rx="2"></rect><path d="M6.01 18H6"></path><path d="M10.01 18H10"></path><path d="M15 18h5"></path><path d="M4 14 6.5 5A2 2 0 0 1 8.4 3.5h7.2A2 2 0 0 1 17.5 5L20 14"></path></svg>
            </div>
            <span style={{ fontWeight: "600", fontSize: "15px", color: "#4A4560" }}>Work Drive</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "11px" }}>
            <div style={{ width: "38px", height: "38px", borderRadius: "10px", background: "#FEF6E7", display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid #FBEBC6" }}>
              <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#B45309" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2z"></path><path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1"></path></svg>
            </div>
            <span style={{ fontWeight: "600", fontSize: "15px", color: "#4A4560" }}>Teams</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "11px" }}>
            <div style={{ width: "38px", height: "38px", borderRadius: "10px", background: "#FFEFF2", display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid #FBD5DD" }}>
              <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#C0344E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
            </div>
            <span style={{ fontWeight: "600", fontSize: "15px", color: "#4A4560" }}>Mail</span>
          </div>
        </div>
      </SheetsRevealSection>
    </section>
  );
}
