import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { DownloadHero } from '@/components/download/DownloadHero';
import { DownloadPhoneFrame } from '@/components/download/DownloadPhoneFrame';
import { MeetPhoneScreen } from '@/components/download/meet/MeetPhoneScreen';
import { MeetWebMockup } from '@/components/download/meet/MeetWebMockup';
import { DownloadMobileAppsSection } from '@/components/download/DownloadMobileAppsSection';
import { DownloadDesktopSection } from '@/components/download/DownloadDesktopSection';
import { StepsSection } from '@/components/sections/StepsSection';
import { DownloadFinalCTA } from '@/components/download/DownloadFinalCTA';

// Loosely mirrors the "Create your meeting" / "Invite your team" / "Meet with
// clarity" flow on the Meet product page (components/meet/MeetHowItWorks.tsx),
// but step 3 is deliberately reworded here to "Meet, Share, and Record"
// instead of that page's "AI notes"/"summary lands in your inbox" phrasing —
// this Download page should not imply an AI transcription/summary feature,
// per the brief for this page.
const MEET_DOWNLOAD_STEPS = [
  {
    title: 'Start or Schedule a Call',
    desc: 'Open a new room instantly, or grab a shareable link and drop it straight into your calendar for later.',
  },
  {
    title: 'Invite Your Team',
    desc: 'Send the link or invite from your calendar — guests join right from their browser, no account needed.',
  },
  {
    title: 'Meet, Share, and Record',
    desc: 'HD video, screen sharing, and one-click recording — everything you need without ever leaving the call.',
  },
];

export const metadata: Metadata = {
  title: 'Download Snaarp Meet — iOS, Android, Web & Desktop | Snaarp',
  description:
    'The Snaarp Meet app brings HD video calls, screen sharing, and recording to iOS, Android, Windows, and Mac — so your team never misses a meeting.',
};

export default function MeetDownloadPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <DownloadHero
          headlineLines={[
            { text: 'Face-to-Face' },
            { text: 'Calls, Without the' },
            { text: 'Friction', accent: true },
          ]}
          subtext="Snaarp Meet brings HD video calls, screen sharing, and recording to every device your team uses — so meetings actually start on time."
          primaryCta={{ label: 'Download for android/iOS', href: '#' }}
          secondaryCta={{ label: 'Get started on web', href: '/products/meet' }}
          webMockup={<MeetWebMockup />}
          phoneMockup={
            <DownloadPhoneFrame size="lg">
              <MeetPhoneScreen />
            </DownloadPhoneFrame>
          }
        />

        <DownloadMobileAppsSection
          heading="Mobile apps"
          subtext="Download the Snaarp Meet app on iOS or Android."
          cards={[
            {
              key: 'ios',
              title: 'iOS app',
              desc: 'Join HD video calls, share your screen, and never miss a meeting — download Snaarp Meet for iPhone and iPad.',
              platform: 'ios',
              badge: { store: 'apple', href: '#' },
              phoneMockup: (
                <DownloadPhoneFrame size="sm">
                  <MeetPhoneScreen />
                </DownloadPhoneFrame>
              ),
            },
            {
              key: 'android',
              title: 'Android App',
              desc: 'Keep every meeting with you — download Snaarp Meet for Android and join calls in seconds.',
              platform: 'android',
              badge: { store: 'google', href: '#' },
              phoneMockup: (
                <DownloadPhoneFrame size="sm">
                  <MeetPhoneScreen />
                </DownloadPhoneFrame>
              ),
            },
          ]}
        />

        {/* Meet ships a native Windows/macOS installer (ProductsMegaMenu's
            platforms: ['ios', 'android', 'web', 'windows', 'macos'] for
            Meet), same full desktop story as Mail — unlike Kalender/Contacts'
            Mobile+Web-only pages, this renders the full 3-card Windows/macOS/
            Web grid. CTAs are placeholder hrefs ("#") until real installers
            ship, same convention as Mail's Desktop section. */}
        <DownloadDesktopSection
          heading="Desktop app"
          subtext="Get the full Meet experience from the convenience of your desktop."
          cards={[
            {
              key: 'windows',
              title: 'Windows',
              desc: 'Native notifications and one-click joins for every meeting, built for Windows 10 and 11.',
              platform: 'windows',
              cta: { label: 'Download for Windows', href: '#' },
            },
            {
              key: 'macos',
              title: 'macOS',
              desc: 'A dedicated menu-bar app for starting and joining Meet calls without opening a browser tab.',
              platform: 'macos',
              cta: { label: 'Download for macOS', href: '#' },
            },
            {
              key: 'web',
              title: 'Web app',
              desc: 'No install needed — sign in at snaarp.com to start or join a Meet call straight from your browser.',
              platform: 'web',
              cta: { label: 'Sign in on web', href: '/products/meet' },
            },
          ]}
        />

        <StepsSection heading="Get started in three simple steps" steps={MEET_DOWNLOAD_STEPS} />

        {/* Every claim below is already backed up by the Meet product page
            (app/products/meet/page.tsx): HD video, screen sharing, and
            recording are each named features (MeetFeatureGrid), and "meetings
            that actually start on time" echoes MeetHowItWorks' own stats-card
            copy. No AI transcription/summary claim is made here — Meet's
            product page does market "AI Meeting Notes" (MeetFeatureGrid) and
            an "AI that captures every decision" panel (MeetWhyBento), but
            that feature is deliberately left out of this Download page per
            the brief, so it is never implied here. */}
        <DownloadFinalCTA
          eyebrow="Start Meeting"
          headline="Bring HD video, screen share, and recording to every device your team uses."
          subtext="Join thousands of teams already using Snaarp Meet to run calls that start on time and end with everyone aligned."
          primaryCta={{ label: 'Get Started for free', href: '#' }}
          secondaryCta={{ label: 'Download Snaarpmeet', href: '#' }}
        />
      </main>
      <Footer />
    </>
  );
}
