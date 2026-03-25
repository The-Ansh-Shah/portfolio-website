'use client';

import { m, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  personalInfo,
  verilogSnippet,
  hobbies,
} from '@/lib/content';
import CodeBlock from './CodeBlock';
import SectionLabel from './SectionLabel';

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section id="about" className="py-16 md:py-20">
      <div className="mx-auto max-w-content px-6" ref={ref}>
        <m.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-6"
        >
          <SectionLabel>About</SectionLabel>
          <h2 className="text-section text-text-primary mt-2">Who I Am</h2>
        </m.div>

        {/* Row 1: About (4) + Location (3) + Hobbies (5) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
          {/* About card */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            className="md:col-span-4 rounded-card bg-bg-card border border-border p-5 hover:shadow-card-hover transition-shadow duration-300"
          >
            <p className="text-[17px] font-medium text-text-primary leading-snug">
              Hardware engineer with a passion for digital IC design.
            </p>
          </m.div>

          {/* Location card */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.08, ease: [0.25, 0.1, 0.25, 1] }}
            className="md:col-span-3 rounded-card bg-bg-card border border-border p-5 hover:shadow-card-hover transition-shadow duration-300"
          >
            <SectionLabel>Based in</SectionLabel>
            <p className="mt-2 text-base font-semibold text-text-primary">{personalInfo.location}</p>
          </m.div>

          {/* Hobbies card — CSS-only cycling */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.16, ease: [0.25, 0.1, 0.25, 1] }}
            className="md:col-span-5 rounded-card bg-bg-card border border-border p-5 hover:shadow-card-hover transition-shadow duration-300 overflow-hidden"
          >
            <SectionLabel>I also like...</SectionLabel>
            <div className="mt-2 h-[30px] overflow-hidden">
              <div className="animate-hobby-scroll">
                {hobbies.map((hobby) => (
                  <div key={hobby.label} className="h-[30px] flex items-center">
                    <span className="text-[22px] font-semibold text-text-primary">
                      {hobby.emoji} {hobby.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </m.div>

          {/* Row 2: Focus (7) + Code block (5) */}
          {/* Focus card */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.24, ease: [0.25, 0.1, 0.25, 1] }}
            className="md:col-span-7 rounded-card bg-bg-card border border-border p-5 hover:shadow-card-hover transition-shadow duration-300"
          >
            <SectionLabel>Focus</SectionLabel>
            <p className="mt-2 text-body text-text-secondary">
              CPU microarchitecture, ASIC implementation, embedded security, and processor tracing research at the SLICE Lab.
            </p>
          </m.div>

          {/* Code block card */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.32, ease: [0.25, 0.1, 0.25, 1] }}
            className="md:col-span-5"
          >
            <CodeBlock code={verilogSnippet} />
          </m.div>
        </div>
      </div>
    </section>
  );
}
