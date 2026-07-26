// High-fidelity web app mockup for PDF Reader Download page.
// Shows: PDF viewer with real text content, annotation tools, page thumbnails,
// highlighted passages, comments, and a signature field.

export function PdfReaderWebMockup() {
  return (
    <div className="ai-compose-web-mockup" aria-hidden="true">
      {/* Browser chrome */}
      <div className="ai-compose-web-mockup-chrome">
        <div className="ai-compose-web-mockup-dots">
          <span /><span /><span />
        </div>
        <div className="ai-compose-web-mockup-url">snaarp.com/pdf/advisory-agreement</div>
      </div>

      {/* Toolbar */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '8px 16px', borderBottom: '1px solid #F0EEF6', background: '#FBFAFE' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#E11D48" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><path d="M14 2v6h6" /></svg>
          <span style={{ fontSize: '11px', fontWeight: 700, color: '#1B1730' }}>Advisory Agreement.pdf</span>
          <span style={{ fontSize: '8px', color: '#8B85A0' }}>· 4 pages</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          {[
            { label: 'Highlight', color: '#D97706', bg: '#FEF6E7' },
            { label: 'Comment', color: '#3B82F6', bg: '#EFF6FF' },
            { label: 'Sign', color: '#7C3AED', bg: '#F3EFFF' },
          ].map((tool) => (
            <span key={tool.label} style={{ display: 'inline-flex', alignItems: 'center', gap: '3px', padding: '4px 8px', borderRadius: '6px', background: tool.bg, fontSize: '8px', fontWeight: 600, color: tool.color }}>{tool.label}</span>
          ))}
        </div>
      </div>

      {/* Viewer area */}
      <div style={{ display: 'flex', minHeight: '260px' }}>
        {/* Page thumbnails sidebar */}
        <div style={{ width: '56px', flexShrink: 0, borderRight: '1px solid #F0EEF6', padding: '10px 6px', display: 'flex', flexDirection: 'column' as const, gap: '6px', background: '#FBFAFE' }}>
          {[1, 2, 3, 4].map((n) => (
            <div key={n} style={{ borderRadius: '4px', overflow: 'hidden', border: n === 1 ? '2px solid #7C3AED' : '1px solid #F0EEF6', position: 'relative' as const }}>
              <div style={{ height: '36px', background: '#fff', display: 'flex', flexDirection: 'column' as const, justifyContent: 'center', padding: '4px 5px' }}>
                <span style={{ fontSize: '4px', fontWeight: 700, color: '#1B1730', marginBottom: '2px' }}>Advisory Agreement</span>
                <span style={{ fontSize: '3px', color: '#8B85A0', lineHeight: 1.3 }}>This agreement is entered into between the parties listed herein...</span>
              </div>
              <span style={{ position: 'absolute' as const, bottom: '1px', right: '2px', fontSize: '5px', fontWeight: 700, color: n === 1 ? '#7C3AED' : '#A79FBE' }}>{n}</span>
            </div>
          ))}
        </div>

        {/* Main PDF page */}
        <div style={{ flex: 1, padding: '16px 20px', display: 'flex', gap: '12px' }}>
          {/* PDF content */}
          <div style={{ flex: 1 }}>
            {/* Document header */}
            <div style={{ fontSize: '14px', fontWeight: 800, color: '#1B1730', marginBottom: '4px', letterSpacing: '-.02em' }}>Advisory Agreement</div>
            <div style={{ fontSize: '7.5px', color: '#8B85A0', marginBottom: '14px' }}>Effective Date: 1 April 2026 · Between Snaarp Ltd and Client</div>

            {/* Section 1 */}
            <div style={{ fontSize: '9px', fontWeight: 700, color: '#1B1730', marginBottom: '5px' }}>1. Scope of Services</div>
            <p style={{ fontSize: '7.5px', lineHeight: 1.65, color: '#5B5670', margin: '0 0 6px' }}>
              The Adviser agrees to provide ongoing financial advisory services to the Client, including but not limited to portfolio management, investment strategy, and periodic performance reviews.
            </p>
            <p style={{ fontSize: '7.5px', lineHeight: 1.65, color: '#5B5670', margin: '0 0 10px' }}>
              Services shall be delivered in accordance with the regulatory framework applicable to the Adviser&apos;s jurisdiction and in the Client&apos;s best interest at all times.
            </p>

            {/* Section 2 with highlighted text */}
            <div style={{ fontSize: '9px', fontWeight: 700, color: '#1B1730', marginBottom: '5px' }}>2. Term and Termination</div>
            <p style={{ fontSize: '7.5px', lineHeight: 1.65, color: '#5B5670', margin: '0 0 6px' }}>
              This agreement shall commence on the Effective Date and continue for an initial period of twelve (12) months, <span style={{ background: '#FEF3CD', borderRadius: '2px', padding: '0 2px', border: '1px solid #FBEBC6' }}>renewable annually unless terminated by either party with 30 days&apos; written notice</span>.
            </p>
            <p style={{ fontSize: '7.5px', lineHeight: 1.65, color: '#5B5670', margin: '0 0 10px' }}>
              Upon termination, the Adviser shall provide a final account summary and transfer all relevant documentation within 14 business days.
            </p>

            {/* Section 3 */}
            <div style={{ fontSize: '9px', fontWeight: 700, color: '#1B1730', marginBottom: '5px' }}>3. Confidentiality</div>
            <p style={{ fontSize: '7.5px', lineHeight: 1.65, color: '#5B5670', margin: '0 0 10px' }}>
              Both parties agree to maintain strict confidentiality regarding all financial data, personal information, and proprietary strategies disclosed during the term of this agreement.
            </p>

            {/* Section 4 */}
            <div style={{ fontSize: '9px', fontWeight: 700, color: '#1B1730', marginBottom: '5px' }}>4. Fee Structure</div>
            {/* Table */}
            <div style={{ borderRadius: '6px', border: '1px solid #F0EEF6', overflow: 'hidden', marginBottom: '12px', fontSize: '7px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', background: '#FAF9FD', borderBottom: '1px solid #F0EEF6', fontWeight: 700, color: '#8B85A0' }}>
                <span style={{ padding: '5px 8px' }}>Service</span>
                <span style={{ padding: '5px 8px' }}>Fee Type</span>
                <span style={{ padding: '5px 8px' }}>Rate</span>
              </div>
              {[
                { service: 'Portfolio Management', type: 'Annual', rate: '0.75% AUM' },
                { service: 'Financial Planning', type: 'Fixed', rate: '£2,500/yr' },
                { service: 'Ad-hoc Consultation', type: 'Hourly', rate: '£180/hr' },
              ].map((row) => (
                <div key={row.service} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', borderBottom: '1px solid #F7F6FA', color: '#3B3550' }}>
                  <span style={{ padding: '4px 8px', fontWeight: 600 }}>{row.service}</span>
                  <span style={{ padding: '4px 8px' }}>{row.type}</span>
                  <span style={{ padding: '4px 8px', fontWeight: 700, color: '#1B1730' }}>{row.rate}</span>
                </div>
              ))}
            </div>

            {/* Signature field */}
            <div style={{ padding: '10px 14px', borderRadius: '10px', border: '2px dashed #E6DEFA', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M17 3a2.85 2.85 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" /></svg>
              <div>
                <div style={{ fontSize: '8px', fontWeight: 700, color: '#7C3AED' }}>Signature required</div>
                <div style={{ fontSize: '7px', color: '#8B85A0' }}>Click to add your signature</div>
              </div>
            </div>
          </div>

          {/* Comment panel */}
          <div style={{ width: '100px', display: 'flex', flexDirection: 'column' as const, gap: '8px', paddingTop: '46px' }}>
            <div style={{ borderRadius: '8px', background: '#FEF6E7', border: '1px solid #FBEBC6', padding: '8px', boxShadow: '0 4px 10px -4px rgba(146,64,14,.1)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '3px', marginBottom: '3px' }}>
                <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#FBBF24', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ fontSize: '5px', fontWeight: 800, color: '#fff' }}>J</span>
                </span>
                <span style={{ fontSize: '6px', fontWeight: 700, color: '#92400E' }}>Jacob</span>
                <span style={{ fontSize: '5px', color: '#B45309', marginLeft: 'auto' }}>3m</span>
              </div>
              <p style={{ fontSize: '6.5px', lineHeight: 1.4, color: '#92400E', margin: 0 }}>"30-day notice - confirm this matches the SLA we agreed"</p>
            </div>
            <div style={{ borderRadius: '8px', background: '#EFF6FF', border: '1px solid #BFDBFE', padding: '8px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '3px', marginBottom: '3px' }}>
                <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#3B82F6', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ fontSize: '5px', fontWeight: 800, color: '#fff' }}>S</span>
                </span>
                <span style={{ fontSize: '6px', fontWeight: 700, color: '#1E40AF' }}>Sofia</span>
                <span style={{ fontSize: '5px', color: '#1D4ED8', marginLeft: 'auto' }}>1m</span>
              </div>
              <p style={{ fontSize: '6.5px', lineHeight: 1.4, color: '#1E40AF', margin: 0 }}>"Fee schedule looks good - approved ✓"</p>
            </div>
            <div style={{ borderRadius: '8px', background: '#ECFDF9', border: '1px solid #CDF5EE', padding: '8px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '3px', marginBottom: '3px' }}>
                <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#0E9384', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ fontSize: '5px', fontWeight: 800, color: '#fff' }}>A</span>
                </span>
                <span style={{ fontSize: '6px', fontWeight: 700, color: '#065F46' }}>Amara</span>
                <span style={{ fontSize: '5px', color: '#047857', marginLeft: 'auto' }}>now</span>
              </div>
              <p style={{ fontSize: '6.5px', lineHeight: 1.4, color: '#065F46', margin: 0 }}>"Confidentiality clause reviewed - all clear"</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
