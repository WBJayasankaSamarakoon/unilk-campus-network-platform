import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import {
  ArrowLeftIcon,
  BellIcon,
  CalendarIcon,
  ClockIcon,
  MapPinIcon,
  Share2Icon,
  UsersIcon } from
'lucide-react';
import { Avatar } from '../components/Avatar';
import { CategoryChip } from '../components/CategoryChip';
import { VerifiedBadge } from '../components/VerifiedBadge';
import { events } from '../data/events';
import { longDate, relativeDay } from '../utils/date';
import { formatCount } from '../utils/categories';

const speakers = [
{ name: 'Dr. Amali Gunasekara', role: 'Senior Lecturer, Computing' },
{ name: 'Ruwan Jayasekara', role: 'Engineering Lead, 99x' }];


export function EventDetail() {
  const { eventId } = useParams();
  const event = events.find((item) => item.id === eventId);
  const [status, setStatus] = useState<'none' | 'interested' | 'going'>('none');

  if (!event) {
    return (
      <div className="mx-auto max-w-md rounded-2xl border border-line bg-surface px-6 py-14 text-center">
        <h1 className="font-display text-lg font-bold text-ink">Event not found</h1>
        <p className="mt-1 text-sm text-muted">This event may have been cancelled or removed.</p>
        <Link
          to="/events"
          className="mt-4 inline-block rounded-lg bg-brand px-4 py-2 text-sm font-semibold text-white">
          
          Back to events
        </Link>
      </div>);

  }

  const related = events.filter((item) => item.id !== event.id).slice(0, 3);

  return (
    <div className="mx-auto max-w-5xl space-y-5">
      <Link
        to="/events"
        className="inline-flex items-center gap-1.5 text-sm font-medium text-muted transition-colors duration-150 ease-out hover:text-ink">
        
        <ArrowLeftIcon className="h-4 w-4" aria-hidden="true" />
        Events
      </Link>

      <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_300px]">
        <div className="space-y-5">
          <article className="overflow-hidden rounded-2xl border border-line bg-surface shadow-card">
            {event.cover ?
            <img src={event.cover} alt="" className="h-56 w-full object-cover sm:h-72" /> :

            <div className="brand-gradient h-32" />
            }
            <div className="p-5 sm:p-6">
              <div className="flex flex-wrap items-center gap-2">
                <CategoryChip category={event.category} label={event.categoryLabel} />
                <span className="text-xs font-medium text-muted">{relativeDay(event.date)}</span>
              </div>

              <h1 className="mt-3 font-display text-3xl font-extrabold leading-tight tracking-tight text-ink">
                {event.title}
              </h1>

              <div className="mt-3 flex items-center gap-2.5">
                <Avatar name={event.organizer} color="brand-gradient" size="sm" shape="squircle" />
                <span className="flex items-center gap-1.5 text-sm font-medium text-ink">
                  {event.organizer}
                  {event.organizerVerified && <VerifiedBadge level="official" />}
                </span>
              </div>

              <p className="mt-4 text-[15px] leading-relaxed text-ink/80">{event.description}</p>

              <h2 className="mt-6 font-display text-base font-bold text-ink">Speakers</h2>
              <ul className="mt-2.5 grid gap-2 sm:grid-cols-2">
                {speakers.map((speaker) =>
                <li key={speaker.name} className="flex items-center gap-3 rounded-xl border border-line p-3">
                    <Avatar name={speaker.name} color="bg-cat-club-fg" size="sm" />
                    <span className="min-w-0">
                      <span className="block truncate text-sm font-medium text-ink">
                        {speaker.name}
                      </span>
                      <span className="block truncate text-xs text-muted">{speaker.role}</span>
                    </span>
                  </li>
                )}
              </ul>
            </div>
          </article>

          <section>
            <h2 className="font-display text-lg font-bold text-ink">Related events</h2>
            <ul className="mt-3 grid gap-3 sm:grid-cols-3">
              {related.map((item) =>
              <li key={item.id}>
                  <Link
                  to={`/events/${item.id}`}
                  className="flex h-full flex-col rounded-2xl border border-line bg-surface p-4 shadow-card transition-shadow duration-150 ease-out hover:shadow-raised">
                  
                    <span className="text-xs font-medium text-brand">{item.categoryLabel}</span>
                    <span className="mt-1 line-clamp-2 text-sm font-semibold leading-snug text-ink">
                      {item.title}
                    </span>
                    <span className="mt-auto pt-3 text-xs text-muted">
                      {relativeDay(item.date)} · {item.startTime}
                    </span>
                  </Link>
                </li>
              )}
            </ul>
          </section>
        </div>

        <aside>
          <div className="sticky top-24 space-y-4">
            <section className="rounded-2xl border border-line bg-surface p-4 shadow-card">
              <dl className="space-y-3 text-sm">
                <div className="flex gap-2.5">
                  <CalendarIcon className="mt-0.5 h-4 w-4 shrink-0 text-muted" aria-hidden="true" />
                  <div>
                    <dt className="sr-only">Date</dt>
                    <dd className="font-medium text-ink">{longDate(event.date)}</dd>
                  </div>
                </div>
                <div className="flex gap-2.5">
                  <ClockIcon className="mt-0.5 h-4 w-4 shrink-0 text-muted" aria-hidden="true" />
                  <div>
                    <dt className="sr-only">Time</dt>
                    <dd className="text-ink">
                      {event.startTime} – {event.endTime}
                    </dd>
                  </div>
                </div>
                <div className="flex gap-2.5">
                  <MapPinIcon className="mt-0.5 h-4 w-4 shrink-0 text-muted" aria-hidden="true" />
                  <div>
                    <dt className="sr-only">Location</dt>
                    <dd className="text-ink">{event.location}</dd>
                  </div>
                </div>
                <div className="flex gap-2.5">
                  <UsersIcon className="mt-0.5 h-4 w-4 shrink-0 text-muted" aria-hidden="true" />
                  <div>
                    <dt className="sr-only">Attendance</dt>
                    <dd className="text-ink">
                      {formatCount(event.going)} going · {formatCount(event.interested)} interested
                    </dd>
                  </div>
                </div>
              </dl>

              {event.registrationRequired && event.registrationDeadline &&
              <p className="mt-4 rounded-lg bg-cat-opportunity-bg px-3 py-2 text-xs font-medium text-cat-opportunity-fg">
                  Registration closes {event.registrationDeadline}
                  {event.capacity ? ` · ${event.capacity} seats` : ''}
                </p>
              }

              <button
                type="button"
                onClick={() => setStatus(status === 'going' ? 'none' : 'going')}
                aria-pressed={status === 'going'}
                className={`mt-4 w-full rounded-xl px-4 py-2.5 text-sm font-semibold transition-colors duration-150 ease-out ${
                status === 'going' ?
                'bg-brand-soft text-brand' :
                'bg-brand text-white hover:bg-brand-hover'}`
                }>
                
                {status === 'going' ?
                "You're going" :
                event.registrationRequired ?
                'Register' :
                "I'm going"}
              </button>
              <button
                type="button"
                onClick={() => setStatus(status === 'interested' ? 'none' : 'interested')}
                aria-pressed={status === 'interested'}
                className={`mt-2 w-full rounded-xl border px-4 py-2.5 text-sm font-medium transition-colors duration-150 ease-out ${
                status === 'interested' ?
                'border-brand text-brand' :
                'border-line text-ink hover:border-brand hover:text-brand'}`
                }>
                
                Interested
              </button>

              <div className="mt-3 flex gap-2 border-t border-line pt-3">
                <button
                  type="button"
                  className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-lg px-2 py-1.5 text-xs font-medium text-muted transition-colors duration-150 ease-out hover:bg-elevated hover:text-ink">
                  
                  <BellIcon className="h-3.5 w-3.5" aria-hidden="true" />
                  Add reminder
                </button>
                <button
                  type="button"
                  className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-lg px-2 py-1.5 text-xs font-medium text-muted transition-colors duration-150 ease-out hover:bg-elevated hover:text-ink">
                  
                  <Share2Icon className="h-3.5 w-3.5" aria-hidden="true" />
                  Share
                </button>
              </div>
            </section>

            <section className="rounded-2xl border border-line bg-surface p-4 shadow-card">
              <h2 className="font-display text-sm font-bold text-ink">Who’s going</h2>
              <div className="mt-3 flex -space-x-2">
                {['Kavindu Perera', 'Hasini Wijesuriya', 'Tharindu Silva', 'Nimesha Rathnayake'].map(
                  (name) =>
                  <span key={name} className="rounded-full ring-2 ring-surface">
                      <Avatar name={name} size="sm" color="bg-cat-student-fg" />
                    </span>

                )}
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-elevated text-[11px] font-semibold text-muted ring-2 ring-surface">
                  +{formatCount(event.going - 4)}
                </span>
              </div>
              <p className="mt-3 text-xs text-muted">
                12 students from your batch are attending this event.
              </p>
            </section>
          </div>
        </aside>
      </div>
    </div>);

}