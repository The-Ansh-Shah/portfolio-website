'use client';

import { m, useInView } from 'framer-motion';
import { useRef } from 'react';
import { skills } from '@/lib/content';
import { sectionReveal } from '@/lib/animations';
import AnimatedSection from './AnimatedSection';
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
    <section id="skills" className="relative py-20 md:py-32">
      <div className="container mx-auto max-w-6xl px-6">
        <AnimatedSection variants={sectionReveal} className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
            Technical Skills
          </h2>
          <div className="mx-auto mb-4 h-1 w-20 rounded-full bg-muted"></div>
          <p className="text-muted">
            Tools and technologies I work with
          </p>
        </AnimatedSection>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {Object.entries(skills).map(([category, skillList], catIndex) => {
            const Icon = categoryIcons[category as keyof typeof categoryIcons];
            return (
              <SkillCard key={category} category={category} skillList={skillList} catIndex={catIndex} Icon={Icon} />
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

function SkillCard({ category, skillList, catIndex, Icon }: { category: string; skillList: string[]; catIndex: number; Icon: any }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '0px 0px -100px 0px', amount: 0 });

  return (
    <m.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.8,
            delay: catIndex * 0.15,
            ease: [0.25, 0.46, 0.45, 0.94],
          },
        },
      }}
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
          <m.span
            key={skill}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{
              delay: catIndex * 0.15 + index * 0.05,
              duration: 0.4,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            whileHover={{ scale: 1.05 }}
            className="rounded-full bg-secondary/30 px-3 py-1 text-xs font-medium text-muted transition-colors hover:bg-secondary/50 hover:text-white"
          >
            {skill}
          </m.span>
        ))}
      </div>
    </m.div>
  );
}
