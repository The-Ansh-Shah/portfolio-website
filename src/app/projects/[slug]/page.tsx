import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';
import { getAllProjects, getProjectBySlug } from '@/lib/projects';
import SectionContainer from '@/components/SectionContainer';
import { MDXRemote } from 'next-mdx-remote/rsc';

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const projects = getAllProjects();
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const projectData = getProjectBySlug(slug);

  if (!projectData) {
    notFound();
  }

  const { meta, content } = projectData;

  return (
    <>
      <SectionContainer className="pt-24">
        <div className="mb-8">
          <Link
            href="/projects"
            className="group inline-flex items-center gap-2 text-sm font-medium text-secondary transition-colors hover:text-primary-dark"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Back to Projects
          </Link>
        </div>

        <div className="mb-8">
          <h1 className="mb-4 text-4xl font-bold text-primary-dark md:text-5xl">
            {meta.title}
          </h1>
          <p className="mb-6 text-lg text-secondary">{meta.description}</p>

          <div className="mb-6 flex flex-wrap gap-2">
            {meta.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-secondary-lighter px-4 py-1.5 text-sm font-medium text-secondary"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-4">
            {meta.links?.github && (
              <a
                href={meta.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-primary-dark px-6 py-2.5 text-sm font-medium text-white transition-all hover:bg-primary-dark/90 hover:shadow-lg"
              >
                <Github className="h-4 w-4" />
                View Code
              </a>
            )}
            {meta.links?.demo && (
              <a
                href={meta.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-primary-dark/20 px-6 py-2.5 text-sm font-medium text-primary-dark transition-all hover:border-primary-dark/40 hover:bg-secondary-lighter/50"
              >
                <ExternalLink className="h-4 w-4" />
                Live Demo
              </a>
            )}
            {meta.links?.website && (
              <a
                href={meta.links.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-primary-dark/20 px-6 py-2.5 text-sm font-medium text-primary-dark transition-all hover:border-primary-dark/40 hover:bg-secondary-lighter/50"
              >
                <ExternalLink className="h-4 w-4" />
                Visit Website
              </a>
            )}
          </div>
        </div>

        {meta.image && (
          <div className="relative mb-12 aspect-video w-full overflow-hidden rounded-2xl border border-secondary-lighter/50 bg-secondary-lighter/30">
            <Image
              src={meta.image}
              alt={meta.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}

        <article className="prose prose-lg prose-slate max-w-none">
          <MDXRemote source={content} />
        </article>
      </SectionContainer>
    </>
  );
}
