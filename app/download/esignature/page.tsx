import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { DownloadHero } from '@/components/download/DownloadHero';
import { DownloadPhoneFrame } from '@/components/download/DownloadPhoneFrame';
import { EsignaturePhoneScreen } from '@/components/download/esignature/EsignaturePhoneScreen';
import { EsignatureWebMockup } from '@/components/download/esignature/EsignatureWebMockup';
import { DownloadMobileAppsSection } from '@/components/download/DownloadMobileAppsSection';
import { DownloadDesktopSection } from '@/components/download/DownloadDesktopSection';
import { StepsSection } from '@/components/sections/StepsSection';
import { DownloadFinalCTA } from '@/components/download/DownloadFinalCTA';

const ESIGNATURE_DOWNLOAD_STEPS = [
  {
    title: "Upload a Document",
    desc: "Drop in a PDF or Word file and add signature fields where you need them - place, label, done.",
  },
  {
    title: "Add Signers",
    desc: "Enter each signer email, assign them a field, and set the signing order if needed.",
  },
  {
    title: "Track to Completion",
    desc: "See who has signed and who hasn't in real time - send reminders, download the signed PDF, and keep the audit trail.",
  },
];

export const metadata: Metadata = {
  title: "Download eSignature - iOS, Android & Web | Snaarp",
  description:
    'Get contracts signed without the paper chase. Upload a document, add signers, and track every signature to completion. Available on iOS, Android, and the web.',
};

export default function EsignatureDownloadPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <DownloadHero
          headlineLines={[
            { text: 'Get Contracts Signed.' },
            { text: 'Without the' },
            { text: 'Paper Chase.', accent: true },
          ]}
          subtext="Upload a document, drop in signature fields, and send to anyone - they sign from their browser or phone, you get a legally binding PDF with a full audit trail. No printing, scanning, or chasing."
          primaryCta={{ label: 'Download for android/iOS', href: '#' }}
          secondaryCta={{ label: 'Get started on web', href: '#' }}
          webMockup={<EsignatureWebMockup />}
          phoneMockup={
            <DownloadPhoneFrame size="lg">
              <EsignaturePhoneScreen />
            </DownloadPhoneFrame>
          }
        />

        <DownloadMobileAppsSection
          heading="Mobile apps"
          subtext="Download the Snaarp eSignature app on iOS or Android."
          cards={[
            {
              key: 'ios',
              title: "iOS app",
              desc: "Sign contracts on the go and get notified the moment someone signs - download eSignature for iPhone and iPad.",
              platform: 'ios',
              badge: { store: 'apple', href: '#' },
              phoneMockup: (
                <DownloadPhoneFrame size="sm">
                  <EsignaturePhoneScreen />
                </DownloadPhoneFrame>
              ),
            },
            {
              key: 'android',
              title: "Android App",
              desc: "Review and sign from anywhere - download eSignature for Android.",
              platform: 'android',
              badge: { store: 'google', href: '#' },
              phoneMockup: (
                <DownloadPhoneFrame size="sm">
                  <EsignaturePhoneScreen />
                </DownloadPhoneFrame>
              ),
            },
          ]}
        />

        <DownloadDesktopSection
          eyebrow="Web app"
          heading="Web app"
          subtext="Get the full eSignature experience from your browser."
          cards={[
            {
              key: 'web',
              title: "Web app",
              desc: "No install needed - sign in at snaarp.com to create documents, manage signers, and track completions from any browser.",
              platform: 'web',
              cta: { label: 'Sign in on web', href: '#' },
            },
          ]}
        />

        <StepsSection heading="Get started in three simple steps" steps={ESIGNATURE_DOWNLOAD_STEPS} />

        <DownloadFinalCTA
          eyebrow="Start Signing"
          headline="Stop printing contracts just to sign them."
          subtext="Send, sign, and store - legally binding e-signatures with a full audit trail, no paper required. Built into the Snaarp Stack."
          primaryCta={{ label: 'Get Started for free', href: '#' }}
          secondaryCta={{ label: 'Open eSignature', href: '#' }}
        />
      </main>
      <Footer />
    </>
  );
}
