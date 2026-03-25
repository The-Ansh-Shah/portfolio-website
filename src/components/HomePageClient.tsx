'use client';

import { useEffect } from 'react';
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import ExperienceSection from './ExperienceSection';
import ProjectsSection from './ProjectsSection';
import SkillsSection from './SkillsSection';
import ContactSection from './ContactSection';

export default function HomePageClient() {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      setTimeout(() => {
        const targetId = hash.replace('#', '');
        const element = document.getElementById(targetId);
        if (element) {
          const offsetTop = element.offsetTop - 48;
          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth',
          });
        }
      }, 600);
    }
  }, []);

  return (
    <div className="bg-bg-primary">
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
    </div>
  );
}
