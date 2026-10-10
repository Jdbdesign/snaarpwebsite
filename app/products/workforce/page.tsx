import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import WorkforcePageClient from './WorkforcePageClient';

export const metadata: Metadata = {
  title: 'Snaarp Workforce — People. Performance. Productivity. All in One Place.',
  description:
    'Run your whole team from one place: people, attendance, leave, time tracking, payroll, recruitment and performance — with AI built in. Snaarp Workforce is the HR app in the Snaarp workspace.',
};

export default function WorkforcePage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <WorkforcePageClient />
      </main>
      <Footer />
    </>
  );
}
