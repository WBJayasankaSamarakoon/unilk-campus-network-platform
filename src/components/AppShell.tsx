import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  BellIcon,
  BookmarkIcon,
  BookOpenIcon,
  BriefcaseIcon,
  BuildingIcon,
  CalendarIcon,
  CompassIcon,
  GlobeIcon,
  LayoutDashboardIcon,
  MenuIcon,
  PlusIcon,
  SettingsIcon,
  ShieldIcon,
  SunriseIcon,
  TrophyIcon,
  UserIcon,
  UsersRoundIcon,
  XIcon,
  GraduationCap
} from
  'lucide-react';
import { Avatar } from './Avatar';
import { GlobalSearch } from './GlobalSearch';
import { CreatePostModal } from './CreatePostModal';
import { CommandPalette } from './CommandPalette';
import { InstitutionSwitcher } from './InstitutionSwitcher';
import { ThemeMenu } from './ThemeMenu';
import { PersonaMenu } from './PersonaMenu';
import { useRole } from '../contexts/RoleContext';
import { currentUser } from '../data/user';
import { institutions } from '../data/institutions';
import { notifications } from '../data/notifications';

const myCampusNav = [
  { to: '/today', label: 'My Day', Icon: SunriseIcon, end: true },
  { to: '/feed', label: 'My Campus', Icon: LayoutDashboardIcon, end: false },
  { to: '/events', label: 'Events', Icon: CalendarIcon, end: false },
  { to: '/communities', label: 'Communities', Icon: UsersRoundIcon, end: false },
  { to: '/resources', label: 'Academic', Icon: BookOpenIcon, end: false },
  { to: '/opportunities', label: 'Opportunities', Icon: BriefcaseIcon, end: false }];


const exploreNav = [
  { to: '/discover', label: 'Global Campus', Icon: CompassIcon },
  { to: '/sports', label: 'Sports', Icon: TrophyIcon },
  { to: '/saved', label: 'Saved', Icon: BookmarkIcon },
  { to: '/notifications', label: 'Notifications', Icon: BellIcon }];


const mobileNav = [
  { to: '/today', label: 'Today', Icon: SunriseIcon, end: true },
  { to: '/discover', label: 'Discover', Icon: CompassIcon, end: false },
  { to: '/events', label: 'Events', Icon: CalendarIcon, end: false },
  { to: '/communities', label: 'Groups', Icon: UsersRoundIcon, end: false },
  { to: '/profile', label: 'Profile', Icon: UserIcon, end: false }];


interface AppShellProps {
  children: React.ReactNode;
}

export function AppShell({ children }: AppShellProps) {
  const unread = notifications.filter((item) => item.unread).length;
  const location = useLocation();
  const { can, persona } = useRole();
  const [composerOpen, setComposerOpen] = useState(false);
  const [paletteOpen, setPaletteOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handler = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault();
        setPaletteOpen((value) => !value);
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  const manageNav = [
    { to: '/institution', label: 'My institution', Icon: BuildingIcon, permission: null },
    { to: '/workspace', label: 'Workspace', Icon: LayoutDashboardIcon, permission: 'manage_workspace' },
    { to: '/admin', label: 'Control center', Icon: ShieldIcon, permission: 'moderate_content' }].
    filter((item) => !item.permission || can(item.permission));

  const navItem = (isActive: boolean) =>
    `relative flex items-center gap-3 rounded-lg px-2.5 py-2 text-sm transition-colors duration-150 ease-out ${isActive ?
      'bg-brand-soft font-semibold text-brand' :
      'font-medium text-muted hover:bg-elevated hover:text-ink'}`;


  return (
    <div className="min-h-full w-full bg-canvas">
      <header className="glass sticky top-0 z-40 border-b border-line">
        <div className="flex h-[60px] w-full items-center gap-2 px-3 sm:gap-3 sm:px-4 md:px-5">
          <button
            type="button"
            onClick={() => setMobileMenuOpen((open) => !open)}
            aria-label="Toggle navigation menu"
            className="flex h-9 w-9 items-center justify-center rounded-xl text-muted transition-colors duration-150 ease-out hover:bg-elevated hover:text-ink md:hidden">
            {mobileMenuOpen ? <XIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
          </button>

          <Link to="/today" className="flex shrink-0 items-center gap-2.5">
            <span className="brand-gradient flex h-8 w-8 items-center justify-center rounded-xl text-white shadow-sm">
              <GraduationCap className="h-5 w-5" aria-hidden="true" />
            </span>
            <span className="hidden font-display text-[17px] font-extrabold tracking-tight text-ink sm:block">
              Uni<span className="text-brand">LK</span>
            </span>
          </Link>

          <div className="hidden lg:block">
            <InstitutionSwitcher />
          </div>

          <div className="flex flex-1 justify-center min-w-0">
            <GlobalSearch onOpenPalette={() => setPaletteOpen(true)} />
          </div>

          <div className="flex shrink-0 items-center gap-0.5 sm:gap-1">
            <PersonaMenu />
            <ThemeMenu />

            <NavLink
              to="/notifications"
              className="relative rounded-xl p-2 text-muted transition-colors duration-150 ease-out hover:bg-elevated hover:text-ink">

              <BellIcon className="h-[18px] w-[18px]" aria-hidden="true" />
              <span className="sr-only">Notifications</span>
              {unread > 0 &&
                <span
                  className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-brand ring-2 ring-surface"
                  aria-hidden="true" />

              }
            </NavLink>

            {can('create_post') &&
              <button
                type="button"
                onClick={() => setComposerOpen(true)}
                className="ml-1.5 hidden items-center gap-1.5 rounded-lg bg-brand px-3.5 py-2 text-sm font-semibold text-white transition-colors duration-150 ease-out hover:bg-brand-hover sm:inline-flex">

                <PlusIcon className="h-4 w-4" aria-hidden="true" />
                Create
              </button>
            }

            <NavLink to="/profile" className="ml-1.5 rounded-full ring-1 ring-line shrink-0">
              <Avatar name={currentUser.fullName} size="sm" color="brand-gradient" />
              <span className="sr-only">Your profile</span>
            </NavLink>
          </div>
        </div>
      </header>

      <div className="flex w-full gap-3 px-2 sm:gap-5 sm:px-4 md:gap-6 md:px-5 lg:px-6">
        <aside className="sticky top-[60px] hidden h-[calc(100vh-60px)] w-[68px] shrink-0 flex-col overflow-y-auto py-5 md:flex lg:w-56">
          <p className="mb-1.5 hidden px-2.5 text-[11px] font-semibold uppercase tracking-[0.1em] text-faint lg:block">
            My campus
          </p>
          <nav aria-label="My campus" className="space-y-0.5">
            {myCampusNav.map(({ to, label, Icon, end }) =>
              <NavLink key={to} to={to} end={end} title={label} className="block">
                {({ isActive }) =>
                  <span className={`${navItem(isActive)} justify-center lg:justify-start`}>
                    <Icon className="h-[18px] w-[18px] shrink-0" aria-hidden="true" />
                    <span className="hidden lg:block">{label}</span>
                  </span>
                }
              </NavLink>
            )}
          </nav>

          <div className="mx-auto my-4 h-px w-7 bg-line lg:hidden" aria-hidden="true" />
          <p className="mb-1.5 mt-6 hidden px-2.5 text-[11px] font-semibold uppercase tracking-[0.1em] text-faint lg:block">
            Explore
          </p>
          <nav aria-label="Explore" className="space-y-0.5">
            {exploreNav.map(({ to, label, Icon }) =>
              <NavLink key={to} to={to} title={label} className="block">
                {({ isActive }) =>
                  <span className={`${navItem(isActive)} justify-center lg:justify-start`}>
                    <Icon className="h-[18px] w-[18px] shrink-0" aria-hidden="true" />
                    <span className="hidden lg:block">{label}</span>
                    {label === 'Notifications' && unread > 0 &&
                      <span className="ml-auto hidden rounded-md bg-brand/15 px-1.5 py-0.5 text-[10px] font-bold text-brand lg:block">
                        {unread}
                      </span>
                    }
                  </span>
                }
              </NavLink>
            )}
          </nav>

          {manageNav.length > 0 &&
            <>
              <div className="mx-auto my-4 h-px w-7 bg-line lg:hidden" aria-hidden="true" />
              <p className="mb-1.5 mt-6 hidden px-2.5 text-[11px] font-semibold uppercase tracking-[0.1em] text-faint lg:block">
                Manage
              </p>
              <nav aria-label="Management" className="space-y-0.5">
                {manageNav.map(({ to, label, Icon }) =>
                  <NavLink key={to} to={to} title={label} className="block">
                    {({ isActive }) =>
                      <span className={`${navItem(isActive)} justify-center lg:justify-start`}>
                        <Icon className="h-[18px] w-[18px] shrink-0" aria-hidden="true" />
                        <span className="hidden lg:block">{label}</span>
                      </span>
                    }
                  </NavLink>
                )}
              </nav>
            </>
          }

          <div className="mt-auto space-y-0.5 border-t border-line pt-3">
            <NavLink to="/profile" title="Your profile" className="block">
              {({ isActive }) =>
                <span
                  className={`flex items-center justify-center gap-2.5 rounded-lg px-1.5 py-1.5 transition-colors duration-150 ease-out lg:justify-start lg:px-2.5 ${isActive ? 'bg-brand-soft' : 'hover:bg-elevated'}`
                  }>

                  <Avatar name={currentUser.fullName} size="sm" color="brand-gradient" />
                  <span className="hidden min-w-0 lg:block">
                    <span className="block truncate text-sm font-semibold text-ink">
                      {currentUser.name}
                    </span>
                    <span className="block truncate text-[11px] text-faint">{persona.role}</span>
                  </span>
                </span>
              }
            </NavLink>

            {[
              { to: '/onboarding', label: 'Settings', Icon: SettingsIcon },
              { to: '/', label: 'Public site', Icon: GlobeIcon }].
              map(({ to, label, Icon }) =>
                <NavLink key={to} to={to} title={label} className="block">
                  {({ isActive }) =>
                    <span className={`${navItem(isActive)} justify-center lg:justify-start`}>
                      <Icon className="h-[18px] w-[18px] shrink-0" aria-hidden="true" />
                      <span className="hidden lg:block">{label}</span>
                    </span>
                  }
                </NavLink>
              )}
          </div>
        </aside>

        <motion.main
          key={location.pathname}
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
          className="min-w-0 max-w-full flex-1 overflow-x-hidden px-4 pb-28 pt-5 sm:px-0 sm:pt-6 md:pb-14">

          {children}
        </motion.main>
      </div>

      {can('create_post') &&
        <button
          type="button"
          onClick={() => setComposerOpen(true)}
          className="brand-gradient fixed bottom-[calc(76px+env(safe-area-inset-bottom))] right-4 z-40 flex h-14 w-14 items-center justify-center rounded-2xl text-white shadow-pop transition-transform duration-150 ease-out active:scale-95 md:hidden">

          <PlusIcon className="h-5 w-5" aria-hidden="true" />
          <span className="sr-only">Create a post</span>
        </button>
      }

      <nav
        aria-label="Mobile"
        className="glass fixed inset-x-0 bottom-0 z-40 flex border-t border-line pb-[env(safe-area-inset-bottom)] md:hidden">

        {mobileNav.map(({ to, label, Icon, end }) =>
          <NavLink key={to} to={to} end={end} className="flex min-w-0 flex-1 flex-col items-center py-2.5">
            {({ isActive }) =>
              <>
                <span
                  className={`flex h-7 w-12 items-center justify-center rounded-lg transition-colors duration-150 ease-out ${isActive ? 'bg-brand-soft text-brand' : 'text-faint'}`
                  }>

                  <Icon className="h-[18px] w-[18px]" aria-hidden="true" />
                </span>
                <span
                  className={`mt-0.5 text-[10px] font-medium ${isActive ? 'text-brand' : 'text-faint'}`}>

                  {label}
                </span>
              </>
            }
          </NavLink>
        )}
      </nav>

      <CreatePostModal open={composerOpen} onClose={() => setComposerOpen(false)} />
      <CommandPalette open={paletteOpen} onClose={() => setPaletteOpen(false)} />

      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 flex md:hidden">
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="relative flex w-full max-w-xs flex-1 flex-col bg-surface p-5 shadow-pop">
            <div className="flex items-center justify-between border-b border-line pb-4">
              <Link to="/today" className="flex items-center gap-2.5">
                <span className="brand-gradient flex h-8 w-8 items-center justify-center rounded-xl text-white shadow-sm">
                  <GraduationCap className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="font-display text-[17px] font-extrabold tracking-tight text-ink">
                  Uni<span className="text-brand">LK</span>
                </span>
              </Link>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-lg p-1.5 text-muted hover:bg-elevated hover:text-ink">
                <XIcon className="h-5 w-5" />
              </button>
            </div>

            <div className="mt-4 flex-1 overflow-y-auto space-y-6">
              <div>
                <InstitutionSwitcher />
              </div>

              <div>
                <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.1em] text-faint">
                  My Campus
                </p>
                <nav className="space-y-1">
                  {myCampusNav.map(({ to, label, Icon, end }) => (
                    <NavLink key={to} to={to} end={end} className="block">
                      {({ isActive }) => (
                        <span className={navItem(isActive)}>
                          <Icon className="h-4 w-4" />
                          <span>{label}</span>
                        </span>
                      )}
                    </NavLink>
                  ))}
                </nav>
              </div>

              <div>
                <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.1em] text-faint">
                  Explore
                </p>
                <nav className="space-y-1">
                  {exploreNav.map(({ to, label, Icon }) => (
                    <NavLink key={to} to={to} className="block">
                      {({ isActive }) => (
                        <span className={navItem(isActive)}>
                          <Icon className="h-4 w-4" />
                          <span>{label}</span>
                        </span>
                      )}
                    </NavLink>
                  ))}
                </nav>
              </div>

              {manageNav.length > 0 && (
                <div>
                  <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.1em] text-faint">
                    Manage
                  </p>
                  <nav className="space-y-1">
                    {manageNav.map(({ to, label, Icon }) => (
                      <NavLink key={to} to={to} className="block">
                        {({ isActive }) => (
                          <span className={navItem(isActive)}>
                            <Icon className="h-4 w-4" />
                            <span>{label}</span>
                          </span>
                        )}
                      </NavLink>
                    ))}
                  </nav>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>);

}