import { SheetsRevealSection } from './SheetsRevealSection';
import { Price } from '@/components/currency/Price';

export function SheetsSteps() {
  return (
    <section style={{ background: "#fff", paddingTop: "92px", paddingBottom: "92px" }}>
      <SheetsRevealSection className="max-w-7xl mx-auto px-6 lg:px-10">
        <div data-sheets-reveal="" style={{ textAlign: "center", maxWidth: "620px", margin: "0 auto 52px" }}>
          <h2 className="sheets-section-heading" style={{ margin: "0", color: "#1B1730" }}>Get started in 3 easy steps</h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "24px" }}>
          {/* step 1 */}
          <div data-sheets-reveal="" style={{ background: "#FBFAFE", borderRadius: "20px", padding: "32px 30px", border: "1px solid #F0EEF7" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "36px", height: "36px", borderRadius: "10px", background: "#7C3AED", color: "#fff", fontWeight: "700", fontSize: "15px", boxShadow: "0 8px 16px -6px rgba(124,58,237,.5)" }}>1</div>
            <div style={{ marginTop: "22px", height: "120px", borderRadius: "14px", background: "#fff", border: "1px solid #EFEDF6", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(4,26px)", gridTemplateRows: "repeat(3,20px)", gap: "3px" }}>
                <div style={{ background: "#EDE9FE", borderRadius: "3px" }}></div><div style={{ background: "#F3F1FA", borderRadius: "3px" }}></div><div style={{ background: "#F3F1FA", borderRadius: "3px" }}></div><div style={{ background: "#F3F1FA", borderRadius: "3px" }}></div>
                <div style={{ background: "#F3F1FA", borderRadius: "3px" }}></div><div style={{ background: "#7C3AED", borderRadius: "3px" }}></div><div style={{ background: "#F3F1FA", borderRadius: "3px" }}></div><div style={{ background: "#F3F1FA", borderRadius: "3px" }}></div>
                <div style={{ background: "#F3F1FA", borderRadius: "3px" }}></div><div style={{ background: "#F3F1FA", borderRadius: "3px" }}></div><div style={{ background: "#F3F1FA", borderRadius: "3px" }}></div><div style={{ background: "#F3F1FA", borderRadius: "3px" }}></div>
              </div>
            </div>
            <h3 className="sheets-card-title" style={{ margin: "22px 0 0", color: "#1B1730" }}>Start a sheet</h3>
            <p className="sheets-card-desc" style={{ margin: "8px 0 0", color: "#5B5670" }}>Build from scratch, or start from a template.</p>
          </div>
          {/* step 2 : data flow */}
          <div data-sheets-reveal="" data-sheets-reveal-delay="100" style={{ background: "#FBFAFE", borderRadius: "20px", padding: "32px 30px", border: "1px solid #F0EEF7" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "36px", height: "36px", borderRadius: "10px", background: "#7C3AED", color: "#fff", fontWeight: "700", fontSize: "15px", boxShadow: "0 8px 16px -6px rgba(124,58,237,.5)" }}>2</div>
            <div style={{ marginTop: "22px", height: "120px", borderRadius: "14px", background: "#fff", border: "1px solid #EFEDF6", position: "relative", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 24px", overflow: "hidden" }}>
              <div style={{ position: "absolute", left: "24px", right: "24px", top: "50%", height: "2px", background: "repeating-linear-gradient(90deg,#E4DFF2 0 6px,transparent 6px 12px)" }}></div>
              <div data-flowdot="" style={{ position: "absolute", top: "calc(50% - 4px)", width: "8px", height: "8px", borderRadius: "50%", background: "#14B8A6", boxShadow: "0 0 8px rgba(20,184,166,.7)", animation: "sheets-flow-dot 2.6s linear infinite" }}></div>
              <div data-flowdot="" style={{ position: "absolute", top: "calc(50% - 4px)", width: "8px", height: "8px", borderRadius: "50%", background: "#7C3AED", boxShadow: "0 0 8px rgba(124,58,237,.6)", animation: "sheets-flow-dot 2.6s linear infinite", animationDelay: "1.3s" }}></div>
              <div style={{ position: "relative", zIndex: "1", width: "46px", height: "46px", borderRadius: "12px", background: "#ECFDF9", border: "1px solid #CDF5EE", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0E9384" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5v14a9 3 0 0 0 18 0V5"></path><path d="M3 12a9 3 0 0 0 18 0"></path></svg>
              </div>
              <div style={{ position: "relative", zIndex: "1", width: "46px", height: "46px", borderRadius: "12px", background: "#F5F3FF", border: "1px solid #EDE9FE", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"></rect><path d="M3 9h18"></path><path d="M3 15h18"></path><path d="M9 3v18"></path></svg>
              </div>
            </div>
            <h3 className="sheets-card-title" style={{ margin: "22px 0 0", color: "#1B1730" }}>Pull in real data</h3>
            <p className="sheets-card-desc" style={{ margin: "8px 0 0", color: "#5B5670" }}>Connect a CRM view or import a file — no manual copy-paste.</p>
          </div>
          {/* step 3 */}
          <div data-sheets-reveal="" data-sheets-reveal-delay="200" style={{ background: "#FBFAFE", borderRadius: "20px", padding: "32px 30px", border: "1px solid #F0EEF7" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "36px", height: "36px", borderRadius: "10px", background: "#7C3AED", color: "#fff", fontWeight: "700", fontSize: "15px", boxShadow: "0 8px 16px -6px rgba(124,58,237,.5)" }}>3</div>
            <div style={{ marginTop: "22px", height: "120px", borderRadius: "14px", background: "#fff", border: "1px solid #EFEDF6", display: "flex", alignItems: "center", justifyContent: "center", gap: "-8px" }}>
              <div style={{ display: "flex" }}>
                <div style={{ width: "34px", height: "34px", borderRadius: "50%", background: "#EDE9FE", border: "2px solid #fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px", fontWeight: "600", color: "#7C3AED" }}>RT</div>
                <div style={{ width: "34px", height: "34px", borderRadius: "50%", background: "#D5F5EF", border: "2px solid #fff", marginLeft: "-10px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px", fontWeight: "600", color: "#0E9384" }}>JM</div>
                <div style={{ width: "34px", height: "34px", borderRadius: "50%", background: "#FDE6C9", border: "2px solid #fff", marginLeft: "-10px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px", fontWeight: "600", color: "#B45309" }}>AS</div>
                <div style={{ width: "34px", height: "34px", borderRadius: "50%", background: "#F3F1FA", border: "2px solid #fff", marginLeft: "-10px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "14px", fontWeight: "600", color: "#8B85A0" }}>+</div>
              </div>
            </div>
            <h3 className="sheets-card-title" style={{ margin: "22px 0 0", color: "#1B1730" }}>Share and collaborate</h3>
            <p className="sheets-card-desc" style={{ margin: "8px 0 0", color: "#5B5670" }}>Invite your team, drop it in a Teams channel, or attach it to an email.</p>
          </div>
        </div>
        <div data-sheets-reveal="" style={{ textAlign: "center", marginTop: "40px" }}>
          <a href="#" style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "15px 28px", borderRadius: "999px", background: "#7C3AED", color: "#fff", fontWeight: "600", fontSize: "15.5px", cursor: "pointer", boxShadow: "0 12px 26px -8px rgba(124,58,237,.55)" }}>Start for <Price amount={2} />/month
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          </a>
        </div>
      </SheetsRevealSection>
    </section>
  );
}
