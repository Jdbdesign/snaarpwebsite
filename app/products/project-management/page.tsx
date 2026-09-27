import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import ProjectsPageClient from './ProjectsPageClient';

export const metadata: Metadata = {
  title: 'Snaarp Projects — Plan Smarter. Work Together. Deliver Faster.',
  description:
    'Bring your projects, people, tasks, deadlines and files together in one powerful workspace. Snaarp Projects helps teams get more done — on time, within budget, and with less chaos.',
};

export default function Page() {
  return (
    <>
      <Header />
      <main id="main-content">
        <ProjectsPageClient />
      </main>
      <Footer />
    </>
  );
}
