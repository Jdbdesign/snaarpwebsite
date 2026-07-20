import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { SheetsHero } from '@/components/sheets/SheetsHero';
import { SheetsTrustBar } from '@/components/sheets/SheetsTrustBar';
import { SheetsStatsRow } from '@/components/sheets/SheetsStatsRow';
import { SheetsSteps } from '@/components/sheets/SheetsSteps';
import { SheetsBentoGrid } from '@/components/sheets/SheetsBentoGrid';
import { SheetsAltCSV } from '@/components/sheets/SheetsAltCSV';
import { SheetsAltCollab } from '@/components/sheets/SheetsAltCollab';
import { SheetsFAQ } from '@/components/sheets/SheetsFAQ';
import { HomeFinalCTA } from '@/components/HomeFinalCTA';

export const metadata: Metadata = {
  title: 'Sheets — Spreadsheets that talk to your business | Snaarp',
  description:
    'Build a sheet, pull in real numbers from CRM, and share it with your team — no exporting to CSV and re-uploading somewhere else.',
};

export default function SheetsProductPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="sheets-page">
        <SheetsHero />
        <SheetsTrustBar />
        <SheetsStatsRow />
        <SheetsSteps />
        <SheetsBentoGrid />
        <SheetsAltCSV />
        <SheetsAltCollab />
        <SheetsFAQ />
        <HomeFinalCTA />
      </main>
      <Footer />
    </>
  );
}
