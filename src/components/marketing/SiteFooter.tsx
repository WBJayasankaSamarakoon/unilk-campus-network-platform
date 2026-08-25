import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap } from 'lucide-react';

const columns = [
  {
    title: 'Platform',
    links: [
      { label: 'How it works', to: '/how-it-works' },
      { label: 'Features', to: '/features' },
      { label: 'Institutions', to: '/institutions' },
      { label: 'Roles & permissions', to: '/roles' }]

  },
  {
    title: 'Partners',
    links: [
      { label: 'For institutions', to: '/for-institutions' },
      { label: 'For organizations', to: '/for-organizations' },
      { label: 'Register your institution', to: '/register-institution' },
      { label: 'About', to: '/about' }]

  },
  {
    title: 'Product',
    links: [
      { label: 'My Day', to: '/today' },
      { label: 'Campus feed', to: '/feed' },
      { label: 'Events', to: '/events' },
      { label: 'Communities', to: '/communities' },
      { label: 'Academic resources', to: '/resources' }]

  }];


export function SiteFooter() {
  return (
    <footer className="bg-charcoal text-white">
      <div className="mx-auto max-w-[1200px] px-5 py-14">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_repeat(3,1fr)]">
          <div>
            <span className="flex items-center gap-2.5">
              <span className="brand-gradient flex h-8 w-8 items-center justify-center rounded-xl text-white shadow-sm">
                <GraduationCap className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="font-display text-[18px] font-extrabold tracking-tight text-white">
                UniLK
              </span>
            </span>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">
              The digital home for student life — connecting every educational community in Sri Lanka
              through one trusted platform.
            </p>
          </div>

          {columns.map((column) =>
            <div key={column.title}>
              <h2 className="text-[11px] font-semibold uppercase tracking-[0.12em] text-white/40">
                {column.title}
              </h2>
              <ul className="mt-4 space-y-2.5">
                {column.links.map((link) =>
                  <li key={`${column.title}-${link.label}`}>
                    <Link
                      to={link.to}
                      className="text-sm text-white/70 transition-colors duration-150 ease-out hover:text-brand">

                      {link.label}
                    </Link>
                  </li>
                )}
              </ul>
            </div>
          )}
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-charcoal-line pt-6 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 UniLK. Built for Sri Lankan education.</p>
          <p className="flex gap-5">
            <span>Content policy</span>
            <span>Privacy</span>
            <span>Copyright & takedown</span>
          </p>
        </div>
      </div>
    </footer>);

}