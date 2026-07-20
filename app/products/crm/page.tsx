import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { CrmHero } from '@/components/crm/CrmHero';
import { CrmTrustBar } from '@/components/crm/CrmTrustBar';
import { CrmStatsRow } from '@/components/crm/CrmStatsRow';
import { CrmSteps } from '@/components/crm/CrmSteps';
import { CrmBentoGrid } from '@/components/crm/CrmBentoGrid';
import { CrmAltPipeline } from '@/components/crm/CrmAltPipeline';
import { CrmAltLogging } from '@/components/crm/CrmAltLogging';
import { CrmTestimonials } from '@/components/crm/CrmTestimonials';
import { CrmFAQ } from '@/components/crm/CrmFAQ';
import { HomeFinalCTA } from '@/components/HomeFinalCTA';

export const metadata: Metadata = {
  title: 'CRM — Know every deal. See what’s next. | Snaarp',
  description:
    'Contacts, pipeline, and reporting — without the enterprise setup. Every deal, every conversation, and every next step in one view, synced with the rest of the Stack.',
};

export default function CrmProductPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="crm-page">
        <CrmHero />
        <CrmTrustBar />
        <CrmStatsRow />
        <CrmSteps />
        <CrmBentoGrid />
        <CrmAltPipeline />
        <CrmAltLogging />
        <CrmTestimonials />
        <CrmFAQ />
        <HomeFinalCTA />
      </main>
      <Footer />
    </>
  );
}
