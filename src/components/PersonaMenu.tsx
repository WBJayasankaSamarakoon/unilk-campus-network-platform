import React, { useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { CheckIcon, UserCogIcon } from 'lucide-react';
import { personas, useRole } from '../contexts/RoleContext';

export function PersonaMenu() {
  const { persona, setPersona } = useRole();
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
        
        <UserCogIcon className="h-[18px] w-[18px]" aria-hidden="true" />
        <span className="sr-only">Change role view — currently {persona.label}</span>
      </button>

      <AnimatePresence>
        {open &&
        <motion.div
          role="menu"
          initial={{ opacity: 0, y: -4, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -4, scale: 0.98 }}
          transition={{ duration: 0.15, ease: [0.23, 1, 0.32, 1] }}
          className="glass-panel absolute right-0 top-full z-50 mt-2 w-64 overflow-hidden rounded-xl border border-line p-1.5 shadow-pop">
          
            <p className="px-2.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.1em] text-faint">
              View as
            </p>
            {personas.map((option) =>
          <button
            key={option.id}
            role="menuitemradio"
            aria-checked={persona.id === option.id}
            type="button"
            onMouseDown={(event) => event.preventDefault()}
            onClick={() => {
              setPersona(option.id);
              setOpen(false);
            }}
            className={`flex w-full items-start gap-2.5 rounded-lg px-2.5 py-2 text-left transition-colors duration-150 ease-out ${
            persona.id === option.id ? 'bg-brand-soft' : 'hover:bg-elevated'}`
            }>
            
                <span className="min-w-0 flex-1">
                  <span
                className={`block text-sm font-medium ${
                persona.id === option.id ? 'text-brand' : 'text-ink'}`
                }>
                
                    {option.label}
                  </span>
                  <span className="block truncate text-[11px] text-faint">{option.scope}</span>
                </span>
                {persona.id === option.id &&
            <CheckIcon className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand" aria-hidden="true" />
            }
              </button>
          )}
            <p className="border-t border-line px-2.5 pb-1 pt-2 text-[11px] leading-relaxed text-faint">
              Navigation and actions adapt to the selected role.
            </p>
          </motion.div>
        }
      </AnimatePresence>
    </div>);

}