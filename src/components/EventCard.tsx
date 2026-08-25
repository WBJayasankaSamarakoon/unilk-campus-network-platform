import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BookmarkIcon, ClockIcon, MapPinIcon, UsersIcon } from 'lucide-react';
import { CategoryChip } from './CategoryChip';
import { VerifiedBadge } from './VerifiedBadge';
import { dayNumber, monthShort, relativeDay } from '../utils/date';
import { formatCount } from '../utils/categories';
import type { CampusEvent } from '../types/campus';

interface EventCardProps {
  event: CampusEvent;
}

export function EventCard({ event }: EventCardProps) {
  const [status, setStatus] = useState<'none' | 'interested' | 'going'>('none');
  const [saved, setSaved] = useState(false);

  return (
    <article className="group overflow-hidden rounded-2xl border border-line bg-surface transition-colors duration-200 ease-out hover:border-line-strong">
      <div className="flex flex-col sm:flex-row">
        {/* Cover / date plate */}
        <div className="relative shrink-0 sm:w-52">
          {event.cover ?
          <img
            src={event.cover}
            alt=""
            className="h-40 w-full object-cover sm:h-full" /> :


          <div className="brand-gradient-soft h-24 w-full sm:h-full" />
          }
          <span className="glass-panel absolute left-3 top-3 flex h-14 w-14 flex-col items-center justify-center rounded-xl border border-line">
            <span className="text-[10px] font-semibold uppercase tracking-[0.08em] text-brand">
              {monthShort(event.date)}
            </span>
            <span className="font-display text-xl font-extrabold leading-none text-ink">
              {dayNumber(event.date)}
            </span>
          </span>
        </div>

        <div className="min-w-0 flex-1 p-4 sm:p-5">
          <div className="flex flex-wrap items-center gap-2">
            <CategoryChip category={event.category} label={event.categoryLabel} />
            <span className="text-xs font-medium text-cyan">{relativeDay(event.date)}</span>
            <motion.button
              type="button"
              onClick={() => setSaved((value) => !value)}
              aria-pressed={saved}
              whileTap={{ scale: 0.92 }}
              transition={{ duration: 0.12, ease: [0.23, 1, 0.32, 1] }}
              className={`ml-auto rounded-lg p-1.5 transition-colors duration-150 ease-out hover:bg-elevated ${
              saved ? 'text-brand' : 'text-faint'}`
              }>
              
              <BookmarkIcon
                className={`h-4 w-4 ${saved ? 'fill-current' : ''}`}
                aria-hidden="true" />
              
              <span className="sr-only">{saved ? 'Saved' : 'Save event'}</span>
            </motion.button>
          </div>

          <h3 className="mt-2 font-display text-lg font-bold leading-snug text-ink">
            <Link
              to={`/events/${event.id}`}
              className="transition-colors duration-150 ease-out hover:text-brand">
              
              {event.title}
            </Link>
          </h3>

          <p className="mt-1 flex items-center gap-1.5 text-sm text-muted">
            {event.organizer}
            {event.organizerVerified && <VerifiedBadge level="official" />}
          </p>

          <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted">
            {event.description}
          </p>

          <dl className="mt-3 flex flex-wrap gap-x-5 gap-y-1.5 text-[13px] text-faint">
            <div className="flex items-center gap-1.5">
              <ClockIcon className="h-3.5 w-3.5" aria-hidden="true" />
              <dt className="sr-only">Time</dt>
              <dd>
                {event.startTime} – {event.endTime}
              </dd>
            </div>
            <div className="flex items-center gap-1.5">
              <MapPinIcon className="h-3.5 w-3.5" aria-hidden="true" />
              <dt className="sr-only">Location</dt>
              <dd>{event.location}</dd>
            </div>
            <div className="flex items-center gap-1.5">
              <UsersIcon className="h-3.5 w-3.5" aria-hidden="true" />
              <dt className="sr-only">Attendance</dt>
              <dd>
                {formatCount(event.going)} going
                {event.capacity ? ` · ${event.capacity} seats` : ''}
              </dd>
            </div>
          </dl>

          {event.registrationRequired && event.registrationDeadline &&
          <p className="mt-3 inline-flex rounded-md bg-cat-opportunity-bg px-2 py-1 text-[11px] font-semibold text-cat-opportunity-fg">
              Registration closes {event.registrationDeadline}
            </p>
          }

          <div className="mt-4 flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={() => setStatus(status === 'going' ? 'none' : 'going')}
              aria-pressed={status === 'going'}
              className={`rounded-lg px-3.5 py-2 text-sm font-semibold transition-colors duration-150 ease-out ${
              status === 'going' ?
              'bg-brand text-white' :
              'border border-line text-ink hover:border-brand hover:text-brand'}`
              }>
              
              {status === 'going' ? 'Going' : 'I’m going'}
            </button>
            <button
              type="button"
              onClick={() => setStatus(status === 'interested' ? 'none' : 'interested')}
              aria-pressed={status === 'interested'}
              className={`rounded-lg px-3.5 py-2 text-sm font-medium transition-colors duration-150 ease-out ${
              status === 'interested' ?
              'bg-brand-soft text-brand' :
              'border border-line text-ink hover:border-brand hover:text-brand'}`
              }>
              
              Interested
            </button>
            {event.registrationRequired &&
            <Link
              to={`/events/${event.id}`}
              className="rounded-lg px-3 py-2 text-sm font-medium text-brand transition-colors duration-150 ease-out hover:bg-brand-soft">
              
                Register
              </Link>
            }
          </div>
        </div>
      </div>
    </article>);

}