'use client';

import { m } from 'framer-motion';
import { Cpu, Layers, Terminal, CheckCircle, Zap, type LucideIcon } from 'lucide-react';
import { resumeData } from '@/lib/resumeData';
import { sectionReveal, viewportOnce } from '@/lib/animations';

const iconMap: Record<string, LucideIcon> = {
  Cpu,
  Layers,
  Terminal,
  CheckCircle,
};

export default function ResumeSkills() {
  return (
    <section className="relative py-20 md:py-24">
      <div className="container relative mx-auto max-w-4xl px-6">
        {/* Section header */}
        <m.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={sectionReveal}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-muted/10 border border-muted/15">
              <Zap className="h-4 w-4 text-muted/70" />
            </div>
            <h2 className="text-2xl font-bold text-white md:text-3xl tracking-tight">Technical Skills</h2>
          </div>
          <div className="h-px w-20 shimmer-line rounded-full" />
        </m.div>

        {/* Skills panel — glass card */}
        <m.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="glass-card rounded-2xl p-6 md:p-8"
        >
          <div className="space-y-0">
            {resumeData.skills.map((group, groupIndex) => {
              const Icon = iconMap[group.icon] || Cpu;
              return (
                <div
                  key={group.category}
                  className="group/skill-row"
                >
                  {/* Gradient divider between rows */}
                  {groupIndex > 0 && (
                    <div className="my-5 h-px bg-gradient-to-r from-transparent via-muted/12 to-transparent" />
                  )}

                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:gap-6">
                    {/* Category label */}
                    <div className="flex items-center gap-2.5 sm:w-44 sm:flex-shrink-0">
                      <div className="flex h-7 w-7 items-center justify-center rounded-md bg-muted/8 border border-muted/10">
                        <Icon className="h-3.5 w-3.5 text-muted/55" />
                      </div>
                      <span className="text-sm font-semibold text-secondary/85 tracking-tight">{group.category}</span>
                    </div>

                    {/* Skill chips */}
                    <div className="flex flex-wrap gap-2">
                      {group.skills.map((skill, i) => (
                        <m.span
                          key={skill}
                          initial={{ opacity: 0, scale: 0.85 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={viewportOnce}
                          transition={{ duration: 0.3, delay: groupIndex * 0.04 + i * 0.025 }}
                          className="rounded-full border border-muted/10 bg-muted/5 px-3 py-1 text-xs font-medium text-muted/70 transition-all hover:border-muted/25 hover:text-white hover:bg-muted/10 hover:shadow-[0_0_12px_rgba(146,144,195,0.08)] cursor-default"
                        >
                          {skill}
                        </m.span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </m.div>
      </div>
    </section>
  );
}
