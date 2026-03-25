'use client';

import { m, useInView } from 'framer-motion';
import { useRef } from 'react';
import { techStack } from '@/lib/content';
import TechCard from './TechCard';
import SectionLabel from './SectionLabel';

export default function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="skills" className="py-section">
      <div className="mx-auto max-w-content px-6" ref={ref}>
        <m.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-8"
        >
          <SectionLabel>Toolkit</SectionLabel>
          <h2 className="text-section text-text-primary mt-2">Tech Stack</h2>
        </m.div>

        <div className="space-y-10">
          {techStack.map((category, catIndex) => (
            <div key={category.title}>
              <m.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: catIndex * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
                className="mb-4"
              >
                <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider">
                  {category.title}
                </h3>
              </m.div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {category.items.map((item, itemIndex) => (
                  <TechCard
                    key={item.name}
                    badge={item.badge}
                    name={item.name}
                    description={item.description}
                    delay={catIndex * 0.08 + itemIndex * 0.04}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
