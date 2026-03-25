'use client';

import { m } from 'framer-motion';
import { Mail, MapPin, Github, Linkedin } from 'lucide-react';
import { resumeData } from '@/lib/resumeData';

export default function ResumeHero() {
  const contactItems = [
    { icon: Mail, label: resumeData.email, href: `mailto:${resumeData.email}` },
    { icon: MapPin, label: resumeData.location },
    { icon: Linkedin, label: 'LinkedIn', href: resumeData.linkedin },
    { icon: Github, label: 'GitHub', href: resumeData.github },
  ];

  return (
    <section className="flex min-h-[50vh] items-center justify-center" style={{ paddingTop: '80px', paddingBottom: '80px' }}>
      <div className="mx-auto max-w-content px-6 text-center">
        <m.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-hero text-text-primary mb-4"
        >
          {resumeData.name}
        </m.h1>
        <m.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.08, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-xl text-text-secondary mb-10"
        >
          {resumeData.tagline}
        </m.p>
        <m.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.16, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          {contactItems.map((item, i) => {
            const Icon = item.icon;
            const inner = (
              <span className="inline-flex items-center gap-2 text-caption text-text-muted hover:text-text-primary transition-colors duration-200">
                <Icon className="h-3.5 w-3.5" />
                {item.label}
              </span>
            );
            return item.href ? (
              <a key={i} href={item.href} target={item.href.startsWith('mailto') ? undefined : '_blank'} rel={item.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}>
                {inner}
              </a>
            ) : (
              <span key={i}>{inner}</span>
            );
          })}
        </m.div>
      </div>
    </section>
  );
}
