import type { Metadata } from 'next';
import { Scale, ShieldCheck } from 'lucide-react';
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
  SnippetRegulationMapVisual,
  SnippetComplianceShieldVisual,
  SnippetRetentionPolicyVisual,
  StepMapObligationsVisual,
  StepEnforceRetentionVisual,
  StepReportOnDemandVisual,
  MultiFrameworkVisual,
  RetentionLifecycleVisual,
} from './visuals';

export const metadata: Metadata = {
  title: 'Industry Regulations - Built with the controls regulated industries need | Snaarp',
  description:
    'HIPAA, PCI DSS, FERPA and more. The controls regulated industries need to say yes are built into the Stack, with automated retention, access logs, and one-click evidence.',
};

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
    eyebrow: 'WE MAP REGULATIONS',
    title: (
      <>
        HIPAA, PCI DSS, FERPA <span style={{ color: '#8B85A0', fontWeight: 500 }}>covered from day one.</span>
      </>
    ),
    visual: <SnippetRegulationMapVisual />,
    tilt: 'tiltLeft',
  },
  {
    eyebrow: 'WE PROTECT DATA',
    title: (
      <>
        One platform, <span style={{ color: '#8B85A0', fontWeight: 500 }}>every regulation handled.</span>
      </>
    ),
    visual: <SnippetComplianceShieldVisual />,
    tilt: 'lifted',
  },
  {
    eyebrow: 'WE ENFORCE RETENTION',
    title: (
      <>
        Auto-applied policies, <span style={{ color: '#8B85A0', fontWeight: 500 }}>per industry requirement.</span>
      </>
    ),
    visual: <SnippetRetentionPolicyVisual />,
    tilt: 'tiltRight',
  },
];

const appChips: SolutionAppChip[] = [
  { name: 'Lock', desc: 'Encrypted vault with immutable logs that satisfy audit requirements across industries.', href: '/products/lock', tint: 'violet', icon: { kind: 'img', src: '/assets/icons/apps-lock.jpg' }, external: false },
  { name: 'Work Drive', desc: 'File storage with retention policies, encryption, and granular access for regulated data.', href: '/products/work-drive', tint: 'teal', icon: { kind: 'lucide', Icon: ShieldCheck }, external: false },
  { name: 'eSignature', desc: 'Legally binding signatures with full audit trails for compliance agreements.', href: '/products/esignature', tint: 'amber', icon: { kind: 'lucide', Icon: Scale }, external: false },
  { name: 'Document', desc: 'Version-controlled policies and procedures with change history for evidence.', href: '/products/docs', tint: 'rose', icon: { kind: 'img', src: '/assets/icons/apps-document.png' }, external: false },
];

const steps: SolutionStep[] = [
  { number: '01', title: 'Map your obligations', desc: 'Select your industry and the platform automatically maps the relevant regulatory controls to your existing tools. HIPAA, PCI DSS, FERPA, and more.', visual: <StepMapObligationsVisual /> },
  { number: '02', title: 'Enforce retention rules', desc: 'Data retention policies are applied automatically based on regulatory requirements. Financial records kept for 7 years, healthcare for 6, education for 5.', visual: <StepEnforceRetentionVisual /> },
  { number: '03', title: 'Report on demand', desc: 'Generate compliance evidence packs per framework with one click. Access logs, encryption certificates, and control status exported for your auditor instantly.', visual: <StepReportOnDemandVisual /> },
];

const featureRows: SolutionFeatureRow[] = [
  {
    tag: 'Multi-framework',
    tagColor: '#7C3AED',
    tagBg: '#F3EFFF',
    tagBorder: '#E6DEFA',
    heading: 'One platform, every regulation your industry demands',
    desc: 'Healthcare, finance, education, and beyond. The same controls satisfy multiple frameworks simultaneously, so you are not re-doing work for every new regulation that applies.',
    visual: <MultiFrameworkVisual />,
    mockSide: 'right',
  },
  {
    tag: 'Data lifecycle',
    tagColor: '#0E9384',
    tagBg: '#ECFDF9',
    tagBorder: '#CDF5EE',
    heading: 'Retention and disposal that runs itself',
    desc: 'Data is encrypted on creation, retained for exactly as long as the regulation requires, and securely disposed of with a certificate when the policy window closes. No manual tracking.',
    visual: <RetentionLifecycleVisual />,
    mockSide: 'left',
  },
];

const testimonials: SolutionTestimonialItem[] = [
  {
    quote: 'We operate in healthcare and finance simultaneously. One platform covering both HIPAA and PCI DSS saved us from managing two separate compliance stacks.',
    initials: 'AO',
    avatarBg: '#EDE9FE',
    avatarColor: '#7C3AED',
    name: 'A. Okafor',
    role: 'Chief Compliance Officer',
  },
  {
    quote: 'The automated retention policies mean we never worry about holding data too long or deleting it too early. The regulation decides, the platform enforces.',
    initials: 'JL',
    avatarBg: '#D5F5EF',
    avatarColor: '#0E9384',
    name: 'J. Lawson',
    role: 'Data Governance Lead',
  },
  {
    quote: 'When our auditor asked for FERPA evidence, we had it exported in under a minute. That used to be a two-week project across three departments.',
    initials: 'KN',
    avatarBg: '#FFF1F2',
    avatarColor: '#B4356B',
    name: 'K. Nguyen',
    role: 'Head of IT, Education',
  },
];

export default function IndustryRegulationsPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="solution-page">
        <SolutionHero
          badgeTag="SOLUTION"
          badgeText="Built for regulated industries"
          heading={
            <>
              Built with the controls regulated industries need to say{' '}
              <span style={{ display: 'inline-block', background: 'linear-gradient(135deg,#7C3AED,#6D28D9)', color: '#fff', padding: '2px 18px 6px', borderRadius: '16px', boxShadow: '0 14px 30px -12px rgba(124,58,237,.6)', transform: 'rotate(-1.2deg)' }}>
                yes.
              </span>
            </>
          }
          lede="HIPAA, PCI DSS, FERPA, and beyond. The controls regulated industries need are built into the Stack with automated retention, encrypted storage, access logs, and one-click evidence packs for your auditor."
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
          heading="How Industry Regulations Works"
          steps={steps}
        />

        <SolutionFeatureRows rows={featureRows} />

        <SolutionTestimonial
          eyebrow="What regulated teams say"
          heading="Compliance built in, not bolted on after the audit."
          testimonials={testimonials}
          todoNote="TODO - real quote"
        />

        <HomeFinalCTA />
      </main>
      <Footer />
    </>
  );
}
