import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import MailPageClient from './MailPageClient';

export const metadata: Metadata = {
  title: 'Snaarp Mail — Premium business email without the enterprise price tag | Snaarp',
  description:
    'yourname@yourcompany.com in minutes — not a support ticket. Set up your domain, invite your team, and every inbox syncs straight into Contacts and Kalender.',
};

export default function MailProductPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <MailPageClient />
      </main>
      <Footer />
    </>
  );
}
