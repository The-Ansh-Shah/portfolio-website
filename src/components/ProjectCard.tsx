'use client';

import Image from 'next/image';
import { m, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { Project } from '@/lib/content';

interface ProjectCardProps {
  project: Project;
  index?: number;
  variant?: 'carousel' | 'full';
}

export default function ProjectCard({ project, index = 0, variant = 'carousel' }: ProjectCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  if (variant === 'full') {
    return (
      <m.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: index * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
        className="rounded-bento bg-bg-card border border-border overflow-hidden shadow-card hover:shadow-card-hover transition-shadow duration-300"
      >
        {project.thumbnail && (
          <div className="relative aspect-video">
            <Image
              src={project.thumbnail}
              alt={project.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        )}
        <div className="p-6 md:p-8">
          <div className="flex items-start justify-between mb-2">
            <h3 className="text-card-title text-text-primary">{project.title}</h3>
            <span className="text-caption text-text-muted whitespace-nowrap ml-4">{project.date}</span>
          </div>
          <p className="text-body text-text-secondary mb-4">{project.description}</p>
          <ul className="space-y-2 mb-4">
            {project.achievements.map((a, i) => (
              <li key={i} className="flex items-start gap-2.5 text-body text-text-secondary">
                <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-text-muted" />
                {a}
              </li>
            ))}
          </ul>
          <p className="text-caption text-text-muted mb-4">{project.technologies.join(' · ')}</p>
          <div className="flex items-center gap-4">
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-sm text-text-primary hover:text-text-secondary transition-colors duration-200 underline">
                Code →
              </a>
            )}
            {project.demo && (
              <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-sm text-text-primary hover:text-text-secondary transition-colors duration-200 underline">
                Demo →
              </a>
            )}
          </div>
        </div>
      </m.div>
    );
  }

  // Carousel variant
  return (
    <m.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
      whileHover={{ scale: 1.015 }}
      className="w-[380px] md:w-[420px] flex-shrink-0 snap-start rounded-bento bg-bg-card border border-border overflow-hidden shadow-card hover:shadow-card-hover transition-shadow duration-300"
    >
      {project.thumbnail && (
        <div className="relative aspect-[3/2]">
          <Image
            src={project.thumbnail}
            alt={project.title}
            fill
            className="object-cover"
            sizes="420px"
          />
        </div>
      )}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-text-primary mb-1">{project.title}</h3>
        <p className="text-caption text-text-muted mb-2">{project.date}</p>
        <p className="text-body text-text-secondary mb-4 line-clamp-2">{project.description}</p>
        <p className="text-caption text-text-muted mb-4">{project.technologies.join(' · ')}</p>
        {project.github ? (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm text-text-primary hover:text-text-secondary transition-colors duration-200 underline"
          >
            View Details <ArrowRight className="h-3.5 w-3.5" />
          </a>
        ) : (
          <span className="text-sm text-text-muted">Details coming soon</span>
        )}
      </div>
    </m.div>
  );
}
