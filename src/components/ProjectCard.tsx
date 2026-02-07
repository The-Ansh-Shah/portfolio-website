'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { Project } from '@/lib/content';
import { cardHover } from '@/lib/animations';

interface ProjectCardProps {
  project: Project;
  index?: number;
}

export default function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      {...cardHover}
      className="group relative overflow-hidden rounded-2xl border border-accent/30 bg-accent/10 backdrop-blur-sm transition-all"
    >
      <div className="p-6">
        <h3 className="mb-2 text-xl font-semibold text-white transition-colors group-hover:text-muted">
          {project.title}
        </h3>
        <p className="mb-4 text-sm text-muted">
          {project.description}
        </p>

        <div className="mb-4 flex flex-wrap gap-2">
          {project.technologies.map((tech, i) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + i * 0.05 }}
              className="rounded-full bg-secondary/30 px-3 py-1 text-xs font-medium text-muted"
            >
              {tech}
            </motion.span>
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
            >
              <ExternalLink className="h-4 w-4" />
              Site
            </a>
          )}
          <span className="ml-auto text-xs text-secondary">{project.date}</span>
        </div>
      </div>

      {/* Hover glow effect */}
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent"></div>
      </div>
    </motion.div>
  );
}
