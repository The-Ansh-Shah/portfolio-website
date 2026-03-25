'use client';

import { m, useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import ProjectCarousel from './ProjectCarousel';

export default function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="projects" className="py-12 md:py-20">
      <div ref={ref}>
        <m.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="px-6 md:px-10 mb-10 max-w-[1200px] mx-auto flex items-end justify-between"
        >
          <div>
            <span className="text-[13px] font-medium text-[#86868B] uppercase tracking-widest">
              Experience
            </span>
            <h2 className="mt-2 text-[clamp(36px,4.5vw,52px)] font-semibold tracking-tight text-[#1D1D1F] leading-[1.1]">
              Projects
            </h2>
          </div>
          <Link
            href="/projects"
            className="hidden md:inline-flex items-center gap-2 rounded-full bg-[#1D1D1F] text-white text-[14px] font-medium px-6 py-3 hover:bg-[#424245] transition-colors duration-200"
          >
            View All
          </Link>
        </m.div>

        <ProjectCarousel />
      </div>
    </section>
  );
}