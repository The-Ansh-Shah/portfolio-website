'use client';

import { m } from 'framer-motion';
import { resumeData } from '@/lib/resumeData';
import { sectionReveal, viewportOnce } from '@/lib/animations';

export default function ResumeSkills() {
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
          <h2 className="text-h2 text-text-primary">Technical Skills</h2>
        </m.div>

        <m.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="grid gap-8 md:grid-cols-2"
        >
          {resumeData.skills.map((group) => (
            <div key={group.category}>
              <h3 className="text-sm font-semibold text-text-primary mb-1">
                {group.category}
              </h3>
              <p className="text-body text-text-secondary">
                {group.skills.join(', ')}
              </p>
            </div>
          ))}
        </m.div>
      </div>
    </section>
  );
}
