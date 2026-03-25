'use client';

import { m } from 'framer-motion';
import { resumeData } from '@/lib/resumeData';
import { viewportOnce } from '@/lib/animations';

export default function ResumeExperience() {
  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto max-w-content px-6">
        <m.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-section text-text-primary mb-8"
        >
          Experience
        </m.h2>

        <div className="space-y-4">
          {resumeData.experience.map((exp, index) => (
            <m.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.5, delay: index * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
              className="rounded-bento bg-bg-card border border-border p-6 md:p-8"
            >
              <div className="flex items-start justify-between mb-1">
                <h3 className="text-lg font-semibold text-text-primary">{exp.role}</h3>
                <span className="text-caption text-text-muted whitespace-nowrap ml-4">
                  {exp.startDate} — {exp.endDate}
                </span>
              </div>
              <p className="text-body text-accent mb-1">
                {exp.organization}{exp.department ? ` · ${exp.department}` : ''}
              </p>
              <p className="text-caption text-text-muted mb-4">{exp.location}</p>

              <ul className="space-y-1.5 mb-3">
                {exp.bullets.map((bullet, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-body text-text-secondary">
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-text-muted" />
                    {bullet}
                  </li>
                ))}
              </ul>

              <p className="text-caption text-text-muted">{exp.technologies.join(' · ')}</p>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
}
