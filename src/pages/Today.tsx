import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  AlarmClockIcon,
  ArrowRightIcon,
  BookOpenIcon,
  CalendarIcon,
  ChevronRightIcon,
  GraduationCapIcon,
  MapPinIcon,
  MegaphoneIcon
} from
  'lucide-react';
import { QuickActions } from '../components/QuickActions';
import { CreatePostModal } from '../components/CreatePostModal';
import { PostCard } from '../components/PostCard';
import { RightRail } from '../components/RightRail';
import { EmptyState } from '../components/EmptyState';
import { currentUser } from '../data/user';
import { dayHighlights, todaySchedule, upcomingDeadlines } from '../data/today';
import { feedPosts } from '../data/feed';

const kindMeta: Record<string, { label: string; chip: string; Icon: typeof CalendarIcon; }> = {
  class: { label: 'Class', chip: 'bg-brand-soft text-brand', Icon: GraduationCapIcon },
  event: { label: 'Event', chip: 'bg-cat-event-bg text-cat-event-fg', Icon: CalendarIcon },
  deadline: { label: 'Deadline', chip: 'bg-cat-opportunity-bg text-cat-opportunity-fg', Icon: AlarmClockIcon },
  exam: { label: 'Exam', chip: 'bg-cat-announcement-bg text-cat-announcement-fg', Icon: BookOpenIcon }
};

const urgencyTone: Record<string, string> = {
  today: 'text-danger',
  soon: 'text-warning',
  later: 'text-faint'
};

export function Today() {
  const [composerOpen, setComposerOpen] = useState(false);
  const today = new Date();
  const dateLabel = today.toLocaleDateString('en-GB', {
    weekday: 'long',
    day: 'numeric',
    month: 'long'
  });

  const pinned = feedPosts.filter((post) => post.pinned).slice(0, 2);

  return (
    <div className="flex gap-6">
      <div className="min-w-0 flex-1 space-y-6">
        <header>
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brand">
            {dateLabel}
          </p>
          <h1 className="mt-2 font-display text-[28px] font-extrabold leading-tight tracking-tight text-ink sm:text-[34px]">
            Good morning, {currentUser.name}.
          </h1>
          <p className="mt-1.5 text-sm text-muted">
            {currentUser.institution}
            <span className="text-faint">
              {' '}
              · {currentUser.faculty} · {currentUser.batch}
            </span>
          </p>
        </header>

        <QuickActions onCompose={() => setComposerOpen(true)} />

        {/* Timeline */}
        <section aria-labelledby="your-day">
          <div className="flex items-baseline justify-between">
            <h2 id="your-day" className="font-display text-lg font-bold text-ink">
              Your day
            </h2>
            <Link
              to="/events"
              className="inline-flex items-center gap-1 text-sm font-semibold text-brand hover:underline">

              Full calendar
              <ChevronRightIcon className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          {todaySchedule.length === 0 ?
            <div className="mt-3">
              <EmptyState
                Icon={CalendarIcon}
                title="Nothing scheduled today"
                description="Your classes, events and deadlines will appear here as they’re published."
                actionLabel="Browse events"
                actionTo="/events" />

            </div> :

            <ol className="mt-3 overflow-hidden rounded-2xl border border-line bg-surface">
              {todaySchedule.map((item) => {
                const meta = kindMeta[item.kind];
                return (
                  <li
                    key={item.id}
                    className="flex gap-3 border-b border-line px-4 py-3.5 last:border-0 sm:gap-4 sm:px-5">
                    <div className="w-14 shrink-0 pt-0.5 text-right sm:w-16">
                      <p className="font-display text-sm font-bold text-ink">{item.time}</p>
                      {item.endTime !== item.time &&
                        <p className="text-[11px] text-faint">{item.endTime}</p>
                      }
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <span
                          className={`inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-[11px] font-semibold ${meta.chip}`}>

                          <meta.Icon className="h-3 w-3" aria-hidden="true" />
                          {meta.label}
                        </span>
                        {item.live &&
                          <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-cyan">
                            <span
                              className="live-dot h-1.5 w-1.5 rounded-full bg-cyan"
                              aria-hidden="true" />

                            Happening now
                          </span>
                        }
                      </div>
                      <p className="mt-1.5 text-[15px] font-semibold leading-snug text-ink">
                        {item.title}
                      </p>
                      <p className="text-sm text-muted">{item.detail}</p>
                      <p className="mt-1 inline-flex items-center gap-1.5 text-xs text-faint">
                        <MapPinIcon className="h-3.5 w-3.5" aria-hidden="true" />
                        {item.location}
                      </p>
                    </div>
                  </li>);

              })}
            </ol>
          }
        </section>

        {/* Deadlines + highlights */}
        <div className="grid gap-4 lg:grid-cols-2">
          <section
            aria-labelledby="deadlines"
            className="rounded-2xl border border-line bg-surface p-4 sm:p-5">

            <h2 id="deadlines" className="font-display text-base font-bold text-ink">
              Deadlines
            </h2>
            <ul className="mt-3 space-y-3">
              {upcomingDeadlines.map((deadline) =>
                <li key={deadline.id} className="flex items-start gap-3">
                  <span
                    className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${deadline.urgency === 'today' ?
                        'bg-danger' :
                        deadline.urgency === 'soon' ?
                          'bg-warning' :
                          'bg-line-strong'}`
                    }
                    aria-hidden="true" />

                  <span className="min-w-0 flex-1">
                    <span className="block text-sm font-medium leading-snug text-ink">
                      {deadline.title}
                    </span>
                    <span className="block text-xs text-faint">{deadline.context}</span>
                  </span>
                  <span
                    className={`shrink-0 text-xs font-semibold ${urgencyTone[deadline.urgency]}`}>

                    {deadline.due}
                  </span>
                </li>
              )}
            </ul>
          </section>

          <section aria-label="Campus at a glance" className="space-y-2.5">
            {dayHighlights.map((item) =>
              <Link
                key={item.id}
                to={item.to}
                className="flex items-center gap-3 rounded-2xl border border-line bg-surface px-4 py-3.5 transition-colors duration-150 ease-out hover:border-line-strong">

                <span className="min-w-0 flex-1">
                  <span className="block text-sm font-semibold text-ink">
                    {item.label} · <span className="text-brand">{item.value}</span>
                  </span>
                  <span className="block truncate text-xs text-faint">{item.detail}</span>
                </span>
                <ArrowRightIcon className="h-4 w-4 shrink-0 text-faint" aria-hidden="true" />
              </Link>
            )}
          </section>
        </div>

        {/* Official first */}
        <section aria-labelledby="official">
          <div className="flex items-baseline justify-between">
            <h2 id="official" className="flex items-center gap-2 font-display text-lg font-bold text-ink">
              <MegaphoneIcon className="h-[18px] w-[18px] text-brand" aria-hidden="true" />
              From your institution
            </h2>
            <Link
              to="/feed"
              className="inline-flex items-center gap-1 text-sm font-semibold text-brand hover:underline">

              Open feed
              <ChevronRightIcon className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
          <div className="mt-3 space-y-4">
            {pinned.map((post) =>
              <PostCard key={post.id} post={post} />
            )}
          </div>
        </section>
      </div>

      <RightRail />

      <CreatePostModal open={composerOpen} onClose={() => setComposerOpen(false)} />
    </div>);

}