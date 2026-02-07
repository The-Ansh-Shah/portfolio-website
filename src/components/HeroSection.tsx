'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative flex min-h-[calc(100vh-4rem)] items-center justify-center overflow-hidden bg-gradient-to-b from-secondary-lighter/30 to-white">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="mb-6 text-5xl font-bold tracking-tight text-primary-dark md:text-6xl lg:text-7xl">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-primary-dark to-secondary bg-clip-text text-transparent">
                Your Name
              </span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-8 max-w-2xl text-lg text-secondary md:text-xl"
          >
            A full-stack developer crafting elegant solutions to complex
            problems. Passionate about building beautiful, performant, and
            accessible web experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-4 sm:flex-row"
          >
            <Link
              href="/projects"
              className="group inline-flex items-center gap-2 rounded-lg bg-primary-dark px-8 py-3 text-sm font-medium text-white transition-all hover:bg-primary-dark/90 hover:shadow-lg"
            >
              View Projects
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg border border-primary-dark/20 px-8 py-3 text-sm font-medium text-primary-dark transition-all hover:border-primary-dark/40 hover:bg-secondary-lighter/50"
            >
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-20 top-20 h-64 w-64 rounded-full bg-secondary-light/10 blur-3xl" />
        <div className="absolute -left-20 bottom-20 h-64 w-64 rounded-full bg-primary-dark/5 blur-3xl" />
      </div>
    </section>
  );
}
