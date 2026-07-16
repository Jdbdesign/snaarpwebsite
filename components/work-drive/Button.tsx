import { twMerge } from 'tailwind-merge';

// Local port of the shadcn button the Work Drive design was built with.
// Class strings are kept verbatim so the page renders exactly as designed;
// only `buttonVariants` is needed here since every call site applies it to a
// plain `<Link>` rather than rendering a `<Button>` primitive.

const BASE =
  "inline-flex shrink-0 items-center justify-center rounded-lg border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:translate-y-px disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4";

const VARIANTS = {
  default: 'bg-primary text-primary-foreground hover:bg-primary/90',
  outline: 'border-border bg-background hover:bg-muted hover:text-foreground',
  secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
} as const;

const SIZES = {
  default: 'h-8 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2',
  lg: 'h-9 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2',
} as const;

export function buttonVariants({
  variant = 'default',
  size = 'default',
  className,
}: {
  variant?: keyof typeof VARIANTS;
  size?: keyof typeof SIZES;
  className?: string;
} = {}) {
  return twMerge(BASE, VARIANTS[variant], SIZES[size], className);
}
