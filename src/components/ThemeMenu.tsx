import React, { useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { CheckIcon, MonitorIcon, MoonIcon, SunIcon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import type { ThemeMode } from '../contexts/ThemeContext';

const options: {id: ThemeMode;label: string;Icon: typeof SunIcon;}[] = [
{ id: 'light', label: 'Light', Icon: SunIcon },
{ id: 'dark', label: 'Dark', Icon: MoonIcon },
{ id: 'system', label: 'System', Icon: MonitorIcon }];


export function ThemeMenu() {
  const { mode, resolved, setMode } = useTheme();
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

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
        aria-haspopup="menu"
        className="rounded-xl p-2 text-muted transition-colors duration-150 ease-out hover:bg-elevated hover:text-ink">
        
        {resolved === 'dark' ?
        <MoonIcon className="h-[18px] w-[18px]" aria-hidden="true" /> :

        <SunIcon className="h-[18px] w-[18px]" aria-hidden="true" />
        }
        <span className="sr-only">Appearance</span>
      </button>

      <AnimatePresence>
        {open &&
        <motion.div
          role="menu"
          initial={{ opacity: 0, y: -4, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -4, scale: 0.98 }}
          transition={{ duration: 0.15, ease: [0.23, 1, 0.32, 1] }}
          className="glass-panel absolute right-0 top-full z-50 mt-2 w-44 overflow-hidden rounded-xl border border-line p-1 shadow-pop">
          
            <p className="px-2.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.1em] text-faint">
              Appearance
            </p>
            {options.map(({ id, label, Icon }) =>
          <button
            key={id}
            role="menuitemradio"
            aria-checked={mode === id}
            type="button"
            onMouseDown={(event) => event.preventDefault()}
            onClick={() => {
              setMode(id);
              setOpen(false);
            }}
            className={`flex w-full items-center gap-2.5 rounded-lg px-2.5 py-2 text-sm transition-colors duration-150 ease-out ${
            mode === id ? 'bg-brand-soft text-brand' : 'text-ink hover:bg-elevated'}`
            }>
            
                <Icon className="h-4 w-4" aria-hidden="true" />
                {label}
                {mode === id && <CheckIcon className="ml-auto h-3.5 w-3.5" aria-hidden="true" />}
              </button>
          )}
          </motion.div>
        }
      </AnimatePresence>
    </div>);

}