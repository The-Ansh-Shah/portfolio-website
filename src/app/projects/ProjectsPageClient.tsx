'use client';

import { m } from 'framer-motion';
import { projects } from '@/lib/content';
import ProjectCard from '@/components/ProjectCard';
import SectionLabel from '@/components/SectionLabel';

export default function ProjectsPageClient() {
  return (
    <div className="bg-bg-primary min-h-screen py-20 md:py-32">
      <div className="mx-auto max-w-content px-6">
        <m.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-12"
        >
          <SectionLabel>Work</SectionLabel>
          <h1 className="text-hero text-text-primary mt-2">All Projects</h1>
        </m.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              variant="full"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
