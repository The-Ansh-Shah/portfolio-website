'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navItems = [
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'About', href: '#about' },
  { name: 'Resume', href: '/resume' },
];

export default function Navbar() {
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setMobileMenuOpen(false);
    if (href.startsWith('#')) {
      if (!isHomePage) return;
      e.preventDefault();
      const el = document.getElementById(href.replace('#', ''));
      if (el) {
        const offsetTop = el.offsetTop - 56;
        window.scrollTo({ top: offsetTop, behavior: 'smooth' });
      }
    }
  };

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-300',
        scrolled ? 'glass-nav' : 'bg-transparent'
      )}
    >
      <div className="mx-auto flex h-14 max-w-content items-center justify-between px-6">
        <Link
          href="/"
          className="text-sm font-semibold text-text-primary transition-colors duration-200 hover:text-text-secondary"
        >
          Ansh Shah
        </Link>

        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item) => {
            const isHashLink = item.href.startsWith('#');
            const actualHref = isHashLink && !isHomePage ? `/${item.href}` : item.href;

            return (
              <li key={item.href}>
                {isHashLink ? (
                  isHomePage ? (
                    <a
                      href={item.href}
                      onClick={(e) => handleClick(e, item.href)}
                      className="text-xs text-text-secondary transition-colors duration-200 hover:text-text-primary"
                    >
                      {item.name}
                    </a>
                  ) : (
                    <Link
                      href={actualHref}
                      className="text-xs text-text-secondary transition-colors duration-200 hover:text-text-primary"
                    >
                      {item.name}
                    </Link>
                  )
                ) : (
                  <Link
                    href={item.href}
                    className={cn(
                      'text-xs transition-colors duration-200',
                      pathname === item.href
                        ? 'text-text-primary'
                        : 'text-text-secondary hover:text-text-primary'
                    )}
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-text-primary"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t border-border bg-bg-primary/95 backdrop-blur-xl overflow-hidden"
          >
            <ul className="mx-auto max-w-content px-6 py-3 space-y-1">
              {navItems.map((item) => {
                const isHashLink = item.href.startsWith('#');
                const actualHref = isHashLink && !isHomePage ? `/${item.href}` : item.href;

                return (
                  <li key={item.href}>
                    {isHashLink ? (
                      isHomePage ? (
                        <a
                          href={item.href}
                          onClick={(e) => handleClick(e, item.href)}
                          className="block px-4 py-2.5 rounded-btn-sm text-sm text-text-secondary hover:bg-bg-card hover:text-text-primary transition-all duration-200"
                        >
                          {item.name}
                        </a>
                      ) : (
                        <Link
                          href={actualHref}
                          onClick={() => setMobileMenuOpen(false)}
                          className="block px-4 py-2.5 rounded-btn-sm text-sm text-text-secondary hover:bg-bg-card hover:text-text-primary transition-all duration-200"
                        >
                          {item.name}
                        </Link>
                      )
                    ) : (
                      <Link
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block px-4 py-2.5 rounded-btn-sm text-sm text-text-secondary hover:bg-bg-card hover:text-text-primary transition-all duration-200"
                      >
                        {item.name}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
