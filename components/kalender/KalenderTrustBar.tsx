import { RevealSection } from '@/components/reveal/RevealSection';

const TRUST_LOGOS = [
  { name: 'Abbott Laboratories', src: '/assets/trusted-by-forward/abbott-laboratories.svg' },
  { name: 'Allegion', src: '/assets/trusted-by-forward/allegion.svg' },
  { name: 'Amgen', src: '/assets/trusted-by-forward/amgen-inc.svg' },
  { name: 'AutoZone', src: '/assets/trusted-by-forward/autozone.svg' },
  { name: 'Avery Dennison', src: '/assets/trusted-by-forward/avery-dennison.svg' },
  { name: 'Baxter International', src: '/assets/trusted-by-forward/baxter-international.svg' },
  { name: 'Bio-Rad Laboratories', src: '/assets/trusted-by-forward/bio-rad-laboratories.svg' },
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
          Trusted by ambitious teams around the world
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
