'use client';

import Image from 'next/image';
import { m, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github, Star, ChevronRight } from 'lucide-react';
import { Project } from '@/lib/content';
import { cardHover } from '@/lib/animations';

interface ProjectCardProps {
  project: Project;
  index?: number;
  onClick?: () => void;
}

export default function ProjectCard({ project, index = 0, onClick }: ProjectCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '0px 0px -100px 0px', amount: 0 });

  return (
    <m.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.8,
            delay: index * 0.15,
            ease: [0.25, 0.46, 0.45, 0.94],
          },
        },
      }}
      {...cardHover}
      onClick={onClick}
      className="group relative overflow-hidden rounded-2xl border border-accent/30 bg-accent/10 backdrop-blur-sm transition-all cursor-pointer"
    >
      {/* Project Thumbnail */}
      <div className="relative h-48 overflow-hidden bg-gradient-to-br from-accent via-secondary to-muted">
        {project.thumbnail ? (
          <Image
            src={project.thumbnail}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="mb-2 text-4xl font-bold text-white/30">{project.title.split(' ')[0]}</div>
              <div className="text-sm text-white/20">Project Image</div>
            </div>
          </div>
        )}
        {/* Decorative grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear_gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px]"></div>

        {/* Date Badge - Top Right */}
        <div className="absolute right-3 top-3 rounded-full bg-primary-dark/80 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm border border-muted/30">
          {project.date}
        </div>

        {/* Featured Star - Top Left */}
        {project.featured && (
          <div className="absolute left-3 top-3 rounded-full bg-muted/20 p-2 backdrop-blur-sm border border-muted/30">
            <Star className="h-4 w-4 fill-muted text-muted" />
          </div>
        )}
      </div>

      <div className="p-6">
        <h3 className="mb-2 text-xl font-semibold text-white transition-colors group-hover:text-muted">
          {project.title}
        </h3>
        <p className="mb-4 text-sm text-muted">
          {project.description}
        </p>

        <div className="mb-4 flex flex-wrap gap-2">
          {project.technologies.map((tech, i) => (
            <m.span
              key={tech}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{
                delay: index * 0.15 + i * 0.05,
                duration: 0.4,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="rounded-full bg-secondary/30 px-3 py-1 text-xs font-medium text-muted"
            >
              {tech}
            </m.span>
          ))}
        </div>

        <ul className="mb-4 space-y-2">
          {project.achievements.slice(0, 3).map((achievement, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-muted">
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-muted"></span>
              <span>{achievement}</span>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm text-muted transition-colors hover:text-white"
              onClick={(e) => e.stopPropagation()}
            >
              <Github className="h-4 w-4" />
              Code
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm text-muted transition-colors hover:text-white"
              onClick={(e) => e.stopPropagation()}
            >
              <ExternalLink className="h-4 w-4" />
              Demo
            </a>
          )}
          {project.website && (
            <a
              href={project.website}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm text-muted transition-colors hover:text-white"
              onClick={(e) => e.stopPropagation()}
            >
              <ExternalLink className="h-4 w-4" />
              Site
            </a>
          )}
        </div>

        {/* Click to see more hint */}
        <div className="mt-4 flex items-center gap-1 text-xs text-muted/60 transition-colors group-hover:text-muted">
          <span>Click to see more</span>
          <ChevronRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
        </div>
      </div>

      {/* Hover glow effect */}
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent"></div>
      </div>
    </m.div>
  );
}
