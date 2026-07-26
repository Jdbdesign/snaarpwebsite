import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { DownloadHero } from '@/components/download/DownloadHero';
import { DownloadPhoneFrame } from '@/components/download/DownloadPhoneFrame';
import { SheetsPhoneScreen } from '@/components/download/sheets/SheetsPhoneScreen';
import { SheetsWebMockup } from '@/components/download/sheets/SheetsWebMockup';
import { DownloadMobileAppsSection } from '@/components/download/DownloadMobileAppsSection';
import { DownloadDesktopSection } from '@/components/download/DownloadDesktopSection';
import { StepsSection } from '@/components/sections/StepsSection';
import { DownloadFinalCTA } from '@/components/download/DownloadFinalCTA';

// Mirrors the "Build a sheet / Pull in live data / Share with your team"
// flow from the Sheets product page - reworded for the Download page
// numbered-step format.
const SHEETS_DOWNLOAD_STEPS = [
  {
    title: "Build a Sheet",
    desc: "Start blank or from a template - formulas, formatting, and collaboration all work from the first cell.",
  },
  {
    title: "Pull in Live Data",
    desc: "Connect to CRM and the numbers update themselves - no more exporting, copying, and pasting stale CSVs.",
  },
  {
    title: "Share with Your Team",
    desc: "Invite collaborators by link and edit together in real time - everyone sees the same numbers, always current.",
  },
];

export const metadata: Metadata = {
  title: "Download Sheets - iOS, Android, Web & Desktop | Snaarp",
  description:
    'Spreadsheets that talk to your business - pull live data from CRM, collaborate in real time, and share without exporting. Available on iOS, Android, Web, Windows, and macOS.',
};

export default function SheetsDownloadPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <DownloadHero
          headlineLines={[
            { text: 'Spreadsheets That' },
            { text: 'Talk to Your' },
            { text: 'Business.', accent: true },
          ]}
          subtext="Build a sheet, pull in live numbers from CRM, and share it with your team - no exporting to CSV and re-uploading somewhere else. Formulas, formatting, and real-time collaboration, all connected to the Stack."
          primaryCta={{ label: 'Download for android/iOS', href: '#' }}
          secondaryCta={{ label: 'Get started on web', href: '/products/sheets' }}
          webMockup={<SheetsWebMockup />}
          phoneMockup={
            <DownloadPhoneFrame size="lg">
              <SheetsPhoneScreen />
            </DownloadPhoneFrame>
          }
        />

        <DownloadMobileAppsSection
          heading="Mobile apps"
          subtext="Download the Snaarp Sheets app on iOS or Android."
          cards={[
            {
              key: 'ios',
              title: "iOS app",
              desc: "Check your numbers and edit cells on the go - download Sheets for iPhone and iPad.",
              platform: 'ios',
              badge: { store: 'apple', href: '#' },
              phoneMockup: (
                <DownloadPhoneFrame size="sm">
                  <SheetsPhoneScreen />
                </DownloadPhoneFrame>
              ),
            },
            {
              key: 'android',
              title: "Android App",
              desc: "Your spreadsheets, always in reach - download Sheets for Android.",
              platform: 'android',
              badge: { store: 'google', href: '#' },
              phoneMockup: (
                <DownloadPhoneFrame size="sm">
                  <SheetsPhoneScreen />
                </DownloadPhoneFrame>
              ),
            },
          ]}
        />

        {/* Full Desktop section - Sheets supports all platforms (iOS,
            Android, Windows, macOS, Web). Placeholder href="#" for installers
            that don exist yet. */}
        <DownloadDesktopSection
          heading="Desktop app"
          subtext="Full spreadsheet power, synced to your desktop."
          cards={[
            {
              key: 'windows',
              title: "Windows",
              desc: "Native spreadsheet editing with offline access and instant sync when you reconnect.",
              platform: 'windows',
              cta: { label: 'Download for Windows', href: '#' },
            },
            {
              key: 'macos',
              title: "macOS",
              desc: "A dedicated Sheets app on Mac - full formulas, formatting, and collaboration without a browser.",
              platform: 'macos',
              cta: { label: 'Download for macOS', href: '#' },
            },
            {
              key: 'web',
              title: "Web app",
              desc: "No install needed - sign in at snaarp.com to create, edit, and share spreadsheets from any browser.",
              platform: 'web',
              cta: { label: 'Sign in on web', href: '/products/sheets' },
            },
          ]}
        />

        <StepsSection heading="Get started in three simple steps" steps={SHEETS_DOWNLOAD_STEPS} />

        {/* COPY FLAG: Sheets' product page describes CRM-connected live data
            as a core feature but its exact data-source breadth (beyond CRM)
            is unconfirmed. This CTA section says "live data from CRM"
            (confirmed) and does NOT assert connections to sources beyond CRM
            (e.g. accounting, analytics). Review before launch. */}
        <DownloadFinalCTA
          eyebrow="Start Calculating"
          headline="Stop copying numbers into dead spreadsheets."
          subtext="Sheets pulls live data from CRM, updates in real time, and lets your whole team collaborate on the same numbers - included in every Snaarp plan."
          primaryCta={{ label: 'Get Started for free', href: '#' }}
          secondaryCta={{ label: 'Download Sheets', href: '#' }}
        />
      </main>
      <Footer />
    </>
  );
}
