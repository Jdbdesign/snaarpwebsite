import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { NotepadHero } from '@/components/notepad/NotepadHero';
import { NotepadTrustBar } from '@/components/notepad/NotepadTrustBar';
import { NotepadStatsRow } from '@/components/notepad/NotepadStatsRow';
import { NotepadSteps } from '@/components/notepad/NotepadSteps';
import { NotepadBentoGrid } from '@/components/notepad/NotepadBentoGrid';
import { NotepadAltCapture } from '@/components/notepad/NotepadAltCapture';
import { NotepadAltSearch } from '@/components/notepad/NotepadAltSearch';
import { NotepadTestimonials } from '@/components/notepad/NotepadTestimonials';
import { NotepadFAQ } from '@/components/notepad/NotepadFAQ';
import { HomeFinalCTA } from '@/components/HomeFinalCTA';

export const metadata: Metadata = {
  title: 'Notepad — Jot it down. Find it instantly. | Snaarp',
  description:
    "Quick notes for the stuff that doesn't need a whole document — a thought, a checklist, a link to save. Synced across the Stack the moment you type it, so it's there whenever you need it.",
};

export default function NotepadProductPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="notepad-page">
        <NotepadHero />
        <NotepadTrustBar />
        <NotepadStatsRow />
        <NotepadSteps />
        <NotepadBentoGrid />
        <NotepadAltCapture />
        <NotepadAltSearch />
        <NotepadTestimonials />
        <NotepadFAQ />
        <HomeFinalCTA />
      </main>
      <Footer />
    </>
  );
}
