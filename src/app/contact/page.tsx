'use client';

import { motion } from 'framer-motion';
import SectionContainer from '@/components/SectionContainer';
import { Mail, Github, Linkedin, Twitter } from 'lucide-react';

const contactMethods = [
  {
    icon: Mail,
    label: 'Email',
    value: 'hello@example.com',
    href: 'mailto:hello@example.com',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: '@yourusername',
    href: 'https://github.com/yourusername',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'Your Name',
    href: 'https://linkedin.com/in/yourusername',
  },
  {
    icon: Twitter,
    label: 'Twitter',
    value: '@yourusername',
    href: 'https://twitter.com/yourusername',
  },
];

export default function ContactPage() {
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
            Get in Touch
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-secondary">
            Have a project in mind or just want to chat? Feel free to reach out
            through any of these channels.
          </p>
        </motion.div>

        <div className="mx-auto max-w-4xl">
          <div className="grid gap-6 md:grid-cols-2">
            {contactMethods.map((method, index) => (
              <motion.a
                key={method.label}
                href={method.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group flex items-center gap-4 rounded-xl border border-secondary-lighter/50 bg-white p-6 transition-all hover:border-secondary-light/50 hover:shadow-lg"
              >
                <div className="rounded-lg bg-secondary-lighter/50 p-3 transition-colors group-hover:bg-secondary-light/30">
                  <method.icon className="h-6 w-6 text-primary-dark" />
                </div>
                <div>
                  <p className="mb-1 text-sm font-medium text-secondary">
                    {method.label}
                  </p>
                  <p className="font-semibold text-primary-dark">
                    {method.value}
                  </p>
                </div>
              </motion.a>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 rounded-2xl bg-gradient-to-br from-primary-dark to-secondary p-8 text-white md:p-12"
          >
            <h2 className="mb-4 text-2xl font-bold">Let's work together</h2>
            <p className="mb-6 text-secondary-lighter">
              I'm always interested in hearing about new projects and
              opportunities. Whether you have a question or just want to say hi,
              I'll try my best to get back to you!
            </p>
            <a
              href="mailto:hello@example.com"
              className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-medium text-primary-dark transition-all hover:shadow-lg"
            >
              <Mail className="h-4 w-4" />
              Send me an email
            </a>
          </motion.div>
        </div>
      </SectionContainer>
    </>
  );
}
