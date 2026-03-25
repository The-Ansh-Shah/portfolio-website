'use client';

import { marqueeTools } from '@/lib/content';
import Marquee from './Marquee';

export default function MarqueeStrip() {
  return (
    <div className="py-6">
      <div className="mx-auto max-w-content px-6">
        <Marquee speed="22s">
          {marqueeTools.map((tool) => (
            <span
              key={tool}
              className="inline-block font-mono text-[13px] font-medium text-text-muted border border-border px-4 py-2 rounded-btn-sm whitespace-nowrap"
            >
              {tool}
            </span>
          ))}
        </Marquee>
      </div>
    </div>
  );
}
