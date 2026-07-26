import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { DownloadHero } from '@/components/download/DownloadHero';
import { DownloadPhoneFrame } from '@/components/download/DownloadPhoneFrame';
import { NeoAiPhoneScreen } from '@/components/download/neo-ai/NeoAiPhoneScreen';
import { NeoAiWebMockup } from '@/components/download/neo-ai/NeoAiWebMockup';
import { DownloadDesktopSection } from '@/components/download/DownloadDesktopSection';
import { StepsSection } from '@/components/sections/StepsSection';
import { DownloadFinalCTA } from '@/components/download/DownloadFinalCTA';

const NEOAI_DOWNLOAD_STEPS = [
  {
    title: "Ask a Question",
    desc: "Type a question in plain language - about deals, emails, docs, or anything else in your Snaarp Stack.",
  },
  {
    title: "Neo Searches the Stack",
    desc: "Neo pulls data from CRM, Mail, Sheets, and every connected app - all in one search, not five separate tabs.",
  },
  {
    title: "Get an Answer with Sources",
    desc: "A formatted answer with data, context, and linked sources - click through to the original record if you need more detail.",
  },
];

export const metadata: Metadata = {
  title: "Download Neo AI - Web App | Snaarp",
  description:
    'A cross-app AI assistant that searches your entire Snaarp Stack. Ask questions in plain language and get answers with sources.',
};

export default function NeoAiDownloadPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <DownloadHero
          headlineLines={[
            { text: 'Ask Neo. Get Answers' },
            { text: 'Across the' },
            { text: 'Entire Stack.', accent: true },
          ]}
          subtext="One AI assistant connected to everything - CRM, Mail, Sheets, Projects, and more. Ask a question in plain language and get an answer with data, context, and sources."
          primaryCta={{ label: 'Download for android/iOS', href: '#' }}
          secondaryCta={{ label: 'Get started on web', href: '#' }}
          webMockup={<NeoAiWebMockup />}
          phoneMockup={
            <DownloadPhoneFrame size="lg">
              <NeoAiPhoneScreen />
            </DownloadPhoneFrame>
          }
        />

        {/* Neo AI is Web only. */}
        <DownloadDesktopSection
          eyebrow="Web app"
          heading="Web app"
          subtext="Access Neo AI from your browser - no install required."
          cards={[
            {
              key: 'web',
              title: "Web app",
              desc: "Sign in at snaarp.com to chat with Neo - connected to Mail, CRM, Sheets, Projects, and the rest of the Stack.",
              platform: 'web',
              cta: { label: 'Sign in on web', href: '#' },
            },
          ]}
        />

        <StepsSection heading="Get started in three simple steps" steps={NEOAI_DOWNLOAD_STEPS} />

        <DownloadFinalCTA
          eyebrow="Start Asking"
          headline="Stop searching five apps for one answer."
          subtext="One question, one answer, every source linked - Neo AI searches your entire stack so you do not have to. Built into every Snaarp plan."
          primaryCta={{ label: 'Get Started for free', href: '#' }}
          secondaryCta={{ label: 'Open Neo AI', href: '#' }}
        />
      </main>
      <Footer />
    </>
  );
}
