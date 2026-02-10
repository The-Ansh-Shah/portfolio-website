'use client';

import { motion } from 'framer-motion';
import { experience } from '@/lib/content';
import ExperienceCard from './ExperienceCard';
import { sectionReveal, viewportOnce } from '@/lib/animations';

export default function ExperienceSection() {
  return (
    <section id="experience" className="relative py-20 md:py-32">
      <div className="container mx-auto max-w-6xl px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={sectionReveal}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
            Experience
          </h2>
          <div className="mx-auto mb-4 h-1 w-20 rounded-full bg-muted"></div>
          <p className="text-muted">
            Research, teaching, and building systems
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {experience.map((exp, index) => (
            <ExperienceCard key={exp.id} experience={exp} index={index} />
          ))}
        </div>
      </div>

      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute left-1/4 top-1/3 h-96 w-96 rounded-full bg-secondary blur-3xl"></div>
      </div>
    </section>
  );
}
