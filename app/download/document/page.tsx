import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { DownloadHero } from '@/components/download/DownloadHero';
import { DownloadPhoneFrame } from '@/components/download/DownloadPhoneFrame';
import { DocumentPhoneScreen } from '@/components/download/document/DocumentPhoneScreen';
import { DocumentWebMockup } from '@/components/download/document/DocumentWebMockup';
import { DownloadMobileAppsSection } from '@/components/download/DownloadMobileAppsSection';
import { DownloadDesktopSection } from '@/components/download/DownloadDesktopSection';
import { StepsSection } from '@/components/sections/StepsSection';
import { DownloadFinalCTA } from '@/components/download/DownloadFinalCTA';

// Mirrors the "Create / Invite / Edit together" flow from the Document
// product page - reworded for the Download page numbered-step format.
const DOCUMENT_DOWNLOAD_STEPS = [
  {
    title: "Create a Doc",
    desc: "Start from blank or pick a template - your doc auto-saves to Work Drive and stays connected to the rest of the Stack.",
  },
  {
    title: "Invite Your Team",
    desc: "Share with a link and your collaborators can jump in immediately - no account required to view.",
  },
  {
    title: "Edit Together, Live",
    desc: "See each other's cursors, leave comments in context, and watch the doc come together in real time.",
  },
];

export const metadata: Metadata = {
  title: "Download Document - iOS, Android, Web & Desktop | Snaarp",
  description:
    'Real-time collaborative docs that live alongside Mail, Teams, and the rest of the Snaarp Stack - write together, see every edit as it happens, and never email a version back and forth again.',
};

export default function DocumentDownloadPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <DownloadHero
          headlineLines={[
            { text: 'Write Together,' },
            { text: 'See Every Edit' },
            { text: 'As It Happens.', accent: true },
          ]}
          subtext="Real-time collaborative docs that live alongside Mail, Teams, and the rest of the Stack - no exporting, no emailing versions back and forth. Write together and watch the doc come together live."
          primaryCta={{ label: 'Download for android/iOS', href: '#' }}
          secondaryCta={{ label: 'Get started on web', href: '/products/docs' }}
          webMockup={<DocumentWebMockup />}
          phoneMockup={
            <DownloadPhoneFrame size="lg">
              <DocumentPhoneScreen />
            </DownloadPhoneFrame>
          }
        />

        <DownloadMobileAppsSection
          heading="Mobile apps"
          subtext="Download the Snaarp Document app on iOS or Android."
          cards={[
            {
              key: 'ios',
              title: "iOS app",
              desc: "Review, comment, and edit docs on the go - download Document for iPhone and iPad.",
              platform: 'ios',
              badge: { store: 'apple', href: '#' },
              phoneMockup: (
                <DownloadPhoneFrame size="sm">
                  <DocumentPhoneScreen />
                </DownloadPhoneFrame>
              ),
            },
            {
              key: 'android',
              title: "Android App",
              desc: "Keep your docs in your pocket - download Document for Android.",
              platform: 'android',
              badge: { store: 'google', href: '#' },
              phoneMockup: (
                <DownloadPhoneFrame size="sm">
                  <DocumentPhoneScreen />
                </DownloadPhoneFrame>
              ),
            },
          ]}
        />

        {/* Full Desktop section - Document supports all platforms (iOS,
            Android, Windows, macOS, Web), matching the full set. Placeholder
            href="#" for installers that do not exist yet. */}
        <DownloadDesktopSection
          heading="Desktop app"
          subtext="Write and collaborate from the convenience of your desktop."
          cards={[
            {
              key: 'windows',
              title: "Windows",
              desc: "A native editor with offline access and real-time sync when you are back online.",
              platform: 'windows',
              cta: { label: 'Download for Windows', href: '#' },
            },
            {
              key: 'macos',
              title: "macOS",
              desc: "Full collaborative editing in a dedicated Mac app - no browser tab required.",
              platform: 'macos',
              cta: { label: 'Download for macOS', href: '#' },
            },
            {
              key: 'web',
              title: "Web app",
              desc: "No install needed - sign in at snaarp.com to create, edit, and collaborate from any browser.",
              platform: 'web',
              cta: { label: 'Sign in on web', href: '/products/docs' },
            },
          ]}
        />

        <StepsSection heading="Get started in three simple steps" steps={DOCUMENT_DOWNLOAD_STEPS} />

        {/* COPY FLAG: Document product page flags open items around the
            exact permission model (viewers/commenters vs. editors),
            version-history retention depth ("unlimited"), the real existence
            of a template library, and offline access. This CTA section's
            copy stays within confirmed bounds - says "write together in real
            time" (confirmed), does NOT claim unlimited version history, does
            NOT assert a template library as live, and does NOT promise
            offline access beyond what the product page already states.
            Review before launch. */}
        <DownloadFinalCTA
          eyebrow="Start Writing"
          headline="Stop emailing versions back and forth."
          subtext="Write together in real time, leave comments in context, and let the doc do the work of keeping everyone on the same page - included in every Snaarp plan."
          primaryCta={{ label: 'Get Started for free', href: '#' }}
          secondaryCta={{ label: 'Download Document', href: '#' }}
        />
      </main>
      <Footer />
    </>
  );
}
