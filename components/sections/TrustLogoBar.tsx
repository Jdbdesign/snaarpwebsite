import type { ReactNode } from 'react';
import { RevealSection } from '@/components/reveal/RevealSection';

// Same brand logo set already live on the Kalender trust bar
// (components/kalender/KalenderTrustBar.tsx) — kept as a separate literal
// here rather than importing from that file, since Kalender's component
// isn't touched as part of building this shared version out.
const TRUST_LOGOS = [
  { name: 'Allstate', src: '/assets/logos/allstate.png' },
  { name: 'Amcor', src: '/assets/logos/amcor.png' },
  { name: 'Amgen', src: '/assets/logos/amgen.png' },
  { name: 'Arthur J. Gallagher & Co.', src: '/assets/logos/arthur-j-gallagher.png' },
  { name: 'Axon', src: '/assets/logos/axon.png' },
  { name: 'Bio-Rad Laboratories', src: '/assets/logos/bio-rad.png' },
  { name: 'Biogen', src: '/assets/logos/biogen.png' },
  { name: 'Campbell Soup Company', src: '/assets/logos/campbell-soup.png' },
  { name: 'Centene', src: '/assets/logos/centene.png' },
];

// One lap of the marquee. Rendered twice back-to-back (the second copy
// hidden from assistive tech) so the CSS animation can loop seamlessly.
function LogoGroup({ hidden }: { hidden?: boolean }) {
  return (
    <div className="sec-logo-strip-track-group" aria-hidden={hidden || undefined}>
      {TRUST_LOGOS.map((logo, i) => (
        <img
          key={`${logo.name}-${i}`}
          src={logo.src}
          alt={hidden ? '' : logo.name}
          className="trust-logo-bar-logo"
        />
      ))}
    </div>
  );
}

interface TrustLogoBarProps {
  /** Trust line copy, e.g. <>Trusted by more than <strong>100,000</strong> teams in the world</> */
  line: ReactNode;
  /** Unique data-reveal-group name so this section's reveal sequencing doesn't collide with another mounted on the same page. */
  revealGroup: string;
}

// Reusable scrolling brand-logo marquee + trust line, extracted so any
// product page can drop in the same continuous-scroll trust bar without
// re-implementing the marquee mechanics.
export function TrustLogoBar({ line, revealGroup }: TrustLogoBarProps) {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-20">
      <RevealSection>
        <p className="trust-logo-bar-line" data-reveal data-reveal-group={revealGroup}>
          {line}
        </p>
        <div className="sec-logo-strip-track-wrap" data-reveal data-reveal-group={revealGroup}>
          <div className="sec-logo-strip-track trust-logo-bar-track">
            <LogoGroup />
            <LogoGroup hidden />
          </div>
        </div>
      </RevealSection>
    </section>
  );
}
