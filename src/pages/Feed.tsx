import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  BriefcaseIcon,
  CalendarIcon,
  GlobeIcon,
  MapPinIcon,
  MessageSquareIcon,
  NewspaperIcon,
  SparklesIcon } from
'lucide-react';
import { Composer } from '../components/Composer';
import { PostCard } from '../components/PostCard';
import { RightRail } from '../components/RightRail';
import { FeedSkeleton } from '../components/Skeleton';
import { EmptyState } from '../components/EmptyState';
import { feedFilters, feedPosts, nationalPosts } from '../data/feed';
import { currentUser } from '../data/user';
import type { FeedPost } from '../types/campus';

const overview = [
{ value: '3', label: 'Events today', hint: 'Next at 2:00 PM', to: '/events', Icon: CalendarIcon, tone: 'text-brand' },
{ value: '8', label: 'New updates', hint: '2 official', to: '/notifications', Icon: SparklesIcon, tone: 'text-cyan' },
{ value: '5', label: 'Active communities', hint: '12 discussions', to: '/communities', Icon: MessageSquareIcon, tone: 'text-brand' },
{ value: '4', label: 'Opportunities', hint: '1 closing soon', to: '/opportunities', Icon: BriefcaseIcon, tone: 'text-cyan' }];


const scopes = [
{ id: 'campus', label: 'My Campus', Icon: MapPinIcon },
{ id: 'national', label: 'Global Campus', Icon: GlobeIcon }] as
const;

function matches(post: FeedPost, filter: string): boolean {
  switch (filter) {
    case 'Announcements':
      return post.category === 'announcement';
    case 'Events':
      return post.category === 'event';
    case 'My batch':
      return post.audience.includes('2026');
    case 'Sports':
      return post.category === 'sports';
    case 'Opportunities':
      return post.category === 'opportunity';
    default:
      return true;
  }
}

export function Feed() {
  const [scope, setScope] = useState<'campus' | 'national'>('campus');
  const [filter, setFilter] = useState<string>('For you');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const timer = window.setTimeout(() => setLoading(false), 550);
    return () => window.clearTimeout(timer);
  }, [filter, scope]);

  const source = scope === 'campus' ? feedPosts : nationalPosts;
  const visible = source.filter((post) => matches(post, filter));

  return (
    <div className="flex gap-6">
      <div className="min-w-0 flex-1 space-y-5">
        <header className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <h1 className="font-display text-[28px] font-extrabold leading-tight tracking-tight text-ink sm:text-[32px]">
              Good morning, {currentUser.name}.
            </h1>
            <p className="mt-1 text-sm text-muted">
              {currentUser.institution}
              <span className="text-faint"> · {currentUser.faculty} · {currentUser.batch}</span>
            </p>
          </div>
          <span className="hidden items-center gap-1.5 rounded-full border border-line px-2.5 py-1 text-[11px] font-medium text-muted sm:inline-flex">
            <span className="live-dot h-1.5 w-1.5 rounded-full bg-success" aria-hidden="true" />
            Campus is active
          </span>
        </header>

        <section aria-label="Today at a glance" className="grid grid-cols-2 gap-2.5 lg:grid-cols-4">
          {overview.map(({ value, label, hint, to, Icon, tone }) =>
          <Link
            key={label}
            to={to}
            className="group rounded-xl border border-line bg-surface p-3.5 transition-colors duration-150 ease-out hover:border-line-strong">
            
              <span className="flex items-center justify-between">
                <Icon className={`h-4 w-4 ${tone}`} aria-hidden="true" />
                <span className="font-display text-xl font-extrabold tracking-tight text-ink">
                  {value}
                </span>
              </span>
              <span className="mt-2 block text-[13px] font-medium text-ink">{label}</span>
              <span className="block truncate text-[11px] text-faint">{hint}</span>
            </Link>
          )}
        </section>

        <div className="flex flex-wrap items-center justify-between gap-3">
          <div
            role="tablist"
            aria-label="Feed scope"
            className="inline-flex rounded-xl border border-line bg-sunken p-1">
            
            {scopes.map(({ id, label, Icon }) =>
            <button
              key={id}
              role="tab"
              aria-selected={scope === id}
              type="button"
              onClick={() => setScope(id)}
              className={`flex items-center gap-2 rounded-lg px-3.5 py-1.5 text-[13px] font-semibold transition-colors duration-150 ease-out ${
              scope === id ? 'bg-surface text-ink shadow-card' : 'text-muted hover:text-ink'}`
              }>
              
                <Icon
                className={`h-3.5 w-3.5 ${scope === id ? id === 'campus' ? 'text-brand' : 'text-cyan' : ''}`}
                aria-hidden="true" />
              
                {label}
              </button>
            )}
          </div>

          <p className="hidden text-xs text-faint md:block">
            {scope === 'campus' ?
            'Ranked by relevance to your faculty and batch' :
            'Open to students across Sri Lanka'}
          </p>
        </div>

        {scope === 'campus' && <Composer />}

        <div>
          <div
            role="tablist"
            aria-label="Feed filters"
            className="no-scrollbar -mx-4 flex gap-2 overflow-x-auto px-4 sm:mx-0 sm:px-0">
            
            {feedFilters.map((option) =>
            <button
              key={option}
              role="tab"
              aria-selected={filter === option}
              type="button"
              onClick={() => setFilter(option)}
              className={`shrink-0 rounded-full border px-3.5 py-1.5 text-[13px] font-medium transition-colors duration-150 ease-out ${
              filter === option ?
              'border-brand/40 bg-brand-soft text-brand' :
              'border-line bg-surface text-muted hover:border-line-strong hover:text-ink'}`
              }>
              
                {option}
              </button>
            )}
          </div>

          <div className="mt-4">
            {loading ?
            <FeedSkeleton /> :
            visible.length === 0 ?
            <EmptyState
              Icon={NewspaperIcon}
              title="Nothing happening yet"
              description={
              scope === 'campus' ?
              'Your campus hasn’t published anything in this filter. Try another view or look beyond your institution.' :
              'No national posts match this filter right now.'
              }
              actionLabel="Explore Global Campus"
              actionTo="/discover"
              secondaryLabel="Browse communities"
              secondaryTo="/communities" /> :


            <div className="space-y-4">
                {visible.map((post) =>
              <PostCard key={post.id} post={post} />
              )}
              </div>
            }
          </div>
        </div>

        {!loading && visible.length > 0 &&
        <p className="pb-2 text-center text-xs text-faint">
            {scope === 'campus' ?
          `You’re up to date with ${currentUser.institutionShort}.` :
          'You’re up to date with Global Campus.'}
          </p>
        }
      </div>

      <RightRail />
    </div>);

}