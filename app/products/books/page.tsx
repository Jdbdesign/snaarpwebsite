import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import BooksPageClient from './BooksPageClient';

export const metadata: Metadata = {
  title: 'Snaarp Books — Less Bookkeeping. More Business.',
  description:
    'Everything your business needs to manage money, customers, invoices, expenses, banking, taxes and reports — all in one powerful platform.',
};

export default function BooksPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <BooksPageClient />
      </main>
      <Footer />
    </>
  );
}
