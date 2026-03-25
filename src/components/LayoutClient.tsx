'use client';

import { useEffect } from 'react';
import { AnimatePresence, LazyMotion, domAnimation } from 'framer-motion';
import { usePathname } from 'next/navigation';
import Lenis from 'lenis';
import PageTransition from './PageTransition';

interface LayoutClientProps {
  children: React.ReactNode;
}

export default function LayoutClient({ children }: LayoutClientProps) {
  const pathname = usePathname();

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return (
    <LazyMotion features={domAnimation} strict>
      <AnimatePresence mode="wait">
        <PageTransition key={pathname}>
          {children}
        </PageTransition>
      </AnimatePresence>
    </LazyMotion>
  );
}
