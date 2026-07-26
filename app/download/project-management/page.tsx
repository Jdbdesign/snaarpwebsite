import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { DownloadHero } from '@/components/download/DownloadHero';
import { DownloadPhoneFrame } from '@/components/download/DownloadPhoneFrame';
import { ProjectManagementPhoneScreen } from '@/components/download/project-management/ProjectManagementPhoneScreen';
import { ProjectManagementWebMockup } from '@/components/download/project-management/ProjectManagementWebMockup';
import { DownloadDesktopSection } from '@/components/download/DownloadDesktopSection';
import { StepsSection } from '@/components/sections/StepsSection';
import { DownloadFinalCTA } from '@/components/download/DownloadFinalCTA';

const PM_DOWNLOAD_STEPS = [
  {
    title: "Create a Project",
    desc: "Set up a board, name your sprint, and define columns - your team workflow is ready in seconds.",
  },
  {
    title: "Assign and Prioritize",
    desc: "Add tasks, set priorities, assign owners, and drop due dates - everyone knows what to work on next.",
  },
  {
    title: "Track Progress Live",
    desc: "Drag cards across columns as work moves forward - the board updates for everyone in real time.",
  },
];

export const metadata: Metadata = {
  title: "Download Project Management - Web App | Snaarp",
  description:
    'Sprints, tasks, and tracking that keep your team shipping. Create projects, assign work, and watch progress in real time.',
};

export default function ProjectManagementDownloadPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <DownloadHero
          headlineLines={[
            { text: 'Ship Faster. See' },
            { text: 'Everything. Miss' },
            { text: 'Nothing.', accent: true },
          ]}
          subtext="Kanban boards, sprints, and task tracking that keep your team aligned - assign work, set priorities, and watch progress in real time. No more status update meetings."
          primaryCta={{ label: 'Download for android/iOS', href: '#' }}
          secondaryCta={{ label: 'Get started on web', href: '#' }}
          webMockup={<ProjectManagementWebMockup />}
          phoneMockup={
            <DownloadPhoneFrame size="lg">
              <ProjectManagementPhoneScreen />
            </DownloadPhoneFrame>
          }
        />

        {/* Project Management is Web only. */}
        <DownloadDesktopSection
          eyebrow="Web app"
          heading="Web app"
          subtext="Access Project Management from your browser - no install required."
          cards={[
            {
              key: 'web',
              title: "Web app",
              desc: "Sign in at snaarp.com to manage sprints, track tasks, and review progress - works alongside Teams and Document.",
              platform: 'web',
              cta: { label: 'Sign in on web', href: '#' },
            },
          ]}
        />

        <StepsSection heading="Get started in three simple steps" steps={PM_DOWNLOAD_STEPS} />

        <DownloadFinalCTA
          eyebrow="Start Shipping"
          headline="Stop running status update meetings."
          subtext="A board that shows everyone where work stands - assign, prioritize, and track without the overhead. Built into the Snaarp Stack."
          primaryCta={{ label: 'Get Started for free', href: '#' }}
          secondaryCta={{ label: 'Open Projects', href: '#' }}
        />
      </main>
      <Footer />
    </>
  );
}
