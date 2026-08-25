import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRightIcon, FlameIcon, TrendingUpIcon } from 'lucide-react';
import { Avatar } from '../components/Avatar';
import { VerifiedBadge } from '../components/VerifiedBadge';
import { discoverSections, institutionsDirectory, trendingTopics } from '../data/discover';
import { clubs } from '../data/clubs';
import { communities } from '../data/communities';
import { events } from '../data/events';
import { formatCount } from '../utils/categories';
import { dayNumber, monthShort, relativeDay } from '../utils/date';

export function Discover() {
  const recommendedEvents = events.slice(0, 3);
  const recommendedClubs = clubs.filter((club) => !club.following).slice(0, 4);
  const recommendedCommunities = communities.filter((community) => !community.joined).slice(0, 3);

  return (
    <div className="mx-auto max-w-5xl space-y-8">
      <header>
        <h1 className="font-display text-3xl font-extrabold tracking-tight text-ink">Discover</h1>
        <p className="mt-1.5 text-sm text-muted">
          What’s moving around Sabaragamuwa University right now, and what we think is worth your
          time.
        </p>
      </header>

      <section>
        <h2 className="flex items-center gap-2 font-display text-lg font-bold text-ink">
          <FlameIcon className="h-4 w-4 text-brand" aria-hidden="true" />
          Trending on your campus
        </h2>
        <ol className="mt-3 divide-y divide-line overflow-hidden rounded-2xl border border-line bg-surface shadow-card">
          {trendingTopics.map((topic, index) =>
          <li key={topic.tag}>
              <button
              type="button"
              className="flex w-full items-center gap-4 px-4 py-3.5 text-left transition-colors duration-150 ease-out hover:bg-elevated">
              
                <span className="font-display text-sm font-bold text-muted">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block truncate text-sm font-semibold text-ink">
                    #{topic.tag}
                  </span>
                  <span className="block truncate text-xs text-muted">{topic.context}</span>
                </span>
                <span className="flex shrink-0 items-center gap-1 text-xs font-medium text-muted">
                  <TrendingUpIcon className="h-3.5 w-3.5" aria-hidden="true" />
                  {topic.posts}
                </span>
              </button>
            </li>
          )}
        </ol>
      </section>

      <section>
        <div className="flex items-baseline justify-between">
          <h2 className="font-display text-lg font-bold text-ink">Events picked for you</h2>
          <Link to="/events" className="text-sm font-medium text-brand hover:underline">
            All events
          </Link>
        </div>
        <div className="mt-3 grid gap-3 sm:grid-cols-3">
          {recommendedEvents.map((event) =>
          <Link
            key={event.id}
            to={`/events/${event.id}`}
            className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-surface shadow-card transition-shadow duration-150 ease-out hover:shadow-raised">
            
              <div className="relative h-28 bg-elevated">
                {event.cover &&
              <img src={event.cover} alt="" className="h-28 w-full object-cover" />
              }
                <span className="absolute left-3 top-3 flex h-11 w-11 flex-col items-center justify-center rounded-xl bg-surface/95 text-[10px] font-semibold uppercase text-muted shadow-card">
                  {monthShort(event.date)}
                  <span className="font-display text-base font-bold leading-none text-ink">
                    {dayNumber(event.date)}
                  </span>
                </span>
              </div>
              <div className="flex flex-1 flex-col p-4">
                <p className="text-xs font-medium text-brand">{event.categoryLabel}</p>
                <h3 className="mt-1 line-clamp-2 text-sm font-semibold leading-snug text-ink">
                  {event.title}
                </h3>
                <p className="mt-auto pt-3 text-xs text-muted">
                  {relativeDay(event.date)} · {formatCount(event.going)} going
                </p>
              </div>
            </Link>
          )}
        </div>
      </section>

      <div className="grid gap-6 lg:grid-cols-2">
        <section>
          <h2 className="font-display text-lg font-bold text-ink">Communities to join</h2>
          <ul className="mt-3 space-y-2">
            {recommendedCommunities.map((community) =>
            <li
              key={community.id}
              className="flex items-center gap-3 rounded-2xl border border-line bg-surface p-3.5 shadow-card">
              
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-soft font-display text-sm font-bold text-brand">
                  {community.name.charAt(0)}
                </span>
                <span className="min-w-0 flex-1">
                  <Link
                  to={`/communities/${community.id}`}
                  className="block truncate text-sm font-semibold text-ink hover:text-brand">
                  
                    {community.name}
                  </Link>
                  <span className="block truncate text-xs text-muted">
                    {formatCount(community.members)} members · {community.visibility}
                  </span>
                </span>
                <button
                type="button"
                className="shrink-0 rounded-lg border border-line px-3 py-1.5 text-xs font-semibold text-brand transition-colors duration-150 ease-out hover:border-brand hover:bg-brand-soft">
                
                  Join
                </button>
              </li>
            )}
          </ul>
        </section>

        <section>
          <h2 className="font-display text-lg font-bold text-ink">Clubs & societies</h2>
          <ul className="mt-3 space-y-2">
            {recommendedClubs.map((club) =>
            <li
              key={club.id}
              className="flex items-center gap-3 rounded-2xl border border-line bg-surface p-3.5 shadow-card">
              
                <Avatar name={club.shortName} color="brand-gradient" shape="squircle" />
                <span className="min-w-0 flex-1">
                  <span className="flex items-center gap-1.5">
                    <Link
                    to={`/clubs/${club.id}`}
                    className="truncate text-sm font-semibold text-ink hover:text-brand">
                    
                      {club.name}
                    </Link>
                    {club.verified && <VerifiedBadge level="official" />}
                  </span>
                  <span className="block truncate text-xs text-muted">
                    {club.category} · {formatCount(club.followers)} followers
                  </span>
                </span>
                <Link
                to={`/clubs/${club.id}`}
                className="shrink-0 rounded-lg p-1.5 text-muted transition-colors duration-150 ease-out hover:bg-elevated hover:text-ink">
                
                  <ArrowUpRightIcon className="h-4 w-4" aria-hidden="true" />
                  <span className="sr-only">View {club.name}</span>
                </Link>
              </li>
            )}
          </ul>
        </section>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {discoverSections.map((section) =>
        <section key={section.id}>
            <h2 className="font-display text-lg font-bold text-ink">{section.title}</h2>
            <ul className="mt-3 space-y-2">
              {section.items.map((item) =>
            <li
              key={item.id}
              className="flex items-center gap-3 rounded-2xl border border-line bg-surface p-3.5 shadow-card">
              
                  <Avatar name={item.name} color={item.color} />
                  <span className="min-w-0 flex-1">
                    <span className="block truncate text-sm font-semibold text-ink">
                      {item.name}
                    </span>
                    <span className="block truncate text-xs text-muted">{item.meta}</span>
                  </span>
                  <button
                type="button"
                className="shrink-0 rounded-lg border border-line px-3 py-1.5 text-xs font-semibold text-brand transition-colors duration-150 ease-out hover:border-brand hover:bg-brand-soft">
                
                    Follow
                  </button>
                </li>
            )}
            </ul>
          </section>
        )}

        <section>
          <h2 className="font-display text-lg font-bold text-ink">Institutions on UniLK</h2>
          <ul className="mt-3 space-y-2">
            {institutionsDirectory.map((item) =>
            <li
              key={item.id}
              className="flex items-center gap-3 rounded-2xl border border-line bg-surface p-3.5 shadow-card">
              
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-elevated font-display text-xs font-bold text-ink">
                  {item.name.split(' ')[0].slice(0, 3).toUpperCase()}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="flex items-center gap-1.5">
                    <span className="truncate text-sm font-semibold text-ink">{item.name}</span>
                    <VerifiedBadge level="official" />
                  </span>
                  <span className="block text-xs text-muted">
                    {formatCount(item.students)} students
                  </span>
                </span>
                {item.primary ?
              <Link
                to="/institution"
                className="shrink-0 rounded-lg bg-brand-soft px-3 py-1.5 text-xs font-semibold text-brand">
                
                    Your campus
                  </Link> :

              <button
                type="button"
                className="shrink-0 rounded-lg border border-line px-3 py-1.5 text-xs font-semibold text-muted transition-colors duration-150 ease-out hover:border-brand hover:text-brand">
                
                    Follow
                  </button>
              }
              </li>
            )}
          </ul>
        </section>
      </div>
    </div>);

}