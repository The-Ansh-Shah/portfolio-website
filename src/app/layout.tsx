import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from "@vercel/speed-insights/next";
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import LayoutClient from '@/components/LayoutClient';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'Ansh Shah | EECS @ UC Berkeley',
  description: 'Computer Architecture Engineer specializing in RISC-V CPU design, ASIC implementation, and embedded systems security. UC Berkeley EECS student passionate about building efficient systems at the hardware-software interface.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
      </head>
      <body className="min-h-screen flex flex-col overflow-x-hidden">
        <Navbar />
        <main className="flex-1">
          <LayoutClient>{children}</LayoutClient>
        </main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
