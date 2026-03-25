'use client';

import { m, useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin } from 'lucide-react';
import {
  identityTagline,
  whatDrivesMe,
  personalInfo,
  verilogSnippet,
  marqueeTools,
  hobbies,
} from '@/lib/content';
import BentoCard from './BentoCard';
import CodeBlock from './CodeBlock';
import Marquee from './Marquee';
import SectionLabel from './SectionLabel';

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="about" className="py-section">
      <div className="mx-auto max-w-content px-6" ref={ref}>
        <m.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-8"
        >
          <SectionLabel>About</SectionLabel>
          <h2 className="text-section text-text-primary mt-2">Who I Am</h2>
        </m.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Tagline card — large */}
          <BentoCard colSpan={2} delay={0.08}>
            <p className="text-card-title text-text-primary leading-snug">
              {identityTagline}
            </p>
          </BentoCard>

          {/* Location card */}
          <BentoCard delay={0.16}>
            <div className="flex items-center gap-3">
              <MapPin className="h-5 w-5 text-text-muted" />
              <div>
                <p className="text-sm font-medium text-text-primary">Based in {personalInfo.location}</p>
                <p className="text-caption text-text-muted">UC Berkeley</p>
              </div>
            </div>
          </BentoCard>

          {/* What drives me card */}
          <BentoCard variant="accent" delay={0.24}>
            <p className="text-caption text-text-muted mb-2 uppercase tracking-widest font-medium">What drives me</p>
            <p className="text-lg font-semibold text-accent">{whatDrivesMe}</p>
          </BentoCard>

          {/* Verilog code snippet card */}
          <BentoCard colSpan={2} delay={0.32} className="p-0" hover={false}>
            <div className="p-6 md:p-8">
              <CodeBlock code={verilogSnippet} language="verilog" />
            </div>
          </BentoCard>
        </div>

        {/* Tech marquee strip */}
        <div className="mt-4">
          <Marquee speed="25s">
            {marqueeTools.map((tool) => (
              <span
                key={tool}
                className="inline-block font-mono text-sm text-text-muted border border-border px-4 py-2 rounded-btn-sm whitespace-nowrap"
              >
                {tool}
              </span>
            ))}
          </Marquee>
        </div>

        {/* Hobbies card */}
        <div className="mt-4">
          <BentoCard delay={0.4}>
            <p className="text-caption text-text-muted mb-3">I also like…</p>
            <div className="flex flex-wrap gap-3">
              {hobbies.map((hobby) => (
                <span key={hobby.label} className="text-body text-text-secondary">
                  {hobby.emoji} {hobby.label}
                </span>
              ))}
            </div>
          </BentoCard>
        </div>
      </div>
    </section>
  );
}
