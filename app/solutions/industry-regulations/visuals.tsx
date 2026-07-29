// Bespoke UI-snippet mockups for the Industry Regulations solution page.
// Same inline-style pattern as gdpr-data-privacy/visuals.tsx.

'use client';

function ScaleIcon({ size = 14, color = '#7C3AED' }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3v18" /><path d="m2 7 4-4 4 4" /><path d="m14 7 4-4 4 4" />
      <path d="M2 7h8" /><path d="M14 7h8" />
      <path d="M4 12a4 4 0 0 0 8 0" /><path d="M12 12a4 4 0 0 0 8 0" />
    </svg>
  );
}

function BadgeIcon({ size = 14, color = '#0E9384' }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

// ── Snippet card 1 — Regulation Mapping Panel ──
export function SnippetRegulationMapVisual() {
  return (
    <div style={{ height: '158px', borderRadius: '16px', background: '#FBFAFE', border: '1px solid #F0EDF7', padding: '14px', position: 'relative', overflow: 'hidden' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
          <span style={{ width: '20px', height: '20px', borderRadius: '6px', background: '#F3EFFF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <ScaleIcon size={11} color="#7C3AED" />
          </span>
          <span style={{ fontSize: '9px', fontWeight: 800, letterSpacing: '.08em', color: '#A79FBE', textTransform: 'uppercase' }}>Regulations</span>
        </span>
      </div>
      <div style={{ borderRadius: '12px', background: '#fff', border: '1px solid #EFEDF6', padding: '11px', boxShadow: '0 12px 24px -16px rgba(37,22,84,.3)' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '7px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
            <span style={{ width: '14px', height: '14px', borderRadius: '50%', background: '#ECFDF9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="#0E9384" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
            </span>
            <span style={{ flex: 1, fontSize: '8.5px', fontWeight: 600, color: '#5B5670' }}>HIPAA · Healthcare</span>
            <span style={{ fontSize: '7.5px', color: '#0E9384', fontWeight: 700 }}>Covered</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
            <span style={{ width: '14px', height: '14px', borderRadius: '50%', background: '#ECFDF9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="#0E9384" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
            </span>
            <span style={{ flex: 1, fontSize: '8.5px', fontWeight: 600, color: '#5B5670' }}>PCI DSS · Finance</span>
            <span style={{ fontSize: '7.5px', color: '#0E9384', fontWeight: 700 }}>Covered</span>
          </div>
        </div>
        <div style={{ marginTop: '9px', display: 'inline-flex', alignItems: 'center', gap: '4px', padding: '3px 8px', borderRadius: '999px', background: '#F3EFFF', border: '1px solid #E6DEFA' }}>
          <ScaleIcon size={8} color="#7C3AED" />
          <span style={{ fontSize: '8px', fontWeight: 700, color: '#7C3AED' }}>Compliant</span>
        </div>
      </div>
    </div>
  );
}

// ── Snippet card 2 — Compliance Shield Badge ──
export function SnippetComplianceShieldVisual() {
  return (
    <div style={{ height: '158px', borderRadius: '16px', background: 'linear-gradient(165deg,#FBFAFE,#F1FCF9)', border: '1px solid #EAF3F1', padding: '14px', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ width: '128px', borderRadius: '14px', background: '#fff', border: '1px solid #EFEDF6', padding: '14px 12px', boxShadow: '0 16px 30px -16px rgba(37,22,84,.34)', textAlign: 'center', position: 'relative' }}>
        {/* Verified badge */}
        <div style={{ position: 'absolute', top: '-9px', right: '-9px', width: '26px', height: '26px', borderRadius: '50%', background: '#0E9384', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 8px 16px -6px rgba(14,147,132,.6)', border: '2.5px solid #fff' }}>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
        </div>
        <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: 'linear-gradient(135deg,#C4B5FD,#8B5CF6)', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <BadgeIcon size={22} color="rgba(255,255,255,.92)" />
        </div>
        <div style={{ fontSize: '11px', fontWeight: 700, color: '#1B1730', marginTop: '10px' }}>Multi-Regulation</div>
        <div style={{ fontSize: '8px', color: '#8B85A0', marginTop: '1px' }}>One platform, all covered</div>
        <div style={{ marginTop: '9px', display: 'inline-flex', alignItems: 'center', gap: '4px', padding: '3px 9px', borderRadius: '999px', background: '#ECFDF9', border: '1px solid #CDF5EE' }}>
          <span style={{ fontSize: '8px', fontWeight: 800, color: '#0E9384', letterSpacing: '.03em' }}>Protected</span>
        </div>
      </div>
    </div>
  );
}

// ── Snippet card 3 — Retention Policy Card ──
export function SnippetRetentionPolicyVisual() {
  return (
    <div style={{ height: '158px', borderRadius: '16px', background: '#FBFAFE', border: '1px solid #F0EDF7', padding: '14px', position: 'relative', overflow: 'hidden' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
        <span style={{ fontSize: '9px', fontWeight: 800, letterSpacing: '.08em', color: '#A79FBE', textTransform: 'uppercase' }}>Data Retention</span>
      </div>
      <div style={{ borderRadius: '12px', background: '#fff', border: '1px solid #EFEDF6', padding: '13px', boxShadow: '0 12px 24px -16px rgba(37,22,84,.3)' }}>
        <div style={{ fontSize: '10.5px', fontWeight: 700, color: '#1B1730' }}>Retention Policies</div>
        <div style={{ fontSize: '8px', color: '#8B85A0', marginTop: '3px' }}>Auto-enforced per regulation</div>
        <div style={{ marginTop: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', padding: '3px 9px', borderRadius: '999px', background: '#ECFDF9', border: '1px solid #CDF5EE' }}>
            <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="#0E9384" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
            <span style={{ fontSize: '8px', fontWeight: 700, color: '#0E9384' }}>7yr finance</span>
          </div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', padding: '3px 9px', borderRadius: '999px', background: '#F3EFFF', border: '1px solid #E6DEFA' }}>
            <span style={{ fontSize: '8px', fontWeight: 700, color: '#7C3AED' }}>6yr health</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Step 01 — Map your obligations (regulation-to-control mapping) ──
export function StepMapObligationsVisual() {
  return (
    <>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
          <ScaleIcon size={12} color="#7C3AED" />
          <span style={{ fontSize: '9px', fontWeight: 700, color: '#1B1730' }}>Obligation Map</span>
        </span>
        <span style={{ fontSize: '8px', fontWeight: 700, color: '#7C3AED', letterSpacing: '.03em' }}>Auto</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '7px', padding: '7px 9px', borderRadius: '9px', background: '#FBFAFE', border: '1px solid #F0EDF7' }}>
          <span style={{ width: '14px', height: '14px', borderRadius: '50%', background: '#ECFDF9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="#0E9384" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
          </span>
          <span style={{ flex: 1, fontSize: '8.5px', fontWeight: 600, color: '#5B5670' }}>HIPAA 164.312 · Access control</span>
          <span style={{ fontSize: '7.5px', color: '#0E9384', fontWeight: 700 }}>Met</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '7px', padding: '7px 9px', borderRadius: '9px', background: '#FBFAFE', border: '1px solid #F0EDF7' }}>
          <span style={{ width: '14px', height: '14px', borderRadius: '50%', background: '#ECFDF9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="#0E9384" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
          </span>
          <span style={{ flex: 1, fontSize: '8.5px', fontWeight: 600, color: '#5B5670' }}>PCI DSS Req 3 · Data protection</span>
          <span style={{ fontSize: '7.5px', color: '#0E9384', fontWeight: 700 }}>Met</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '7px', padding: '7px 9px', borderRadius: '9px', background: '#FBFAFE', border: '1px solid #F0EDF7' }}>
          <span style={{ width: '14px', height: '14px', borderRadius: '50%', background: '#ECFDF9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="#0E9384" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
          </span>
          <span style={{ flex: 1, fontSize: '8.5px', fontWeight: 600, color: '#5B5670' }}>FERPA 99.31 · Consent records</span>
          <span style={{ fontSize: '7.5px', color: '#0E9384', fontWeight: 700 }}>Met</span>
        </div>
      </div>
      <div style={{ marginTop: '10px', display: 'inline-flex', alignItems: 'center', gap: '4px', padding: '3px 8px', borderRadius: '999px', background: '#ECFDF9', border: '1px solid #CDF5EE' }}>
        <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="#0E9384" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
        <span style={{ fontSize: '8px', fontWeight: 700, color: '#0E9384' }}>All Obligations Met</span>
      </div>
    </>
  );
}

// ── Step 02 — Enforce retention rules (auto-policy panel) ──
export function StepEnforceRetentionVisual() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
      <div style={{ width: '150px', borderRadius: '14px', background: '#FBFAFE', border: '1px solid #F0EDF7', padding: '14px 12px', position: 'relative' }}>
        <div style={{ position: 'absolute', top: '-9px', right: '-9px', width: '26px', height: '26px', borderRadius: '50%', background: '#0E9384', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 8px 16px -6px rgba(14,147,132,.6)', border: '2.5px solid #fff' }}>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
        </div>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', padding: '3px 9px', borderRadius: '999px', background: '#ECFDF9', border: '1px solid #CDF5EE', marginBottom: '10px' }}>
          <span style={{ fontSize: '8px', fontWeight: 800, color: '#0E9384', letterSpacing: '.04em' }}>Retention</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '5px 7px', borderRadius: '7px', background: '#fff', border: '1px solid #EFEDF6' }}>
            <span style={{ fontSize: '8px', fontWeight: 600, color: '#5B5670' }}>Financial</span>
            <span style={{ fontSize: '7px', fontWeight: 700, color: '#7C3AED' }}>7 years</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '5px 7px', borderRadius: '7px', background: '#fff', border: '1px solid #EFEDF6' }}>
            <span style={{ fontSize: '8px', fontWeight: 600, color: '#5B5670' }}>Healthcare</span>
            <span style={{ fontSize: '7px', fontWeight: 700, color: '#0E9384' }}>6 years</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '5px 7px', borderRadius: '7px', background: '#fff', border: '1px solid #EFEDF6' }}>
            <span style={{ fontSize: '8px', fontWeight: 600, color: '#5B5670' }}>Education</span>
            <span style={{ fontSize: '7px', fontWeight: 700, color: '#F59E0B' }}>5 years</span>
          </div>
        </div>
        <div style={{ marginTop: '10px', fontSize: '7.5px', fontWeight: 600, color: '#8B85A0', textAlign: 'center' }}>Auto-enforced per policy</div>
      </div>
    </div>
  );
}

// ── Step 03 — Report on demand (multi-framework export) ──
export function StepReportOnDemandVisual() {
  return (
    <div style={{ display: 'flex', gap: '11px', height: '100%' }}>
      {/* Frameworks side */}
      <div style={{ flex: 1, borderRadius: '11px', background: '#FBFAFE', border: '1px solid #F0EDF7', padding: '11px 10px', display: 'flex', flexDirection: 'column' }}>
        <span style={{ fontSize: '8px', fontWeight: 800, letterSpacing: '.05em', color: '#7C3AED', textTransform: 'uppercase' }}>Frameworks</span>
        <div style={{ marginTop: '8px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ECFDF9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="7" height="7" viewBox="0 0 24 24" fill="none" stroke="#0E9384" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
            </span>
            <span style={{ fontSize: '7px', fontWeight: 600, color: '#5B5670' }}>HIPAA · 14 controls</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ECFDF9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="7" height="7" viewBox="0 0 24 24" fill="none" stroke="#0E9384" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
            </span>
            <span style={{ fontSize: '7px', fontWeight: 600, color: '#5B5670' }}>PCI DSS · 12 controls</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ECFDF9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="7" height="7" viewBox="0 0 24 24" fill="none" stroke="#0E9384" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
            </span>
            <span style={{ fontSize: '7px', fontWeight: 700, color: '#0E9384' }}>FERPA · 8 controls</span>
          </div>
        </div>
        <div style={{ marginTop: 'auto', display: 'inline-flex', alignItems: 'center', gap: '4px', padding: '3px 7px', borderRadius: '6px', background: '#F3EFFF', border: '1px solid #E6DEFA' }}>
          <span style={{ fontSize: '6.5px', fontWeight: 700, color: '#7C3AED' }}>3 frameworks</span>
        </div>
      </div>
      {/* Export side */}
      <div style={{ flex: 1, borderRadius: '11px', background: '#FBFAFE', border: '1px solid #F0EDF7', padding: '11px 10px', display: 'flex', flexDirection: 'column' }}>
        <span style={{ fontSize: '8px', fontWeight: 800, letterSpacing: '.05em', color: '#0E9384', textTransform: 'uppercase' }}>Export</span>
        <div style={{ marginTop: '8px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ECFDF9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="7" height="7" viewBox="0 0 24 24" fill="none" stroke="#0E9384" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
            </span>
            <span style={{ fontSize: '7px', fontWeight: 600, color: '#5B5670' }}>Evidence collected</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ECFDF9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="7" height="7" viewBox="0 0 24 24" fill="none" stroke="#0E9384" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
            </span>
            <span style={{ fontSize: '7px', fontWeight: 600, color: '#5B5670' }}>Report generated</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ECFDF9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="7" height="7" viewBox="0 0 24 24" fill="none" stroke="#0E9384" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
            </span>
            <span style={{ fontSize: '7px', fontWeight: 700, color: '#0E9384' }}>Ready to share</span>
          </div>
        </div>
        <div style={{ marginTop: 'auto', display: 'inline-flex', alignItems: 'center', gap: '4px', padding: '3px 8px', borderRadius: '999px', background: '#ECFDF9', border: '1px solid #CDF5EE' }}>
          <svg width="7" height="7" viewBox="0 0 24 24" fill="none" stroke="#0E9384" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
          <span style={{ fontSize: '7px', fontWeight: 700, color: '#0E9384' }}>Complete</span>
        </div>
      </div>
    </div>
  );
}

// ── Feature row 1 — Multi-Framework Coverage (regulation dashboard) ──
export function MultiFrameworkVisual() {
  return (
    <div style={{ position: 'relative' }}>
      <div style={{ position: 'absolute', inset: '20px -10px -18px 16px', background: 'linear-gradient(135deg,rgba(124,58,237,.12),rgba(20,184,166,.10))', borderRadius: '26px', filter: 'blur(3px)' }} />
      <div style={{ position: 'relative', background: '#fff', borderRadius: '22px', border: '1px solid #ECE9F5', boxShadow: '0 3px 8px -3px rgba(37,22,84,.12),0 40px 72px -36px rgba(37,22,84,.4)', padding: '22px', overflow: 'hidden' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
            <ScaleIcon size={14} color="#7C3AED" />
            <span style={{ fontSize: '11px', fontWeight: 700, color: '#1B1730' }}>Regulation Coverage</span>
          </span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', padding: '3px 8px', borderRadius: '999px', background: '#ECFDF9', border: '1px solid #CDF5EE', fontSize: '8.5px', fontWeight: 700, color: '#0E9384' }}>All Met</span>
        </div>
        {/* Framework cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '10px 12px', borderRadius: '10px', background: '#FBFAFE', border: '1px solid #F0EDF7' }}>
            <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: 'linear-gradient(135deg,#C4B5FD,#8B5CF6)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg>
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: '9px', fontWeight: 700, color: '#1B1730' }}>HIPAA</div>
              <div style={{ fontSize: '7.5px', color: '#8B85A0' }}>Healthcare · Patient data protection</div>
            </div>
            <div style={{ display: 'flex', gap: '2px' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '2px', background: '#0E9384' }} />
              <span style={{ width: '8px', height: '8px', borderRadius: '2px', background: '#0E9384' }} />
              <span style={{ width: '8px', height: '8px', borderRadius: '2px', background: '#0E9384' }} />
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '10px 12px', borderRadius: '10px', background: '#FBFAFE', border: '1px solid #F0EDF7' }}>
            <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: 'linear-gradient(135deg,#A7F3D0,#34D399)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="5" width="20" height="14" rx="2" /><path d="M2 10h20" /></svg>
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: '9px', fontWeight: 700, color: '#1B1730' }}>PCI DSS</div>
              <div style={{ fontSize: '7.5px', color: '#8B85A0' }}>Finance · Payment card security</div>
            </div>
            <div style={{ display: 'flex', gap: '2px' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '2px', background: '#0E9384' }} />
              <span style={{ width: '8px', height: '8px', borderRadius: '2px', background: '#0E9384' }} />
              <span style={{ width: '8px', height: '8px', borderRadius: '2px', background: '#0E9384' }} />
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '10px 12px', borderRadius: '10px', background: '#FBFAFE', border: '1px solid #F0EDF7' }}>
            <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: 'linear-gradient(135deg,#FDE68A,#F59E0B)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" /></svg>
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: '9px', fontWeight: 700, color: '#1B1730' }}>FERPA</div>
              <div style={{ fontSize: '7.5px', color: '#8B85A0' }}>Education · Student record privacy</div>
            </div>
            <div style={{ display: 'flex', gap: '2px' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '2px', background: '#0E9384' }} />
              <span style={{ width: '8px', height: '8px', borderRadius: '2px', background: '#0E9384' }} />
              <span style={{ width: '8px', height: '8px', borderRadius: '2px', background: '#0E9384' }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Feature row 2 — Automated Retention & Disposal (lifecycle timeline) ──
export function RetentionLifecycleVisual() {
  return (
    <div style={{ position: 'relative' }}>
      <div style={{ position: 'absolute', inset: '20px 16px -18px -10px', background: 'linear-gradient(135deg,rgba(14,147,132,.12),rgba(124,58,237,.10))', borderRadius: '26px', filter: 'blur(3px)' }} />
      <div style={{ position: 'relative', background: '#fff', borderRadius: '22px', border: '1px solid #ECE9F5', boxShadow: '0 3px 8px -3px rgba(37,22,84,.12),0 40px 72px -36px rgba(37,22,84,.4)', overflow: 'hidden' }}>
        {/* Header */}
        <div style={{ padding: '16px 20px', borderBottom: '1px solid #F0EEF6', display: 'flex', alignItems: 'center', gap: '11px', background: '#FBFAFE' }}>
          <span style={{ width: '34px', height: '34px', borderRadius: '10px', background: '#F3EFFF', border: '1px solid #E6DEFA', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>
          </span>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: '13px', fontWeight: 700, color: '#1B1730' }}>Data Lifecycle</div>
            <div style={{ fontSize: '11px', color: '#8B85A0' }}>Retention &amp; secure disposal</div>
          </div>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', padding: '4px 10px', borderRadius: '999px', background: '#F3EFFF', border: '1px solid #E6DEFA', fontSize: '10px', fontWeight: 700, color: '#7C3AED' }}>Automated</span>
        </div>
        {/* Body */}
        <div style={{ padding: '20px' }}>
          {/* Timeline */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ width: '20px', height: '20px', borderRadius: '50%', background: '#ECFDF9', border: '1.5px solid #0E9384', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#0E9384" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
              </span>
              <div style={{ flex: 1, borderBottom: '1px dashed #E6DEFA', paddingBottom: '10px' }}>
                <div style={{ fontSize: '9px', fontWeight: 700, color: '#1B1730' }}>Created</div>
                <div style={{ fontSize: '7.5px', color: '#8B85A0' }}>Encrypted at rest, policy assigned</div>
              </div>
              <span style={{ fontSize: '7.5px', color: '#A79FBE' }}>Day 0</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ width: '20px', height: '20px', borderRadius: '50%', background: '#ECFDF9', border: '1.5px solid #0E9384', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#0E9384" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
              </span>
              <div style={{ flex: 1, borderBottom: '1px dashed #E6DEFA', paddingBottom: '10px' }}>
                <div style={{ fontSize: '9px', fontWeight: 700, color: '#1B1730' }}>Retained</div>
                <div style={{ fontSize: '7.5px', color: '#8B85A0' }}>Access-logged, immutable storage</div>
              </div>
              <span style={{ fontSize: '7.5px', color: '#A79FBE' }}>Active</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ width: '20px', height: '20px', borderRadius: '50%', background: '#F3EFFF', border: '1.5px solid #7C3AED', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18M6 6l12 12" /></svg>
              </span>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: '9px', fontWeight: 700, color: '#1B1730' }}>Disposed</div>
                <div style={{ fontSize: '7.5px', color: '#8B85A0' }}>Secure deletion with certificate</div>
              </div>
              <span style={{ fontSize: '7.5px', color: '#7C3AED', fontWeight: 700 }}>Policy end</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
