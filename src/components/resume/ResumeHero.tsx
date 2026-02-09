'use client';

import { motion } from 'framer-motion';
import { Mail, MapPin, Linkedin, Github, Download } from 'lucide-react';
import { resumeData } from '@/lib/resumeData';

export default function ResumeHero() {
  const contactItems = [
    { icon: Mail, label: resumeData.email, href: `mailto:${resumeData.email}` },
    { icon: MapPin, label: resumeData.location },
    { icon: Linkedin, label: 'LinkedIn', href: resumeData.linkedin },
    { icon: Github, label: 'GitHub', href: resumeData.github },
  ];

  return (
    <section className="relative flex min-h-[50vh] items-center justify-center overflow-hidden dot-matrix">
      {/* Subtle top gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-accent/20 via-transparent to-transparent" />

      <div className="container relative mx-auto max-w-4xl px-6 py-20 md:py-28">
        <div className="text-center">
          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-3 text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl"
          >
            {resumeData.name}
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-8 text-lg text-muted md:text-xl"
          >
            {resumeData.tagline}
          </motion.p>

          {/* Contact row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-10 flex flex-wrap items-center justify-center gap-4 md:gap-6"
          >
            {contactItems.map((item, i) => {
              const Icon = item.icon;
              const content = (
                <span className="flex items-center gap-1.5 text-sm text-muted/80 transition-colors hover:text-white">
                  <Icon className="h-4 w-4" />
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
                  {content}
                </a>
              ) : (
                <span key={i}>{content}</span>
              );
            })}
          </motion.div>

          {/* Download button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <a
              href="/resume/Ansh_Shah_resume.pdf"
              download
              className="inline-flex items-center gap-2 rounded-lg bg-muted px-8 py-3 text-sm font-medium text-primary-dark transition-all hover:bg-muted/90 hover:shadow-lg"
            >
              <Download className="h-4 w-4" />
              Download Resume
            </a>
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-primary-dark to-transparent" />
    </section>
  );
}
