import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { DocSignPage } from '@/components/doc-sign/DocSignPage';

export const metadata: Metadata = {
  title: 'Doc Sign — Internal Approvals, Routed Not Chased | Snaarp',
  description:
    'Internal document approval workflows that route themselves. Create a request, assign approvers at each stage, and track every signature to completion.',
};

export default function DocSignProductPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <DocSignPage />
      </main>
      <Footer />
    </>
  );
}
