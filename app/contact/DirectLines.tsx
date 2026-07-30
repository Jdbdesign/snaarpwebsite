import { RevealSection } from '@/components/reveal/RevealSection';

const ROUTES = [
  {
    icon: 'cart', iconBg: 'var(--color-brand-subtle)', iconBorder: '#E6DEFA', iconColor: 'var(--color-brand)',
    title: 'Sales & pricing',
    desc: 'Plan comparisons, volume pricing, procurement paperwork, security questionnaires.',
    email: 'sales@snaarp.com', sla: 'Same working day',
  },
  {
    icon: 'question', iconBg: 'var(--color-mint-subtle)', iconBorder: '#CDF5EE', iconColor: 'var(--color-mint)',
    title: 'Customer support',
    desc: 'Something broken, a migration you\u2019re stuck on, or a question about your account.',
    email: 'support@snaarp.com', sla: 'Within 4 working hours',
  },
  {
    icon: 'link', iconBg: 'var(--color-amber-subtle)', iconBorder: '#FBEBC6', iconColor: '#B45309',
    title: 'Partnerships',
    desc: 'Integrations, reseller and agency programmes, joint go-to-market, API access.',
    email: 'partners@snaarp.com', sla: 'Within 3 working days',
  },
  {
    icon: 'megaphone', iconBg: '#FFEFF2', iconBorder: '#F7D3DD', iconColor: '#E11D74',
    title: 'Press & media',
    desc: 'Interviews, brand assets, funding and product announcements, fact-checks.',
    email: 'press@snaarp.com', sla: 'Within 1 working day',
  },
];

export function DirectLines() {
  return (
    <section className="contact-section">
      <RevealSection className="max-w-7xl mx-auto px-6 lg:px-10">
        <div data-reveal>
          <p className="contact-eyebrow">Direct lines</p>
          <h2 className="contact-section-heading">Know who you need? Skip the queue.</h2>
          <p className="contact-section-sub">Each of these goes to a named team, not a shared catch-all inbox.</p>
        </div>

        <div className="contact-routes-grid" data-reveal>
          {ROUTES.map((r) => (
            <div key={r.title} className="contact-route-card">
              <div className="contact-route-icon" style={{ background: r.iconBg, borderColor: r.iconBorder }}>
                <RouteIcon kind={r.icon} color={r.iconColor} />
              </div>
              <h3 className="contact-route-title">{r.title}</h3>
              <p className="contact-route-desc">{r.desc}</p>
              <a href={`mailto:${r.email}`} className="contact-route-email">{r.email}</a>
              <p className="contact-route-sla">{r.sla}</p>
            </div>
          ))}
        </div>

        {/* Secondary routes strip */}
        <div className="contact-secondary-strip" data-reveal>
          <div className="contact-secondary-item">
            <p className="contact-secondary-label">Data protection</p>
            <p className="contact-secondary-value">Access requests, DPAs, sub-processors — <a href="mailto:dpo@snaarp.com">dpo@snaarp.com</a></p>
          </div>
          <div className="contact-secondary-item">
            <p className="contact-secondary-label">Security disclosure</p>
            <p className="contact-secondary-value">Found a vulnerability? <a href="mailto:security@snaarp.com">security@snaarp.com</a> — acknowledged in 24h</p>
          </div>
          <div className="contact-secondary-item">
            <p className="contact-secondary-label">Billing</p>
            <p className="contact-secondary-value">Invoices, VAT and refunds — <a href="mailto:billing@snaarp.com">billing@snaarp.com</a></p>
          </div>
        </div>
      </RevealSection>
    </section>
  );
}

function RouteIcon({ kind, color }: { kind: string; color: string }) {
  const props = { width: 19, height: 19, viewBox: '0 0 24 24', fill: 'none', stroke: color, strokeWidth: 2.2, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const };
  switch (kind) {
    case 'cart': return <svg {...props}><path d="M3 3h3l2 12h11" /><circle cx="10" cy="19" r="1.6" /><circle cx="17.5" cy="19" r="1.6" /><path d="M7 7h13l-1.6 6H8" /></svg>;
    case 'question': return <svg {...props}><circle cx="12" cy="12" r="9" /><path d="M9.6 9.4a2.5 2.5 0 1 1 3.6 2.3c-.7.4-1.2 1-1.2 1.8" /><circle cx="12" cy="17.2" r=".9" fill={color} stroke="none" /></svg>;
    case 'link': return <svg {...props}><path d="M10.5 13.5a4 4 0 0 0 5.7 0l2.6-2.6a4 4 0 0 0-5.7-5.7l-1 1" /><path d="M13.5 10.5a4 4 0 0 0-5.7 0l-2.6 2.6a4 4 0 0 0 5.7 5.7l1-1" /></svg>;
    case 'megaphone': return <svg {...props}><path d="M4 8h9l6-3v14l-6-3H4z" /><path d="M7 16v4" /></svg>;
    default: return null;
  }
}
