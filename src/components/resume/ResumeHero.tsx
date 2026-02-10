'use client';

import { motion } from 'framer-motion';
import { Mail, MapPin, Linkedin, Github, Download, ChevronDown } from 'lucide-react';
import { resumeData } from '@/lib/resumeData';

export default function ResumeHero() {
  const contactItems = [
    { icon: Mail, label: resumeData.email, href: `mailto:${resumeData.email}` },
    { icon: MapPin, label: resumeData.location },
    { icon: Linkedin, label: 'LinkedIn', href: resumeData.linkedin },
    { icon: Github, label: 'GitHub', href: resumeData.github },
  ];

  return (
    <section className="relative flex min-h-[60vh] items-center justify-center overflow-hidden">
      {/* Layered gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-accent/30 via-accent/10 to-transparent" />
      <div className="absolute inset-0 dot-matrix opacity-60" />

      {/* Radial spotlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-muted/5 blur-[100px]" />

      <div className="container relative mx-auto max-w-4xl px-6 py-24 md:py-32">
        <div className="text-center">
          {/* Overline label */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <span className="inline-block rounded-full border border-muted/20 bg-muted/5 px-4 py-1.5 text-xs font-medium tracking-widest uppercase text-muted/60">
              Interactive Resume
            </span>
          </motion.div>

          {/* Name — animated gradient */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-4 text-5xl font-bold tracking-tight md:text-6xl lg:text-7xl"
          >
            <span className="animate-gradient bg-gradient-to-r from-white via-muted to-secondary bg-[length:200%_auto] bg-clip-text text-transparent will-change-[background-position]">
              {resumeData.name}
            </span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-10 text-lg text-muted/80 md:text-xl"
          >
            {resumeData.tagline}
          </motion.p>

          {/* Contact row — pill badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-12 flex flex-wrap items-center justify-center gap-3"
          >
            {contactItems.map((item, i) => {
              const Icon = item.icon;
              const inner = (
                <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-2 text-xs font-medium text-muted/70 transition-all hover:border-muted/30 hover:text-white hover:bg-accent/20">
                  <Icon className="h-3.5 w-3.5" />
                  <span className="hidden sm:inline">{item.label}</span>
                </span>
              );

              return item.href ? (
                <a
                  key={i}
                  href={item.href}
                  target={item.href.startsWith('mailto') ? undefined : '_blank'}
                  rel={item.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                >
                  {inner}
                </a>
              ) : (
                <span key={i}>{inner}</span>
              );
            })}
          </motion.div>

          {/* Download CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-16"
          >
            <a
              href="/resume/Ansh_Shah_resume.pdf"
              download
              className="group inline-flex items-center gap-2 rounded-lg bg-muted px-8 py-3 text-sm font-medium text-primary-dark transition-all hover:bg-white hover:shadow-lg hover:shadow-muted/20"
            >
              <Download className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
              Download Resume
            </a>
          </motion.div>

          {/* Scroll hint */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            >
              <ChevronDown className="h-5 w-5 text-muted/30" />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-primary-dark to-transparent" />
    </section>
  );
}
