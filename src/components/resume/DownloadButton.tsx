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
        whileHover={{ scale: 1.02, y: -1 }}
        whileTap={{ scale: 0.98 }}
        className="fixed top-20 right-6 z-40 flex items-center gap-2 rounded-lg border border-muted/20 bg-gradient-to-r from-muted/10 to-accent/10 backdrop-blur-md px-4 py-2.5 text-sm font-medium text-white shadow-lg shadow-muted/10 transition-all hover:border-muted/30 hover:shadow-xl hover:shadow-muted/20"
      >
        <Download className="h-4 w-4" />
        <span className="hidden sm:inline">Download PDF</span>
      </m.a>
    );
  }

  return (
    <m.a
      href="/resume/Ansh_Shah_resume.pdf"
      download="Ansh_Shah_Resume.pdf"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="inline-flex items-center gap-2 rounded-lg bg-muted px-6 py-2.5 text-sm font-medium text-primary-dark transition-all hover:bg-white hover:shadow-lg hover:shadow-muted/20"
    >
      <Download className="h-4 w-4" />
      Download PDF
    </m.a>
  );
}
