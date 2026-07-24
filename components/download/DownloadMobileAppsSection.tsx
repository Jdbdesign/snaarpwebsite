import type { ReactNode } from 'react';
import { RevealSection } from '@/components/reveal/RevealSection';
import { StoreBadge } from '@/components/download/StoreBadge';

type MobilePlatform = 'ios' | 'android';

const PLATFORM_ICON_SRC: Record<MobilePlatform, string> = {
  ios: '/assets/icons/download/ios.svg',
  android: '/assets/icons/download/android.svg',
};

export interface MobileAppCard {
  key: string;
  title: string;
  desc: string;
  platform: MobilePlatform;
  badge: { store: 'apple' | 'google'; href: string };
  phoneMockup: ReactNode;
}

interface DownloadMobileAppsSectionProps {
  heading: string;
  subtext: string;
  cards: MobileAppCard[];
}

/** Generic "Mobile apps" section — parameterized by heading/subtext/cards
 * so every future product's Download page reuses this layout, swapping
 * only the two platform cards' copy, platform, badge, and phone mockup. */
export function DownloadMobileAppsSection({ heading, subtext, cards }: DownloadMobileAppsSectionProps) {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-20">
      <RevealSection>
        <div data-reveal data-reveal-group="download-mobile">
          <p className="download-section-eyebrow">Mobile apps</p>
          <h2 className="download-section-heading mb-3">{heading}</h2>
          <p className="download-section-subtext download-mobile-subtext">{subtext}</p>

          <div className="download-mobile-grid">
            {cards.map((card) => (
              <div className="download-mobile-card" key={card.key}>
                <div className="download-mobile-card-visual">
                  {card.phoneMockup}
                  <span className="download-mobile-card-platform-badge" aria-hidden="true">
                    <img src={PLATFORM_ICON_SRC[card.platform]} alt="" />
                  </span>
                </div>
                <div className="download-mobile-card-body">
                  <span className="download-mobile-card-icon">
                    <img src={PLATFORM_ICON_SRC[card.platform]} alt="" aria-hidden="true" />
                  </span>
                  <h3 className="download-mobile-card-title">{card.title}</h3>
                  <p className="download-mobile-card-desc">{card.desc}</p>
                  <StoreBadge store={card.badge.store} href={card.badge.href} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </RevealSection>
    </section>
  );
}
