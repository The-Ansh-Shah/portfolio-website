'use client';

import { m, useInView } from 'framer-motion';
import { useRef } from 'react';
import { type LucideIcon } from 'lucide-react';

interface TechCardProps {
  icon: LucideIcon;
  name: string;
  description: string;
  delay?: number;
}

export default function TechCard({ icon: Icon, name, description, delay = 0 }: TechCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <m.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay, ease: [0.25, 0.1, 0.25, 1] }}
      whileHover={{ scale: 1.015, borderColor: 'var(--border-hover)' }}
      className="flex items-start gap-4 rounded-card bg-bg-card border border-border p-5 shadow-card hover:shadow-card-hover transition-shadow duration-300"
    >
      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-sm-el bg-bg-card-alt">
        <Icon className="h-5 w-5 text-text-secondary" />
      </div>
      <div className="min-w-0">
        <h4 className="text-sm font-semibold text-text-primary">{name}</h4>
        <p className="text-caption text-text-secondary mt-0.5">{description}</p>
      </div>
    </m.div>
  );
}
