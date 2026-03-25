'use client';

import { experience } from '@/lib/content';
import ExperienceCard from './ExperienceCard';
import AnimatedSection from './AnimatedSection';
import { sectionReveal } from '@/lib/animations';

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 md:py-32 bg-bg-primary">
      <div className="mx-auto max-w-content px-6">
        <AnimatedSection variants={sectionReveal} className="mb-16 text-center">
          <h2 className="text-h2 text-text-primary">
            Experience
          </h2>
        </AnimatedSection>

        <div className="grid gap-6 md:grid-cols-2">
          {experience.map((exp, index) => (
            <ExperienceCard key={exp.id} experience={exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
