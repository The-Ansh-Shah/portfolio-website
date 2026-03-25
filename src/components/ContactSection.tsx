'use client';

import { personalInfo } from '@/lib/content';
import AnimatedSection from './AnimatedSection';
import { sectionReveal } from '@/lib/animations';

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 md:py-32 bg-bg-secondary">
      <div className="mx-auto max-w-content px-6">
        <AnimatedSection variants={sectionReveal} className="text-center">
          <h2 className="text-h2 text-text-primary mb-6">
            Get in Touch
          </h2>

          <a
            href={`mailto:${personalInfo.email}`}
            className="inline-block text-[clamp(20px,3vw,28px)] font-medium text-accent transition-colors duration-200 hover:text-accent-hover mb-6"
          >
            {personalInfo.email}
          </a>

          <p className="text-body text-text-secondary">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary transition-colors duration-200 hover:text-text-primary"
            >
              GitHub
            </a>
            <span className="mx-2 text-text-tertiary">&middot;</span>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary transition-colors duration-200 hover:text-text-primary"
            >
              LinkedIn
            </a>
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
