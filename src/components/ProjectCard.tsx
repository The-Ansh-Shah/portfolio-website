'use client';

import Image from 'next/image';
import { m, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Project } from '@/lib/content';

interface ProjectCardProps {
  project: Project;
  index?: number;
}

export default function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '0px 0px -100px 0px', amount: 0.1 });

  const isHero = project.featured && index === 0;

  return (
    <m.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: { opacity: 0, y: 12 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.5,
            delay: index * 0.1,
            ease: 'easeOut',
          },
        },
      }}
      whileHover={{ scale: 1.01 }}
      transition={{ duration: 0.3 }}
      className={`group overflow-hidden rounded-card bg-white shadow-sm hover:shadow-md transition-shadow duration-300 ${isHero ? 'md:col-span-2' : ''}`}
    >
      {/* Project Image */}
      {project.thumbnail && (
        <div className={`relative w-full overflow-hidden ${isHero ? 'aspect-[21/9]' : 'aspect-video'}`}>
          <Image
            src={project.thumbnail}
            alt={project.title}
            fill
            className="object-cover"
            sizes={isHero ? '(max-width: 768px) 100vw, 980px' : '(max-width: 768px) 100vw, 50vw'}
          />
        </div>
      )}

      <div className="p-6 md:p-8">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-h3 text-text-primary">
            {project.title}
          </h3>
          <span className="text-caption text-text-tertiary whitespace-nowrap ml-4">
            {project.date}
          </span>
        </div>

        <p className="text-body text-text-secondary mb-4">
          {project.description}
        </p>

        {/* Tech tags as dot-separated text */}
        <p className="text-caption text-text-tertiary mb-4">
          {project.technologies.join(' · ')}
        </p>

        <ul className="space-y-2 mb-5">
          {project.achievements.map((achievement, i) => (
            <li key={i} className="flex items-start gap-2.5 text-body text-text-secondary">
              <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-text-tertiary"></span>
              <span>{achievement}</span>
            </li>
          ))}
        </ul>

        {/* Links */}
        <div className="flex items-center gap-4">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[15px] font-medium text-accent transition-colors duration-200 hover:text-accent-hover"
            >
              Code
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[15px] font-medium text-accent transition-colors duration-200 hover:text-accent-hover"
            >
              Demo
            </a>
          )}
          {project.website && (
            <a
              href={project.website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[15px] font-medium text-accent transition-colors duration-200 hover:text-accent-hover"
            >
              Site
            </a>
          )}
        </div>
      </div>
    </m.div>
  );
}
