'use client';

import { m } from 'framer-motion';
import { GraduationCap, Award, BookOpen } from 'lucide-react';
import { resumeData } from '@/lib/resumeData';
import { sectionReveal, viewportOnce } from '@/lib/animations';

export default function ResumeEducation() {
  const edu = resumeData.education[0];

  return (
    <section className="relative py-20 md:py-24">
      {/* Ambient glow */}
      <div className="absolute inset-0 ambient-glow pointer-events-none" />

      <div className="container relative mx-auto max-w-4xl px-6">
        {/* Section header */}
        <m.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={sectionReveal}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-muted/10 border border-muted/15">
              <GraduationCap className="h-4 w-4 text-muted/70" />
            </div>
            <h2 className="text-2xl font-bold text-white md:text-3xl tracking-tight">Education</h2>
          </div>
          <div className="h-px w-20 shimmer-line rounded-full" />
        </m.div>

        {/* Education card — glass morphism */}
        <m.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="glass-card rounded-2xl p-6 md:p-8"
        >
          {/* Header row */}
          <div className="flex items-start gap-4">
            <div className="hidden sm:flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-muted/15 to-accent/10 border border-muted/15">
              <GraduationCap className="h-7 w-7 text-muted/80" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-xl font-semibold text-white tracking-tight">{edu.institution}</h3>
              <p className="mt-1 text-sm font-medium text-secondary/90">{edu.degree}</p>
              <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted/60">
                <span>{edu.startDate} — {edu.endDate}</span>
                <span className="hidden sm:inline text-muted/20">|</span>
                <span>{edu.location}</span>
                <span className="hidden sm:inline text-muted/20">|</span>
                <span className="font-semibold text-muted/90">GPA: {edu.gpa}</span>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="my-6 h-px bg-gradient-to-r from-transparent via-muted/15 to-transparent" />

          {/* Honors */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Award className="h-3.5 w-3.5 text-muted/50" />
              <h4 className="text-xs font-semibold uppercase tracking-widest text-muted/50">
                Honors & Activities
              </h4>
            </div>
            <ul className="space-y-2.5">
              {edu.honors.map((honor, i) => (
                <m.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={viewportOnce}
                  transition={{ duration: 0.3, delay: i * 0.08 }}
                  className="flex items-start gap-2.5 text-sm text-muted/75"
                >
                  <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-muted/40" />
                  {honor}
                </m.li>
              ))}
            </ul>
          </div>

          {/* Divider */}
          <div className="my-6 h-px bg-gradient-to-r from-transparent via-muted/15 to-transparent" />

          {/* Coursework */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <BookOpen className="h-3.5 w-3.5 text-muted/50" />
              <h4 className="text-xs font-semibold uppercase tracking-widest text-muted/50">
                Relevant Coursework
              </h4>
            </div>
            <div className="flex flex-wrap gap-2">
              {edu.relevantCoursework.map((course, i) => (
                <m.span
                  key={course}
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={viewportOnce}
                  transition={{ duration: 0.3, delay: i * 0.04 }}
                  className="rounded-full border border-muted/12 bg-muted/5 px-3.5 py-1.5 text-xs font-medium text-muted/75 transition-all hover:border-muted/25 hover:text-white hover:bg-muted/10 cursor-default"
                >
                  {course}
                </m.span>
              ))}
            </div>
          </div>
        </m.div>
      </div>
    </section>
  );
}
