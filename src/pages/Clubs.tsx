import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CalendarIcon } from 'lucide-react';
import { Avatar } from '../components/Avatar';
import { VerifiedBadge } from '../components/VerifiedBadge';
import { clubs } from '../data/clubs';
import { formatCount } from '../utils/categories';

const categories = ['All', 'Technology', 'Sports', 'Cultural', 'Community service', 'Business', 'Leadership'];

export function Clubs() {
  const [category, setCategory] = useState('All');
  const [following, setFollowing] = useState<string[]>(
    clubs.filter((club) => club.following).map((club) => club.id)
  );

  const visible = clubs.filter((club) => category === 'All' || club.category === category);

  const toggle = (id: string) =>
  setFollowing((current) =>
  current.includes(id) ? current.filter((item) => item !== id) : [...current, id]
  );

  return (
    <div className="mx-auto max-w-5xl space-y-5">
      <header>
        <h1 className="font-display text-3xl font-extrabold tracking-tight text-ink">
          Clubs & societies
        </h1>
        <p className="mt-1.5 text-sm text-muted">
          Verified organisations at Sabaragamuwa University. Follow one to get its events and
          announcements in your feed.
        </p>
      </header>

      <div className="no-scrollbar -mx-4 flex gap-2 overflow-x-auto px-4 md:mx-0 md:px-0">
        {categories.map((option) =>
        <button
          key={option}
          type="button"
          onClick={() => setCategory(option)}
          aria-pressed={category === option}
          className={`shrink-0 rounded-full border px-3.5 py-1.5 text-sm font-medium transition-colors duration-150 ease-out ${
          category === option ?
          'border-brand bg-brand text-white' :
          'border-line bg-surface text-ink/75 hover:border-brand/50 hover:text-brand'}`
          }>
          
            {option}
          </button>
        )}
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        {visible.map((club) =>
        <article
          key={club.id}
          className="flex flex-col rounded-2xl border border-line bg-surface p-4 shadow-card">
          
            <div className="flex items-start gap-3">
              <Avatar name={club.shortName} size="lg" color="bg-cat-club-fg" />
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-1.5">
                  <Link
                  to={`/clubs/${club.id}`}
                  className="truncate text-base font-semibold text-ink hover:text-brand">
                  
                    {club.name}
                  </Link>
                  {club.verified && <VerifiedBadge level="official" />}
                </div>
                <p className="truncate text-xs text-muted">
                  {club.category} · {club.faculty}
                </p>
                <p className="mt-0.5 text-xs font-medium text-ink">
                  {formatCount(club.followers)} followers
                </p>
              </div>
            </div>

            <p className="mt-3 text-sm leading-relaxed text-ink/75">{club.about}</p>

            <div className="mt-auto pt-4">
              {club.upcoming ?
            <p className="flex items-center gap-1.5 text-xs font-medium text-brand">
                  <CalendarIcon className="h-3.5 w-3.5" aria-hidden="true" />
                  {club.upcoming}
                </p> :

            <p className="text-xs text-muted">No upcoming events</p>
            }
              <div className="mt-3 flex gap-2">
                <button
                type="button"
                onClick={() => toggle(club.id)}
                aria-pressed={following.includes(club.id)}
                className={`rounded-lg px-3.5 py-2 text-sm font-semibold transition-colors duration-150 ease-out ${
                following.includes(club.id) ?
                'bg-brand-soft text-brand' :
                'bg-brand text-white hover:bg-brand-hover'}`
                }>
                
                  {following.includes(club.id) ? 'Following' : 'Follow'}
                </button>
                <Link
                to={`/clubs/${club.id}`}
                className="rounded-lg border border-line px-3.5 py-2 text-sm font-medium text-ink transition-colors duration-150 ease-out hover:border-brand hover:text-brand">
                
                  View profile
                </Link>
              </div>
            </div>
          </article>
        )}
      </div>
    </div>);

}