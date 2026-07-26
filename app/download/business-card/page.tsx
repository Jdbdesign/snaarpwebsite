import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { DownloadHero } from '@/components/download/DownloadHero';
import { DownloadPhoneFrame } from '@/components/download/DownloadPhoneFrame';
import { BusinessCardPhoneScreen } from '@/components/download/business-card/BusinessCardPhoneScreen';
import { BusinessCardWebMockup } from '@/components/download/business-card/BusinessCardWebMockup';
import { DownloadMobileAppsSection } from '@/components/download/DownloadMobileAppsSection';
import { DownloadDesktopSection } from '@/components/download/DownloadDesktopSection';
import { StepsSection } from '@/components/sections/StepsSection';
import { DownloadFinalCTA } from '@/components/download/DownloadFinalCTA';

// Mirrors the "Build your card / Share it / Track engagement" flow from the
// Business Card product page (BusinessCardSteps) - reworded for the Download
// page numbered-step format.
const BUSINESS_CARD_DOWNLOAD_STEPS = [
  {
    title: "Build Your Card",
    desc: "Add your name, title, company, and contact details - your digital card is live in under a minute.",
  },
  {
    title: "Share It Anywhere",
    desc: "Send your card by link, QR code, or NFC tap - whoever receives it gets your details saved instantly.",
  },
  {
    title: "Track Who Viewed It",
    desc: "See how many times your card has been viewed, saved, and shared - all from one dashboard.",
  },
];

export const metadata: Metadata = {
  title: "Download Business Card - iOS, Android, Web & Desktop | Snaarp",
  description:
    'Your digital business card that updates the instant you do - share by link, QR, or NFC, and track every view. Available on iOS, Android, Web, Windows, and macOS.',
};

export default function BusinessCardDownloadPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <DownloadHero
          headlineLines={[
            { text: 'Your Card Updates' },
            { text: 'The Instant' },
            { text: 'You Do.', accent: true },
          ]}
          subtext="Share a digital business card by link, QR, or NFC - it auto-saves to their Contacts, tracks every view, and never goes out of date. Change your info once, and every card youe ever shared reflects it."
          primaryCta={{ label: 'Download for android/iOS', href: '#' }}
          secondaryCta={{ label: 'Get started on web', href: '/products/business-card' }}
          webMockup={<BusinessCardWebMockup />}
          phoneMockup={
            <DownloadPhoneFrame size="lg">
              <BusinessCardPhoneScreen />
            </DownloadPhoneFrame>
          }
        />

        <DownloadMobileAppsSection
          heading="Mobile apps"
          subtext="Download the Snaarp Business Card app on iOS or Android."
          cards={[
            {
              key: 'ios',
              title: "iOS app",
              desc: "Share your card with a tap and track views in real time - download Business Card for iPhone and iPad.",
              platform: 'ios',
              badge: { store: 'apple', href: '#' },
              phoneMockup: (
                <DownloadPhoneFrame size="sm">
                  <BusinessCardPhoneScreen />
                </DownloadPhoneFrame>
              ),
            },
            {
              key: 'android',
              title: "Android App",
              desc: "Your digital card, always in your pocket - download Business Card for Android.",
              platform: 'android',
              badge: { store: 'google', href: '#' },
              phoneMockup: (
                <DownloadPhoneFrame size="sm">
                  <BusinessCardPhoneScreen />
                </DownloadPhoneFrame>
              ),
            },
          ]}
        />

        {/* Full Desktop section - Business Card supports all platforms
            (iOS, Android, Windows, macOS, Web), matching Mail/Meet's/Teams'
            full set. Placeholder href="#" for installers that don exist yet. */}
        <DownloadDesktopSection
          heading="Desktop app"
          subtext="Manage your digital card and analytics from the convenience of your desktop."
          cards={[
            {
              key: 'windows',
              title: "Windows",
              desc: "Edit your card, check analytics, and share via link - all from a native Windows app.",
              platform: 'windows',
              cta: { label: 'Download for Windows', href: '#' },
            },
            {
              key: 'macos',
              title: "macOS",
              desc: "Keep your card a click away in the menu bar on Mac.",
              platform: 'macos',
              cta: { label: 'Download for macOS', href: '#' },
            },
            {
              key: 'web',
              title: "Web app",
              desc: "No install needed - sign in at snaarp.com to manage your card, analytics, and share links from any browser.",
              platform: 'web',
              cta: { label: 'Sign in on web', href: '/products/business-card' },
            },
          ]}
        />

        <StepsSection heading="Get started in three simple steps" steps={BUSINESS_CARD_DOWNLOAD_STEPS} />

        {/* COPY FLAG: Business Card product page flags NFC tap-to-share,
            live view/save/share analytics, and auto-save-to-Contacts on scan
            as unconfirmed claims. This CTA section's copy uses "share by
            link or QR" (confirmed) and "track every view" (claimed on product
            page but flagged). Does NOT assert NFC more confidently than the
            product page, does NOT claim auto-save-to-Contacts as guaranteed.
            Review before launch. */}
        <DownloadFinalCTA
          eyebrow="Start Sharing"
          headline="Stop handing out cards that go straight in the bin."
          subtext="Build a digital card in under a minute, share it by link or QR, and see exactly who has viewed it - included in every Snaarp plan."
          primaryCta={{ label: 'Get Started for free', href: '#' }}
          secondaryCta={{ label: 'Download Business Card', href: '#' }}
        />
      </main>
      <Footer />
    </>
  );
}
