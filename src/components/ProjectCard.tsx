'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink, Github } from 'lucide-react';
import { ProjectMeta } from '@/lib/projects';

interface ProjectCardProps {
  project: ProjectMeta;
  index?: number;
}

export default function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-2xl border border-secondary-lighter/50 bg-white transition-all hover:shadow-xl"
    >
      <Link href={`/projects/${project.slug}`} className="block">
        {project.image && (
          <div className="relative aspect-video w-full overflow-hidden bg-secondary-lighter/30">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        )}

        <div className="p-6">
          <h3 className="mb-2 text-xl font-semibold text-primary-dark transition-colors group-hover:text-secondary">
            {project.title}
          </h3>
          <p className="mb-4 text-sm text-secondary line-clamp-2">
            {project.description}
          </p>

          <div className="mb-4 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-secondary-lighter px-3 py-1 text-xs font-medium text-secondary"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-4">
            {project.links?.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center gap-1 text-sm text-secondary transition-colors hover:text-primary-dark"
              >
                <Github className="h-4 w-4" />
                Code
              </a>
            )}
            {project.links?.demo && (
              <a
                href={project.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center gap-1 text-sm text-secondary transition-colors hover:text-primary-dark"
              >
                <ExternalLink className="h-4 w-4" />
                Demo
              </a>
            )}
            <span className="ml-auto inline-flex items-center gap-1 text-sm font-medium text-primary-dark">
              Learn more
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
