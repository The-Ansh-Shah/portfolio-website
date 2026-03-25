'use client';

import { m, useInView } from 'framer-motion';
import { useRef } from 'react';
import ProjectCarousel from './ProjectCarousel';

export default function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="projects" className="py-16 md:py-20">
      <div ref={ref}>
        <m.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="px-14 mb-8"
        >
          <h2 className="text-[34px] font-semibold tracking-[-0.02em] text-[#1D1D1F]">
            Projects
          </h2>
          <p className="text-[15px] text-[#86868B] mt-1">
            Hardware design, embedded security, and systems programming
          </p>
        </m.div>

        <ProjectCarousel />
      </div>
    </section>
  );
}
