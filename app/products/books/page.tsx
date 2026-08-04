import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { BooksPage } from '@/components/books/BooksPage';
import './books.css';

export const metadata: Metadata = {
  title: 'Books — Invoicing & bookkeeping without the complexity | Snaarp',
  description:
    'Invoicing and bookkeeping that don\u2019t need an accounting degree to run. Send professional invoices, track what\u2019s owed, and keep a clean set of books \u2014 synced with the rest of the Stack.',
};

export default function Page() {
  return (
    <>
      <Header />
      <main id="main-content" className="books-page">
        <BooksPage />
      </main>
      <Footer />
    </>
  );
}
