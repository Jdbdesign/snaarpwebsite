import type { Metadata } from 'next';
import { Suspense } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { DemosPageClient } from './DemosPageClient';

export const metadata: Metadata = {
  title: 'Video Tutorials & Demos — Snaarp',
  description: 'Interactive product tours and browser sandboxes for Snaarp CRM, Mail, Books, Meet, Drive, and Lock.',
};

export default function DemosPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Suspense fallback={<div className="min-h-[60vh] bg-white" />}>
          <DemosPageClient />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
