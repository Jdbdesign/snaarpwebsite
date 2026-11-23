import type { Metadata } from 'next';
import { ZeusHeader } from '@/components/ZeusHeader';
import { Footer } from '@/components/Footer';
import ZeusGrowthPageClient from './ZeusGrowthPageClient';

export const metadata: Metadata = {
  title: 'ZEUS Growth Bundle — 500,000 B2B Leads, Validation & Sending Credits',
  description:
    'Get 500,000 B2B leads, 500,000 email validation credits and 500,000 email sending credits in one growth bundle. Everything you need to find, verify and reach your next customers.',
};

export default function ZeusGrowthPage() {
  return (
    <>
      <ZeusHeader />
      <main id="main-content">
        <ZeusGrowthPageClient />
      </main>
      <Footer />
    </>
  );
}
