import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import PDFReaderPageClient from './PDFReaderPageClient';

export const metadata: Metadata = {
  title: 'Snaarp PDF — Everything You Need to Do With a PDF. In One Place.',
  description:
    'Edit, convert, sign, redact, translate and more — all in a single, powerful PDF workspace. With AI by your side, Snaarp PDF helps you get things done faster, safer and simpler.',
};

export default function PDFReaderPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <PDFReaderPageClient />
      </main>
      <Footer />
    </>
  );
}
