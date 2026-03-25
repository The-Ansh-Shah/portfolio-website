'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navItems = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  const [activeSection, setActiveSection] = useState('hero');
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!isHomePage) return;

    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, [isHomePage]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setMobileMenuOpen(false);

    if (href.startsWith('#')) {
      if (!isHomePage) return;

      e.preventDefault();
      const targetId = href.replace('#', '');
      const element = document.getElementById(targetId);

      if (element) {
        const offsetTop = element.offsetTop - 48;
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth',
        });
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
        scrolled
          ? 'glass-nav shadow-sm'
          : 'bg-transparent'
      )}
    >
      <div className="mx-auto flex h-12 max-w-content items-center justify-between px-6">
        <Link
          href="/"
          className="text-base font-medium text-text-primary transition-colors duration-200 hover:text-text-secondary"
        >
          Ansh Shah
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item) => {
            const isHashLink = item.href.startsWith('#');
            const isActive = isHomePage && isHashLink && activeSection === item.href.replace('#', '');
            const actualHref = isHashLink && !isHomePage ? `/${item.href}` : item.href;

            return (
              <li key={item.href}>
                {isHashLink ? (
                  isHomePage ? (
                    <a
                      href={item.href}
                      onClick={(e) => handleClick(e, item.href)}
                      className={cn(
                        'relative text-xs font-normal transition-colors duration-200',
                        isActive
                          ? 'text-text-primary'
                          : 'text-text-secondary hover:text-text-primary'
                      )}
                    >
                      {item.name}
                      {isActive && (
                        <motion.span
                          layoutId="navbar-indicator"
                          className="absolute -bottom-[14px] left-0 right-0 h-[2px] bg-text-primary rounded-full"
                          transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                        />
                      )}
                    </a>
                  ) : (
                    <Link
                      href={actualHref}
                      className="text-xs font-normal text-text-secondary transition-colors duration-200 hover:text-text-primary"
                    >
                      {item.name}
                    </Link>
                  )
                ) : (
                  <Link
                    href={item.href}
                    className="text-xs font-normal text-text-secondary transition-colors duration-200 hover:text-text-primary"
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-text-primary hover:text-text-secondary transition-colors duration-200"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
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
                const isActive = isHomePage && isHashLink && activeSection === item.href.replace('#', '');
                const actualHref = isHashLink && !isHomePage ? `/${item.href}` : item.href;

                return (
                  <li key={item.href}>
                    {isHashLink ? (
                      isHomePage ? (
                        <a
                          href={item.href}
                          onClick={(e) => handleClick(e, item.href)}
                          className={cn(
                            'block px-4 py-2.5 rounded-btn-sm text-sm transition-all duration-200',
                            isActive
                              ? 'bg-bg-secondary text-text-primary font-medium'
                              : 'text-text-secondary hover:bg-bg-secondary hover:text-text-primary'
                          )}
                        >
                          {item.name}
                        </a>
                      ) : (
                        <Link
                          href={actualHref}
                          onClick={() => setMobileMenuOpen(false)}
                          className="block px-4 py-2.5 rounded-btn-sm text-sm text-text-secondary hover:bg-bg-secondary hover:text-text-primary transition-all duration-200"
                        >
                          {item.name}
                        </Link>
                      )
                    ) : (
                      <Link
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block px-4 py-2.5 rounded-btn-sm text-sm text-text-secondary hover:bg-bg-secondary hover:text-text-primary transition-all duration-200"
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
