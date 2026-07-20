import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { MeetHero } from '@/components/meet/MeetHero';
import { MeetWhyBento } from '@/components/meet/MeetWhyBento';
import { MeetFeatureGrid } from '@/components/meet/MeetFeatureGrid';
import { MeetHowItWorks } from '@/components/meet/MeetHowItWorks';
import { MeetFAQ } from '@/components/meet/MeetFAQ';
import { TrustLogoBar } from '@/components/sections/TrustLogoBar';
import { HomeFinalCTA } from '@/components/HomeFinalCTA';

export const metadata: Metadata = {
  title: 'Meet | Snaarp',
  description: 'HD video calls, screen sharing, and recording — all in your browser.',
};

export default function MeetProductPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <MeetHero />
        <TrustLogoBar
          revealGroup="meet-trust"
          line={
            <>
              Trusted by more than <strong>100,000</strong> teams in the world
            </>
          }
        />
        <MeetWhyBento />
        <MeetFeatureGrid />
        <MeetHowItWorks />
        <MeetFAQ />

        <HomeFinalCTA />
      </main>
      <Footer />
    </>
  );
}
