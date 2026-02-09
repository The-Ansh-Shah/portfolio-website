'use client';

import { motion } from 'framer-motion';
import { resumeData } from '@/lib/resumeData';
import { sectionReveal, viewportOnce } from '@/lib/animations';
import TimelineItem from './TimelineItem';

export default function ResumeExperience() {
  return (
    <section className="py-16 md:py-20">
      <div className="container mx-auto max-w-4xl px-6">
        {/* Section header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={sectionReveal}
          className="mb-10"
        >
          <h2 className="mb-2 text-2xl font-bold text-white md:text-3xl">Experience</h2>
          <div className="h-0.5 w-16 rounded-full bg-muted/40" />
        </motion.div>

        {/* Timeline */}
        <div>
          {resumeData.experience.map((exp, index) => (
            <TimelineItem
              key={exp.id}
              date={`${exp.startDate} — ${exp.endDate}`}
              title={exp.role}
              subtitle={`${exp.organization}${exp.department ? ` · ${exp.department}` : ''}`}
              location={exp.location}
              isLast={index === resumeData.experience.length - 1}
            >
              {/* Bullets */}
              <ul className="space-y-2">
                {exp.bullets.map((bullet, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={viewportOnce}
                    transition={{ duration: 0.3, delay: i * 0.1 }}
                    className="flex items-start gap-2 text-sm text-muted/80"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-muted/50" />
                    {bullet}
                  </motion.li>
                ))}
              </ul>

              {/* Tech tags */}
              <div className="mt-3 flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-accent/20 px-2.5 py-0.5 text-xs font-medium text-muted/70 border border-accent/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </TimelineItem>
          ))}
        </div>
      </div>
    </section>
  );
}
