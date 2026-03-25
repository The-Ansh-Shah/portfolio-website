'use client';

import { m, useScroll, useSpring } from 'framer-motion';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <m.div
      className="fixed top-14 left-0 right-0 z-40 h-[2px] origin-left bg-accent"
      style={{ scaleX }}
    />
  );
}
