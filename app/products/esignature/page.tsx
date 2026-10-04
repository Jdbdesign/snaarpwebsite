import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import EsignaturePageClient from './EsignaturePageClient';

export const metadata: Metadata = {
  title: 'Snaarp Sign — Agreements Move Business Forward.',
  description:
    'Send, sign and track agreements with Snaarp Sign. Upload a document, add signers and fields, send it for signature and follow every step — with reminders, templates, a full audit trail and bank-grade security.',
};

export default function EsignatureProductPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <EsignaturePageClient />
      </main>
      <Footer />
    </>
  );
}
