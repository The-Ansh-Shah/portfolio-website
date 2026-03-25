import AboutPageClient from './AboutPageClient';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About | Ansh Shah',
  description: 'About Ansh Shah — hardware engineer, UC Berkeley EECS.',
};

export default function AboutPage() {
  return <AboutPageClient />;
}
