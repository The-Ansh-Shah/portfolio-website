'use client';

import { m, useInView } from 'framer-motion';
import { useRef } from 'react';

const toolboxCategories = [
  {
    title: 'Architecture',
    items: [
      { badge: 'RV', name: 'RISC-V ISA' },
      { badge: 'μA', name: 'CPU microarchitecture' },
      { badge: 'P$', name: 'Pipelining & caching' },
    ],
  },
  {
    title: 'Hardware Design',
    items: [
      { badge: 'VL', name: 'Verilog' },
      { badge: 'CI', name: 'Cadence Innovus' },
      { badge: 'VCS', name: 'Synopsys VCS' },
    ],
  },
  {
    title: 'Low-Level',
    items: [
      { badge: 'C', name: 'C/C++' },
      { badge: 'Rs', name: 'Rust' },
      { badge: 'Lx', name: 'Linux/UNIX' },
    ],
  },
  {
    title: 'Verification',
    items: [
      { badge: 'SV', name: 'SystemVerilog' },
      { badge: 'FM', name: 'Formal methods' },
      { badge: 'Py', name: 'Python/NumPy' },
    ],
  },
];

const ease = [0.25, 0.1, 0.25, 1] as const;

export default function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="skills" className="py-16 md:py-20">
      <div className="mx-auto max-w-content px-14" ref={ref}>
        <m.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease }}
        >
          {/* Outer toolbox container */}
          <div className="rounded-[24px] bg-[#F5F5F7] border border-[#E8E8ED] overflow-hidden">
            {/* Header bar — like macOS title bar */}
            <div className="bg-[#EDEDF0] border-b border-[#E8E8ED]" style={{ padding: '20px 40px' }}>
              <h2 className="text-[32px] font-semibold text-[#1D1D1F]">
                My Toolbox
              </h2>
            </div>

            {/* Content area — 2-col grid */}
            <div
              className="grid grid-cols-1 md:grid-cols-2"
              style={{ padding: '32px 40px', gap: '28px 48px' }}
            >
              {toolboxCategories.map((category, catIndex) => (
                <m.div
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: catIndex * 0.08, ease }}
                >
                  <h3 className="text-[16px] font-semibold text-[#1D1D1F] mb-4">
                    {category.title}
                  </h3>
                  <div className="space-y-1.5">
                    {category.items.map((item) => (
                      <div
                        key={item.name}
                        className="flex items-center gap-[10px]"
                        style={{ padding: '6px 0' }}
                      >
                        <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-[#E8E8ED]">
                          <span className="text-[10px] font-semibold font-mono text-[#6E6E73] leading-none">
                            {item.badge}
                          </span>
                        </div>
                        <span className="text-[14px] font-normal text-[#1D1D1F]">
                          {item.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </m.div>
              ))}
            </div>
          </div>
        </m.div>
      </div>
    </section>
  );
}
