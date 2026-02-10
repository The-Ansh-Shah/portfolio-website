'use client';

import { motion, useScroll, useSpring } from 'framer-motion';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      {/* Main progress bar */}
      <motion.div
        className="fixed top-16 left-0 right-0 z-40 h-[2px] origin-left bg-gradient-to-r from-secondary via-muted to-white/80"
        style={{ scaleX }}
      />
      {/* Glow beneath bar */}
      <motion.div
        className="fixed top-16 left-0 right-0 z-[39] h-[6px] origin-left bg-gradient-to-r from-secondary/30 via-muted/20 to-white/10 blur-sm"
        style={{ scaleX }}
      />
    </>
  );
}
