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
    <m.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewportOnce}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={!isLast ? 'pb-8 mb-8 border-b border-border' : ''}
    >
      <span className="text-caption text-text-tertiary">
        {date}
      </span>
      <h3 className="mt-1 text-lg font-semibold text-text-primary">
        {title}
      </h3>
      {subtitle && (
        <p className="mt-0.5 text-[15px] text-text-secondary">{subtitle}</p>
      )}
      {location && (
        <p className="mt-0.5 text-caption text-text-tertiary">{location}</p>
      )}
      <div className="mt-4">{children}</div>
    </m.div>
  );
}
