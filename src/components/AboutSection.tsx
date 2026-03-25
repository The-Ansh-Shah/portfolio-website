'use client';

import { m, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { MapPin } from 'lucide-react';
import {
  identityTagline,
  personalInfo,
  verilogSnippet,
  marqueeTools,
  hobbies,
} from '@/lib/content';
import BentoCard from './BentoCard';
import CodeBlock from './CodeBlock';
import Marquee from './Marquee';
import SectionLabel from './SectionLabel';

function HobbyCycler() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % hobbies.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="overflow-hidden h-[44px] relative">
      <AnimatePresence mode="wait">
        <m.div
          key={index}
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -40, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-[30px] font-semibold text-text-primary"
        >
          {hobbies[index].emoji} {hobbies[index].label}
        </m.div>
      </AnimatePresence>
    </div>
  );
}

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

          {/* "I also like…" cycling hobby card */}
          <BentoCard delay={0.24}>
            <p className="text-[13px] uppercase tracking-[0.08em] text-text-muted font-medium mb-3">I also like…</p>
            <HobbyCycler />
          </BentoCard>

          {/* Verilog code snippet card — dark contrast element */}
          <BentoCard colSpan={2} delay={0.32} className="p-0" hover={false}>
            <CodeBlock code={verilogSnippet} />
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
      </div>
    </section>
  );
}
