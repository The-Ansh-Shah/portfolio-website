'use client';

import { m } from 'framer-motion';
import { resumeData } from '@/lib/resumeData';
import { sectionReveal, viewportOnce } from '@/lib/animations';

export default function ResumeProjects() {
  return (
    <section className="py-16 md:py-20 bg-bg-secondary">
      <div className="mx-auto max-w-content px-6">
        <m.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={sectionReveal}
          className="mb-8"
        >
          <h2 className="text-h2 text-text-primary">Projects</h2>
        </m.div>

        <div className="space-y-10">
          {resumeData.projects.map((project, index) => (
            <m.div
              key={project.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
            >
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-lg font-semibold text-text-primary">{project.title}</h3>
                <span className="text-caption text-text-tertiary whitespace-nowrap ml-4">{project.date}</span>
              </div>
              <p className="text-[15px] text-text-secondary mb-3">{project.description}</p>

              <ul className="space-y-1.5">
                {project.bullets.map((bullet, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-body text-text-secondary">
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-text-tertiary" />
                    {bullet}
                  </li>
                ))}
              </ul>

              <div className="mt-3 flex items-center gap-3">
                <span className="text-caption text-text-tertiary">
                  {project.technologies.join(' · ')}
                </span>
                {project.github && (
                  <>
                    <span className="text-text-tertiary">&middot;</span>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-caption font-medium text-accent transition-colors duration-200 hover:text-accent-hover"
                    >
                      Source
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
