'use client';

import React from 'react';
import Link from 'next/link';
import { Play, ArrowLeft, Sparkles } from 'lucide-react';

interface DemosViewProps {
  initialDemoApp?: string;
  onOpenTrialModal?: (mode: 'trial' | 'demo') => void;
}

export const DemosView: React.FC<DemosViewProps> = () => {
  return (
    <div className="relative min-h-[70vh] flex items-center justify-center px-6 py-24 bg-gradient-to-b from-violet-50/40 via-white to-white overflow-hidden">
      {/* Decorative ambient background blur */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[360px] bg-violet-400/10 rounded-full blur-3xl"
      />

      <div className="relative mx-auto max-w-2xl text-center">
        {/* Category / Section tag */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-100/80 border border-violet-200/60 text-xs sm:text-[13px] font-semibold text-violet-700 tracking-wide uppercase">
          <Sparkles className="w-3.5 h-3.5 text-violet-600" />
          <span>Video Tutorials & Demos</span>
        </div>

        {/* Video / Demo Icon container */}
        <div className="mt-8 mx-auto w-20 h-20 sm:w-24 sm:h-24 rounded-3xl bg-white border border-violet-100 shadow-xl shadow-violet-500/10 flex items-center justify-center group transition-transform duration-300 hover:scale-105">
          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center text-white shadow-md shadow-violet-500/30">
            <Play className="w-6 h-6 sm:w-7 sm:h-7 fill-white translate-x-0.5" />
          </div>
        </div>

        {/* Headline */}
        <h1 className="mt-8 text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
          Demo will appear here
        </h1>

        {/* Supporting description */}
        <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl mx-auto">
          We are setting up interactive product walkthroughs and video tutorials for this page. Check back soon, or explore our other resources.
        </p>

        {/* Action buttons */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/resources"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-violet-700 text-white font-semibold text-sm sm:text-base hover:bg-violet-800 transition-colors shadow-sm shadow-violet-500/20"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Resources Hub</span>
          </Link>
          <Link
            href="/resources/webinars"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white border border-slate-200 text-slate-700 font-semibold text-sm sm:text-base hover:bg-slate-50 hover:border-slate-300 transition-colors"
          >
            <span>Explore Webinars</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
