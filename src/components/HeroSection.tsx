'use client';

import Image from 'next/image';
import Link from 'next/link';
import { m } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowRight } from 'lucide-react';
import { personalInfo } from '@/lib/content';

const ease = [0.25, 0.1, 0.25, 1] as const;

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center py-20 md:py-28">
      <div className="mx-auto max-w-content-wide px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-12 lg:gap-16 items-center">
          {/* Left — text content */}
          <div>
            <m.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease }}
              className="text-[clamp(40px,6vw,72px)] font-bold leading-[1.08] tracking-[-0.04em] text-text-primary mb-5"
            >
              Hi, I&apos;m Ansh{' '}
              <span className="inline-block animate-[wave_2s_ease-in-out_infinite] origin-[70%_70%]">👋</span>
              <br />
              I design & build
              <br />
              hardware systems.
            </m.h1>

            {/* Credential line with circle badges */}
            <m.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.12, ease }}
              className="flex flex-wrap items-center gap-x-3 gap-y-2 mb-6 text-[12px] text-text-secondary"
            >
              <span className="inline-flex items-center gap-1.5">
                <Image src="/images/icons/Seal_of_University_of_California,_Berkeley.svg" alt="UC Berkeley" width={18} height={18} className="flex-shrink-0 rounded-full" />
                B.S. EECS at UC Berkeley
              </span>
              <span className="text-text-muted">·</span>
              <span className="inline-flex items-center gap-1.5">
                <Image src="/images/icons/brushed-metal-apple-mac-icon-29.png" alt="Apple" width={18} height={18} className="flex-shrink-0" />
                SoC Design Verification at Apple
              </span>
            </m.div>

            {/* Social links */}
            <m.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2, ease }}
              className="flex items-center gap-4 mb-8"
            >
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-btn-sm border border-border bg-bg-card text-text-secondary hover:text-text-primary hover:border-border-hover transition-all duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-[18px] w-[18px]" />
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-btn-sm border border-border bg-bg-card text-text-secondary hover:text-text-primary hover:border-border-hover transition-all duration-200"
                aria-label="GitHub"
              >
                <Github className="h-[18px] w-[18px]" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex h-10 w-10 items-center justify-center rounded-btn-sm border border-border bg-bg-card text-text-secondary hover:text-text-primary hover:border-border-hover transition-all duration-200"
                aria-label="Email"
              >
                <Mail className="h-[18px] w-[18px]" />
              </a>
            </m.div>

            {/* CTA — black buttons */}
            <m.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.28, ease }}
              className="flex flex-wrap items-center gap-4"
            >
              <a
                href="/resume/Ansh_Shah_resume.pdf"
                download="Ansh_Shah_Resume.pdf"
                className="group inline-flex items-center gap-2 rounded-button bg-accent px-7 py-3 text-sm font-medium text-white transition-colors duration-200 hover:bg-accent-hover"
              >
                Download Resume
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 text-sm font-medium text-text-secondary hover:text-text-primary transition-colors duration-200"
              >
                See my work →
              </Link>
            </m.div>
          </div>

          {/* Right — headshot */}
          <m.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15, ease }}
            className="relative mx-auto lg:mx-0"
          >
            <div className="relative w-[280px] h-[340px] md:w-[320px] md:h-[400px] lg:w-[340px] lg:h-[420px] rounded-bento overflow-hidden shadow-card-hover">
              <Image
                src="/images/headshot.jpg"
                alt="Ansh Shah"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 280px, 340px"
              />
            </div>
          </m.div>
        </div>
      </div>
    </section>
  );
}
