import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ResourcesOverview } from '@/components/resources/ResourcesOverview';

export const metadata: Metadata = {
  title: 'Resources Hub — Snaarp',
  description: 'Guides, tutorials, templates, and real-world insights to help your team get the most out of Snaarp.',
};

export default function ResourcesPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <ResourcesOverview />
      </main>
      <Footer />
    </>
  );
}
