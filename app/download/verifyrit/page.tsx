import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { DownloadHero } from '@/components/download/DownloadHero';
import { DownloadPhoneFrame } from '@/components/download/DownloadPhoneFrame';
import { VerifyritPhoneScreen } from '@/components/download/verifyrit/VerifyritPhoneScreen';
import { VerifyritWebMockup } from '@/components/download/verifyrit/VerifyritWebMockup';
import { DownloadDesktopSection } from '@/components/download/DownloadDesktopSection';
import { StepsSection } from '@/components/sections/StepsSection';
import { DownloadFinalCTA } from '@/components/download/DownloadFinalCTA';

const VERIFYRIT_DOWNLOAD_STEPS = [
  {
    title: "Upload List",
    desc: "Drop in your CSV or paste emails directly - VerifyRit handles lists of any size, from ten to ten million.",
  },
  {
    title: "Verify Every Address",
    desc: "Each email is checked for syntax, domain health, and mailbox existence - flagged as valid, invalid, or risky.",
  },
  {
    title: "Export Clean Data",
    desc: "Download a verified list with only real inboxes - reduce bounces, protect sender reputation, and land in the inbox.",
  },
];

export const metadata: Metadata = {
  title: "Download VerifyRit - Web App | Snaarp",
  description:
    'Bulk email verification that catches invalid, risky, and undeliverable addresses before you hit send. Protect your sender reputation and reduce bounces.',
};

export default function VerifyritDownloadPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <DownloadHero
          headlineLines={[
            { text: 'Send to Real Inboxes.' },
            { text: 'Skip the' },
            { text: 'Bounces.', accent: true },
          ]}
          subtext="Upload your email list and verify every address in minutes - catch invalid, risky, and undeliverable contacts before you hit send. Protect your sender reputation and keep deliverability high."
          primaryCta={{ label: 'Download for android/iOS', href: '#' }}
          secondaryCta={{ label: 'Get started on web', href: '#' }}
          webMockup={<VerifyritWebMockup />}
          phoneMockup={
            <DownloadPhoneFrame size="lg">
              <VerifyritPhoneScreen />
            </DownloadPhoneFrame>
          }
        />

        {/* VerifyRit is Web only - no Mobile or Desktop apps. */}
        <DownloadDesktopSection
          eyebrow="Web app"
          heading="Web app"
          subtext="Access VerifyRit from your browser - no install required."
          cards={[
            {
              key: 'web',
              title: "Web app",
              desc: "Sign in at snaarp.com to upload lists, verify emails in bulk, and export clean data - works alongside Sendrit, CRM, and Zeus Contacts.",
              platform: 'web',
              cta: { label: 'Sign in on web', href: '#' },
            },
          ]}
        />

        <StepsSection heading="Get started in three simple steps" steps={VERIFYRIT_DOWNLOAD_STEPS} />

        <DownloadFinalCTA
          eyebrow="Start Verifying"
          headline="Stop sending to addresses that do not exist."
          subtext="Verify every email before you send - reduce bounces, protect your domain reputation, and make every campaign count. Built into the Snaarp Stack."
          primaryCta={{ label: 'Get Started for free', href: '#' }}
          secondaryCta={{ label: 'Open VerifyRit', href: '#' }}
        />
      </main>
      <Footer />
    </>
  );
}
