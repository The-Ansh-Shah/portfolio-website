'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '@/lib/content';
import { sectionReveal, viewportOnce } from '@/lib/animations';
import { Mail, MapPin, Github, Linkedin, Phone, FileDown, Eye } from 'lucide-react';

// Phone number split into parts for security (reconstructed client-side)
const phoneParts = ['408', '207', '8992'];

const primaryContactMethods = [
  {
    icon: Mail,
    label: 'Email',
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
  },
  {
    icon: Github,
    label: 'GitHub',
    value: '@The-Ansh-Shah',
    href: personalInfo.github,
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: '/in/ansh-shah-eecs',
    href: personalInfo.linkedin,
  },
];

export default function ContactSection() {
  const [phoneRevealed, setPhoneRevealed] = useState(false);

  // Reconstruct phone number client-side
  const reconstructedPhone = `(${phoneParts[0]}) ${phoneParts[1]}-${phoneParts[2]}`;

  return (
    <section id="contact" className="relative bg-accent/5 py-20 md:py-32">
      <div className="container mx-auto max-w-4xl px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={sectionReveal}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
            Get in Touch
          </h2>
          <div className="mx-auto mb-4 h-1 w-20 rounded-full bg-muted"></div>
          <p className="text-muted">
            Let's connect and build something great
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Primary Contact Methods */}
          {primaryContactMethods.map((method, index) => (
            <motion.a
              key={method.label}
              href={method.href}
              target={method.href.startsWith('http') ? '_blank' : undefined}
              rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -4, scale: 1.02 }}
              className="group flex items-center gap-4 rounded-2xl border border-accent/30 bg-accent/10 p-6 backdrop-blur-sm transition-all"
            >
              <div className="rounded-lg bg-muted/20 p-3 transition-colors group-hover:bg-muted/30">
                <method.icon className="h-6 w-6 text-muted" />
              </div>
              <div>
                <p className="mb-1 text-sm font-medium text-secondary">
                  {method.label}
                </p>
                <p className="font-semibold text-white group-hover:text-muted transition-colors">
                  {method.value}
                </p>
              </div>
            </motion.a>
          ))}

          {/* Phone Number - Reveal on Click */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ delay: 0.3 }}
            className="group flex items-center gap-4 rounded-2xl border border-accent/30 bg-accent/10 p-6 backdrop-blur-sm transition-all"
          >
            <div className="rounded-lg bg-muted/20 p-3 transition-colors group-hover:bg-muted/30">
              <Phone className="h-6 w-6 text-muted" />
            </div>
            <div className="flex-1">
              <p className="mb-1 text-sm font-medium text-secondary">
                Phone
              </p>
              {phoneRevealed ? (
                <a
                  href={`tel:${phoneParts.join('')}`}
                  className="font-semibold text-white hover:text-muted transition-colors"
                >
                  {reconstructedPhone}
                </a>
              ) : (
                <button
                  onClick={() => setPhoneRevealed(true)}
                  className="flex items-center gap-2 text-sm font-medium text-muted hover:text-white transition-colors"
                >
                  <Eye className="h-4 w-4" />
                  Reveal Contact
                </button>
              )}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ delay: 0.4 }}
          className="mt-12 rounded-2xl bg-gradient-to-br from-accent to-secondary p-8 text-center md:p-12"
        >
          <MapPin className="mx-auto mb-4 h-8 w-8 text-white" />
          <h3 className="mb-2 text-xl font-bold text-white">Based in {personalInfo.location}</h3>
          <p className="mb-6 text-muted">
            Open to internship opportunities and collaboration
          </p>
          <a
            href={`mailto:${personalInfo.email}`}
            className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-medium text-primary-dark transition-all hover:bg-white/90 hover:shadow-lg"
          >
            <Mail className="h-4 w-4" />
            Send me an email
          </a>
        </motion.div>
      </div>

      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute right-1/4 bottom-1/4 h-96 w-96 rounded-full bg-accent blur-3xl"></div>
      </div>
    </section>
  );
}
