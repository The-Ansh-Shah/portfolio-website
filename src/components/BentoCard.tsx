'use client';

import { m, useInView } from 'framer-motion';
import { useRef } from 'react';
import { cn } from '@/lib/utils';

interface BentoCardProps {
  children: React.ReactNode;
  className?: string;
  colSpan?: number;
  rowSpan?: number;
  variant?: 'default' | 'accent' | 'image';
  delay?: number;
  hover?: boolean;
}

export default function BentoCard({
  children,
  className,
  colSpan = 1,
  rowSpan = 1,
  variant = 'default',
  delay = 0,
  hover = true,
}: BentoCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const colSpanClass = {
    1: '',
    2: 'md:col-span-2',
    3: 'md:col-span-2 lg:col-span-3',
    4: 'md:col-span-2 lg:col-span-4',
  }[colSpan] || '';

  const rowSpanClass = {
    1: '',
    2: 'row-span-2',
  }[rowSpan] || '';

  const variantClass = {
    default: 'bg-bg-card border-border',
    accent: 'bg-bg-accent-subtle border-accent/20',
    image: 'bg-bg-card border-border overflow-hidden p-0',
  }[variant];

  return (
    <m.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay, ease: [0.25, 0.1, 0.25, 1] }}
      whileHover={hover ? { scale: 1.015, borderColor: 'var(--border-hover)' } : undefined}
      className={cn(
        'rounded-bento border p-6 md:p-8 transition-shadow duration-300',
        'shadow-card hover:shadow-card-hover',
        variantClass,
        colSpanClass,
        rowSpanClass,
        className
      )}
    >
      {children}
    </m.div>
  );
}
