'use client';

import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { useRef, useEffect } from 'react';

interface PageTransitionProps {
  children: React.ReactNode;
}

export default function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname();
  const prevPathnameRef = useRef(pathname);
  const isResumePage = pathname === '/resume';
  const wasResumePage = prevPathnameRef.current === '/resume';

  useEffect(() => {
    prevPathnameRef.current = pathname;
  }, [pathname]);

  // Determine slide direction based on navigation
  // Going TO resume: slide from right (100%)
  // Coming FROM resume: slide from left (-100%)
  const getInitialX = () => {
    if (isResumePage && !wasResumePage) return '100%'; // Entering resume
    if (!isResumePage && wasResumePage) return '-100%'; // Leaving resume
    return 0; // First load or same page
  };

  const getExitX = () => {
    if (isResumePage) return '-100%'; // Resume exits to left
    return '100%'; // Home exits to right
  };

  return (
    <motion.div
      key={pathname}
      initial={{
        x: getInitialX(),
        opacity: 0,
      }}
      animate={{
        x: 0,
        opacity: 1,
      }}
      exit={{
        x: getExitX(),
        opacity: 0,
      }}
      transition={{
        type: 'tween',
        ease: [0.25, 0.46, 0.45, 0.94],
        duration: 0.5,
      }}
      className="w-full"
    >
      {children}
    </motion.div>
  );
}
