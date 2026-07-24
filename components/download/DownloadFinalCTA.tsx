import { RevealSection } from '@/components/reveal/RevealSection';

interface FinalCta {
  label: string;
  href: string;
}

interface DownloadFinalCTAProps {
  eyebrow: string;
  headline: string;
  subtext: string;
  primaryCta: FinalCta;
  secondaryCta: FinalCta;
}

/** Generic dark full-bleed closing CTA for Download pages — parameterized
 * so future product Download pages reuse this section with their own
 * eyebrow/headline/subtext/CTAs. Reuses the site's existing
 * .home-final-cta-* dark-section styling for visual consistency with the
 * rest of the site, adding only the second (outline) button variant. */
export function DownloadFinalCTA({ eyebrow, headline, subtext, primaryCta, secondaryCta }: DownloadFinalCTAProps) {
  return (
    <section className="home-final-cta-section">
      <RevealSection className="max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-24 home-final-cta-inner">
        <p className="home-final-cta-eyebrow" data-reveal data-reveal-group="download-final-cta">{eyebrow}</p>
        <h2 className="home-final-cta-heading" data-reveal data-reveal-group="download-final-cta">
          {headline}
        </h2>
        <p className="home-final-cta-copy" data-reveal data-reveal-group="download-final-cta">
          {subtext}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4" data-reveal data-reveal-group="download-final-cta">
          <a href={primaryCta.href} className="home-final-cta-btn">{primaryCta.label}</a>
          <a href={secondaryCta.href} className="download-final-cta-btn-outline">{secondaryCta.label}</a>
        </div>
      </RevealSection>
    </section>
  );
}
