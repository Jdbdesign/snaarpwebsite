import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import CrmPageClient from './CrmPageClient';

export const metadata: Metadata = {
  title: 'Snaarp CRM — Turn Every Lead Into an Opportunity.',
  description:
    'The all-in-one CRM to capture leads from any channel, engage customers, automate follow-ups and close more deals — faster. Pipelines, forecasting, web forms and automation in one place.',
};

export default function Page() {
  return (
    <>
      <Header />
      <main id="main-content">
        <CrmPageClient />
      </main>
      <Footer />
    </>
  );
}
