'use client';

import Link from 'next/link';
import { useState } from 'react';
import {
  ArrowRight, Check,
  FileText, Route, Eye, Shield, Clock, Users,
} from 'lucide-react';
import { Price } from '@/components/currency/Price';
import { HomeFinalCTA } from '@/components/HomeFinalCTA';
import { StackTrustBar, PlainStackWrapper } from '@/components/sections/StackTrustBar';
import { InteractiveApprovalDemo } from './InteractiveApprovalDemo';

const faqs: { q: string; a: string }[] = [
  { q: 'What types of documents can I route for approval?', a: 'Any document — PDFs, Word files, contracts, purchase orders, invoices. Upload it and Doc Sign handles the rest.' },
  { q: 'Can I set up multi-stage approval workflows?', a: 'Yes — define as many stages as you need. Each stage can have one or multiple approvers, and the document moves automatically when approved.' },
  { q: 'What happens if someone rejects a document?', a: 'The document goes back to the requester with the rejection reason. You can revise and re-submit without creating a new request.' },
  { q: 'Is there an audit trail?', a: 'Every action is logged — who approved, when, from which device, and any comments left. The trail is tamper-evident and exportable.' },
  { q: 'Is Doc Sign included in the Starter plan?', a: 'Yes — included in every Snaarp plan from Starter upwards, no add-on required.' },
];

const stackApps = [
  { iconSrc: '/assets/icons/envelope.jpg', name: 'Snaarp Mail' },
  { iconSrc: '/assets/icons/cube.jpg', name: 'Work Drive' },
  { iconSrc: '/assets/icons/chat-bubbles.jpg', name: 'Snaarp Teams' },
  { iconSrc: '/assets/icons/apps-lock.jpg', name: 'Snaarp Lock' },
];

const steps = [
  { icon: FileText, num: '01', tag: 'UPLOAD', title: 'Upload your document', desc: 'Drop in any file — PDF, Word, or image. Name the request and set a deadline.' },
  { icon: Route, num: '02', tag: 'ROUTE', title: 'Define the approval route', desc: 'Pick who needs to approve and in what order. Sequential, parallel, or a mix of both.' },
  { icon: Eye, num: '03', tag: 'TRACK', title: 'Track to completion', desc: 'Watch it move through each stage in real time. Everyone knows where it stands.' },
] as const;

export function DocSignPage() {
  return (
    <div className="doc-sign min-h-screen overflow-hidden bg-background">
      {/* ─── HERO ─── */}
      <section className="relative border-b bg-secondary/50">
        <div className="doc-sign-grid-bg absolute inset-0 opacity-60" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 py-20 md:py-28 lg:grid-cols-[.95fr_1.05fr] lg:px-10">
          <div className="flex flex-col items-start gap-7">
            <span className="rounded-full border bg-background px-4 py-2 text-xs font-bold tracking-[.14em] text-primary">
              SECURE &amp; SIGN · DOC SIGN
            </span>
            <h1 className="text-balance text-5xl font-bold leading-[1.02] tracking-tight md:text-7xl">
              Internal approvals,{' '}
              <span className="text-primary">routed not chased.</span>
            </h1>
            <p className="max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
              Create an approval request, assign it to the right people, and watch it move
              through each stage — everyone knows where it stands, and nobody gets forgotten.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/pricing" className="inline-flex h-12 items-center gap-2 rounded-full bg-primary px-6 font-semibold text-primary-foreground">
                Start for <Price amount={2} />/month <ArrowRight className="size-4" />
              </Link>
              <a href="#steps" className="inline-flex h-12 items-center gap-2 rounded-full border border-border bg-background px-6 font-semibold">
                See how it works
              </a>
            </div>
            <p className="flex items-center gap-2 text-sm text-muted-foreground">
              <Check className="size-4 text-primary" />GDPR compliant · No credit card required
            </p>
          </div>
          <InteractiveApprovalDemo />
        </div>
      </section>

      {/* ─── TRUST BAR ─── */}
      <StackTrustBar Wrapper={PlainStackWrapper} apps={stackApps} />

      {/* ─── STATS ─── */}
      <section>
        <div className="mx-auto grid max-w-7xl divide-y border-x md:grid-cols-3 md:divide-x md:divide-y-0">
          {[
            ['Zero', 'approval requests lost in email threads'],
            ['Real-time', 'visibility into every stage of every request'],
            ['100%', 'tamper-evident audit trail on every document'],
          ].map(([v, l]) => (
            <div className="flex flex-col gap-2 p-8 text-center md:p-12" key={v}>
              <strong className="text-4xl text-primary">{v}</strong>
              <span className="text-sm text-muted-foreground">{l}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ─── STEPS ─── */}
      <section id="steps" className="doc-sign-workflow border-y py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="flex flex-col items-start justify-between gap-8 border-b pb-10 md:flex-row md:items-end">
            <div className="flex max-w-3xl flex-col items-start gap-4">
              <span className="text-xs font-bold tracking-[.18em] text-primary">HOW IT WORKS · 01—03</span>
              <h2 className="text-balance text-4xl font-bold tracking-tight md:text-6xl">
                From upload to <span className="text-primary">fully approved.</span>
              </h2>
            </div>
            <p className="max-w-sm text-pretty text-sm leading-relaxed text-muted-foreground">
              One clear flow. No chasing people in chat, no wondering where your document is stuck.
            </p>
          </div>
          <div className="doc-sign-workflow-rail relative grid gap-8 pt-10 md:grid-cols-3 md:gap-5">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <article key={step.num} className="group relative flex flex-col">
                  <div className="mb-3 flex items-center justify-between border-b pb-3 font-mono text-[11px] font-semibold tracking-[.14em] text-muted-foreground">
                    <span>FIG {step.num}</span><span>{step.tag}</span>
                  </div>
                  <div className="relative flex min-h-80 items-center justify-center overflow-hidden rounded-3xl border bg-card p-6 transition-transform duration-300 group-hover:-translate-y-1 md:min-h-96">
                    <span className="absolute left-5 top-5 flex size-9 items-center justify-center rounded-full border bg-background font-mono text-xs font-bold text-primary">{step.num}</span>
                    <StepVisual index={i} />
                  </div>
                  <div className="flex gap-4 pt-6">
                    <span className="font-mono text-xs font-bold text-primary">{step.num}</span>
                    <div><h3 className="text-xl font-bold">{step.title}</h3><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.desc}</p></div>
                  </div>
                </article>
              );
            })}
          </div>
          <div className="mt-14 flex flex-col items-start justify-between gap-5 rounded-2xl border bg-card p-5 sm:flex-row sm:items-center">
            <p className="text-sm"><b>That&apos;s it.</b> No meetings, no spreadsheets, no lost emails.</p>
            <Link href="/pricing" className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground">
              Start for <Price amount={2} />/month <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── FEATURE ROW 1: Routing ─── */}
      <section className="bg-secondary/50 py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2 lg:px-10">
          <div className="rounded-3xl border bg-card p-6 shadow-xl md:p-10">
            <div className="rounded-2xl border bg-background p-6">
              <p className="mb-4 text-xs font-semibold text-muted-foreground">APPROVAL ROUTE</p>
              <div className="flex flex-col gap-4">
                {[
                  { stage: 'Stage 1', name: 'Legal Review', status: 'Approved', color: '#0E9384' },
                  { stage: 'Stage 2', name: 'Finance', status: 'In Review', color: '#7C3AED' },
                  { stage: 'Stage 3', name: 'CEO Sign-off', status: 'Pending', color: '#8B85A0' },
                ].map((item) => (
                  <div key={item.stage} className="flex items-center justify-between rounded-xl bg-secondary p-4">
                    <div className="flex items-center gap-3">
                      <span className="flex size-8 items-center justify-center rounded-full text-xs font-bold" style={{ background: `${item.color}15`, color: item.color }}>{item.stage.split(' ')[1]}</span>
                      <div><div className="text-sm font-semibold">{item.name}</div><div className="text-xs text-muted-foreground">{item.stage}</div></div>
                    </div>
                    <span className="rounded-full px-3 py-1 text-[10px] font-bold" style={{ background: `${item.color}15`, color: item.color }}>{item.status}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div>
            <span className="text-xs font-bold tracking-[.16em] text-primary">SMART ROUTING</span>
            <h2 className="mt-4 text-balance text-4xl font-bold md:text-5xl">Route to the right people, in the right order.</h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">Define who needs to approve and when. Sequential for sign-off chains, parallel when multiple departments can review at once.</p>
            <div className="mt-8 flex flex-col gap-6">
              {[
                ['Sequential or parallel.', 'Chain approvals one after another, or let multiple reviewers work simultaneously.'],
                ['Auto-notifications.', 'Each approver gets pinged the moment it\'s their turn — no manual follow-up.'],
                ['Deadline enforcement.', 'Set a due date and Doc Sign escalates overdue approvals automatically.'],
              ].map(([t, d], i) => (
                <div className="flex gap-4" key={t}>
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-primary font-bold text-primary-foreground">{i + 1}</span>
                  <p className="text-sm leading-relaxed"><b>{t}</b> <span className="text-muted-foreground">{d}</span></p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── FEATURE ROW 2: Audit Trail ─── */}
      <section className="py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2 lg:px-10">
          <div>
            <span className="text-xs font-bold tracking-[.16em] text-primary">TAMPER-EVIDENT TRAIL</span>
            <h2 className="mt-4 text-balance text-4xl font-bold md:text-5xl">Every action logged. Nothing lost.</h2>
            <div className="mt-10 flex flex-col gap-8">
              {[
                ['Who approved, when, from where.', 'Full transparency on every decision — device, timestamp, and IP logged automatically.'],
                ['Comments preserved forever.', 'Rejection reasons, revision notes, and approval comments stay attached to the document.'],
                ['Export the full trail.', 'One-click PDF export of the entire approval history for compliance or legal hold.'],
              ].map(([t, d]) => (
                <div key={t} className="border-l-2 border-primary pl-5">
                  <h3 className="font-bold">{t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-3xl border bg-secondary p-6 md:p-10">
            <div className="rounded-2xl border bg-card p-6 shadow-xl">
              <p className="mb-4 text-xs font-semibold text-muted-foreground">AUDIT TRAIL</p>
              <div className="flex flex-col gap-0">
                {[
                  { time: '09:14', user: 'Sarah K.', action: 'Created request', icon: '📄' },
                  { time: '09:32', user: 'Legal Team', action: 'Approved (Stage 1)', icon: '✓' },
                  { time: '10:15', user: 'Finance', action: 'Approved (Stage 2)', icon: '✓' },
                  { time: '11:03', user: 'CEO', action: 'Signed off (Final)', icon: '🖊️' },
                ].map((entry, i, arr) => (
                  <div key={entry.time} className="relative flex gap-4 pb-6">
                    {i < arr.length - 1 && <div className="absolute left-[15px] top-8 h-full w-px bg-border" />}
                    <span className="relative z-10 flex size-8 shrink-0 items-center justify-center rounded-full border bg-background text-xs">{entry.icon}</span>
                    <div className="flex-1">
                      <div className="flex items-center justify-between"><span className="text-sm font-semibold">{entry.user}</span><span className="text-xs text-muted-foreground">{entry.time}</span></div>
                      <p className="text-xs text-muted-foreground">{entry.action}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FEATURE ROW 3: Security ─── */}
      <section className="bg-secondary/50 py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2 lg:px-10">
          <div className="order-2 lg:order-1 rounded-3xl border bg-card p-6 shadow-xl md:p-10">
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Shield, label: 'End-to-end encryption', desc: 'AES-256 at rest, TLS 1.3 in transit' },
                { icon: Users, label: 'Role-based access', desc: 'Control who can create, approve, or view' },
                { icon: Clock, label: 'Retention policies', desc: 'Auto-archive or delete after set periods' },
                { icon: Eye, label: 'View-only sharing', desc: 'Share documents without edit permissions' },
              ].map(({ icon: Icon, label, desc }) => (
                <div key={label} className="flex flex-col gap-2 rounded-2xl bg-secondary p-5">
                  <Icon className="size-5 text-primary" />
                  <span className="text-sm font-semibold">{label}</span>
                  <span className="text-xs leading-relaxed text-muted-foreground">{desc}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <span className="text-xs font-bold tracking-[.16em] text-primary">ENTERPRISE-GRADE SECURITY</span>
            <h2 className="mt-4 text-balance text-4xl font-bold md:text-5xl">Your documents, locked down.</h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">Every document in Doc Sign is encrypted, access-controlled, and audited. Built for teams that handle sensitive contracts, HR documents, and financial approvals.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <span className="rounded-full border px-4 py-2 text-xs font-semibold">SOC 2 aligned</span>
              <span className="rounded-full border px-4 py-2 text-xs font-semibold">GDPR compliant</span>
              <span className="rounded-full border px-4 py-2 text-xs font-semibold">ISO 27001</span>
              <span className="rounded-full border px-4 py-2 text-xs font-semibold">UK data residency</span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section style={{ background: '#F7F7F7', paddingTop: '92px', paddingBottom: '92px' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div style={{ maxWidth: '820px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '44px' }}>
              <span style={{ fontSize: '11.5px', fontWeight: 600, letterSpacing: '.14em', color: '#7C3AED', textTransform: 'uppercase' }}>Questions</span>
              <h2 style={{ fontSize: 'var(--font-size-h2)', margin: '12px 0 0', color: '#1B1730', fontWeight: 700, letterSpacing: '-.03em' }}>Doc Sign, answered.</h2>
            </div>
            <DocSignFAQ />
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA ─── */}
      <HomeFinalCTA />
    </div>
  );
}

/* ─── Step visuals inside the workflow cards ─── */
function StepVisual({ index }: { index: number }) {
  if (index === 0) {
    return (
      <div className="w-full max-w-64 rotate-[-2deg] rounded-2xl border bg-background p-4 shadow-xl">
        <div className="mb-5 flex items-center justify-between">
          <span className="text-[10px] font-bold tracking-widest text-muted-foreground">UPLOAD DOCUMENT</span>
          <FileText className="size-4 text-primary" />
        </div>
        <div className="rounded-xl bg-secondary p-4">
          <div className="flex items-center gap-3">
            <span className="flex size-10 items-center justify-center rounded-xl bg-primary/10">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /></svg>
            </span>
            <div><p className="text-xs font-semibold">Vendor_Agreement.pdf</p><p className="text-[10px] text-muted-foreground">2.4 MB · PDF</p></div>
          </div>
          <span className="mt-4 flex items-center gap-2 text-[10px] font-bold text-primary"><span className="size-1.5 rounded-full bg-primary" />READY TO ROUTE</span>
        </div>
      </div>
    );
  }
  if (index === 1) {
    return (
      <div className="relative w-full max-w-64">
        <span className="absolute -right-3 -top-8 flex size-12 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-lg"><Route className="size-5" /></span>
        <div className="rounded-2xl border bg-background p-5 shadow-xl">
          <span className="mb-4 block text-[10px] font-bold tracking-widest text-primary">DEFINING ROUTE</span>
          <div className="flex flex-col gap-3">
            {['Legal Review', 'Finance', 'CEO Sign-off'].map((name, i) => (
              <div key={name} className="flex items-center gap-2 rounded-lg bg-secondary px-3 py-2">
                <span className="flex size-6 items-center justify-center rounded-full bg-primary/10 text-[9px] font-bold text-primary">{i + 1}</span>
                <span className="text-xs font-medium">{name}</span>
              </div>
            ))}
          </div>
          <div className="mt-4 flex gap-2">
            <span className="rounded-full bg-accent px-3 py-1 text-[10px] font-semibold text-accent-foreground">Sequential</span>
            <span className="rounded-full border px-3 py-1 text-[10px] font-semibold">Parallel</span>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="w-full max-w-64 rotate-[2deg] rounded-2xl border bg-background p-5 shadow-xl">
      <div className="mb-5 flex items-center gap-2 text-[10px] font-bold tracking-widest text-primary"><Eye className="size-4" />TRACKING</div>
      <div className="flex flex-col gap-3">
        {[{ name: 'Legal Review', done: true }, { name: 'Finance', done: true }, { name: 'CEO Sign-off', done: false }].map(({ name, done }) => (
          <div key={name} className="flex items-center justify-between rounded-lg bg-secondary px-3 py-2">
            <span className="text-xs font-medium">{name}</span>
            {done ? <span className="flex size-5 items-center justify-center rounded-full bg-primary/20 text-primary"><Check className="size-3" /></span> : <span className="size-5 rounded-full border-2 border-dashed border-muted-foreground/30" />}
          </div>
        ))}
      </div>
      <div className="mt-4 flex items-center gap-2"><span className="flex h-8 flex-1 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">VIEW FULL TRAIL</span></div>
    </div>
  );
}


/* ─── FAQ accordion (eSignature card pattern) ─── */
function DocSignFAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      {faqs.map((item, i) => {
        const open = openIndex === i;
        return (
          <div
            key={item.a}
            style={{
              background: '#fff',
              border: `1px solid ${open ? '#E4DBF7' : '#EDEBF2'}`,
              borderRadius: '16px',
              overflow: 'hidden',
              boxShadow: open ? '0 16px 34px -24px rgba(124,58,237,.3)' : 'none',
              transition: 'border-color .2s, box-shadow .2s',
            }}
          >
            <button
              type="button"
              onClick={() => setOpenIndex(open ? -1 : i)}
              aria-expanded={open}
              style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px', padding: '20px 24px', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', fontFamily: 'inherit' }}
            >
              <span style={{ fontSize: '16.5px', fontWeight: 600, color: '#1B1730' }}>
                {item.q}
              </span>
              <span style={{ flexShrink: 0, width: '28px', height: '28px', borderRadius: '8px', background: open ? '#7C3AED' : '#F5F3FF', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'background .2s' }}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke={open ? '#fff' : '#7C3AED'} strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" style={{ transform: `rotate(${open ? 45 : 0}deg)`, transition: 'transform .25s' }}>
                  <line x1="12" y1="5" x2="12" y2="19" />
                  <line x1="5" y1="12" x2="19" y2="12" />
                </svg>
              </span>
            </button>
            {open && (
              <div style={{ padding: '0 24px 22px', fontSize: '15px', lineHeight: 1.6, color: '#5B5670', maxWidth: '660px' }}>{item.a}</div>
            )}
          </div>
        );
      })}
    </div>
  );
}
