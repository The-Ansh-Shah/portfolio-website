'use client';

import { AnimatePresence, LazyMotion, domAnimation } from 'framer-motion';
import { usePathname } from 'next/navigation';
import PageTransition from './PageTransition';

interface LayoutClientProps {
  children: React.ReactNode;
}

export default function LayoutClient({ children }: LayoutClientProps) {
  const pathname = usePathname();

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
