import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BookmarkIcon, DownloadIcon, FileIcon } from 'lucide-react';
import { PostCard } from '../components/PostCard';
import { EmptyState } from '../components/EmptyState';
import { feedPosts } from '../data/feed';
import { events } from '../data/events';
import { resources } from '../data/resources';
import { opportunities } from '../data/opportunities';
import { relativeDay } from '../utils/date';

const tabs = ['Posts', 'Events', 'Resources', 'Opportunities'] as const;

export function Saved() {
  const [tab, setTab] = useState<(typeof tabs)[number]>('Posts');

  const savedPosts = feedPosts.slice(0, 2);
  const savedEvents = events.slice(1, 3);
  const savedResources = resources.slice(0, 3);
  const savedOpportunities = opportunities.slice(0, 2);

  return (
    <div className="w-full space-y-5">
      <header>
        <h1 className="font-display text-3xl font-extrabold tracking-tight text-ink">Saved</h1>
        <p className="mt-1.5 text-sm text-muted">
          Everything you bookmarked, in one place. Only visible to you.
        </p>
      </header>

      <div role="tablist" aria-label="Saved items" className="flex gap-1 border-b border-line">
        {tabs.map((option) =>
        <button
          key={option}
          role="tab"
          aria-selected={tab === option}
          type="button"
          onClick={() => setTab(option)}
          className={`-mb-px border-b-2 px-3 py-2.5 text-sm font-medium transition-colors duration-150 ease-out ${
          tab === option ? 'border-brand text-brand' : 'border-transparent text-muted hover:text-ink'}`
          }>
          
            {option}
          </button>
        )}
      </div>

      {tab === 'Posts' &&
      <div className="space-y-4">
          {savedPosts.map((post) =>
        <PostCard key={post.id} post={{ ...post, saved: true }} />
        )}
        </div>
      }

      {tab === 'Events' &&
      <ul className="space-y-3">
          {savedEvents.map((event) =>
        <li key={event.id}>
              <Link
            to={`/events/${event.id}`}
            className="flex items-center gap-4 rounded-2xl border border-line bg-surface p-4 shadow-card transition-shadow duration-150 ease-out hover:shadow-raised">
            
                <span className="min-w-0 flex-1">
                  <span className="block text-xs font-medium text-brand">{event.categoryLabel}</span>
                  <span className="mt-0.5 block truncate text-sm font-semibold text-ink">
                    {event.title}
                  </span>
                  <span className="block truncate text-xs text-muted">
                    {relativeDay(event.date)} · {event.startTime} · {event.location}
                  </span>
                </span>
                <BookmarkIcon className="h-4 w-4 shrink-0 fill-current text-brand" aria-hidden="true" />
              </Link>
            </li>
        )}
        </ul>
      }

      {tab === 'Resources' &&
      <ul className="space-y-3">
          {savedResources.map((resource) =>
        <li
          key={resource.id}
          className="flex items-center gap-4 rounded-2xl border border-line bg-surface p-4 shadow-card">
          
              <span className="flex h-10 w-10 shrink-0 flex-col items-center justify-center rounded-xl bg-elevated text-[10px] font-bold text-muted">
                <FileIcon className="h-4 w-4" aria-hidden="true" />
                {resource.fileType}
              </span>
              <span className="min-w-0 flex-1">
                <span className="block truncate text-sm font-semibold text-ink">
                  {resource.title}
                </span>
                <span className="block truncate text-xs text-muted">
                  {resource.subject} · {resource.type} · {resource.uploadedBy}
                </span>
              </span>
              <button
            type="button"
            className="inline-flex shrink-0 items-center gap-1.5 rounded-lg border border-line px-3 py-1.5 text-xs font-semibold text-ink transition-colors duration-150 ease-out hover:border-brand hover:text-brand">
            
                <DownloadIcon className="h-3.5 w-3.5" aria-hidden="true" />
                Download
              </button>
            </li>
        )}
        </ul>
      }

      {tab === 'Opportunities' && (
      savedOpportunities.length ?
      <ul className="space-y-3">
            {savedOpportunities.map((item) =>
        <li
          key={item.id}
          className="flex items-center gap-4 rounded-2xl border border-line bg-surface p-4 shadow-card">
          
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-soft font-display text-[11px] font-bold text-brand ring-1 ring-brand/25">
                  {item.organization.slice(0, 2).toUpperCase()}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block truncate text-sm font-semibold text-ink">{item.role}</span>
                  <span className="block truncate text-xs text-muted">
                    {item.organization} · closes {item.deadline}
                  </span>
                </span>
                <Link
            to="/opportunities"
            className="shrink-0 rounded-lg bg-brand px-3 py-1.5 text-xs font-semibold text-white transition-colors duration-150 ease-out hover:bg-brand-hover">
            
                  Apply
                </Link>
              </li>
        )}
          </ul> :

      <EmptyState
        Icon={BookmarkIcon}
        title="Nothing saved yet"
        description="Save internships and scholarships to come back to them before the deadline."
        actionLabel="Browse opportunities"
        actionTo="/opportunities" />)

      }
    </div>);

}