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
import { VerifyritPreviewMockup } from '@/components/VerifyritPreviewMockup';
import { WorkforcePreviewMockup } from '@/components/WorkforcePreviewMockup';

const PRODUCT_ICONS = [
  { src: '/assets/icons/rail-mail.svg', label: 'Mail', name: 'Snaarp Mail', color: '#7C3AED', size: '22px', lucide: false, lucideIcon: null },
  { src: '/assets/icons/rail-me.svg', label: 'Me', name: 'SnaarpMe', color: '#7C3AED', size: '22px', lucide: false, lucideIcon: null },
  { src: '/assets/icons/rail-contacts.svg', label: 'Contacts', name: 'Snaarp Contacts', color: '#7C3AED', size: '22px', lucide: false, lucideIcon: null },
  { src: '', label: 'Calendar', name: 'Calendar', color: '#7C3AED', size: '22px', lucide: true, lucideIcon: 'Calendar' },
  { src: '/assets/icons/rail-lock.svg', label: 'Lock', name: 'Snaarp Lock', color: '#7C3AED', size: '22px', lucide: false, lucideIcon: null },
  { src: '/assets/icons/rail-drive.svg', label: 'Drive', name: 'Snaarp Drive', color: '#7C3AED', size: '22px', lucide: false, lucideIcon: null },
  { src: '/assets/icons/rail-sheet.svg', label: 'Sheet', name: 'Snaarp Sheet', color: '#7C3AED', size: '22px', lucide: false, lucideIcon: null },
  { src: '/assets/icons/rail-document.svg', label: 'Document', name: 'Snaarp Doc', color: '#7C3AED', size: '22px', lucide: false, lucideIcon: null },
  { src: '/assets/icons/rail-teams.svg', label: 'Teams', name: 'Snaarp Teams', color: '#7C3AED', size: '22px', lucide: false, lucideIcon: null },
  { src: '/assets/icons/rail-presentation.svg', label: 'Presentation', name: 'Snaarp Slides', color: '#7C3AED', size: '22px', lucide: false, lucideIcon: null },
  { src: '/assets/icons/rail-meet.svg', label: 'Meet', name: 'Snaarp Meet', color: '#7C3AED', size: '22px', lucide: false, lucideIcon: null },
  { src: '/assets/icons/id-card.svg', label: 'ID Card', name: 'OneCardX', color: '#7C3AED', size: '22px', lucide: false, lucideIcon: null },
  { src: '/assets/icons/pdf.svg', label: 'PDF', name: 'Snaarp PDF', color: '#7C3AED', size: '22px', lucide: false, lucideIcon: null },
  { src: '/assets/icons/sendrit.svg', label: 'SendRit', name: 'SendRit', color: '#7C3AED', size: '22px', lucide: false, lucideIcon: null },
  { src: '/assets/icons/zeus.svg', label: 'Zeus', name: 'Zeus', color: '#7C3AED', size: '22px', lucide: false, lucideIcon: null },
  { src: '/assets/icons/rail-verifyrit.svg', label: 'VerifyRit', name: 'VerifyRit', color: '#7C3AED', size: '22px', lucide: false, lucideIcon: null },
  { src: '/assets/icons/rail-workforce.svg', label: 'Workforce', name: 'Workforce', color: '#7C3AED', size: '22px', lucide: false, lucideIcon: null },
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
      {/* Vertical product rail — fixed height, scrollable, with product names */}
      <div
        className="product-rail-scroll"
        style={{ display: 'flex', flexDirection: 'column', gap: '4px', padding: '10px 8px', background: '#f5f5f5', borderRadius: '20px', border: '1px solid #e8e8e8', width: '182px', height: '712px', overflowY: 'auto', scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {PRODUCT_ICONS.map((item, i) => (
          <div
            key={item.label}
            title={item.name}
            onClick={() => setActiveIndex(i)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              flexShrink: 0,
              padding: '7px 10px',
              borderRadius: '12px',
              background: activeIndex === i ? '#EDE9FE' : 'transparent',
              boxShadow: activeIndex === i ? '0 4px 12px -4px rgba(124,58,237,0.25)' : 'none',
              opacity: activeIndex === i ? 1 : 0.62,
              cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
          >
            <div style={{ width: '30px', height: '30px', flexShrink: 0, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: activeIndex === i ? '#fff' : 'transparent', overflow: 'hidden' }}>
              {item.lucide ? (
                <LucideIconRender name={item.lucideIcon || 'Calendar'} size={18} color={item.color} />
              ) : (
                <img src={item.src} alt={item.label} style={{ width: item.size, height: item.size, borderRadius: '5px', objectFit: 'cover' }} />
              )}
            </div>
            <span style={{ fontSize: '11px', fontWeight: activeIndex === i ? 700 : 600, color: item.color, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{item.name}</span>
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
        {activeIndex === 14 && <ZeusPreviewMockup onEnd={() => setActiveIndex(15)} />}
        {activeIndex === 15 && <VerifyritPreviewMockup onEnd={() => setActiveIndex(16)} />}
        {activeIndex === 16 && <WorkforcePreviewMockup />}
      </div>
    </div>
  );
}
