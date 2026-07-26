import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { DownloadHero } from '@/components/download/DownloadHero';
import { DownloadPhoneFrame } from '@/components/download/DownloadPhoneFrame';
import { CrmPhoneScreen } from '@/components/download/crm/CrmPhoneScreen';
import { CrmWebMockup } from '@/components/download/crm/CrmWebMockup';
import { DownloadMobileAppsSection } from '@/components/download/DownloadMobileAppsSection';
import { DownloadDesktopSection } from '@/components/download/DownloadDesktopSection';
import { StepsSection } from '@/components/sections/StepsSection';
import { DownloadFinalCTA } from '@/components/download/DownloadFinalCTA';

// Mirrors the "Add a deal / Track it / Close it" flow from the CRM product
// page - reworded for the Download page numbered-step format.
const CRM_DOWNLOAD_STEPS = [
  {
    title: "Add a Deal",
    desc: "Drop a new deal into your pipeline in seconds - name, value, stage, and owner, all in one card.",
  },
  {
    title: "Track Every Conversation",
    desc: "Emails, calls, and notes log against the deal automatically - no manual entry, no context lost.",
  },
  {
    title: "Close and Report",
    desc: "Drag a deal to Closed Won and your numbers update instantly - reporting that builds itself.",
  },
];

export const metadata: Metadata = {
  title: "Download CRM - iOS, Android & Web | Snaarp",
  description:
    'Every deal, every conversation, and every next step in one view - available on iOS, Android, and the web, synced with the rest of the Snaarp Stack.',
};

export default function CrmDownloadPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <DownloadHero
          headlineLines={[
            { text: 'Know Every Deal.' },
            { text: 'See what is' },
            { text: 'Next.', accent: true },
          ]}
          subtext="Contacts, pipeline, and reporting - without the enterprise setup. Every deal, every conversation, and every next step in one view, synced with Mail, Teams, and the rest of the Stack."
          primaryCta={{ label: 'Download for android/iOS', href: '#' }}
          secondaryCta={{ label: 'Get started on web', href: '/products/crm' }}
          webMockup={<CrmWebMockup />}
          phoneMockup={
            <DownloadPhoneFrame size="lg">
              <CrmPhoneScreen />
            </DownloadPhoneFrame>
          }
        />

        <DownloadMobileAppsSection
          heading="Mobile apps"
          subtext="Download the Snaarp CRM app on iOS or Android."
          cards={[
            {
              key: 'ios',
              title: "iOS app",
              desc: "Check your pipeline and log calls on the go - download CRM for iPhone and iPad.",
              platform: 'ios',
              badge: { store: 'apple', href: '#' },
              phoneMockup: (
                <DownloadPhoneFrame size="sm">
                  <CrmPhoneScreen />
                </DownloadPhoneFrame>
              ),
            },
            {
              key: 'android',
              title: "Android App",
              desc: "Every deal in your pocket - download CRM for Android.",
              platform: 'android',
              badge: { store: 'google', href: '#' },
              phoneMockup: (
                <DownloadPhoneFrame size="sm">
                  <CrmPhoneScreen />
                </DownloadPhoneFrame>
              ),
            },
          ]}
        />

        {/* CRM is Mobile + Web only (no Windows/macOS desktop app) -
            same pattern as Kalender/Contacts/AI Compose. */}
        <DownloadDesktopSection
          eyebrow="Web app"
          heading="Web app"
          subtext="Get the full CRM experience from your browser."
          cards={[
            {
              key: 'web',
              title: "Web app",
              desc: "No install needed - sign in at snaarp.com to manage your pipeline, contacts, and reports from any browser.",
              platform: 'web',
              cta: { label: 'Sign in on web', href: '/products/crm' },
            },
          ]}
        />

        <StepsSection heading="Get started in three simple steps" steps={CRM_DOWNLOAD_STEPS} />

        <DownloadFinalCTA
          eyebrow="Start Closing"
          headline="Stop losing deals in a spreadsheet."
          subtext="One pipeline for every deal, synced with Mail and Teams - see what is next, act on it, and close faster. Included in every Snaarp plan."
          primaryCta={{ label: 'Get Started for free', href: '#' }}
          secondaryCta={{ label: 'Download CRM', href: '#' }}
        />
      </main>
      <Footer />
    </>
  );
}
