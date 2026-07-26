import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { DownloadHero } from '@/components/download/DownloadHero';
import { DownloadPhoneFrame } from '@/components/download/DownloadPhoneFrame';
import { ElearnPhoneScreen } from '@/components/download/elearn/ElearnPhoneScreen';
import { ElearnWebMockup } from '@/components/download/elearn/ElearnWebMockup';
import { DownloadMobileAppsSection } from '@/components/download/DownloadMobileAppsSection';
import { DownloadDesktopSection } from '@/components/download/DownloadDesktopSection';
import { StepsSection } from '@/components/sections/StepsSection';
import { DownloadFinalCTA } from '@/components/download/DownloadFinalCTA';

const ELEARN_DOWNLOAD_STEPS = [
  {
    title: "Build a Course",
    desc: "Add lessons, upload videos, and structure modules - your training content is live in minutes, not weeks.",
  },
  {
    title: "Assign to Your Team",
    desc: "Enroll individuals, teams, or the whole company - they get notified and can start learning immediately.",
  },
  {
    title: "Track Completion",
    desc: "See who finished, who has stuck, and who hasn't started - completion reports update in real time.",
  },
];

export const metadata: Metadata = {
  title: "Download Elearn - iOS, Android & Web | Snaarp",
  description:
    'Team training and onboarding courses that track themselves. Build courses, assign to your team, and see who has learned what.',
};

export default function ElearnDownloadPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <DownloadHero
          headlineLines={[
            { text: 'Train Your Team.' },
            { text: 'Track Who' },
            { text: 'Learned What.', accent: true },
          ]}
          subtext="Build training courses with videos, quizzes, and structured modules - assign them to your team and track completion in real time. Onboarding, compliance, and upskilling in one place."
          primaryCta={{ label: 'Download for android/iOS', href: '#' }}
          secondaryCta={{ label: 'Get started on web', href: '#' }}
          webMockup={<ElearnWebMockup />}
          phoneMockup={
            <DownloadPhoneFrame size="lg">
              <ElearnPhoneScreen />
            </DownloadPhoneFrame>
          }
        />

        <DownloadMobileAppsSection
          heading="Mobile apps"
          subtext="Download the Snaarp Elearn app on iOS or Android."
          cards={[
            {
              key: 'ios',
              title: "iOS app",
              desc: "Complete training on the go and pick up where you left off - download Elearn for iPhone and iPad.",
              platform: 'ios',
              badge: { store: 'apple', href: '#' },
              phoneMockup: (
                <DownloadPhoneFrame size="sm">
                  <ElearnPhoneScreen />
                </DownloadPhoneFrame>
              ),
            },
            {
              key: 'android',
              title: "Android App",
              desc: "Learn from anywhere, anytime - download Elearn for Android.",
              platform: 'android',
              badge: { store: 'google', href: '#' },
              phoneMockup: (
                <DownloadPhoneFrame size="sm">
                  <ElearnPhoneScreen />
                </DownloadPhoneFrame>
              ),
            },
          ]}
        />

        <DownloadDesktopSection
          eyebrow="Web app"
          heading="Web app"
          subtext="Get the full Elearn experience from your browser."
          cards={[
            {
              key: 'web',
              title: "Web app",
              desc: "No install needed - sign in at snaarp.com to build courses, enroll learners, and track completion from any browser.",
              platform: 'web',
              cta: { label: 'Sign in on web', href: '#' },
            },
          ]}
        />

        <StepsSection heading="Get started in three simple steps" steps={ELEARN_DOWNLOAD_STEPS} />

        <DownloadFinalCTA
          eyebrow="Start Teaching"
          headline="Stop losing new hires in a PDF handbook."
          subtext="Interactive courses with videos, progress tracking, and completion reports - onboarding and training that actually sticks. Built into the Snaarp Stack."
          primaryCta={{ label: 'Get Started for free', href: '#' }}
          secondaryCta={{ label: 'Open Elearn', href: '#' }}
        />
      </main>
      <Footer />
    </>
  );
}
