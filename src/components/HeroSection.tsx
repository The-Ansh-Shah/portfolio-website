'use client';

import Image from 'next/image';
import Link from 'next/link';
import { m } from 'framer-motion';
import { personalInfo } from '@/lib/content';

const ease = [0.25, 0.1, 0.25, 1] as const;

export default function HeroSection() {
  return (
    <section id="hero" className="relative flex items-center justify-center min-h-0 md:min-h-[85vh] pt-12 md:pt-[5vh] pb-8 md:pb-0">
      <div className="mx-auto max-w-content-wide px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-8 lg:gap-16 items-center">
          {/* Left — text content */}
          <div>
            {/* Mobile headshot — small circle, hidden on desktop */}
            <m.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease }}
              className="lg:hidden mb-6"
            >
              <div className="relative w-20 h-20 rounded-full overflow-hidden shadow-card-hover">
                <Image
                  src="/images/headshot.jpg"
                  alt="Ansh Shah"
                  fill
                  className="object-cover"
                  priority
                  sizes="80px"
                />
              </div>
            </m.div>

            <m.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease }}
              className="text-[clamp(36px,6vw,72px)] font-bold leading-[1.08] tracking-[-0.04em] text-text-primary dark:text-[#F5F5F7] mb-5"
            >
              Hi, I&apos;m Ansh{' '}
              <span className="inline-block animate-[wave_2s_ease-in-out_infinite] origin-[70%_70%]">👋</span>
              <br />
              I design & build
              <br />
              hardware systems.
            </m.h1>

            {/* Credential line */}
            <m.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.12, ease }}
              className="flex flex-wrap items-center gap-x-3 gap-y-2 mb-6 text-[14px] md:text-[18px] text-text-secondary dark:text-[#A1A1A6]"
            >
              <span className="inline-flex items-center gap-1.5">
                <Image src="/images/icons/Seal_of_University_of_California,_Berkeley.svg" alt="UC Berkeley" width={24} height={24} className="flex-shrink-0 rounded-full" />
                B.S. EECS at UC Berkeley
              </span>
              <span className="text-text-muted">·</span>
              <span className="inline-flex items-center gap-1.5">
                <Image src="/images/icons/brushed-metal-apple-mac-icon-29.png" alt="Apple" width={24} height={24} className="flex-shrink-0" />
                SoC Design Verification at Apple
              </span>
            </m.div>

            {/* Social links — real logos */}
            <m.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2, ease }}
              className="flex flex-wrap items-center gap-4 mb-8"
            >
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 w-12 md:h-15 md:w-15 items-center justify-center rounded-btn-sm hover:scale-105 transition-all duration-200"
                aria-label="LinkedIn"
              >
                <Image src="/images/icons/linkedin.png" alt="LinkedIn" width={32} height={32} className="object-contain" />
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 w-12 md:h-15 md:w-15 items-center justify-center rounded-btn-sm hover:scale-105 transition-all duration-200"
                aria-label="GitHub"
              >
                <Image src="/images/icons/github.svg" alt="GitHub" width={32} height={32} className="object-contain" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex h-12 w-12 md:h-15 md:w-15 items-center justify-center rounded-btn-sm hover:scale-105 transition-all duration-200"
                aria-label="Email"
              >
                <Image src="/images/icons/mail-icon.png" alt="Email" width={32} height={32} className="object-contain" />
              </a>
            </m.div>

            {/* CTA */}
            <m.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.28, ease }}
              className="flex flex-wrap items-center gap-4"
            >
              <a
                href="/resume/Ansh_Shah_resume.pdf"
                download="Ansh_Shah_Resume.pdf"
                className="inline-flex items-center rounded-button bg-accent dark:bg-[#F5F5F7] px-7 py-3 text-sm font-medium text-white dark:text-[#1D1D1F] transition-colors duration-200 hover:bg-accent-hover dark:hover:bg-[#D2D2D7]"
              >
                Download Resume
              </a>
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 text-sm font-medium text-text-secondary dark:text-[#A1A1A6] hover:text-text-primary dark:hover:text-[#F5F5F7] transition-colors duration-200"
              >
                See my work
              </Link>
            </m.div>
          </div>

          {/* Right — headshot (desktop only) */}
          <m.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15, ease }}
            className="relative mx-auto lg:mx-0 hidden lg:block"
          >
            <div className="relative w-[340px] h-[420px] rounded-bento overflow-hidden shadow-card-hover">
              <Image
                src="/images/headshot.jpg"
                alt="Ansh Shah"
                fill
                className="object-cover"
                priority
                sizes="340px"
              />
            </div>
          </m.div>
        </div>
      </div>
    </section>
  );
}