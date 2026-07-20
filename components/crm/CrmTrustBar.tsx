import { CrmRevealSection } from './CrmRevealSection';

const STACK_APPS = [
  {
    name: 'Contacts',
    desc: 'Records pull from your address book',
    bg: '#F5F3FF',
    border: '#E6DEFA',
    stroke: '#7C3AED',
    icon: (
      <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
    ),
  },
  {
    name: 'Mail',
    desc: 'Emails log to a deal automatically',
    bg: '#FFEFF2',
    border: '#FBD5DD',
    stroke: '#C0344E',
    icon: (
      <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#C0344E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
    ),
  },
  {
    name: 'Kalender',
    desc: 'Book a meeting from a deal record',
    bg: '#ECFDF9',
    border: '#CDF5EE',
    stroke: '#0E9384',
    icon: (
      <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#0E9384" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
    ),
  },
  {
    name: 'Teams',
    desc: 'Discuss a deal in a channel',
    bg: '#FEF6E7',
    border: '#FBEBC6',
    stroke: '#B45309',
    icon: (
      <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#B45309" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2z"></path><path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1"></path></svg>
    ),
  },
];

export function CrmTrustBar() {
  return (
    <section style={{ background: '#fff', paddingTop: '38px', paddingBottom: '38px', borderTop: '1px solid #F2F1F6', borderBottom: '1px solid #F2F1F6' }}>
      <CrmRevealSection reveal className="max-w-7xl mx-auto px-6 lg:px-10" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '22px' }}>
        <span style={{ fontSize: '11.5px', fontWeight: 600, letterSpacing: '.14em', color: '#A39EB4', textTransform: 'uppercase' }}>Works across the stack</span>
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: '34px' }}>
          {STACK_APPS.map((app) => (
            <div key={app.name} style={{ display: 'flex', alignItems: 'center', gap: '11px' }}>
              <div style={{ width: '38px', height: '38px', borderRadius: '10px', background: app.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', border: `1px solid ${app.border}` }}>
                {app.icon}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontWeight: 600, fontSize: '15px', color: '#4A4560' }}>{app.name}</span>
                <span style={{ fontSize: '11.5px', color: '#8B85A0' }}>{app.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </CrmRevealSection>
    </section>
  );
}
