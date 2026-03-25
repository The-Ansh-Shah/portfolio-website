import type { Metadata } from 'next';
import ProjectsPageClient from './ProjectsPageClient';

export const metadata: Metadata = {
  title: 'Projects | Ansh Shah',
  description: 'Hardware engineering projects: RISC-V CPU design, embedded security research, and systems programming.',
};

export default function ProjectsPage() {
  return <ProjectsPageClient />;
}
