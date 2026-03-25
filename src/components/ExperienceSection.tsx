'use client';

import { m, useInView } from 'framer-motion';
import { useRef } from 'react';
import { experience } from '@/lib/content';

const ease = [0.25, 0.1, 0.25, 1] as const;

export default function ExperienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="experience" className="py-16 md:py-20">
      <div className="mx-auto max-w-content px-14" ref={ref}>
        <m.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease }}
          className="mb-4"
        >
          <h2 className="text-[32px] font-semibold text-[#1D1D1F]">
            Where I&apos;ve worked
          </h2>
        </m.div>

        <div>
          {experience.map((exp, index) => (
            <m.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.08, ease }}
              className={`py-4 ${index < experience.length - 1 ? 'border-b border-[#E8E8ED]' : ''}`}
            >
              <div className="flex items-start justify-between">
                <div>
                  {exp.incoming && (
                    <span
                      className="inline-block bg-[#1D1D1F] text-white font-semibold rounded tracking-[0.04em] mb-1"
                      style={{ fontSize: '9px', padding: '3px 8px' }}
                    >
                      INCOMING
                    </span>
                  )}
                  <h3 className="text-[16px] font-semibold text-[#1D1D1F]">
                    {exp.role}
                  </h3>
                  <p className="text-[14px] font-normal text-[#86868B] mt-0.5">
                    {exp.company} · {exp.institution}
                  </p>
                </div>
                <span className="text-[13px] font-normal text-[#86868B] whitespace-nowrap ml-4">
                  {exp.duration}
                </span>
              </div>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
}
