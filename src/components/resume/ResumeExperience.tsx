'use client';

import { m } from 'framer-motion';
import { resumeData } from '@/lib/resumeData';
import { sectionReveal, viewportOnce } from '@/lib/animations';

export default function ResumeExperience() {
  return (
    <section className="py-16 md:py-20 bg-bg-primary">
      <div className="mx-auto max-w-content px-6">
        <m.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={sectionReveal}
          className="mb-8"
        >
          <h2 className="text-h2 text-text-primary">Experience</h2>
        </m.div>

        <div className="space-y-10">
          {resumeData.experience.map((exp, index) => (
            <m.div
              key={exp.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
            >
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h3 className="text-lg font-semibold text-text-primary">{exp.role}</h3>
                  <p className="text-[15px] text-text-secondary">
                    {exp.organization}{exp.department ? ` · ${exp.department}` : ''}
                  </p>
                </div>
                <span className="text-caption text-text-tertiary whitespace-nowrap ml-4">
                  {exp.startDate} — {exp.endDate}
                </span>
              </div>
              {exp.location && (
                <p className="text-caption text-text-tertiary mb-3">{exp.location}</p>
              )}

              <ul className="space-y-1.5">
                {exp.bullets.map((bullet, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-body text-text-secondary">
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-text-tertiary" />
                    {bullet}
                  </li>
                ))}
              </ul>

              <p className="mt-3 text-caption text-text-tertiary">
                {exp.technologies.join(' · ')}
              </p>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
}
