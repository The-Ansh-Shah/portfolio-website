'use client';

import { motion } from 'framer-motion';
import { bio } from '@/lib/content';
import { sectionReveal, viewportOnce } from '@/lib/animations';

export default function AboutSection() {
  return (
    <section id="about" className="relative bg-primary-dark py-20 md:py-32">
      <div className="container mx-auto max-w-4xl px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={sectionReveal}
          className="text-center"
        >
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
            About Me
          </h2>
          <div className="mx-auto mb-12 h-1 w-20 rounded-full bg-muted"></div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
          className="space-y-6"
        >
          {bio.map((paragraph, index) => (
            <motion.p
              key={index}
              variants={sectionReveal}
              className="text-lg leading-relaxed text-muted"
            >
              {paragraph}
            </motion.p>
          ))}
        </motion.div>
      </div>

      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-30">
        <div className="absolute right-1/4 top-1/4 h-64 w-64 rounded-full bg-accent blur-3xl"></div>
      </div>
    </section>
  );
}
