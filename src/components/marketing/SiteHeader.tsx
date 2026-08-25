import React, { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { MenuIcon, XIcon, ArrowRightIcon, GraduationCap } from 'lucide-react';
import { ThemeMenu } from '../ThemeMenu';

const nav = [
  { to: '/how-it-works', label: 'How it works' },
  { to: '/features', label: 'Features' },
  { to: '/institutions', label: 'Institutions' },
  { to: '/for-institutions', label: 'For institutions' },
  { to: '/for-organizations', label: 'For organizations' },
  { to: '/roles', label: 'Roles' },
  { to: '/about', label: 'About' }
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  /* Listen for window scroll to update header appearance */
  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 12);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-surface/90 backdrop-blur-md border-b border-line shadow-sm'
          : 'bg-surface/70 backdrop-blur-sm border-b border-line/70'
      }`}
    >
      {/* Top subtle ambient light ray */}
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-brand/30 to-transparent opacity-70" />

      <div className="mx-auto flex h-16 max-w-[1240px] items-center justify-between gap-3 px-4 sm:px-6">
        {/* Main logo */}
        <Link
          to="/"
          className="group flex shrink-0 items-center gap-2.5 rounded-xl outline-none transition-transform duration-200 active:scale-95"
        >
          <span className="brand-gradient flex h-8 w-8 items-center justify-center rounded-xl text-white shadow-sm transition-transform duration-200 group-hover:scale-105">
            <GraduationCap className="h-5 w-5" aria-hidden="true" />
          </span>
          <span className="font-display text-[18px] font-extrabold tracking-tight text-ink">
            Uni<span className="text-brand">LK</span>
          </span>
        </Link>

        {/* Desktop navigation links */}
        <nav
          aria-label="Site Navigation"
          className="hidden items-center gap-0 lg:flex xl:gap-0.5"
          onMouseLeave={() => setHoveredNav(null)}
        >
          {nav.map((item) => {
            const isActive = location.pathname === item.to;
            const isHovered = hoveredNav === item.to;

            return (
              <NavLink
                key={item.to}
                to={item.to}
                onMouseEnter={() => setHoveredNav(item.to)}
                className={`relative rounded-lg px-2 py-1.5 text-[13px] font-medium transition-colors duration-200 xl:px-2.5 xl:text-sm ${
                  isActive
                    ? 'font-semibold text-brand'
                    : 'text-muted hover:text-ink'
                }`}
              >
                {/* Hover animation pill */}
                {isHovered && (
                  <motion.span
                    layoutId="hover-nav-indicator"
                    className="absolute inset-0 rounded-lg bg-surface-2 dark:bg-surface-2"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}

                <span className="relative z-10">{item.label}</span>
              </NavLink>
            );
          })}
        </nav>

        {/* Action buttons */}
        <div className="flex shrink-0 items-center gap-2 sm:gap-2.5">
          <ThemeMenu />
          <Link
            to="/register-institution"
            className="hidden rounded-lg border border-line px-3 py-1.5 text-xs font-semibold text-ink transition-all duration-200 hover:border-brand hover:text-brand md:block xl:px-3.5 xl:py-2 xl:text-sm"
          >
            Register institution
          </Link>
          <Link
            to="/today"
            className="brand-gradient group inline-flex items-center gap-1.5 rounded-lg px-3.5 py-1.5 text-xs font-semibold text-white shadow-sm transition-all duration-200 hover:opacity-95 active:scale-95 sm:px-4 sm:py-2 sm:text-sm"
          >
            <span>Explore UniLK</span>
            <ArrowRightIcon className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
          </Link>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-line bg-surface p-2 text-ink transition-colors hover:border-brand lg:hidden"
            aria-label="Toggle navigation menu"
          >
            {open ? (
              <XIcon className="h-5 w-5" aria-hidden="true" />
            ) : (
              <MenuIcon className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile drawer navigation */}
      <AnimatePresence>
        {open && (
          <motion.nav
            aria-label="Site (mobile)"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-line bg-surface shadow-xl lg:hidden"
          >
            <div className="px-5 py-4">
              <ul className="space-y-1">
                {nav.map((item, index) => {
                  const isActive = location.pathname === item.to;
                  return (
                    <motion.li
                      key={item.to}
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.03, duration: 0.2 }}
                    >
                      <NavLink
                        to={item.to}
                        onClick={() => setOpen(false)}
                        className={`flex items-center justify-between rounded-lg px-3.5 py-2.5 text-sm font-medium transition-all ${
                          isActive
                            ? 'font-semibold text-brand'
                            : 'text-ink hover:bg-surface-2'
                        }`}
                      >
                        <span>{item.label}</span>
                        {isActive && (
                          <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                        )}
                      </NavLink>
                    </motion.li>
                  );
                })}
              </ul>

              <div className="mt-4 flex flex-col gap-2 border-t border-line pt-4 md:hidden">
                <Link
                  to="/register-institution"
                  onClick={() => setOpen(false)}
                  className="w-full rounded-lg border border-line py-2 text-center text-sm font-semibold text-ink transition-colors hover:border-brand hover:text-brand"
                >
                  Register institution
                </Link>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}