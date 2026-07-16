import Link from "next/link"
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react"
import { buttonVariants } from "@/components/ui/button"

function Brand() {
  return (
    <Link href="/" className="flex items-center gap-2 font-semibold tracking-tight" aria-label="Snaarp home">
      <span className="grid size-9 place-items-center rounded-xl bg-primary text-primary-foreground shadow-sm">S</span>
      <span className="text-xl">snaarp</span>
    </Link>
  )
}

export function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-border/70 bg-background/95 backdrop-blur-xl">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-4 md:px-8">
        <Brand />
        <nav className="hidden items-center gap-7 text-sm font-medium md:flex" aria-label="Primary navigation">
          <details className="group relative">
            <summary className="flex min-h-11 cursor-pointer list-none items-center gap-1 rounded-full px-3 hover:bg-muted focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/30">
              Products <ChevronDown className="size-4 transition-transform group-open:rotate-180" aria-hidden="true" />
            </summary>
            <div className="absolute left-1/2 top-12 w-72 -translate-x-1/2 rounded-2xl border bg-popover p-3 text-popover-foreground shadow-xl">
              <p className="px-3 py-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Create &amp; Store</p>
              <Link href="/products/work-drive" className="flex rounded-xl bg-primary/8 px-3 py-3 text-primary hover:bg-primary/12">
                <span><strong className="block text-sm">Work Drive</strong><span className="text-xs text-muted-foreground">One home for every team file</span></span>
              </Link>
            </div>
          </details>
          <Link href="#features" className="rounded-full px-3 py-2 hover:bg-muted">Features</Link>
          <Link href="#how-it-works" className="rounded-full px-3 py-2 hover:bg-muted">How it works</Link>
          <Link href="#faq" className="rounded-full px-3 py-2 hover:bg-muted">FAQ</Link>
        </nav>
        <div className="hidden md:block">
          <Link href="#get-started" className={buttonVariants({ size: "lg", className: "rounded-full" })}>
            Start for £1/month <ArrowRight data-icon="inline-end" />
          </Link>
        </div>
        <details className="group md:hidden">
          <summary className="grid size-11 cursor-pointer list-none place-items-center rounded-full border bg-card" aria-label="Open navigation menu">
            <Menu className="size-5 group-open:hidden" aria-hidden="true" />
            <X className="hidden size-5 group-open:block" aria-hidden="true" />
          </summary>
          <nav className="absolute inset-x-4 top-16 flex flex-col gap-2 rounded-2xl border bg-popover p-4 shadow-xl" aria-label="Mobile navigation">
            <Link href="/products/work-drive" className="rounded-xl bg-primary/8 px-4 py-3 font-medium text-primary">Work Drive</Link>
            <Link href="#features" className="rounded-xl px-4 py-3 hover:bg-muted">Features</Link>
            <Link href="#how-it-works" className="rounded-xl px-4 py-3 hover:bg-muted">How it works</Link>
            <Link href="#faq" className="rounded-xl px-4 py-3 hover:bg-muted">FAQ</Link>
            <Link href="#get-started" className={buttonVariants({ size: "lg", className: "mt-2 rounded-full" })}>Start for £1/month</Link>
          </nav>
        </details>
      </div>
    </header>
  )
}

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
        <div className="grid gap-12 border-b border-background/15 pb-14 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="flex max-w-sm flex-col gap-4">
            <Brand />
            <p className="text-sm leading-relaxed text-background/65">Simple tools for calmer, more connected work.</p>
          </div>
          <div><h2 className="mb-4 font-semibold">Products</h2><ul className="flex flex-col gap-3 text-sm text-background/65"><li><Link href="/products/work-drive">Work Drive</Link></li><li><Link href="#features">Mail</Link></li><li><Link href="#features">Teams</Link></li></ul></div>
          <div><h2 className="mb-4 font-semibold">Company</h2><ul className="flex flex-col gap-3 text-sm text-background/65"><li><Link href="#">About</Link></li><li><Link href="#">Pricing</Link></li><li><Link href="#faq">Support</Link></li></ul></div>
          <div><h2 className="mb-4 font-semibold">Legal</h2><ul className="flex flex-col gap-3 text-sm text-background/65"><li><Link href="#">Privacy</Link></li><li><Link href="#">Terms</Link></li><li><Link href="#">Security</Link></li></ul></div>
        </div>
        <p className="pt-8 text-sm text-background/55">© 2026 Snaarp. All rights reserved.</p>
      </div>
    </footer>
  )
}
