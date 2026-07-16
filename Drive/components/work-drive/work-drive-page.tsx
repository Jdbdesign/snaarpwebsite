import Link from "next/link"
import { ArrowRight, Check, CloudUpload, Files, FolderSearch, History, Mail, MessageSquare, RefreshCw, Search, ShieldCheck, Tags, Users } from "lucide-react"
import { buttonVariants } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { DriveBrowser, LiveTeamVisual, SearchVisual, StorageVisual, SyncFlowVisual } from "./product-visuals"
import { Footer, Header } from "./site-shell"

const steps = [
  { icon: CloudUpload, title: "Upload or drag in a file", copy: "Add files from your computer, or save straight from Mail." },
  { icon: Tags, title: "Organize as you go", copy: "Folders, tags, and search keep everything findable, no rigid structure required." },
  { icon: MessageSquare, title: "Share without leaving the Stack", copy: "Attach a file to an email or drop it in a Teams channel in one click." },
]
const faqs = [
  ["How much storage do I get?", "Every plan includes a shared storage pool for your whole team. See the pricing page for exact limits per plan."],
  ["Can I attach Work Drive files directly in Mail or Teams?", "Yes. Pull a file in without downloading and re-uploading it."],
  ["Does Work Drive keep old versions of a file?", "Yes. Version history lets you see or restore a previous version anytime."],
  ["Can I control who sees a file or folder?", "Yes. Set sharing permissions per file or folder, from private to team-wide."],
  ["Is Work Drive included in the £1 Starter plan?", "Yes. It is included in every plan, no add-on required."],
]

function Eyebrow({ children }: { children: React.ReactNode }) { return <span className="eyebrow">{children}</span> }
function SectionHeading({ eyebrow, title, copy }: { eyebrow: string; title: string; copy?: string }) { return <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 text-center"><Eyebrow>{eyebrow}</Eyebrow><h2 className="text-balance text-3xl font-semibold tracking-tight md:text-5xl">{title}</h2>{copy && <p className="max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">{copy}</p>}</div> }

export function WorkDrivePage() {
  return <div className="min-h-screen overflow-x-clip bg-background text-foreground"><Header /><main>
    <section className="section-pad pt-16 md:pt-24"><div className="mx-auto grid max-w-7xl items-center gap-14 px-4 md:px-8 lg:grid-cols-[.9fr_1.1fr] lg:gap-16">
      <div className="reveal flex flex-col items-start gap-6"><Eyebrow>Create &amp; Store · Work Drive</Eyebrow><h1 className="text-balance text-5xl font-semibold leading-[1.03] tracking-[-.045em] md:text-7xl">One drive for every <span className="text-primary">file your team touches.</span></h1><p className="max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">Store, share, and find files without hunting across five different apps. Work Drive is already connected to Mail, Teams, and everything else in the Stack.</p><div className="flex flex-wrap gap-3"><Link href="#get-started" className={buttonVariants({ size: "lg", className: "rounded-full px-6" })}>Start for £1/month <ArrowRight data-icon="inline-end" /></Link><Link href="#how-it-works" className={buttonVariants({ variant: "outline", size: "lg", className: "rounded-full px-6" })}>See how it works</Link></div><p className="flex items-center gap-2 text-sm text-muted-foreground"><ShieldCheck className="size-4 text-primary" /> GDPR compliant · No credit card required</p></div>
      <div className="reveal reveal-delay"><DriveBrowser /></div>
    </div></section>

    <section className="border-y bg-muted/55"><div className="mx-auto flex max-w-6xl flex-col items-center gap-7 px-4 py-9 md:flex-row md:justify-between md:px-8"><p className="text-xs font-semibold uppercase tracking-[.2em] text-muted-foreground">Works across the Stack</p><div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 md:gap-12">{[[Mail,"Snaarp Mail"],[MessageSquare,"Teams"],[Users,"Contacts"],[Files,"Docs"]].map(([Icon,label])=><div key={label as string} className="flex items-center gap-2 text-sm font-semibold"><Icon className="size-5 text-primary" />{label as string}</div>)}</div></div></section>

    <section className="section-pad"><div className="mx-auto grid max-w-6xl gap-8 px-4 md:grid-cols-3 md:px-8">{[["1 drive","every file, in one place, not scattered across apps"],["20 GB+","shared storage, pooled across your team"],["0 min",'spent hunting for "the file someone sent last week"']].map(([stat,copy],i)=><div key={stat} className="reveal flex flex-col gap-3 border-l-2 border-primary/20 pl-6" style={{animationDelay:`${i*100}ms`}}><p className="text-5xl font-semibold tracking-tight text-primary">{stat}</p><p className="max-w-xs text-sm leading-relaxed text-muted-foreground">{copy}</p></div>)}</div></section>

    <section id="how-it-works" className="section-pad bg-muted/55"><div className="mx-auto grid max-w-7xl gap-12 px-4 md:px-8 lg:grid-cols-[.72fr_1.28fr] lg:items-start lg:gap-20">
      <div className="reveal flex flex-col items-start gap-5 lg:sticky lg:top-28"><Eyebrow>Up and running</Eyebrow><h2 className="text-balance text-3xl font-semibold tracking-tight md:text-5xl">From upload to shared in three moves.</h2><p className="max-w-md text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">Work Drive fits the way your team already works. Add a file, give it context, then use it anywhere in the Stack.</p><Link href="#get-started" className={buttonVariants({ size: "lg", className: "mt-2 rounded-full px-6" })}>Start for £1/month <ArrowRight data-icon="inline-end" /></Link></div>
      <ol className="relative flex flex-col gap-4 before:absolute before:bottom-12 before:left-7 before:top-12 before:w-px before:bg-primary/20 md:before:left-9">{steps.map((step,i)=><li key={step.title} className="reveal relative grid grid-cols-[3.5rem_1fr] gap-4 rounded-3xl border bg-card p-5 shadow-sm transition-transform duration-300 hover:-translate-y-1 md:grid-cols-[4.5rem_1fr] md:items-center md:gap-6 md:p-7" style={{animationDelay:`${i*100}ms`}}><span className="relative grid size-14 place-items-center rounded-2xl bg-primary text-primary-foreground shadow-[0_12px_30px_-14px_rgba(124,58,237,.8)] md:size-18"><step.icon className="size-6 md:size-7" /></span><div className="flex flex-col gap-2"><h3 className="text-lg font-semibold md:text-xl">{step.title}</h3><p className="max-w-xl text-sm leading-relaxed text-muted-foreground">{step.copy}</p></div></li>)}</ol>
    </div></section>

    <section id="features" className="shared-work-section section-pad overflow-hidden"><div className="mx-auto max-w-7xl px-4 md:px-8">
      <div className="reveal flex max-w-3xl flex-col items-start gap-5"><Eyebrow>Built for shared work</Eyebrow><h2 className="text-balance text-4xl font-semibold tracking-[-.035em] md:text-6xl">One place. Every file. <span className="text-primary">Everyone in sync.</span></h2><p className="max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">Work Drive keeps storage, sharing, history, and search connected, so your team can move together without losing context.</p></div>

      <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-6">
        <article className="bento-card reveal flex flex-col overflow-hidden p-6 md:p-8 lg:col-span-3" aria-labelledby="shared-storage-title">
          <div className="flex items-start justify-between gap-4"><span className="bento-icon"><Users className="size-5" /></span><span className="rounded-full bg-primary/10 px-3 py-1.5 text-xs font-semibold text-primary">Team storage</span></div>
          <h3 id="shared-storage-title" className="mt-5 text-2xl font-semibold tracking-tight">One shared storage pool</h3>
          <p className="mt-2 max-w-md text-sm leading-relaxed text-muted-foreground">The whole team draws from one allowance, so space goes where the work is.</p>
          <div className="mt-6 grid flex-1 gap-3 sm:grid-cols-[1.2fr_.8fr]" aria-label="Example shared storage allocation">
            <div className="flex flex-col justify-between rounded-2xl bg-foreground p-5 text-background"><div className="flex items-center justify-between gap-4"><span className="text-xs text-background/65">Shared pool</span><Files className="size-5 text-primary" /></div><div className="mt-6"><p className="text-4xl font-semibold tracking-[-.04em]">20 GB</p><div className="mt-4 flex h-2 overflow-hidden rounded-full bg-background/15"><span className="w-[48%] bg-primary" /><span className="w-[27%] bg-secondary" /><span className="w-[13%] bg-background/45" /></div><div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-[11px] text-background/65"><span>Design 9.6 GB</span><span>Ops 5.4 GB</span><span>Shared 2.6 GB</span></div></div></div>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-1"><div className="flex items-center gap-3 rounded-2xl bg-muted p-4"><span className="grid size-9 place-items-center rounded-xl bg-primary text-xs font-semibold text-primary-foreground">D</span><div><p className="text-sm font-semibold">Design</p><p className="text-xs text-muted-foreground">12 members</p></div></div><div className="flex items-center gap-3 rounded-2xl bg-muted p-4"><span className="grid size-9 place-items-center rounded-xl bg-secondary text-xs font-semibold text-secondary-foreground">O</span><div><p className="text-sm font-semibold">Operations</p><p className="text-xs text-muted-foreground">8 members</p></div></div></div>
          </div>
        </article>

        <article className="bento-card bento-card-accent reveal flex flex-col overflow-hidden p-6 md:p-8 lg:col-span-3" style={{animationDelay:"80ms"}} aria-labelledby="attach-title">
          <div className="flex items-start justify-between gap-4"><span className="bento-icon bento-icon-inverse"><CloudUpload className="size-5" /></span><span className="flex items-center gap-1.5 rounded-full bg-primary-foreground/15 px-3 py-1.5 text-xs font-semibold"><Check className="size-3.5" /> Synced</span></div>
          <h3 id="attach-title" className="mt-5 text-2xl font-semibold tracking-tight">Attach from anywhere</h3>
          <p className="mt-2 max-w-sm text-sm leading-relaxed text-primary-foreground/70">Add Drive files to Mail or Teams without downloading and uploading again. One file stays current everywhere.</p>
          <SyncFlowVisual />
        </article>

        <article className="bento-card reveal group flex flex-col overflow-hidden p-6 md:p-8 lg:col-span-2" style={{animationDelay:"140ms"}} aria-labelledby="history-title">
          <span className="bento-icon"><History className="size-5" /></span>
          <h3 id="history-title" className="mt-5 text-xl font-semibold tracking-tight">Every version, remembered</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Review what changed or restore an earlier file anytime.</p>
          <div className="relative mt-6 min-h-52 flex-1" aria-label="Three saved versions of a launch plan"><div className="absolute inset-x-6 top-0 rounded-2xl border bg-muted/60 p-3.5 opacity-45 transition-transform duration-500 group-hover:-translate-y-1"><p className="text-xs font-semibold">Version 10</p><p className="mt-0.5 text-[11px] text-muted-foreground">Initial team review</p></div><div className="absolute inset-x-3 top-11 rounded-2xl border bg-muted p-3.5 opacity-75 transition-transform duration-500 group-hover:-translate-y-1"><p className="text-xs font-semibold">Version 11</p><p className="mt-0.5 text-[11px] text-muted-foreground">Budget notes added</p></div><div className="absolute inset-x-0 top-[5.5rem] rounded-2xl border bg-card p-4 shadow-lg transition-transform duration-500 group-hover:-translate-y-1"><div className="flex items-center justify-between gap-4"><div><p className="text-xs font-semibold">Version 12</p><p className="mt-0.5 text-[11px] text-muted-foreground">Current version</p></div><span className="rounded-full bg-primary/10 px-3 py-1.5 text-xs font-semibold text-primary">Restore</span></div><div className="mt-4 flex flex-col gap-2" aria-hidden="true"><span className="h-1.5 w-full rounded-full bg-primary/15" /><span className="h-1.5 w-4/5 rounded-full bg-primary/10" /></div></div></div>
        </article>

        <article className="bento-card reveal flex flex-col overflow-hidden p-6 md:p-8 lg:col-span-2" style={{animationDelay:"200ms"}} aria-labelledby="search-title">
          <span className="bento-icon"><FolderSearch className="size-5" /></span>
          <h3 id="search-title" className="mt-5 text-xl font-semibold tracking-tight">Search beyond file names</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Find work by folder, title, or the words inside a document.</p>
          <div className="mt-6 flex flex-1 flex-col rounded-2xl bg-muted p-4"><div className="flex items-center gap-3 rounded-xl bg-card px-4 py-3 shadow-sm"><Search className="size-4 text-primary" /><span className="text-sm font-medium">Q4 launch timeline</span></div><div className="mt-3 flex flex-col gap-2"><div className="rounded-xl bg-card p-3"><div className="flex items-center gap-2"><Files className="size-4 text-primary" /><p className="text-xs font-semibold">Campaign brief.pdf</p></div><p className="mt-2 text-[11px] leading-relaxed text-muted-foreground">…approved <mark className="rounded bg-primary/15 px-1 text-foreground">Q4 launch timeline</mark> and owners…</p></div><div className="rounded-xl bg-card/70 p-3"><div className="flex items-center gap-2"><Files className="size-4 text-primary" /><p className="text-xs font-semibold">Planning notes.doc</p></div><p className="mt-1 text-[11px] text-muted-foreground">Marketing / Launch</p></div></div></div>
        </article>

        <article className="bento-card reveal flex flex-col overflow-hidden p-6 md:p-8 md:col-span-2 lg:col-span-2" style={{animationDelay:"260ms"}} aria-labelledby="live-title">
          <span className="bento-icon"><RefreshCw className="size-5" /></span>
          <h3 id="live-title" className="mt-5 text-xl font-semibold tracking-tight">In sync, in real time</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">See who&apos;s in a file and what changed, the moment it happens.</p>
          <LiveTeamVisual />
        </article>
      </div>
      <Link href="#feature-details" className="group mt-9 inline-flex w-fit items-center gap-2 font-semibold text-primary underline-offset-4 hover:underline focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring">Explore every feature <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" /></Link>
    </div></section>

    <section id="feature-details" className="section-pad bg-muted/55"><div className="mx-auto flex max-w-7xl flex-col gap-24 px-4 md:px-8">
      <div className="grid items-center gap-12 lg:grid-cols-2"><div className="reveal flex flex-col gap-6"><Eyebrow>Everything, findable</Eyebrow><h2 className="text-balance text-3xl font-semibold tracking-tight md:text-5xl">Stop hunting for &apos;that file someone sent.&apos;</h2><p className="text-base leading-relaxed text-muted-foreground">Files end up scattered across email attachments, chat threads, and random folders. Work Drive keeps everything in one searchable place, connected to the rest of the Stack.</p><NumberList items={[["One place, not five.","Stop digging through old emails and chat threads to find a file."],["Attach without downloading first.","Pull a file into an email or a Teams message directly from Work Drive."],["Never lose the old version.","Version history means you can always go back."]]} /></div><div className="reveal reveal-delay"><SearchVisual /></div></div>
      <div className="grid items-center gap-12 lg:grid-cols-2"><div className="reveal order-2 lg:order-1"><StorageVisual /></div><div className="reveal order-1 flex flex-col gap-6 lg:order-2"><Eyebrow>Room to grow</Eyebrow><h2 className="text-balance text-3xl font-semibold tracking-tight md:text-5xl">Storage that scales with your team</h2><NumberList items={[["One shared pool.","Storage is pooled across your whole team, not capped per person."],["See what's using space.","A clear storage breakdown shows what's taking up room, so nothing surprises you."],["Upgrade without disruption.","Move to a bigger plan without touching a single file or folder."]]} /></div></div>
    </div></section>

    <section className="section-pad"><div className="mx-auto max-w-5xl px-4 md:px-8"><figure className="reveal rounded-[2rem] bg-foreground p-8 text-background md:p-14"><p className="text-3xl font-medium leading-snug tracking-tight md:text-5xl">“We stopped asking &apos;can you resend that file&apos; in every other thread.”</p><figcaption className="mt-9 flex items-center gap-4"><span className="grid size-12 place-items-center rounded-full bg-primary font-semibold">CW</span><span><strong className="block">Cameron W.</strong><span className="text-sm text-background/60">Project Manager</span></span></figcaption>{/* TODO: Replace fictional placeholder with a verified customer quote. */}</figure></div></section>

    <section id="faq" className="section-pad bg-muted/55"><div className="mx-auto grid max-w-6xl gap-12 px-4 md:px-8 lg:grid-cols-[.75fr_1.25fr]"><div className="flex flex-col items-start gap-4"><Eyebrow>Questions</Eyebrow><h2 className="text-balance text-4xl font-semibold tracking-tight md:text-5xl">Work Drive, answered.</h2></div><Accordion defaultValue={["faq-0"]} className="rounded-3xl border bg-card px-6 shadow-sm">{faqs.map(([question,answer],i)=><AccordionItem value={`faq-${i}`} key={question} className="border-b last:border-b-0"><AccordionTrigger className="py-6 text-left text-base font-semibold hover:no-underline">{question}</AccordionTrigger><AccordionContent className="pb-6 text-sm leading-relaxed text-muted-foreground">{answer}</AccordionContent></AccordionItem>)}</Accordion></div></section>

    <section id="get-started" className="px-4 py-10 md:px-8 md:py-16"><div className="mx-auto flex max-w-7xl flex-col items-center gap-6 rounded-[2rem] bg-primary px-6 py-16 text-center text-primary-foreground shadow-2xl md:py-24"><span className="rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-2 text-xs font-semibold uppercase tracking-[.18em]">Ready when you are</span><h2 className="max-w-3xl text-balance text-4xl font-semibold tracking-tight md:text-6xl">One drive for everything. £1 to start.</h2><Link href="#" className={buttonVariants({ variant:"secondary", size:"lg", className:"mt-2 rounded-full bg-primary-foreground px-7 text-primary hover:bg-primary-foreground/90" })}>Start the Stack for £1 <ArrowRight data-icon="inline-end" /></Link></div></section>
  </main><Footer /></div>
}

function NumberList({ items }: { items: string[][] }) { return <ol className="flex flex-col gap-5">{items.map(([title,copy],i)=><li key={title} className="flex gap-4"><span className="grid size-8 shrink-0 place-items-center rounded-full bg-primary text-xs font-semibold text-primary-foreground">{i+1}</span><p className="text-sm leading-relaxed text-muted-foreground"><strong className="block text-base text-foreground">{title}</strong>{copy}</p></li>)}</ol> }
