'use client';

import { m, useInView } from 'framer-motion';
import { useRef } from 'react';
import { experience } from '@/lib/content';
import ExperienceCard from './ExperienceCard';
import SectionLabel from './SectionLabel';

export default function ExperienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="experience" className="py-16 md:py-20">
      <div className="mx-auto max-w-content px-6" ref={ref}>
        <m.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-6"
        >
          <SectionLabel>Experience</SectionLabel>
          <h2 className="text-section text-text-primary mt-2">Where I&apos;ve Worked</h2>
        </m.div>

        <div>
          {experience.map((exp, index) => (
            <ExperienceCard
              key={exp.id}
              experience={exp}
              index={index}
              isLast={index === experience.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
