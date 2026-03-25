'use client';

import { m } from 'framer-motion';
import { resumeData } from '@/lib/resumeData';
import { viewportOnce } from '@/lib/animations';

export default function ResumeProjects() {
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
          Projects
        </m.h2>

        <div className="space-y-4">
          {resumeData.projects.map((project, index) => (
            <m.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.5, delay: index * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
              className="rounded-bento bg-bg-card border border-border p-6 md:p-8"
            >
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-lg font-semibold text-text-primary">{project.title}</h3>
                <span className="text-caption text-text-muted whitespace-nowrap ml-4">{project.date}</span>
              </div>
              <p className="text-body text-text-secondary mb-3">{project.description}</p>

              <ul className="space-y-1.5 mb-3">
                {project.bullets.map((bullet, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-body text-text-secondary">
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-text-muted" />
                    {bullet}
                  </li>
                ))}
              </ul>

              <div className="flex items-center gap-3">
                <span className="text-caption text-text-muted">{project.technologies.join(' · ')}</span>
                {project.github && (
                  <>
                    <span className="text-text-muted">&middot;</span>
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-caption text-text-primary hover:text-text-secondary transition-colors duration-200 underline">
                      Source →
                    </a>
                  </>
                )}
              </div>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
}
