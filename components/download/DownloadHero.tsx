'use client';

import { useRef, type ReactNode } from 'react';
import { useLoadReveal } from '@/hooks/useScrollReveal';

interface HeroCta {
  label: string;
  href: string;
}

interface DownloadHeroProps {
  eyebrow?: string;
  /** Each entry renders as its own line — mirrors the block-span pattern
   * MailHero uses for its own heading, so a hard color break can land on
   * an exact line rather than wherever the browser happens to wrap text. */
  headlineLines: { text: string; accent?: boolean }[];
  subtext: string;
  primaryCta: HeroCta;
  secondaryCta: HeroCta;
  /** The high-fidelity web-app mockup, rendered behind/below the phone. */
  webMockup: ReactNode;
  /** The high-fidelity phone mockup, layered in front of and overlapping
   * the web mockup — pass a <DownloadPhoneFrame> with product-specific
   * screen content as children. */
  phoneMockup: ReactNode;
}

/** Generic Download-page hero shell — parameterized so every future
 * product's Download page (CRM, Kalender, etc.) reuses this exact
 * two-column layout and layered-mockup composition, swapping only copy
 * and the two mockup nodes. */
export function DownloadHero({ eyebrow, headlineLines, subtext, primaryCta, secondaryCta, webMockup, phoneMockup }: DownloadHeroProps) {
  const heroRef = useRef<HTMLDivElement>(null);
  useLoadReveal(heroRef);

  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-24">
      <div ref={heroRef} className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-10 items-center">
        <div>
          {eyebrow && (
            <div className="badge-pill inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs uppercase mb-6" data-reveal-load>
              {eyebrow}
            </div>
          )}

          <h1 className="download-hero-heading mb-6" data-reveal-load>
            {headlineLines.map((line, i) => (
              <span key={i} className={`block${line.accent ? ' text-[var(--color-brand)]' : ' text-[var(--text-primary)]'}`}>
                {line.text}
              </span>
            ))}
          </h1>

          <p className="text-[var(--text-secondary)] font-normal leading-relaxed mb-8 max-w-[52ch]" style={{ fontSize: '1.125rem' }} data-reveal-load>
            {subtext}
          </p>

          <div className="flex flex-wrap items-center gap-4" data-reveal-load>
            <a href={primaryCta.href} className="btn-dark inline-flex items-center justify-center rounded-full px-6 py-3.5 min-h-[44px]">
              {primaryCta.label}
            </a>
            <a href={secondaryCta.href} className="btn-outline inline-flex items-center justify-center rounded-full px-6 py-3.5 min-h-[44px] text-[var(--color-brand)]">
              {secondaryCta.label}
            </a>
          </div>
        </div>

        <div className="download-hero-visual" data-reveal-load>
          <div className="download-hero-visual-web">{webMockup}</div>
          <div className="download-hero-visual-phone">{phoneMockup}</div>
        </div>
      </div>
    </section>
  );
}
