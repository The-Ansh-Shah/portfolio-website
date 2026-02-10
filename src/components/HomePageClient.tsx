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

      {/* Main content */}
      <div className="relative z-10">
        <HeroSection />
        <PipelineSeparator />
        <AboutSection />
        <PipelineSeparator />
        <ExperienceSection />
        <PipelineSeparator />
        <ProjectsSection />
        <PipelineSeparator />
        <SkillsSection />
        <PipelineSeparator />
        <ContactSection />
      </div>
    </div>
  );
}
