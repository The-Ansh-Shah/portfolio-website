'use client';

import { m, useInView } from 'framer-motion';
import { useRef } from 'react';
import { personalInfo, hobbies, verilogSnippet } from '@/lib/content';
import CodeBlock from './CodeBlock';

const ease = [0.25, 0.1, 0.25, 1] as const;

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section id="about" className="py-16 md:py-20">
      <div className="mx-auto max-w-content px-14" ref={ref}>
        {/* 12-col bento grid, gap 16px */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">

          {/* Card A — About | span 5 | LEFT-ALIGNED */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease }}
            className="md:col-span-5 rounded-[20px] bg-[#F5F5F7] border border-[#E8E8ED] hover:border-[#D2D2D7] hover:shadow-[0_4px_20px_rgba(0,0,0,0.05)] transition-all duration-300"
            style={{ padding: '36px 32px' }}
          >
            <span className="text-[11px] font-medium uppercase tracking-[0.08em] text-[#86868B]">
              About
            </span>
            <p className="mt-3 text-[26px] font-medium text-[#1D1D1F] leading-[1.3] text-left">
              Hardware engineer with a passion for digital IC design.
            </p>
          </m.div>

          {/* Card B — Location | span 3 | CENTER-ALIGNED */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.08, ease }}
            className="md:col-span-3 rounded-[20px] bg-[#F5F5F7] border border-[#E8E8ED] hover:border-[#D2D2D7] hover:shadow-[0_4px_20px_rgba(0,0,0,0.05)] transition-all duration-300 flex flex-col justify-center items-center"
            style={{ padding: '32px 24px' }}
          >
            <span className="text-[11px] font-medium uppercase tracking-[0.08em] text-[#86868B]">
              Based in
            </span>
            <p className="mt-2 text-[22px] font-semibold text-[#1D1D1F] text-center">
              {personalInfo.location}
            </p>
          </m.div>

          {/* Card C — Hobbies | span 4 | CENTER-ALIGNED */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.16, ease }}
            className="md:col-span-4 rounded-[20px] bg-[#F5F5F7] border border-[#E8E8ED] hover:border-[#D2D2D7] hover:shadow-[0_4px_20px_rgba(0,0,0,0.05)] transition-all duration-300 overflow-hidden text-center"
            style={{ padding: '32px 24px' }}
          >
            <span className="text-[11px] font-medium uppercase tracking-[0.08em] text-[#86868B]">
              I also like...
            </span>
            <div className="mt-2 h-[36px] overflow-hidden">
              <div className="animate-hobby-scroll">
                {hobbies.map((hobby) => (
                  <div key={hobby.label} className="h-[36px] flex items-center justify-center">
                    <span className="text-[24px] font-semibold text-[#1D1D1F]">
                      {hobby.emoji} {hobby.label}
                    </span>
                  </div>
                ))}
                {/* Duplicate first item for seamless loop */}
                <div className="h-[36px] flex items-center justify-center">
                  <span className="text-[24px] font-semibold text-[#1D1D1F]">
                    {hobbies[0].emoji} {hobbies[0].label}
                  </span>
                </div>
              </div>
            </div>
          </m.div>

          {/* Card D — Focus | span 7 | CENTER-ALIGNED */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.24, ease }}
            className="md:col-span-7 rounded-[20px] bg-[#F5F5F7] border border-[#E8E8ED] hover:border-[#D2D2D7] hover:shadow-[0_4px_20px_rgba(0,0,0,0.05)] transition-all duration-300 flex flex-col justify-center items-center text-center"
            style={{ padding: '32px' }}
          >
            <span className="text-[11px] font-medium uppercase tracking-[0.08em] text-[#86868B]">
              Focus
            </span>
            <p className="mt-2 text-[20px] font-medium text-[#86868B]">
              CPU design · Embedded security · Processor tracing
            </p>
          </m.div>

          {/* Card E — Code block | span 5 | LEFT-ALIGNED */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.32, ease }}
            className="md:col-span-5"
          >
            <CodeBlock code={verilogSnippet} />
          </m.div>
        </div>
      </div>
    </section>
  );
}
