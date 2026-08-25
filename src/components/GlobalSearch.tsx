import React, { useMemo, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SearchIcon, TrendingUpIcon } from 'lucide-react';
import { events } from '../data/events';
import { communities } from '../data/communities';
import { clubs } from '../data/clubs';
import { resources } from '../data/resources';
import { opportunities } from '../data/opportunities';
import { trendingTopics } from '../data/discover';

interface Result {
  id: string;
  label: string;
  meta: string;
  group: string;
  to: string;
}

interface GlobalSearchProps {
  onOpenPalette?: () => void;
}

export function GlobalSearch({ onOpenPalette }: GlobalSearchProps) {
  const [query, setQuery] = useState('');
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const containerRef = useRef<HTMLDivElement>(null);

  const results = useMemo<Result[]>(() => {
    const term = query.trim().toLowerCase();
    if (term.length < 2) return [];
    const matches: Result[] = [];

    events.forEach((event) => {
      if (`${event.title} ${event.organizer} ${event.categoryLabel}`.toLowerCase().includes(term)) {
        matches.push({
          id: event.id,
          label: event.title,
          meta: `${event.organizer} · ${event.categoryLabel}`,
          group: 'Events',
          to: `/events/${event.id}`
        });
      }
    });
    communities.forEach((community) => {
      if (`${community.name} ${community.scope}`.toLowerCase().includes(term)) {
        matches.push({
          id: community.id,
          label: community.name,
          meta: community.scope,
          group: 'Communities',
          to: `/communities/${community.id}`
        });
      }
    });
    clubs.forEach((club) => {
      if (`${club.name} ${club.category}`.toLowerCase().includes(term)) {
        matches.push({
          id: club.id,
          label: club.name,
          meta: `${club.category} · ${club.faculty}`,
          group: 'Clubs & societies',
          to: `/clubs/${club.id}`
        });
      }
    });
    resources.forEach((resource) => {
      if (`${resource.title} ${resource.subject} ${resource.course}`.toLowerCase().includes(term)) {
        matches.push({
          id: resource.id,
          label: resource.title,
          meta: `${resource.type} · ${resource.subject}`,
          group: 'Resources',
          to: '/resources'
        });
      }
    });
    opportunities.forEach((item) => {
      if (`${item.role} ${item.organization} ${item.type}`.toLowerCase().includes(term)) {
        matches.push({
          id: item.id,
          label: item.role,
          meta: `${item.organization} · ${item.type}`,
          group: 'Opportunities',
          to: '/opportunities'
        });
      }
    });

    return matches.slice(0, 10);
  }, [query]);

  const grouped = results.reduce<Record<string, Result[]>>((acc, result) => {
    acc[result.group] = acc[result.group] ?? [];
    acc[result.group].push(result);
    return acc;
  }, {});

  const showPanel = open && (query.trim().length >= 2 || query.trim().length === 0);

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-lg"
      onBlur={(event) => {
        if (!containerRef.current?.contains(event.relatedTarget as Node)) setOpen(false);
      }}>
      
      <label htmlFor="global-search" className="sr-only">
        Search UniLK
      </label>
      <SearchIcon
        className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted"
        aria-hidden="true" />
      
      <input
        id="global-search"
        type="search"
        value={query}
        onFocus={() => setOpen(true)}
        onChange={(event) => {
          setQuery(event.target.value);
          setOpen(true);
        }}
        placeholder="Search events, communities, clubs, resources"
        className="w-full rounded-lg border border-line bg-sunken py-2 pl-9 pr-16 text-sm text-ink placeholder:text-faint focus:border-brand focus:bg-surface focus:outline-none" />
      
      <button
        type="button"
        onClick={onOpenPalette}
        className="absolute right-2.5 top-1/2 hidden -translate-y-1/2 items-center gap-1 rounded-md border border-line px-1.5 py-0.5 text-[10px] font-semibold text-faint transition-colors duration-150 ease-out hover:border-brand hover:text-brand sm:flex">
        
        ⌘K
        <span className="sr-only">Open command menu</span>
      </button>

      {showPanel &&
      <div className="glass-panel absolute left-0 right-0 top-full z-30 mt-2 overflow-hidden rounded-xl border border-line shadow-pop">
          {query.trim().length === 0 ?
        <div className="py-2">
              <p className="px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.08em] text-muted">
                Trending on your campus
              </p>
              {trendingTopics.slice(0, 4).map((topic) =>
          <button
            key={topic.tag}
            type="button"
            onMouseDown={(event) => event.preventDefault()}
            onClick={() => {
              navigate('/discover');
              setOpen(false);
            }}
            className="flex w-full items-center gap-2.5 px-4 py-2 text-left transition-colors duration-150 ease-out hover:bg-elevated">
            
                  <TrendingUpIcon className="h-3.5 w-3.5 shrink-0 text-brand" aria-hidden="true" />
                  <span className="min-w-0">
                    <span className="block truncate text-sm font-medium text-ink">
                      #{topic.tag}
                    </span>
                    <span className="block truncate text-xs text-muted">{topic.posts} posts</span>
                  </span>
                </button>
          )}
            </div> :
        results.length === 0 ?
        <p className="px-4 py-6 text-center text-sm text-muted">
              Nothing found for “{query}”. Try an event, club, subject or community name.
            </p> :

        Object.entries(grouped).map(([group, items]) =>
        <div key={group} className="border-b border-line last:border-0">
                <p className="px-4 pt-3 text-[11px] font-semibold uppercase tracking-[0.08em] text-muted">
                  {group}
                </p>
                {items.map((result) =>
          <button
            key={`${group}-${result.id}`}
            type="button"
            onMouseDown={(event) => event.preventDefault()}
            onClick={() => {
              navigate(result.to);
              setQuery('');
              setOpen(false);
            }}
            className="block w-full px-4 py-2 text-left transition-colors duration-150 ease-out hover:bg-elevated">
            
                    <span className="block truncate text-sm font-medium text-ink">
                      {result.label}
                    </span>
                    <span className="block truncate text-xs text-muted">{result.meta}</span>
                  </button>
          )}
              </div>
        )
        }
        </div>
      }
    </div>);

}