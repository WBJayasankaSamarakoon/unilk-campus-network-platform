import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import {
  ArrowRightIcon,
  BuildingIcon,
  CalendarIcon,
  CompassIcon,
  CornerDownLeftIcon,
  PlusIcon,
  SearchIcon,
  SettingsIcon,
  ShieldIcon,
  SunriseIcon,
  UsersRoundIcon } from
'lucide-react';
import { useRole } from '../contexts/RoleContext';

interface Command {
  id: string;
  label: string;
  hint: string;
  group: 'Navigate' | 'Create' | 'Manage';
  to: string;
  Icon: typeof SearchIcon;
  permission?: string;
}

const commands: Command[] = [
{ id: 'today', label: 'Open My Day', hint: 'Today’s schedule and deadlines', group: 'Navigate', to: '/today', Icon: SunriseIcon },
{ id: 'feed', label: 'Open campus feed', hint: 'My Campus', group: 'Navigate', to: '/feed', Icon: CompassIcon },
{ id: 'events', label: 'Browse events', hint: 'All upcoming events', group: 'Navigate', to: '/events', Icon: CalendarIcon },
{ id: 'communities', label: 'Browse communities', hint: 'Faculty, batch and interest', group: 'Navigate', to: '/communities', Icon: UsersRoundIcon },
{ id: 'discover', label: 'Explore Global Campus', hint: 'Every institution', group: 'Navigate', to: '/discover', Icon: CompassIcon },
{ id: 'institution', label: 'Open my institution', hint: 'Public institution page', group: 'Navigate', to: '/institution', Icon: BuildingIcon },
{ id: 'post', label: 'Create a post', hint: 'Share with your batch', group: 'Create', to: '/feed', Icon: PlusIcon, permission: 'create_post' },
{ id: 'event', label: 'Create an event', hint: 'Publish to your community', group: 'Create', to: '/events', Icon: PlusIcon, permission: 'create_event' },
{ id: 'announcement', label: 'Publish an announcement', hint: 'Official channel', group: 'Create', to: '/workspace', Icon: PlusIcon, permission: 'create_announcement' },
{ id: 'workspace', label: 'Open institution workspace', hint: 'Manage your institution', group: 'Manage', to: '/workspace', Icon: BuildingIcon, permission: 'manage_workspace' },
{ id: 'moderation', label: 'Review reports', hint: 'Moderation queue', group: 'Manage', to: '/admin', Icon: ShieldIcon, permission: 'moderate_content' },
{ id: 'settings', label: 'Open settings', hint: 'Account and preferences', group: 'Navigate', to: '/onboarding', Icon: SettingsIcon }];


interface CommandPaletteProps {
  open: boolean;
  onClose: () => void;
}

export function CommandPalette({ open, onClose }: CommandPaletteProps) {
  const [query, setQuery] = useState('');
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();
  const { can } = useRole();
  const inputRef = useRef<HTMLInputElement>(null);

  const results = useMemo(() => {
    const allowed = commands.filter((command) => !command.permission || can(command.permission));
    const term = query.trim().toLowerCase();
    if (!term) return allowed;
    return allowed.filter((command) =>
    `${command.label} ${command.hint} ${command.group}`.toLowerCase().includes(term)
    );
  }, [query, can]);

  useEffect(() => {
    if (open) {
      setQuery('');
      setIndex(0);
      window.setTimeout(() => inputRef.current?.focus(), 40);
    }
  }, [open]);

  useEffect(() => {
    setIndex(0);
  }, [query]);

  const run = (command: Command) => {
    navigate(command.to);
    onClose();
  };

  const onKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'ArrowDown') {
      event.preventDefault();
      setIndex((value) => (value + 1) % Math.max(results.length, 1));
    } else if (event.key === 'ArrowUp') {
      event.preventDefault();
      setIndex((value) => (value - 1 + results.length) % Math.max(results.length, 1));
    } else if (event.key === 'Enter' && results[index]) {
      event.preventDefault();
      run(results[index]);
    } else if (event.key === 'Escape') {
      onClose();
    }
  };

  const groups: Command['group'][] = ['Navigate', 'Create', 'Manage'];

  return (
    <AnimatePresence>
      {open &&
      <div className="fixed inset-0 z-[60] flex items-start justify-center px-4 pt-[12vh]">
          <motion.button
          type="button"
          aria-label="Close command menu"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
          onClick={onClose}
          className="absolute inset-0 bg-charcoal/60 backdrop-blur-sm" />
        

          <motion.div
          role="dialog"
          aria-modal="true"
          aria-label="Command menu"
          initial={{ opacity: 0, y: -8, scale: 0.985 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -8, scale: 0.985 }}
          transition={{ duration: 0.18, ease: [0.23, 1, 0.32, 1] }}
          onKeyDown={onKeyDown}
          className="glass-panel relative w-full max-w-xl overflow-hidden rounded-2xl border border-line shadow-pop">
          
            <div className="flex items-center gap-3 border-b border-line px-4">
              <SearchIcon className="h-4 w-4 shrink-0 text-faint" aria-hidden="true" />
              <label htmlFor="command-input" className="sr-only">
                Search commands
              </label>
              <input
              id="command-input"
              ref={inputRef}
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search or jump to…"
              className="w-full bg-transparent py-3.5 text-[15px] text-ink placeholder:text-faint focus:outline-none" />
            
              <kbd className="hidden rounded border border-line px-1.5 py-0.5 text-[10px] font-semibold text-faint sm:block">
                ESC
              </kbd>
            </div>

            <div className="max-h-[52vh] overflow-y-auto p-1.5">
              {results.length === 0 &&
            <p className="px-3 py-8 text-center text-sm text-muted">
                  Nothing matches “{query}”.
                </p>
            }

              {groups.map((group) => {
              const items = results.filter((command) => command.group === group);
              if (items.length === 0) return null;
              return (
                <div key={group}>
                    <p className="px-3 pb-1 pt-2.5 text-[11px] font-semibold uppercase tracking-[0.1em] text-faint">
                      {group}
                    </p>
                    {items.map((command) => {
                    const active = results.indexOf(command) === index;
                    return (
                      <button
                        key={command.id}
                        type="button"
                        onMouseEnter={() => setIndex(results.indexOf(command))}
                        onClick={() => run(command)}
                        className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left transition-colors duration-150 ease-out ${
                        active ? 'bg-brand-soft' : ''}`
                        }>
                        
                          <command.Icon
                          className={`h-4 w-4 shrink-0 ${active ? 'text-brand' : 'text-faint'}`}
                          aria-hidden="true" />
                        
                          <span className="min-w-0 flex-1">
                            <span className="block truncate text-sm font-medium text-ink">
                              {command.label}
                            </span>
                            <span className="block truncate text-xs text-faint">{command.hint}</span>
                          </span>
                          {active &&
                        <CornerDownLeftIcon
                          className="h-3.5 w-3.5 shrink-0 text-brand"
                          aria-hidden="true" />

                        }
                        </button>);

                  })}
                  </div>);

            })}
            </div>

            <p className="flex items-center gap-2 border-t border-line px-4 py-2.5 text-[11px] text-faint">
              <ArrowRightIcon className="h-3 w-3" aria-hidden="true" />
              Only actions your role allows are shown
            </p>
          </motion.div>
        </div>
      }
    </AnimatePresence>);

}