'use client';

import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import ScrollProgress from './ScrollProgress';
import FloatingDownloadButton from './FloatingDownloadButton';
import ResumeHero from './ResumeHero';
import ResumeEducation from './ResumeEducation';
import ResumeExperience from './ResumeExperience';
import ResumeProjects from './ResumeProjects';
import ResumeSkills from './ResumeSkills';

// Lazy-load the 3D background so it doesn't block first paint
const GridBackground = dynamic(() => import('./GridBackground'), {
  ssr: false,
  loading: () => null,
});

function SectionDivider() {
  return (
    <div className="container mx-auto max-w-4xl px-6">
      <div className="h-px bg-gradient-to-r from-transparent via-muted/12 to-transparent" />
    </div>
  );
}

export default function ResumePageClient() {
  return (
    <div className="relative min-h-screen bg-primary-dark">
      {/* Subtle 3D grid — sits behind everything */}
      <Suspense fallback={null}>
        <GridBackground />
      </Suspense>

      {/* Dot-matrix overlay for texture */}
      <div className="fixed inset-0 z-[1] pointer-events-none dot-matrix opacity-40" />

      {/* Content layer */}
      <div className="relative z-10">
        <ScrollProgress />
        {/* <FloatingDownloadButton /> */}

        <ResumeHero />
        <SectionDivider />
        <ResumeEducation />
        <SectionDivider />
        <ResumeExperience />
        <SectionDivider />
        <ResumeProjects />
        <SectionDivider />
        <ResumeSkills />

        {/* Back to portfolio */}
        <div className="container mx-auto max-w-4xl px-6 py-20 text-center">
          <div className="mb-8 h-px bg-gradient-to-r from-transparent via-muted/12 to-transparent" />
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="/"
              className="group inline-flex items-center gap-2 rounded-full border border-muted/15 bg-muted/5 px-5 py-2.5 text-sm text-muted/60 transition-all hover:border-muted/30 hover:text-white hover:bg-muted/10"
            >
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Back to Portfolio
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
