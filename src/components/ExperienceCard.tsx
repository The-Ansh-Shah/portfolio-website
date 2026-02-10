'use client';

import { m, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Experience } from '@/lib/content';
import { Briefcase } from 'lucide-react';
import { alternatingSlide } from '@/lib/animations';

interface ExperienceCardProps {
  experience: Experience;
  index: number;
}

export default function ExperienceCard({ experience, index }: ExperienceCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '0px 0px -100px 0px', amount: 0 });

  return (
    <m.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={alternatingSlide(index)}
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
          <m.li
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
            transition={{
              delay: i * 0.1,
              duration: 0.4,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className="flex items-start gap-2 text-sm text-muted"
          >
            <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-muted"></span>
            <span>{bullet}</span>
          </m.li>
        ))}
      </ul>

      {/* Hover glow effect */}
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent"></div>
      </div>
    </m.div>
  );
}
