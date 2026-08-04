import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { DigitalIdCardPage } from '@/components/digital-id-card/DigitalIdCardPage';
import './digital-id-card.css';

export const metadata: Metadata = {
  title: 'Digital ID Card — Verified employee identity, in your pocket | Snaarp',
  description:
    'A digital employee ID that doubles as a verified identity — tap to unlock doors, sign into apps, and prove who you are, all from your phone.',
};

export default function Page() {
  return (
    <>
      <Header />
      <main id="main-content" className="id-card-page">
        <DigitalIdCardPage />
      </main>
      <Footer />
    </>
  );
}
