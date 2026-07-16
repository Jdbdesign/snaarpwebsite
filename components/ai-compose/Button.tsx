import { cloneElement, isValidElement, type ComponentProps, type ReactElement } from 'react';
import { twMerge } from 'tailwind-merge';

// Local port of the shadcn "base-nova" button the AI Compose design was built
// with. The class strings are kept verbatim so the page renders exactly as
// designed; only the base-ui primitive is swapped for a plain element plus a
// `render` escape hatch, so the site keeps its lean dependency set.
//
// twMerge is required, not cosmetic: call sites override variant styles
// (`bg-background` over `bg-primary`, `h-12` over `h-8`, `rounded-full` over
// `rounded-lg`) and without deduping both classes ship and CSS source order —
// not the call site — picks the winner.

const BASE =
  "group/button inline-flex shrink-0 items-center justify-center rounded-lg border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4";

const VARIANTS = {
  default: 'bg-primary text-primary-foreground [a]:hover:bg-primary/80',
  outline:
    'border-border bg-background hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50',
  secondary:
    'bg-secondary text-secondary-foreground hover:bg-secondary/80 aria-expanded:bg-secondary aria-expanded:text-secondary-foreground',
  ghost:
    'hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:hover:bg-muted/50',
  destructive:
    'bg-destructive/10 text-destructive hover:bg-destructive/20 focus-visible:border-destructive/40 focus-visible:ring-destructive/20 dark:bg-destructive/20 dark:hover:bg-destructive/30 dark:focus-visible:ring-destructive/40',
  link: 'text-primary underline-offset-4 hover:underline',
} as const;

const SIZES = {
  default:
    'h-8 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2',
  xs: "h-6 gap-1 rounded-[min(var(--radius-md),10px)] px-2 text-xs in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3",
  sm: "h-7 gap-1 rounded-[min(var(--radius-md),12px)] px-2.5 text-[0.8rem] in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3.5",
  lg: 'h-9 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2',
  icon: 'size-8',
  'icon-xs':
    "size-6 rounded-[min(var(--radius-md),10px)] in-data-[slot=button-group]:rounded-lg [&_svg:not([class*='size-'])]:size-3",
  'icon-sm':
    'size-7 rounded-[min(var(--radius-md),12px)] in-data-[slot=button-group]:rounded-lg',
  'icon-lg': 'size-9',
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

interface ButtonProps extends Omit<ComponentProps<'button'>, 'className'> {
  variant?: keyof typeof VARIANTS;
  size?: keyof typeof SIZES;
  className?: string;
  /** Render as another element (e.g. `render={<Link href="#steps" />}`). */
  render?: ReactElement<{ className?: string }>;
}

export function Button({ className, variant, size, render, ...props }: ButtonProps) {
  const classes = buttonVariants({ variant, size, className });

  if (render && isValidElement(render)) {
    return cloneElement(render, {
      'data-slot': 'button',
      ...props,
      ...render.props,
      className: twMerge(classes, render.props.className),
    } as never);
  }

  return <button data-slot="button" className={classes} {...props} />;
}
