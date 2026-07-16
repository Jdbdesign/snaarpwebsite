import { Check, CheckCheck, FileImage, FileText, Files, Folder, History, Mail, MessageSquare, RefreshCw, Search, Users } from "lucide-react"

const folders = [
  { name: "Client work", tone: "bg-primary/8 text-primary" },
  { name: "Brand assets", tone: "bg-primary/14 text-primary" },
  { name: "Team docs", tone: "bg-primary/20 text-primary" },
]

export function DriveBrowser() {
  return (
    <div className="product-shell w-full">
      <div className="product-window">
        <div className="flex items-center justify-between border-b px-5 py-4">
          <div><p className="text-xs text-muted-foreground">Work Drive</p><p className="font-semibold">All files</p></div>
          <div className="flex items-center gap-2 rounded-full bg-muted px-3 py-2 text-xs text-muted-foreground"><Search className="size-4" /> Search</div>
        </div>
        <div className="grid gap-4 p-5 sm:grid-cols-3">
          {folders.map((folder, index) => (
            <div key={folder.name} className={`${folder.tone} relative min-h-32 rounded-2xl p-4`}>
              <Folder className="size-8 fill-current text-foreground/80" />
              <p className="mt-8 text-sm font-semibold">{folder.name}</p>
              <p className="text-xs text-foreground/55">{index + 4} files</p>
              {index === 0 && <span className="absolute -right-2 -top-3 flex items-center gap-1 rounded-full bg-foreground px-3 py-1.5 text-[11px] text-background shadow-lg"><Users className="size-3" /> Shared with Teams</span>}
            </div>
          ))}
          <div className="rounded-2xl border bg-card p-4"><FileText className="size-7 text-primary" /><p className="mt-5 text-sm font-semibold">Project brief.pdf</p><p className="text-xs text-muted-foreground">2.4 MB</p></div>
          <div className="rounded-2xl border bg-card p-4"><FileImage className="size-7 text-primary" /><p className="mt-5 text-sm font-semibold">Homepage mockup.png</p><p className="text-xs text-muted-foreground">8.1 MB</p></div>
          <div className="rounded-2xl bg-foreground p-4 text-background"><p className="text-xs text-background/60">Storage used</p><p className="mt-2 text-2xl font-semibold">12.8 GB</p><div className="mt-5 h-1.5 overflow-hidden rounded-full bg-background/20"><div className="h-full w-3/5 rounded-full bg-primary" /></div><p className="mt-2 text-[11px] text-background/60">of 20 GB shared</p></div>
        </div>
      </div>
    </div>
  )
}

export function SearchVisual() {
  return <div className="product-shell"><div className="product-window p-5"><div className="flex items-center gap-3 rounded-2xl border bg-background p-4"><Search className="size-5 text-primary" /><span className="text-sm">project brief</span><kbd className="ml-auto rounded-md bg-muted px-2 py-1 text-xs text-muted-foreground">⌘ K</kbd></div><div className="mt-4 flex flex-col gap-2">{["Project brief.pdf", "Project brief notes.doc", "Archived brief v1.pdf"].map((file, i)=><div key={file} className={`flex items-center gap-3 rounded-xl p-3 ${i===0?"bg-primary/8":"bg-muted/50"}`}><FileText className="size-5 text-primary"/><span className="text-sm font-medium">{file}</span><span className="ml-auto text-xs text-muted-foreground">{i+1}d ago</span></div>)}</div></div></div>
}

export function StorageVisual() {
  return <div className="product-shell"><div className="product-window p-6"><div className="flex items-center justify-between"><div><p className="text-xs text-muted-foreground">Shared storage</p><p className="text-3xl font-semibold">12.8 GB</p></div><span className="rounded-full bg-accent-mint px-3 py-1.5 text-xs font-semibold">Healthy</span></div><div className="mt-7 flex h-32 items-end gap-3">{[38,62,48,84,66,92,76].map((height,i)=><div key={i} className="flex-1 rounded-t-xl bg-primary/15" style={{height:`${height}%`}}><div className="h-full rounded-t-xl bg-primary" style={{opacity:.35+i*.07}} /></div>)}</div><div className="mt-5 flex items-center gap-2 text-xs text-muted-foreground"><History className="size-4"/> Files stay put when your plan changes</div></div></div>
}

/* Connective "attach anywhere" visual — a file flowing into Mail and Teams (accent card). */
export function SyncFlowVisual() {
  return (
    <div className="relative flex flex-1 flex-col items-center justify-center gap-0 py-2" aria-label="A file flowing from Work Drive into Mail and Teams">
      <div className="float-soft z-10 flex w-full max-w-[17rem] items-center gap-3 rounded-2xl bg-primary-foreground p-3.5 text-foreground shadow-xl">
        <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary"><Files className="size-5" /></span>
        <div className="min-w-0"><p className="truncate text-sm font-semibold">Campaign brief.pdf</p><p className="text-xs text-muted-foreground">Work Drive / Marketing</p></div>
        <span className="ml-auto flex size-6 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground"><Check className="size-3.5" /></span>
      </div>

      <svg viewBox="0 0 300 66" preserveAspectRatio="none" className="-my-1 h-16 w-full max-w-[19rem]" aria-hidden="true">
        <path d="M150 2 C150 34, 68 30, 68 64" fill="none" stroke="currentColor" strokeWidth="2" strokeOpacity=".22" />
        <path d="M150 2 C150 34, 232 30, 232 64" fill="none" stroke="currentColor" strokeWidth="2" strokeOpacity=".22" />
        <path className="flow-line" d="M150 2 C150 34, 68 30, 68 64" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path className="flow-line" d="M150 2 C150 34, 232 30, 232 64" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>

      <div className="z-10 grid w-full grid-cols-2 gap-3">
        <div className="flex flex-col items-center gap-2 rounded-2xl border border-primary-foreground/15 bg-primary-foreground/10 p-4 text-center backdrop-blur-sm"><Mail className="size-6" /><div><p className="text-sm font-semibold">Mail</p><p className="text-xs text-primary-foreground/60">Attach directly</p></div></div>
        <div className="flex flex-col items-center gap-2 rounded-2xl border border-primary-foreground/15 bg-primary-foreground/10 p-4 text-center backdrop-blur-sm"><MessageSquare className="size-6" /><div><p className="text-sm font-semibold">Teams</p><p className="text-xs text-primary-foreground/60">Share in chat</p></div></div>
      </div>
    </div>
  )
}

/* Real-time presence + activity feed (card background). */
const activity = [
  { initials: "CW", tone: "bg-primary text-primary-foreground", name: "Cameron", action: "is editing Launch plan", time: "now", live: true },
  { initials: "PR", tone: "bg-secondary text-secondary-foreground", name: "Priya", action: "restored version 11", time: "2m" },
  { initials: "TS", tone: "bg-foreground text-background", name: "Theo", action: "shared Brand kit", time: "9m" },
]

export function LiveTeamVisual() {
  return (
    <div className="mt-6 flex flex-1 flex-col rounded-2xl bg-muted p-4" aria-label="Live team activity in Work Drive">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex -space-x-2">
            {activity.map((a) => (
              <span key={a.initials} className={`grid size-8 place-items-center rounded-full border-2 border-muted text-[11px] font-semibold ${a.tone}`}>{a.initials}</span>
            ))}
          </div>
          <span className="ml-1 text-xs font-medium text-muted-foreground">3 here</span>
        </div>
        <span className="flex items-center gap-1.5 rounded-full bg-card px-2.5 py-1 text-[11px] font-semibold text-primary shadow-sm">
          <span className="live-dot size-1.5 rounded-full text-primary" aria-hidden="true"><span className="size-1.5 rounded-full bg-primary" /></span>
          Live
        </span>
      </div>
      <div className="mt-4 flex flex-col gap-2">
        {activity.map((a) => (
          <div key={a.initials} className={`flex items-center gap-3 rounded-xl p-2.5 ${a.live ? "bg-card shadow-sm" : "bg-card/60"}`}>
            <span className={`grid size-7 shrink-0 place-items-center rounded-full text-[10px] font-semibold ${a.tone}`}>{a.initials}</span>
            <p className="min-w-0 truncate text-xs"><span className="font-semibold text-foreground">{a.name}</span> <span className="text-muted-foreground">{a.action}</span></p>
            <span className="ml-auto flex shrink-0 items-center gap-1 text-[10px] text-muted-foreground">
              {a.live ? <RefreshCw className="spin-slow size-3 text-primary" /> : <CheckCheck className="size-3 text-primary" />}
              {a.time}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
