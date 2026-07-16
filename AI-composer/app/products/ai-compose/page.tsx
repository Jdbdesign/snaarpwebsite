import type { Metadata } from "next"
import { AIComposePage } from "@/components/ai-compose-page"

export const metadata: Metadata = {
  title: "AI Compose",
  description: "Draft emails, replies, and follow-ups in seconds with AI Compose, built into the Snaarp Stack.",
}

export default function Page() {
  return <AIComposePage />
}
