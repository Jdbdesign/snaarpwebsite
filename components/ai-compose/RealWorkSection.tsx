"use client"

import { useState } from "react"
import {
  ArrowUpRight,
  Check,
  Clock3,
  Mail,
  MessageSquareText,
  RefreshCw,
  Send,
  Sparkles,
} from "lucide-react"

const scenarios = [
  {
    id: "follow-up",
    label: "Customer follow-up",
    channel: "Mail",
    icon: Mail,
    contextLabel: "THREAD CONTEXT",
    contact: "Maya Chen",
    subject: "Re: Website launch timeline",
    context: "Thanks for the walkthrough. Can you confirm what you need from our team before Friday?",
    time: "10:14",
    prompt: "Confirm the next steps. Keep it clear and warm.",
    tone: "Warm and clear",
    draft: "Hi Maya,\n\nAbsolutely. Before Friday, we just need the final homepage copy and approval on the launch checklist. I’ll send both links this afternoon so everything is in one place.\n\nThanks,\nGrace",
  },
  {
    id: "project-update",
    label: "Project update",
    channel: "Teams",
    icon: MessageSquareText,
    contextLabel: "CHANNEL CONTEXT",
    contact: "Launch team",
    subject: "Q3 planning",
    context: "Are we still on track for the review tomorrow? I need to update the wider team.",
    time: "11:32",
    prompt: "Share progress and flag the one open item.",
    tone: "Direct and brief",
    draft: "Yes, we’re on track for tomorrow’s review. The deck and rollout plan are ready. The only open item is final pricing approval, which Finance expects to confirm by 4pm today.",
  },
  {
    id: "invoice",
    label: "Invoice reminder",
    channel: "Mail",
    icon: Clock3,
    contextLabel: "ACCOUNT CONTEXT",
    contact: "North & Pine Studio",
    subject: "Invoice 1842",
    context: "Invoice 1842 was due last Thursday. No reply has been received yet.",
    time: "09:08",
    prompt: "Send a polite reminder without sounding automated.",
    tone: "Friendly and firm",
    draft: "Hi there,\n\nJust a quick note about invoice 1842, which was due last Thursday. Could you let me know when we should expect payment, or if you need me to resend any details?\n\nBest,\nGrace",
  },
] as const

export function RealWorkSection() {
  const [activeId, setActiveId] = useState<(typeof scenarios)[number]["id"]>("follow-up")
  const active = scenarios.find((scenario) => scenario.id === activeId) ?? scenarios[0]
  const ActiveIcon = active.icon

  return (
    <section id="features" className="made-real overflow-hidden bg-foreground py-24 text-primary-foreground lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-4xl">
          <p className="font-mono text-xs font-semibold tracking-[.18em] text-primary-foreground/55">MADE FOR REAL WORK</p>
          <h2 className="mt-6 text-balance text-5xl font-bold leading-[1.02] tracking-tight md:text-7xl">
            The draft is only useful if it fits the moment.
          </h2>
          <p className="mt-7 max-w-2xl text-pretty text-base leading-relaxed text-primary-foreground/65 md:text-lg">
            AI Compose reads the conversation, understands your intent, and gives you a first pass that is ready for real work.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-[18rem_1fr] lg:gap-12">
          <div className="flex flex-col justify-between gap-10">
            <div className="flex gap-2 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible lg:pb-0" role="list" aria-label="Choose a work scenario">
              {scenarios.map((scenario) => {
                const Icon = scenario.icon
                const isActive = scenario.id === activeId
                return (
                  <button
                    key={scenario.id}
                    type="button"
                    aria-pressed={isActive}
                    onClick={() => setActiveId(scenario.id)}
                    className="real-work-trigger group flex min-w-64 items-center gap-4 rounded-2xl border border-primary-foreground/15 bg-primary-foreground/5 p-4 text-left text-primary-foreground/65 transition duration-300 hover:border-primary-foreground/30 hover:text-primary-foreground data-[active=true]:border-primary data-[active=true]:bg-primary/20 data-[active=true]:text-primary-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary lg:min-w-0"
                    data-active={isActive}
                  >
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-primary-foreground/15 bg-primary-foreground/5 text-primary-foreground/55 transition group-data-[active=true]:bg-primary group-data-[active=true]:text-primary-foreground">
                      <Icon className="size-5" aria-hidden="true" />
                    </span>
                    <span className="flex min-w-0 flex-1 flex-col gap-1">
                      <span className="font-semibold">{scenario.label}</span>
                      <span className="text-xs text-primary-foreground/45">Compose in {scenario.channel}</span>
                    </span>
                    <ArrowUpRight className="size-4 text-primary-foreground/30 transition group-data-[active=true]:text-primary-foreground" aria-hidden="true" />
                  </button>
                )
              })}
            </div>
            <div className="hidden border-l border-primary pl-5 lg:block">
              <p className="text-sm font-semibold">Context travels with you.</p>
              <p className="mt-2 text-sm leading-relaxed text-primary-foreground/50">One composer for Mail and Teams, with your voice and the conversation already in view.</p>
            </div>
          </div>

          <div className="real-work-console rounded-3xl border border-primary-foreground/15 bg-primary-foreground/[.045] p-3 shadow-2xl sm:p-5">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-primary-foreground/10 px-2 pb-4">
              <div className="flex items-center gap-3">
                <span className="flex size-9 items-center justify-center rounded-xl bg-primary text-primary-foreground"><Sparkles className="size-4" aria-hidden="true" /></span>
                <div><p className="text-sm font-semibold">AI Compose</p><p className="text-xs text-primary-foreground/45">Working inside Snaarp {active.channel}</p></div>
              </div>
              <span className="flex items-center gap-2 rounded-full border border-primary-foreground/15 bg-primary-foreground/5 px-3 py-1.5 text-xs text-primary-foreground/60"><Check className="size-3.5 text-primary" aria-hidden="true" />Context ready</span>
            </div>

            <div key={active.id} className="real-work-panel mt-4 grid min-h-[34rem] overflow-hidden rounded-2xl border border-primary-foreground/10 bg-[#17131f] lg:grid-cols-[.42fr_.58fr]">
              <div className="flex flex-col border-b border-primary-foreground/10 p-5 lg:border-b-0 lg:border-r lg:p-7">
                <div className="flex items-center justify-between gap-4">
                  <span className="font-mono text-[10px] font-semibold tracking-[.16em] text-primary-foreground/35">{active.contextLabel}</span>
                  <span className="font-mono text-[10px] text-primary-foreground/30">{active.time}</span>
                </div>
                <div className="mt-8">
                  <div className="flex items-center gap-3">
                    <span className="flex size-9 items-center justify-center rounded-full bg-primary-foreground/10 text-xs font-bold">{active.contact.slice(0, 1)}</span>
                    <div><p className="text-sm font-semibold">{active.contact}</p><p className="text-xs text-primary-foreground/40">{active.subject}</p></div>
                  </div>
                  <p className="mt-6 border-l-2 border-primary pl-4 text-sm leading-7 text-primary-foreground/65">{active.context}</p>
                </div>
                <div className="mt-auto pt-10">
                  <p className="font-mono text-[10px] font-semibold tracking-[.16em] text-primary-foreground/35">YOUR INSTRUCTION</p>
                  <p className="mt-3 rounded-xl border border-primary-foreground/10 bg-primary-foreground/5 p-4 text-sm leading-relaxed text-primary-foreground/75">{active.prompt}</p>
                </div>
              </div>

              <div className="flex flex-col bg-primary-foreground p-5 text-foreground sm:p-7 lg:p-9">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-2 text-xs font-semibold text-primary"><Sparkles className="size-4" aria-hidden="true" />DRAFT READY</div>
                  <span className="rounded-full bg-accent px-3 py-1.5 text-xs font-semibold text-accent-foreground">{active.tone}</span>
                </div>
                <p className="mt-9 whitespace-pre-line text-sm leading-7 sm:text-[15px]">{active.draft}</p>
                <div className="mt-auto flex flex-wrap items-center gap-3 pt-10">
                  <button type="button" className="flex h-11 flex-1 items-center justify-center gap-2 rounded-full bg-foreground px-5 text-sm font-semibold text-background transition hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"><Send className="size-4" aria-hidden="true" />Insert draft</button>
                  <button type="button" aria-label="Regenerate draft" className="flex size-11 items-center justify-center rounded-full border border-border transition hover:bg-secondary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"><RefreshCw className="size-4" aria-hidden="true" /></button>
                </div>
                <p className="mt-4 text-xs leading-relaxed text-muted-foreground">Review, edit, or regenerate. Nothing sends until you choose.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-6 border-t border-primary-foreground/15 pt-8 sm:grid-cols-3">
          {["Reads the conversation", "Keeps your tone", "Waits for your approval"].map((item) => (
            <div key={item} className="flex items-center gap-3 text-sm font-medium text-primary-foreground/75"><Check className="size-4 shrink-0 text-primary" aria-hidden="true" />{item}</div>
          ))}
        </div>
      </div>
    </section>
  )
}
