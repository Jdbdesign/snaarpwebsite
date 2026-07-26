import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { DownloadHero } from '@/components/download/DownloadHero';
import { DownloadPhoneFrame } from '@/components/download/DownloadPhoneFrame';
import { SendritPhoneScreen } from '@/components/download/sendrit/SendritPhoneScreen';
import { SendritWebMockup } from '@/components/download/sendrit/SendritWebMockup';
import { DownloadDesktopSection } from '@/components/download/DownloadDesktopSection';
import { StepsSection } from '@/components/sections/StepsSection';
import { DownloadFinalCTA } from '@/components/download/DownloadFinalCTA';

// Mirrors the "Build a sequence / Personalize / Track" flow for Sendrit.
const SENDRIT_DOWNLOAD_STEPS = [
  {
    title: "Build a Sequence",
    desc: "Add steps, set delays, and write each email - your outreach runs on autopilot once you hit start.",
  },
  {
    title: "Personalize at Scale",
    desc: "Merge tags pull in each prospect name, company, and role - every email reads like it was written by hand.",
  },
  {
    title: "Track Every Open and Reply",
    desc: "See who opened, clicked, and replied - pause, adjust, or follow up manually when a deal heats up.",
  },
];

export const metadata: Metadata = {
  title: "Download Sendrit - Web App | Snaarp",
  description:
    'Outbound email sequences that land in the inbox - build multi-step campaigns, personalize at scale, and track opens and replies. Available on the web.',
};

export default function SendritDownloadPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <DownloadHero
          headlineLines={[
            { text: 'Outbound Sequences' },
            { text: 'That Land in' },
            { text: 'The Inbox.', accent: true },
          ]}
          subtext="Build multi-step email campaigns, personalize every message with merge tags, and track opens, clicks, and replies - all on autopilot. When a prospect replies, the sequence stops and you take over."
          primaryCta={{ label: 'Download for android/iOS', href: '#' }}
          secondaryCta={{ label: 'Get started on web', href: '#' }}
          webMockup={<SendritWebMockup />}
          phoneMockup={
            <DownloadPhoneFrame size="lg">
              <SendritPhoneScreen />
            </DownloadPhoneFrame>
          }
        />

        {/* Sendrit is Web only - no Mobile or Desktop apps. */}
        <DownloadDesktopSection
          eyebrow="Web app"
          heading="Web app"
          subtext="Access Sendrit from your browser - no install required."
          cards={[
            {
              key: 'web',
              title: "Web app",
              desc: "Sign in at snaarp.com to build sequences, manage contacts, and track campaign performance - works alongside CRM and Zeus Contacts.",
              platform: 'web',
              cta: { label: 'Sign in on web', href: '#' },
            },
          ]}
        />

        <StepsSection heading="Get started in three simple steps" steps={SENDRIT_DOWNLOAD_STEPS} />

        <DownloadFinalCTA
          eyebrow="Start Sending"
          headline="Stop writing the same follow-up email twelve times."
          subtext="Multi-step sequences that personalize themselves and pause the moment someone replies. Built into the Snaarp Stack."
          primaryCta={{ label: 'Get Started for free', href: '#' }}
          secondaryCta={{ label: 'Open Sendrit', href: '#' }}
        />
      </main>
      <Footer />
    </>
  );
}
