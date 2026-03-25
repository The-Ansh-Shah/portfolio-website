'use client';

import { m, Variants, useInView } from 'framer-motion';
import { ReactNode, useRef } from 'react';

interface AnimatedSectionProps {
  children: ReactNode;
  variants?: Variants;
  className?: string;
  delay?: number;
}

export default function AnimatedSection({
  children,
  variants,
  className,
  delay = 0,
}: AnimatedSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: '0px 0px -100px 0px',
    amount: 0.1,
  });

  const defaultVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 12,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay,
        ease: 'easeOut',
      },
    },
  };

  return (
    <m.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants || defaultVariants}
      className={className}
    >
      {children}
    </m.div>
  );
}
