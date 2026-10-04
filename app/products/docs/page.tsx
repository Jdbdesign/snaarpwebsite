import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import DocsPageClient from './DocsPageClient';

export const metadata: Metadata = {
  title: 'Snaarp Doc — From First Thought to Final Document.',
  description:
    'Create, edit and collaborate on beautiful documents with the power of AI. Whether it’s a proposal, report, contract or meeting note, Snaarp Doc helps you turn your ideas into professional documents — faster.',
};

export default function DocsProductPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <DocsPageClient />
      </main>
      <Footer />
    </>
  );
}
