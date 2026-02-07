import { ProjectMeta } from '@/lib/projects';
import ProjectCard from './ProjectCard';

interface ProjectGridProps {
  projects: ProjectMeta[];
}

export default function ProjectGrid({ projects }: ProjectGridProps) {
  if (projects.length === 0) {
    return (
      <div className="flex min-h-[400px] items-center justify-center">
        <p className="text-secondary">No projects found.</p>
      </div>
    );
  }

  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project, index) => (
        <ProjectCard key={project.slug} project={project} index={index} />
      ))}
    </div>
  );
}
