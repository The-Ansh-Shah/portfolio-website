'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Home, User, Mail } from 'lucide-react';

const navItems = [
  { icon: Home, href: '/', label: 'Home' },
  { icon: User, href: '/resume', label: 'Resume' },
  { icon: Mail, href: 'mailto:ansh_shah@berkeley.edu', label: 'Email' },
];

export default function Navbar() {
  const pathname = usePathname();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const el = document.getElementById(href.replace('#', ''));
      if (el) {
        window.scrollTo({ top: el.offsetTop - 20, behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      {/* Desktop floating pill — left side */}
      <motion.nav
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.3, ease: 'easeOut' }}
        className="fixed left-4 lg:left-5 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col gap-2.5 glass-pill border border-border rounded-[28px] p-2.5"
      >
        {navItems.map((item, i) => {
          const Icon = item.icon;
          const isActive = item.href === '/' && pathname === '/';
          const isExternal = item.href.startsWith('mailto:');

          const className = `flex h-9 w-9 items-center justify-center rounded-full transition-all duration-200 ${
            isActive
              ? 'bg-text-primary text-white'
              : 'text-text-muted hover:bg-bg-card-hover hover:text-text-primary'
          }`;

          const divider = i === 1 ? (
            <div key="divider" className="w-[1px] h-[20px] bg-border-hover mx-auto" />
          ) : null;

          const element = isExternal ? (
            <a key={item.label} href={item.href} className={className} aria-label={item.label}>
              <Icon className="h-4 w-4" />
            </a>
          ) : item.href.startsWith('#') ? (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleClick(e, item.href)}
              className={className}
              aria-label={item.label}
            >
              <Icon className="h-4 w-4" />
            </a>
          ) : (
            <Link key={item.label} href={item.href} className={className} aria-label={item.label}>
              <Icon className="h-4 w-4" />
            </Link>
          );

          return divider ? [divider, element] : element;
        })}
      </motion.nav>

      {/* Mobile bottom bar */}
      <motion.nav
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.3 }}
        className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 flex md:hidden gap-2 glass-pill border border-border rounded-[28px] p-2"
      >
        {navItems.map((item, i) => {
          const Icon = item.icon;
          const isActive = item.href === '/' && pathname === '/';
          const isExternal = item.href.startsWith('mailto:');

          const className = `flex h-9 w-9 items-center justify-center rounded-full transition-all duration-200 ${
            isActive
              ? 'bg-text-primary text-white'
              : 'text-text-muted hover:bg-bg-card-hover hover:text-text-primary'
          }`;

          const divider = i === 1 ? (
            <div key="divider-mobile" className="h-[1px] w-[20px] bg-border-hover my-auto md:w-[1px] md:h-[20px]" />
          ) : null;

          const element = isExternal ? (
            <a key={item.label} href={item.href} className={className} aria-label={item.label}>
              <Icon className="h-4 w-4" />
            </a>
          ) : item.href.startsWith('#') ? (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleClick(e, item.href)}
              className={className}
              aria-label={item.label}
            >
              <Icon className="h-4 w-4" />
            </a>
          ) : (
            <Link key={item.label} href={item.href} className={className} aria-label={item.label}>
              <Icon className="h-4 w-4" />
            </Link>
          );

          return divider ? [divider, element] : element;
        })}
      </motion.nav>
    </>
  );
}
