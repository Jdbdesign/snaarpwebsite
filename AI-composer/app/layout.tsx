import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '500', '600', '700'], variable: '--font-poppins' })

export const metadata: Metadata = {
  title: { default: 'AI Compose | Snaarp', template: '%s | Snaarp' },
  description: 'Draft emails, replies, and follow-ups in seconds with AI Compose, built into the Snaarp Stack.',
  generator: 'v0.app',
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#ffffff',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className="bg-background"><body className={`${poppins.variable} antialiased`}>{children}{process.env.NODE_ENV === 'production' && <Analytics />}</body></html>
}
