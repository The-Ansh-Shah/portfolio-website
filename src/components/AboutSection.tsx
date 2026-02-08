'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
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
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
            About Me
          </h2>
          <div className="mx-auto mb-4 h-1 w-20 rounded-full bg-muted"></div>
        </motion.div>

        <div className="flex flex-col items-center gap-12">
          {/* Profile Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={viewportOnce}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Decorative glow */}
            <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-accent via-secondary to-muted opacity-60 blur-2xl"></div>

            {/* Photo container */}
            <div className="relative h-64 w-64 overflow-hidden rounded-full border-4 border-muted/30 bg-gradient-to-br from-accent/20 to-secondary/20">
              <Image
                src="/images/headshot.jpg"
                alt="Ansh Shah"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 256px, 256px"
              />
            </div>

            {/* Corner accents */}
            <div className="absolute -right-2 -top-2 h-6 w-6 rounded-full bg-muted shadow-lg"></div>
            <div className="absolute -bottom-2 -left-2 h-4 w-4 rounded-full bg-accent shadow-lg"></div>
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
            className="space-y-6 text-center"
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
