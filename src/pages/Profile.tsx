import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AwardIcon, PencilIcon, SettingsIcon } from 'lucide-react';
import { Avatar } from '../components/Avatar';
import { PostCard } from '../components/PostCard';
import { VerifiedBadge } from '../components/VerifiedBadge';
import { currentUser, institution } from '../data/user';
import { feedPosts } from '../data/feed';
import { communities } from '../data/communities';
import { clubs } from '../data/clubs';
import { events } from '../data/events';
import { formatCount } from '../utils/categories';
import { relativeDay } from '../utils/date';

const tabs = ['Posts', 'Communities', 'Clubs', 'Events', 'Achievements'] as const;

const achievements = [
{ title: 'Hackathon 2025 — Runner up', detail: 'Computing Society · November 2025' },
{ title: 'Dean’s List, Year 2', detail: 'Faculty of Computing · 2025' },
{ title: 'Volunteer — Blood donation camp', detail: 'Rotaract Club of SUSL · March 2026' }];


export function Profile() {
  const [tab, setTab] = useState<(typeof tabs)[number]>('Posts');

  const myPosts = feedPosts.filter((post) => post.author.verification === 'student').slice(0, 2);
  const myCommunities = communities.filter((community) => community.joined);
  const myClubs = clubs.filter((club) => club.following);
  const myEvents = events.slice(0, 3);

  return (
    <div className="w-full space-y-5">
      <header className="overflow-hidden rounded-2xl border border-line bg-surface shadow-card">
        <div className="brand-gradient h-32 sm:h-40">
          <img src={institution.banner} alt="" className="h-full w-full object-cover opacity-90" />
        </div>
        <div className="p-5">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div className="flex items-end gap-4">
              <span className="-mt-14 rounded-2xl border-4 border-surface">
                <Avatar name={currentUser.fullName} size="lg" color="brand-gradient" />
              </span>
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <h1 className="font-display text-2xl font-extrabold tracking-tight text-ink">
                    {currentUser.fullName}
                  </h1>
                  <VerifiedBadge level="representative" withLabel />
                </div>
                <p className="mt-1 text-sm text-muted">
                  {currentUser.course} · {currentUser.year} · {currentUser.batch}
                </p>
                <Link
                  to="/institution"
                  className="mt-0.5 inline-flex items-center gap-1.5 text-sm font-medium text-brand hover:underline">
                  
                  {currentUser.institution}
                </Link>
              </div>
            </div>
            <div className="flex gap-2">
              <button
                type="button"
                className="inline-flex items-center gap-1.5 rounded-lg bg-brand px-3.5 py-2 text-sm font-semibold text-white transition-colors duration-150 ease-out hover:bg-brand-hover">
                
                <PencilIcon className="h-4 w-4" aria-hidden="true" />
                Edit profile
              </button>
              <Link
                to="/onboarding"
                className="inline-flex items-center gap-1.5 rounded-lg border border-line px-3.5 py-2 text-sm font-medium text-ink transition-colors duration-150 ease-out hover:border-brand hover:text-brand">
                
                <SettingsIcon className="h-4 w-4" aria-hidden="true" />
                Settings
              </Link>
            </div>
          </div>

          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-ink/80">
            Third-year software engineering student. Batch representative for SE 2026. Interested in
            distributed systems, cricket and building things that students actually use.
          </p>

          <dl className="mt-4 flex flex-wrap gap-x-8 gap-y-2 border-t border-line pt-4 text-sm">
            {[
            { label: 'Communities', value: myCommunities.length },
            { label: 'Clubs followed', value: myClubs.length },
            { label: 'Posts', value: 24 },
            { label: 'Events attended', value: 17 }].
            map((stat) =>
            <div key={stat.label}>
                <dt className="text-xs text-muted">{stat.label}</dt>
                <dd className="font-display text-lg font-bold text-ink">{stat.value}</dd>
              </div>
            )}
          </dl>
        </div>
      </header>

      <div role="tablist" aria-label="Profile sections" className="no-scrollbar flex gap-1 overflow-x-auto border-b border-line">
        {tabs.map((option) =>
        <button
          key={option}
          role="tab"
          aria-selected={tab === option}
          type="button"
          onClick={() => setTab(option)}
          className={`-mb-px shrink-0 border-b-2 px-3 py-2.5 text-sm font-medium transition-colors duration-150 ease-out ${
          tab === option ? 'border-brand text-brand' : 'border-transparent text-muted hover:text-ink'}`
          }>
          
            {option}
          </button>
        )}
      </div>

      {tab === 'Posts' &&
      <div className="space-y-4">
          {myPosts.map((post) =>
        <PostCard key={post.id} post={post} />
        )}
        </div>
      }

      {tab === 'Communities' &&
      <ul className="grid gap-3 sm:grid-cols-2">
          {myCommunities.map((community) =>
        <li key={community.id} className="rounded-2xl border border-line bg-surface p-4 shadow-card">
              <Link
            to={`/communities/${community.id}`}
            className="text-sm font-semibold text-ink hover:text-brand">
            
                {community.name}
              </Link>
              <p className="mt-0.5 text-xs text-muted">
                {community.scope} · {formatCount(community.members)} members
              </p>
            </li>
        )}
        </ul>
      }

      {tab === 'Clubs' &&
      <ul className="grid gap-3 sm:grid-cols-2">
          {myClubs.map((club) =>
        <li
          key={club.id}
          className="flex items-center gap-3 rounded-2xl border border-line bg-surface p-4 shadow-card">
          
              <Avatar name={club.shortName} color="brand-gradient" shape="squircle" />
              <span className="min-w-0">
                <Link
              to={`/clubs/${club.id}`}
              className="block truncate text-sm font-semibold text-ink hover:text-brand">
              
                  {club.name}
                </Link>
                <span className="block truncate text-xs text-muted">
                  {formatCount(club.followers)} followers
                </span>
              </span>
            </li>
        )}
        </ul>
      }

      {tab === 'Events' &&
      <ul className="space-y-3">
          {myEvents.map((event) =>
        <li key={event.id}>
              <Link
            to={`/events/${event.id}`}
            className="flex items-center justify-between gap-4 rounded-2xl border border-line bg-surface p-4 shadow-card transition-shadow duration-150 ease-out hover:shadow-raised">
            
                <span className="min-w-0">
                  <span className="block truncate text-sm font-semibold text-ink">
                    {event.title}
                  </span>
                  <span className="block text-xs text-muted">
                    {relativeDay(event.date)} · {event.organizer}
                  </span>
                </span>
                <span className="shrink-0 rounded-full bg-brand-soft px-2.5 py-1 text-[11px] font-semibold text-brand">
                  Going
                </span>
              </Link>
            </li>
        )}
        </ul>
      }

      {tab === 'Achievements' &&
      <ul className="space-y-3">
          {achievements.map((achievement) =>
        <li
          key={achievement.title}
          className="flex items-start gap-3 rounded-2xl border border-line bg-surface p-4 shadow-card">
          
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-cat-opportunity-bg">
                <AwardIcon className="h-4 w-4 text-cat-opportunity-fg" aria-hidden="true" />
              </span>
              <span>
                <span className="block text-sm font-semibold text-ink">{achievement.title}</span>
                <span className="block text-xs text-muted">{achievement.detail}</span>
              </span>
            </li>
        )}
        </ul>
      }
    </div>);

}