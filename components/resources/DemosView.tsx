'use client';

import React, { useMemo, useState } from 'react';
import { ArrowRight, CheckCircle2, PlayCircle } from 'lucide-react';
import { PRODUCT_DEMOS } from './resourcesData';
import { DemoCategory } from './types';
import { InteractiveSandbox, SandboxAppId } from './InteractiveSandbox';
import { TrialModal } from './TrialModal';

interface DemosViewProps {
  initialDemoApp?: SandboxAppId;
  onOpenTrialModal?: (mode: 'trial' | 'demo') => void;
}

const DEMO_CATEGORIES: DemoCategory[] = [
  'All',
  'CRM & Sales',
  'Communication',
  'Docs & Storage',
  'Finance & HR',
  'Security',
];

export const DemosView: React.FC<DemosViewProps> = ({
  initialDemoApp = 'crm',
  onOpenTrialModal,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<DemoCategory>('All');
  const [activeApp, setActiveApp] = useState<SandboxAppId>(initialDemoApp);
  const [sandboxKey, setSandboxKey] = useState(0);
  const [localModalMode, setLocalModalMode] = useState<'trial' | 'demo' | null>(null);

  const handleOpenModal = (mode: 'trial' | 'demo') => {
    if (onOpenTrialModal) {
      onOpenTrialModal(mode);
    } else {
      setLocalModalMode(mode);
    }
  };

  const filteredDemos = useMemo(() => {
    if (selectedCategory === 'All') return PRODUCT_DEMOS;
    return PRODUCT_DEMOS.filter((d) => d.category === selectedCategory);
  }, [selectedCategory]);

  const activeDemo =
    PRODUCT_DEMOS.find((d) => d.appId === activeApp) ?? PRODUCT_DEMOS[0];

  const handleSelectTour = (appId: SandboxAppId) => {
    setActiveApp(appId);
    setSandboxKey((k) => k + 1);
  };

  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-10 py-12">
      {/* Header */}
      <div className="flex flex-col justify-between gap-6 border-b border-slate-200 pb-8 md:flex-row md:items-end">
        <div>
          <p className="text-xs sm:text-[13px] font-bold tracking-[0.14em] text-violet-700 uppercase">
            Interactive Product Tours
          </p>
          <h1 className="mt-3 text-[38px] sm:text-[48px] md:text-[54px] lg:text-[62px] xl:text-[68px] font-extrabold leading-[1.03] tracking-[-0.04em] text-slate-900">
            Test Snaarp's 20+ Apps Live
          </h1>
          <p className="mt-3 max-w-2xl text-[15px] sm:text-[16.5px] lg:text-[18px] leading-[1.55] text-slate-600">
            Select a product workflow below to load its interactive browser sandbox and guided tour steps—no sign-up needed.
          </p>
        </div>
        <button
          type="button"
          onClick={() => handleOpenModal('demo')}
          className="inline-flex items-center gap-2 rounded-xl bg-violet-700 px-6 py-3.5 text-sm sm:text-[15px] font-semibold text-white hover:bg-violet-800 transition-colors whitespace-nowrap shrink-0 cursor-pointer shadow-sm hover:shadow"
        >
          <span>Request Live Team Walkthrough</span>
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>

      {/* Category Filter */}
      <div className="mt-6 flex flex-wrap gap-2">
        {DEMO_CATEGORIES.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setSelectedCategory(cat)}
            className={`rounded-xl px-4 py-2.5 text-xs sm:text-[13.5px] font-semibold transition-all whitespace-nowrap shrink-0 cursor-pointer ${
              selectedCategory === cat
                ? 'bg-violet-700 text-white shadow-sm'
                : 'border border-slate-200 bg-white text-slate-600 hover:text-slate-900 hover:border-slate-300'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Guided Tour Cards */}
      <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filteredDemos.map((demo) => {
          const isSelected = demo.appId === activeApp;
          return (
            <button
              key={demo.id}
              type="button"
              onClick={() => handleSelectTour(demo.appId)}
              className={`flex flex-col justify-between rounded-2xl border p-5 text-left transition-all cursor-pointer ${
                isSelected
                  ? 'border-violet-600 bg-violet-50/60 ring-1 ring-violet-600'
                  : 'border-slate-200 bg-white hover:border-violet-300'
              }`}
            >
              <div>
                <div className="flex items-center justify-between text-xs sm:text-[12.5px]">
                  <span className="font-semibold text-violet-700">{demo.appName}</span>
                  <span className="text-slate-500">{demo.duration}</span>
                </div>
                <h2 className="mt-2 text-base sm:text-[18px] font-bold text-slate-900 leading-snug">{demo.title}</h2>
                <p className="mt-1.5 text-xs sm:text-[13.5px] leading-relaxed text-slate-600">
                  {demo.description}
                </p>
              </div>
              <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-3 text-xs sm:text-[13px]">
                <span className="text-slate-500">Replaces {demo.replaces}</span>
                <span className="inline-flex items-center gap-1 font-semibold text-violet-700">
                  <PlayCircle className="h-3.5 w-3.5" />
                  <span>{isSelected ? 'Active Below' : 'Load Tour'}</span>
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Active Tour Steps + Interactive Sandbox */}
      <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-12">
        <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-6 lg:col-span-4">
          <div className="text-xs sm:text-[13px] font-bold tracking-[0.14em] text-violet-700 uppercase">
            Guided Steps · {activeDemo.appName}
          </div>
          <h3 className="mt-2 text-xl sm:text-2xl font-bold text-slate-900">{activeDemo.title}</h3>
          <div className="mt-5 space-y-4">
            {activeDemo.steps.map((s) => (
              <div
                key={s.step}
                className="rounded-xl border border-slate-200 bg-white p-4"
              >
                <div className="flex items-center justify-between text-xs sm:text-[12.5px]">
                  <span className="font-bold text-violet-700 tabular-nums">
                    Step 0{s.step}
                  </span>
                  <span className="text-slate-400 font-medium">{s.highlightTarget}</span>
                </div>
                <div className="mt-1 text-sm sm:text-[15.5px] font-bold text-slate-900">{s.title}</div>
                <p className="mt-1 text-xs sm:text-[13.5px] leading-relaxed text-slate-600">{s.summary}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 flex items-start gap-2 text-xs sm:text-[13px] text-slate-600">
            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-violet-700" />
            <span>
              Every app shares one directory, billing ledger, and permission model.
            </span>
          </div>
        </div>

        <div className="lg:col-span-8">
          <InteractiveSandbox
            key={sandboxKey}
            initialApp={activeApp}
            onBookDemo={() => handleOpenModal('demo')}
          />
        </div>
      </div>

      {localModalMode && (
        <TrialModal
          mode={localModalMode}
          onClose={() => setLocalModalMode(null)}
        />
      )}
    </div>
  );
};
