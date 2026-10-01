import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import TeamsPageClient from './TeamsPageClient';

export const metadata: Metadata = {
  title: 'Snaarp Teams — Where Your Team Gets Work Done. | Snaarp',
  description:
    'One professional place to communicate, collaborate and keep work moving. Channels, direct messages, file sharing, voice & video and searchable conversations — built for business.',
};

export default function TeamsProductPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <TeamsPageClient />
      </main>
      <Footer />
    </>
  );
}
