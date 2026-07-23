import type { Metadata } from 'next';
import { BookOpen, Calculator, UsersRound } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { SolutionHero, type SolutionCta, type SolutionSnippetCard } from '@/components/solutions/SolutionHero';
import { SolutionTrustStrip } from '@/components/solutions/SolutionTrustStrip';
import { SolutionAppChips, type SolutionAppChip } from '@/components/solutions/SolutionAppChips';
import { SolutionHowItWorks, type SolutionStep } from '@/components/solutions/SolutionHowItWorks';
import { SolutionFeatureRows, type SolutionFeatureRow } from '@/components/solutions/SolutionFeatureRows';
import { SolutionTestimonial, type SolutionTestimonialItem } from '@/components/solutions/SolutionTestimonial';
import { HomeFinalCTA } from '@/components/HomeFinalCTA';
import {
  SnippetInvoiceVisual,
  SnippetLedgerVisual,
  SnippetPayrollVisual,
  StepInvoiceVisual,
  StepReconcileVisual,
  StepPayReportVisual,
  DealToInvoiceVisual,
  LedgerDashboardVisual,
} from './visuals';

export const metadata: Metadata = {
  title: 'Financial Operations — Get paid. Stay reconciled. | Snaarp',
  description:
    'Invoice clients, track what\u2019s owed, and keep the books straight \u2014 without a separate tool for every part of the money side of your business.',
};

const CALENDAR_ICON = (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2.5"></rect>
    <path d="M16 2v4M8 2v4M3 10h18"></path>
  </svg>
);

// ╔══════════════════════════════════════════════════════════════════════════╗
// ║  ⚠ DELIBERATE CTA / TRUST-LINE DEVIATION — DO NOT "FIX" BACK TO £2 ⚠  ║
// ║  This is the ONLY Solution page that does NOT use "Start for £2/month". ║
// ║  WHY: it composes Accounting Software, which is NOT on the £2 Starter   ║
// ║  plan (its own product page uses "See Plans & Pricing").                 ║
// ║  • Hero primary CTA  → "See Plans & Pricing"                           ║
// ║  • Hero trust line   → REMOVED (no "GDPR compliant · No credit card")  ║
// ║  • Final CTA button  → "See Plans & Pricing"                           ║
// ║  • Final CTA subtext → "See the plan that fits your team."             ║
// ╚══════════════════════════════════════════════════════════════════════════╝
const heroCtas: SolutionCta[] = [
  { label: 'See Plans & Pricing', href: '/pricing', variant: 'primary' },
  { label: 'Book a Call', href: '#', variant: 'secondary', icon: CALENDAR_ICON },
];

const snippetCards: SolutionSnippetCard[] = [
  {
    eyebrow: 'WE MAKE IT EASY',
    title: (
      <>
        Send an invoice <span style={{ color: '#8B85A0', fontWeight: 500 }}>in under a minute.</span>
      </>
    ),
    visual: <SnippetInvoiceVisual />,
    tilt: 'tiltLeft',
  },
  {
    eyebrow: 'WE KEEP THE BOOKS',
    title: (
      <>
        Every payment logs itself, <span style={{ color: '#8B85A0', fontWeight: 500 }}>automatically.</span>
      </>
    ),
    visual: <SnippetLedgerVisual />,
    tilt: 'lifted',
  },
  {
    eyebrow: 'WE HANDLE PAYROLL',
    title: (
      <>
        Pay your team, <span style={{ color: '#8B85A0', fontWeight: 500 }}>taxes calculated for you.</span>
      </>
    ),
    visual: <SnippetPayrollVisual />,
    tilt: 'tiltRight',
  },
];

// App chips: Books and Accounting Software do NOT have dedicated product pages
// yet (no /products/books or /products/accounting-software routes exist). CRM
// does (/products/crm). Icons: BookOpen for Books, Calculator for Accounting
// Software, UsersRound for CRM (mirrors ProductsMegaMenu).
const appChips: SolutionAppChip[] = [
  { name: 'Books', desc: 'Send invoices and keep bookkeeping current, automatically.', href: '/', tint: 'violet', icon: { kind: 'lucide', Icon: BookOpen }, external: true },
  { name: 'Accounting Software', desc: 'Payroll, tax prep, and full financial statements.', href: '/', tint: 'amber', icon: { kind: 'lucide', Icon: Calculator }, external: true },
  { name: 'CRM', desc: 'Bill the deals you close without re-entering a thing.', href: '/products/crm', tint: 'teal', icon: { kind: 'lucide', Icon: UsersRound }, external: false },
];

const steps: SolutionStep[] = [
  { number: '01', title: 'Invoice', desc: 'Close a deal in CRM, and send the invoice from Books without re-typing a single line item.', visual: <StepInvoiceVisual /> },
  { number: '02', title: 'Reconcile', desc: 'Every payment logs to your books automatically the moment it\u2019s received.', visual: <StepReconcileVisual /> },
  { number: '03', title: 'Pay & report', desc: 'Accounting Software runs payroll and generates financial statements, always current.', visual: <StepPayReportVisual /> },
];

const featureRows: SolutionFeatureRow[] = [
  {
    tag: 'Automatic',
    tagColor: '#7C3AED',
    tagBg: '#F3EFFF',
    tagBorder: '#E6DEFA',
    heading: 'From closed deal to sent invoice, automatically',
    desc: 'No re-entering deal details into a separate invoicing tool \u2014 close it in CRM, and the invoice is already built.',
    visual: <DealToInvoiceVisual />,
    mockSide: 'right',
  },
  {
    tag: 'Always current',
    tagColor: '#0E9384',
    tagBg: '#ECFDF9',
    tagBorder: '#CDF5EE',
    heading: 'Books that stay current without anyone touching them',
    desc: 'Every invoice paid, every expense logged \u2014 your books update themselves, so month-end isn\u2019t a scramble.',
    visual: <LedgerDashboardVisual />,
    mockSide: 'left',
  },
];

// TODO: replace with real customer quotes before launch — these are
// fictional placeholders. The standalone design bundle used a single
// centered testimonial; this project's standing rule for Solution pages
// (CLAUDE.md rule #5) requires the CRM 3-card grid layout instead,
// so these are written one-per-step of the How It Works flow
// (Invoice/Reconcile/Pay & report).
const testimonials: SolutionTestimonialItem[] = [
  {
    quote: 'I used to dread reconciling the books every month. Now it\u2019s basically already done by the time I sit down to check it.',
    initials: 'JL',
    avatarBg: '#EDE9FE',
    avatarColor: '#7C3AED',
    name: 'James L.',
    role: 'Finance Lead',
  },
  {
    quote: 'Closing a deal and having the invoice just appear in Books \u2014 no copy-paste, no mistakes. That\u2019s how it should always have worked.',
    initials: 'AM',
    avatarBg: '#D5F5EF',
    avatarColor: '#0E9384',
    name: 'Ava M.',
    role: 'Revenue Operations',
  },
  {
    quote: 'Payroll used to take half my Friday. Now Accounting Software handles the whole run and files the taxes before I\u2019ve finished my coffee.',
    initials: 'SP',
    avatarBg: '#FEF6E7',
    avatarColor: '#B45309',
    name: 'Sam P.',
    role: 'Head of Finance',
  },
];

export default function FinancialOperationsPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="solution-page">
        {/* HERO — no trustIcon/trustText (deliberately removed per pricing deviation) */}
        <SolutionHero
          badgeTag="SOLUTION"
          badgeText="Money, handled"
          heading={
            <>
              Get paid. Stay{' '}
              <span style={{ display: 'inline-block', background: 'linear-gradient(135deg,#7C3AED,#6D28D9)', color: '#fff', padding: '2px 18px 6px', borderRadius: '16px', boxShadow: '0 14px 30px -12px rgba(124,58,237,.6)', transform: 'rotate(-1.2deg)' }}>
                reconciled.
              </span>
            </>
          }
          lede="Invoice clients, track what&rsquo;s owed, and keep the books straight &mdash; without a separate tool for every part of the money side of your business."
          ctas={heroCtas}
          snippetCards={snippetCards}
        />

        <SolutionTrustStrip
          label="Works with the tools you already use"
          logos={['Google', 'Slack', 'Dropbox', 'Microsoft', 'Zoom', 'Salesforce', 'Okta']}
        />

        <SolutionAppChips
          eyebrow="Built from apps you already know"
          heading="This solution is three Snaarp apps, working as one."
          apps={appChips}
          columns={3}
        />

        <SolutionHowItWorks
          eyebrow="The flow"
          heading="How Financial Operations Works"
          steps={steps}
        />

        <SolutionFeatureRows rows={featureRows} />

        <SolutionTestimonial
          eyebrow="What finance teams say"
          heading="The money side of your business, finally sorted."
          testimonials={testimonials}
          todoNote="TODO &middot; real quote"
        />

        <HomeFinalCTA />
      </main>
      <Footer />
    </>
  );
}
