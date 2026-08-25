import React from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { SiteHeader } from './SiteHeader';
import { SiteFooter } from './SiteFooter';
import { AmbientBackground } from './AmbientBackground';

interface SiteLayoutProps {
  children: React.ReactNode;
}

/* Common layout wrapper for marketing pages with animated background, header and footer */
export function SiteLayout({ children }: SiteLayoutProps) {
  const location = useLocation();

  return (
    <div className="relative flex min-h-screen w-full flex-col bg-surface overflow-x-hidden">
      {/* Animated Ambient Background with floating orbs and particles */}
      <AmbientBackground />

      <div className="relative z-10 flex min-h-screen flex-col">
        <SiteHeader />
        <AnimatePresence mode="wait">
          <motion.main
            key={location.pathname}
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
            className="flex-1"
          >
            {children}
          </motion.main>
        </AnimatePresence>
        <SiteFooter />
      </div>
    </div>
  );
}

interface PageHeroProps {
  eyebrow: string;
  title: React.ReactNode;
  description: string;
  children?: React.ReactNode;
}

export function PageHero({ eyebrow, title, description, children }: PageHeroProps) {
  return (
    <section className="border-b border-line bg-surface">
      <div className="mx-auto max-w-[1200px] px-5 py-16 sm:py-20">
        <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-brand">{eyebrow}</p>
        <h1 className="mt-4 max-w-3xl font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-ink sm:text-5xl">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">{description}</p>
        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  );
}