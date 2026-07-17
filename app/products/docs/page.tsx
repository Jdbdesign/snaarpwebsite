import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { DocsHero } from '@/components/docs/DocsHero';
import { DocsTrustBar } from '@/components/docs/DocsTrustBar';
import { DocsStatsRow } from '@/components/docs/DocsStatsRow';
import { DocsSteps } from '@/components/docs/DocsSteps';
import { DocsBentoGrid } from '@/components/docs/DocsBentoGrid';
import { DocsAltCollaborate } from '@/components/docs/DocsAltCollaborate';
import { DocsAltVersionHistory } from '@/components/docs/DocsAltVersionHistory';
import { DocsTestimonials } from '@/components/docs/DocsTestimonials';
import { DocsFAQ } from '@/components/docs/DocsFAQ';
import { DocsFinalCTA } from '@/components/docs/DocsFinalCTA';

export const metadata: Metadata = {
  title: 'Document — Write together. See it happen live. | Snaarp',
  description:
    'Real-time collaborative docs that live right next to everything else your team uses. No exporting, no emailing versions back and forth — just open a doc and start writing, together.',
};

export default function DocsProductPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="docs-page">
        <DocsHero />
        <DocsTrustBar />
        <DocsStatsRow />
        <DocsSteps />
        <DocsBentoGrid />
        <DocsAltCollaborate />
        <DocsAltVersionHistory />
        <DocsTestimonials />
        <DocsFAQ />
        <DocsFinalCTA />
      </main>
      <Footer />
    </>
  );
}
