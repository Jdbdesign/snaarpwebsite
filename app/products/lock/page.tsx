import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import LockPageClient from './LockPageClient';

export const metadata: Metadata = {
  title: 'Snaarp Lock — Stop Remembering Passwords. Start Protecting Them. | Snaarp',
  description:
    'Store, generate, autofill and share your passwords — all in one secure place. Snaarp Lock keeps your digital life and business credentials safe, organised and always within reach.',
};

export default function LockProductPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <LockPageClient />
      </main>
      <Footer />
    </>
  );
}
