import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { MeetHero } from '@/components/meet/MeetHero';
import { MeetWhyBento } from '@/components/meet/MeetWhyBento';
import { MeetFeatureGrid } from '@/components/meet/MeetFeatureGrid';
import { MeetHowItWorks } from '@/components/meet/MeetHowItWorks';
import { MeetFAQ } from '@/components/meet/MeetFAQ';
import { TrustLogoBar } from '@/components/sections/TrustLogoBar';
import { FinalCTA } from '@/components/FinalCTA';
import { Price } from '@/components/currency/Price';

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

        <FinalCTA
          heading="Meetings that start on time. Every app included."
          copy="No downloads, no friction, no separate video tool to pay for. Just one Stack, running your whole business."
          buttonLabel={<>Start the Stack for <Price amount={1} /></>}
        />
      </main>
      <Footer />
    </>
  );
}
