import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WorkDrivePage } from '@/components/work-drive/WorkDrivePage';

export const metadata: Metadata = {
  title: 'Work Drive — One shared drive for every team file | Snaarp',
  description: 'Store, share, and find every team file in one connected work drive, already linked to Mail, Teams, and the rest of the Snaarp Stack.',
};

export default function WorkDriveProductPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <WorkDrivePage />
      </main>
      <Footer />
    </>
  );
}
