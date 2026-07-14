import type { Metadata } from 'next';
import { UsersRound, Zap } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ContactsHero } from '@/components/contacts/ContactsHero';
import { ContactsFAQ } from '@/components/contacts/ContactsFAQ';
import { MergeVisual, SearchVisual, ContactsCollageVisual } from '@/components/contacts/ContactsRowVisuals';
// import { ContactsWhyBento } from '@/components/contacts/ContactsWhyBento'; // replaced by static image, see below
import { AppLogoStrip } from '@/components/sections/AppLogoStrip';
import { DemoVideoSection } from '@/components/sections/DemoVideoSection';
import { StepsSection } from '@/components/sections/StepsSection';
import { AlternatingFeatureRow } from '@/components/sections/AlternatingFeatureRow';
import { FinalCTA } from '@/components/FinalCTA';
import { Price } from '@/components/currency/Price';

export const metadata: Metadata = {
  title: 'Contacts — One address book, everywhere you work | Snaarp',
  description:
    'Save a contact once in Snaarp Contacts and it’s already there in Mail, Meet, and CRM — no exporting, no re-typing, no three different versions of the same person.',
};

const STACK_APPS = [
  { name: 'Snaarp Mail', icon: { kind: 'img' as const, src: '/assets/icons/envelope.jpg' } },
  { name: 'Meet', icon: { kind: 'img' as const, src: '/assets/icons/apps-meet.jpg' } },
  { name: 'CRM', icon: { kind: 'lucide' as const, Icon: UsersRound } },
  { name: 'Kalender', icon: { kind: 'img' as const, src: '/assets/icons/apps-kalender.jpg' } },
  { name: 'Zeus Contacts', icon: { kind: 'lucide' as const, Icon: Zap } },
  { name: 'Sendrit', icon: { kind: 'img' as const, src: '/assets/icons/apps-sendrit.jpg' } },
];

const STEPS = [
  { title: 'Save a contact', desc: 'Add someone in Contacts, or Snaarp saves them automatically the first time you email or meet with them.' },
  { title: 'It syncs instantly', desc: 'No import/export — the same card appears in Mail, Meet, and CRM the moment it’s saved.' },
  { title: 'Stay organized as you grow', desc: 'Tag, group, and search as your list grows — no cleanup projects, ever.' },
];

export default function ContactsProductPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <ContactsHero />

        <AppLogoStrip label="Works Across the Stack" apps={STACK_APPS} className="sec-alt-bg py-12 lg:py-16" />

        <section className="max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-20">
          <div className="overflow-x-auto">
            <img
              src="/assets/images/contacts-stats-bento.png"
              alt="Contacts stats: 1 place for every saved contact, 3 apps synced automatically, 100% of matching contacts merged automatically, 0 minutes setup time"
              className="h-auto rounded-2xl w-full min-w-[640px] lg:min-w-0"
            />
          </div>
        </section>

        <DemoVideoSection
          headline="See Contacts in action."
          subtext="A 90-second look at how one saved contact shows up everywhere you work, automatically."
          ctaLabel={<>Start for <Price amount={1} />/month</>}
          className="sec-alt-bg"
          videoSrc="/assets/videos/contacts-walkthrough.mp4"
        />

        <StepsSection heading="Get started in 3 easy steps" steps={STEPS} ctaLabel={<>Start for <Price amount={1} />/month</>} />

        <AlternatingFeatureRow
          revealGroup="alt-row-merge"
          headline="Stop keeping three different contact lists."
          subtext="Most tools make you save the same person over and over — once in email, once in your calendar tool, once in your CRM. Contacts saves it once and keeps every app updated automatically."
          items={[
            { title: 'One save, everywhere.', desc: 'Update a contact once — Mail, Meet, and CRM update instantly.' },
            { title: 'Smart dedupe.', desc: 'Matching emails or phone numbers get merged automatically, with a review step first.' },
            { title: 'No cleanup projects.', desc: 'Your list stays accurate as your team grows, not messier.' },
          ]}
          visual={<MergeVisual />}
        />

        <AlternatingFeatureRow
          revealGroup="alt-row-search"
          headline="Search that actually finds people."
          items={[
            { title: 'We see your plan and apps instantly.', desc: 'No hunting across five different tools to find someone’s info.' },
            { title: 'Tags & groups.', desc: 'Organize by team, client, or project — filter and find people in seconds.' },
            { title: 'Search everywhere.', desc: 'Find a contact by name, company, tag, or even a note you left on their card.' },
          ]}
          visual={<SearchVisual />}
          reverse
          altBackground
        />

        <AlternatingFeatureRow
          revealGroup="alt-row-benefits"
          headline="One card, everywhere you work."
          items={[
            { title: 'Sales teams stay ready.', desc: 'Every lead saved in CRM shows up in Mail and Meet before a call.' },
            { title: 'Support teams see one truth.', desc: 'A shared view of a customer’s info, no matter which app someone’s in.' },
            { title: 'Small teams skip the spreadsheets.', desc: 'One address book instead of five spreadsheets and a stack of business cards.' },
          ]}
          visual={<ContactsCollageVisual />}
        />

        {/* Replaced with a static image export — see ContactsWhyBento component for the original bento grid markup. */}
        {/* <ContactsWhyBento
          headline="Why teams choose Contacts"
          ctaLabel="See How It Works"
          className="sec-alt-bg"
        /> */}
        <section className="sec-alt-bg py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="flex flex-col items-center text-center mb-12">
              <h2 className="sec-icons-heading">Why teams choose Contacts</h2>
            </div>
            <div className="overflow-x-auto">
              <img
                src="/assets/images/contacts-why-bento.png"
                alt="Why teams choose Contacts: Auto-sync across the Stack, Smart dedupe, Tags & groups, and Search everywhere"
                className="h-auto rounded-2xl w-full min-w-[640px] lg:min-w-0"
              />
            </div>
            <div className="text-center mt-10">
              <a href="#" className="btn-outline inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 min-h-[44px]">
                See How It Works
                <svg width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden="true">
                  <path d="M1 5h11.5M8 1l4.5 4L8 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>
        </section>

        <ContactsFAQ />

        <FinalCTA
          heading="One address book. Every app included."
          copy="No exporting, no re-typing, no three different versions of the same person. Just one Stack, running your whole business."
          buttonLabel={<>Start the Stack for <Price amount={1} /></>}
        />
      </main>
      <Footer />
    </>
  );
}
