'use client';

import { m, useInView } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';
import { bio } from '@/lib/content';
import { sectionReveal } from '@/lib/animations';

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '0px 0px -100px 0px', amount: 0.1 });

  return (
    <section id="about" className="py-20 md:py-32 bg-bg-secondary">
      <div className="mx-auto max-w-content px-6">
        <m.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            visible: {
              transition: { staggerChildren: 0.08 },
            },
          }}
          className="flex flex-col md:flex-row items-center gap-12 lg:gap-16"
        >
          {/* Headshot */}
          <m.div
            variants={sectionReveal}
            className="flex-shrink-0"
          >
            <div className="relative h-[200px] w-[200px] overflow-hidden rounded-full shadow-md">
              <Image
                src="/images/headshot.jpg"
                alt="Ansh Shah"
                fill
                className="object-cover"
                priority
                sizes="200px"
              />
            </div>
          </m.div>

          {/* Bio */}
          <m.div variants={sectionReveal} className="flex-1">
            <h2 className="text-h2 text-text-primary mb-6">
              About Me
            </h2>
            <p className="text-body text-text-secondary max-w-paragraph leading-relaxed">
              {bio[0]}
            </p>
          </m.div>
        </m.div>
      </div>
    </section>
  );
}
