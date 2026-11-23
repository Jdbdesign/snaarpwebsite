import type { Metadata } from 'next';
import { Suspense } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { BlogPageClient } from './BlogPageClient';

export const metadata: Metadata = {
  title: 'Blog & Insights — Snaarp',
  description: 'Deep dives on software consolidation, AI search, revenue operations, and practical security for fast-moving teams.',
};

export default function BlogPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Suspense fallback={<div className="min-h-[60vh] bg-[#FAF8FF]" />}>
          <BlogPageClient />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
