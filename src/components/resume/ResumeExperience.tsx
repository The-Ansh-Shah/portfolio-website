'use client';

import { m } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import { resumeData } from '@/lib/resumeData';
import { sectionReveal, viewportOnce } from '@/lib/animations';
import TimelineItem from './TimelineItem';

export default function ResumeExperience() {
  return (
    <section className="relative py-20 md:py-24">
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
              <Briefcase className="h-4 w-4 text-muted/70" />
            </div>
            <h2 className="text-2xl font-bold text-white md:text-3xl tracking-tight">Experience</h2>
          </div>
          <div className="h-px w-20 shimmer-line rounded-full" />
        </m.div>

        {/* Timeline */}
        <div>
          {resumeData.experience.map((exp, index) => (
            <TimelineItem
              key={exp.id}
              date={`${exp.startDate} — ${exp.endDate}`}
              title={exp.role}
              subtitle={`${exp.organization}${exp.department ? ` · ${exp.department}` : ''}`}
              location={exp.location}
              isLast={index === resumeData.experience.length - 1}
            >
              {/* Bullets */}
              <ul className="space-y-2.5">
                {exp.bullets.map((bullet, i) => (
                  <m.li
                    key={i}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={viewportOnce}
                    transition={{ duration: 0.3, delay: i * 0.08 }}
                    className="flex items-start gap-2.5 text-sm text-muted/75 leading-relaxed"
                  >
                    <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-muted/40" />
                    {bullet}
                  </m.li>
                ))}
              </ul>

              {/* Tech tags */}
              <div className="mt-4 flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-muted/12 bg-muted/5 px-2.5 py-0.5 text-xs font-medium text-muted/65 transition-all hover:border-muted/25 hover:text-white hover:bg-muted/10 cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </TimelineItem>
          ))}
        </div>
      </div>
    </section>
  );
}
