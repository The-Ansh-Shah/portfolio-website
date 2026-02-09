'use client';

import { motion } from 'framer-motion';
import { viewportOnce } from '@/lib/animations';

interface TimelineItemProps {
  date: string;
  title: string;
  subtitle?: string;
  location?: string;
  children: React.ReactNode;
  isLast?: boolean;
}

export default function TimelineItem({
  date,
  title,
  subtitle,
  location,
  children,
  isLast = false,
}: TimelineItemProps) {
  return (
    <div className="relative pl-10 md:pl-12">
      {/* Timeline line */}
      {!isLast && (
        <div className="absolute left-[11px] top-3 bottom-0 w-px bg-gradient-to-b from-muted/40 to-muted/10" />
      )}

      {/* Timeline dot */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={viewportOnce}
        transition={{ duration: 0.3 }}
        className="absolute left-0 top-1.5 h-[22px] w-[22px] rounded-full border-2 border-muted/40 bg-accent/30 backdrop-blur-sm"
      >
        <div className="absolute inset-1.5 rounded-full bg-muted/60" />
      </motion.div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={viewportOnce}
        transition={{ duration: 0.4 }}
        className="pb-10"
      >
        <span className="mb-1 inline-block rounded-full bg-accent/20 px-3 py-0.5 text-xs font-medium text-muted/80 border border-accent/30">
          {date}
        </span>
        <h3 className="mt-2 text-lg font-semibold text-white md:text-xl">
          {title}
        </h3>
        {subtitle && (
          <p className="mt-0.5 text-sm font-medium text-secondary">{subtitle}</p>
        )}
        {location && (
          <p className="mt-0.5 text-xs text-muted/60">{location}</p>
        )}
        <div className="mt-4">{children}</div>
      </motion.div>
    </div>
  );
}
