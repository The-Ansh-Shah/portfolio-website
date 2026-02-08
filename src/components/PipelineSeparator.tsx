'use client';

import { motion } from 'framer-motion';

export default function PipelineSeparator() {
  return (
    <div className="relative h-24 w-full overflow-hidden">
      {/* Horizontal pipeline line */}
      <div className="absolute left-0 right-0 top-1/2 h-px bg-gradient-to-r from-transparent via-muted/20 to-transparent"></div>

      {/* Pipeline nodes/junctions */}
      <div className="absolute left-1/4 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="h-2 w-2 rounded-full border border-muted/30 bg-accent/20"></div>
      </div>
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <motion.div
          className="h-3 w-3 rounded-full border border-muted/40 bg-muted/20"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        ></motion.div>
      </div>
      <div className="absolute left-3/4 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="h-2 w-2 rounded-full border border-muted/30 bg-accent/20"></div>
      </div>

      {/* Vertical connectors */}
      <div className="absolute left-1/4 top-1/2 h-8 w-px bg-gradient-to-b from-muted/20 to-transparent"></div>
      <div className="absolute left-3/4 top-1/2 h-8 w-px bg-gradient-to-b from-muted/20 to-transparent"></div>
    </div>
  );
}
