import { Variants } from 'framer-motion';

export const fadeInUp: Variants = {
  initial: {
    opacity: 0,
    y: 30,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

export const staggerContainer: Variants = {
  animate: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

export const cardHover = {
  whileHover: {
    scale: 1.015,
    transition: {
      duration: 0.3,
      ease: 'easeOut',
    },
  },
};

export const sectionReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

export const staggerChildren = (delay = 0.08): Variants => ({
  animate: {
    transition: {
      staggerChildren: delay,
    },
  },
});

export const viewportOnce = {
  once: true,
  amount: 0.2,
};
