'use client';

import { m, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Experience } from '@/lib/content';

interface ExperienceCardProps {
  experience: Experience;
  index: number;
}

export default function ExperienceCard({ experience, index }: ExperienceCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <m.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
      whileHover={{ scale: 1.015, borderColor: 'var(--border-hover)' }}
      className="rounded-bento bg-bg-card border border-border p-8 md:p-10 shadow-card hover:shadow-card-hover transition-shadow duration-300"
    >
      <div className="flex items-start justify-between mb-1">
        <h3 className="text-xl font-semibold text-text-primary">{experience.role}</h3>
        <span className="text-caption text-text-muted whitespace-nowrap ml-4">{experience.duration}</span>
      </div>
      <p className="text-body text-accent mb-1">{experience.company}</p>
      <p className="text-caption text-text-muted mb-5">{experience.institution}</p>

      <ul className="space-y-2.5">
        {experience.bullets.map((bullet, i) => (
          <li key={i} className="flex items-start gap-2.5 text-body text-text-secondary">
            <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-text-muted" />
            {bullet}
          </li>
        ))}
      </ul>
    </m.div>
  );
}
