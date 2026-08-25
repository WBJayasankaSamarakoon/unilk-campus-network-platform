import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon, CheckIcon } from 'lucide-react';
import { PageHero, SiteLayout } from '../../components/marketing/SiteLayout';
import { institutions } from '../../data/institutions';

const filters = ['All', 'State university', 'Private institute', 'School'] as const;

export function InstitutionsDirectory() {
  const [filter, setFilter] = useState<string>('All');

  const visible = institutions.filter((item) => filter === 'All' || item.type === filter);

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Institutions"
        title={
          <>
            Seven campuses live. <span className="text-brand">Hundreds to come.</span>
          </>
        }
        description="UniLK is multi-institution by design. Adding a university, institute or school is a configuration step — its faculties, departments, courses, batches, clubs and administrators are set up inside the platform, not rebuilt." />


      <section className="border-b border-line">
        <div className="mx-auto max-w-[1200px] px-5 py-14">
          <div className="flex flex-wrap gap-2">
            {filters.map((option) =>
              <button
                key={option}
                type="button"
                onClick={() => setFilter(option)}
                aria-pressed={filter === option}
                className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors duration-150 ease-out ${filter === option ?
                  'border-brand bg-brand text-white' :
                  'border-line text-muted hover:border-ink hover:text-ink'}`
                }>

                {option}
              </button>
            )}
          </div>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {visible.map((institution) =>
              <li
                key={institution.id}
                className="flex flex-col rounded-2xl border border-line bg-surface p-5">

                <div className="flex items-start justify-between gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand font-display text-[11px] font-bold text-white">
                    {institution.short}
                  </span>
                  <span
                    className={`rounded-full px-2.5 py-1 text-[11px] font-semibold ${institution.live ?
                      'bg-brand-soft text-brand' :
                      'bg-canvas text-muted ring-1 ring-line'}`
                    }>

                    {institution.live ? 'Live' : 'Waitlist'}
                  </span>
                </div>

                <h2 className="mt-4 font-display text-lg font-bold leading-snug text-ink">
                  {institution.name}
                </h2>
                <p className="mt-1 text-sm text-muted">
                  {institution.type} · {institution.location}
                </p>

                <dl className="mt-5 grid grid-cols-2 gap-3 border-t border-line pt-4 text-sm">
                  <div>
                    <dt className="text-xs text-muted">On UniLK</dt>
                    <dd className="font-display text-lg font-bold text-ink">
                      {institution.live ? institution.onPlatform.toLocaleString() : '—'}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs text-muted">Enrolled</dt>
                    <dd className="font-display text-lg font-bold text-ink">
                      {institution.students.toLocaleString()}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs text-muted">Faculties</dt>
                    <dd className="text-ink">{institution.faculties || '—'}</dd>
                  </div>
                  <div>
                    <dt className="text-xs text-muted">Clubs</dt>
                    <dd className="text-ink">{institution.clubs || '—'}</dd>
                  </div>
                </dl>

                {institution.primary &&
                  <Link
                    to="/institution"
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand hover:underline">

                    View institution page
                    <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
                  </Link>
                }
              </li>
            )}
          </ul>
        </div>
      </section>

      <section className="border-b border-line bg-canvas">
        <div className="mx-auto grid max-w-[1200px] gap-10 px-5 py-20 lg:grid-cols-[1fr_1fr]">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-brand">
              Rollout approach
            </p>
            <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight tracking-tight text-ink">
              Density before breadth.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted">
              A campus network only works when enough students from the same institution are on it.
              UniLK launches institution by institution with official accounts, communities,
              clubs and student ambassadors in place before opening registration widely.
            </p>
          </div>
          <ul className="space-y-3">
            {[
              'Institution profile and academic structure configured',
              'Official and faculty accounts verified',
              'Core communities and clubs created',
              'Student ambassadors recruited on campus',
              'Registration opened to all students'].
              map((step) =>
                <li
                  key={step}
                  className="flex items-center gap-3 rounded-xl border border-line bg-surface px-4 py-3.5 text-sm text-ink">

                  <CheckIcon className="h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                  {step}
                </li>
              )}
          </ul>
        </div>
      </section>

      <section className="bg-charcoal text-white">
        <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-between gap-6 px-5 py-16">
          <div>
            <h2 className="font-display text-3xl font-extrabold tracking-tight text-white">
              Your campus not here yet?
            </h2>
            <p className="mt-2 max-w-lg text-sm leading-relaxed text-white/60">
              Institutions and student unions can request onboarding. Schools follow once the
              university ecosystem and safeguarding model are proven.
            </p>
          </div>
          <Link
            to="/for-institutions"
            className="inline-flex items-center gap-2 rounded-xl bg-brand px-5 py-3 text-sm font-semibold text-white transition-colors duration-150 ease-out hover:bg-brand-hover">

            Request onboarding
            <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </SiteLayout>);

}