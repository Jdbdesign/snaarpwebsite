// High-fidelity web app mockup for CRM Download page.
// Shows: pipeline board with columns, deal cards with values/owners/tags,
// a sidebar with filters, and a summary bar.

import { AVATARS } from '../avatarPaths';

export function CrmWebMockup() {
  return (
    <div className="ai-compose-web-mockup" aria-hidden="true">
      {/* Browser chrome */}
      <div className="ai-compose-web-mockup-chrome">
        <div className="ai-compose-web-mockup-dots">
          <span /><span /><span />
        </div>
        <div className="ai-compose-web-mockup-url">snaarp.com/crm/pipeline</div>
      </div>

      {/* Toolbar */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 16px', borderBottom: '1px solid #F0EEF6', background: '#FBFAFE' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span style={{ fontSize: '12px', fontWeight: 800, color: '#1B1730' }}>Pipeline</span>
          <span style={{ padding: '3px 8px', borderRadius: '6px', background: '#F3EFFF', border: '1px solid #E6DEFA', fontSize: '8px', fontWeight: 600, color: '#7C3AED' }}>Q3 2026</span>
          <span style={{ padding: '3px 8px', borderRadius: '6px', background: '#F7F6FA', border: '1px solid #F0EEF6', fontSize: '8px', fontWeight: 600, color: '#5B5670' }}>All owners</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '5px', padding: '5px 10px', borderRadius: '7px', background: '#F7F6FA', border: '1px solid #F0EEF6' }}>
            <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#A79FBE" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.4-4.4" /></svg>
            <span style={{ fontSize: '8px', fontWeight: 500, color: '#A79FBE' }}>Search deals...</span>
          </div>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', padding: '6px 12px', borderRadius: '999px', background: '#7C3AED', color: '#fff', fontSize: '9px', fontWeight: 700 }}>
            <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M5 12h14" /></svg>
            Add deal
          </span>
        </div>
      </div>

      {/* Summary stats bar */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '8px 16px', borderBottom: '1px solid #F0EEF6', background: '#fff' }}>
        {[
          { label: 'Total pipeline', value: '£301k', color: '#1B1730' },
          { label: 'Weighted', value: '£184k', color: '#7C3AED' },
          { label: 'Deals', value: '9', color: '#1B1730' },
          { label: 'Avg. deal size', value: '£33.4k', color: '#1B1730' },
          { label: 'Win rate', value: '34%', color: '#0E9384' },
        ].map((stat) => (
          <div key={stat.label} style={{ display: 'flex', alignItems: 'baseline', gap: '4px' }}>
            <span style={{ fontSize: '10px', fontWeight: 800, color: stat.color }}>{stat.value}</span>
            <span style={{ fontSize: '7px', fontWeight: 500, color: '#8B85A0' }}>{stat.label}</span>
          </div>
        ))}
      </div>

      {/* Pipeline board */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px', padding: '14px 14px', minHeight: '300px' }}>
        {/* Discovery column */}
        <div style={{ borderRadius: '12px', background: '#F7F6FA', padding: '10px', display: 'flex', flexDirection: 'column' as const }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#3B82F6' }} />
              <span style={{ fontSize: '7.5px', fontWeight: 800, color: '#3B82F6', textTransform: 'uppercase' as const, letterSpacing: '.06em' }}>Discovery</span>
            </div>
            <span style={{ fontSize: '7px', fontWeight: 700, color: '#8B85A0' }}>£92k</span>
          </div>
          {[
            { name: 'Globex Ltd', value: '£28,500', owner: AVATARS.amaraChen, ownerName: 'Amara', tag: 'SaaS', daysInStage: '4d' },
            { name: 'Wonka Inc', value: '£64,000', owner: AVATARS.jacob, ownerName: 'Jacob', tag: 'Enterprise', daysInStage: '2d' },
          ].map((deal) => (
            <div key={deal.name} style={{ borderRadius: '10px', background: '#fff', border: '1px solid #F0EEF6', padding: '10px', marginBottom: '8px', boxShadow: '0 2px 6px -3px rgba(37,22,84,.08)' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '6px' }}>
                <span style={{ fontSize: '8.5px', fontWeight: 700, color: '#1B1730' }}>{deal.name}</span>
                <span style={{ fontSize: '6px', color: '#A79FBE' }}>{deal.daysInStage}</span>
              </div>
              <div style={{ fontSize: '10px', fontWeight: 800, color: '#3B82F6', marginBottom: '6px' }}>{deal.value}</div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ padding: '2px 6px', borderRadius: '4px', background: '#EFF6FF', fontSize: '6px', fontWeight: 600, color: '#3B82F6' }}>{deal.tag}</span>
                <div style={{ display: 'flex', alignItems: 'center', gap: '3px' }}>
                  <span style={{ width: '14px', height: '14px', borderRadius: '50%', overflow: 'hidden' }}>
                    <img src={deal.owner} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                  </span>
                  <span style={{ fontSize: '6.5px', fontWeight: 600, color: '#8B85A0' }}>{deal.ownerName}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Proposal column */}
        <div style={{ borderRadius: '12px', background: '#F7F6FA', padding: '10px', display: 'flex', flexDirection: 'column' as const }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#D97706' }} />
              <span style={{ fontSize: '7.5px', fontWeight: 800, color: '#D97706', textTransform: 'uppercase' as const, letterSpacing: '.06em' }}>Proposal</span>
            </div>
            <span style={{ fontSize: '7px', fontWeight: 700, color: '#8B85A0' }}>£80k</span>
          </div>
          {[
            { name: 'Stark Industries', value: '£51,400', owner: AVATARS.sofiaReyes, ownerName: 'Sofia', tag: 'Mid-market', daysInStage: '7d' },
            { name: 'Umbrella Corp', value: '£29,000', owner: AVATARS.arlo, ownerName: 'Arlo', tag: 'SaaS', daysInStage: '3d' },
          ].map((deal) => (
            <div key={deal.name} style={{ borderRadius: '10px', background: '#fff', border: '1px solid #F0EEF6', padding: '10px', marginBottom: '8px', boxShadow: '0 2px 6px -3px rgba(37,22,84,.08)' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '6px' }}>
                <span style={{ fontSize: '8.5px', fontWeight: 700, color: '#1B1730' }}>{deal.name}</span>
                <span style={{ fontSize: '6px', color: '#A79FBE' }}>{deal.daysInStage}</span>
              </div>
              <div style={{ fontSize: '10px', fontWeight: 800, color: '#D97706', marginBottom: '6px' }}>{deal.value}</div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ padding: '2px 6px', borderRadius: '4px', background: '#FEF6E7', fontSize: '6px', fontWeight: 600, color: '#D97706' }}>{deal.tag}</span>
                <div style={{ display: 'flex', alignItems: 'center', gap: '3px' }}>
                  <span style={{ width: '14px', height: '14px', borderRadius: '50%', overflow: 'hidden' }}>
                    <img src={deal.owner} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                  </span>
                  <span style={{ fontSize: '6.5px', fontWeight: 600, color: '#8B85A0' }}>{deal.ownerName}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Negotiation column */}
        <div style={{ borderRadius: '12px', background: '#F7F6FA', padding: '10px', display: 'flex', flexDirection: 'column' as const }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#7C3AED' }} />
              <span style={{ fontSize: '7.5px', fontWeight: 800, color: '#7C3AED', textTransform: 'uppercase' as const, letterSpacing: '.06em' }}>Negotiation</span>
            </div>
            <span style={{ fontSize: '7px', fontWeight: 700, color: '#8B85A0' }}>£87k</span>
          </div>
          {[
            { name: 'Initech', value: '£35,200', owner: AVATARS.jacob, ownerName: 'Jacob', tag: 'Enterprise', daysInStage: '12d' },
            { name: 'Wayne Enterprises', value: '£52,000', owner: AVATARS.sofiaReyes, ownerName: 'Sofia', tag: 'Enterprise', daysInStage: '5d' },
          ].map((deal) => (
            <div key={deal.name} style={{ borderRadius: '10px', background: '#fff', border: '1px solid #F0EEF6', padding: '10px', marginBottom: '8px', boxShadow: '0 2px 6px -3px rgba(37,22,84,.08)' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '6px' }}>
                <span style={{ fontSize: '8.5px', fontWeight: 700, color: '#1B1730' }}>{deal.name}</span>
                <span style={{ fontSize: '6px', color: '#A79FBE' }}>{deal.daysInStage}</span>
              </div>
              <div style={{ fontSize: '10px', fontWeight: 800, color: '#7C3AED', marginBottom: '6px' }}>{deal.value}</div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ padding: '2px 6px', borderRadius: '4px', background: '#F3EFFF', fontSize: '6px', fontWeight: 600, color: '#7C3AED' }}>{deal.tag}</span>
                <div style={{ display: 'flex', alignItems: 'center', gap: '3px' }}>
                  <span style={{ width: '14px', height: '14px', borderRadius: '50%', overflow: 'hidden' }}>
                    <img src={deal.owner} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                  </span>
                  <span style={{ fontSize: '6.5px', fontWeight: 600, color: '#8B85A0' }}>{deal.ownerName}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Closed Won column */}
        <div style={{ borderRadius: '12px', background: '#F0FDF9', padding: '10px', display: 'flex', flexDirection: 'column' as const }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#0E9384' }} />
              <span style={{ fontSize: '7.5px', fontWeight: 800, color: '#0E9384', textTransform: 'uppercase' as const, letterSpacing: '.06em' }}>Closed Won</span>
            </div>
            <span style={{ fontSize: '7px', fontWeight: 700, color: '#0E9384' }}>£42k</span>
          </div>
          {[
            { name: 'Acme Corp', value: '£42,000', owner: AVATARS.jacob, ownerName: 'Jacob', tag: 'Mid-market', daysInStage: 'Won' },
          ].map((deal) => (
            <div key={deal.name} style={{ borderRadius: '10px', background: '#fff', border: '1px solid #CDF5EE', padding: '10px', marginBottom: '8px', boxShadow: '0 2px 6px -3px rgba(14,147,132,.1)' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '6px' }}>
                <span style={{ fontSize: '8.5px', fontWeight: 700, color: '#1B1730' }}>{deal.name}</span>
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#0E9384" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
              </div>
              <div style={{ fontSize: '10px', fontWeight: 800, color: '#0E9384', marginBottom: '6px' }}>{deal.value}</div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ padding: '2px 6px', borderRadius: '4px', background: '#ECFDF9', fontSize: '6px', fontWeight: 600, color: '#0E9384' }}>{deal.tag}</span>
                <div style={{ display: 'flex', alignItems: 'center', gap: '3px' }}>
                  <span style={{ width: '14px', height: '14px', borderRadius: '50%', overflow: 'hidden' }}>
                    <img src={deal.owner} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                  </span>
                  <span style={{ fontSize: '6.5px', fontWeight: 600, color: '#8B85A0' }}>{deal.ownerName}</span>
                </div>
              </div>
            </div>
          ))}
          {/* Empty state hint */}
          <div style={{ borderRadius: '8px', border: '1.5px dashed #CDF5EE', padding: '12px', textAlign: 'center' as const, marginTop: '4px' }}>
            <span style={{ fontSize: '7px', color: '#0E9384', fontWeight: 600 }}>Drag a deal here to close it</span>
          </div>
        </div>
      </div>
    </div>
  );
}
