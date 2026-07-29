import type { Metadata } from 'next';
import { FileLock2, ShieldCheck } from 'lucide-react';
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
  SnippetAuditLogVisual,
  SnippetComplianceCheckVisual,
  SnippetEncryptionVisual,
  StepLogEverythingVisual,
  StepEnforceAccessVisual,
  StepProveItVisual,
  AuditTrailVisual,
  EvidenceExportVisual,
} from './visuals';

export const metadata: Metadata = {
  title: 'SOC 2-Aligned Security - Audit-ready from day one | Snaarp',
  description:
    'Access logs, encryption, identity controls, and evidence exports aligned to the SOC 2 Trust Service Criteria - built into the Stack, not bolted on after.',
};

// Lock icon + "Encrypted end-to-end" trust line (same as GDPR page)
const LOCK_ICON = (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#14B8A6" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="11" rx="2"></rect>
    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
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
    eyebrow: 'WE LOG EVERYTHING',
    title: (
      <>
        Every access event, <span style={{ color: '#8B85A0', fontWeight: 500 }}>tamper-proof and timestamped.</span>
      </>
    ),
    visual: <SnippetAuditLogVisual />,
    tilt: 'tiltLeft',
  },
  {
    eyebrow: 'WE MAP CONTROLS',
    title: (
      <>
        Five trust principles, <span style={{ color: '#8B85A0', fontWeight: 500 }}>covered out of the box.</span>
      </>
    ),
    visual: <SnippetComplianceCheckVisual />,
    tilt: 'lifted',
  },
  {
    eyebrow: 'WE ENCRYPT EVERYTHING',
    title: (
      <>
        At rest and in transit, <span style={{ color: '#8B85A0', fontWeight: 500 }}>AES-256 by default.</span>
      </>
    ),
    visual: <SnippetEncryptionVisual />,
    tilt: 'tiltRight',
  },
];

const appChips: SolutionAppChip[] = [
  { name: 'Lock', desc: 'Encrypted credential vault with immutable access logs for every entry.', href: '/products/lock', tint: 'violet', icon: { kind: 'img', src: '/assets/icons/apps-lock.jpg' }, external: false },
  { name: 'Work Drive', desc: 'File storage with AES-256 encryption and granular sharing controls.', href: '/products/work-drive', tint: 'teal', icon: { kind: 'lucide', Icon: FileLock2 }, external: false },
  { name: 'Teams', desc: 'Role-based access groups with audit-ready permission histories.', href: '/products/teams', tint: 'amber', icon: { kind: 'lucide', Icon: ShieldCheck }, external: false },
  { name: 'Document', desc: 'Version-controlled policies with full change history for evidence.', href: '/products/docs', tint: 'rose', icon: { kind: 'img', src: '/assets/icons/apps-document.png' }, external: false },
];

const steps: SolutionStep[] = [
  { number: '01', title: 'Log everything', desc: 'Every login, file access, permission change, and data export is logged automatically with an immutable timestamp. No manual tracking, no gaps.', visual: <StepLogEverythingVisual /> },
  { number: '02', title: 'Enforce access controls', desc: 'Role-based permissions ensure every team member has exactly the access they need. Changes are logged and reversible, with full attribution.', visual: <StepEnforceAccessVisual /> },
  { number: '03', title: 'Prove it on demand', desc: 'When an auditor asks for evidence, generate a compliance pack in one click. Access logs, encryption status, and control mappings exported instantly.', visual: <StepProveItVisual /> },
];

const featureRows: SolutionFeatureRow[] = [
  {
    tag: 'Audit trail',
    tagColor: '#7C3AED',
    tagBg: '#F3EFFF',
    tagBorder: '#E6DEFA',
    heading: 'Every event logged, nothing deleted, nothing altered',
    desc: 'Immutable audit logs capture every meaningful action across the Stack. When your auditor asks for evidence of who did what and when, the answer is already there.',
    visual: <AuditTrailVisual />,
    mockSide: 'right',
  },
  {
    tag: 'Evidence on demand',
    tagColor: '#0E9384',
    tagBg: '#ECFDF9',
    tagBorder: '#CDF5EE',
    heading: 'Generate your evidence pack in one click, not one sprint',
    desc: 'All five SOC 2 Trust Service Criteria mapped to controls that are already active. Export the full evidence pack for your auditor without scrambling.',
    visual: <EvidenceExportVisual />,
    mockSide: 'left',
  },
];

const testimonials: SolutionTestimonialItem[] = [
  {
    quote: 'Our SOC 2 audit took three weeks instead of three months. The evidence was already there, we just exported it.',
    initials: 'DK',
    avatarBg: '#EDE9FE',
    avatarColor: '#7C3AED',
    name: 'D. Kim',
    role: 'VP of Engineering',
  },
  {
    quote: 'No more spreadsheets tracking who has access to what. The audit log does it automatically and the auditor loved it.',
    initials: 'SP',
    avatarBg: '#D5F5EF',
    avatarColor: '#0E9384',
    name: 'S. Patel',
    role: 'Head of Compliance',
  },
  {
    quote: 'We used to dread the annual audit. Now it is a one-click export and a short conversation. Night and day difference.',
    initials: 'RM',
    avatarBg: '#FFF1F2',
    avatarColor: '#B4356B',
    name: 'R. Martinez',
    role: 'CTO',
  },
];

export default function Soc2AlignedSecurityPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="solution-page">
        <SolutionHero
          badgeTag="SOLUTION"
          badgeText="Built for audit-ready teams"
          heading={
            <>
              Audit-ready from{' '}
              <span style={{ display: 'inline-block', background: 'linear-gradient(135deg,#7C3AED,#6D28D9)', color: '#fff', padding: '2px 18px 6px', borderRadius: '16px', boxShadow: '0 14px 30px -12px rgba(124,58,237,.6)', transform: 'rotate(-1.2deg)' }}>
                day one.
              </span>
            </>
          }
          lede="Access logs, AES-256 encryption, identity controls, and one-click evidence exports aligned to the SOC 2 Trust Service Criteria. Built into the Stack so you stay audit-ready without a separate compliance tool."
          ctas={heroCtas}
          trustIcon={LOCK_ICON}
          trustText="Encrypted end-to-end &middot; No credit card required"
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
          heading="How SOC 2-Aligned Security Works"
          steps={steps}
        />

        <SolutionFeatureRows rows={featureRows} />

        <SolutionTestimonial
          eyebrow="What audit-ready teams say"
          heading="Security controls that prove themselves when it matters."
          testimonials={testimonials}
          todoNote="TODO - real quote"
        />

        <HomeFinalCTA />
      </main>
      <Footer />
    </>
  );
}
