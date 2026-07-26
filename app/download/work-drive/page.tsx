import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { DownloadHero } from '@/components/download/DownloadHero';
import { DownloadPhoneFrame } from '@/components/download/DownloadPhoneFrame';
import { WorkDrivePhoneScreen } from '@/components/download/work-drive/WorkDrivePhoneScreen';
import { WorkDriveWebMockup } from '@/components/download/work-drive/WorkDriveWebMockup';
import { DownloadMobileAppsSection } from '@/components/download/DownloadMobileAppsSection';
import { DownloadDesktopSection } from '@/components/download/DownloadDesktopSection';
import { StepsSection } from '@/components/sections/StepsSection';
import { DownloadFinalCTA } from '@/components/download/DownloadFinalCTA';

// Mirrors the "Upload / Share / Access" flow from the Work Drive product
// page - reworded for the Download page numbered-step format.
const WORK_DRIVE_DOWNLOAD_STEPS = [
  {
    title: "Upload Your Files",
    desc: "Drag in your files or folders - Work Drive keeps everything in one searchable place, connected to the rest of the Stack.",
  },
  {
    title: "Share with Your Team",
    desc: "Give colleagues access to a file or folder, and attach it in Mail or Teams without downloading first.",
  },
  {
    title: "Access from Anywhere",
    desc: "Open, edit, or share any file from your phone, desktop, or browser - always the latest version.",
  },
];

export const metadata: Metadata = {
  title: "Download Work Drive - iOS, Android, Web & Desktop | Snaarp",
  description:
    'One shared drive for every file your team touches - synced to iOS, Android, Web, Windows, and macOS, already connected to Mail, Teams, and the rest of the Snaarp Stack.',
};

export default function WorkDriveDownloadPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <DownloadHero
          headlineLines={[
            { text: 'Every File Your' },
            { text: 'Team Touches,' },
            { text: 'One Place.', accent: true },
          ]}
          subtext="Store, share, and find files without hunting across five different apps. Work Drive syncs to every device and connects to Mail, Teams, and the rest of the Stack - version history included."
          primaryCta={{ label: 'Download for android/iOS', href: '#' }}
          secondaryCta={{ label: 'Get started on web', href: '/products/work-drive' }}
          webMockup={<WorkDriveWebMockup />}
          phoneMockup={
            <DownloadPhoneFrame size="lg">
              <WorkDrivePhoneScreen />
            </DownloadPhoneFrame>
          }
        />

        <DownloadMobileAppsSection
          heading="Mobile apps"
          subtext="Download the Snaarp Work Drive app on iOS or Android."
          cards={[
            {
              key: 'ios',
              title: "iOS app",
              desc: "Access every team file from your pocket - download Work Drive for iPhone and iPad.",
              platform: 'ios',
              badge: { store: 'apple', href: '#' },
              phoneMockup: (
                <DownloadPhoneFrame size="sm">
                  <WorkDrivePhoneScreen />
                </DownloadPhoneFrame>
              ),
            },
            {
              key: 'android',
              title: "Android App",
              desc: "Open, share, and upload files on the go - download Work Drive for Android.",
              platform: 'android',
              badge: { store: 'google', href: '#' },
              phoneMockup: (
                <DownloadPhoneFrame size="sm">
                  <WorkDrivePhoneScreen />
                </DownloadPhoneFrame>
              ),
            },
          ]}
        />

        {/* Full Desktop section - Work Drive supports all platforms (iOS,
            Android, Windows, macOS, Web), matching Mail/Meet's/Teams'/
            Business Card full set. Placeholder href="#" for installers
            that don't exist yet. */}
        <DownloadDesktopSection
          heading="Desktop app"
          subtext="Access every file, synced to your desktop."
          cards={[
            {
              key: 'windows',
              title: "Windows",
              desc: "Sync your Drive folder to Windows Explorer - files stay up to date without opening a browser.",
              platform: 'windows',
              cta: { label: 'Download for Windows', href: '#' },
            },
            {
              key: 'macos',
              title: "macOS",
              desc: "Work Drive in your Finder sidebar - drag files in and they sync instantly.",
              platform: 'macos',
              cta: { label: 'Download for macOS', href: '#' },
            },
            {
              key: 'web',
              title: "Web app",
              desc: "No install needed - sign in at snaarp.com to upload, search, and share files from any browser.",
              platform: 'web',
              cta: { label: 'Sign in on web', href: '/products/work-drive' },
            },
          ]}
        />

        <StepsSection heading="Get started in three simple steps" steps={WORK_DRIVE_DOWNLOAD_STEPS} />

        {/* COPY FLAG: Work Drive product page flags its "20 GB+" storage
            figure as an unconfirmed placeholder. This CTA section does NOT
            assert a specific storage number - it says "shared storage" without
            quantifying. Does NOT claim per-file/folder permissions or any
            other capability more confidently than the product page already
            does. Review before launch. */}
        <DownloadFinalCTA
          eyebrow="Start Storing"
          headline="Stop hunting for 'that file someone sent last week.'"
          subtext="One shared drive, already connected to Mail, Teams, and everything else in the Stack - included in every Snaarp plan."
          primaryCta={{ label: 'Get Started for free', href: '#' }}
          secondaryCta={{ label: 'Download Work Drive', href: '#' }}
        />
      </main>
      <Footer />
    </>
  );
}
