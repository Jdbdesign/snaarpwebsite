import { RevealSection } from '@/components/reveal/RevealSection';
import type { LucideIcon } from 'lucide-react';

export type AppLogoIcon = { kind: 'img'; src: string } | { kind: 'lucide'; Icon: LucideIcon };

export interface AppLogoStripApp {
  name: string;
  icon: AppLogoIcon;
}

interface AppLogoStripProps {
  label: string;
  apps: AppLogoStripApp[];
  className?: string;
}

function AppIcon({ icon }: { icon: AppLogoIcon }) {
  if (icon.kind === 'img') return <img src={icon.src} alt="" aria-hidden="true" />;
  const { Icon } = icon;
  return <Icon size={30} strokeWidth={1.6} aria-hidden="true" />;
}

// One lap of the marquee. Rendered twice back-to-back (the second copy
// hidden from assistive tech) so the CSS animation can loop seamlessly.
function LogoGroup({ apps, hidden }: { apps: AppLogoStripApp[]; hidden?: boolean }) {
  return (
    <div className="sec-logo-strip-track-group" aria-hidden={hidden || undefined}>
      {apps.map((app, i) => (
        <div key={`${app.name}-${i}`} className="sec-logo-strip-tile">
          <span className="sec-logo-strip-icon-tile"><AppIcon icon={app.icon} /></span>
          <span className="sec-logo-strip-tile-label">{app.name}</span>
        </div>
      ))}
    </div>
  );
}

// Generic "works across the stack" logo strip — big icon tiles in a
// continuously auto-scrolling marquee (pauses on hover, static under
// prefers-reduced-motion). Reusable across product pages.
export function AppLogoStrip({ label, apps, className }: AppLogoStripProps) {
  return (
    <section className={`max-w-7xl mx-auto px-6 lg:px-10 ${className ?? ''}`}>
      <RevealSection>
        <p className="sec-logo-strip-label" data-reveal data-reveal-group="logo-strip">
          {label}
        </p>
        <div className="sec-logo-strip-track-wrap" data-reveal data-reveal-group="logo-strip">
          <div className="sec-logo-strip-track">
            <LogoGroup apps={apps} />
            <LogoGroup apps={apps} hidden />
          </div>
        </div>
      </RevealSection>
    </section>
  );
}
