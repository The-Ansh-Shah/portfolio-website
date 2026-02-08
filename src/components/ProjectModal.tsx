'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, Github, ExternalLink, Star } from 'lucide-react';
import { Project } from '@/lib/content';
import { useEffect } from 'react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  // Lock body scroll when modal is open
  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [project]);

  // Close on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {project && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="absolute inset-0 bg-primary-dark/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="relative z-10 mx-4 w-full max-w-4xl max-h-[90vh] overflow-hidden rounded-2xl border border-accent/30 bg-accent/10 backdrop-blur-xl shadow-2xl"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute right-4 top-4 z-20 rounded-full bg-primary-dark/50 p-2 text-white/60 transition-all hover:bg-primary-dark/70 hover:text-white backdrop-blur-sm"
              aria-label="Close modal"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Scrollable Content */}
            <div className="overflow-y-auto max-h-[90vh] p-8 md:p-12">
              {/* Header */}
              <div className="mb-8">
                <div className="mb-4 flex items-start gap-4">
                  <div className="flex-1">
                    <div className="mb-2 flex items-center gap-3">
                      {project.featured && (
                        <div className="rounded-full bg-muted/20 p-1.5">
                          <Star className="h-4 w-4 fill-muted text-muted" />
                        </div>
                      )}
                      <span className="text-sm font-medium text-muted">{project.date}</span>
                    </div>
                    <h2 className="text-3xl font-bold text-white md:text-4xl">
                      {project.title}
                    </h2>
                  </div>
                </div>
                <p className="text-lg text-muted/90">
                  {project.description}
                </p>
              </div>

              {/* Technologies */}
              <div className="mb-8">
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-secondary">
                  Technologies
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-accent/30 bg-accent/20 px-4 py-1.5 text-sm font-medium text-white"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Image Carousel Placeholder */}
              <div className="mb-8">
                <div className="relative aspect-video overflow-hidden rounded-xl bg-gradient-to-br from-accent via-secondary to-muted">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="mb-3 text-6xl font-bold text-white/20">
                        {project.title.split(' ')[0]}
                      </div>
                      <div className="text-sm text-white/30">Image Carousel (Coming Soon)</div>
                    </div>
                  </div>
                  {/* Grid pattern */}
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                </div>
              </div>

              {/* Key Achievements */}
              <div className="mb-8">
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-secondary">
                  Key Achievements
                </h3>
                <ul className="space-y-3">
                  {project.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start gap-3 text-muted">
                      <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-muted"></span>
                      <span className="text-base">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Deep Dive Section Placeholder */}
              <div className="mb-8 rounded-xl border border-accent/20 bg-accent/5 p-6">
                <h3 className="mb-2 text-sm font-semibold uppercase tracking-wider text-secondary">
                  Technical Deep Dive
                </h3>
                <p className="text-sm text-muted/60 italic">
                  Detailed technical documentation and architecture diagrams will be added here.
                </p>
              </div>

              {/* Links */}
              <div className="flex flex-wrap gap-4">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg bg-muted px-6 py-3 text-sm font-medium text-primary-dark transition-all hover:bg-muted/90 hover:shadow-lg"
                  >
                    <Github className="h-4 w-4" />
                    View Code
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-muted/40 px-6 py-3 text-sm font-medium text-white transition-all hover:border-muted hover:bg-accent/20"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Live Demo
                  </a>
                )}
                {project.website && (
                  <a
                    href={project.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-muted/40 px-6 py-3 text-sm font-medium text-white transition-all hover:border-muted hover:bg-accent/20"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Visit Site
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
