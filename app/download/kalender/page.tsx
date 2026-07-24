import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { DownloadHero } from '@/components/download/DownloadHero';
import { DownloadPhoneFrame } from '@/components/download/DownloadPhoneFrame';
import { KalenderPhoneScreen } from '@/components/download/kalender/KalenderPhoneScreen';
import { KalenderWebMockup } from '@/components/download/kalender/KalenderWebMockup';
import { DownloadMobileAppsSection } from '@/components/download/DownloadMobileAppsSection';
import { DownloadDesktopSection } from '@/components/download/DownloadDesktopSection';
import { StepsSection } from '@/components/sections/StepsSection';
import { DownloadFinalCTA } from '@/components/download/DownloadFinalCTA';

// Mirrors the "Connect your calendars" / "Add your availability" / "Share
// your scheduling link" flow already described on the Kalender product page
// (components/kalender/KalenderScheduling.tsx) — reworded for the Download
// page's numbered-step format rather than invented fresh.
const KALENDER_DOWNLOAD_STEPS = [
  {
    title: 'Connect Your Calendars',
    desc: 'Sync Google, Outlook, or Apple Calendar so Kalender always knows what’s already on your schedule.',
  },
  {
    title: 'Set Your Availability',
    desc: 'Choose the days and hours you’re free to meet, plus buffers so back-to-back bookings never sneak in.',
  },
  {
    title: 'Start Booking',
    desc: 'Share your link and let people pick a time that works — no more back-and-forth to land on a slot.',
  },
];

export const metadata: Metadata = {
  title: 'Download Kalender — iOS, Android & Web | Snaarp',
  description:
    'The Kalender app brings shared calendars and booking links to iOS, Android, and the web — so you can stop trading emails just to find a time that works.',
};

export default function KalenderDownloadPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <DownloadHero
          headlineLines={[
            { text: 'Never Send Another' },
            { text: '"What Time Works?"' },
            { text: 'Email Again.', accent: true },
          ]}
          subtext="Share your Kalender link, let people pick a time that works, and stop trading emails just to land on a meeting slot — built for people who live in their calendar."
          primaryCta={{ label: 'Download for android/iOS', href: '#' }}
          secondaryCta={{ label: 'Get started on web', href: '/products/kalender' }}
          webMockup={<KalenderWebMockup />}
          phoneMockup={
            <DownloadPhoneFrame size="lg">
              <KalenderPhoneScreen />
            </DownloadPhoneFrame>
          }
        />

        <DownloadMobileAppsSection
          heading="Mobile apps"
          subtext="Download the Kalender app on iOS or Android."
          cards={[
            {
              key: 'ios',
              title: 'iOS app',
              desc: 'Book and manage meetings on the go — download the Kalender app for iPhone and iPad.',
              platform: 'ios',
              badge: { store: 'apple', href: '#' },
              phoneMockup: (
                <DownloadPhoneFrame size="sm">
                  <KalenderPhoneScreen />
                </DownloadPhoneFrame>
              ),
            },
            {
              key: 'android',
              title: 'Android App',
              desc: 'Keep your schedule in your pocket — download the Kalender app for Android.',
              platform: 'android',
              badge: { store: 'google', href: '#' },
              phoneMockup: (
                <DownloadPhoneFrame size="sm">
                  <KalenderPhoneScreen />
                </DownloadPhoneFrame>
              ),
            },
          ]}
        />

        {/* Kalender has no native Windows/macOS installer — unlike Mail's
            Desktop section, this renders a single "Web app" card instead of
            a Windows/macOS/Web trio, matching what ProductsMegaMenu's
            `platforms: ['ios', 'android', 'web']` for Kalender (and the
            Download nav dropdown's derived platform columns) already
            promise: Mobile + Web only, no Desktop. CTA is a placeholder
            href ("#") pattern for the store links; the web card CTA points
            at the real product page. */}
        <DownloadDesktopSection
          eyebrow="Web app"
          heading="Web app"
          subtext="Get the full Kalender experience from your browser."
          cards={[
            {
              key: 'web',
              title: 'Web app',
              desc: 'No install needed — sign in at snaarp.com to manage your calendar, availability, and booking links straight from your browser.',
              platform: 'web',
              cta: { label: 'Sign in on web', href: '/products/kalender' },
            },
          ]}
        />

        <StepsSection heading="Get started in three simple steps" steps={KALENDER_DOWNLOAD_STEPS} />

        <DownloadFinalCTA
          eyebrow="Start Scheduling"
          headline="Stop trading emails just to find a time that works."
          subtext="Join thousands of teams already using Kalender to book meetings faster and keep every calendar in sync."
          primaryCta={{ label: 'Get Started for free', href: '#' }}
          secondaryCta={{ label: 'Download Kalender', href: '#' }}
        />
      </main>
      <Footer />
    </>
  );
}
