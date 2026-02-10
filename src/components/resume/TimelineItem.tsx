'use client';

import { m } from 'framer-motion';
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
    <div className="relative pl-10 md:pl-14 group/timeline">
      {/* Timeline connector line */}
      {!isLast && (
        <div className="absolute left-[11px] top-3 bottom-0 w-px">
          <div className="h-full w-full bg-gradient-to-b from-muted/40 via-muted/20 to-muted/5" />
          {/* Animated shimmer overlay */}
          <div className="absolute inset-0 shimmer-line opacity-30" style={{ width: '1px' }} />
        </div>
      )}

      {/* Timeline dot — glowing node */}
      <m.div
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={viewportOnce}
        transition={{ duration: 0.4, type: 'spring', stiffness: 260, damping: 20 }}
        className="absolute left-0 top-1.5 h-[22px] w-[22px] rounded-full border-2 border-muted/40 bg-accent/30 backdrop-blur-sm glow-pulse"
      >
        <div className="absolute inset-1.5 rounded-full bg-muted/60" />
      </m.div>

      {/* Content card */}
      <m.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={viewportOnce}
        transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="pb-10"
      >
        {/* Date badge */}
        <m.span
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={viewportOnce}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="mb-1.5 inline-block rounded-full bg-accent/15 px-3.5 py-1 text-xs font-medium text-muted/70 border border-muted/15 backdrop-blur-sm"
        >
          {date}
        </m.span>

        <h3 className="mt-2 text-lg font-semibold text-white md:text-xl tracking-tight">
          {title}
        </h3>
        {subtitle && (
          <p className="mt-0.5 text-sm font-medium text-secondary/90">{subtitle}</p>
        )}
        {location && (
          <p className="mt-0.5 text-xs text-muted/50 tracking-wide">{location}</p>
        )}
        <div className="mt-4">{children}</div>
      </m.div>
    </div>
  );
}
