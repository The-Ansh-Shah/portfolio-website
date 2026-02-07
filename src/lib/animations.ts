// Shared Framer Motion animation variants and configurations

import { Variants } from 'framer-motion';

// Fade in and slide up animation
export const fadeInUp: Variants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

// Stagger container for child animations
export const staggerContainer: Variants = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

// Card hover effect with lift and scale
export const cardHover = {
  whileHover: {
    y: -8,
    scale: 1.02,
    transition: {
      duration: 0.2,
      ease: 'easeOut',
    },
  },
};

// Section reveal animation (for scroll-triggered sections)
export const sectionReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

// Stagger children with custom delay
export const staggerChildren = (delay = 0.1): Variants => ({
  animate: {
    transition: {
      staggerChildren: delay,
    },
  },
});

// Tag/chip fade and scale animation
export const tagAnimation = (index: number): Variants => ({
  hidden: {
    opacity: 0,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
      delay: index * 0.05,
      ease: 'easeOut',
    },
  },
});

// Alternating slide in (left/right) for cards
export const alternatingSlide = (index: number): Variants => ({
  hidden: {
    opacity: 0,
    x: index % 2 === 0 ? -30 : 30,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
});

// Viewport configuration for scroll-triggered animations
export const viewportOnce = {
  once: true,
  margin: '-100px',
  amount: 0.3,
};

// Spring animation config
export const springConfig = {
  type: 'spring',
  stiffness: 380,
  damping: 30,
};
