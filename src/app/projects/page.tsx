import SectionContainer from '@/components/SectionContainer';
import ProjectGrid from '@/components/ProjectGrid';
import AnimatedSection from '@/components/AnimatedSection';
import { getAllProjects } from '@/lib/projects';

export default function ProjectsPage() {
  const projects = getAllProjects();

  return (
    <>
      <SectionContainer className="bg-gradient-to-b from-secondary-lighter/30 to-white pt-24">
        <AnimatedSection className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold text-primary-dark md:text-5xl">
            Projects
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-secondary">
            A collection of projects showcasing my skills in full-stack
            development, design, and problem-solving.
          </p>
        </AnimatedSection>

        <ProjectGrid projects={projects} />
      </SectionContainer>
    </>
  );
}
