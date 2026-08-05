'use client';

import { useRef } from 'react';

/**
 * 10 main products shown as horizontal pill tabs.
 * Other apps are add-ons included in the Workspace plan.
 */
const PRODUCT_TABS: { name: string; icon: string | null; lucide?: string }[] = [
  { name: 'Mail', icon: '/assets/icons/pricing/mail.svg' },
  { name: 'Drive', icon: '/assets/icons/pricing/drive.svg' },
  { name: 'SnaarpMe', icon: '/assets/icons/logos/snaarpme.svg' },
  { name: 'Contacts', icon: '/assets/icons/pricing/contacts.svg' },
  { name: 'Sendrit', icon: '/assets/icons/pricing/sendrit.svg' },
  { name: 'VerifyRit', icon: '/assets/icons/pricing/verifyrit.svg' },
  { name: 'NeoLeads', icon: '/assets/icons/pricing/neoleads.svg' },
  { name: 'Zeus', icon: '/assets/icons/logos/zeus.svg' },
  { name: 'CRM', icon: '/assets/icons/pricing/crm.svg' },
  { name: 'Accounting', icon: '/assets/icons/pricing/accounting.svg' },
];

interface PricingTabBarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export function PricingTabBar({ activeTab, onTabChange }: PricingTabBarProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -200, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 200, behavior: 'smooth' });
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 32 }}>
      <div style={{ position: 'relative', maxWidth: '100%' }}>
        {/* Scrollable tab rail */}
        <div
          ref={scrollRef}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 0,
            background: '#F7F7F7',
            borderRadius: 999,
            padding: 4,
            border: '1px solid #EDEBF2',
            overflowX: 'auto',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
        >
          {PRODUCT_TABS.map((tab) => {
            const isActive = activeTab === tab.name;
            return (
              <button
                key={tab.name}
                type="button"
                onClick={() => onTabChange(tab.name)}
                style={{
                  padding: '8px 18px',
                  borderRadius: 999,
                  border: 'none',
                  fontFamily: 'inherit',
                  fontSize: '16px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all .2s',
                  whiteSpace: 'nowrap',
                  flexShrink: 0,
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 6,
                  background: isActive ? '#7C3AED' : 'transparent',
                  color: isActive ? '#fff' : '#5B5670',
                }}
              >
                {tab.icon && (
                  <img
                    src={tab.icon}
                    alt=""
                    width={20}
                    height={20}
                    style={{ height: 20, width: 'auto', objectFit: 'contain', flexShrink: 0, filter: isActive && tab.name !== 'SnaarpMe' && tab.name !== 'Drive' ? 'brightness(0) invert(1)' : 'none', transition: 'filter .2s' }}
                  />
                )}
                {tab.name}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
