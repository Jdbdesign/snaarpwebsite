import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { HomeFinalCTA } from '@/components/HomeFinalCTA';
import { KalenderHero } from '@/components/kalender/KalenderHero';
import { KalenderTrustBar } from '@/components/kalender/KalenderTrustBar';
import { KalenderScheduling } from '@/components/kalender/KalenderScheduling';
import { KalenderMasterSchedule } from '@/components/kalender/KalenderMasterSchedule';
import { KalenderIntegrations } from '@/components/kalender/KalenderIntegrations';

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

        <HomeFinalCTA />
      </main>
      <Footer />
    </>
  );
}
