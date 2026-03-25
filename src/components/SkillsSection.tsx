'use client';

import { m, useInView } from 'framer-motion';
import { useRef } from 'react';
import { skills } from '@/lib/content';
import AnimatedSection from './AnimatedSection';
import { sectionReveal } from '@/lib/animations';

const categoryTitles: Record<string, string> = {
  architecture: 'Architecture',
  hardware_design: 'Hardware Design',
  low_level_systems: 'Low-Level Systems',
  verification: 'Verification',
};

export default function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '0px 0px -100px 0px', amount: 0.1 });

  return (
    <section id="skills" className="py-20 md:py-32 bg-bg-primary">
      <div className="mx-auto max-w-content px-6">
        <AnimatedSection variants={sectionReveal} className="mb-16 text-center">
          <h2 className="text-h2 text-text-primary">
            Technical Skills
          </h2>
        </AnimatedSection>

        <m.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.08 },
            },
          }}
          className="grid gap-12 md:grid-cols-2"
        >
          {Object.entries(skills).map(([category, skillList]) => (
            <m.div
              key={category}
              variants={sectionReveal}
            >
              <h3 className="text-lg font-semibold text-text-primary mb-2">
                {categoryTitles[category] || category}
              </h3>
              <p className="text-body text-text-secondary">
                {skillList.join(', ')}
              </p>
            </m.div>
          ))}
        </m.div>
      </div>
    </section>
  );
}
