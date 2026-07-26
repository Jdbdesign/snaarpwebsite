import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { DownloadHero } from '@/components/download/DownloadHero';
import { DownloadPhoneFrame } from '@/components/download/DownloadPhoneFrame';
import { LockPhoneScreen } from '@/components/download/lock/LockPhoneScreen';
import { LockWebMockup } from '@/components/download/lock/LockWebMockup';
import { DownloadMobileAppsSection } from '@/components/download/DownloadMobileAppsSection';
import { DownloadDesktopSection } from '@/components/download/DownloadDesktopSection';
import { StepsSection } from '@/components/sections/StepsSection';
import { DownloadFinalCTA } from '@/components/download/DownloadFinalCTA';

const LOCK_DOWNLOAD_STEPS = [
  {
    title: "Add Credentials",
    desc: "Save logins, secure notes, and API keys - Lock encrypts everything end-to-end before it leaves your device.",
  },
  {
    title: "Share with Your Team",
    desc: "Grant access to shared credentials without revealing the password - revoke anytime with one click.",
  },
  {
    title: "Auto-fill Anywhere",
    desc: "Browser extension and mobile auto-fill put the right password in the right field - no copying, no pasting.",
  },
];

export const metadata: Metadata = {
  title: "Download Lock - iOS, Android, Web & Desktop | Snaarp",
  description:
    'A shared password manager and encrypted vault for your entire team. Store, share, and auto-fill credentials securely across every device.',
};

export default function LockDownloadPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <DownloadHero
          headlineLines={[
            { text: 'One Vault for Every' },
            { text: 'Password. Shared' },
            { text: 'Securely.', accent: true },
          ]}
          subtext="Store every login, API key, and secure note in one encrypted vault - share credentials with your team without ever revealing the password. Auto-fill everywhere, revoke instantly."
          primaryCta={{ label: 'Download for android/iOS', href: '#' }}
          secondaryCta={{ label: 'Get started on web', href: '#' }}
          webMockup={<LockWebMockup />}
          phoneMockup={
            <DownloadPhoneFrame size="lg">
              <LockPhoneScreen />
            </DownloadPhoneFrame>
          }
        />

        <DownloadMobileAppsSection
          heading="Mobile apps"
          subtext="Download the Snaarp Lock app on iOS or Android."
          cards={[
            {
              key: 'ios',
              title: "iOS app",
              desc: "Auto-fill passwords with Face ID and access your vault on the go - download Lock for iPhone and iPad.",
              platform: 'ios',
              badge: { store: 'apple', href: '#' },
              phoneMockup: (
                <DownloadPhoneFrame size="sm">
                  <LockPhoneScreen />
                </DownloadPhoneFrame>
              ),
            },
            {
              key: 'android',
              title: "Android App",
              desc: "Biometric unlock and auto-fill for every app - download Lock for Android.",
              platform: 'android',
              badge: { store: 'google', href: '#' },
              phoneMockup: (
                <DownloadPhoneFrame size="sm">
                  <LockPhoneScreen />
                </DownloadPhoneFrame>
              ),
            },
          ]}
        />

        <DownloadDesktopSection
          heading="Desktop app"
          subtext="Full vault access, synced to your desktop."
          cards={[
            {
              key: 'windows',
              title: "Windows",
              desc: "Native vault with browser extension integration and offline access - your passwords are always available.",
              platform: 'windows',
              cta: { label: 'Download for Windows', href: '#' },
            },
            {
              key: 'macos',
              title: "macOS",
              desc: "Touch ID auto-fill and a dedicated Mac app - no browser tab required.",
              platform: 'macos',
              cta: { label: 'Download for macOS', href: '#' },
            },
            {
              key: 'web',
              title: "Web app",
              desc: "No install needed - sign in at snaarp.com to manage your vault from any browser.",
              platform: 'web',
              cta: { label: 'Sign in on web', href: '#' },
            },
          ]}
        />

        <StepsSection heading="Get started in three simple steps" steps={LOCK_DOWNLOAD_STEPS} />

        <DownloadFinalCTA
          eyebrow="Start Securing"
          headline="Stop sharing passwords in Slack messages."
          subtext="One encrypted vault for every credential - share securely, auto-fill everywhere, and revoke access in one click. Included in every Snaarp plan."
          primaryCta={{ label: 'Get Started for free', href: '#' }}
          secondaryCta={{ label: 'Download Lock', href: '#' }}
        />
      </main>
      <Footer />
    </>
  );
}
