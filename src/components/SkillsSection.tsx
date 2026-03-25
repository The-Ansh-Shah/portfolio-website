'use client';

import { m, useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

interface ToolItem {
  badge: string;
  name: string;
  desc: string;
  icon?: string;
}

const toolboxCategories: { title: string; items: ToolItem[] }[] = [
  {
    title: 'Architecture',
    items: [
      { badge: 'RV', name: 'RISC-V ISA', desc: 'Open standard instruction set', icon: '/images/icons/RISC-V_icon.svg.png' },
      { badge: 'μA', name: 'CPU Microarchitecture', desc: 'Pipelined, Microcoded, OoO, and Superscalar Designs' },
      { badge: 'P$', name: 'Caching and Speculation', desc: 'Cache Designs, Coherence, and Branch Prediction' },
    ],
  },
  {
    title: 'Hardware Design',
    items: [
      { badge: 'VL', name: 'Verilog', desc: 'RTL design and simulation', icon: '/images/icons/verilog.svg' },
      { badge: 'CI', name: 'Cadence Innovus', desc: 'Physical design and P&R', icon:'/images/icons/cadence-logo_brandlogos.net_b0er9-512x512.png' },
      { badge: 'VCS', name: 'Synopsys VCS', desc: 'Simulation and verification', icon:'/images/icons/synopsys-logo-svg-vector.svg' },
    ],
  },
  {
    title: 'Low-Level Systems',
    items: [
      { badge: 'C', name: 'C (Programming Language)', desc: 'Systems programming', icon: '/images/icons/C_Logo.png' },
      { badge: 'Rs', name: 'Rust', desc: 'Memory-safe systems code', icon: '/images/icons/rust-1.png' },
      { badge: 'Lx', name: 'Linux/UNIX', desc: 'Kernel and shell environments', icon: '/images/icons/249-2494952_penguin-clipart-profile-linux-logo-vector.png' },
    ],
  },
  {
    title: 'Verification',
    items: [
      { badge: 'Py', name: 'Python', desc: 'Analysis and automation', icon: '/images/icons/Python-logo-notext.svg.png' },
      { badge: 'SV', name: 'SystemVerilog', desc: 'Assertions and testbenches', icon: '/images/icons/systemverilog.svg' },
      { badge: 'FM', name: 'Formal Methods', desc: 'CBMC bounded model checking' },
    ],
  },
];

const ease = [0.25, 0.1, 0.25, 1] as const;

export default function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="skills" className="py-12 md:py-20">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10" ref={ref}>
        <m.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease }}
        >
          {/* Section label + heading */}
          <span className="text-[13px] font-medium text-[#86868B] uppercase tracking-widest">
            Tech Stack
          </span>
          <h2 className="mt-2 text-[clamp(36px,4.5vw,52px)] font-semibold text-[#1D1D1F] tracking-tight leading-[1.1]">
            My Toolbox
          </h2>

          {/* 2-col grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12 mt-12">
            {toolboxCategories.map((category, catIndex) => (
              <m.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + catIndex * 0.08, ease }}
              >
                <h3 className="text-[16px] font-normal text-[#86868B] pb-3 border-b border-[#E8E8ED]">
                  {category.title}
                </h3>

                <div className="mt-6 space-y-5">
                  {category.items.map((item) => (
                    <div key={item.name} className="flex items-center gap-4">
                      {/* Icon badge — image if available, text fallback */}
                      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-[14px] bg-[#F5F5F7] border border-[#E8E8ED] overflow-hidden">
                        {item.icon ? (
                          <Image
                            src={item.icon}
                            alt={item.name}
                            width={40}
                            height={40}
                            className="object-contain"
                          />
                        ) : (
                          <span className="text-[13px] font-bold font-mono text-[#6E6E73] leading-none">
                            {item.badge}
                          </span>
                        )}
                      </div>
                      <div className="min-w-0">
                        <p className="text-[16px] font-semibold text-[#1D1D1F]">
                          {item.name}
                        </p>
                        <p className="text-[14px] text-[#86868B] mt-0.5">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </m.div>
            ))}
          </div>
        </m.div>
      </div>
    </section>
  );
}
