import { SolutionRevealSection } from './SolutionRevealSection';

interface SolutionTrustStripProps {
  label: string;
  logos: string[];
}

// Real brand marks, reused from the same assets TrustedToolsBar uses
// (components/TrustedToolsBar.tsx) — falls back to a text chip for any
// name without a shipped logo.
const LOGO_ASSETS: Record<string, { src: string; height: number }> = {
  Google: { src: '/assets/trusted-tools/google.svg', height: 20 },
  Slack: { src: '/assets/trusted-tools/slack.png', height: 24 },
  Dropbox: { src: '/assets/trusted-tools/dropbox.svg', height: 22 },
  Microsoft: { src: '/assets/trusted-tools/microsoft.svg', height: 20 },
  Zoom: { src: '/assets/trusted-tools/zoom.svg', height: 22 },
  Salesforce: { src: '/assets/trusted-tools/salesforce.svg', height: 26 },
  Okta: { src: '/assets/trusted-tools/okta.svg', height: 22 },
};

// Trust-strip logo marquee. Logos are duplicated once so the CSS animation
// (translateX 0 -> -50%) loops seamlessly.
export function SolutionTrustStrip({ label, logos }: SolutionTrustStripProps) {
  const marqueeLogos = [...logos, ...logos];

  return (
    <section style={{ background: '#fff', padding: '46px 0 44px', borderTop: '1px solid #F2F1F6', borderBottom: '1px solid #F2F1F6', overflow: 'hidden' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <SolutionRevealSection reveal style={{ textAlign: 'center' }}>
          <span style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '.1em', color: '#A39EB4', textTransform: 'uppercase' }}>{label}</span>
        </SolutionRevealSection>
        <SolutionRevealSection
          reveal
          revealDelay={120}
          style={{
            position: 'relative',
            marginTop: '30px',
            WebkitMaskImage: 'linear-gradient(90deg,transparent,#000 12%,#000 88%,transparent)',
            maskImage: 'linear-gradient(90deg,transparent,#000 12%,#000 88%,transparent)',
          }}
        >
          <div style={{ display: 'flex', width: 'max-content', gap: '64px', alignItems: 'center', animation: 'solution-marquee 26s linear infinite' }}>
            {marqueeLogos.map((logo, i) => {
              const asset = LOGO_ASSETS[logo];
              return asset ? (
                <img key={`${logo}-${i}`} src={asset.src} alt={logo} style={{ height: asset.height, width: 'auto', flexShrink: 0 }} />
              ) : (
                <span key={`${logo}-${i}`} style={{ fontSize: '22px', fontWeight: 600, letterSpacing: '-.01em', color: '#B4AEC6', whiteSpace: 'nowrap', display: 'inline-flex', alignItems: 'center', gap: '9px' }}>
                  <span style={{ width: '9px', height: '9px', borderRadius: '3px', background: '#DAD4E6' }} />
                  {logo}
                </span>
              );
            })}
          </div>
        </SolutionRevealSection>
      </div>
    </section>
  );
}
