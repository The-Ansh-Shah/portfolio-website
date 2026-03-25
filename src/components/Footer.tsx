'use client';

import { personalInfo } from '@/lib/content';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-bg-card border-t border-border py-10 md:py-12">
      <div className="mx-auto max-w-content px-6">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
          {/* Left side */}
          <div>
            <span className="text-label uppercase text-text-muted tracking-[0.08em]">Let&apos;s talk</span>
            <a
              href={`mailto:${personalInfo.email}`}
              className="block mt-2 text-base md:text-lg font-medium text-text-primary hover:underline"
            >
              {personalInfo.email}
            </a>
            <div className="flex items-center gap-3 mt-3">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-body text-text-muted hover:text-text-primary transition-colors duration-200"
              >
                GitHub
              </a>
              <span className="text-text-muted">·</span>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-body text-text-muted hover:text-text-primary transition-colors duration-200"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Right side */}
          <div className="text-right">
            <p className="text-caption text-text-muted">&copy; 2026 {personalInfo.name}</p>
            <button
              onClick={scrollToTop}
              className="mt-1 text-caption text-text-muted hover:text-text-primary transition-colors duration-200"
            >
              Back to top ↑
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
