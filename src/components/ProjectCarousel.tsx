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
    if (diff === 1) return 'next';
    if (diff === total - 1) return 'prev';
    return 'hidden';
  };

  return (
    <div className="relative">
      {/* Mobile: simple horizontal scroll */}
      <div className="md:hidden flex gap-4 overflow-x-auto snap-x snap-mandatory px-6 no-scrollbar">
        {projects.map((project) => (
          <div key={project.id} className="w-[85vw] flex-shrink-0 snap-start rounded-[20px] bg-[#F5F5F7] dark:bg-[#1C1C1E] border border-[#E8E8ED] dark:border-[#2C2C2E] overflow-hidden">
            {project.thumbnail && (
              <div className="relative w-full h-[200px]">
                <Image src={project.thumbnail} alt={project.title} fill className="object-cover" sizes="85vw" />
              </div>
            )}
            <div className="p-6">
              <span className="text-[13px] text-[#86868B]">{project.date}</span>
              <h3 className="text-[20px] font-semibold text-[#1D1D1F] dark:text-[#F5F5F7] mt-1">{project.title}</h3>
              <p className="text-[15px] text-[#86868B] mt-2">{project.description}</p>
              <p className="text-[13px] text-[#B0B0B4] mt-3">{project.technologies.join(' · ')}</p>
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-[14px] font-medium text-[#1D1D1F] dark:text-[#F5F5F7] mt-4 inline-block hover:underline">
                  View on GitHub →
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Desktop: peek carousel */}
      <div className="hidden md:block">
        <div className="relative overflow-hidden w-full h-[520px]">
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
              transform = 'translateX(-92%) scale(0.93)';
              opacity = 0.45;
              zIndex = 5;
            } else if (position === 'next') {
              transform = 'translateX(-8%) scale(0.93)';
              opacity = 0.45;
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
                  width: '78%',
                  height: '100%',
                  transform,
                  opacity,
                  zIndex,
                  transition: 'transform 0.5s cubic-bezier(0.25, 0.1, 0.25, 1), opacity 0.5s cubic-bezier(0.25, 0.1, 0.25, 1)',
                  pointerEvents: position === 'active' ? 'auto' : 'none',
                }}
              >
                <div className="h-full rounded-[24px] bg-[#F5F5F7] dark:bg-[#1C1C1E] border border-[#E8E8ED] dark:border-[#2C2C2E] overflow-hidden flex flex-row">
                  {project.thumbnail && (
                    <div
                      className="relative w-[55%] h-full flex-shrink-0 overflow-hidden cursor-crosshair"
                      onMouseMove={(e) => {
                        const rect = e.currentTarget.getBoundingClientRect();
                        const x = (e.clientX - rect.left) / rect.width - 0.5;
                        const y = (e.clientY - rect.top) / rect.height - 0.5;
                        const img = e.currentTarget.querySelector('img');
                        if (img) {
                          img.style.transform = `scale(1.05) translate(${-x * 10}px, ${-y * 10}px)`;
                        }
                      }}
                      onMouseLeave={(e) => {
                        const img = e.currentTarget.querySelector('img');
                        if (img) {
                          img.style.transform = 'scale(1) translate(0, 0)';
                        }
                      }}
                    >
                      <Image
                        src={project.thumbnail}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-300 ease-out"
                        sizes="45vw"
                      />
                    </div>
                  )}

                  <div className="flex-1 flex flex-col justify-center p-12">
                    <span className="text-[13px] text-[#86868B]">{project.date}</span>
                    <h3 className="text-[clamp(24px,3vw,32px)] font-semibold text-[#1D1D1F] dark:text-[#F5F5F7] leading-[1.15] tracking-tight mt-2">
                      {project.title}
                    </h3>
                    <p className="text-[16px] text-[#86868B] leading-[1.6] mt-4 max-w-[400px]">
                      {project.description}
                    </p>
                    <p className="text-[14px] text-[#B0B0B4] mt-4">
                      {project.technologies.join(' · ')}
                    </p>
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[15px] font-medium text-[#1D1D1F] dark:text-[#F5F5F7] mt-6 inline-block hover:underline"
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

        {/* Navigation — arrows + dots */}
        <div className="flex items-center justify-center gap-5 mt-8">
          <button
            onClick={prev}
            className="flex h-12 w-12 items-center justify-center rounded-full bg-[#F5F5F7] dark:bg-[#1C1C1E] border border-[#E8E8ED] dark:border-[#2C2C2E] hover:border-[#D2D2D7] hover:bg-[#EDEDF0] dark:hover:bg-[#2C2C2E] transition-all duration-200"
            aria-label="Previous project"
          >
            <ChevronLeft className="h-5 w-5 text-[#1D1D1F] dark:text-[#F5F5F7]" />
          </button>

          <div className="flex items-center gap-2">
            {projects.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${
                  i === activeIndex ? 'bg-[#1D1D1F] dark:bg-[#F5F5F7] scale-110' : 'bg-[#D2D2D7]'
                }`}
                aria-label={`Go to project ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="flex h-12 w-12 items-center justify-center rounded-full bg-[#F5F5F7] dark:bg-[#1C1C1E] border border-[#E8E8ED] dark:border-[#2C2C2E] hover:border-[#D2D2D7] hover:bg-[#EDEDF0] dark:hover:bg-[#2C2C2E] transition-all duration-200"
            aria-label="Next project"
          >
            <ChevronRight className="h-5 w-5 text-[#1D1D1F] dark:text-[#F5F5F7]" />
          </button>
        </div>
      </div>
    </div>
  );
}