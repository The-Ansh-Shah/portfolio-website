'use client';

import { m, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Experience } from '@/lib/content';
import { sectionReveal } from '@/lib/animations';

interface ExperienceCardProps {
  experience: Experience;
  index: number;
}

export default function ExperienceCard({ experience, index }: ExperienceCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '0px 0px -100px 0px', amount: 0.1 });

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
      className="rounded-card bg-bg-secondary p-8"
    >
      <div className="mb-4 flex items-start justify-between">
        <div>
          <h3 className="text-lg font-semibold text-text-primary">
            {experience.company}
          </h3>
          <p className="text-[15px] text-text-secondary">
            {experience.role}
          </p>
          <p className="text-caption text-text-tertiary">
            {experience.institution}
          </p>
        </div>
        <span className="text-caption text-text-tertiary whitespace-nowrap ml-4">
          {experience.duration}
        </span>
      </div>

      <ul className="space-y-2">
        {experience.bullets.map((bullet, i) => (
          <li
            key={i}
            className="flex items-start gap-2.5 text-body text-text-secondary"
          >
            <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-text-tertiary"></span>
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
    </m.div>
  );
}
