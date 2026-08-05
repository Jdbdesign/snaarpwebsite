import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { AcctSoftwarePage } from '@/components/accounting-software/AcctSoftwarePage';
import './accounting-software.css';

export const metadata: Metadata = {
  title: 'Accounting Software — Full accounting for growing teams | Snaarp',
  description:
    'Tax, payroll, and financial statements — the accounting your business needs once it outgrows simple invoicing. Everything reconciles automatically.',
};

export default function Page() {
  return (
    <>
      <Header />
      <main id="main-content" className="acct-page">
        <AcctSoftwarePage />
      </main>
      <Footer />
    </>
  );
}
