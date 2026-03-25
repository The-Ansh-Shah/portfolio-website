'use client';

import { useEffect } from 'react';
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import ProjectsSection from './ProjectsSection';
import SkillsSection from './SkillsSection';
import ExperienceSection from './ExperienceSection';
import BeyondTheLab from './BeyondTheLab';

export default function HomePageClient() {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      setTimeout(() => {
        const el = document.getElementById(hash.replace('#', ''));
        if (el) {
          window.scrollTo({ top: el.offsetTop - 56, behavior: 'smooth' });
        }
      }, 400);
    }
  }, []);

  return (
    <div className="bg-bg-primary">
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <ExperienceSection />
      <BeyondTheLab />
    </div>
  );
}
