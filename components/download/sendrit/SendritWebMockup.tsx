// High-fidelity web app mockup for Sendrit Download page.
// Shows: sequence builder with steps, email preview, and performance stats.

export function SendritWebMockup() {
  return (
    <div className="ai-compose-web-mockup" aria-hidden="true">
      {/* Browser chrome */}
      <div className="ai-compose-web-mockup-chrome">
        <div className="ai-compose-web-mockup-dots">
          <span /><span /><span />
        </div>
        <div className="ai-compose-web-mockup-url">snaarp.com/sendrit/sequences</div>
      </div>

      {/* Toolbar */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 16px', borderBottom: '1px solid #F0EEF6', background: '#FBFAFE' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ fontSize: '12px', fontWeight: 800, color: '#1B1730' }}>Q3 Outbound - VPs</span>
          <span style={{ padding: '3px 8px', borderRadius: '999px', background: '#0E9384', fontSize: '7px', fontWeight: 700, color: '#fff' }}>Live</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ padding: '4px 10px', borderRadius: '6px', background: '#F7F6FA', border: '1px solid #F0EEF6', fontSize: '8px', fontWeight: 600, color: '#5B5670' }}>342 contacts</span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', padding: '5px 12px', borderRadius: '999px', background: '#7C3AED', color: '#fff', fontSize: '8px', fontWeight: 700 }}>
            + Add step
          </span>
        </div>
      </div>

      {/* Performance stats bar */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '20px', padding: '10px 16px', borderBottom: '1px solid #F0EEF6', background: '#fff' }}>
        {[
          { label: 'Sent', value: '342', color: '#1B1730' },
          { label: 'Opened', value: '58%', color: '#7C3AED' },
          { label: 'Clicked', value: '24%', color: '#3B82F6' },
          { label: 'Replied', value: '12%', color: '#0E9384' },
          { label: 'Bounced', value: '1.2%', color: '#E11D48' },
        ].map((stat) => (
          <div key={stat.label} style={{ display: 'flex', alignItems: 'baseline', gap: '4px' }}>
            <span style={{ fontSize: '11px', fontWeight: 800, color: stat.color }}>{stat.value}</span>
            <span style={{ fontSize: '7px', fontWeight: 500, color: '#8B85A0' }}>{stat.label}</span>
          </div>
        ))}
      </div>

      {/* Main content */}
      <div style={{ display: 'flex', minHeight: '280px' }}>
        {/* Left: sequence steps */}
        <div style={{ width: '160px', flexShrink: 0, borderRight: '1px solid #F0EEF6', padding: '14px 10px' }}>
          <div style={{ fontSize: '7px', fontWeight: 800, letterSpacing: '.06em', color: '#A79FBE', textTransform: 'uppercase' as const, marginBottom: '10px' }}>Sequence Steps</div>
          <div style={{ display: 'flex', flexDirection: 'column' as const, gap: '6px', position: 'relative' as const }}>
            {/* Connecting line */}
            <div style={{ position: 'absolute' as const, left: '9px', top: '14px', bottom: '14px', width: '1.5px', background: '#EEEAF8', zIndex: 0 }} />

            {[
              { n: 1, label: 'Initial outreach', delay: 'Day 0', status: 'sent', color: '#0E9384', active: false },
              { n: 2, label: 'Follow-up', delay: '+3 days', status: 'sent', color: '#0E9384', active: false },
              { n: 3, label: 'Value prop email', delay: '+5 days', status: 'sending', color: '#D97706', active: true },
              { n: 4, label: 'Case study', delay: '+8 days', status: 'scheduled', color: '#3B82F6', active: false },
              { n: 5, label: 'Final nudge', delay: '+12 days', status: 'draft', color: '#8B85A0', active: false },
            ].map((step) => (
              <div key={step.n} style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '6px 8px', borderRadius: '8px', background: step.active ? '#F3EFFF' : 'transparent', border: step.active ? '1px solid #E6DEFA' : '1px solid transparent', position: 'relative' as const, zIndex: 1 }}>
                <span style={{ width: '18px', height: '18px', borderRadius: '50%', background: step.color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '7px', fontWeight: 800, color: '#fff', flexShrink: 0 }}>{step.n}</span>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: '7.5px', fontWeight: 700, color: step.active ? '#7C3AED' : '#1B1730', whiteSpace: 'nowrap' as const, overflow: 'hidden', textOverflow: 'ellipsis' }}>{step.label}</div>
                  <div style={{ fontSize: '6px', color: '#8B85A0' }}>{step.delay}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: email preview for active step */}
        <div style={{ flex: 1, padding: '14px 18px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
            <span style={{ fontSize: '9px', fontWeight: 700, color: '#1B1730' }}>Step 3 · Value prop email</span>
            <span style={{ padding: '3px 8px', borderRadius: '999px', background: '#FEF6E7', border: '1px solid #FBEBC6', fontSize: '7px', fontWeight: 700, color: '#D97706' }}>Sending now</span>
          </div>

          {/* Email preview card */}
          <div style={{ borderRadius: '12px', border: '1px solid #F0EEF6', overflow: 'hidden' }}>
            {/* Email header */}
            <div style={{ padding: '10px 14px', background: '#FBFAFE', borderBottom: '1px solid #F0EEF6' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '4px' }}>
                <span style={{ fontSize: '7px', fontWeight: 600, color: '#8B85A0', width: '28px' }}>To:</span>
                <span style={{ fontSize: '7.5px', fontWeight: 600, color: '#1B1730' }}>{'{{first_name}}'} {'{{last_name}}'}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span style={{ fontSize: '7px', fontWeight: 600, color: '#8B85A0', width: '28px' }}>Subj:</span>
                <span style={{ fontSize: '7.5px', fontWeight: 600, color: '#1B1730' }}>How {'{{company}}'} teams save 6 hours/week</span>
              </div>
            </div>

            {/* Email body */}
            <div style={{ padding: '14px 14px' }}>
              <p style={{ fontSize: '8px', lineHeight: 1.7, color: '#5B5670', margin: '0 0 8px' }}>
                Hi {'{{first_name}}'},
              </p>
              <p style={{ fontSize: '8px', lineHeight: 1.7, color: '#5B5670', margin: '0 0 8px' }}>
                I noticed {'{{company}}'} is scaling the sales team - wanted to share how similar teams are cutting 6 hours of admin per rep, per week.
              </p>
              <p style={{ fontSize: '8px', lineHeight: 1.7, color: '#5B5670', margin: '0 0 8px' }}>
                We consolidated their CRM, outreach, and follow-ups into one flow. No tab-switching, no manual logging.
              </p>
              <p style={{ fontSize: '8px', lineHeight: 1.7, color: '#5B5670', margin: '0 0 8px' }}>
                Worth a 15-min look? Happy to show you the exact setup.
              </p>
              <p style={{ fontSize: '8px', lineHeight: 1.7, color: '#5B5670', margin: 0 }}>
                Best,<br />Jacob
              </p>
            </div>
          </div>

          {/* Merge tags */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginTop: '10px' }}>
            <span style={{ fontSize: '6.5px', fontWeight: 700, color: '#A79FBE' }}>MERGE TAGS:</span>
            {['first_name', 'company', 'role'].map((tag) => (
              <span key={tag} style={{ padding: '2px 6px', borderRadius: '4px', background: '#F3EFFF', border: '1px solid #E6DEFA', fontSize: '6.5px', fontWeight: 600, color: '#7C3AED' }}>{`{{${tag}}}`}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
