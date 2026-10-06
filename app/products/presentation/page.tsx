import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import PresentationPageClient from './PresentationPageClient';

export const metadata: Metadata = {
  title: 'Snaarp Slides — Turn Your Ideas Into Presentations. Faster.',
  description:
    'Create, design and present with AI. Start from a prompt or a template, build polished decks in minutes, and collaborate with your team in real time — all in Snaarp Slides.',
};

export default function PresentationPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <PresentationPageClient />
      </main>
      <Footer />
    </>
  );
}
