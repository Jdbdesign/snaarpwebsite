import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import SheetsPageClient from './SheetsPageClient';

export const metadata: Metadata = {
  title: 'Snaarp Sheet — Your Data Has Answers. Just Ask. | Snaarp',
  description:
    'Build powerful spreadsheets without being a spreadsheet expert. Track budgets, analyse sales, manage projects and turn your data into decisions — with the power of AI.',
};

export default function SheetsProductPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <SheetsPageClient />
      </main>
      <Footer />
    </>
  );
}
