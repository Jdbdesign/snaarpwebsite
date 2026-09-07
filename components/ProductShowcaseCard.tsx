'use client';

import { useState } from 'react';
import { Calendar, Zap } from 'lucide-react';
import { MailPreviewMockup } from '@/components/MailPreviewMockup';
import { MePreviewMockup } from '@/components/MePreviewMockup';
import { ContactsPreviewMockup } from '@/components/ContactsPreviewMockup';
import { KalenderPreviewMockup } from '@/components/KalenderPreviewMockup';
import { LockPreviewMockup } from '@/components/LockPreviewMockup';
import { DrivePreviewMockup } from '@/components/DrivePreviewMockup';
import { SheetPreviewMockup } from '@/components/SheetPreviewMockup';
import { DocumentPreviewMockup } from '@/components/DocumentPreviewMockup';
import { TeamsPreviewMockup } from '@/components/TeamsPreviewMockup';
import { PresentationPreviewMockup } from '@/components/PresentationPreviewMockup';
import { MeetPreviewMockup } from '@/components/MeetPreviewMockup';
import { IdCardPreviewMockup } from '@/components/IdCardPreviewMockup';
import { PdfPreviewMockup } from '@/components/PdfPreviewMockup';
import { SendritPreviewMockup } from '@/components/SendritPreviewMockup';
import { ZeusPreviewMockup } from '@/components/ZeusPreviewMockup';

const PRODUCT_ICONS = [
  { src: '/assets/icons/rail-mail.svg', label: 'Mail', size: '22px', lucide: false, lucideIcon: null },
  { src: '/assets/icons/rail-me.svg', label: 'Me', size: '22px', lucide: false, lucideIcon: null },
  { src: '/assets/icons/rail-contacts.svg', label: 'Contacts', size: '22px', lucide: false, lucideIcon: null },
  { src: '', label: 'Calendar', size: '22px', lucide: true, lucideIcon: 'Calendar' },
  { src: '/assets/icons/rail-lock.svg', label: 'Lock', size: '22px', lucide: false, lucideIcon: null },
  { src: '/assets/icons/rail-drive.svg', label: 'Drive', size: '22px', lucide: false, lucideIcon: null },
  { src: '/assets/icons/rail-sheet.svg', label: 'Sheet', size: '22px', lucide: false, lucideIcon: null },
  { src: '/assets/icons/rail-document.svg', label: 'Document', size: '22px', lucide: false, lucideIcon: null },
  { src: '/assets/icons/rail-teams.svg', label: 'Teams', size: '22px', lucide: false, lucideIcon: null },
  { src: '/assets/icons/rail-presentation.svg', label: 'Presentation', size: '22px', lucide: false, lucideIcon: null },
  { src: '/assets/icons/rail-meet.svg', label: 'Meet', size: '22px', lucide: false, lucideIcon: null },
  { src: '/assets/icons/id-card.svg', label: 'ID Card', size: '22px', lucide: false, lucideIcon: null },
  { src: '/assets/icons/pdf.svg', label: 'PDF', size: '22px', lucide: false, lucideIcon: null },
  { src: '/assets/icons/sendrit.svg', label: 'SendRit', size: '22px', lucide: false, lucideIcon: null },
  { src: '/assets/icons/zeus.svg', label: 'Zeus', size: '22px', lucide: false, lucideIcon: null },
];

function LucideIconRender({ name, size, color }: { name: string; size: number; color: string }) {
  switch (name) {
    case 'Calendar': return <Calendar size={size} style={{ color }} />;
    case 'Zap': return <Zap size={size} style={{ color }} />;
    default: return <Calendar size={size} style={{ color }} />;
  }
}

export function ProductShowcaseCard({ cardWidth = '800px', cardHeight = '620px', cardBorder, startPaused }: { cardWidth?: string; cardHeight?: string; cardBorder?: string; startPaused?: boolean }) {
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
              <LucideIconRender name={item.lucideIcon || 'Calendar'} size={18} color="#7C3AED" />
            ) : (
              <img src={item.src} alt={item.label} style={{ width: item.size, height: item.size, borderRadius: '5px', objectFit: 'cover' }} />
            )}
          </div>
        ))}
      </div>

      {/* Browser-style card - fixed dimensions matching Mail mockup */}
      <div style={{ borderRadius: '18px', border: cardBorder || '1px solid #e5e5e5', boxShadow: '0 4px 12px -4px rgba(0,0,0,0.08), 0 24px 48px -12px rgba(0,0,0,0.12)', overflow: 'hidden', background: '#fff', width: cardWidth, height: cardHeight, position: 'relative' }}>
        {activeIndex === 0 && <MailPreviewMockup onEnd={() => setActiveIndex(1)} startPaused={startPaused} />}
        {activeIndex === 1 && <MePreviewMockup onEnd={() => setActiveIndex(2)} />}
        {activeIndex === 2 && <ContactsPreviewMockup onEnd={() => setActiveIndex(3)} />}
        {activeIndex === 3 && <KalenderPreviewMockup onEnd={() => setActiveIndex(4)} />}
        {activeIndex === 4 && <LockPreviewMockup onEnd={() => setActiveIndex(5)} />}
        {activeIndex === 5 && <DrivePreviewMockup onEnd={() => setActiveIndex(6)} />}
        {activeIndex === 6 && <SheetPreviewMockup />}
        {activeIndex === 7 && <DocumentPreviewMockup onEnd={() => setActiveIndex(8)} />}
        {activeIndex === 8 && <TeamsPreviewMockup onEnd={() => setActiveIndex(9)} />}
        {activeIndex === 9 && <PresentationPreviewMockup onEnd={() => setActiveIndex(10)} />}
        {activeIndex === 10 && <MeetPreviewMockup onEnd={() => setActiveIndex(11)} />}
        {activeIndex === 11 && <IdCardPreviewMockup onEnd={() => setActiveIndex(12)} />}
        {activeIndex === 12 && <PdfPreviewMockup onEnd={() => setActiveIndex(13)} />}
        {activeIndex === 13 && <SendritPreviewMockup onEnd={() => setActiveIndex(14)} />}
        {activeIndex === 14 && <ZeusPreviewMockup />}
      </div>
    </div>
  );
}
