'use client';

import Link from 'next/link';
import { m } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import ScrollProgress from './ScrollProgress';
import DownloadButton from './DownloadButton';
import ResumeHero from './ResumeHero';
import ResumeEducation from './ResumeEducation';
import ResumeExperience from './ResumeExperience';
import ResumeProjects from './ResumeProjects';
import ResumeSkills from './ResumeSkills';

export default function ResumePageClient() {
  return (
    <div className="min-h-screen bg-bg-primary">
      <ScrollProgress />
      <DownloadButton variant="fixed" />

      <ResumeHero />
      <ResumeEducation />
      <ResumeExperience />
      <ResumeProjects />
      <ResumeSkills />

      <div className="mx-auto max-w-content px-6 py-20 text-center">
        <div className="h-px bg-border mb-12" />
        <m.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/"
            className="group inline-flex items-center gap-2 rounded-button border border-border px-5 py-2.5 text-sm text-text-secondary transition-all duration-200 hover:border-border-hover hover:text-text-primary"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Back to Portfolio
          </Link>
          <DownloadButton variant="inline" />
        </m.div>
      </div>
    </div>
  );
}
