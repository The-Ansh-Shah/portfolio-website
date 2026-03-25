import { Variants } from 'framer-motion';

export const fadeInUp: Variants = {
  initial: {
    opacity: 0,
    y: 12,
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

export const staggerContainer: Variants = {
  animate: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

export const cardHover = {
  whileHover: {
    scale: 1.01,
    transition: {
      duration: 0.3,
      ease: 'easeOut',
    },
  },
};

export const sectionReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 12,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
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
  margin: '0px 0px -100px 0px',
  amount: 0.1,
};
