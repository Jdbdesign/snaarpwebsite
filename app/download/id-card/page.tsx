import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { DownloadHero } from '@/components/download/DownloadHero';
import { DownloadPhoneFrame } from '@/components/download/DownloadPhoneFrame';
import { IdCardPhoneScreen } from '@/components/download/id-card/IdCardPhoneScreen';
import { IdCardWebMockup } from '@/components/download/id-card/IdCardWebMockup';
import { DownloadMobileAppsSection } from '@/components/download/DownloadMobileAppsSection';
import { DownloadDesktopSection } from '@/components/download/DownloadDesktopSection';
import { StepsSection } from '@/components/sections/StepsSection';
import { DownloadFinalCTA } from '@/components/download/DownloadFinalCTA';

const IDCARD_DOWNLOAD_STEPS = [
  {
    title: "Issue a Card",
    desc: "Add an employee, choose a template, set access levels - their digital ID card is ready in seconds.",
  },
  {
    title: "Staff Carry It Everywhere",
    desc: "The card lives in their phone - no plastic badge to lose, no lanyard to forget at home.",
  },
  {
    title: "Verify Access Instantly",
    desc: "Tap or scan the QR code to verify identity and access level - works at doors, desks, and events.",
  },
];

export const metadata: Metadata = {
  title: "Download ID Card - iOS, Android, Web & Desktop | Snaarp",
  description:
    'Digital staff IDs that verify in a tap. Issue cards, manage access levels, and let staff carry their ID on any device.',
};

export default function IdCardDownloadPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <DownloadHero
          headlineLines={[
            { text: 'Digital Staff IDs.' },
            { text: 'Verified in' },
            { text: 'a Tap.', accent: true },
          ]}
          subtext="Issue digital ID cards to your team, set access levels, and verify identity with a tap or QR scan - no plastic badges, no lanyards, no lost credentials."
          primaryCta={{ label: 'Download for android/iOS', href: '#' }}
          secondaryCta={{ label: 'Get started on web', href: '#' }}
          webMockup={<IdCardWebMockup />}
          phoneMockup={
            <DownloadPhoneFrame size="lg">
              <IdCardPhoneScreen />
            </DownloadPhoneFrame>
          }
        />

        <DownloadMobileAppsSection
          heading="Mobile apps"
          subtext="Download the Snaarp ID Card app on iOS or Android."
          cards={[
            {
              key: 'ios',
              title: "iOS app",
              desc: "Carry your digital ID and tap to verify at any access point - download ID Card for iPhone and iPad.",
              platform: 'ios',
              badge: { store: 'apple', href: '#' },
              phoneMockup: (
                <DownloadPhoneFrame size="sm">
                  <IdCardPhoneScreen />
                </DownloadPhoneFrame>
              ),
            },
            {
              key: 'android',
              title: "Android App",
              desc: "Your staff ID, always in your pocket - download ID Card for Android.",
              platform: 'android',
              badge: { store: 'google', href: '#' },
              phoneMockup: (
                <DownloadPhoneFrame size="sm">
                  <IdCardPhoneScreen />
                </DownloadPhoneFrame>
              ),
            },
          ]}
        />

        <DownloadDesktopSection
          heading="Desktop app"
          subtext="Manage staff IDs and access levels from your desktop."
          cards={[
            {
              key: 'windows',
              title: "Windows",
              desc: "A native admin app for issuing cards, managing access, and monitoring badge activity.",
              platform: 'windows',
              cta: { label: 'Download for Windows', href: '#' },
            },
            {
              key: 'macos',
              title: "macOS",
              desc: "Full ID administration from a dedicated Mac app - templates, access levels, and audit logs.",
              platform: 'macos',
              cta: { label: 'Download for macOS', href: '#' },
            },
            {
              key: 'web',
              title: "Web app",
              desc: "No install needed - sign in at snaarp.com to issue cards and manage your staff directory from any browser.",
              platform: 'web',
              cta: { label: 'Sign in on web', href: '#' },
            },
          ]}
        />

        <StepsSection heading="Get started in three simple steps" steps={IDCARD_DOWNLOAD_STEPS} />

        <DownloadFinalCTA
          eyebrow="Start Issuing"
          headline="Stop printing plastic badges that end up in drawers."
          subtext="Digital IDs that live on every device, verify with a tap, and revoke in one click - secure, instant, and always with your staff."
          primaryCta={{ label: 'Get Started for free', href: '#' }}
          secondaryCta={{ label: 'Download ID Card', href: '#' }}
        />
      </main>
      <Footer />
    </>
  );
}
