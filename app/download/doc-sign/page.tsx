import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { DownloadHero } from '@/components/download/DownloadHero';
import { DownloadPhoneFrame } from '@/components/download/DownloadPhoneFrame';
import { DocSignPhoneScreen } from '@/components/download/doc-sign/DocSignPhoneScreen';
import { DocSignWebMockup } from '@/components/download/doc-sign/DocSignWebMockup';
import { DownloadMobileAppsSection } from '@/components/download/DownloadMobileAppsSection';
import { DownloadDesktopSection } from '@/components/download/DownloadDesktopSection';
import { StepsSection } from '@/components/sections/StepsSection';
import { DownloadFinalCTA } from '@/components/download/DownloadFinalCTA';

const DOCSIGN_DOWNLOAD_STEPS = [
  {
    title: "Create a Request",
    desc: "Upload a document, name the approval request, and pick which stages it needs to pass through.",
  },
  {
    title: "Route for Approval",
    desc: "Assign approvers at each stage - theye notified instantly and can approve or request changes in one tap.",
  },
  {
    title: "Track Every Signature",
    desc: "See exactly where your request stands, who has approved, and who's holding it up - no more chasing people in chat.",
  },
];

export const metadata: Metadata = {
  title: "Download Doc Sign - iOS, Android & Web | Snaarp",
  description:
    'Internal document approval workflows that route themselves. Create a request, assign approvers, and track every stage to completion.',
};

export default function DocSignDownloadPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <DownloadHero
          headlineLines={[
            { text: 'Internal Approvals.' },
            { text: 'Routed,' },
            { text: 'Not Chased.', accent: true },
          ]}
          subtext="Create an approval request, assign it to the right people, and watch it move through each stage - everyone knows where it stands, and nobody gets forgotten."
          primaryCta={{ label: 'Download for android/iOS', href: '#' }}
          secondaryCta={{ label: 'Get started on web', href: '#' }}
          webMockup={<DocSignWebMockup />}
          phoneMockup={
            <DownloadPhoneFrame size="lg">
              <DocSignPhoneScreen />
            </DownloadPhoneFrame>
          }
        />

        <DownloadMobileAppsSection
          heading="Mobile apps"
          subtext="Download the Snaarp Doc Sign app on iOS or Android."
          cards={[
            {
              key: 'ios',
              title: "iOS app",
              desc: "Approve or reject requests on the go - download Doc Sign for iPhone and iPad.",
              platform: 'ios',
              badge: { store: 'apple', href: '#' },
              phoneMockup: (
                <DownloadPhoneFrame size="sm">
                  <DocSignPhoneScreen />
                </DownloadPhoneFrame>
              ),
            },
            {
              key: 'android',
              title: "Android App",
              desc: "Never miss an approval request - download Doc Sign for Android.",
              platform: 'android',
              badge: { store: 'google', href: '#' },
              phoneMockup: (
                <DownloadPhoneFrame size="sm">
                  <DocSignPhoneScreen />
                </DownloadPhoneFrame>
              ),
            },
          ]}
        />

        <DownloadDesktopSection
          eyebrow="Web app"
          heading="Web app"
          subtext="Get the full Doc Sign experience from your browser."
          cards={[
            {
              key: 'web',
              title: "Web app",
              desc: "No install needed - sign in at snaarp.com to create, route, and track approval workflows from any browser.",
              platform: 'web',
              cta: { label: 'Sign in on web', href: '#' },
            },
          ]}
        />

        <StepsSection heading="Get started in three simple steps" steps={DOCSIGN_DOWNLOAD_STEPS} />

        <DownloadFinalCTA
          eyebrow="Start Approving"
          headline="Stop chasing approvals in chat threads."
          subtext="Route documents through the right people, track every signature, and never lose an approval in a thread again. Built into the Snaarp Stack."
          primaryCta={{ label: 'Get Started for free', href: '#' }}
          secondaryCta={{ label: 'Open Doc Sign', href: '#' }}
        />
      </main>
      <Footer />
    </>
  );
}
