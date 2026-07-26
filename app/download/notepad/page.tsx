import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { DownloadHero } from '@/components/download/DownloadHero';
import { DownloadPhoneFrame } from '@/components/download/DownloadPhoneFrame';
import { NotepadPhoneScreen } from '@/components/download/notepad/NotepadPhoneScreen';
import { NotepadWebMockup } from '@/components/download/notepad/NotepadWebMockup';
import { DownloadMobileAppsSection } from '@/components/download/DownloadMobileAppsSection';
import { DownloadDesktopSection } from '@/components/download/DownloadDesktopSection';
import { StepsSection } from '@/components/sections/StepsSection';
import { DownloadFinalCTA } from '@/components/download/DownloadFinalCTA';

// Mirrors the "Jot it down / Find it / It syncs" flow from the Notepad
// product page - reworded for the Download page numbered-step format.
const NOTEPAD_DOWNLOAD_STEPS = [
  {
    title: "Jot It Down",
    desc: "A thought, a checklist, a link to save - capture it in seconds, formatted however you like.",
  },
  {
    title: "Find It Instantly",
    desc: "Search across all your notes by keyword, tag, or date - the one you need surfaces immediately.",
  },
  {
    title: "It Syncs Everywhere",
    desc: "Write on your phone, pick it up on your desktop - every note syncs across the Stack the moment you type it.",
  },
];

export const metadata: Metadata = {
  title: "Download Notepad - iOS, Android, Web & Desktop | Snaarp",
  description:
    'Quick notes for the stuff that does not need a whole document - jot it down, find it instantly, synced across every device the moment you type it.',
};

export default function NotepadDownloadPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <DownloadHero
          headlineLines={[
            { text: 'Jot It Down.' },
            { text: 'Find It Instantly.', accent: true },
          ]}
          subtext="That idea in the meeting, the link youl need later, the checklist before Friday - capture it in seconds and surface it the moment you need it. Synced everywhere, searchable instantly, never lost in a thread again."
          primaryCta={{ label: 'Download for android/iOS', href: '#' }}
          secondaryCta={{ label: 'Get started on web', href: '/products/notepad' }}
          webMockup={<NotepadWebMockup />}
          phoneMockup={
            <DownloadPhoneFrame size="lg">
              <NotepadPhoneScreen />
            </DownloadPhoneFrame>
          }
        />

        <DownloadMobileAppsSection
          heading="Mobile apps"
          subtext="Download the Snaarp Notepad app on iOS or Android."
          cards={[
            {
              key: 'ios',
              title: "iOS app",
              desc: "Capture a thought the instant it hits - download Notepad for iPhone and iPad.",
              platform: 'ios',
              badge: { store: 'apple', href: '#' },
              phoneMockup: (
                <DownloadPhoneFrame size="sm">
                  <NotepadPhoneScreen />
                </DownloadPhoneFrame>
              ),
            },
            {
              key: 'android',
              title: "Android App",
              desc: "Your notes, always in reach - download Notepad for Android.",
              platform: 'android',
              badge: { store: 'google', href: '#' },
              phoneMockup: (
                <DownloadPhoneFrame size="sm">
                  <NotepadPhoneScreen />
                </DownloadPhoneFrame>
              ),
            },
          ]}
        />

        {/* Full Desktop section - Notepad supports all platforms. */}
        <DownloadDesktopSection
          heading="Desktop app"
          subtext="Capture and find notes from the convenience of your desktop."
          cards={[
            {
              key: 'windows',
              title: "Windows",
              desc: "A lightweight note-taking app that lives in your system tray - always one shortcut away.",
              platform: 'windows',
              cta: { label: 'Download for Windows', href: '#' },
            },
            {
              key: 'macos',
              title: "macOS",
              desc: "Quick notes from your menu bar on Mac - capture a thought without switching apps.",
              platform: 'macos',
              cta: { label: 'Download for macOS', href: '#' },
            },
            {
              key: 'web',
              title: "Web app",
              desc: "No install needed - sign in at snaarp.com to write, search, and organize notes from any browser.",
              platform: 'web',
              cta: { label: 'Sign in on web', href: '/products/notepad' },
            },
          ]}
        />

        <StepsSection heading="Get started in three simple steps" steps={NOTEPAD_DOWNLOAD_STEPS} />

        <DownloadFinalCTA
          eyebrow="Start Writing"
          headline="Stop losing thoughts in a dozen different places."
          subtext="One place for every quick note, checklist, and link - synced across every device, searchable in seconds. Included in every Snaarp plan."
          primaryCta={{ label: 'Get Started for free', href: '#' }}
          secondaryCta={{ label: 'Download Notepad', href: '#' }}
        />
      </main>
      <Footer />
    </>
  );
}
