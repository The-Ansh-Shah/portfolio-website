import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from "@vercel/speed-insights/next";
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import LayoutClient from '@/components/LayoutClient';
import { ThemeProvider } from '@/lib/ThemeContext';

export const metadata: Metadata = {
  title: 'Ansh Shah | EECS @ UC Berkeley',
  description: 'Hardware engineer specializing in RISC-V CPU design, ASIC implementation, and embedded systems security. UC Berkeley EECS student building efficient systems at the hardware-software interface.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
      </head>
      <body className="min-h-screen flex flex-col overflow-x-hidden font-sans bg-white dark:bg-black text-text-primary">
        <ThemeProvider>
          <Navbar />
          <main className="flex-1 pb-20 md:pb-0">
            <LayoutClient>{children}</LayoutClient>
          </main>
          <Footer />
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}