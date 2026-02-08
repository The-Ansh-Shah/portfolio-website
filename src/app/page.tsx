import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ExperienceSection from '@/components/ExperienceSection';
import ProjectsSection from '@/components/ProjectsSection';
import SkillsSection from '@/components/SkillsSection';
import ContactSection from '@/components/ContactSection';
import PipelineSeparator from '@/components/PipelineSeparator';

export default function HomePage() {
  return (
    <>
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
    </>
  );
}
