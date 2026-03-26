'use client';

import { personalInfo } from '@/lib/content';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#F5F5F7] dark:bg-[#1C1C1E] border-t border-[#E8E8ED] dark:border-[#2C2C2E] px-6 py-8 md:px-14 md:py-10">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
        {/* Left side */}
        <div>
          <span className="text-[11px] uppercase tracking-[0.08em] text-[#86868B] font-medium">
            Let&apos;s talk
          </span>
          <a
            href={`mailto:${personalInfo.email}`}
            className="block mt-2 text-[18px] font-medium text-[#1D1D1F] dark:text-[#F5F5F7] hover:underline"
          >
            {personalInfo.email}
          </a>
          <div className="flex items-center gap-3 mt-2">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[13px] text-[#86868B] hover:text-[#1D1D1F] dark:hover:text-[#F5F5F7] transition-colors duration-200"
            >
              GitHub
            </a>
            <span className="text-[#86868B]">·</span>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[13px] text-[#86868B] hover:text-[#1D1D1F] dark:hover:text-[#F5F5F7] transition-colors duration-200"
            >
              LinkedIn
            </a>
          </div>
        </div>

        {/* Right side */}
        <div className="text-right">
          <p className="text-[11px] text-[#86868B]">&copy; 2026 {personalInfo.name}</p>
          <button
            onClick={scrollToTop}
            className="mt-1 text-[11px] text-[#86868B] hover:text-[#1D1D1F] dark:hover:text-[#F5F5F7] transition-colors duration-200 cursor-pointer"
          >
            Back to top ↑
          </button>
        </div>
      </div>
    </footer>
  );
}
