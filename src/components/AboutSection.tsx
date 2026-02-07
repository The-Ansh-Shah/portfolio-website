'use client';

import { motion } from 'framer-motion';
import { bio } from '@/lib/content';
import { sectionReveal, viewportOnce } from '@/lib/animations';

export default function AboutSection() {
  return (
    <section id="about" className="relative bg-primary-dark py-20 md:py-32">
      <div className="container mx-auto max-w-6xl px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={sectionReveal}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
            About Me
          </h2>
          <div className="mx-auto mb-4 h-1 w-20 rounded-full bg-muted"></div>
        </motion.div>

        <div className="grid gap-12 md:grid-cols-[300px_1fr] lg:gap-16">
          {/* Profile Photo with Decorative Frame */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.6 }}
            className="flex justify-center md:justify-start"
          >
            <div className="relative">
              {/* Decorative border */}
              <div className="absolute -inset-4 rounded-2xl bg-gradient-to-br from-accent via-secondary to-muted opacity-75 blur-xl"></div>

              {/* Photo container */}
              <div className="relative h-80 w-72 overflow-hidden rounded-2xl border-2 border-muted/30 bg-gradient-to-br from-accent/40 via-secondary/30 to-muted/20">
                {/* Placeholder for photo */}
                <div className="flex h-full items-center justify-center">
                  <div className="text-center">
                    <div className="mb-2 text-6xl font-bold text-white/20">AS</div>
                    <div className="text-sm text-white/30">Profile Photo</div>
                  </div>
                </div>
                {/* Decorative grid overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
              </div>

              {/* Corner accent */}
              <div className="absolute -right-2 -top-2 h-8 w-8 rounded-full bg-muted shadow-lg"></div>
              <div className="absolute -bottom-2 -left-2 h-6 w-6 rounded-full bg-accent shadow-lg"></div>
            </div>
          </motion.div>

          {/* Bio Text */}
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
      </div>

      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-30">
        <div className="absolute right-1/4 top-1/4 h-64 w-64 rounded-full bg-accent blur-3xl"></div>
      </div>
    </section>
  );
}
