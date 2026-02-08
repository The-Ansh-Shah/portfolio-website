'use client';

import { motion } from 'framer-motion';
import { skills } from '@/lib/content';
import { sectionReveal, viewportOnce } from '@/lib/animations';
import { Cpu, Layers, Terminal, CheckCircle } from 'lucide-react';

const categoryIcons = {
  architecture: Cpu,
  hardware_design: Layers,
  low_level_systems: Terminal,
  verification: CheckCircle,
};

const categoryTitles = {
  architecture: 'Architecture',
  hardware_design: 'Hardware Design',
  low_level_systems: 'Low-Level Systems',
  verification: 'Verification',
};

export default function SkillsSection() {
  return (
    <section id="skills" className="relative bg-primary-dark py-20 md:py-32">
      <div className="container mx-auto max-w-6xl px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={sectionReveal}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
            Technical Skills
          </h2>
          <div className="mx-auto mb-4 h-1 w-20 rounded-full bg-muted"></div>
          <p className="text-muted">
            Tools and technologies I work with
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {Object.entries(skills).map(([category, skillList], catIndex) => {
            const Icon = categoryIcons[category as keyof typeof categoryIcons];
            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportOnce}
                transition={{ delay: catIndex * 0.1 }}
                className="rounded-2xl border border-accent/30 bg-accent/10 p-6 backdrop-blur-sm"
              >
                <div className="mb-4 flex items-center gap-3">
                  <div className="rounded-lg bg-muted/20 p-2">
                    <Icon className="h-5 w-5 text-muted" />
                  </div>
                  <h3 className="font-semibold text-white">
                    {categoryTitles[category as keyof typeof categoryTitles]}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skillList.map((skill, index) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: catIndex * 0.1 + index * 0.03 }}
                      whileHover={{ scale: 1.05 }}
                      className="rounded-full bg-secondary/30 px-3 py-1 text-xs font-medium text-muted transition-colors hover:bg-secondary/50 hover:text-white"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-muted blur-3xl"></div>
      </div>
    </section>
  );
}
