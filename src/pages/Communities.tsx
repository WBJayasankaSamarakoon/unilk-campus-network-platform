import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { LockIcon, MessageSquareIcon, SearchIcon, UsersIcon } from 'lucide-react';
import { EmptyState } from '../components/EmptyState';
import { communities } from '../data/communities';
import { formatCount } from '../utils/categories';

export function Communities() {
  const [joined, setJoined] = useState<string[]>(
    communities.filter((community) => community.joined).map((community) => community.id)
  );
  const [query, setQuery] = useState('');

  const toggle = (id: string) =>
  setJoined((current) =>
  current.includes(id) ? current.filter((item) => item !== id) : [...current, id]
  );

  const filtered = communities.filter((community) =>
  `${community.name} ${community.scope}`.toLowerCase().includes(query.trim().toLowerCase())
  );
  const mine = filtered.filter((community) => joined.includes(community.id));
  const discover = filtered.filter((community) => !joined.includes(community.id));

  return (
    <div className="w-full space-y-7">
      <header className="space-y-1.5">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <h1 className="font-display text-[28px] font-extrabold tracking-tight text-ink sm:text-[32px]">
            Communities
          </h1>

          <div className="relative w-full sm:w-72 md:w-80">
            <SearchIcon
              className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-faint"
              aria-hidden="true"
            />
            <label htmlFor="community-search" className="sr-only">
              Search communities
            </label>
            <input
              id="community-search"
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search communities"
              className="w-full rounded-xl border border-line bg-surface py-2 pl-9 pr-3.5 text-sm text-ink placeholder:text-faint focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand shadow-xs"
            />
          </div>
        </div>

        <p className="max-w-2xl text-sm text-muted">
          Spaces organised around your institution, faculty, course and batch — plus national
          interest groups you can join from any campus.
        </p>
      </header>

      {filtered.length === 0 ?
      <EmptyState
        Icon={UsersIcon}
        title="No communities match that search"
        description="Try a faculty, batch or topic — or discover communities from other institutions."
        actionLabel="Explore Global Campus"
        actionTo="/discover" /> :


      <>
          {mine.length > 0 &&
        <section>
              <h2 className="text-[11px] font-semibold uppercase tracking-[0.1em] text-faint">
                Your communities
              </h2>
              <ul className="mt-3 space-y-2.5">
                {mine.map((community) => {
              const active = community.newPosts >= 8;
              return (
                <li
                  key={community.id}
                  className="flex flex-col gap-4 rounded-2xl border border-line bg-surface p-4 transition-colors duration-150 ease-out hover:border-line-strong sm:flex-row sm:items-center">
                  
                      <span className="brand-gradient flex h-11 w-11 shrink-0 items-center justify-center rounded-xl font-display text-sm font-bold text-white">
                        {community.name.charAt(0)}
                      </span>

                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <Link
                        to={`/communities/${community.id}`}
                        className="text-[15px] font-semibold text-ink transition-colors duration-150 ease-out hover:text-brand">
                        
                            {community.name}
                          </Link>
                          {active &&
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-cyan-soft px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.06em] text-cyan">
                              <span
                          className="live-dot h-1.5 w-1.5 rounded-full bg-cyan"
                          aria-hidden="true" />
                        
                              Active now
                            </span>
                      }
                        </div>
                        <p className="mt-1 line-clamp-1 text-sm text-muted">
                          {community.description}
                        </p>
                        <p className="mt-1.5 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-faint">
                          <span className="inline-flex items-center gap-1">
                            <UsersIcon className="h-3.5 w-3.5" aria-hidden="true" />
                            {formatCount(community.members)}
                          </span>
                          <span className="inline-flex items-center gap-1">
                            <LockIcon className="h-3.5 w-3.5" aria-hidden="true" />
                            {community.visibility}
                          </span>
                          {community.newPosts > 0 &&
                      <span className="font-medium text-brand">
                              {community.newPosts} new posts
                            </span>
                      }
                        </p>
                      </div>

                      <div className="flex shrink-0 gap-2">
                        <Link
                      to={`/communities/${community.id}`}
                      className="inline-flex items-center gap-1.5 rounded-lg bg-brand px-3.5 py-2 text-sm font-semibold text-white transition-colors duration-150 ease-out hover:bg-brand-hover">
                      
                          <MessageSquareIcon className="h-4 w-4" aria-hidden="true" />
                          Open
                        </Link>
                        <button
                      type="button"
                      onClick={() => toggle(community.id)}
                      className="rounded-lg border border-line px-3 py-2 text-sm font-medium text-muted transition-colors duration-150 ease-out hover:border-line-strong hover:text-ink">
                      
                          Leave
                        </button>
                      </div>
                    </li>);

            })}
              </ul>
            </section>
        }

          {discover.length > 0 &&
        <section>
              <h2 className="text-[11px] font-semibold uppercase tracking-[0.1em] text-faint">
                Recommended for you
              </h2>
              <ul className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {discover.map((community) =>
            <li
              key={community.id}
              className="flex flex-col rounded-2xl border border-line bg-surface p-4 transition-colors duration-150 ease-out hover:border-line-strong">
              
                    <div className="flex items-start gap-3">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-elevated font-display text-sm font-bold text-muted">
                        {community.name.charAt(0)}
                      </span>
                      <div className="min-w-0">
                        <h3 className="text-[15px] font-semibold leading-snug text-ink">
                          {community.name}
                        </h3>
                        <p className="text-xs text-faint">
                          {community.scope} · {community.visibility}
                        </p>
                      </div>
                    </div>
                    <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-muted">
                      {community.description}
                    </p>
                    <div className="mt-auto flex items-center justify-between pt-4">
                      <span className="text-xs text-faint">
                        {formatCount(community.members)} members
                      </span>
                      <button
                  type="button"
                  onClick={() => toggle(community.id)}
                  className="rounded-lg border border-brand/40 bg-brand-soft px-3 py-1.5 text-sm font-semibold text-brand transition-colors duration-150 ease-out hover:bg-brand hover:text-white">
                  
                        Join
                      </button>
                    </div>
                  </li>
            )}
              </ul>
            </section>
        }
        </>
      }
    </div>);

}