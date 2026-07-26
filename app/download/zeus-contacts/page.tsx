import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { DownloadHero } from '@/components/download/DownloadHero';
import { DownloadPhoneFrame } from '@/components/download/DownloadPhoneFrame';
import { ZeusContactsPhoneScreen } from '@/components/download/zeus-contacts/ZeusContactsPhoneScreen';
import { ZeusContactsWebMockup } from '@/components/download/zeus-contacts/ZeusContactsWebMockup';
import { DownloadDesktopSection } from '@/components/download/DownloadDesktopSection';
import { StepsSection } from '@/components/sections/StepsSection';
import { DownloadFinalCTA } from '@/components/download/DownloadFinalCTA';

// Mirrors the "Search / Enrich / Add to CRM" flow - Zeus Contacts is a
// lead enrichment tool, not a traditional address book.
const ZEUS_CONTACTS_DOWNLOAD_STEPS = [
  {
    title: "Search for Leads",
    desc: "Filter by role, company size, industry, or location - find the exact decision-makers you need.",
  },
  {
    title: "Get Enriched Data",
    desc: "Every contact comes with verified email, phone, company info, and a lead score - no manual research.",
  },
  {
    title: "Push to CRM",
    desc: "Add qualified leads to your CRM pipeline in one click - ready for outreach, no copy-pasting.",
  },
];

export const metadata: Metadata = {
  title: "Download Zeus Contacts - Web App | Snaarp",
  description:
    'Find and enrich leads with verified contact data, company info, and lead scores - then push them straight to CRM. Available on the web.',
};

export default function ZeusContactsDownloadPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <DownloadHero
          headlineLines={[
            { text: 'Find the Right People.' },
            { text: 'Know Everything' },
            { text: 'Before You Reach Out.', accent: true },
          ]}
          subtext="Enriched lead data - verified emails, phone numbers, company size, revenue, and a lead score for every contact. Search by role, industry, or location and push qualified leads straight to CRM."
          primaryCta={{ label: 'Download for android/iOS', href: '#' }}
          secondaryCta={{ label: 'Get started on web', href: '#' }}
          webMockup={<ZeusContactsWebMockup />}
          phoneMockup={
            <DownloadPhoneFrame size="lg">
              <ZeusContactsPhoneScreen />
            </DownloadPhoneFrame>
          }
        />

        {/* Zeus Contacts is Web only - no Mobile or Desktop apps.
            Single "Web app" card only. */}
        <DownloadDesktopSection
          eyebrow="Web app"
          heading="Web app"
          subtext="Access Zeus Contacts from your browser - no install required."
          cards={[
            {
              key: 'web',
              title: "Web app",
              desc: "Sign in at snaarp.com to search, enrich, and export leads from any browser - works alongside CRM and Sendrit.",
              platform: 'web',
              cta: { label: 'Sign in on web', href: '#' },
            },
          ]}
        />

        <StepsSection heading="Get started in three simple steps" steps={ZEUS_CONTACTS_DOWNLOAD_STEPS} />

        <DownloadFinalCTA
          eyebrow="Start Prospecting"
          headline="Stop guessing who to reach out to."
          subtext="Verified contact data, enriched company info, and lead scores - find the right people and push them to CRM in one click. Included in the Snaarp Stack."
          primaryCta={{ label: 'Get Started for free', href: '#' }}
          secondaryCta={{ label: 'Open Zeus Contacts', href: '#' }}
        />
      </main>
      <Footer />
    </>
  );
}
