'use client';

import { motion } from 'framer-motion';
import SectionContainer from '@/components/SectionContainer';
import { Code2, Palette, Rocket, Users } from 'lucide-react';

const skills = [
  {
    category: 'Frontend',
    items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vue.js'],
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'Redis'],
  },
  {
    category: 'Tools & Others',
    items: ['Git', 'Docker', 'AWS', 'CI/CD', 'Testing'],
  },
];

const values = [
  {
    icon: Code2,
    title: 'Clean Code',
    description:
      'Writing maintainable, well-documented code that stands the test of time.',
  },
  {
    icon: Palette,
    title: 'Design Focused',
    description:
      'Creating beautiful, intuitive interfaces that users love to interact with.',
  },
  {
    icon: Rocket,
    title: 'Performance',
    description:
      'Building fast, optimized applications that deliver exceptional user experiences.',
  },
  {
    icon: Users,
    title: 'Collaboration',
    description:
      'Working effectively with teams to bring ideas to life and solve complex problems.',
  },
];

export default function AboutPage() {
  return (
    <>
      <SectionContainer className="bg-gradient-to-b from-secondary-lighter/30 to-white pt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h1 className="mb-4 text-4xl font-bold text-primary-dark md:text-5xl">
            About Me
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-secondary">
            Passionate developer with a love for creating elegant solutions to
            complex problems
          </p>
        </motion.div>

        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-16 space-y-4 text-secondary"
          >
            <p className="text-lg">
              I'm a full-stack developer with over 5 years of experience
              building web applications. I specialize in creating modern,
              performant, and accessible solutions using the latest technologies.
            </p>
            <p className="text-lg">
              My journey in software development started with a curiosity about
              how websites work, and has evolved into a passion for creating
              exceptional digital experiences. I believe in writing clean,
              maintainable code and following best practices.
            </p>
            <p className="text-lg">
              When I'm not coding, you can find me contributing to open-source
              projects, writing technical articles, or exploring new technologies
              and frameworks.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16"
          >
            <h2 className="mb-8 text-2xl font-bold text-primary-dark">
              What I Value
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="rounded-xl border border-secondary-lighter/50 bg-white p-6"
                >
                  <div className="mb-4 inline-flex rounded-lg bg-secondary-lighter/50 p-3">
                    <value.icon className="h-6 w-6 text-primary-dark" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-primary-dark">
                    {value.title}
                  </h3>
                  <p className="text-sm text-secondary">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="mb-8 text-2xl font-bold text-primary-dark">
              Skills & Technologies
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              {skills.map((skillGroup, index) => (
                <motion.div
                  key={skillGroup.category}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  className="rounded-xl border border-secondary-lighter/50 bg-white p-6"
                >
                  <h3 className="mb-4 font-semibold text-primary-dark">
                    {skillGroup.category}
                  </h3>
                  <ul className="space-y-2">
                    {skillGroup.items.map((skill) => (
                      <li
                        key={skill}
                        className="flex items-center text-sm text-secondary"
                      >
                        <span className="mr-2 h-1.5 w-1.5 rounded-full bg-secondary-light" />
                        {skill}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </SectionContainer>
    </>
  );
}
