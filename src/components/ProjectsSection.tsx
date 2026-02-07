'use client';

import { motion } from 'framer-motion';
import { projects } from '@/lib/content';
import ProjectCard from './ProjectCard';
import { sectionReveal, viewportOnce } from '@/lib/animations';

export default function ProjectsSection() {
  return (
    <section id="projects" className="relative bg-accent/5 py-20 md:py-32">
      <div className="container mx-auto max-w-6xl px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={sectionReveal}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
            Featured Projects
          </h2>
          <div className="mx-auto mb-4 h-1 w-20 rounded-full bg-muted"></div>
          <p className="text-muted">
            Hardware design, embedded security, and systems programming
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>

      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute right-1/3 bottom-1/4 h-96 w-96 rounded-full bg-accent blur-3xl"></div>
      </div>
    </section>
  );
}
