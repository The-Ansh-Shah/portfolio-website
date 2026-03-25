'use client';

import { m, useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import { projects } from '@/lib/content';
import ProjectCard from './ProjectCard';
import ProjectCarousel from './ProjectCarousel';
import SectionLabel from './SectionLabel';

export default function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="projects" className="py-section">
      <div className="mx-auto max-w-content px-6" ref={ref}>
        <m.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-8 flex items-end justify-between"
        >
          <div>
            <SectionLabel>Work</SectionLabel>
            <h2 className="text-section text-text-primary mt-2">Projects</h2>
          </div>
          <Link
            href="/projects"
            className="text-sm text-text-primary hover:text-text-secondary transition-colors duration-200"
          >
            View All →
          </Link>
        </m.div>

        <ProjectCarousel>
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </ProjectCarousel>
      </div>
    </section>
  );
}
