import { RevealSection } from '@/components/reveal/RevealSection';

const INTEGRATION_ICONS: { src: string; name: string }[] = [
  { src: '/assets/icons/integration-zoom.png', name: 'Zoom' },
  { src: '/assets/icons/integration-salesforce.png', name: 'Salesforce' },
  { src: '/assets/icons/integration-google-calendar.png', name: 'Google Calendar' },
  { src: '/assets/icons/integration-slack.png', name: 'Slack' },
  { src: '/assets/icons/integration-microsoft-teams.png', name: 'Microsoft Teams' },
  { src: '/assets/icons/integration-gmail.png', name: 'Gmail' },
  { src: '/assets/icons/integration-outlook.png', name: 'Outlook' },
  { src: '/assets/icons/integration-chrome.png', name: 'Chrome' },
  { src: '/assets/icons/integration-webex.png', name: 'Webex' },
  { src: '/assets/icons/integration-hubspot.png', name: 'HubSpot' },
  { src: '/assets/icons/integration-icon-10.png', name: 'Integration partner' },
  { src: '/assets/icons/integration-icon-11.png', name: 'Integration partner' },
  { src: '/assets/icons/integration-linkedin.png', name: 'LinkedIn' },
  { src: '/assets/icons/integration-skype.png', name: 'Skype' },
  { src: '/assets/icons/integration-icon-14.png', name: 'Integration partner' },
  { src: '/assets/icons/integration-intercom.png', name: 'Intercom' },
  { src: '/assets/icons/integration-icon-16.png', name: 'Integration partner' },
  { src: '/assets/icons/integration-paypal.png', name: 'PayPal' },
];

const INTEGRATIONS_ROW_1 = INTEGRATION_ICONS.slice(0, 9);
const INTEGRATIONS_ROW_2 = INTEGRATION_ICONS.slice(9);

// One lap of a marquee row. Rendered twice back-to-back (the second copy
// hidden from assistive tech) so the CSS animation can loop seamlessly.
function IntegrationsIconGroup({ icons, hidden }: { icons: { src: string; name: string }[]; hidden?: boolean }) {
  return (
    <div className="kalender-integrations-group" aria-hidden={hidden || undefined}>
      {icons.map((icon, i) => (
        <img
          key={`${icon.name}-${i}`}
          src={icon.src}
          alt={hidden ? '' : icon.name}
          className="kalender-integrations-icon"
        />
      ))}
    </div>
  );
}

function IntegrationsMarqueeRow({ icons, reverse }: { icons: { src: string; name: string }[]; reverse?: boolean }) {
  return (
    <div className="kalender-integrations-marquee-wrap">
      <div className={`kalender-integrations-track${reverse ? ' kalender-integrations-track--reverse' : ''}`}>
        <IntegrationsIconGroup icons={icons} />
        <IntegrationsIconGroup icons={icons} hidden />
      </div>
    </div>
  );
}

interface IntegrationSuite {
  icon: string;
  name: string;
  desc: string;
}

const INTEGRATION_SUITES: IntegrationSuite[] = [
  {
    icon: '/assets/icons/integration-google-suite.png',
    name: 'Google Calendar',
    desc: 'Stay synced with Google Calendar, Meet, and Drive — no manual updates, ever.',
  },
  {
    icon: '/assets/icons/integration-microsoft-suite.png',
    name: 'Microsoft 365',
    desc: 'Built for enterprise — connects cleanly with Outlook, Teams, and Azure SSO.',
  },
];

export function KalenderIntegrations() {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-24">
      <RevealSection>
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-12 lg:mb-16">
          <h2 className="kalender-master-heading" data-reveal data-reveal-group="kalender-integrations">
            <span className="block">Bring Kalender into</span>
            <span className="block text-[var(--color-brand)]">your workflow.</span>
          </h2>
          <div className="kalender-integrations-label-col" data-reveal data-reveal-group="kalender-integrations">
            <p className="kalender-integrations-label">Power up your scheduling.</p>
            <a href="#" className="kalender-integrations-viewall">
              View all integrations <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>

        <div
          className="kalender-integrations-marquees"
          data-reveal
          data-reveal-group="kalender-integrations"
        >
          <IntegrationsMarqueeRow icons={INTEGRATIONS_ROW_1} />
          <IntegrationsMarqueeRow icons={INTEGRATIONS_ROW_2} reverse />
        </div>

        <div className="kalender-integrations-suites">
          {INTEGRATION_SUITES.map((suite) => (
            <a
              key={suite.name}
              href="#"
              className="kalender-integrations-suite-card"
              data-reveal
              data-reveal-group="kalender-integrations"
              data-reveal-batch="kalender-integrations-suites"
            >
              <span className="kalender-integrations-suite-arrow" aria-hidden="true">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 17L17 7M7 7h10v10" />
                </svg>
              </span>
              <img src={suite.icon} alt="" aria-hidden="true" className="kalender-integrations-suite-icon" />
              <p className="kalender-integrations-suite-name">{suite.name}</p>
              <p className="kalender-integrations-suite-desc">{suite.desc}</p>
            </a>
          ))}
        </div>
      </RevealSection>
    </section>
  );
}
