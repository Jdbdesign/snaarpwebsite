import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import MeetPageClient from './MeetPageClient';

export const metadata: Metadata = {
  title: 'Snaarp Meet — Meet Without Limits.',
  description:
    'Crystal-clear video meetings with no time limits. Meet your team, present to clients, run training or close deals — all from one simple platform with HD video, screen sharing and recording.',
};

export default function MeetPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <MeetPageClient />
      </main>
      <Footer />
    </>
  );
}
