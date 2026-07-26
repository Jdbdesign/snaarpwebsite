import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { DownloadHero } from '@/components/download/DownloadHero';
import { DownloadPhoneFrame } from '@/components/download/DownloadPhoneFrame';
import { AIComposePhoneScreen } from '@/components/download/ai-compose/AIComposePhoneScreen';
import { AIComposeWebMockup } from '@/components/download/ai-compose/AIComposeWebMockup';
import { DownloadMobileAppsSection } from '@/components/download/DownloadMobileAppsSection';
import { DownloadDesktopSection } from '@/components/download/DownloadDesktopSection';
import { StepsSection } from '@/components/sections/StepsSection';
import { DownloadFinalCTA } from '@/components/download/DownloadFinalCTA';

// Mirrors the "Say what you need / AI Compose drafts it / Send, do not
// start from scratch" flow already described on the AI Compose product page
// (components/ai-compose/AIComposePage.tsx) - reworded for the Download
// page numbered-step format.
const AI_COMPOSE_DOWNLOAD_STEPS = [
  {
    title: "Start Typing",
    desc: "Open a new message or reply - type a one-line prompt describing what you need to say.",
  },
  {
    title: "Generate a Draft",
    desc: "AI Compose writes a full first pass in your tone. Adjust the length or regenerate until it fits.",
  },
  {
    title: "Refine and Send",
    desc: "Tweak a word or two, or send it as-is - you stay in control from first prompt to final send.",
  },
];

export const metadata: Metadata = {
  title: "Download AI Compose - iOS, Android & Web | Snaarp",
  description:
    'Draft emails, replies, and messages in seconds with AI Compose - available on iOS, Android, and the web, built into the Snaarp Stack.',
};

export default function AIComposeDownloadPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <DownloadHero
          headlineLines={[
            { text: 'Never Stare at a' },
            { text: 'Blank Message' },
            { text: 'Again.', accent: true },
          ]}
          subtext="Draft emails, replies, and follow-ups in seconds - AI Compose writes the first pass in your voice, everywhere you type across the Snaarp Stack."
          primaryCta={{ label: 'Download for android/iOS', href: '#' }}
          secondaryCta={{ label: 'Get started on web', href: '/products/ai-compose' }}
          webMockup={<AIComposeWebMockup />}
          phoneMockup={
            <DownloadPhoneFrame size="lg">
              <AIComposePhoneScreen />
            </DownloadPhoneFrame>
          }
        />

        <DownloadMobileAppsSection
          heading="Mobile apps"
          subtext="Download the Snaarp app with AI Compose on iOS or Android."
          cards={[
            {
              key: 'ios',
              title: "iOS app",
              desc: "Draft messages on the go - AI Compose is built into the Snaarp app for iPhone and iPad.",
              platform: 'ios',
              badge: { store: 'apple', href: '#' },
              phoneMockup: (
                <DownloadPhoneFrame size="sm">
                  <AIComposePhoneScreen />
                </DownloadPhoneFrame>
              ),
            },
            {
              key: 'android',
              title: "Android App",
              desc: "Never start from scratch - AI Compose is built into the Snaarp app for Android.",
              platform: 'android',
              badge: { store: 'google', href: '#' },
              phoneMockup: (
                <DownloadPhoneFrame size="sm">
                  <AIComposePhoneScreen />
                </DownloadPhoneFrame>
              ),
            },
          ]}
        />

        {/* AI Compose has no native Windows/macOS installer - same Mobile +
            Web only pattern established on Kalender and Contacts' Download
            pages. Single "Web app" card, matching the platform availability
            stated in the prompt (Mobile + Web only, no Desktop). */}
        <DownloadDesktopSection
          eyebrow="Web app"
          heading="Web app"
          subtext="Get the full AI Compose experience from your browser."
          cards={[
            {
              key: 'web',
              title: "Web app",
              desc: "No install needed - sign in at snaarp.com to use AI Compose in Mail and Teams straight from your browser.",
              platform: 'web',
              cta: { label: 'Sign in on web', href: '/products/ai-compose' },
            },
          ]}
        />

        <StepsSection heading="Get started in three simple steps" steps={AI_COMPOSE_DOWNLOAD_STEPS} />

        {/* COPY FLAG: The AI Compose product page states it works in "Mail
            and Teams today, with more of the Stack coming" and its hero demo
            is simulated (InteractiveComposeDemo), not a live API call. This
            CTA section copy stays within those confirmed bounds - does NOT
            claim it works in apps beyond Mail + Teams, does NOT imply a live
            API call, and does NOT claim specific accuracy or tone guarantees
            beyond what the product page already states. */}
        <DownloadFinalCTA
          eyebrow="Start Composing"
          headline="Stop staring at blank messages. Start sending."
          subtext="AI Compose is built into Mail and Teams - draft emails, replies, and follow-ups in seconds, included in every Snaarp plan."
          primaryCta={{ label: 'Get Started for free', href: '#' }}
          secondaryCta={{ label: 'Download AI Compose', href: '#' }}
        />
      </main>
      <Footer />
    </>
  );
}
