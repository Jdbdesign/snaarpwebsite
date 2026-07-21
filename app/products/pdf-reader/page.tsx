import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { PdfReaderHero } from '@/components/pdf-reader/PdfReaderHero';
import { PdfReaderTrustBar } from '@/components/pdf-reader/PdfReaderTrustBar';
import { PdfReaderStatsRow } from '@/components/pdf-reader/PdfReaderStatsRow';
import { PdfReaderSteps } from '@/components/pdf-reader/PdfReaderSteps';
import { PdfReaderBentoGrid } from '@/components/pdf-reader/PdfReaderBentoGrid';
import { PdfReaderToolsTabs } from '@/components/pdf-reader/PdfReaderToolsTabs';
import { PdfReaderAltAnnotate } from '@/components/pdf-reader/PdfReaderAltAnnotate';
import { PdfReaderAltSigning } from '@/components/pdf-reader/PdfReaderAltSigning';
import { PdfReaderTestimonials } from '@/components/pdf-reader/PdfReaderTestimonials';
import { PdfReaderFAQ } from '@/components/pdf-reader/PdfReaderFAQ';
import { HomeFinalCTA } from '@/components/HomeFinalCTA';

export const metadata: Metadata = {
  title: 'PDF Reader — One PDF Reader, every signature sorted | Snaarp',
  description:
    'View, mark up, and legally sign any PDF without leaving the Stack. Open attachments straight from Mail, files from Work Drive, or drag one in — no install, no separate signing tool.',
};

export default function PdfReaderProductPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="pdf-reader-page">
        <PdfReaderHero />
        <PdfReaderTrustBar />
        <PdfReaderStatsRow />
        <PdfReaderSteps />
        {/* <PdfReaderBentoGrid /> */}
        <PdfReaderToolsTabs />
        <PdfReaderAltAnnotate />
        <PdfReaderAltSigning />
        <PdfReaderTestimonials />
        <PdfReaderFAQ />
        <HomeFinalCTA />
      </main>
      <Footer />
    </>
  );
}
