import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { AIComposePage } from '@/components/ai-compose/AIComposePage';

export const metadata: Metadata = {
  title: 'AI Compose | Snaarp',
  description: 'Draft emails, replies, and follow-ups in seconds with AI Compose, built into the Snaarp Stack.',
};

export default function AIComposeProductPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <AIComposePage />
      </main>
      <Footer />
    </>
  );
}
