import type { Metadata } from 'next';
import { Users, BookOpen } from 'lucide-react';
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
  SnippetCustomerCrmVisual,
  SnippetShippingMailVisual,
  SnippetInvoicePaidVisual,
  StepTrackCustomerVisual,
  StepKeepUpdatedVisual,
  StepGetPaidVisual,
  CustomerProfileVisual,
  OrderAutomationVisual,
} from './visuals';

export const metadata: Metadata = {
  title: 'Retail & Ecommerce - Sell more. Chase less. | Snaarp',
  description:
    'Customer relationships, order communication, and invoicing - in one place instead of a separate tool for every part of running the business behind the storefront.',
};

const CHECK_ICON = (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#14B8A6" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 6 9 17l-5-5" />
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
    eyebrow: 'WE KNOW YOUR CUSTOMERS',
    title: (
      <>
        Purchase history, preferences, <span style={{ color: '#8B85A0', fontWeight: 500 }}>one view.</span>
      </>
    ),
    visual: <SnippetCustomerCrmVisual />,
    tilt: 'tiltLeft',
  },
  {
    eyebrow: 'WE KEEP THEM UPDATED',
    title: (
      <>
        Order updates <span style={{ color: '#8B85A0', fontWeight: 500 }}>that send themselves.</span>
      </>
    ),
    visual: <SnippetShippingMailVisual />,
    tilt: 'lifted',
  },
  {
    eyebrow: 'WE HANDLE THE INVOICE',
    title: (
      <>
        Payments tracked, <span style={{ color: '#8B85A0', fontWeight: 500 }}>receipts sent automatically.</span>
      </>
    ),
    visual: <SnippetInvoicePaidVisual />,
    tilt: 'tiltRight',
  },
];

const appChips: SolutionAppChip[] = [
  { name: 'CRM', desc: 'Track customers, purchase history, and preferences in one record.', href: '/products/crm', tint: 'violet', icon: { kind: 'lucide', Icon: Users }, external: false },
  { name: 'Mail', desc: 'Send order updates, shipping confirmations, and promos that land.', href: '/products/mail', tint: 'amber', icon: { kind: 'img', src: '/assets/icons/envelope.jpg' }, external: false },
  { name: 'Books', desc: 'Invoice, reconcile, and keep the numbers straight automatically.', href: '/', tint: 'teal', icon: { kind: 'lucide', Icon: BookOpen }, external: true },
];

const steps: SolutionStep[] = [
  { number: '01', title: 'Track the customer', desc: 'Every buyer - first-timers, repeat customers, VIPs - lives in one CRM record with their full purchase and communication history.', visual: <StepTrackCustomerVisual /> },
  { number: '02', title: 'Keep them updated', desc: 'Shipping confirmations, delivery updates, and follow-ups send automatically when an order status changes - no manual emailing.', visual: <StepKeepUpdatedVisual /> },
  { number: '03', title: 'Get paid, stay reconciled', desc: 'Invoices go out, payments land, and Books keeps the numbers reconciled - ready for tax season without a scramble.', visual: <StepGetPaidVisual /> },
];

const featureRows: SolutionFeatureRow[] = [
  {
    tag: 'Customer view',
    tagColor: '#7C3AED',
    tagBg: '#F3EFFF',
    tagBorder: '#E6DEFA',
    heading: 'Every customer, one record - not a support ticket and a spreadsheet',
    desc: 'See a customer\u2019s full order history, communication, preferences, and lifetime value in one place - no more cross-referencing spreadsheets with your storefront admin.',
    visual: <CustomerProfileVisual />,
    mockSide: 'right',
  },
  {
    tag: 'Automated updates',
    tagColor: '#D97706',
    tagBg: '#FEF6E7',
    tagBorder: '#FBEBC6',
    heading: 'Order updates that send themselves',
    desc: 'Shipping confirmations, delivery notices, and post-purchase follow-ups go out automatically - your team stops spending half the day answering "where is my order?" manually.',
    visual: <OrderAutomationVisual />,
    mockSide: 'left',
  },
];

const testimonials: SolutionTestimonialItem[] = [
  {
    quote: "We used to answer the same 'where is my order' question a dozen times a day by hand. Now it is just sent automatically before anyone has to ask.",
    initials: 'OC',
    avatarBg: '#EDE9FE',
    avatarColor: '#7C3AED',
    name: 'Olivia Chen',
    role: 'Operations Manager',
  },
  {
    quote: "Having every customer in one record with their full order history means support calls take half the time they used to.",
    initials: 'RJ',
    avatarBg: '#D5F5EF',
    avatarColor: '#0E9384',
    name: 'Ryan James',
    role: 'Customer Service Lead',
  },
  {
    quote: "Books reconciles everything overnight. I used to spend Friday afternoons matching payments to orders - now it just happens.",
    initials: 'MP',
    avatarBg: '#FFF1F2',
    avatarColor: '#B4356B',
    name: 'Maya Patel',
    role: 'Finance Director',
  },
];

export default function RetailEcommercePage() {
  return (
    <>
      <Header />
      <main id="main-content" className="solution-page">
        <SolutionHero
          badgeTag="SOLUTION"
          badgeText="Run the business, not just the storefront"
          heading={
            <>
              Sell more. Chase{' '}
              <span style={{ display: 'inline-block', background: 'linear-gradient(135deg,#7C3AED,#6D28D9)', color: '#fff', padding: '2px 18px 6px', borderRadius: '16px', boxShadow: '0 14px 30px -12px rgba(124,58,237,.6)', transform: 'rotate(-1.2deg)' }}>
                less.
              </span>
            </>
          }
          lede="Customer relationships, order communication, and invoicing - in one place instead of a separate tool for every part of running the business behind the storefront."
          ctas={heroCtas}
          trustIcon={CHECK_ICON}
          trustText="GDPR compliant \u00b7 No credit card required"
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
          heading="How Retail & Ecommerce Works"
          steps={steps}
        />

        <SolutionFeatureRows rows={featureRows} />

        <SolutionTestimonial
          eyebrow="What retail teams say"
          heading="Sell more. Chase less. Every day."
          testimonials={testimonials}
          todoNote="TODO \u00b7 real quote"
        />

        <HomeFinalCTA />
      </main>
      <Footer />
    </>
  );
}
