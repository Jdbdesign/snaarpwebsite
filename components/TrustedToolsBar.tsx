import { RevealSection } from '@/components/reveal/RevealSection';

const TOOLS = [
  { src: '/assets/trusted-tools/google.svg', alt: 'Google', height: 22 },
  { src: '/assets/trusted-tools/slack.png', alt: 'Slack', height: 26 },
  { src: '/assets/trusted-tools/dropbox.svg', alt: 'Dropbox', height: 24 },
  { src: '/assets/trusted-tools/microsoft.svg', alt: 'Microsoft', height: 22 },
  { src: '/assets/trusted-tools/zoom.svg', alt: 'Zoom', height: 24 },
  { src: '/assets/trusted-tools/salesforce.svg', alt: 'Salesforce', height: 28 },
  { src: '/assets/trusted-tools/okta.svg', alt: 'Okta', height: 24 },
];

export function TrustedToolsBar() {
  return (
    <section className="trusted-tools-section">
      <RevealSection className="trusted-tools-inner max-w-7xl mx-auto px-6 lg:px-10">
        <p className="trusted-tools-label" data-reveal data-reveal-group="trusted-tools">
          Works with the tools and identity providers you already use
        </p>
        <div className="trusted-tools-row" data-reveal data-reveal-group="trusted-tools">
          {TOOLS.map((tool) => (
            <img
              key={tool.alt}
              src={tool.src}
              alt={tool.alt}
              className="trusted-tools-logo"
              style={{ height: tool.height }}
            />
          ))}
          <span className="trusted-tools-and-more">and more</span>
        </div>
      </RevealSection>
    </section>
  );
}
