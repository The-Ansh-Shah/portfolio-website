'use client';

import { m } from 'framer-motion';
import { Download } from 'lucide-react';

export default function FloatingDownloadButton() {
  return (
    <m.a
      href="/resume/Ansh_Shah_resume.pdf"
      download
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: 1.2, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-30 flex items-center gap-2.5 rounded-full bg-gradient-to-r from-muted to-muted/90 px-5 py-3 text-sm font-medium text-primary-dark shadow-lg shadow-muted/20 transition-shadow hover:shadow-xl hover:shadow-muted/30 max-md:p-3.5 border border-white/10"
    >
      <Download className="h-4 w-4" />
      <span className="hidden md:inline">Download PDF</span>
    </m.a>
  );
}
