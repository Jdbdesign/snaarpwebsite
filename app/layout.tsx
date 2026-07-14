import type { Metadata } from 'next';
import './globals.css';
import { CurrencyProvider } from '@/components/currency/CurrencyContext';

export const metadata: Metadata = {
  title: 'Snaarp — Everything for £1',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="hero-bg">
        <a href="#main-content" className="skip-link">Skip to main content</a>
        <CurrencyProvider>{children}</CurrencyProvider>
      </body>
    </html>
  );
}
