'use client';

import { motion } from 'framer-motion';
import { Cpu, Layers, Terminal, CheckCircle } from 'lucide-react';
import { resumeData } from '@/lib/resumeData';
import { sectionReveal, viewportOnce } from '@/lib/animations';

const iconMap: Record<string, React.ElementType> = {
  Cpu,
  Layers,
  Terminal,
  CheckCircle,
};

export default function ResumeSkills() {
  return (
    <section className="py-16 md:py-20">
      <div className="container mx-auto max-w-4xl px-6">
        {/* Section header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={sectionReveal}
          className="mb-10"
        >
          <h2 className="mb-2 text-2xl font-bold text-white md:text-3xl">Technical Skills</h2>
          <div className="h-0.5 w-16 rounded-full bg-muted/40" />
        </motion.div>

        {/* Skills panel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.5 }}
          className="rounded-2xl border border-accent/30 bg-accent/10 p-6 backdrop-blur-sm md:p-8"
        >
          <div className="divide-y divide-accent/20">
            {resumeData.skills.map((group, groupIndex) => {
              const Icon = iconMap[group.icon] || Cpu;
              return (
                <div
                  key={group.category}
                  className={`flex flex-col gap-3 py-5 sm:flex-row sm:items-start sm:gap-6 ${groupIndex === 0 ? 'pt-0' : ''} ${groupIndex === resumeData.skills.length - 1 ? 'pb-0' : ''}`}
                >
                  {/* Category label */}
                  <div className="flex items-center gap-2 sm:w-44 sm:flex-shrink-0">
                    <Icon className="h-4 w-4 text-muted/60" />
                    <span className="text-sm font-semibold text-secondary">{group.category}</span>
                  </div>

                  {/* Skill chips */}
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill, i) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={viewportOnce}
                        transition={{ duration: 0.3, delay: groupIndex * 0.05 + i * 0.03 }}
                        className="rounded-full bg-accent/20 px-3 py-1 text-xs font-medium text-muted/80 border border-accent/20 transition-colors hover:text-white hover:border-muted/30"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
