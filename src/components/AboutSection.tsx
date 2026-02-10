'use client';

import { m, useInView } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';
import { bio } from '@/lib/content';
import { sectionReveal } from '@/lib/animations';

export default function AboutSection() {
  const headerRef = useRef(null);
  const photoRef = useRef(null);
  const bioRef = useRef(null);

  const headerInView = useInView(headerRef, { once: true, margin: '0px 0px -100px 0px', amount: 0 });
  const photoInView = useInView(photoRef, { once: true, margin: '0px 0px -100px 0px', amount: 0 });
  const bioInView = useInView(bioRef, { once: true, margin: '0px 0px -100px 0px', amount: 0 });

  return (
    <section id="about" className="relative py-20 md:py-32">
      <div className="container mx-auto max-w-6xl px-6">
        <m.div
          ref={headerRef}
          initial="hidden"
          animate={headerInView ? "visible" : "hidden"}
          variants={sectionReveal}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
            About Me
          </h2>
          <div className="mx-auto mb-4 h-1 w-20 rounded-full bg-muted"></div>
        </m.div>

        <div className="grid gap-12 md:grid-cols-[300px_1fr] lg:gap-16">
          {/* Profile Photo with Decorative Frame */}
          <m.div
            ref={photoRef}
            initial="hidden"
            animate={photoInView ? "visible" : "hidden"}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: {
                opacity: 1,
                x: 0,
                transition: {
                  duration: 0.8,
                  ease: [0.25, 0.46, 0.45, 0.94],
                },
              },
            }}
            className="flex flex-col gap-6 justify-center md:justify-start"
          >
            <div className="relative">
              {/* Decorative border */}
              <div className="absolute -inset-4 rounded-2xl bg-gradient-to-br from-accent via-secondary to-muted opacity-75 blur-xl"></div>

              {/* Photo container */}
              <div className="relative h-80 w-72 overflow-hidden rounded-2xl border-2 border-muted/30 bg-gradient-to-br from-accent/40 via-secondary/30 to-muted/20">
                <Image
                  src="/images/headshot.jpg"
                  alt="Ansh Shah"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 288px, 288px"
                />
                {/* Decorative grid overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
              </div>

              {/* Corner accent */}
              <div className="absolute -right-2 -top-2 h-8 w-8 rounded-full bg-muted shadow-lg"></div>
              <div className="absolute -bottom-2 -left-2 h-6 w-6 rounded-full bg-accent shadow-lg"></div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 gap-3 w-72">
              <div className="rounded-xl border border-accent/30 bg-accent/10 p-4 backdrop-blur-sm">
                <div className="text-xs font-medium text-secondary mb-1">GPA</div>
                <div className="text-2xl font-bold text-white">3.953</div>
              </div>
              <div className="rounded-xl border border-accent/30 bg-accent/10 p-4 backdrop-blur-sm">
                <div className="text-xs font-medium text-secondary mb-1">Standing</div>
                <div className="text-2xl font-bold text-white">Senior</div>
              </div>
              <div className="rounded-xl border border-accent/30 bg-accent/10 p-4 backdrop-blur-sm col-span-2">
                <div className="text-xs font-medium text-secondary mb-1">Graduation</div>
                <div className="text-lg font-bold text-white">May 2027</div>
              </div>
              <div className="rounded-xl border border-accent/30 bg-accent/10 p-4 backdrop-blur-sm col-span-2">
                <div className="text-xs font-medium text-secondary mb-1">Current Hobby</div>
                <div className="text-lg font-bold text-muted">🎸 Guitaring</div>
              </div>
            </div>
          </m.div>

          {/* Bio Text and Skills */}
          <m.div
            ref={bioRef}
            initial="hidden"
            animate={bioInView ? "visible" : "hidden"}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.2,
                },
              },
            }}
            className="space-y-8"
          >
            {/* Bio Paragraphs */}
            <div className="space-y-6">
              {bio.map((paragraph, index) => (
                <m.p
                  key={index}
                  variants={sectionReveal}
                  className="text-lg leading-relaxed text-muted"
                >
                  {paragraph}
                </m.p>
              ))}
            </div>

            {/* Key Skills Highlight */}
            <m.div variants={sectionReveal} className="pt-4">
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-secondary">
                Core Competencies
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "RISC-V",
                  "CPU Design",
                  "Verilog",
                  "ASIC Implementation",
                  "C/C++",
                  "Rust",
                  "Embedded Security",
                  "Computer Architecture",
                  "Linux/UNIX",
                  "Digital Circuits",
                ].map((skill, index) => (
                  <m.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={bioInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{
                      delay: index * 0.05,
                      duration: 0.4,
                      ease: [0.25, 0.46, 0.45, 0.94],
                    }}
                    whileHover={{ scale: 1.05, backgroundColor: 'rgba(146, 144, 195, 0.2)' }}
                    className="rounded-full border border-muted/30 bg-accent/10 px-4 py-2 text-sm font-medium text-muted transition-colors cursor-default"
                  >
                    {skill}
                  </m.span>
                ))}
              </div>
            </m.div>
          </m.div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-30">
        <div className="absolute right-1/4 top-1/4 h-64 w-64 rounded-full bg-accent blur-3xl"></div>
      </div>
    </section>
  );
}
