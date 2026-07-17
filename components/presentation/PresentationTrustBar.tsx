import { PresentationRevealSection } from './PresentationRevealSection';

const stackApps = [
  { iconSrc: '/assets/icons/cube.jpg', name: 'Work Drive' },
  { iconSrc: '/assets/icons/envelope.jpg', name: 'Mail' },
  { iconSrc: '/assets/icons/chat-bubbles.jpg', name: 'Teams' },
  { iconSrc: '/assets/icons/apps-document.png', name: 'Doc' },
];

export function PresentationTrustBar() {
  return (
    <section style={{ background: '#fff', paddingTop: '38px', paddingBottom: '38px', borderTop: '1px solid #F2F1F6', borderBottom: '1px solid #F2F1F6' }}>
      <PresentationRevealSection reveal className="mx-auto flex max-w-7xl flex-col items-center gap-8 px-6 lg:px-10">
        <p className="text-xs font-bold tracking-[.18em] text-muted-foreground">WORKS ACROSS THE STACK</p>
        <div className="grid w-full grid-cols-2 justify-items-center gap-x-4 gap-y-8 md:grid-cols-4">
          {stackApps.map(({ iconSrc, name }) => (
            <div key={name} className="sec-logo-strip-tile">
              <span className="sec-logo-strip-icon-tile"><img src={iconSrc} alt="" aria-hidden="true" /></span>
              <span className="sec-logo-strip-tile-label">Snaarp {name}</span>
            </div>
          ))}
        </div>
      </PresentationRevealSection>
    </section>
  );
}
