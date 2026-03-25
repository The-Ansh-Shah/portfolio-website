'use client';

import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ProjectCarouselProps {
  children: React.ReactNode;
}

export default function ProjectCarousel({ children }: ProjectCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const cardWidth = 420;
    const gap = 16;
    const scrollAmount = cardWidth + gap;
    scrollRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  return (
    <div className="relative group">
      {/* Arrow controls */}
      <button
        onClick={() => scroll('left')}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 hidden md:flex h-10 w-10 items-center justify-center rounded-full bg-bg-card border border-border shadow-card opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-bg-card-hover"
        aria-label="Previous project"
      >
        <ChevronLeft className="h-5 w-5 text-text-secondary" />
      </button>
      <button
        onClick={() => scroll('right')}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 hidden md:flex h-10 w-10 items-center justify-center rounded-full bg-bg-card border border-border shadow-card opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-bg-card-hover"
        aria-label="Next project"
      >
        <ChevronRight className="h-5 w-5 text-text-secondary" />
      </button>

      {/* Scrollable container */}
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-4"
      >
        {children}
      </div>
    </div>
  );
}
