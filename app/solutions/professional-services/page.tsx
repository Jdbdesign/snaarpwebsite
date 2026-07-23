import type { Metadata } from 'next';
import { Users, BookOpen, FileText, Calendar } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { SolutionHero, type SolutionCta, type SolutionSnippetCard } from '@/components/solutions/SolutionHero';
import { SolutionTrustStrip } from '@/components/solutions/SolutionTrustStrip';
import { SolutionAppChips, type SolutionAppChip } from '@/components/solutions/SolutionAppChips';
import { SolutionHowItWorks, type SolutionStep } from '@/components/solutions/SolutionHowItWorks';
import { SolutionFeatureRows, type SolutionFeatureRow } from '@/components/solutions/SolutionFeatureRows';
import { SolutionTestimonial, type SolutionTestimonialItem } from '@/components/solutions/SolutionTestimonial';
import { HomeFinalCTA } from '@/components/HomeFinalCTA';
import { Price } from '@/components/currency/Price';
import {
  SnippetCrmRecordVisual,
  SnippetInvoiceVisual,
  SnippetDocCursorsVisual,
  StepBringOnVisual,
  StepDoWorkVisual,
  StepGetPaidVisual,
  ClientRecordVisual,
  ClientPortalVisual,
} from './visuals';

export const metadata: Metadata = {
  title: 'Professional Services — Client work, organized for once | Snaarp',
  description:
    'Every client, every invoice, every shared doc — in one place. Built for agencies, consultancies, and firms that live and die by client work.',
};

const CHECK_ICON = (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#14B8A6" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 6 9 17l-5-5"></path>
  </svg>
);

const CALENDAR_ICON = (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2.5"></rect>
    <path d="M16 2v4M8 2v4M3 10h18"></path>
  </svg>
);

const heroCtas: SolutionCta[] = [
  { label: <>Start for <Price amount={2} />/month</>, href: '/pricing', variant: 'primary' },
  { label: 'Book a Call', href: '#', variant: 'secondary', icon: CALENDAR_ICON },
];

const snippetCards: SolutionSnippetCard[] = [
  {
    eyebrow: 'WE MAKE IT EASY',
    title: (
      <>
        Every client, one record, <span style={{ color: '#8B85A0', fontWeight: 500 }}>always current.</span>
      </>
    ),
    visual: <SnippetCrmRecordVisual />,
    tilt: 'tiltLeft',
  },
  {
    eyebrow: 'WE GET YOU PAID',
    title: (
      <>
        Invoice a client <span style={{ color: '#8B85A0', fontWeight: 500 }}>the moment the work&apos;s done.</span>
      </>
    ),
    visual: <SnippetInvoiceVisual />,
    tilt: 'lifted',
  },
  {
    eyebrow: 'WE KEEP IT TOGETHER',
    title: (
      <>
        Share a doc, a call, a file — <span style={{ color: '#8B85A0', fontWeight: 500 }}>all in one thread.</span>
      </>
    ),
    visual: <SnippetDocCursorsVisual />,
    tilt: 'tiltRight',
  },
];

// All four apps have real product pages. Books doesn't have a dedicated page
// yet (/products/books doesn't exist), so it uses external: true with homepage fallback.
// Document uses /products/docs (the real route, not /products/document from standalone).
const appChips: SolutionAppChip[] = [
  { name: 'CRM', desc: 'Track every client relationship from first call to renewal.', href: '/products/crm', tint: 'violet', icon: { kind: 'lucide', Icon: Users }, external: false },
  { name: 'Books', desc: 'Invoice clients and keep the books current, automatically.', href: '/', tint: 'amber', icon: { kind: 'lucide', Icon: BookOpen }, external: true },
  { name: 'Document', desc: 'Share proposals, briefs, and reports your client can comment on live.', href: '/products/docs', tint: 'teal', icon: { kind: 'lucide', Icon: FileText }, external: false },
  { name: 'Kalender', desc: 'Let clients book time with you without the back-and-forth.', href: '/products/kalender', tint: 'rose', icon: { kind: 'lucide', Icon: Calendar }, external: false },
];

const steps: SolutionStep[] = [
  { number: '01', title: 'Bring on a client', desc: 'Add a client to CRM once — their contact info, project value, and history live in one place from day one.', visual: <StepBringOnVisual /> },
  { number: '02', title: 'Do the work, together', desc: "Share proposals, briefs, and reports in Document — your client can comment and see updates live, not just a PDF attachment.", visual: <StepDoWorkVisual /> },
  { number: '03', title: 'Get paid', desc: "When the work\u2019s done, send the invoice straight from Books \u2014 no re-entering client details.", visual: <StepGetPaidVisual /> },
];

const featureRows: SolutionFeatureRow[] = [
  {
    tag: 'One place',
    tagColor: '#7C3AED',
    tagBg: '#F3EFFF',
    tagBorder: '#E6DEFA',
    heading: 'Every client relationship, in one place',
    desc: "No more digging through email to remember what a client asked for last month \u2014 it\u2019s all attached to their record.",
    visual: <ClientRecordVisual />,
    mockSide: 'right',
  },
  {
    tag: 'Self-serve',
    tagColor: '#B4356B',
    tagBg: '#FEF0F4',
    tagBorder: '#F7D3DD',
    heading: 'Clients who can book, comment, and pay without the back-and-forth',
    desc: 'Let clients book their own time, comment directly on shared work, and get invoiced \u2014 without a single "just following up" email.',
    visual: <ClientPortalVisual />,
    mockSide: 'left',
  },
];

// Placeholder testimonials — per CLAUDE.md rule #5 (3-card grid).
const testimonials: SolutionTestimonialItem[] = [
  {
    quote: "As a five-person agency, we don\u2019t have time for five different tools. This is genuinely the first system that felt built for how we actually work with clients.",
    initials: 'RM',
    avatarBg: '#EDE9FE',
    avatarColor: '#7C3AED',
    name: 'Rachel M.',
    role: 'Founder & Creative Director',
  },
  {
    quote: "I used to dread invoicing day. Now it\u2019s literally one click from the CRM record \u2014 client details, project value, everything\u2019s already there.",
    initials: 'DK',
    avatarBg: '#FEF6E7',
    avatarColor: '#B45309',
    name: 'Daniel K.',
    role: 'Managing Partner',
  },
  {
    quote: "Our clients love that they can comment on proposals and book calls without creating yet another account. Less friction, faster sign-offs.",
    initials: 'SP',
    avatarBg: '#FFF1F2',
    avatarColor: '#B4356B',
    name: 'Sarah P.',
    role: 'Client Services Lead',
  },
];

export default function ProfessionalServicesPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="solution-page">
        <SolutionHero
          badgeTag="SOLUTION"
          badgeText="Built for client work"
          heading={
            <>
              Client work,{' '}
              <span style={{ display: 'inline-block', background: 'linear-gradient(135deg,#7C3AED,#6D28D9)', color: '#fff', padding: '2px 18px 6px', borderRadius: '16px', boxShadow: '0 14px 30px -12px rgba(124,58,237,.6)', transform: 'rotate(-1.2deg)' }}>
                organized
              </span>{' '}
              for once.
            </>
          }
          lede="Every client, every invoice, every shared doc — in one place instead of scattered across a CRM, an inbox, and three different folders. Built for agencies, consultancies, and firms that live and die by client work."
          ctas={heroCtas}
          trustIcon={CHECK_ICON}
          trustText="GDPR compliant · No credit card required"
          snippetCards={snippetCards}
        />

        <SolutionTrustStrip
          label="Works with the tools you already use"
          logos={['Google', 'Slack', 'Dropbox', 'Microsoft', 'Zoom', 'Salesforce', 'Okta']}
        />

        <SolutionAppChips
          eyebrow="Built from apps you already know"
          heading="This solution is four Snaarp apps, working as one."
          apps={appChips}
        />

        <SolutionHowItWorks
          eyebrow="The flow"
          heading="How Professional Services Works"
          steps={steps}
        />

        <SolutionFeatureRows rows={featureRows} />

        <SolutionTestimonial
          eyebrow="What service teams say"
          heading="Client work that actually feels manageable."
          testimonials={testimonials}
          todoNote="TODO · real quote"
        />

        <HomeFinalCTA />
      </main>
      <Footer />
    </>
  );
}
