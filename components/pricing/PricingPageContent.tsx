'use client';

import { useState } from 'react';
import { PricingTabBar } from './PricingTabBar';
import { PricingPlans } from './PricingPlans';
import { PricingAppPlaceholder } from './PricingAppPlaceholder';
import { ComparePlans } from './ComparePlans';
import { DrivePricing } from './DrivePricing';
import { SnaarpMePricing } from './SnaarpMePricing';
import { ContactsPricing } from './ContactsPricing';
import { SendritPricing } from './SendritPricing';
import { VerifyRitPricing } from './VerifyRitPricing';
import { NeoLeadsPricing } from './NeoLeadsPricing';
import { ZeusPricing } from './ZeusPricing';
import { CRMPricing } from './CRMPricing';
import { AccountingPricing } from './AccountingPricing';

export function PricingPageContent() {
  const [activeTab, setActiveTab] = useState('Mail');
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');
  const isMail = activeTab === 'Mail';
  const isDrive = activeTab === 'Drive';
  const isSnaarpMe = activeTab === 'SnaarpMe';
  const isContacts = activeTab === 'Contacts';
  const isSendrit = activeTab === 'Sendrit';
  const isVerifyRit = activeTab === 'VerifyRit';
  const isNeoLeads = activeTab === 'NeoLeads';
  const isZeus = activeTab === 'Zeus';
  const isCRM = activeTab === 'CRM';
  const isAccounting = activeTab === 'Accounting';
  const hasContent = isMail || isDrive || isSnaarpMe || isContacts || isSendrit || isVerifyRit || isNeoLeads || isZeus || isCRM || isAccounting;

  // Determine which content to inject into PricingPlans
  let injectedContent: React.ReactNode = undefined;
  if (isDrive) injectedContent = <DrivePricing billingCycle={billingCycle} />;
  if (isSnaarpMe) injectedContent = <SnaarpMePricing billingCycle={billingCycle} />;
  if (isContacts) injectedContent = <ContactsPricing billingCycle={billingCycle} />;
  if (isSendrit) injectedContent = <SendritPricing billingCycle={billingCycle} />;
  if (isVerifyRit) injectedContent = <VerifyRitPricing billingCycle={billingCycle} />;
  if (isNeoLeads) injectedContent = <NeoLeadsPricing billingCycle={billingCycle} />;
  if (isZeus) injectedContent = <ZeusPricing billingCycle={billingCycle} />;
  if (isCRM) injectedContent = <CRMPricing billingCycle={billingCycle} />;
  if (isAccounting) injectedContent = <AccountingPricing billingCycle={billingCycle} />;

  return (
    <>
      <PricingPlans
        tabBar={<PricingTabBar activeTab={activeTab} onTabChange={setActiveTab} />}
        hidden={!isMail}
        billingCycle={billingCycle}
        onBillingChange={setBillingCycle}
        driveContent={injectedContent}
      />

      {!hasContent && <PricingAppPlaceholder appName={activeTab} />}

      {isMail && <ComparePlans />}
    </>
  );
}
