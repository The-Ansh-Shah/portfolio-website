'use client';

import Link from 'next/link';
import { m } from 'framer-motion';

export default function HeroSection() {
  const handleScrollTo = (targetId: string) => {
    const element = document.getElementById(targetId);
    if (element) {
      const offsetTop = element.offsetTop - 48;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="hero"
      className="flex min-h-[85vh] items-center justify-center bg-bg-primary"
      style={{ paddingTop: '120px', paddingBottom: '120px' }}
    >
      <div className="mx-auto max-w-content px-6">
        <div className="flex flex-col items-center text-center">
          <m.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="text-hero text-text-primary mb-4"
          >
            Ansh Shah
          </m.h1>

          <m.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.08 }}
            className="text-subline text-text-secondary mb-12"
          >
            Hardware engineer. EECS @ UC Berkeley.
          </m.p>

          <m.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.16 }}
            className="flex items-center gap-6"
          >
            <Link
              href="/resume"
              className="inline-flex items-center rounded-button bg-accent px-7 py-3 text-[15px] font-medium text-white transition-colors duration-200 hover:bg-accent-hover"
            >
              View Resume
            </Link>
            <button
              onClick={() => handleScrollTo('contact')}
              className="text-[15px] font-medium text-accent transition-colors duration-200 hover:text-accent-hover"
            >
              Get in Touch
            </button>
          </m.div>
        </div>
      </div>
    </section>
  );
}
