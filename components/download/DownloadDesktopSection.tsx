import { RevealSection } from '@/components/reveal/RevealSection';

type DesktopPlatform = 'windows' | 'macos' | 'web';

const PLATFORM_ICON_SRC: Record<DesktopPlatform, string> = {
  windows: '/assets/icons/download/windows.svg',
  macos: '/assets/icons/download/macos.svg',
  web: '/assets/icons/download/web.svg',
};

export interface DesktopCard {
  key: string;
  title: string;
  desc: string;
  platform: DesktopPlatform;
  cta: { label: string; href: string };
}

interface DownloadDesktopSectionProps {
  /** Defaults to "Desktop app" — pass "Web app" for a product (e.g.
   * Kalender) that has no native desktop installer, so the eyebrow doesn't
   * promise a Desktop app the single card below isn't offering. */
  eyebrow?: string;
  heading: string;
  subtext: string;
  /** One card renders a single centered-ish card (e.g. a "Web app" login
   * card); two or more render a side-by-side grid (e.g. Windows + macOS) —
   * the same section works for either direction a product's Desktop app
   * story actually takes. */
  cards: DesktopCard[];
}

/** Generic "Desktop app" / "Web app" section — parameterized so every
 * future product's Download page reuses this layout regardless of whether
 * that product ships native desktop installers or only a web client. */
export function DownloadDesktopSection({ eyebrow = 'Desktop app', heading, subtext, cards }: DownloadDesktopSectionProps) {
  return (
    <section className="bg-[#F7F7F7]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-20">
        <RevealSection>
          <div data-reveal data-reveal-group="download-desktop">
            <p className="download-section-eyebrow">{eyebrow}</p>
            <h2 className="download-section-heading mb-3">{heading}</h2>
            <p className="download-section-subtext download-desktop-subtext">{subtext}</p>

            <div className={`download-desktop-grid${cards.length === 1 ? ' download-desktop-grid--single' : cards.length === 2 ? ' download-desktop-grid--two' : ''}`}>
              {cards.map((card) => (
                <div className="download-desktop-card" key={card.key}>
                  <span className="download-desktop-card-icon">
                    <img src={PLATFORM_ICON_SRC[card.platform]} alt="" aria-hidden="true" />
                  </span>
                  <h3 className="download-desktop-card-title">{card.title}</h3>
                  <p className="download-desktop-card-desc">{card.desc}</p>
                  <a href={card.cta.href} className="btn-primary inline-flex items-center justify-center rounded-full px-6 py-3 min-h-[44px] text-sm">
                    {card.cta.label}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </RevealSection>
      </div>
    </section>
  );
}
