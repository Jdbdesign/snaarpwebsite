import { RevealSection } from '@/components/reveal/RevealSection';

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
          className="kalender-trust-logo"
        />
      ))}
    </div>
  );
}

export function KalenderTrustBar() {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-20">
      <RevealSection>
        <p className="kalender-trust-line" data-reveal data-reveal-group="kalender-trust">
          Trusted by more than <strong>100,000</strong>{' '}of the world&rsquo;s leading organizations
        </p>
        <div className="sec-logo-strip-track-wrap" data-reveal data-reveal-group="kalender-trust">
          <div className="sec-logo-strip-track kalender-trust-track">
            <LogoGroup />
            <LogoGroup hidden />
          </div>
        </div>
      </RevealSection>
    </section>
  );
}
