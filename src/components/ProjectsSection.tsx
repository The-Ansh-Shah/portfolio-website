'use client';

import { projects } from '@/lib/content';
import ProjectCard from './ProjectCard';
import AnimatedSection from './AnimatedSection';
import { sectionReveal } from '@/lib/animations';

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 md:py-32 bg-bg-secondary">
      <div className="mx-auto max-w-content px-6">
        <AnimatedSection
          variants={sectionReveal}
          className="mb-16 text-center"
        >
          <h2 className="text-h2 text-text-primary">
            Featured Projects
          </h2>
        </AnimatedSection>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
