import type { Metadata } from 'next';
import { FileType, FileCheck, PenLine } from 'lucide-react';
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
  SnippetApprovalStepperVisual,
  SnippetSignatureVisual,
  SnippetStatusTimelineVisual,
  StepReviewVisual,
  StepApproveVisual,
  StepSignVisual,
  ApprovalDashboardVisual,
  SignatureTimelineVisual,
} from './visuals';

export const metadata: Metadata = {
  title: 'Document & Contract Approval — Paperwork that moves itself | Snaarp',
  description:
    'Route it, approve it, sign it — without a single forwarded email. Every document knows where it\u2019s going next, and you always know where it\u2019s stuck.',
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
        One approval chain. <span style={{ color: '#8B85A0', fontWeight: 500 }}>No guessing who&apos;s next.</span>
      </>
    ),
    visual: <SnippetApprovalStepperVisual />,
    tilt: 'tiltLeft',
  },
  {
    eyebrow: 'WE GET IT SIGNED',
    title: (
      <>
        Send it out, watch it get signed, <span style={{ color: '#8B85A0', fontWeight: 500 }}>no download required.</span>
      </>
    ),
    visual: <SnippetSignatureVisual />,
    tilt: 'lifted',
  },
  {
    eyebrow: 'WE SHOW YOU PROGRESS',
    title: (
      <>
        See exactly where <span style={{ color: '#8B85A0', fontWeight: 500 }}>every document stands.</span>
      </>
    ),
    visual: <SnippetStatusTimelineVisual />,
    tilt: 'tiltRight',
  },
];

// Doc Sign does NOT have a dedicated product page yet (no /products/doc-sign
// route exists). It's listed in ProductsMegaMenu without an href. Using '/'
// with external:true as fallback (shows "In the Stack" badge) until that
// page is built. PDF Reader and eSignature have real product pages.
// Icons match ProductsMegaMenu.tsx: FileType (PDF Reader), FileCheck (Doc Sign),
// PenLine (eSignature).
const appChips: SolutionAppChip[] = [
  { name: 'PDF Reader', desc: 'Mark up, highlight, and comment before it moves on.', href: '/products/pdf-reader', tint: 'violet', icon: { kind: 'lucide', Icon: FileType }, external: false },
  { name: 'Doc Sign', desc: 'Route documents through your internal approval chain.', href: '/', tint: 'teal', icon: { kind: 'lucide', Icon: FileCheck }, external: true },
  { name: 'eSignature', desc: 'Send out for external signature — no re-upload needed.', href: '/products/esignature', tint: 'rose', icon: { kind: 'lucide', Icon: PenLine }, external: false },
];

const steps: SolutionStep[] = [
  { number: '01', title: 'Review', desc: 'PDF Reader lets you mark up comments and highlights before anything moves forward.', visual: <StepReviewVisual /> },
  { number: '02', title: 'Approve', desc: 'Doc Sign routes the document through your internal approval chain — one step at a time.', visual: <StepApproveVisual /> },
  { number: '03', title: 'Sign', desc: 'eSignature sends it out for external signature. No re-upload, no forwarded email.', visual: <StepSignVisual /> },
];

const featureRows: SolutionFeatureRow[] = [
  {
    tag: 'Visibility',
    tagColor: '#7C3AED',
    tagBg: '#F3EFFF',
    tagBorder: '#E6DEFA',
    heading: 'No more guessing who\u2019s holding things up',
    desc: 'Every document has a live approval chain. You can see exactly which step it\u2019s on, who\u2019s reviewing, and how long they\u2019ve had it — without sending a single follow-up.',
    visual: <ApprovalDashboardVisual />,
    mockSide: 'right',
  },
  {
    tag: 'Handoff',
    tagColor: '#0E9384',
    tagBg: '#ECFDF9',
    tagBorder: '#CDF5EE',
    heading: 'From internal sign-off to external signature, in one flow',
    desc: 'Once your team approves internally, the document moves straight to external recipients for signature — no downloading, re-uploading, or switching tools.',
    visual: <SignatureTimelineVisual />,
    mockSide: 'left',
  },
];

// TODO: replace with real customer quotes before launch — these are
// fictional placeholders. The standalone design bundle used a single
// centered testimonial; this project's standing rule for Solution pages
// (CLAUDE.md rule #5) requires the CRM 3-card grid layout instead,
// so these are written one-per-step of the How It Works flow
// (Review/Approve/Sign).
const testimonials: SolutionTestimonialItem[] = [
  {
    quote: 'Contracts used to sit in someone\u2019s inbox for a week. Now I can see exactly which step it\u2019s stuck on.',
    initials: 'RK',
    avatarBg: '#EDE9FE',
    avatarColor: '#7C3AED',
    name: 'Rachel K.',
    role: 'Operations Manager',
  },
  {
    quote: 'We cut our approval cycle from five days to one. The chain just moves itself now — no chasing.',
    initials: 'DM',
    avatarBg: '#D5F5EF',
    avatarColor: '#0E9384',
    name: 'David M.',
    role: 'Head of Legal',
  },
  {
    quote: 'The handoff from internal approval to external signing used to involve three emails and a download. Now it\u2019s automatic.',
    initials: 'NP',
    avatarBg: '#FDF2F8',
    avatarColor: '#9D174D',
    name: 'Nina P.',
    role: 'Client Services Lead',
  },
];

export default function DocumentContractApprovalPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="solution-page">
        <SolutionHero
          badgeTag="SOLUTION"
          badgeText="No more inbox chasing"
          heading={
            <>
              Paperwork that moves{' '}
              <span style={{ display: 'inline-block', background: 'linear-gradient(135deg,#7C3AED,#6D28D9)', color: '#fff', padding: '2px 18px 6px', borderRadius: '16px', boxShadow: '0 14px 30px -12px rgba(124,58,237,.6)', transform: 'rotate(-1.2deg)' }}>
                itself.
              </span>
            </>
          }
          lede="Route it, approve it, sign it &mdash; without a single forwarded email. Every document knows where it&rsquo;s going next, and you always know where it&rsquo;s stuck."
          ctas={heroCtas}
          trustIcon={CHECK_ICON}
          trustText="GDPR compliant &middot; No credit card required"
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
          heading="How Document & Contract Approval Works"
          steps={steps}
        />

        <SolutionFeatureRows rows={featureRows} />

        <SolutionTestimonial
          eyebrow="What operations teams say"
          heading="Approvals that don&rsquo;t disappear into someone&rsquo;s inbox."
          testimonials={testimonials}
          todoNote="TODO &middot; real quote"
        />

        <HomeFinalCTA />
      </main>
      <Footer />
    </>
  );
}
