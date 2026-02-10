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
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
  { name: 'Resume', href: '/resume' },
];

export default function Navbar() {
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  const [activeSection, setActiveSection] = useState('hero');
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Track scroll position for styling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection Observer to track active section (home page only)
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

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, [isHomePage]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setMobileMenuOpen(false);

    // Only intercept hash links for smooth scrolling on home page
    if (href.startsWith('#')) {
      // If we're on resume page, navigate to home first, then scroll
      if (!isHomePage) {
        // Let Next.js handle navigation with transition
        return;
      }

      e.preventDefault();
      const targetId = href.replace('#', '');
      const element = document.getElementById(targetId);

      if (element) {
        const offsetTop = element.offsetTop - 80;
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth',
        });
      }
    }
    // Non-hash links (/, /resume) use default Next.js navigation with transition
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={cn(
        'sticky top-0 z-50 w-full border-b transition-all duration-300',
        scrolled
          ? 'border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_8px_32px_0_rgba(146,144,195,0.15)]'
          : 'border-white/5 bg-white/3 backdrop-blur-lg'
      )}
      style={{
        background: scrolled
          ? 'linear-gradient(to bottom, rgba(146, 144, 195, 0.12), rgba(83, 92, 145, 0.08))'
          : 'linear-gradient(to bottom, rgba(146, 144, 195, 0.08), rgba(83, 92, 145, 0.04))',
      }}
    >
      <div className="container mx-auto flex h-16 max-w-6xl items-center justify-between px-4 md:px-6">
        <Link
          href="/"
          className="text-xl font-bold text-white transition-colors hover:text-muted"
        >
          Ansh.dev
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => {
            const isHashLink = item.href.startsWith('#');
            const isActive = isHomePage && isHashLink && activeSection === item.href.replace('#', '');
            const isPdfLink = item.href.endsWith('.pdf');
            // Convert hash links to full paths when on resume page
            const actualHref = isHashLink && !isHomePage ? `/${item.href}` : item.href;

            return (
              <li key={item.href}>
                {isHashLink ? (
                  isHomePage ? (
                    <a
                      href={item.href}
                      onClick={(e) => handleClick(e, item.href)}
                      className={cn(
                        'relative text-sm font-medium transition-colors',
                        isActive
                          ? 'text-white'
                          : 'text-muted hover:text-white'
                      )}
                    >
                      {item.name}
                      {isActive && (
                        <motion.span
                          layoutId="navbar-indicator"
                          className="absolute -bottom-[21px] left-0 right-0 h-0.5 bg-muted"
                          transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                        />
                      )}
                    </a>
                  ) : (
                    <Link
                      href={actualHref}
                      className="text-sm font-medium text-muted transition-colors hover:text-white"
                    >
                      {item.name}
                    </Link>
                  )
                ) : isPdfLink ? (
                  <a
                    href={item.href}
                    download
                    className="text-sm font-medium text-muted transition-colors hover:text-white"
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link
                    href={item.href}
                    className={cn(
                      'text-sm font-medium transition-colors',
                      item.href === '/resume' && !isHomePage
                        ? 'text-white'
                        : 'text-muted hover:text-white'
                    )}
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
          className="lg:hidden p-2 text-white hover:text-muted transition-colors"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
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
            className="lg:hidden border-t border-white/10 bg-accent/10 backdrop-blur-xl overflow-hidden"
          >
            <ul className="container mx-auto max-w-6xl px-4 py-4 space-y-2">
              {navItems.map((item) => {
                const isHashLink = item.href.startsWith('#');
                const isActive = isHomePage && isHashLink && activeSection === item.href.replace('#', '');
                const isPdfLink = item.href.endsWith('.pdf');
                const actualHref = isHashLink && !isHomePage ? `/${item.href}` : item.href;

                return (
                  <li key={item.href}>
                    {isHashLink ? (
                      isHomePage ? (
                        <a
                          href={item.href}
                          onClick={(e) => handleClick(e, item.href)}
                          className={cn(
                            'block px-4 py-3 rounded-lg text-sm font-medium transition-all',
                            isActive
                              ? 'bg-muted/20 text-white'
                              : 'text-muted hover:bg-white/5 hover:text-white'
                          )}
                        >
                          {item.name}
                        </a>
                      ) : (
                        <Link
                          href={actualHref}
                          onClick={() => setMobileMenuOpen(false)}
                          className="block px-4 py-3 rounded-lg text-sm font-medium text-muted hover:bg-white/5 hover:text-white transition-all"
                        >
                          {item.name}
                        </Link>
                      )
                    ) : isPdfLink ? (
                      <a
                        href={item.href}
                        download
                        onClick={() => setMobileMenuOpen(false)}
                        className="block px-4 py-3 rounded-lg text-sm font-medium text-muted hover:bg-white/5 hover:text-white transition-all"
                      >
                        {item.name}
                      </a>
                    ) : (
                      <Link
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={cn(
                          'block px-4 py-3 rounded-lg text-sm font-medium transition-all',
                          item.href === '/resume' && !isHomePage
                            ? 'bg-muted/20 text-white'
                            : 'text-muted hover:bg-white/5 hover:text-white'
                        )}
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
