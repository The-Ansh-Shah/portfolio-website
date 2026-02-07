import HeroSection from '@/components/HeroSection';
import SectionContainer from '@/components/SectionContainer';
import ProjectGrid from '@/components/ProjectGrid';
import { getFeaturedProjects } from '@/lib/projects';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function HomePage() {
  const featuredProjects = getFeaturedProjects();

  return (
    <>
      <HeroSection />

      {featuredProjects.length > 0 && (
        <SectionContainer className="bg-white">
          <div className="mb-12 flex items-center justify-between">
            <div>
              <h2 className="mb-2 text-3xl font-bold text-primary-dark md:text-4xl">
                Featured Projects
              </h2>
              <p className="text-secondary">
                A selection of my recent work and side projects
              </p>
            </div>
            <Link
              href="/projects"
              className="group hidden items-center gap-2 text-sm font-medium text-primary-dark transition-colors hover:text-secondary md:inline-flex"
            >
              View all
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <ProjectGrid projects={featuredProjects.slice(0, 3)} />

          <div className="mt-8 flex justify-center md:hidden">
            <Link
              href="/projects"
              className="group inline-flex items-center gap-2 text-sm font-medium text-primary-dark transition-colors hover:text-secondary"
            >
              View all projects
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </SectionContainer>
      )}
    </>
  );
}
