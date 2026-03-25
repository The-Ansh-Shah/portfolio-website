'use client';

import { m, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink } from 'lucide-react';
import { readingList } from '@/lib/content';
import SectionLabel from './SectionLabel';
import BentoCard from './BentoCard';

export default function ReadingList() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className="py-section">
      <div className="mx-auto max-w-content px-6" ref={ref}>
        <m.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-8"
        >
          <SectionLabel>Content</SectionLabel>
          <h2 className="text-section text-text-primary mt-2">What I&apos;ve Been Reading</h2>
        </m.div>

        <BentoCard delay={0.08}>
          <ul className="space-y-4">
            {readingList.map((item, i) => (
              <li key={i}>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start justify-between gap-4"
                >
                  <div>
                    <p className="text-body text-text-primary group-hover:text-accent transition-colors duration-200">
                      {item.title}
                    </p>
                    <p className="text-caption text-text-muted">{item.source}</p>
                  </div>
                  <ExternalLink className="h-4 w-4 flex-shrink-0 text-text-muted group-hover:text-accent transition-colors duration-200 mt-1" />
                </a>
              </li>
            ))}
          </ul>
        </BentoCard>
      </div>
    </section>
  );
}
