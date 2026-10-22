import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import Snaarp360PageClient from './Snaarp360PageClient';

export const metadata: Metadata = {
  title: 'Snaarp 360 — One Subscription. All 20+ Business Apps.',
  description:
    'Replace multiple software subscriptions with one all-in-one business platform. Email, meetings, docs, CRM, projects, HR and more — 20+ apps from one simple subscription. Start a 14-day free trial.',
};

export default function Snaarp360Page() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Snaarp360PageClient />
      </main>
      <Footer />
    </>
  );
}
