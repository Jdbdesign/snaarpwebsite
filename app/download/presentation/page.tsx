import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { DownloadHero } from '@/components/download/DownloadHero';
import { DownloadPhoneFrame } from '@/components/download/DownloadPhoneFrame';
import { PresentationPhoneScreen } from '@/components/download/presentation/PresentationPhoneScreen';
import { PresentationWebMockup } from '@/components/download/presentation/PresentationWebMockup';
import { DownloadMobileAppsSection } from '@/components/download/DownloadMobileAppsSection';
import { DownloadDesktopSection } from '@/components/download/DownloadDesktopSection';
import { StepsSection } from '@/components/sections/StepsSection';
import { DownloadFinalCTA } from '@/components/download/DownloadFinalCTA';

// Mirrors the "Start from a template / Build together / Present" flow from
// the Presentation product page - reworded for the Download page
// numbered-step format.
const PRESENTATION_DOWNLOAD_STEPS = [
  {
    title: "Pick a Template or Start Blank",
    desc: "Choose a ready-made layout or start from scratch - either way, you are presenting in minutes, not hours.",
  },
  {
    title: "Build It Together, Live",
    desc: "Invite your team by link and watch slides come together in real time - cursors, comments, and changes, all visible.",
  },
  {
    title: "Present from Anywhere",
    desc: "Hit Present and run the deck from your browser, phone, or desktop app - no exporting to another tool first.",
  },
];

export const metadata: Metadata = {
  title: "Download Presentation - iOS, Android, Web & Desktop | Snaarp",
  description:
    'Slides, templates, and real-time collaboration - all in the Stack. Build the deck together, live, and present from any device.',
};

export default function PresentationDownloadPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <DownloadHero
          headlineLines={[
            { text: 'Build the Deck.' },
            { text: 'Together,' },
            { text: 'Live.', accent: true },
          ]}
          subtext="Slides, templates, and real-time collaboration - all in the Stack. Start from a blank canvas or a ready-made template, and watch your team build it out with you, live. Present from any device."
          primaryCta={{ label: 'Download for android/iOS', href: '#' }}
          secondaryCta={{ label: 'Get started on web', href: '/products/presentation' }}
          webMockup={<PresentationWebMockup />}
          phoneMockup={
            <DownloadPhoneFrame size="lg">
              <PresentationPhoneScreen />
            </DownloadPhoneFrame>
          }
        />

        <DownloadMobileAppsSection
          heading="Mobile apps"
          subtext="Download the Snaarp Presentation app on iOS or Android."
          cards={[
            {
              key: 'ios',
              title: "iOS app",
              desc: "Review slides and present on the go - download Presentation for iPhone and iPad.",
              platform: 'ios',
              badge: { store: 'apple', href: '#' },
              phoneMockup: (
                <DownloadPhoneFrame size="sm">
                  <PresentationPhoneScreen />
                </DownloadPhoneFrame>
              ),
            },
            {
              key: 'android',
              title: "Android App",
              desc: "Your deck, always in your pocket - download Presentation for Android.",
              platform: 'android',
              badge: { store: 'google', href: '#' },
              phoneMockup: (
                <DownloadPhoneFrame size="sm">
                  <PresentationPhoneScreen />
                </DownloadPhoneFrame>
              ),
            },
          ]}
        />

        {/* Full Desktop section - Presentation supports all platforms. */}
        <DownloadDesktopSection
          heading="Desktop app"
          subtext="Build and present decks from the convenience of your desktop."
          cards={[
            {
              key: 'windows',
              title: "Windows",
              desc: "A native presentation editor with offline access and full-screen presenting built in.",
              platform: 'windows',
              cta: { label: 'Download for Windows', href: '#' },
            },
            {
              key: 'macos',
              title: "macOS",
              desc: "Build slides and present directly from a dedicated Mac app - no browser needed.",
              platform: 'macos',
              cta: { label: 'Download for macOS', href: '#' },
            },
            {
              key: 'web',
              title: "Web app",
              desc: "No install needed - sign in at snaarp.com to create, collaborate on, and present decks from any browser.",
              platform: 'web',
              cta: { label: 'Sign in on web', href: '/products/presentation' },
            },
          ]}
        />

        <StepsSection heading="Get started in three simple steps" steps={PRESENTATION_DOWNLOAD_STEPS} />

        {/* COPY FLAG: Presentation product page flags the template library
            breadth and offline presenting as unconfirmed. This CTA section
            says "templates and real-time collaboration" (product page does
            claim templates exist) but does NOT assert a specific number of
            templates or guarantee offline presenting. Review before launch. */}
        <DownloadFinalCTA
          eyebrow="Start Presenting"
          headline="Stop emailing slide decks back and forth."
          subtext="Build together in real time, present from any device, and keep every version in one place - included in every Snaarp plan."
          primaryCta={{ label: 'Get Started for free', href: '#' }}
          secondaryCta={{ label: 'Download Presentation', href: '#' }}
        />
      </main>
      <Footer />
    </>
  );
}
