import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import WorkDrivePageClient from './WorkDrivePageClient';

export const metadata: Metadata = {
  title: 'Snaarp Drive — Everything Your Business Creates. One Place to Keep It.',
  description:
    'Store, organise, share and access all your files across the Snaarp ecosystem. From everyday documents to large media files — and a secure data room for sensitive information and due diligence.',
};

export default function WorkDriveProductPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <WorkDrivePageClient />
      </main>
      <Footer />
    </>
  );
}
