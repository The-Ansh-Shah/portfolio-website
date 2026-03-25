'use client';

import { m, useInView } from 'framer-motion';
import { useRef } from 'react';
import { hobbies, verilogSnippet, personalInfo } from '@/lib/content';
import CodeBlock from './CodeBlock';

const ease = [0.25, 0.1, 0.25, 1] as const;

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="about" className="py-12 md:py-16">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10" ref={ref}>
        {/* ROW 1: About (tall) + right column (Location stacked over Hobbies) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">

          {/* Card A — About | span 7 | TALL card like Kellie's tagline card */}
          <m.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease }}
            className="md:col-span-7 rounded-[24px] bg-[#F5F5F7] border border-[#E8E8ED] p-10 md:p-12 min-h-[340px] flex flex-col justify-between"
          >
            <div>
              <span className="text-[13px] font-medium text-[#86868B] tracking-wide">
                About
              </span>
              <h2 className="mt-4 text-[clamp(32px,4vw,44px)] font-semibold text-[#1D1D1F] leading-[1.15] tracking-[-0.02em]">
                Hardware engineer{' '}
                <span className="text-[#86868B]">
                  with a passion for digital IC design.
                </span>
              </h2>
            </div>
            <p className="mt-8 text-[17px] text-[#86868B] leading-relaxed max-w-[480px]">
              CPU design · Embedded security · Processor tracing
            </p>
          </m.div>

          {/* Right column — Location + Hobbies stacked */}
          <div className="md:col-span-5 flex flex-col gap-4">

            {/* Card B — Location | shorter card */}
            <m.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.08, ease }}
              className="rounded-[24px] bg-[#F5F5F7] border border-[#E8E8ED] p-8 md:p-10 flex flex-col justify-center items-center text-center min-h-[150px]"
            >
              <span className="text-[13px] font-medium text-[#86868B] tracking-wide">
                Based In
              </span>
              <p className="mt-3 text-[28px] font-semibold text-[#1D1D1F] tracking-tight">
                {personalInfo.location}
              </p>
            </m.div>

            {/* Card C — Hobbies | taller card */}
            <m.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.16, ease }}
              className="rounded-[24px] bg-[#F5F5F7] border border-[#E8E8ED] p-8 md:p-10 overflow-hidden text-center flex-1 flex flex-col justify-center min-h-[170px]"
            >
              <span className="text-[13px] font-medium text-[#86868B] tracking-wide">
                I also like...
              </span>
              <div className="mt-3 h-[44px] overflow-hidden">
                <div className="animate-hobby-scroll">
                  {hobbies.map((hobby) => (
                    <div key={hobby.label} className="h-[44px] flex items-center justify-center">
                      <span className="text-[32px] font-semibold text-[#1D1D1F]">
                        {hobby.emoji} {hobby.label}
                      </span>
                    </div>
                  ))}
                  <div className="h-[44px] flex items-center justify-center">
                    <span className="text-[32px] font-semibold text-[#1D1D1F]">
                      {hobbies[0].emoji} {hobbies[0].label}
                    </span>
                  </div>
                </div>
              </div>
            </m.div>
          </div>

          {/* ROW 2: What Inspires Me (tall) + Code Block */}

          {/* Card D — What inspires me | span 5 | TALL with big text like Kellie */}
          <m.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.24, ease }}
            className="md:col-span-5 rounded-[24px] bg-[#F5F5F7] border border-[#E8E8ED] p-10 md:p-12 min-h-[300px] flex flex-col justify-between"
          >
            <div>
              <span className="text-[13px] font-medium text-[#86868B] uppercase tracking-widest">
                What inspires me?
              </span>
              <h3 className="mt-4 text-[clamp(28px,3.5vw,38px)] font-semibold text-[#1D1D1F] leading-[1.15] tracking-tight">
                Building efficient, fast, and scalable silicon solutions.
              </h3>
            </div>
            {/* Decorative bottom — subtle circuit-like dots */}
            <div className="flex items-center gap-2 mt-8">
              <div className="h-2 w-2 rounded-full bg-[#D2D2D7]" />
              <div className="h-2 w-2 rounded-full bg-[#D2D2D7]" />
              <div className="h-2 w-2 rounded-full bg-[#D2D2D7]" />
              <div className="h-3 w-3 rounded-full bg-[#86868B]" />
              <div className="h-2 w-2 rounded-full bg-[#D2D2D7]" />
              <div className="h-2 w-2 rounded-full bg-[#D2D2D7]" />
              <div className="h-2 w-2 rounded-full bg-[#D2D2D7]" />
            </div>
          </m.div>

          {/* Card E — Code block | span 7 */}
          <m.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.32, ease }}
            className="md:col-span-7"
          >
            <CodeBlock code={verilogSnippet} />
          </m.div>
        </div>
      </div>
    </section>
  );
}