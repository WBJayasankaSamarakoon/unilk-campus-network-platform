import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeftIcon, UsersIcon } from 'lucide-react';
import { Avatar } from '../components/Avatar';
import { EventCard } from '../components/EventCard';
import { PostCard } from '../components/PostCard';
import { VerifiedBadge } from '../components/VerifiedBadge';
import { clubs } from '../data/clubs';
import { events } from '../data/events';
import { feedPosts } from '../data/feed';
import { formatCount } from '../utils/categories';

const tabs = ['Upcoming events', 'Posts', 'About'] as const;

export function ClubProfile() {
  const { clubId } = useParams();
  const club = clubs.find((item) => item.id === clubId);
  const [tab, setTab] = useState<(typeof tabs)[number]>('Upcoming events');
  const [following, setFollowing] = useState(Boolean(club?.following));

  if (!club) {
    return (
      <div className="mx-auto max-w-md rounded-2xl border border-line bg-surface px-6 py-14 text-center">
        <h1 className="text-lg font-semibold text-ink">Organisation not found</h1>
        <Link
          to="/clubs"
          className="mt-4 inline-block rounded-lg bg-brand px-4 py-2 text-sm font-semibold text-white">
          
          Back to clubs
        </Link>
      </div>);

  }

  const clubEvents = events.filter((event) => event.organizer === club.name);
  const clubPosts = feedPosts.filter((post) => post.author.name === club.name);

  return (
    <div className="w-full space-y-5">
      <Link
        to="/clubs"
        className="inline-flex items-center gap-1.5 text-sm font-medium text-muted hover:text-ink">
        
        <ArrowLeftIcon className="h-4 w-4" aria-hidden="true" />
        Clubs & societies
      </Link>

      <header className="overflow-hidden rounded-2xl border border-line bg-surface shadow-card">
        <div className="h-36 bg-cat-club-bg">
          {club.cover && <img src={club.cover} alt="" className="h-36 w-full object-cover" />}
        </div>
        <div className="flex flex-wrap items-end justify-between gap-4 p-5">
          <div className="flex items-end gap-4">
            <span className="-mt-12 rounded-2xl border-4 border-surface">
              <Avatar name={club.shortName} size="lg" color="bg-cat-club-fg" />
            </span>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-xl font-bold tracking-tight text-ink">{club.name}</h1>
                {club.verified && <VerifiedBadge level="official" withLabel />}
              </div>
              <p className="mt-0.5 text-sm text-muted">
                {club.category} · {club.faculty}
              </p>
              <p className="mt-1 flex items-center gap-1.5 text-sm font-medium text-ink">
                <UsersIcon className="h-4 w-4 text-muted" aria-hidden="true" />
                {formatCount(club.followers)} followers
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => setFollowing((value) => !value)}
            aria-pressed={following}
            className={`rounded-lg px-4 py-2 text-sm font-semibold transition-colors duration-150 ease-out ${
            following ? 'bg-brand-soft text-brand' : 'bg-brand text-white hover:bg-brand-hover'}`
            }>
            
            {following ? 'Following' : 'Follow'}
          </button>
        </div>
      </header>

      <div role="tablist" aria-label="Organisation sections" className="flex gap-1 border-b border-line">
        {tabs.map((option) =>
        <button
          key={option}
          role="tab"
          aria-selected={tab === option}
          type="button"
          onClick={() => setTab(option)}
          className={`-mb-px border-b-2 px-3 py-2.5 text-sm font-medium transition-colors duration-150 ease-out ${
          tab === option ?
          'border-brand text-brand' :
          'border-transparent text-muted hover:text-ink'}`
          }>
          
            {option}
          </button>
        )}
      </div>

      {tab === 'Upcoming events' &&
      <div className="space-y-4">
          {clubEvents.length ?
        clubEvents.map((event) => <EventCard key={event.id} event={event} />) :

        <p className="rounded-2xl border border-dashed border-line bg-surface px-6 py-12 text-center text-sm text-muted">
              {club.name} has no events scheduled right now.
            </p>
        }
        </div>
      }

      {tab === 'Posts' &&
      <div className="space-y-4">
          {clubPosts.length ?
        clubPosts.map((post) => <PostCard key={post.id} post={post} />) :

        <p className="rounded-2xl border border-dashed border-line bg-surface px-6 py-12 text-center text-sm text-muted">
              No posts published yet.
            </p>
        }
        </div>
      }

      {tab === 'About' &&
      <div className="grid gap-4 sm:grid-cols-2">
          <section className="rounded-2xl border border-line bg-surface p-5 shadow-card">
            <h2 className="text-sm font-semibold text-ink">About</h2>
            <p className="mt-2 text-sm leading-relaxed text-ink/75">{club.about}</p>
          </section>
          <section className="rounded-2xl border border-line bg-surface p-5 shadow-card">
            <h2 className="text-sm font-semibold text-ink">Verification</h2>
            <p className="mt-2 text-sm leading-relaxed text-ink/75">
              {club.verified ?
            'Approved as an official organisation account by the institution administrator. Posts from this account carry the official badge.' :
            'This organisation has not completed institution verification. Treat its announcements as student-generated.'}
            </p>
            <dl className="mt-3 space-y-1.5 text-sm">
              <div className="flex justify-between">
                <dt className="text-muted">Admins</dt>
                <dd className="text-ink">4 student officers</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-muted">Reports this term</dt>
                <dd className="text-ink">0</dd>
              </div>
            </dl>
          </section>
        </div>
      }
    </div>);

}