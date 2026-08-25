import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon, CalendarDaysIcon, FlameIcon, TimerIcon } from 'lucide-react';
import { events } from '../data/events';
import { communities } from '../data/communities';
import { clubs } from '../data/clubs';
import { opportunities } from '../data/opportunities';
import { trendingTopics } from '../data/discover';
import { dayNumber, monthShort, relativeDay } from '../utils/date';
import { categoryMeta, formatCount } from '../utils/categories';

export function RightRail() {
  const upcoming = events.slice(0, 3);
  const suggested = communities.filter((community) => !community.joined).slice(0, 3);
  const suggestedClubs = clubs.filter((club) => !club.following).slice(0, 2);
  const closingSoon = [...opportunities].sort((a, b) => a.daysLeft - b.daysLeft).slice(0, 2);

  return (
    <aside className="hidden w-72 shrink-0 space-y-4 xl:block 2xl:w-80">
      <section className="rounded-2xl border border-line bg-surface p-4 shadow-card">
        <div className="flex items-center justify-between">
          <h2 className="flex items-center gap-2 font-display text-sm font-bold text-ink">
            <CalendarDaysIcon className="h-4 w-4 text-brand" aria-hidden="true" />
            Your week
          </h2>
          <Link to="/events" className="text-xs font-medium text-brand hover:underline">
            Calendar
          </Link>
        </div>
        <ul className="mt-3 space-y-3">
          {upcoming.map((event) => {
            const meta = categoryMeta[event.category];
            return (
              <li key={event.id} className="flex gap-3">
                <span className="flex h-10 w-10 shrink-0 flex-col items-center justify-center rounded-xl bg-elevated text-[10px] font-semibold uppercase text-muted">
                  {monthShort(event.date)}
                  <span className="font-display text-sm font-bold leading-none text-ink">
                    {dayNumber(event.date)}
                  </span>
                </span>
                <span className="min-w-0">
                  <Link
                    to={`/events/${event.id}`}
                    className="block truncate text-sm font-medium text-ink transition-colors duration-150 ease-out hover:text-brand">
                    
                    {event.title}
                  </Link>
                  <span className="flex items-center gap-1.5 text-xs text-muted">
                    <span className={`h-1.5 w-1.5 rounded-full ${meta.accent}`} aria-hidden="true" />
                    {relativeDay(event.date)} · {event.startTime}
                  </span>
                </span>
              </li>);

          })}
        </ul>
      </section>

      <section className="rounded-2xl border border-line bg-surface p-4 shadow-card">
        <h2 className="flex items-center gap-2 font-display text-sm font-bold text-ink">
          <FlameIcon className="h-4 w-4 text-brand" aria-hidden="true" />
          Trending on campus
        </h2>
        <ul className="mt-3 space-y-2.5">
          {trendingTopics.slice(0, 4).map((topic) =>
          <li key={topic.tag}>
              <Link to="/discover" className="group block">
                <span className="block truncate text-sm font-medium text-ink group-hover:text-brand">
                  #{topic.tag}
                </span>
                <span className="block truncate text-xs text-muted">
                  {topic.posts} posts · {topic.context}
                </span>
              </Link>
            </li>
          )}
        </ul>
      </section>

      <section className="rounded-2xl border border-line bg-surface p-4 shadow-card">
        <h2 className="flex items-center gap-2 font-display text-sm font-bold text-ink">
          <TimerIcon className="h-4 w-4 text-cat-opportunity-fg" aria-hidden="true" />
          Closing soon
        </h2>
        <ul className="mt-3 space-y-3">
          {closingSoon.map((item) =>
          <li key={item.id}>
              <Link to="/opportunities" className="group block">
                <span className="block truncate text-sm font-medium text-ink group-hover:text-brand">
                  {item.role}
                </span>
                <span className="block truncate text-xs text-muted">
                  {item.organization} · {item.daysLeft} days left
                </span>
              </Link>
            </li>
          )}
        </ul>
      </section>

      <section className="rounded-2xl border border-line bg-surface p-4 shadow-card">
        <h2 className="font-display text-sm font-bold text-ink">Recommended for you</h2>
        <p className="mt-1 text-xs text-muted">Based on your faculty, batch and interests</p>
        <ul className="mt-3 space-y-3">
          {suggested.map((community) =>
          <li key={community.id} className="flex items-center gap-3">
              <div className="min-w-0 flex-1">
                <Link
                to={`/communities/${community.id}`}
                className="block truncate text-sm font-medium text-ink hover:text-brand">
                
                  {community.name}
                </Link>
                <p className="truncate text-xs text-muted">
                  {formatCount(community.members)} members · {community.visibility}
                </p>
              </div>
              <button
              type="button"
              className="shrink-0 rounded-lg border border-line px-2.5 py-1 text-xs font-semibold text-brand transition-colors duration-150 ease-out hover:border-brand hover:bg-brand-soft">
              
                Join
              </button>
            </li>
          )}
          {suggestedClubs.map((club) =>
          <li key={club.id} className="flex items-center gap-3">
              <div className="min-w-0 flex-1">
                <Link
                to={`/clubs/${club.id}`}
                className="block truncate text-sm font-medium text-ink hover:text-brand">
                
                  {club.name}
                </Link>
                <p className="truncate text-xs text-muted">
                  {club.category} · {formatCount(club.followers)} followers
                </p>
              </div>
              <button
              type="button"
              className="shrink-0 rounded-lg border border-line px-2.5 py-1 text-xs font-semibold text-brand transition-colors duration-150 ease-out hover:border-brand hover:bg-brand-soft">
              
                Follow
              </button>
            </li>
          )}
        </ul>
        <Link
          to="/discover"
          className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-brand hover:underline">
          
          See more in Discover
          <ArrowRightIcon className="h-3 w-3" aria-hidden="true" />
        </Link>
      </section>

      <p className="px-1 text-[11px] leading-relaxed text-muted">
        UniLK · Verified campus network for Sri Lankan education. Content policy · Report a
        problem
      </p>
    </aside>);

}