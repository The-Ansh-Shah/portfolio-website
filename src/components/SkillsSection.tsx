'use client';

import { m, useInView } from 'framer-motion';
import { useRef } from 'react';
import { techStack } from '@/lib/content';
import SectionLabel from './SectionLabel';

export default function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="skills" className="py-16 md:py-20">
      <div className="mx-auto max-w-content px-6" ref={ref}>
        <m.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-6"
        >
          <SectionLabel>Toolkit</SectionLabel>
          <h2 className="text-section text-text-primary mt-2">My Toolbox</h2>
        </m.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
          {techStack.map((category, catIndex) => (
            <m.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: catIndex * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
              className="rounded-card bg-bg-card border border-border p-6 hover:shadow-card-hover transition-shadow duration-300"
            >
              <h3 className="text-label uppercase text-text-muted tracking-[0.08em] mb-4">
                {category.title}
              </h3>
              <div className="space-y-3">
                {category.items.map((item) => (
                  <div key={item.name} className="flex items-center gap-3">
                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-btn-sm bg-bg-card-hover">
                      <span className="text-[10px] font-semibold font-mono text-text-secondary leading-none">{item.badge}</span>
                    </div>
                    <span className="text-[15px] font-semibold text-text-primary">{item.name}</span>
                  </div>
                ))}
              </div>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
}
