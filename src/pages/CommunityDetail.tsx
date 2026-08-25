import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeftIcon, CheckCircle2Icon, LockIcon, MessageCircleIcon, HeartIcon } from 'lucide-react';
import { Avatar } from '../components/Avatar';
import { Composer } from '../components/Composer';
import { VerifiedBadge } from '../components/VerifiedBadge';
import { communities, discussions } from '../data/communities';
import { formatCount } from '../utils/categories';

export function CommunityDetail() {
  const { communityId } = useParams();
  const community = communities.find((item) => item.id === communityId);

  if (!community) {
    return (
      <div className="mx-auto max-w-md rounded-2xl border border-line bg-surface px-6 py-14 text-center">
        <h1 className="text-lg font-semibold text-ink">Community not found</h1>
        <p className="mt-1 text-sm text-muted">
          This community may have been archived by your institution.
        </p>
        <Link
          to="/communities"
          className="mt-4 inline-block rounded-lg bg-brand px-4 py-2 text-sm font-semibold text-white">
          
          Back to communities
        </Link>
      </div>);

  }

  return (
    <div className="mx-auto flex max-w-5xl gap-6">
      <div className="min-w-0 flex-1 space-y-4">
        <Link
          to="/communities"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-muted hover:text-ink">
          
          <ArrowLeftIcon className="h-4 w-4" aria-hidden="true" />
          Communities
        </Link>

        <header className="rounded-2xl border border-line bg-surface p-5 shadow-card">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <h1 className="text-2xl font-bold tracking-tight text-ink">{community.name}</h1>
              <p className="mt-1 flex flex-wrap items-center gap-2 text-sm text-muted">
                <span>{community.scope}</span>
                <span className="inline-flex items-center gap-1 rounded-full bg-canvas px-2 py-0.5 text-[11px] font-medium">
                  <LockIcon className="h-3 w-3" aria-hidden="true" />
                  {community.visibility}
                </span>
                <span>{formatCount(community.members)} members</span>
              </p>
            </div>
            <button
              type="button"
              className="rounded-lg border border-line px-3.5 py-2 text-sm font-semibold text-ink transition-colors duration-150 ease-out hover:border-brand hover:text-brand">
              
              {community.joined ? 'Joined' : 'Join community'}
            </button>
          </div>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink/75">
            {community.description}
          </p>
        </header>

        <Composer />

        <div className="space-y-3">
          {discussions.map((discussion) =>
          <article
            key={discussion.id}
            className="rounded-2xl border border-line bg-surface p-5 shadow-card">
            
              <div className="flex items-start gap-3">
                <Avatar name={discussion.author.name} color={discussion.author.color} />
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-x-1.5">
                    <span className="font-semibold text-ink">{discussion.author.name}</span>
                    <VerifiedBadge level={discussion.author.verification} />
                    <span className="text-sm text-muted">· {discussion.postedAt}</span>
                  </div>
                  <p className="text-sm text-muted">{discussion.author.role}</p>
                </div>
                {discussion.resolved &&
              <span className="inline-flex items-center gap-1 rounded-full bg-brand-soft px-2 py-0.5 text-[11px] font-semibold text-brand">
                    <CheckCircle2Icon className="h-3.5 w-3.5" aria-hidden="true" />
                    Confirmed
                  </span>
              }
              </div>

              <p className="mt-3 text-[15px] leading-relaxed text-ink/85">{discussion.body}</p>

              {discussion.poll &&
            <ul className="mt-3 space-y-2">
                  {discussion.poll.map((option) => {
                const total = discussion.poll!.reduce((sum, item) => sum + item.votes, 0);
                const percent = Math.round(option.votes / total * 100);
                return (
                  <li
                    key={option.label}
                    className="relative overflow-hidden rounded-lg border border-line px-3 py-2 text-sm">
                    
                        <span
                      className="absolute inset-y-0 left-0 bg-brand-soft"
                      style={{ width: `${percent}%` }}
                      aria-hidden="true" />
                    
                        <span className="relative flex justify-between">
                          <span className="font-medium text-ink">{option.label}</span>
                          <span className="text-muted">{percent}%</span>
                        </span>
                      </li>);

              })}
                </ul>
            }

              <div className="mt-4 flex items-center gap-4 border-t border-line pt-3 text-sm text-muted">
                <span className="inline-flex items-center gap-1.5">
                  <HeartIcon className="h-4 w-4" aria-hidden="true" />
                  {discussion.reactions}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <MessageCircleIcon className="h-4 w-4" aria-hidden="true" />
                  {discussion.replies} replies
                </span>
              </div>
            </article>
          )}
        </div>
      </div>

      <aside className="hidden w-72 shrink-0 lg:block">
        <div className="sticky top-24 space-y-4">
          <section className="rounded-2xl border border-line bg-surface p-4 shadow-card">
            <h2 className="text-sm font-semibold text-ink">Community rules</h2>
            <ol className="mt-3 space-y-2 text-sm leading-relaxed text-ink/75">
              <li>1. Keep posts relevant to this batch or faculty.</li>
              <li>2. No copyrighted books or paid course material.</li>
              <li>3. Verify announcements before resharing them.</li>
              <li>4. No harassment, spam or impersonation.</li>
            </ol>
            <p className="mt-3 border-t border-line pt-3 text-xs text-muted">
              Moderated by 2 batch representatives and the Faculty of Computing.
            </p>
          </section>

          <section className="rounded-2xl border border-line bg-surface p-4 shadow-card">
            <h2 className="text-sm font-semibold text-ink">Pinned this week</h2>
            <ul className="mt-3 space-y-2 text-sm text-ink/80">
              <li>Semester 5 timetable · official</li>
              <li>Software Architecture group list</li>
              <li>Lab 04 relocation notice</li>
            </ul>
          </section>
        </div>
      </aside>
    </div>);

}