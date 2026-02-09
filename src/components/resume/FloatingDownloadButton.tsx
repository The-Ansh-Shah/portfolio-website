'use client';

import { motion } from 'framer-motion';
import { Download } from 'lucide-react';

export default function FloatingDownloadButton() {
  return (
    <motion.a
      href="/resume/Ansh_Shah_resume.pdf"
      download
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-30 flex items-center gap-2 rounded-full bg-muted px-5 py-3 text-sm font-medium text-primary-dark shadow-lg shadow-muted/25 transition-shadow hover:shadow-xl hover:shadow-muted/30 max-md:p-3"
    >
      <Download className="h-4 w-4" />
      <span className="hidden md:inline">Download PDF</span>
    </motion.a>
  );
}
