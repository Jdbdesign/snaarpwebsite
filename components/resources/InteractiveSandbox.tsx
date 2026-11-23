'use client';

import React, { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import {
  ArrowRight,
  Briefcase,
  Check,
  ChevronRight,
  FileSpreadsheet,
  FolderLock,
  Lock,
  Mail,
  Mic,
  MicOff,
  Receipt,
  Sparkles,
  Video,
  VideoOff,
} from 'lucide-react';

export type SandboxAppId = 'crm' | 'mail' | 'books' | 'meet' | 'drive' | 'lock';

interface InteractiveSandboxProps {
  initialApp?: SandboxAppId;
  compact?: boolean;
  onBookDemo?: () => void;
}

const APP_TABS: {
  id: SandboxAppId;
  name: string;
  url: string;
  icon: React.ComponentType<{ className?: string }>;
  replaces: string;
}[] = [
  {
    id: 'crm',
    name: 'Snaarp CRM',
    url: 'app.snaarp.com/crm/pipeline',
    icon: Briefcase,
    replaces: 'HubSpot / Pipedrive',
  },
  {
    id: 'mail',
    name: 'Snaarp Mail',
    url: 'app.snaarp.com/mail/inbox',
    icon: Mail,
    replaces: 'Gmail / Outlook',
  },
  {
    id: 'books',
    name: 'Snaarp Books',
    url: 'app.snaarp.com/books/invoices',
    icon: Receipt,
    replaces: 'QuickBooks / Xero',
  },
  {
    id: 'meet',
    name: 'Snaarp Meet',
    url: 'app.snaarp.com/meet/schedule',
    icon: Video,
    replaces: 'Zoom + Calendly',
  },
  {
    id: 'drive',
    name: 'Snaarp Drive',
    url: 'app.snaarp.com/drive/workspace',
    icon: FileSpreadsheet,
    replaces: 'Dropbox + Docs',
  },
  {
    id: 'lock',
    name: 'Snaarp Lock',
    url: 'app.snaarp.com/lock/vaults',
    icon: Lock,
    replaces: '1Password',
  },
];

type DealStage = 'New' | 'Qualified' | 'Proposal' | 'Won';

interface DealCard {
  id: string;
  name: string;
  value: number;
  stage: DealStage;
  note: string;
}

const INITIAL_DEALS: DealCard[] = [
  { id: 'halden', name: 'Halden & Co', value: 7250, stage: 'New', note: 'Mail synced 2h ago' },
  { id: 'trackmark', name: 'Trackmark Ltd', value: 5900, stage: 'New', note: 'Meet call tomorrow' },
  { id: 'bluecrest', name: 'Bluecrest', value: 26500, stage: 'Qualified', note: '20-seat fixed plan' },
  { id: 'kestrel', name: 'Kestrel Group', value: 13500, stage: 'Qualified', note: 'VerifyKit audit sent' },
  { id: 'northwind', name: 'Northwind Logistics', value: 31000, stage: 'Proposal', note: 'MSA in Snaarp PDF' },
  { id: 'orbital', name: 'Orbital Labs', value: 41050, stage: 'Won', note: 'Books INV-2041 paid' },
  { id: 'verta', name: 'Verta Health', value: 18750, stage: 'Won', note: 'Books INV-2048 paid' },
];

const STAGES: DealStage[] = ['New', 'Qualified', 'Proposal', 'Won'];

export const InteractiveSandbox: React.FC<InteractiveSandboxProps> = ({
  initialApp = 'crm',
  compact = false,
  onBookDemo,
}) => {
  const [activeApp, setActiveApp] = useState<SandboxAppId>(initialApp);
  const [deals, setDeals] = useState<DealCard[]>(INITIAL_DEALS);
  const [selectedDealId, setSelectedDealId] = useState<string>('northwind');
  const [selectedMail, setSelectedMail] = useState<number>(0);
  const [aiTone, setAiTone] = useState<'Executive' | 'Concise' | 'Follow-Up' | null>(null);
  const [invoiceSent, setInvoiceSent] = useState<boolean>(false);
  const [selectedSlot, setSelectedSlot] = useState<string>('14:00 WAT');
  const [micOn, setMicOn] = useState<boolean>(true);
  const [camOn, setCamOn] = useState<boolean>(true);
  const [driveRecord, setDriveRecord] = useState<boolean>(true);
  const [selectedDriveFile, setSelectedDriveFile] = useState<number>(0);
  const [revealedVaultId, setRevealedVaultId] = useState<string | null>(null);

  const currentTab = APP_TABS.find((t) => t.id === activeApp) ?? APP_TABS[0];
  const activeDeal = deals.find((d) => d.id === selectedDealId) ?? deals[0];

  const advanceDealStage = (dealId: string) => {
    setDeals((prev) =>
      prev.map((d) => {
        if (d.id !== dealId) return d;
        const nextIndex = (STAGES.indexOf(d.stage) + 1) % STAGES.length;
        const nextStage = STAGES[nextIndex];
        return {
          ...d,
          stage: nextStage,
          note:
            nextStage === 'Won'
              ? 'Auto-drafted Books invoice'
              : `Moved to ${nextStage}`,
        };
      })
    );
  };

  const wonTotal = deals
    .filter((d) => d.stage === 'Won')
    .reduce((sum, d) => sum + d.value, 0);

  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      {/* Top Browser Chrome */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 bg-slate-50 px-4 py-2.5">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5" aria-hidden="true">
            <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
            <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
            <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
          </div>
          <div className="ml-2 rounded-md border border-slate-200 bg-white px-3 py-1 font-mono text-xs text-slate-600">
            {currentTab.url}
          </div>
        </div>
        <div className="flex items-center gap-3 text-xs text-slate-500">
          <span>
            Replaces <strong className="font-medium text-slate-800">{currentTab.replaces}</strong>
          </span>
          {onBookDemo && (
            <button
              type="button"
              onClick={onBookDemo}
              className="inline-flex items-center gap-1 rounded-md bg-violet-700 px-3 py-1.5 text-xs font-medium text-white hover:bg-violet-800 transition-colors cursor-pointer"
            >
              <span>Book Guided Walkthrough</span>
              <ChevronRight className="h-3.5 w-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* Main Split Workspace */}
      <div className="grid grid-cols-1 lg:grid-cols-12">
        {/* Left App Switcher Rail */}
        <aside className="border-b border-slate-200 bg-slate-50/60 p-3 lg:col-span-3 lg:border-b-0 lg:border-r">
          <p className="px-2 pb-2 text-xs font-medium text-slate-400">
            Interactive Apps
          </p>
          <div className="grid grid-cols-2 gap-1.5 sm:grid-cols-3 lg:grid-cols-1">
            {APP_TABS.map((tab) => {
              const Icon = tab.icon;
              const isActive = tab.id === activeApp;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveApp(tab.id)}
                  className={`flex items-center justify-between gap-2 rounded-xl px-3 py-2.5 text-left text-sm font-medium transition-all duration-150 cursor-pointer ${
                    isActive
                      ? 'bg-violet-700 text-white shadow-sm translate-x-0.5'
                      : 'text-slate-700 hover:bg-white hover:text-slate-900 hover:translate-x-0.5'
                  }`}
                >
                  <span className="flex items-center gap-2.5 min-w-0">
                    <Icon
                      className={`h-4 w-4 shrink-0 ${
                        isActive ? 'text-white' : 'text-violet-600'
                      }`}
                    />
                    <span className="truncate">{tab.name}</span>
                  </span>
                  {isActive && <ChevronRight className="h-3.5 w-3.5 shrink-0 opacity-80" />}
                </button>
              );
            })}
          </div>
        </aside>

        {/* Right Interactive App Viewport */}
        <div className={`p-5 lg:col-span-9 ${compact ? 'min-h-[340px]' : 'min-h-[420px]'}`}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeApp}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.16, ease: [0.16, 1, 0.3, 1] }}
            >
              {activeApp === 'crm' && (
                <div className="space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
                    <div>
                      <h4 className="text-base font-semibold text-slate-900">
                        Pipeline · UK & West Africa New Business
                      </h4>
                      <p className="text-xs text-slate-500">
                        Click a deal card, then advance its stage to watch Won revenue & Books sync live
                      </p>
                    </div>
                    <div className="text-right tabular-nums">
                      <span className="text-xs text-slate-500">Closed Won </span>
                      <span className="text-sm font-semibold text-violet-700">
                        £{wonTotal.toLocaleString('en-US')}
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-4">
                    {STAGES.map((stage) => {
                      const colDeals = deals.filter((d) => d.stage === stage);
                      const colTotal = colDeals.reduce((sum, d) => sum + d.value, 0);
                      return (
                        <div key={stage} className="rounded-xl bg-slate-50 p-2.5">
                          <div className="mb-2 flex items-center justify-between px-1 text-xs">
                            <span className="font-semibold text-slate-800">{stage}</span>
                            <span className="font-mono text-slate-500 tabular-nums">
                              £{colTotal.toLocaleString('en-US')}
                            </span>
                          </div>
                          <div className="space-y-2">
                            {colDeals.map((card) => {
                              const isSel = selectedDealId === card.id;
                              return (
                                <button
                                  key={card.id}
                                  type="button"
                                  onClick={() => setSelectedDealId(card.id)}
                                  className={`w-full rounded-lg border p-2.5 text-left transition-all duration-150 hover:-translate-y-0.5 cursor-pointer ${
                                    isSel
                                      ? 'border-violet-600 bg-violet-50/70 ring-1 ring-violet-600 shadow-xs'
                                      : 'border-slate-200 bg-white hover:border-violet-300'
                                  }`}
                                >
                                  <div className="text-xs font-semibold text-slate-900">
                                    {card.name}
                                  </div>
                                  <div className="mt-1 text-xs font-medium text-violet-700 tabular-nums">
                                    £{card.value.toLocaleString('en-US')}
                                  </div>
                                  <div className="mt-1 text-[11px] text-slate-500">
                                    {card.note}
                                  </div>
                                </button>
                              );
                            })}
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-violet-200 bg-violet-50/60 px-4 py-3 text-xs">
                    <div>
                      <span className="font-semibold text-slate-900">
                        {activeDeal.name}
                      </span>
                      <span className="mx-2 text-slate-400">·</span>
                      <span className="text-slate-600">
                        Stage: <strong className="text-violet-800">{activeDeal.stage}</strong> · Drive & Books synced
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={() => advanceDealStage(activeDeal.id)}
                      className="inline-flex items-center gap-1 rounded-lg bg-violet-700 px-3 py-1.5 text-xs font-semibold text-white hover:bg-violet-800 transition-colors cursor-pointer"
                    >
                      <span>Advance Stage</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>
              )}

              {activeApp === 'mail' && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                    <h4 className="text-base font-semibold text-slate-900">
                      Snaarp Mail · Unified Team Inbox
                    </h4>
                    <span className="inline-flex items-center gap-1 text-xs font-medium text-violet-700">
                      <Sparkles className="h-3.5 w-3.5" />
                      <span>Click AI Compose below to draft a reply</span>
                    </span>
                  </div>
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-12">
                    <div className="space-y-2 md:col-span-5">
                      {[
                        {
                          sender: 'Sarah Jenkins',
                          subject: 'Quarterly Report Update',
                          preview: 'Attached the finalized Q4 sheet from Snaarp Drive.',
                          time: '10:30 AM',
                        },
                        {
                          sender: 'Alex Rivera',
                          subject: 'Project Kickoff Meeting',
                          preview: 'Booked via Snaarp Me — Meet link generated.',
                          time: '09:15 AM',
                        },
                        {
                          sender: 'Chidi Nwosu · Northwind',
                          subject: 'Re: MSA & 42-seat Rollout',
                          preview: 'Approved by finance, ready for Books invoice.',
                          time: 'Yesterday',
                        },
                      ].map((msg, idx) => (
                        <button
                          key={msg.subject}
                          type="button"
                          onClick={() => {
                            setSelectedMail(idx);
                            setAiTone(null);
                          }}
                          className={`w-full rounded-xl border p-3 text-left transition-all duration-150 hover:-translate-y-0.5 cursor-pointer ${
                            selectedMail === idx
                              ? 'border-violet-600 bg-violet-50/60 shadow-xs'
                              : 'border-slate-200 bg-white hover:bg-slate-50'
                          }`}
                        >
                          <div className="flex items-center justify-between text-xs">
                            <span className="font-semibold text-slate-900">{msg.sender}</span>
                            <span className="text-slate-400 tabular-nums">{msg.time}</span>
                          </div>
                          <div className="mt-1 text-xs font-medium text-slate-800">{msg.subject}</div>
                          <div className="mt-0.5 truncate text-[11px] text-slate-500">
                            {msg.preview}
                          </div>
                        </button>
                      ))}
                    </div>
                    <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-4 md:col-span-7">
                      <div className="text-xs text-slate-500">
                        {selectedMail === 0
                          ? 'From Sarah Jenkins · Linked to Finance Workspace'
                          : selectedMail === 1
                            ? 'From Alex Rivera · Snaarp Meet Confirmed'
                            : 'From Chidi Nwosu · Linked to Northwind CRM Deal (£31,000)'}
                      </div>
                      <h5 className="mt-1 text-sm font-semibold text-slate-900">
                        {selectedMail === 0
                          ? 'Quarterly Report Update'
                          : selectedMail === 1
                            ? 'Project Kickoff Meeting'
                            : 'Re: MSA & 42-seat Rollout'}
                      </h5>
                      <p className="mt-3 text-xs leading-relaxed text-slate-600">
                        {selectedMail === 0
                          ? 'The updated Q4 revenue tracker is ready in Snaarp Sheet. All expense receipts have been reconciled in Snaarp Books with zero pending items.'
                          : selectedMail === 1
                            ? 'Confirmed for tomorrow at 2:00 PM WAT. Your Snaarp Meet room and agenda document are linked automatically.'
                            : 'Legal signed off on the 42-user rollout. Please trigger the first invoice from Snaarp Books whenever ready.'}
                      </p>

                      {aiTone && (
                        <div className="mt-3 rounded-lg border border-violet-200 bg-white p-3 text-xs text-slate-700">
                          <div className="font-semibold text-violet-700">
                            AI Compose Draft ({aiTone})
                          </div>
                          <p className="mt-1 leading-relaxed">
                            {aiTone === 'Executive'
                              ? 'Thanks for the update—we have reviewed the numbers in Snaarp Books and approved next steps. Let us align on tomorrow’s Snaarp Meet call.'
                              : aiTone === 'Concise'
                                ? 'Received and confirmed. Invoice & Drive permissions are updated.'
                                : 'Following up with your Snaarp Me booking link and the updated Snaarp PDF attached here.'}
                          </p>
                        </div>
                      )}

                      <div className="mt-4 flex flex-wrap items-center gap-2 border-t border-slate-200 pt-3">
                        <span className="text-[11px] font-medium text-slate-500">
                          AI Compose:
                        </span>
                        {(['Executive', 'Concise', 'Follow-Up'] as const).map((tone) => (
                          <button
                            key={tone}
                            type="button"
                            onClick={() => setAiTone(tone)}
                            className={`rounded-md px-2.5 py-1 text-xs font-medium transition-colors cursor-pointer ${
                              aiTone === tone
                                ? 'bg-violet-700 text-white'
                                : 'border border-slate-200 bg-white text-slate-700 hover:border-violet-300'
                            }`}
                          >
                            {tone}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeApp === 'books' && (
                <div className="space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
                    <div>
                      <h4 className="text-base font-semibold text-slate-900">
                        Snaarp Books · Live Receivables & Invoices
                      </h4>
                      <p className="text-xs text-slate-500">
                        Generated directly from won Snaarp CRM deals
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => setInvoiceSent(!invoiceSent)}
                      className="inline-flex items-center gap-1.5 rounded-lg bg-violet-700 px-3 py-1.5 text-xs font-medium text-white hover:bg-violet-800 transition-colors cursor-pointer"
                    >
                      {invoiceSent ? (
                        <>
                          <Check className="h-3.5 w-3.5" />
                          <span>INV-2049 Sent to Northwind</span>
                        </>
                      ) : (
                        <span>Send Pending Invoice (INV-2049)</span>
                      )}
                    </button>
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { label: 'Collected (30d)', value: '₦8,420,000' },
                      { label: 'Pending Invoices', value: invoiceSent ? '₦1,250,000' : '₦2,640,000' },
                      { label: 'Auto-Matched Expenses', value: '98.4%' },
                    ].map((kpi) => (
                      <div key={kpi.label} className="rounded-xl border border-slate-200 bg-slate-50 p-3">
                        <div className="text-xs text-slate-500">{kpi.label}</div>
                        <div className="mt-1 text-lg font-semibold text-slate-900 tabular-nums">
                          {kpi.value}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="overflow-hidden rounded-xl border border-slate-200">
                    <table className="w-full text-left text-xs">
                      <thead className="bg-slate-50 text-slate-500">
                        <tr>
                          <th className="px-3.5 py-2.5 font-medium">Invoice</th>
                          <th className="px-3.5 py-2.5 font-medium">Client</th>
                          <th className="px-3.5 py-2.5 font-medium">Amount</th>
                          <th className="px-3.5 py-2.5 font-medium">Status</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        <tr>
                          <td className="px-3.5 py-2.5 font-mono text-slate-700">INV-2049</td>
                          <td className="px-3.5 py-2.5 font-medium text-slate-900">Northwind Logistics</td>
                          <td className="px-3.5 py-2.5 tabular-nums text-slate-900">₦1,390,000</td>
                          <td className="px-3.5 py-2.5 font-medium text-violet-700">
                            {invoiceSent ? 'Sent via Mail' : 'Draft from CRM'}
                          </td>
                        </tr>
                        <tr>
                          <td className="px-3.5 py-2.5 font-mono text-slate-700">INV-2048</td>
                          <td className="px-3.5 py-2.5 font-medium text-slate-900">Verta Health</td>
                          <td className="px-3.5 py-2.5 tabular-nums text-slate-900">₦4,850,000</td>
                          <td className="px-3.5 py-2.5 font-medium text-emerald-700">Paid</td>
                        </tr>
                        <tr>
                          <td className="px-3.5 py-2.5 font-mono text-slate-700">INV-2047</td>
                          <td className="px-3.5 py-2.5 font-medium text-slate-900">Bluecrest Advisory</td>
                          <td className="px-3.5 py-2.5 tabular-nums text-slate-900">₦2,180,000</td>
                          <td className="px-3.5 py-2.5 font-medium text-emerald-700">Paid</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {activeApp === 'meet' && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                    <div>
                      <h4 className="text-base font-semibold text-slate-900">
                        Snaarp Meet & Snaarp Me Scheduling
                      </h4>
                      <p className="text-xs text-slate-500">
                        Pick a booking slot and toggle room preferences live
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="rounded-xl border border-slate-200 p-4">
                      <div className="text-xs font-semibold text-slate-900">
                        Pick a Demo Slot · Tomorrow
                      </div>
                      <div className="mt-3 grid grid-cols-2 gap-2">
                        {['10:00 WAT', '11:30 WAT', '14:00 WAT', '16:30 WAT'].map((slot) => (
                          <button
                            key={slot}
                            type="button"
                            onClick={() => setSelectedSlot(slot)}
                            className={`rounded-lg border px-3 py-2 text-xs font-medium tabular-nums transition-colors cursor-pointer ${
                              selectedSlot === slot
                                ? 'border-violet-600 bg-violet-700 text-white'
                                : 'border-slate-200 bg-white text-slate-700 hover:border-violet-300'
                            }`}
                          >
                            {slot}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div className="flex flex-col justify-between rounded-xl bg-slate-950 p-4 text-white">
                      <div>
                        <div className="text-xs text-violet-300">Auto-Generated Room</div>
                        <div className="mt-1 text-sm font-semibold">
                          Snaarp Discovery · {selectedSlot}
                        </div>
                        <p className="mt-1.5 text-xs text-slate-300">
                          {driveRecord
                            ? 'Cloud recording & notes will save automatically to Snaarp Drive.'
                            : 'Cloud recording paused for this private session.'}
                        </p>
                      </div>
                      <div className="mt-4 flex flex-wrap items-center gap-2 border-t border-slate-800 pt-3">
                        <button
                          type="button"
                          onClick={() => setMicOn(!micOn)}
                          className={`inline-flex items-center gap-1 rounded-lg px-2.5 py-1.5 text-xs font-medium cursor-pointer ${
                            micOn ? 'bg-slate-800 text-white' : 'bg-red-900/60 text-red-200'
                          }`}
                        >
                          {micOn ? <Mic className="h-3.5 w-3.5" /> : <MicOff className="h-3.5 w-3.5" />}
                          <span>{micOn ? 'Mic On' : 'Muted'}</span>
                        </button>
                        <button
                          type="button"
                          onClick={() => setCamOn(!camOn)}
                          className={`inline-flex items-center gap-1 rounded-lg px-2.5 py-1.5 text-xs font-medium cursor-pointer ${
                            camOn ? 'bg-slate-800 text-white' : 'bg-red-900/60 text-red-200'
                          }`}
                        >
                          {camOn ? <Video className="h-3.5 w-3.5" /> : <VideoOff className="h-3.5 w-3.5" />}
                          <span>{camOn ? 'HD Cam' : 'Cam Off'}</span>
                        </button>
                        <button
                          type="button"
                          onClick={() => setDriveRecord(!driveRecord)}
                          className={`rounded-lg px-2.5 py-1.5 text-xs font-medium cursor-pointer ${
                            driveRecord
                              ? 'bg-violet-700 text-white'
                              : 'border border-slate-700 text-slate-300'
                          }`}
                        >
                          {driveRecord ? 'Drive Sync On' : 'Drive Sync Off'}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeApp === 'drive' && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                    <h4 className="text-base font-semibold text-slate-900">
                      Snaarp Drive, Document, Sheet & PDF
                    </h4>
                    <span className="text-xs text-slate-500">Click any file to inspect permissions</span>
                  </div>
                  <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                    {[
                      {
                        name: 'Q4_Consolidated_Budget.sheet',
                        folder: 'Finance · 6 editors',
                        updated: 'Edited 12m ago',
                        detail: 'Live formulas linked to Snaarp Books Q4 ledger · External link disabled.',
                      },
                      {
                        name: 'Northwind_Enterprise_MSA.pdf',
                        folder: 'Legal & Deals · Signed',
                        updated: 'Edited 1h ago',
                        detail: 'Signed by Chidi Nwosu · Archived automatically in Northwind CRM record.',
                      },
                      {
                        name: '2026_Onboarding_Handbook.doc',
                        folder: 'Workforce HR · All Staff',
                        updated: 'Edited yesterday',
                        detail: 'Shared with all 42 active Workforce members · Read-only for guests.',
                      },
                      {
                        name: 'Board_Deck_Q4.slides',
                        folder: 'Leadership · Restricted',
                        updated: 'Edited 2d ago',
                        detail: 'Encrypted via Snaarp Identity · Watermarked presentation mode active.',
                      },
                    ].map((file, idx) => (
                      <button
                        key={file.name}
                        type="button"
                        onClick={() => setSelectedDriveFile(idx)}
                        className={`flex flex-col justify-between rounded-xl border p-3.5 text-left transition-all cursor-pointer ${
                          selectedDriveFile === idx
                            ? 'border-violet-600 bg-violet-50/60'
                            : 'border-slate-200 bg-white hover:border-violet-300'
                        }`}
                      >
                        <div className="flex w-full items-start justify-between gap-2">
                          <div>
                            <div className="text-xs font-semibold text-slate-900">{file.name}</div>
                            <div className="mt-1 text-[11px] text-slate-500">{file.folder}</div>
                          </div>
                          <span className="text-[11px] font-medium text-violet-700 shrink-0">
                            {file.updated}
                          </span>
                        </div>
                        {selectedDriveFile === idx && (
                          <div className="mt-2.5 border-t border-violet-200/70 pt-2 text-[11px] text-slate-700">
                            {file.detail}
                          </div>
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {activeApp === 'lock' && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                    <div>
                      <h4 className="text-base font-semibold text-slate-900">
                        Snaarp Lock · Zero-Trust Team Vaults
                      </h4>
                      <p className="text-xs text-slate-500">
                        Share access by role without exposing plaintext credentials
                      </p>
                    </div>
                    <FolderLock className="h-5 w-5 text-violet-700" />
                  </div>
                  <div className="space-y-2.5">
                    {[
                      {
                        id: 'aws',
                        label: 'Cloud Production Console',
                        role: 'Engineering Vault · 6 members',
                        mask: '••••••••••••••',
                        revealed: 'Autofill Active (Token Scoped)',
                      },
                      {
                        id: 'bank',
                        label: 'Corporate Treasury Portal',
                        role: 'Finance Vault · 2 members',
                        mask: '••••••••••••••',
                        revealed: '2FA Hardware Key Required',
                      },
                      {
                        id: 'ads',
                        label: 'Ad Manager & Social Accounts',
                        role: 'Marketing Vault · 4 members',
                        mask: '••••••••••••••',
                        revealed: 'Session Audited · No Raw Password',
                      },
                    ].map((item) => {
                      const isShown = revealedVaultId === item.id;
                      return (
                        <div
                          key={item.id}
                          className="flex flex-wrap items-center justify-between gap-2 rounded-xl border border-slate-200 p-3.5 transition-colors hover:border-violet-300"
                        >
                          <div>
                            <div className="text-xs font-semibold text-slate-900">{item.label}</div>
                            <div className="mt-0.5 text-[11px] text-slate-500">{item.role}</div>
                          </div>
                          <div className="flex items-center gap-3">
                            <span className="font-mono text-xs text-slate-600">
                              {isShown ? item.revealed : item.mask}
                            </span>
                            <button
                              type="button"
                              onClick={() => setRevealedVaultId(isShown ? null : item.id)}
                              className="rounded-md border border-slate-200 px-2.5 py-1 text-xs font-medium text-violet-700 hover:bg-violet-50 cursor-pointer"
                            >
                              {isShown ? 'Hide Policy' : 'Inspect Policy'}
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};
