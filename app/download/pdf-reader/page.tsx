import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { DownloadHero } from '@/components/download/DownloadHero';
import { DownloadPhoneFrame } from '@/components/download/DownloadPhoneFrame';
import { PdfReaderPhoneScreen } from '@/components/download/pdf-reader/PdfReaderPhoneScreen';
import { PdfReaderWebMockup } from '@/components/download/pdf-reader/PdfReaderWebMockup';
import { DownloadMobileAppsSection } from '@/components/download/DownloadMobileAppsSection';
import { DownloadDesktopSection } from '@/components/download/DownloadDesktopSection';
import { StepsSection } from '@/components/sections/StepsSection';
import { DownloadFinalCTA } from '@/components/download/DownloadFinalCTA';

// Mirrors the "Open / Mark up / Sign" flow from the PDF Reader product
// page - reworded for the Download page numbered-step format.
const PDF_READER_DOWNLOAD_STEPS = [
  {
    title: "Open Any PDF",
    desc: "Open attachments straight from Mail, files from Work Drive, or drag one in - no separate app required.",
  },
  {
    title: "Mark It Up",
    desc: "Highlight, comment, and annotate without leaving the Stack - your notes stay with the file.",
  },
  {
    title: "Sign and Send Back",
    desc: "Add your signature directly in the PDF, then share it back via Mail or Work Drive in one click.",
  },
];

export const metadata: Metadata = {
  title: "Download PDF Reader - iOS, Android, Web & Desktop | Snaarp",
  description:
    'View, mark up, and sign any PDF without leaving the Stack. Open attachments from Mail, annotate, add your signature, and send it back - all in one place.',
};

export default function PdfReaderDownloadPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <DownloadHero
          headlineLines={[
            { text: 'View, Mark Up,' },
            { text: 'and Sign - All in' },
            { text: 'One Place.', accent: true },
          ]}
          subtext="Open any PDF straight from Mail or Work Drive, highlight key sections, leave comments, and add your legally-binding signature - no separate signing tool, no exporting, no extra install."
          primaryCta={{ label: 'Download for android/iOS', href: '#' }}
          secondaryCta={{ label: 'Get started on web', href: '/products/pdf-reader' }}
          webMockup={<PdfReaderWebMockup />}
          phoneMockup={
            <DownloadPhoneFrame size="lg">
              <PdfReaderPhoneScreen />
            </DownloadPhoneFrame>
          }
        />

        <DownloadMobileAppsSection
          heading="Mobile apps"
          subtext="Download the Snaarp PDF Reader app on iOS or Android."
          cards={[
            {
              key: 'ios',
              title: "iOS app",
              desc: "Read, annotate, and sign PDFs on the go - download PDF Reader for iPhone and iPad.",
              platform: 'ios',
              badge: { store: 'apple', href: '#' },
              phoneMockup: (
                <DownloadPhoneFrame size="sm">
                  <PdfReaderPhoneScreen />
                </DownloadPhoneFrame>
              ),
            },
            {
              key: 'android',
              title: "Android App",
              desc: "Your PDFs, always in reach - download PDF Reader for Android.",
              platform: 'android',
              badge: { store: 'google', href: '#' },
              phoneMockup: (
                <DownloadPhoneFrame size="sm">
                  <PdfReaderPhoneScreen />
                </DownloadPhoneFrame>
              ),
            },
          ]}
        />

        {/* Full Desktop section - PDF Reader supports all platforms. */}
        <DownloadDesktopSection
          heading="Desktop app"
          subtext="Read, annotate, and sign PDFs from the convenience of your desktop."
          cards={[
            {
              key: 'windows',
              title: "Windows",
              desc: "A native PDF viewer with annotation tools and signing built in - no browser needed.",
              platform: 'windows',
              cta: { label: 'Download for Windows', href: '#' },
            },
            {
              key: 'macos',
              title: "macOS",
              desc: "Open, mark up, and sign PDFs in a dedicated Mac app connected to the rest of the Stack.",
              platform: 'macos',
              cta: { label: 'Download for macOS', href: '#' },
            },
            {
              key: 'web',
              title: "Web app",
              desc: "No install needed - sign in at snaarp.com to view, annotate, and sign PDFs from any browser.",
              platform: 'web',
              cta: { label: 'Sign in on web', href: '/products/pdf-reader' },
            },
          ]}
        />

        <StepsSection heading="Get started in three simple steps" steps={PDF_READER_DOWNLOAD_STEPS} />

        {/* COPY FLAG: PDF Reader product page describes signing as
            "legally-binding" but this claim is unconfirmed (no eIDAS/ESIGN
            compliance verification). This CTA section says "sign any PDF"
            without asserting legal standing. Does NOT claim advanced
            annotation features (form filling, redaction) beyond what the
            product page already shows. Review before launch. */}
        <DownloadFinalCTA
          eyebrow="Start Reading"
          headline="Stop opening PDFs in a tool that cannot do anything with them."
          subtext="View, highlight, comment, and sign - all inside the Stack, no separate app. Included in every Snaarp plan."
          primaryCta={{ label: 'Get Started for free', href: '#' }}
          secondaryCta={{ label: 'Download PDF Reader', href: '#' }}
        />
      </main>
      <Footer />
    </>
  );
}
