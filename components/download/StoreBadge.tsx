interface StoreBadgeProps {
  store: 'apple' | 'google';
  href: string;
}

const BADGE_SRC: Record<StoreBadgeProps['store'], string> = {
  apple: '/assets/icons/download/app-store-badge.svg',
  google: '/assets/icons/download/google-play-badge.svg',
};

export function StoreBadge({ store, href }: StoreBadgeProps) {
  const isApple = store === 'apple';
  return (
    <a href={href} className="store-badge">
      <img
        src={BADGE_SRC[store]}
        alt={isApple ? 'Download on the App Store' : 'Get it on Google Play'}
        className="store-badge-img"
      />
    </a>
  );
}
