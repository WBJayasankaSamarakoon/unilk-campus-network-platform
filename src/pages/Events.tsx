import React, { useState } from 'react';
import { PlusIcon } from 'lucide-react';
import { EventCard } from '../components/EventCard';
import { MonthCalendar } from '../components/MonthCalendar';
import { eventFilters, events } from '../data/events';
import { longDate } from '../utils/date';

export function Events() {
  const [filter, setFilter] = useState<string>('All');
  const [selectedDate, setSelectedDate] = useState<string | null>(null);

  const sorted = [...events].sort((a, b) => a.date.localeCompare(b.date));
  const visible = sorted.filter((event) => {
    const matchesFilter = filter === 'All' || event.categoryLabel === filter;
    const matchesDate = !selectedDate || event.date === selectedDate;
    return matchesFilter && matchesDate;
  });

  return (
    <div className="flex gap-6">
      <div className="min-w-0 flex-1 space-y-4">
        <header className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <h1 className="font-display text-3xl font-extrabold tracking-tight text-ink">
              Discover events
            </h1>
            <p className="mt-1.5 text-sm text-muted">
              Everything happening at Sabaragamuwa University over the next two weeks.
            </p>
          </div>
          <button
            type="button"
            className="inline-flex items-center gap-1.5 rounded-lg bg-brand px-3.5 py-2 text-sm font-semibold text-white transition-colors duration-150 ease-out hover:bg-brand-hover">
            
            <PlusIcon className="h-4 w-4" aria-hidden="true" />
            Create event
          </button>
        </header>

        <div className="no-scrollbar -mx-4 flex gap-2 overflow-x-auto px-4 md:mx-0 md:px-0">
          {eventFilters.map((option) =>
          <button
            key={option}
            type="button"
            onClick={() => setFilter(option)}
            aria-pressed={filter === option}
            className={`shrink-0 rounded-full border px-3.5 py-1.5 text-sm font-medium transition-colors duration-150 ease-out ${
            filter === option ?
            'border-brand bg-brand text-white' :
            'border-line bg-surface text-ink/75 hover:border-brand/50 hover:text-brand'}`
            }>
            
              {option}
            </button>
          )}
        </div>

        {selectedDate &&
        <p className="text-sm font-medium text-ink">
            Showing {longDate(selectedDate)}
            <button
            type="button"
            onClick={() => setSelectedDate(null)}
            className="ml-2 text-sm font-medium text-brand hover:underline">
            
              Show all dates
            </button>
          </p>
        }

        {visible.length === 0 ?
        <div className="rounded-2xl border border-dashed border-line bg-surface px-6 py-14 text-center">
            <p className="text-sm font-medium text-ink">No events match this view</p>
            <p className="mx-auto mt-1 max-w-xs text-sm text-muted">
              Try another category, or clear the selected date to see the full calendar.
            </p>
          </div> :

        <div className="space-y-4">
            {visible.map((event) =>
          <EventCard key={event.id} event={event} />
          )}
          </div>
        }
      </div>

      <aside className="hidden w-72 shrink-0 space-y-4 xl:block 2xl:w-80">
        <div className="sticky top-24 space-y-4">
          <section className="rounded-2xl border border-line bg-surface p-4 shadow-card">
            <MonthCalendar events={events} selected={selectedDate} onSelect={setSelectedDate} />
          </section>

          <section className="rounded-2xl border border-line bg-surface p-4 shadow-card">
            <h2 className="text-sm font-semibold text-ink">Your commitments</h2>
            <ul className="mt-3 space-y-2 text-sm">
              <li className="flex items-center justify-between">
                <span className="text-ink">Going</span>
                <span className="font-semibold text-brand">3 events</span>
              </li>
              <li className="flex items-center justify-between">
                <span className="text-ink">Interested</span>
                <span className="font-semibold text-ink">7 events</span>
              </li>
              <li className="flex items-center justify-between">
                <span className="text-ink">Registrations pending</span>
                <span className="font-semibold text-cat-opportunity-fg">2</span>
              </li>
            </ul>
            <p className="mt-3 border-t border-line pt-3 text-xs leading-relaxed text-muted">
              Reminders are sent 24 hours and 1 hour before each event you mark as going.
            </p>
          </section>
        </div>
      </aside>
    </div>);

}