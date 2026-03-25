'use client';

import { cn } from '@/lib/utils';

interface MarqueeProps {
  children: React.ReactNode;
  className?: string;
  reverse?: boolean;
  speed?: string;
}

export default function Marquee({
  children,
  className,
  reverse = false,
  speed = '30s',
}: MarqueeProps) {
  return (
    <div
      className={cn('marquee-container overflow-hidden', className)}
    >
      <div
        className={cn(
          'flex w-max gap-4',
          reverse ? 'animate-marquee-reverse' : 'animate-marquee'
        )}
        style={{ animationDuration: speed }}
      >
        {children}
        {/* Duplicate for seamless loop */}
        {children}
      </div>
    </div>
  );
}
