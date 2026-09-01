import React from 'react';
import { Link } from 'react-router-dom';
import { MapPinIcon, UsersIcon } from 'lucide-react';
import { PostCard } from '../components/PostCard';
import { VerifiedBadge } from '../components/VerifiedBadge';
import { institution } from '../data/user';
import { feedPosts } from '../data/feed';
import { clubs } from '../data/clubs';
import { formatCount } from '../utils/categories';

export function Institution() {
  const officialPosts = feedPosts.filter((post) => post.author.verification === 'official').slice(0, 3);

  return (
    <div className="w-full space-y-5">
      <header className="overflow-hidden rounded-2xl border border-line bg-surface shadow-card">
        <img
          src={institution.banner}
          alt=""
          className="h-60 w-full object-cover sm:h-72 md:h-80 lg:h-96"
        />
        <div className="p-5">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <h1 className="font-display text-3xl font-extrabold tracking-tight text-ink">
                  {institution.name}
                </h1>
                <VerifiedBadge level="official" withLabel />
              </div>
              <p className="mt-1.5 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted">
                <span className="flex items-center gap-1.5">
                  <MapPinIcon className="h-4 w-4" aria-hidden="true" />
                  {institution.location}
                </span>
                <span className="flex items-center gap-1.5">
                  <UsersIcon className="h-4 w-4" aria-hidden="true" />
                  {formatCount(institution.onPlatform)} students on UniLK
                </span>
                <span>Established {institution.established}</span>
              </p>
            </div>
            <button
              type="button"
              className="rounded-lg bg-brand px-4 py-2 text-sm font-semibold text-white transition-colors duration-150 ease-out hover:bg-brand-hover">
              
              Following
            </button>
          </div>
        </div>
      </header>

      <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_300px]">
        <div className="space-y-4">
          <section>
            <h2 className="text-sm font-semibold uppercase tracking-wide text-muted">
              Official announcements
            </h2>
            <div className="mt-3 space-y-4">
              {officialPosts.map((post) =>
              <PostCard key={post.id} post={post} />
              )}
            </div>
          </section>
        </div>

        <div className="space-y-4">
          <section className="rounded-2xl border border-line bg-surface p-4 shadow-card">
            <h2 className="text-sm font-semibold text-ink">Faculties</h2>
            <p className="mt-1 text-xs text-muted">Students registered on UniLK</p>
            <ul className="mt-3 space-y-3">
              {institution.faculties.map((faculty) => {
                const percent = Math.round(faculty.joined / faculty.students * 100);
                return (
                  <li key={faculty.name}>
                    <div className="flex items-baseline justify-between text-sm">
                      <span className="font-medium text-ink">{faculty.name}</span>
                      <span className="text-xs text-muted">{percent}%</span>
                    </div>
                    <div className="mt-1 h-1.5 w-full overflow-hidden rounded-full bg-elevated">
                      <div
                        className="h-full rounded-full bg-brand"
                        style={{ width: `${percent}%` }}
                        aria-hidden="true" />
                      
                    </div>
                    <p className="mt-1 text-xs text-muted">
                      {faculty.joined} of {faculty.students} students · {faculty.departments}{' '}
                      departments
                    </p>
                  </li>);

              })}
            </ul>
          </section>

          <section className="rounded-2xl border border-line bg-surface p-4 shadow-card">
            <h2 className="text-sm font-semibold text-ink">Verified organisations</h2>
            <ul className="mt-3 space-y-2.5">
              {clubs.
              filter((club) => club.verified).
              slice(0, 5).
              map((club) =>
              <li key={club.id} className="flex items-center justify-between gap-3">
                    <Link
                  to={`/clubs/${club.id}`}
                  className="min-w-0 truncate text-sm font-medium text-ink hover:text-brand">
                  
                      {club.name}
                    </Link>
                    <span className="shrink-0 text-xs text-muted">
                      {formatCount(club.followers)}
                    </span>
                  </li>
              )}
            </ul>
            <Link to="/clubs" className="mt-3 block text-xs font-medium text-brand hover:underline">
              View all organisations
            </Link>
          </section>
        </div>
      </div>
    </div>);

}