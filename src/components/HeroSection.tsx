'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { typewriterTexts } from '@/lib/content';

export default function HeroSection() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentFullText = typewriterTexts[currentTextIndex];
    const typingSpeed = isDeleting ? 30 : 50;
    const pauseTime = isDeleting ? 500 : 2000;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (displayText.length < currentFullText.length) {
          setDisplayText(currentFullText.slice(0, displayText.length + 1));
        } else {
          // Pause before deleting
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        // Deleting
        if (displayText.length > 0) {
          setDisplayText(currentFullText.slice(0, displayText.length - 1));
        } else {
          // Move to next text
          setIsDeleting(false);
          setCurrentTextIndex((prev) => (prev + 1) % typewriterTexts.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentTextIndex]);

  // Function to render text with blue @ Intel
  const renderTypedText = (text: string) => {
    const intelMatch = text.match(/(.*)(@ Intel)(.*)/);
    if (intelMatch) {
      return (
        <>
          {intelMatch[1]}
          <span className="text-[#0071c5]">{intelMatch[2]}</span>
          {intelMatch[3]}
        </>
      );
    }
    return text;
  };
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

  return (
    <section
      id="hero"
      className="relative flex min-h-[85vh] items-center justify-center overflow-hidden bg-gradient-to-b from-accent/20 to-primary-dark circuit-grid"
    >
      <div className="container mx-auto max-w-6xl px-6 py-12">
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
              <span className="animate-gradient bg-gradient-to-r from-white via-muted to-secondary bg-[length:200%_auto] bg-clip-text text-transparent will-change-[background-position]">
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
            <span className="text-2xl font-semibold text-muted md:text-3xl">
              {renderTypedText(displayText)}
              <span className="animate-pulse ml-0.5">|</span>
            </span>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12 max-w-2xl text-base text-muted/90 md:text-lg"
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

        {/* Circuit-like decorative lines */}
        <div className="absolute left-0 top-1/4 h-px w-32 bg-gradient-to-r from-transparent via-muted/20 to-transparent"></div>
        <div className="absolute right-0 top-1/3 h-px w-40 bg-gradient-to-l from-transparent via-muted/20 to-transparent"></div>
        <div className="absolute left-1/4 bottom-1/4 h-px w-24 bg-gradient-to-r from-transparent via-muted/20 to-transparent"></div>

        {/* Animated signal lines */}
        <div className="absolute left-10 top-1/2 h-px w-20 overflow-hidden">
          <div className="signal-line h-full w-full bg-gradient-to-r from-transparent via-muted/40 to-transparent"></div>
        </div>
        <div className="absolute right-20 top-2/3 h-px w-16 overflow-hidden">
          <div className="signal-line h-full w-full bg-gradient-to-r from-transparent via-muted/40 to-transparent" style={{ animationDelay: '2s' }}></div>
        </div>
      </div>
    </section>
  );
}
