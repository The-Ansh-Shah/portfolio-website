'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { personalInfo } from '@/lib/content';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-bg-card-alt border-t border-border py-20 md:py-30">
      <div className="mx-auto max-w-content px-6">
        <div className="text-center mb-12">
          <h2 className="text-section text-text-primary mb-4">Let&apos;s Talk</h2>
          <a
            href={`mailto:${personalInfo.email}`}
            className="inline-block text-xl md:text-2xl font-medium text-accent hover:text-accent-hover transition-colors duration-200"
          >
            {personalInfo.email}
          </a>
        </div>

        <div className="flex items-center justify-center gap-6 mb-12">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-secondary hover:text-text-primary transition-colors duration-200"
            aria-label="GitHub"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-secondary hover:text-text-primary transition-colors duration-200"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="text-text-secondary hover:text-text-primary transition-colors duration-200"
            aria-label="Email"
          >
            <Mail className="h-5 w-5" />
          </a>
        </div>

        {/* Small headshot */}
        <div className="flex justify-center mb-8">
          <div className="relative h-12 w-12 rounded-full overflow-hidden border border-border">
            <Image
              src="/images/headshot.jpg"
              alt="Ansh Shah"
              fill
              className="object-cover"
              sizes="48px"
            />
          </div>
        </div>

        {/* Nav links */}
        <div className="flex items-center justify-center gap-6 mb-8">
          <Link href="/" className="text-caption text-text-muted hover:text-text-primary transition-colors duration-200">
            Home
          </Link>
          <Link href="/projects" className="text-caption text-text-muted hover:text-text-primary transition-colors duration-200">
            Projects
          </Link>
          <Link href="/resume" className="text-caption text-text-muted hover:text-text-primary transition-colors duration-200">
            Resume
          </Link>
        </div>

        {/* Back to top */}
        <div className="flex justify-center mb-8">
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 text-caption text-text-muted hover:text-text-primary transition-colors duration-200"
          >
            <ArrowUp className="h-3.5 w-3.5" />
            Back to Top
          </button>
        </div>

        <p className="text-center text-caption text-text-muted">
          &copy; {currentYear} {personalInfo.name}
        </p>
      </div>
    </footer>
  );
}
