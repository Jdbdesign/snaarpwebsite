import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import KalenderPageClient from './KalenderPageClient';

export const metadata: Metadata = {
  title: 'SnaarpMe — Schedule. Meet. Get Things Done. | Snaarp',
  description:
    'Share one link, let them choose a time, and meet instantly. SnaarpMe is an appointment scheduling platform with unlimited video meetings built in through Snaarp Meet.',
};

export default function KalenderProductPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <KalenderPageClient />
      </main>
      <Footer />
    </>
  );
}
