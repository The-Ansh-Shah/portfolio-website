'use client';

import { motion } from 'framer-motion';
import { Experience } from '@/lib/content';
import { Briefcase } from 'lucide-react';

interface ExperienceCardProps {
  experience: Experience;
  index: number;
}

export default function ExperienceCard({ experience, index }: ExperienceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -4, scale: 1.01 }}
      className="group relative overflow-hidden rounded-2xl border border-accent/30 bg-accent/10 p-6 backdrop-blur-sm transition-all"
    >
      <div className="mb-4 flex items-start justify-between">
        <div className="flex items-start gap-4">
          <div className="rounded-lg bg-muted/20 p-2">
            <Briefcase className="h-5 w-5 text-muted" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white">
              {experience.role}
            </h3>
            <p className="text-sm font-medium text-muted">
              {experience.company}
            </p>
            <p className="text-xs text-secondary">
              {experience.institution}
            </p>
          </div>
        </div>
        <span className="rounded-full bg-secondary/20 px-3 py-1 text-xs font-medium text-muted">
          {experience.duration}
        </span>
      </div>

      <ul className="space-y-2">
        {experience.bullets.map((bullet, i) => (
          <motion.li
            key={i}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="flex items-start gap-2 text-sm text-muted"
          >
            <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-muted"></span>
            <span>{bullet}</span>
          </motion.li>
        ))}
      </ul>

      {/* Hover glow effect */}
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent"></div>
      </div>
    </motion.div>
  );
}
