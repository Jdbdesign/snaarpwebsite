import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ELearnPage } from '@/components/elearn/ELearnPage';
import './elearn.css';

export const metadata: Metadata = {
  title: 'ELearn — Team training & onboarding that tracks itself | Snaarp',
  description:
    'Build training courses, run onboarding checklists, and keep compliance on track — all in one place. See exactly who\u2019s completed what, without chasing spreadsheets.',
};

export default function Page() {
  return (
    <>
      <Header />
      <main id="main-content" className="elearn-page">
        <ELearnPage />
      </main>
      <Footer />
    </>
  );
}
