'use client';

import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import { resumeData } from '@/lib/resumeData';
import { sectionReveal, viewportOnce } from '@/lib/animations';

export default function ResumeEducation() {
  const edu = resumeData.education[0];

  return (
    <section className="py-16 md:py-20">
      <div className="container mx-auto max-w-4xl px-6">
        {/* Section header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={sectionReveal}
          className="mb-10"
        >
          <h2 className="mb-2 text-2xl font-bold text-white md:text-3xl">Education</h2>
          <div className="h-0.5 w-16 rounded-full bg-muted/40" />
        </motion.div>

        {/* Education card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.5 }}
          className="rounded-2xl border border-accent/30 bg-accent/10 p-6 backdrop-blur-sm md:p-8"
        >
          <div className="flex items-start gap-4">
            <div className="rounded-xl bg-muted/10 p-3 border border-muted/20">
              <GraduationCap className="h-6 w-6 text-muted" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-white">{edu.institution}</h3>
              <p className="mt-1 text-sm font-medium text-secondary">{edu.degree}</p>
              <div className="mt-2 flex flex-wrap items-center gap-3 text-xs text-muted/70">
                <span>{edu.startDate} — {edu.endDate}</span>
                <span className="hidden sm:inline">|</span>
                <span>{edu.location}</span>
                <span className="hidden sm:inline">|</span>
                <span className="font-semibold text-muted">GPA: {edu.gpa}</span>
              </div>
            </div>
          </div>

          {/* Honors */}
          <div className="mt-6">
            <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-secondary">
              Honors & Activities
            </h4>
            <ul className="space-y-2">
              {edu.honors.map((honor, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-muted/80">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-muted/50" />
                  {honor}
                </li>
              ))}
            </ul>
          </div>

          {/* Coursework */}
          <div className="mt-6">
            <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-secondary">
              Relevant Coursework
            </h4>
            <div className="flex flex-wrap gap-2">
              {edu.relevantCoursework.map((course, i) => (
                <motion.span
                  key={course}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={viewportOnce}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  className="rounded-full border border-accent/30 bg-accent/20 px-3 py-1 text-xs font-medium text-muted/90"
                >
                  {course}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
