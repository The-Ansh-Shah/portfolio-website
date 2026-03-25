'use client';

import { useState, useCallback } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { projects } from '@/lib/content';

export default function ProjectCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const total = projects.length;

  const prev = useCallback(() => {
    setActiveIndex((i) => (i - 1 + total) % total);
  }, [total]);

  const next = useCallback(() => {
    setActiveIndex((i) => (i + 1) % total);
  }, [total]);

  const getPosition = (index: number) => {
    const diff = ((index - activeIndex + total) % total);
    if (diff === 0) return 'active';
    if (diff === 1 || (diff === total - 1 && total > 2)) {
      return diff === 1 ? 'next' : 'prev';
    }
    if (diff === total - 1) return 'prev';
    return 'hidden';
  };

  return (
    <div className="relative">
      {/* Carousel container */}
      <div className="relative overflow-hidden w-full" style={{ height: '340px' }}>
        {projects.map((project, index) => {
          const position = getPosition(index);
          let transform = '';
          let opacity = 0;
          let zIndex = 0;

          if (position === 'active') {
            transform = 'translateX(-50%) scale(1)';
            opacity = 1;
            zIndex = 10;
          } else if (position === 'prev') {
            transform = 'translateX(-95%) scale(0.92)';
            opacity = 0.5;
            zIndex = 5;
          } else if (position === 'next') {
            transform = 'translateX(-5%) scale(0.92)';
            opacity = 0.5;
            zIndex = 5;
          } else {
            transform = 'translateX(-50%) scale(0.85)';
            opacity = 0;
            zIndex = 0;
          }

          return (
            <div
              key={project.id}
              className="absolute top-0 left-1/2"
              style={{
                width: '70%',
                height: '100%',
                transform,
                opacity,
                zIndex,
                transition: 'transform 0.4s ease, opacity 0.4s ease',
                pointerEvents: position === 'active' ? 'auto' : 'none',
              }}
            >
              <div className="h-full rounded-[20px] bg-[#F5F5F7] border border-[#E8E8ED] overflow-hidden flex flex-row">
                {/* Image — 55% */}
                {project.thumbnail && (
                  <div className="relative w-[55%] flex-shrink-0">
                    <Image
                      src={project.thumbnail}
                      alt={project.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 40vw"
                    />
                  </div>
                )}

                {/* Body — 45% */}
                <div className="flex-1 flex flex-col justify-center" style={{ padding: '36px 32px' }}>
                  <span className="text-[12px] text-[#86868B]">{project.date}</span>
                  <h3 className="text-[24px] font-semibold text-[#1D1D1F] leading-[1.2] mt-1">
                    {project.title}
                  </h3>
                  <p className="text-[15px] text-[#86868B] leading-[1.55] mt-3">
                    {project.description}
                  </p>
                  <p className="text-[13px] text-[#86868B] mt-3">
                    {project.technologies.join(' · ')}
                  </p>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[14px] font-medium text-[#1D1D1F] mt-4 inline-block hover:underline"
                    >
                      View on GitHub →
                    </a>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Navigation — arrows + dot indicators */}
      <div className="flex items-center justify-center gap-4 mt-6">
        <button
          onClick={prev}
          className="flex h-11 w-11 items-center justify-center rounded-full bg-[#F5F5F7] border border-[#E8E8ED] hover:border-[#D2D2D7] transition-colors duration-200"
          aria-label="Previous project"
        >
          <ChevronLeft className="h-5 w-5 text-[#1D1D1F]" />
        </button>

        <div className="flex items-center gap-2">
          {projects.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`h-2 w-2 rounded-full transition-colors duration-200 ${
                i === activeIndex ? 'bg-[#1D1D1F]' : 'bg-[#D2D2D7]'
              }`}
              aria-label={`Go to project ${i + 1}`}
            />
          ))}
        </div>

        <button
          onClick={next}
          className="flex h-11 w-11 items-center justify-center rounded-full bg-[#F5F5F7] border border-[#E8E8ED] hover:border-[#D2D2D7] transition-colors duration-200"
          aria-label="Next project"
        >
          <ChevronRight className="h-5 w-5 text-[#1D1D1F]" />
        </button>
      </div>
    </div>
  );
}
