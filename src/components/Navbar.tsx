'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Home, User, Mail } from 'lucide-react';

const navItems = [
  { icon: Home, href: '/', label: 'Home' },
  { icon: User, href: '/#about', label: 'About' },
];

const mailItem = { icon: Mail, href: 'mailto:ansh_shah@berkeley.edu', label: 'Email' };

export default function Navbar() {
  const pathname = usePathname();

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('/#')) {
      e.preventDefault();
      const id = href.replace('/#', '');
      if (pathname !== '/') {
        window.location.href = href;
        return;
      }
      const el = document.getElementById(id);
      if (el) {
        window.scrollTo({ top: el.offsetTop - 20, behavior: 'smooth' });
      }
    }
  };

  const renderIcon = (item: typeof navItems[0]) => {
    const Icon = item.icon;
    const isActive = item.href === '/' ? pathname === '/' : false;

    const className = `flex h-[44px] w-[44px] items-center justify-center rounded-full transition-all duration-200 ${
      isActive
        ? 'bg-[#1D1D1F] text-white'
        : 'text-[#86868B] hover:bg-[#EDEDF0] hover:text-[#1D1D1F]'
    }`;

    if (item.href.startsWith('/#')) {
      return (
        <a
          key={item.label}
          href={item.href}
          onClick={(e) => handleScrollTo(e, item.href)}
          className={className}
          aria-label={item.label}
        >
          <Icon className="h-[18px] w-[18px]" />
        </a>
      );
    }

    return (
      <Link key={item.label} href={item.href} className={className} aria-label={item.label}>
        <Icon className="h-[18px] w-[18px]" />
      </Link>
    );
  };

  const renderMailIcon = () => {
    const Icon = mailItem.icon;
    const className = `flex h-[44px] w-[44px] items-center justify-center rounded-full transition-all duration-200 text-[#86868B] hover:bg-[#EDEDF0] hover:text-[#1D1D1F]`;

    return (
      <a key={mailItem.label} href={mailItem.href} className={className} aria-label={mailItem.label}>
        <Icon className="h-[18px] w-[18px]" />
      </a>
    );
  };

  return (
    <>
      {/* Desktop floating pill — left side */}
      <motion.nav
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.3, ease: 'easeOut' }}
        className="fixed left-5 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col items-center gap-3 rounded-[32px] p-4 px-3"
        style={{
          background: 'rgba(245,245,247,0.88)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          border: '1px solid #D2D2D7',
        }}
      >
        {navItems.map((item) => renderIcon(item))}
        {/* Divider */}
        <div className="w-6 h-[1px] bg-[#D2D2D7] mx-auto my-1" />
        {renderMailIcon()}
      </motion.nav>

      {/* Mobile bottom bar — hidden above 768px */}
      <motion.nav
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.3 }}
        className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 flex md:hidden items-center gap-2 rounded-[28px] p-2"
        style={{
          background: 'rgba(245,245,247,0.88)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          border: '1px solid #D2D2D7',
        }}
      >
        {navItems.map((item) => renderIcon(item))}
        <div className="h-5 w-[1px] bg-[#D2D2D7] my-auto" />
        {renderMailIcon()}
      </motion.nav>
    </>
  );
}
