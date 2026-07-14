import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { FinalCTA } from '@/components/FinalCTA';
import { KalenderHero } from '@/components/kalender/KalenderHero';
import { KalenderTrustBar } from '@/components/kalender/KalenderTrustBar';
import { KalenderScheduling } from '@/components/kalender/KalenderScheduling';
import { KalenderMasterSchedule } from '@/components/kalender/KalenderMasterSchedule';
import { KalenderIntegrations } from '@/components/kalender/KalenderIntegrations';
import { Price } from '@/components/currency/Price';

export const metadata: Metadata = {
  title: 'Kalender | Snaarp',
  description: 'Shared calendars and booking links that keep every meeting in sync.',
};

export default function KalenderProductPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <KalenderHero />
        <KalenderTrustBar />
        <KalenderScheduling />
        <KalenderMasterSchedule />
        <KalenderIntegrations />

        <FinalCTA
          heading="Every meeting, on time. Every app included."
          copy="No double-bookings, no back-and-forth emails, no separate scheduling tool to pay for. Just one Stack, running your whole business."
          buttonLabel={<>Start the Stack for <Price amount={1} /></>}
        />
      </main>
      <Footer />
    </>
  );
}
