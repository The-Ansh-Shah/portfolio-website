'use client';

import { m } from 'framer-motion';
import { resumeData } from '@/lib/resumeData';
import { viewportOnce } from '@/lib/animations';

export default function ResumeSkills() {
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
          Technical Skills
        </m.h2>

        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="grid gap-6 md:grid-cols-2"
        >
          {resumeData.skills.map((group) => (
            <div key={group.category} className="rounded-bento bg-bg-card border border-border p-6">
              <h3 className="text-sm font-semibold text-text-primary mb-2">{group.category}</h3>
              <p className="text-body text-text-secondary">{group.skills.join(', ')}</p>
            </div>
          ))}
        </m.div>
      </div>
    </section>
  );
}
