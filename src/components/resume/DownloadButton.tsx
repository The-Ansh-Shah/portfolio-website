'use client';

import { m } from 'framer-motion';
import { Download } from 'lucide-react';

interface DownloadButtonProps {
  variant?: 'fixed' | 'inline';
}

export default function DownloadButton({ variant = 'fixed' }: DownloadButtonProps) {
  if (variant === 'fixed') {
    return (
      <m.a
        href="/resume/Ansh_Shah_resume.pdf"
        download="Ansh_Shah_Resume.pdf"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.4 }}
        className="fixed top-18 right-6 z-40 flex items-center gap-2 rounded-button border border-border bg-bg-card/90 backdrop-blur-md px-4 py-2 text-sm font-medium text-text-primary shadow-card transition-all duration-200 hover:shadow-card-hover hover:border-border-hover"
      >
        <Download className="h-4 w-4" />
        <span className="hidden sm:inline">Download PDF</span>
      </m.a>
    );
  }

  return (
    <a
      href="/resume/Ansh_Shah_resume.pdf"
      download="Ansh_Shah_Resume.pdf"
      className="inline-flex items-center gap-2 rounded-button bg-accent px-6 py-2.5 text-sm font-medium text-white transition-colors duration-200 hover:bg-accent-hover"
    >
      <Download className="h-4 w-4" />
      Download PDF
    </a>
  );
}
