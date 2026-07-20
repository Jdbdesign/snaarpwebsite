import type { ComponentType, CSSProperties, ReactNode } from 'react';

interface RevealWrapperProps {
  reveal?: boolean;
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
}

export interface StackTrustBarApp {
  iconSrc: string;
  name: string;
}

interface StackTrustBarProps {
  /** The product page's own scroll-reveal wrapper (e.g. NotepadRevealSection). */
  Wrapper: ComponentType<RevealWrapperProps>;
  apps: StackTrustBarApp[];
}

// Fallback wrapper for pages with no dedicated reveal wrapper of their own.
export function PlainStackWrapper({ className, style, children }: RevealWrapperProps) {
  return (
    <div className={className} style={style}>
      {children}
    </div>
  );
}

// "Works across the stack" trust bar shared by every product page — big
// brand-icon tiles in a grid, matching the original Notepad/Presentation
// product page layout. Reusable across product pages instead of each one
// re-declaring the same sec-logo-strip-tile markup.
export function StackTrustBar({ Wrapper, apps }: StackTrustBarProps) {
  return (
    <section style={{ background: '#fff', paddingTop: '38px', paddingBottom: '38px', borderTop: '1px solid #F2F1F6', borderBottom: '1px solid #F2F1F6' }}>
      <Wrapper reveal className="mx-auto flex max-w-7xl flex-col items-center gap-8 px-6 lg:px-10">
        <p className="text-xs font-bold tracking-[.18em] text-muted-foreground">WORKS ACROSS THE STACK</p>
        <div className="grid w-full grid-cols-2 justify-items-center gap-x-4 gap-y-8 md:grid-cols-4">
          {apps.map(({ iconSrc, name }) => (
            <div key={name} className="sec-logo-strip-tile">
              <span className="sec-logo-strip-icon-tile"><img src={iconSrc} alt="" aria-hidden="true" /></span>
              <span className="sec-logo-strip-tile-label">{name}</span>
            </div>
          ))}
        </div>
      </Wrapper>
    </section>
  );
}
