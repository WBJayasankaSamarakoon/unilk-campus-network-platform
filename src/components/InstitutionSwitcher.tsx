import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronsUpDownIcon, GlobeIcon, PlusIcon } from 'lucide-react';
import { institutions } from '../data/institutions';
import { currentUser } from '../data/user';

export function InstitutionSwitcher() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>('susl');
  const containerRef = useRef<HTMLDivElement>(null);

  const live = institutions.filter((item) => item.live);
  const activeInstitution = live.find((item) => item.id === active);
  const label = active === 'global' ? 'Global Campus' : activeInstitution?.short ?? 'UniLK';
  const sublabel =
  active === 'global' ? 'All of Sri Lanka' : `${currentUser.faculty} · ${currentUser.batch}`;

  return (
    <div
      ref={containerRef}
      className="relative"
      onBlur={(event) => {
        if (!containerRef.current?.contains(event.relatedTarget as Node)) setOpen(false);
      }}>
      
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        className="flex items-center gap-2.5 rounded-lg border border-line bg-surface px-2.5 py-1.5 text-left transition-colors duration-150 ease-out hover:border-line-strong">
        
        <span
          className={`flex h-7 w-7 items-center justify-center rounded-lg font-display text-[10px] font-bold ${
          active === 'global' ?
          'bg-cyan-soft text-cyan' :
          'bg-brand-soft text-brand ring-1 ring-brand/30'}`
          }>
          
          {active === 'global' ? <GlobeIcon className="h-3.5 w-3.5" aria-hidden="true" /> : label}
        </span>
        <span className="hidden min-w-0 xl:block">
          <span className="block truncate text-xs font-semibold text-ink">{label}</span>
          <span className="block truncate text-[10px] text-faint">{sublabel}</span>
        </span>
        <ChevronsUpDownIcon className="h-3.5 w-3.5 text-faint" aria-hidden="true" />
        <span className="sr-only">Switch campus</span>
      </button>

      <AnimatePresence>
        {open &&
        <motion.div
          initial={{ opacity: 0, y: -4, scale: 0.99 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -4, scale: 0.99 }}
          transition={{ duration: 0.16, ease: [0.23, 1, 0.32, 1] }}
          className="glass-panel absolute left-0 top-full z-50 mt-2 w-[300px] overflow-hidden rounded-xl border border-line p-1.5 shadow-pop">
          
            <p className="px-2.5 pb-1 pt-2 text-[11px] font-semibold uppercase tracking-[0.1em] text-faint">
              My campus
            </p>
            {live.
          filter((institution) => institution.primary).
          map((institution) =>
          <button
            key={institution.id}
            type="button"
            onMouseDown={(event) => event.preventDefault()}
            onClick={() => {
              setActive(institution.id);
              setOpen(false);
            }}
            className={`flex w-full items-center gap-3 rounded-lg px-2.5 py-2 text-left transition-colors duration-150 ease-out ${
            active === institution.id ? 'bg-brand-soft' : 'hover:bg-elevated'}`
            }>
            
                  <span
              className={`h-2 w-2 shrink-0 rounded-full ${
              active === institution.id ? 'bg-brand' : 'bg-line-strong'}`
              }
              aria-hidden="true" />
            
                  <span className="min-w-0 flex-1">
                    <span className="block truncate text-sm font-semibold text-ink">
                      {institution.name}
                    </span>
                    <span className="block truncate text-[11px] text-faint">
                      Verified student · {currentUser.batch}
                    </span>
                  </span>
                </button>
          )}

            <p className="px-2.5 pb-1 pt-3 text-[11px] font-semibold uppercase tracking-[0.1em] text-faint">
              Following
            </p>
            {live.
          filter((institution) => !institution.primary).
          slice(0, 3).
          map((institution) =>
          <button
            key={institution.id}
            type="button"
            onMouseDown={(event) => event.preventDefault()}
            onClick={() => {
              setActive(institution.id);
              setOpen(false);
            }}
            className={`flex w-full items-center gap-3 rounded-lg px-2.5 py-2 text-left transition-colors duration-150 ease-out ${
            active === institution.id ? 'bg-brand-soft' : 'hover:bg-elevated'}`
            }>
            
                  <span
              className={`h-2 w-2 shrink-0 rounded-full ${
              active === institution.id ? 'bg-brand' : 'bg-line-strong'}`
              }
              aria-hidden="true" />
            
                  <span className="min-w-0 flex-1">
                    <span className="block truncate text-sm text-ink">{institution.name}</span>
                    <span className="block text-[11px] text-faint">
                      {institution.onPlatform.toLocaleString()} students
                    </span>
                  </span>
                </button>
          )}

            <div className="mt-1.5 border-t border-line pt-1.5">
              <button
              type="button"
              onMouseDown={(event) => event.preventDefault()}
              onClick={() => {
                setActive('global');
                setOpen(false);
              }}
              className={`flex w-full items-center gap-3 rounded-lg px-2.5 py-2 text-left transition-colors duration-150 ease-out ${
              active === 'global' ? 'bg-cyan-soft' : 'hover:bg-elevated'}`
              }>
              
                <GlobeIcon className="h-4 w-4 shrink-0 text-cyan" aria-hidden="true" />
                <span className="min-w-0 flex-1">
                  <span className="block text-sm font-semibold text-ink">Global Campus</span>
                  <span className="block text-[11px] text-faint">
                    Every institution on UniLK
                  </span>
                </span>
              </button>

              <Link
              to="/institutions"
              onMouseDown={(event) => event.preventDefault()}
              onClick={() => setOpen(false)}
              className="flex items-center gap-3 rounded-lg px-2.5 py-2 text-sm text-muted transition-colors duration-150 ease-out hover:bg-elevated hover:text-ink">
              
                <PlusIcon className="h-4 w-4 shrink-0" aria-hidden="true" />
                Follow another institution
              </Link>
            </div>
          </motion.div>
        }
      </AnimatePresence>
    </div>);

}