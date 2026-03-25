'use client';

import { m, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Experience } from '@/lib/content';

interface ExperienceCardProps {
  experience: Experience;
  index: number;
  isLast: boolean;
}

export default function ExperienceCard({ experience, index, isLast }: ExperienceCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <m.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
      className={`py-5 ${!isLast ? 'border-b border-border' : ''}`}
    >
      <div className="flex items-start justify-between">
        <div>
          <div className="flex items-center gap-2">
            <h3 className="text-base font-semibold text-text-primary">{experience.role}</h3>
            {experience.incoming && (
              <span className="inline-block bg-text-primary text-white text-[10px] font-semibold px-2 py-0.5 rounded tracking-[0.04em]">
                INCOMING
              </span>
            )}
          </div>
          <p className="text-body text-text-secondary mt-0.5">
            {experience.company} · {experience.institution}
          </p>
        </div>
        <span className="text-caption text-text-muted whitespace-nowrap ml-4">{experience.duration}</span>
      </div>
    </m.div>
  );
}
