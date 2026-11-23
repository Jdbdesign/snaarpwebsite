import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WebinarsView } from '@/components/resources/WebinarsView';

export const metadata: Metadata = {
  title: 'Webinars & Live Clinics — Snaarp',
  description: 'Join live implementation clinics with Snaarp platform architects or stream recorded masterclasses at your own pace.',
};

export default function WebinarsPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <WebinarsView />
      </main>
      <Footer />
    </>
  );
}
