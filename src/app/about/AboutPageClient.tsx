'use client';

import { m } from 'framer-motion';

const ease = [0.25, 0.1, 0.25, 1] as const;

export default function AboutPageClient() {
  return (
    <div className="bg-white min-h-screen py-20 md:py-32">
      <div className="mx-auto max-w-[800px] px-6 md:px-10">
        {/* Hero area */}
        <m.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease }}
          className="text-center mb-16"
        >
          <span className="text-[48px]">😎</span>
          <h1 className="mt-4 text-[clamp(36px,5vw,48px)] font-semibold text-[#1D1D1F] tracking-tight">
            About me
          </h1>
          <p className="mt-2 text-[clamp(20px,3vw,28px)] text-[#86868B] font-medium">
            Who am I?
          </p>
        </m.div>

        {/* Bio section */}
        <m.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.12, ease }}
          className="max-w-[700px]"
        >
          <h2 className="text-[24px] font-semibold text-[#1D1D1F] mb-6">
            Hi! I&apos;m Ansh 👋
          </h2>

          <div className="space-y-6 text-[18px] text-[#1D1D1F] leading-[1.7]">
            <p>
              I&apos;m a junior studying Electrical Engineering &amp; Computer Science at UC Berkeley.
              I&apos;m an incoming SoC Design Verification intern at{' '}
              <a
                href="https://www.apple.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#b36cc4] hover:underline"
              >
                Apple
              </a>
              , where I&apos;ll be joining the cellular team.
            </p>

            <p>
              My love for engineering came from wanting to understand how computers actually work
              — from transistors to operating systems. At Berkeley, I&apos;ve been able to explore
              this through CPU design, embedded security research at the{' '}
              <a
                href="https://slice.eecs.berkeley.edu"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#b36cc4] hover:underline"
              >
                SLICE Lab
              </a>
              , and teaching computer architecture to 600+ students as{' '}
              <a
                href="https://cs61c.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#b36cc4] hover:underline"
              >
                CS 61C
              </a>
              {' '}course staff.
            </p>

            <p>
              Outside of engineering, I&apos;m the Treasurer and Industrial Relations Officer for{' '}
              <a
                href="https://hkn.eecs.berkeley.edu"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#b36cc4] hover:underline"
              >
                HKN (Eta Kappa Nu)
              </a>
              , where I help connect Berkeley&apos;s EECS students to industry. I also play guitar,
              lift weights, and spend too much time on Stardew Valley.
            </p>
          </div>
        </m.div>
      </div>
    </div>
  );
}
