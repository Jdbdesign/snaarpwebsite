import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { EsignatureHero } from '@/components/esignature/EsignatureHero';
import { EsignatureTrustBar } from '@/components/esignature/EsignatureTrustBar';
import { EsignatureStatsRow } from '@/components/esignature/EsignatureStatsRow';
import { EsignatureSteps } from '@/components/esignature/EsignatureSteps';
import { EsignatureBentoGrid } from '@/components/esignature/EsignatureBentoGrid';
import { EsignatureAltTemplates } from '@/components/esignature/EsignatureAltTemplates';
import { EsignatureAltTracking } from '@/components/esignature/EsignatureAltTracking';
import { EsignatureTestimonials } from '@/components/esignature/EsignatureTestimonials';
import { EsignatureFAQ } from '@/components/esignature/EsignatureFAQ';
import { HomeFinalCTA } from '@/components/HomeFinalCTA';

export const metadata: Metadata = {
  title: 'eSignature — Send it out. Get it signed. | Snaarp',
  description:
    'Send any document out for signature and track it to done — templates for the paperwork you send every week, multi-signer routing, and a tamper-evident audit trail on every signed copy.',
};

export default function EsignatureProductPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="esignature-page">
        <EsignatureHero />
        <EsignatureTrustBar />
        <EsignatureStatsRow />
        <EsignatureSteps />
        <EsignatureBentoGrid />
        <EsignatureAltTemplates />
        <EsignatureAltTracking />
        <EsignatureTestimonials />
        <EsignatureFAQ />
        <HomeFinalCTA />
      </main>
      <Footer />
    </>
  );
}
