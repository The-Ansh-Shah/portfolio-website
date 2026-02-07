import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface ProjectMeta {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  image?: string;
  links?: {
    github?: string;
    demo?: string;
    website?: string;
  };
  date?: string;
  featured?: boolean;
}

const projectsDirectory = path.join(process.cwd(), 'content/projects');

export function getAllProjects(): ProjectMeta[] {
  try {
    const fileNames = fs.readdirSync(projectsDirectory);
    const allProjectsData = fileNames
      .filter((fileName) => fileName.endsWith('.mdx'))
      .map((fileName) => {
        const slug = fileName.replace(/\.mdx$/, '');
        const fullPath = path.join(projectsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const { data } = matter(fileContents);

        return {
          slug,
          ...(data as Omit<ProjectMeta, 'slug'>),
        };
      });

    return allProjectsData.sort((a, b) => {
      if (a.date && b.date) {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      }
      return 0;
    });
  } catch (error) {
    console.error('Error reading projects:', error);
    return [];
  }
}

export function getProjectBySlug(slug: string): {
  meta: ProjectMeta;
  content: string;
} | null {
  try {
    const fullPath = path.join(projectsDirectory, `${slug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      meta: {
        slug,
        ...(data as Omit<ProjectMeta, 'slug'>),
      },
      content,
    };
  } catch (error) {
    console.error(`Error reading project ${slug}:`, error);
    return null;
  }
}

export function getFeaturedProjects(): ProjectMeta[] {
  const allProjects = getAllProjects();
  return allProjects.filter((project) => project.featured);
}
