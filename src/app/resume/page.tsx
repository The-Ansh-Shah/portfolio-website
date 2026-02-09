import type { Metadata } from 'next';
import ResumePageClient from '@/components/resume/ResumePageClient';

export const metadata: Metadata = {
  title: 'Resume | Ansh Shah',
  description: 'Interactive resume — Computer Architecture Engineer, UC Berkeley EECS',
};

export default function ResumePage() {
  return <ResumePageClient />;
}
