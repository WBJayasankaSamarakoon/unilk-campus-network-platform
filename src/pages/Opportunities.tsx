import React, { useState } from 'react';
import { BookmarkIcon, BriefcaseIcon, ClockIcon, MapPinIcon, SparklesIcon } from 'lucide-react';
import { EmptyState } from '../components/EmptyState';
import { opportunities, opportunityTypes } from '../data/opportunities';

export function Opportunities() {
  const [type, setType] = useState<string>('All');
  const [saved, setSaved] = useState<string[]>([]);

  const visible = opportunities.filter((item) => type === 'All' || item.type === type);

  const toggleSave = (id: string) =>
  setSaved((current) =>
  current.includes(id) ? current.filter((item) => item !== id) : [...current, id]
  );

  return (
    <div className="mx-auto max-w-5xl space-y-5">
      <header>
        <h1 className="font-display text-3xl font-extrabold tracking-tight text-ink">
          Opportunities
        </h1>
        <p className="mt-1.5 max-w-2xl text-sm text-muted">
          Internships, scholarships and competitions posted by your institution and verified
          organisations — filtered to what your faculty and year can actually apply for.
        </p>
      </header>

      <div className="no-scrollbar -mx-4 flex gap-2 overflow-x-auto px-4 md:mx-0 md:px-0">
        {opportunityTypes.map((option) =>
        <button
          key={option}
          type="button"
          onClick={() => setType(option)}
          aria-pressed={type === option}
          className={`shrink-0 rounded-full border px-3.5 py-1.5 text-sm font-medium transition-colors duration-150 ease-out ${
          type === option ?
          'border-brand bg-brand text-white' :
          'border-line bg-surface text-muted hover:border-brand/50 hover:text-brand'}`
          }>
          
            {option}
          </button>
        )}
      </div>

      {visible.length === 0 ?
      <EmptyState
        Icon={BriefcaseIcon}
        title="No open opportunities in this category"
        description="New internships, scholarships and competitions relevant to your course will appear here."
        actionLabel="Explore events"
        actionTo="/events" /> :


      <ul className="space-y-3">
          {visible.map((item) => {
          const urgent = item.daysLeft <= 7;
          return (
            <li
              key={item.id}
              className="rounded-2xl border border-line bg-surface p-5 shadow-card transition-shadow duration-150 ease-out hover:shadow-raised">
              
                <div className="flex items-start gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-soft font-display text-sm font-bold text-brand ring-1 ring-brand/25">
                    {item.organization.slice(0, 2).toUpperCase()}
                  </span>

                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <h2 className="text-base font-semibold text-ink">{item.role}</h2>
                      <span className="rounded-full bg-cat-opportunity-bg px-2 py-0.5 text-[11px] font-semibold text-cat-opportunity-fg">
                        {item.type}
                      </span>
                    </div>
                    <p className="mt-0.5 text-sm text-muted">{item.organization}</p>

                    <dl className="mt-2.5 flex flex-wrap gap-x-5 gap-y-1.5 text-sm text-muted">
                      <div className="flex items-center gap-1.5">
                        <MapPinIcon className="h-4 w-4" aria-hidden="true" />
                        <dt className="sr-only">Location</dt>
                        <dd>
                          {item.location} · {item.mode}
                        </dd>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <ClockIcon className="h-4 w-4" aria-hidden="true" />
                        <dt className="sr-only">Deadline</dt>
                        <dd className={urgent ? 'font-semibold text-cat-announcement-fg' : ''}>
                          Closes {item.deadline}
                          {urgent ? ` · ${item.daysLeft} days left` : ''}
                        </dd>
                      </div>
                      {item.compensation &&
                    <div className="flex items-center gap-1.5">
                          <BriefcaseIcon className="h-4 w-4" aria-hidden="true" />
                          <dt className="sr-only">Compensation</dt>
                          <dd>{item.compensation}</dd>
                        </div>
                    }
                    </dl>

                    <p className="mt-2.5 inline-flex items-center gap-1.5 rounded-lg bg-brand-soft px-2.5 py-1 text-xs font-medium text-brand">
                      <SparklesIcon className="h-3.5 w-3.5" aria-hidden="true" />
                      {item.relevance}
                    </p>

                    <p className="mt-2 text-xs text-muted">{item.posted}</p>
                  </div>

                  <div className="hidden shrink-0 flex-col gap-2 sm:flex">
                    <button
                    type="button"
                    className="rounded-lg bg-brand px-4 py-2 text-sm font-semibold text-white transition-colors duration-150 ease-out hover:bg-brand-hover">
                    
                      Apply
                    </button>
                    <button
                    type="button"
                    onClick={() => toggleSave(item.id)}
                    aria-pressed={saved.includes(item.id)}
                    className={`inline-flex items-center justify-center gap-1.5 rounded-lg border px-4 py-2 text-sm font-medium transition-colors duration-150 ease-out ${
                    saved.includes(item.id) ?
                    'border-brand bg-brand-soft text-brand' :
                    'border-line text-ink hover:border-brand hover:text-brand'}`
                    }>
                    
                      <BookmarkIcon
                      className={`h-4 w-4 ${saved.includes(item.id) ? 'fill-current' : ''}`}
                      aria-hidden="true" />
                    
                      {saved.includes(item.id) ? 'Saved' : 'Save'}
                    </button>
                  </div>
                </div>

                <div className="mt-4 flex gap-2 sm:hidden">
                  <button
                  type="button"
                  className="flex-1 rounded-lg bg-brand px-4 py-2 text-sm font-semibold text-white">
                  
                    Apply
                  </button>
                  <button
                  type="button"
                  onClick={() => toggleSave(item.id)}
                  className="rounded-lg border border-line px-4 py-2 text-sm font-medium text-ink">
                  
                    {saved.includes(item.id) ? 'Saved' : 'Save'}
                  </button>
                </div>
              </li>);

        })}
        </ul>
      }
    </div>);

}