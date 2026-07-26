// High-fidelity web app mockup for Sheets Download page.
// Shows: window chrome, formula bar, full spreadsheet grid with header row,
// data rows, CRM sync badge, collaborator avatars, and a SUM total row.

import { AVATARS } from '../avatarPaths';

export function SheetsWebMockup() {
  return (
    <div className="ai-compose-web-mockup" aria-hidden="true">
      {/* Browser chrome */}
      <div className="ai-compose-web-mockup-chrome">
        <div className="ai-compose-web-mockup-dots">
          <span /><span /><span />
        </div>
        <div className="ai-compose-web-mockup-url">snaarp.com/sheets/q3-pipeline</div>
      </div>

      {/* Toolbar area */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '8px 16px', borderBottom: '1px solid #F0EEF6', background: '#FBFAFE' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ fontSize: '11px', fontWeight: 700, color: '#1B1730' }}>Q3 Pipeline - Revenue.sheet</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          {/* CRM sync badge */}
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', padding: '3px 8px', borderRadius: '6px', background: '#ECFDF9', border: '1px solid #CDF5EE', fontSize: '8px', fontWeight: 700, color: '#0E9384' }}>
            <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#14B8A6' }} />
            Synced from CRM
          </span>
          {/* Collaborators */}
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span style={{ width: '18px', height: '18px', borderRadius: '50%', overflow: 'hidden', border: '1.5px solid #fff' }}>
              <img src={AVATARS.jacob} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            </span>
            <span style={{ width: '18px', height: '18px', borderRadius: '50%', overflow: 'hidden', border: '1.5px solid #fff', marginLeft: '-6px' }}>
              <img src={AVATARS.sofiaReyes} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            </span>
          </div>
        </div>
      </div>

      {/* Formula bar */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '7px 16px', borderBottom: '1px solid #F0EEF6' }}>
        <span style={{ fontStyle: 'italic', fontWeight: 700, fontSize: '11px', color: '#B4AEC6', fontFamily: 'Georgia, serif' }}>fx</span>
        <span style={{ flex: 1, fontFamily: "ui-monospace, 'SF Mono', Menlo, monospace", fontSize: '10px', color: '#5B5670', background: '#F7F6FB', border: '1px solid #EEECF5', borderRadius: '6px', padding: '5px 10px' }}>
          =SUM(<span style={{ color: '#7C3AED' }}>D2:D9</span>)
        </span>
      </div>

      {/* Spreadsheet grid */}
      <div style={{ fontSize: '9px', color: '#3B3550' }}>
        {/* Column headers */}
        <div style={{ display: 'grid', gridTemplateColumns: '26px 1.4fr 0.8fr 0.8fr 70px', background: '#FAF9FD', borderBottom: '1px solid #EEECF5', fontWeight: 700, color: '#8B85A0', fontSize: '8px', letterSpacing: '.04em' }}>
          <span style={{ padding: '7px 4px', textAlign: 'center' as const, borderRight: '1px solid #EEECF5' }} />
          <span style={{ padding: '7px 10px', borderRight: '1px solid #EEECF5' }}>ACCOUNT</span>
          <span style={{ padding: '7px 10px', borderRight: '1px solid #EEECF5' }}>STAGE</span>
          <span style={{ padding: '7px 10px', borderRight: '1px solid #EEECF5' }}>OWNER</span>
          <span style={{ padding: '7px 10px', textAlign: 'right' as const }}>VALUE</span>
        </div>

        {/* Data rows */}
        {[
          { n: '1', account: 'Acme Corp', stage: 'Closed Won', stageColor: '#0E9384', stageBg: '#ECFDF9', owner: 'Jacob', value: '£42,000' },
          { n: '2', account: 'Globex Ltd', stage: 'Proposal', stageColor: '#D97706', stageBg: '#FEF6E7', owner: 'Sofia', value: '£28,500' },
          { n: '3', account: 'Initech', stage: 'Negotiation', stageColor: '#7C3AED', stageBg: '#F3EFFF', owner: 'Jacob', value: '£35,200' },
          { n: '4', account: 'Soylent Co', stage: 'Closed Won', stageColor: '#0E9384', stageBg: '#ECFDF9', owner: 'Sofia', value: '£19,800' },
          { n: '5', account: 'Wonka Inc', stage: 'Discovery', stageColor: '#3B82F6', stageBg: '#EFF6FF', owner: 'Jacob', value: '£64,000' },
          { n: '6', account: 'Stark Industries', stage: 'Proposal', stageColor: '#D97706', stageBg: '#FEF6E7', owner: 'Sofia', value: '£51,400' },
          { n: '7', account: 'Wayne Ent', stage: 'Closed Won', stageColor: '#0E9384', stageBg: '#ECFDF9', owner: 'Jacob', value: '£38,700' },
          { n: '8', account: 'Umbrella Corp', stage: 'Negotiation', stageColor: '#7C3AED', stageBg: '#F3EFFF', owner: 'Sofia', value: '£22,100' },
        ].map((row) => (
          <div key={row.n} style={{ display: 'grid', gridTemplateColumns: '26px 1.4fr 0.8fr 0.8fr 70px', borderBottom: '1px solid #F7F6FA' }}>
            <span style={{ padding: '6px 4px', textAlign: 'center' as const, fontSize: '8px', color: '#B4AEC6', fontWeight: 600, borderRight: '1px solid #F7F6FA' }}>{row.n}</span>
            <span style={{ padding: '6px 10px', fontWeight: 600, color: '#1B1730', fontSize: '9px', borderRight: '1px solid #F7F6FA' }}>{row.account}</span>
            <span style={{ padding: '6px 10px', borderRight: '1px solid #F7F6FA' }}>
              <span style={{ display: 'inline-block', padding: '2px 6px', borderRadius: '4px', background: row.stageBg, fontSize: '7.5px', fontWeight: 700, color: row.stageColor }}>{row.stage}</span>
            </span>
            <span style={{ padding: '6px 10px', fontSize: '8.5px', color: '#5B5670', borderRight: '1px solid #F7F6FA' }}>{row.owner}</span>
            <span style={{ padding: '6px 10px', textAlign: 'right' as const, fontWeight: 700, color: '#1B1730', fontSize: '9px' }}>{row.value}</span>
          </div>
        ))}

        {/* Total row */}
        <div style={{ display: 'grid', gridTemplateColumns: '26px 1.4fr 0.8fr 0.8fr 70px', background: '#F3EFFF', borderTop: '2px solid #E6DEFA' }}>
          <span style={{ padding: '7px 4px', textAlign: 'center' as const, fontSize: '8px', color: '#7C3AED', fontWeight: 700 }}>9</span>
          <span style={{ padding: '7px 10px', fontWeight: 800, color: '#7C3AED', fontSize: '9px' }}>Total</span>
          <span style={{ padding: '7px 10px' }} />
          <span style={{ padding: '7px 10px' }} />
          <span style={{ padding: '7px 10px', textAlign: 'right' as const, fontWeight: 800, color: '#7C3AED', fontSize: '10px' }}>£301,700</span>
        </div>
      </div>
    </div>
  );
}
