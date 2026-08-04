import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ProjectManagementPage } from '@/components/project-management/ProjectManagementPage';
import './project-management.css';

export const metadata: Metadata = {
  title: 'Project Management — Boards, tasks & timelines for work that moves | Snaarp',
  description:
    'Boards, tasks, and timelines for work that actually moves. See what\u2019s due, who\u2019s on it, and what\u2019s next \u2014 without a separate tool for every team.',
};

export default function Page() {
  return (
    <>
      <Header />
      <main id="main-content" className="pm-page">
        <ProjectManagementPage />
      </main>
      <Footer />
    </>
  );
}
