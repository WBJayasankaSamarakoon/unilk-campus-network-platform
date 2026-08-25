import React, { useState } from 'react';
import {
  BadgeCheckIcon,
  BookmarkIcon,
  ChevronRightIcon,
  DownloadIcon,
  FileIcon,
  SearchIcon,
  ShieldAlertIcon } from
'lucide-react';
import { EmptyState } from '../components/EmptyState';
import {
  resourceBreadcrumb,
  resourceSubjects,
  resourceTypes,
  resources } from
'../data/resources';
import { formatCount } from '../utils/categories';

export function Resources() {
  const [subject, setSubject] = useState<string>('All subjects');
  const [type, setType] = useState<string>('All');
  const [query, setQuery] = useState('');
  const [saved, setSaved] = useState<string[]>([]);

  const visible = resources.filter((resource) => {
    const bySubject = subject === 'All subjects' || resource.subject === subject;
    const byType = type === 'All' || resource.type === type;
    const byQuery =
    query.trim().length < 2 ||
    `${resource.title} ${resource.subject} ${resource.course}`.
    toLowerCase().
    includes(query.trim().toLowerCase());
    return bySubject && byType && byQuery;
  });

  const toggleSave = (id: string) =>
  setSaved((current) =>
  current.includes(id) ? current.filter((item) => item !== id) : [...current, id]
  );

  return (
    <div className="mx-auto max-w-6xl space-y-5">
      <header>
        <nav aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-1 text-xs text-muted">
            {resourceBreadcrumb.map((crumb, index) =>
            <li key={crumb} className="flex items-center gap-1">
                <span className={index === resourceBreadcrumb.length - 1 ? 'text-ink' : ''}>
                  {crumb}
                </span>
                {index < resourceBreadcrumb.length - 1 &&
              <ChevronRightIcon className="h-3 w-3" aria-hidden="true" />
              }
              </li>
            )}
          </ol>
        </nav>
        <h1 className="mt-2 font-display text-3xl font-extrabold tracking-tight text-ink">
          Academic resources
        </h1>
        <p className="mt-1.5 max-w-2xl text-sm text-muted">
          Past papers, lecture notes and lab sheets for your course — institution-provided or
          student-contributed, never pirated material.
        </p>
      </header>

      <div className="grid gap-5 lg:grid-cols-[220px_minmax(0,1fr)]">
        <aside>
          <div className="sticky top-24 space-y-4">
            <nav aria-label="Subjects" className="rounded-2xl border border-line bg-surface p-2 shadow-card">
              <p className="px-2 py-1.5 text-[11px] font-semibold uppercase tracking-[0.08em] text-muted">
                Subjects
              </p>
              {['All subjects', ...resourceSubjects.map((item) => item.name)].map((name) => {
                const meta = resourceSubjects.find((item) => item.name === name);
                return (
                  <button
                    key={name}
                    type="button"
                    onClick={() => setSubject(name)}
                    aria-pressed={subject === name}
                    className={`flex w-full items-center justify-between gap-2 rounded-lg px-2.5 py-2 text-left text-sm transition-colors duration-150 ease-out ${
                    subject === name ?
                    'bg-brand-soft font-semibold text-brand' :
                    'text-muted hover:bg-elevated hover:text-ink'}`
                    }>
                    
                    <span className="min-w-0 truncate">{name}</span>
                    <span className="shrink-0 text-[11px] text-muted">
                      {meta ? meta.count : resources.length}
                    </span>
                  </button>);

              })}
            </nav>

            <div className="rounded-2xl border border-line bg-surface p-4 shadow-card">
              <p className="flex items-center gap-1.5 text-xs font-semibold text-ink">
                <ShieldAlertIcon className="h-3.5 w-3.5 text-cat-opportunity-fg" aria-hidden="true" />
                Upload policy
              </p>
              <p className="mt-1.5 text-xs leading-relaxed text-muted">
                Copyrighted textbooks and paid course material are not allowed. Uploads are reviewed
                and can be taken down on report.
              </p>
            </div>
          </div>
        </aside>

        <div className="space-y-4">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <div className="relative flex-1">
              <SearchIcon
                className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted"
                aria-hidden="true" />
              
              <label htmlFor="resource-search" className="sr-only">
                Search resources
              </label>
              <input
                id="resource-search"
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search by paper, subject or course code"
                className="w-full rounded-xl border border-line bg-surface py-2.5 pl-9 pr-3 text-sm text-ink placeholder:text-muted focus:border-brand focus:outline-none" />
              
            </div>
            <button
              type="button"
              className="shrink-0 rounded-xl bg-brand px-4 py-2.5 text-sm font-semibold text-white transition-colors duration-150 ease-out hover:bg-brand-hover">
              
              Upload resource
            </button>
          </div>

          <div className="no-scrollbar -mx-4 flex gap-2 overflow-x-auto px-4 lg:mx-0 lg:px-0">
            {resourceTypes.map((option) =>
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
            Icon={FileIcon}
            title="No resources here yet"
            description="Nothing matches this filter. Materials uploaded by your department and batch will appear here."
            actionLabel="Browse communities"
            actionTo="/communities" /> :


          <ul className="grid gap-3 sm:grid-cols-2">
              {visible.map((resource) =>
            <li
              key={resource.id}
              className="flex flex-col rounded-2xl border border-line bg-surface p-4 shadow-card transition-shadow duration-150 ease-out hover:shadow-raised">
              
                  <div className="flex items-start gap-3">
                    <span className="flex h-11 w-11 shrink-0 flex-col items-center justify-center rounded-xl bg-elevated text-[10px] font-bold text-muted">
                      <FileIcon className="h-4 w-4" aria-hidden="true" />
                      {resource.fileType}
                    </span>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-sm font-semibold leading-snug text-ink">
                        {resource.title}
                      </h3>
                      <p className="mt-1 text-xs text-muted">
                        {resource.subject} · {resource.course} · {resource.year}
                      </p>
                    </div>
                  </div>

                  <div className="mt-3 flex flex-wrap items-center gap-2">
                    <span className="rounded-full bg-cat-resource-bg px-2 py-0.5 text-[11px] font-semibold text-cat-resource-fg">
                      {resource.type}
                    </span>
                    {resource.official &&
                <span className="inline-flex items-center gap-1 rounded-full bg-brand-soft px-2 py-0.5 text-[11px] font-semibold text-brand">
                        <BadgeCheckIcon className="h-3 w-3" aria-hidden="true" />
                        Institution provided
                      </span>
                }
                  </div>

                  <p className="mt-2 text-xs text-muted">
                    {resource.uploadedBy} · {resource.size} · {formatCount(resource.downloads)}{' '}
                    downloads
                  </p>

                  <div className="mt-auto flex items-center gap-2 pt-4">
                    <button
                  type="button"
                  className="inline-flex items-center gap-1.5 rounded-lg bg-brand px-3 py-1.5 text-xs font-semibold text-white transition-colors duration-150 ease-out hover:bg-brand-hover">
                  
                      <DownloadIcon className="h-3.5 w-3.5" aria-hidden="true" />
                      Download
                    </button>
                    <button
                  type="button"
                  className="rounded-lg border border-line px-3 py-1.5 text-xs font-semibold text-ink transition-colors duration-150 ease-out hover:border-brand hover:text-brand">
                  
                      Preview
                    </button>
                    <button
                  type="button"
                  onClick={() => toggleSave(resource.id)}
                  aria-pressed={saved.includes(resource.id)}
                  className={`ml-auto rounded-lg p-1.5 transition-colors duration-150 ease-out hover:bg-elevated ${
                  saved.includes(resource.id) ? 'text-brand' : 'text-muted'}`
                  }>
                  
                      <BookmarkIcon
                    className={`h-4 w-4 ${saved.includes(resource.id) ? 'fill-current' : ''}`}
                    aria-hidden="true" />
                  
                      <span className="sr-only">Save {resource.title}</span>
                    </button>
                  </div>
                </li>
            )}
            </ul>
          }
        </div>
      </div>
    </div>);

}