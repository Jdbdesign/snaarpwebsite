// High-fidelity web app mockup for Neo AI Download page.
// Shows: chat interface with AI conversation, suggested follow-ups,
// and a "connected to" indicator.

export function NeoAiWebMockup() {
  return (
    <div className="ai-compose-web-mockup" aria-hidden="true">
      {/* Browser chrome */}
      <div className="ai-compose-web-mockup-chrome">
        <div className="ai-compose-web-mockup-dots">
          <span /><span /><span />
        </div>
        <div className="ai-compose-web-mockup-url">snaarp.com/neo-ai/chat</div>
      </div>

      {/* Toolbar */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 16px', borderBottom: '1px solid #F0EEF6', background: '#FBFAFE' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span style={{ fontSize: '12px', fontWeight: 800, color: '#1B1730' }}>Neo AI</span>
          <span style={{ padding: '3px 8px', borderRadius: '6px', background: '#F3EFFF', border: '1px solid #E6DEFA', fontSize: '8px', fontWeight: 600, color: '#7C3AED' }}>Cross-stack assistant</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
          <span style={{ fontSize: '6.5px', color: '#8B85A0' }}>Connected to:</span>
          {['Mail', 'CRM', 'Sheets'].map((app) => (
            <span key={app} style={{ padding: '2px 6px', borderRadius: '4px', background: '#ECFDF9', fontSize: '6px', fontWeight: 600, color: '#0E9384' }}>{app}</span>
          ))}
        </div>
      </div>

      {/* Chat area */}
      <div style={{ padding: '14px 16px', minHeight: '300px', display: 'flex', flexDirection: 'column' as const, gap: '12px' }}>
        {/* User message */}
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <div style={{ maxWidth: '70%', padding: '10px 12px', borderRadius: '12px 12px 4px 12px', background: '#7C3AED', color: '#fff' }}>
            <div style={{ fontSize: '8px', fontWeight: 600 }}>What were our top 3 deals last quarter and what is the total pipeline value right now?</div>
          </div>
        </div>

        {/* AI response */}
        <div style={{ display: 'flex', justifyContent: 'flex-start', gap: '6px' }}>
          <div style={{ width: '18px', height: '18px', borderRadius: '50%', background: 'linear-gradient(135deg, #7C3AED, #4C1D95)', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ fontSize: '8px', fontWeight: 800, color: '#fff' }}>N</span>
          </div>
          <div style={{ maxWidth: '75%', padding: '10px 12px', borderRadius: '4px 12px 12px 12px', background: '#F7F6FA', border: '1px solid #F0EEF6' }}>
            <div style={{ fontSize: '7.5px', fontWeight: 700, color: '#1B1730', marginBottom: '6px' }}>Here what I found from CRM:</div>

            {/* Formatted answer */}
            <div style={{ marginBottom: '8px' }}>
              <div style={{ fontSize: '7px', fontWeight: 800, color: '#5B5670', marginBottom: '4px' }}>Top 3 Deals (Q2 2026):</div>
              {[
                { rank: '1', name: 'Wayne Enterprises', value: '£52,000', stage: 'Negotiation' },
                { rank: '2', name: 'Stark Industries', value: '£51,400', stage: 'Proposal' },
                { rank: '3', name: 'Acme Corp', value: '£42,000', stage: 'Closed Won' },
              ].map((deal) => (
                <div key={deal.name} style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '3px 0' }}>
                  <span style={{ fontSize: '7px', fontWeight: 800, color: '#7C3AED', width: '10px' }}>{deal.rank}.</span>
                  <span style={{ fontSize: '7px', fontWeight: 600, color: '#1B1730', flex: 1 }}>{deal.name}</span>
                  <span style={{ fontSize: '7px', fontWeight: 800, color: '#0E9384' }}>{deal.value}</span>
                  <span style={{ fontSize: '5.5px', color: '#8B85A0', padding: '1px 4px', borderRadius: '3px', background: '#F7F6FA' }}>{deal.stage}</span>
                </div>
              ))}
            </div>

            <div style={{ padding: '8px', borderRadius: '6px', background: '#ECFDF9', border: '1px solid #CDF5EE' }}>
              <div style={{ fontSize: '6.5px', fontWeight: 600, color: '#0E9384', marginBottom: '2px' }}>Current Pipeline Total</div>
              <div style={{ fontSize: '11px', fontWeight: 800, color: '#0E9384' }}>£301,200</div>
              <div style={{ fontSize: '5.5px', color: '#0E9384' }}>9 active deals \u2022 34% win rate</div>
            </div>

            <div style={{ fontSize: '6px', color: '#8B85A0', marginTop: '6px', fontStyle: 'italic' }}>Sources: CRM Pipeline, Q2 2026 data</div>
          </div>
        </div>

        {/* Suggested follow-ups */}
        <div style={{ display: 'flex', flexDirection: 'column' as const, gap: '6px', marginTop: '4px' }}>
          <span style={{ fontSize: '6.5px', fontWeight: 700, color: '#8B85A0' }}>Suggested follow-ups:</span>
          <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' as const }}>
            {[
              'Show me the deals at risk of slipping',
              'What emails did we send to Wayne Enterprises?',
              'Create a pipeline summary in Sheets',
            ].map((suggestion) => (
              <span key={suggestion} style={{ padding: '5px 10px', borderRadius: '999px', background: '#F3EFFF', border: '1px solid #E6DEFA', fontSize: '6.5px', fontWeight: 600, color: '#7C3AED' }}>{suggestion}</span>
            ))}
          </div>
        </div>

        {/* Input area */}
        <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', gap: '8px', padding: '10px 12px', borderRadius: '12px', background: '#fff', border: '1px solid #F0EEF6', boxShadow: '0 2px 8px -3px rgba(37,22,84,.06)' }}>
          <span style={{ fontSize: '8px', color: '#A79FBE', flex: 1 }}>Ask Neo anything about your stack...</span>
          <span style={{ width: '22px', height: '22px', borderRadius: '50%', background: '#7C3AED', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" /></svg>
          </span>
        </div>
      </div>
    </div>
  );
}
