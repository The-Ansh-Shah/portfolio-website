'use client';

import { useEffect, Suspense } from 'react';
import dynamic from 'next/dynamic';
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import ExperienceSection from './ExperienceSection';
import ProjectsSection from './ProjectsSection';
import SkillsSection from './SkillsSection';
import ContactSection from './ContactSection';
import PipelineSeparator from './PipelineSeparator';

// Lazy-load the starry background
const StarryBackground = dynamic(() => import('./StarryBackground'), {
  ssr: false,
  loading: () => null,
});

export default function HomePageClient() {
  useEffect(() => {
    // Handle hash scrolling after navigation from resume page
    const hash = window.location.hash;
    if (hash) {
      // Wait for page transition to complete
      setTimeout(() => {
        const targetId = hash.replace('#', '');
        const element = document.getElementById(targetId);
        if (element) {
          const offsetTop = element.offsetTop - 80;
          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth',
          });
        }
      }, 600); // Wait for slide transition (500ms) + buffer
    }
  }, []);

  return (
    <div className="relative">
      {/* Starry background with shooting stars */}
      <Suspense fallback={null}>
        <StarryBackground />
      </Suspense>

      {/* Subtle gradient overlay that changes with scroll */}
      <div className="fixed inset-0 z-[1] pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-[#5a3d2a]/30 via-[#6F4E37]/20 via-[#8a6548]/30 to-[#A67B5B]/40" />
      </div>

      {/* Main content */}
      <div className="relative z-10">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </div>
    </div>
  );
}
