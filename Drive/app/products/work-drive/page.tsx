import type { Metadata } from "next"
import { WorkDrivePage } from "@/components/work-drive/work-drive-page"

export const metadata: Metadata = {
  title: "Work Drive | Snaarp",
  description: "Store, share, and find every team file in one connected work drive.",
}

export default function Page() {
  return <WorkDrivePage />
}
