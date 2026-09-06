import { RevealSection } from '@/components/reveal/RevealSection';

const LOGOS = [
  { src: '/assets/trusted-by-forward/abbott-laboratories.svg', alt: 'Abbott Laboratories', height: 22 },
  { src: '/assets/trusted-by-forward/allegion.svg', alt: 'Allegion', height: 22 },
  { src: '/assets/trusted-by-forward/amgen-inc.svg', alt: 'Amgen', height: 20 },
  { src: '/assets/trusted-by-forward/autozone.svg', alt: 'AutoZone', height: 22 },
  { src: '/assets/trusted-by-forward/avery-dennison.svg', alt: 'Avery Dennison', height: 22 },
  { src: '/assets/trusted-by-forward/baxter-international.svg', alt: 'Baxter International', height: 22 },
  { src: '/assets/trusted-by-forward/bio-rad-laboratories.svg', alt: 'Bio-Rad Laboratories', height: 22 },
];

const STAR_PATH = 'M12 2l2.9 6.26 6.9 1.01-5 4.87 1.18 6.86L12 17.77l-6.18 3.23L7 14.14l-5-4.87 6.9-1.01L12 2z';

function TbfStars() {
  return (
    <div className="tbf-stars" role="img" aria-label="Rated 5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d={STAR_PATH} />
        </svg>
      ))}
    </div>
  );
}

export function TrustedByForward() {
  return (
    <section className="tbf-section py-16 lg:py-24">
      <RevealSection className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="tbf-ticks" aria-hidden="true">
          <span className="tbf-tick" />
          <span className="tbf-tick" />
        </div>

        <div className="tbf-grid">
          <div className="tbf-logos-card" data-reveal data-reveal-group="tbf">
            <h3 className="tbf-logos-title">Trusted by forward-thinking businesses worldwide</h3>
            <div className="tbf-logos-grid">
              {LOGOS.map((logo) => (
                <img key={logo.alt} src={logo.src} alt={logo.alt} className="tbf-logo" style={{ height: logo.height }} />
              ))}
            </div>
          </div>

          <div className="tbf-testimonial-card" data-reveal data-reveal-group="tbf">
            <TbfStars />
            <p className="tbf-quote">
              &ldquo;Snaarp replaced 11 different tools we were paying for. Our team is more productive and we&rsquo;re saving over 60% every month.&rdquo;
            </p>
            <div className="tbf-testimonial-footer">
              <div className="tbf-avatar" aria-hidden="true">JC</div>
              <div>
                <p className="tbf-name">Jane Cooper</p>
                <p className="tbf-role">Project Manager</p>
              </div>
            </div>
          </div>
        </div>
      </RevealSection>
    </section>
  );
}
