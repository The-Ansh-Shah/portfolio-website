'use client';

import { m, useInView } from 'framer-motion';
import { useRef } from 'react';
import { beyondTheLab } from '@/lib/content';
import BentoCard from './BentoCard';
import SectionLabel from './SectionLabel';

export default function BeyondTheLab() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section className="py-section">
      <div className="mx-auto max-w-content px-6" ref={ref}>
        <m.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-8"
        >
          <SectionLabel>Community</SectionLabel>
          <h2 className="text-section text-text-primary mt-2">Beyond the Lab</h2>
        </m.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {beyondTheLab.map((item, index) => (
            <BentoCard key={item.title} delay={index * 0.08}>
              <p className="text-caption text-text-muted mb-2 uppercase tracking-widest font-medium">
                {item.label}
              </p>
              <h3 className="text-lg font-semibold text-text-primary mb-2">{item.title}</h3>
              <p className="text-body text-text-secondary">{item.description}</p>
            </BentoCard>
          ))}
        </div>
      </div>
    </section>
  );
}
