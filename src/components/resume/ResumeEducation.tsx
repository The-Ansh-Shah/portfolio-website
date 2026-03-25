'use client';

import { m } from 'framer-motion';
import { resumeData } from '@/lib/resumeData';
import { viewportOnce } from '@/lib/animations';

export default function ResumeEducation() {
  const edu = resumeData.education[0];

  return (
    <section className="py-16 md:py-20 bg-bg-card-alt">
      <div className="mx-auto max-w-content px-6">
        <m.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-section text-text-primary mb-8"
        >
          Education
        </m.h2>

        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="rounded-bento bg-bg-card border border-border p-6 md:p-8"
        >
          <h3 className="text-lg font-semibold text-text-primary">{edu.institution}</h3>
          <p className="mt-1 text-body text-text-secondary">{edu.degree}</p>
          <p className="mt-1 text-caption text-text-muted">
            {edu.startDate} — {edu.endDate} · {edu.location} · GPA: {edu.gpa}
          </p>

          <div className="mt-6">
            <h4 className="text-sm font-semibold text-text-primary mb-2">Honors & Activities</h4>
            <ul className="space-y-1.5">
              {edu.honors.map((honor, i) => (
                <li key={i} className="flex items-start gap-2.5 text-body text-text-secondary">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-text-muted" />
                  {honor}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6">
            <h4 className="text-sm font-semibold text-text-primary mb-2">Relevant Coursework</h4>
            <p className="text-body text-text-secondary">{edu.relevantCoursework.join(', ')}</p>
          </div>
        </m.div>
      </div>
    </section>
  );
}
