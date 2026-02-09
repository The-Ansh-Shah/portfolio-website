'use client';

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import ScrollProgress from './ScrollProgress';
import FloatingDownloadButton from './FloatingDownloadButton';
import ResumeHero from './ResumeHero';
import ResumeEducation from './ResumeEducation';
import ResumeExperience from './ResumeExperience';
import ResumeProjects from './ResumeProjects';
import ResumeSkills from './ResumeSkills';

export default function ResumePageClient() {
  return (
    <div className="min-h-screen bg-primary-dark">
      <ScrollProgress />
      <FloatingDownloadButton />

      <ResumeHero />
      <ResumeEducation />
      <ResumeExperience />
      <ResumeProjects />
      <ResumeSkills />

      {/* Back to portfolio */}
      <div className="container mx-auto max-w-4xl px-6 py-16 text-center">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-muted/60 transition-colors hover:text-white"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Portfolio
        </Link>
      </div>
    </div>
  );
}
