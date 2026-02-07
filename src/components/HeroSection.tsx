'use client';

import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { ArrowRight } from 'lucide-react';
import { typewriterTexts } from '@/lib/content';

export default function HeroSection() {
  const handleScrollTo = (targetId: string) => {
    const element = document.getElementById(targetId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
  };

  // Create sequence array for TypeAnimation
  const typewriterSequence = typewriterTexts.flatMap((text) => [text, 2000]);

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-b from-accent/20 to-primary-dark"
    >
      <div className="container mx-auto max-w-6xl px-6 py-20">
        <div className="flex flex-col items-center text-center">
          {/* Main heading - ALWAYS VISIBLE */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <h1 className="text-5xl font-bold tracking-tight text-white md:text-6xl lg:text-7xl">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-muted to-white bg-clip-text text-transparent">
                Ansh Shah
              </span>
            </h1>
          </motion.div>

          {/* Typewriter animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-6 h-12 flex items-center"
          >
            <TypeAnimation
              sequence={typewriterSequence}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-2xl font-semibold text-muted md:text-3xl"
              cursor={true}
            />
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12 max-w-2xl text-lg text-muted md:text-xl"
          >
            Building efficient systems at the hardware-software interface
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col gap-4 sm:flex-row"
          >
            <button
              onClick={() => handleScrollTo('projects')}
              className="group inline-flex items-center gap-2 rounded-lg bg-muted px-8 py-3 text-sm font-medium text-primary-dark transition-all hover:bg-muted/90 hover:shadow-lg"
            >
              View Projects
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
            <button
              onClick={() => handleScrollTo('contact')}
              className="inline-flex items-center gap-2 rounded-lg border border-muted/40 px-8 py-3 text-sm font-medium text-white transition-all hover:border-muted hover:bg-accent/20"
            >
              Get in Touch
            </button>
          </motion.div>
        </div>
      </div>

      {/* Decorative gradient blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -right-20 top-20 h-96 w-96 rounded-full bg-accent/30 blur-3xl"
          animate={{
            y: [0, 30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute -left-20 bottom-20 h-96 w-96 rounded-full bg-secondary/20 blur-3xl"
          animate={{
            y: [0, -30, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>
    </section>
  );
}
