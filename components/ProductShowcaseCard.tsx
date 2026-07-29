'use client';

import { useState } from 'react';
import { Calendar } from 'lucide-react';
import { MailPreviewMockup } from '@/components/MailPreviewMockup';
import { MePreviewMockup } from '@/components/MePreviewMockup';
import { ContactsPreviewMockup } from '@/components/ContactsPreviewMockup';
import { KalenderPreviewMockup } from '@/components/KalenderPreviewMockup';
import { LockPreviewMockup } from '@/components/LockPreviewMockup';
import { DrivePreviewMockup } from '@/components/DrivePreviewMockup';
import { SheetPreviewMockup } from '@/components/SheetPreviewMockup';

const PRODUCT_ICONS = [
  { src: '/assets/icons/envelope.jpg', label: 'Mail', size: '22px', lucide: false },
  { src: '/assets/icons/apps-meet-logo.png', label: 'Me', size: '18px', lucide: false },
  { src: '/assets/icons/search.jpg', label: 'Contacts', size: '22px', lucide: false },
  { src: '', label: 'Kalender', size: '22px', lucide: true },
  { src: '/assets/icons/apps-lock.jpg', label: 'Lock', size: '22px', lucide: false },
  { src: '/assets/icons/cube.jpg', label: 'Drive', size: '22px', lucide: false },
  { src: '/assets/icons/apps-sheet.jpg', label: 'Sheet', size: '22px', lucide: false },
];

export function ProductShowcaseCard() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
      {/* Vertical icon rail */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', padding: '8px 6px', background: '#f5f5f5', borderRadius: '28px', border: '1px solid #e8e8e8' }}>
        {PRODUCT_ICONS.map((item, i) => (
          <div
            key={item.label}
            title={item.label}
            onClick={() => setActiveIndex(i)}
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: activeIndex === i ? '#EDE9FE' : 'transparent',
              boxShadow: activeIndex === i ? '0 4px 12px -4px rgba(124,58,237,0.3)' : 'none',
              overflow: 'hidden',
              opacity: activeIndex === i ? 1 : 0.5,
              cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
          >
            {item.lucide ? (
              <Calendar size={18} style={{ color: '#7C3AED' }} />
            ) : (
              <img src={item.src} alt={item.label} style={{ width: item.size, height: item.size, borderRadius: '5px', objectFit: 'cover' }} />
            )}
          </div>
        ))}
      </div>

      {/* Browser-style card - fixed dimensions matching Mail mockup */}
      <div style={{ borderRadius: '18px', border: '1px solid #e5e5e5', boxShadow: '0 4px 12px -4px rgba(0,0,0,0.08), 0 24px 48px -12px rgba(0,0,0,0.12)', overflow: 'visible', background: '#fff', width: '800px', height: '620px', position: 'relative' }}>
        {activeIndex === 0 && <MailPreviewMockup />}
        {activeIndex === 1 && <MePreviewMockup />}
        {activeIndex === 2 && <ContactsPreviewMockup />}
        {activeIndex === 3 && <KalenderPreviewMockup />}
        {activeIndex === 4 && <LockPreviewMockup />}
        {activeIndex === 5 && <DrivePreviewMockup />}
        {activeIndex === 6 && <SheetPreviewMockup />}
      </div>
    </div>
  );
}
