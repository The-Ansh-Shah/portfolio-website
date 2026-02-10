'use client';

import { motion } from 'framer-motion';
import { FolderGit2, Github, ExternalLink } from 'lucide-react';
import { resumeData } from '@/lib/resumeData';
import { sectionReveal, viewportOnce } from '@/lib/animations';
import TimelineItem from './TimelineItem';

export default function ResumeProjects() {
  return (
    <section className="relative py-20 md:py-24">
      {/* Ambient glow */}
      <div className="absolute inset-0 ambient-glow pointer-events-none" />

      <div className="container relative mx-auto max-w-4xl px-6">
        {/* Section header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={sectionReveal}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-muted/10 border border-muted/15">
              <FolderGit2 className="h-4 w-4 text-muted/70" />
            </div>
            <h2 className="text-2xl font-bold text-white md:text-3xl tracking-tight">Projects</h2>
          </div>
          <div className="h-px w-20 shimmer-line rounded-full" />
        </motion.div>

        {/* Timeline */}
        <div>
          {resumeData.projects.map((project, index) => (
            <TimelineItem
              key={project.id}
              date={project.date}
              title={project.title}
              subtitle={project.description}
              isLast={index === resumeData.projects.length - 1}
            >
              {/* Bullets */}
              <ul className="space-y-2.5">
                {project.bullets.map((bullet, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={viewportOnce}
                    transition={{ duration: 0.3, delay: i * 0.08 }}
                    className="flex items-start gap-2.5 text-sm text-muted/75 leading-relaxed"
                  >
                    <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-muted/40" />
                    {bullet}
                  </motion.li>
                ))}
              </ul>

              {/* Tech tags + GitHub link */}
              <div className="mt-4 flex flex-wrap items-center gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-muted/12 bg-muted/5 px-2.5 py-0.5 text-xs font-medium text-muted/65 transition-all hover:border-muted/25 hover:text-white hover:bg-muted/10 cursor-default"
                  >
                    {tech}
                  </span>
                ))}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-1 inline-flex items-center gap-1.5 rounded-full border border-muted/12 bg-muted/5 px-3 py-0.5 text-xs font-medium text-muted/55 transition-all hover:border-muted/30 hover:text-white hover:bg-muted/10"
                  >
                    <Github className="h-3 w-3" />
                    <span>Source</span>
                    <ExternalLink className="h-2.5 w-2.5 opacity-50" />
                  </a>
                )}
              </div>
            </TimelineItem>
          ))}
        </div>
      </div>
    </section>
  );
}
