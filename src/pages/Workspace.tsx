import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRightIcon,
  BadgeCheckIcon,
  BuildingIcon,
  CheckIcon,
  ClockIcon,
  LayersIcon,
  PlusIcon,
  ShieldCheckIcon,
  UsersIcon } from
'lucide-react';
import {
  academicStructure,
  auditLog,
  needsAttention,
  workspaceOverview,
  workspaceTeam } from
'../data/workspace';
import { institution } from '../data/user';

const tabs = ['Overview', 'People', 'Academic structure', 'Audit log'] as const;

const toneClass: Record<string, string> = {
  brand: 'bg-brand-soft text-brand',
  cyan: 'bg-cyan-soft text-cyan',
  warning: 'bg-cat-opportunity-bg text-cat-opportunity-fg',
  danger: 'bg-cat-announcement-bg text-cat-announcement-fg'
};

export function Workspace() {
  const [tab, setTab] = useState<(typeof tabs)[number]>('Overview');
  const [done, setDone] = useState<string[]>([]);

  const open = needsAttention.filter((item) => !done.includes(item.id));

  return (
    <div className="mx-auto max-w-6xl space-y-5">
      <header className="overflow-hidden rounded-2xl border border-line bg-surface">
        <div className="brand-gradient-soft flex flex-wrap items-start justify-between gap-4 border-b border-line px-5 py-5">
          <div className="flex items-start gap-3">
            <span className="brand-gradient flex h-11 w-11 items-center justify-center rounded-xl font-display text-sm font-extrabold text-white">
              {institution.short}
            </span>
            <div>
              <p className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-brand">
                Institution workspace
                <BadgeCheckIcon className="h-3.5 w-3.5" aria-hidden="true" />
              </p>
              <h1 className="mt-1 font-display text-2xl font-extrabold tracking-tight text-ink">
                {institution.name}
              </h1>
              <p className="mt-0.5 text-sm text-muted">
                Verified · {institution.onPlatform.toLocaleString()} students active ·{' '}
                {institution.faculties.length} faculties
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              className="inline-flex items-center gap-1.5 rounded-lg bg-brand px-3.5 py-2 text-sm font-semibold text-white transition-colors duration-150 ease-out hover:bg-brand-hover">
              
              <PlusIcon className="h-4 w-4" aria-hidden="true" />
              Publish announcement
            </button>
            <Link
              to="/admin"
              className="inline-flex items-center gap-1.5 rounded-lg border border-line px-3.5 py-2 text-sm font-semibold text-ink transition-colors duration-150 ease-out hover:border-line-strong">
              
              <ShieldCheckIcon className="h-4 w-4" aria-hidden="true" />
              Moderation
            </Link>
          </div>
        </div>

        <nav aria-label="Workspace sections" className="no-scrollbar flex gap-1 overflow-x-auto px-3 py-2">
          {tabs.map((option) =>
          <button
            key={option}
            type="button"
            onClick={() => setTab(option)}
            aria-current={tab === option}
            className={`shrink-0 rounded-lg px-3 py-1.5 text-sm font-medium transition-colors duration-150 ease-out ${
            tab === option ?
            'bg-brand-soft text-brand' :
            'text-muted hover:bg-elevated hover:text-ink'}`
            }>
            
              {option}
            </button>
          )}
        </nav>
      </header>

      {tab === 'Overview' &&
      <>
          <section aria-label="Today's overview" className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {workspaceOverview.map((metric) =>
          <div key={metric.label} className="rounded-xl border border-line bg-surface p-4">
                <p className="text-xs font-medium text-muted">{metric.label}</p>
                <p className="mt-1.5 font-display text-2xl font-extrabold tracking-tight text-ink">
                  {metric.value}
                </p>
                <p className="mt-1 text-xs">
                  <span className="font-semibold text-cyan">{metric.delta}</span>{' '}
                  <span className="text-faint">· {metric.hint}</span>
                </p>
              </div>
          )}
          </section>

          <section className="rounded-2xl border border-line bg-surface">
            <div className="flex items-center gap-2 border-b border-line px-5 py-4">
              <h2 className="font-display text-base font-bold text-ink">Needs attention</h2>
              <span className="rounded-md bg-elevated px-2 py-0.5 text-xs font-semibold text-muted">
                {open.length}
              </span>
              <span className="ml-auto text-xs text-faint">Actionable items, not charts</span>
            </div>

            {open.length === 0 ?
          <p className="px-5 py-14 text-center text-sm text-muted">
                Everything is handled. Your institution has no pending approvals.
              </p> :

          <ul className="divide-y divide-line">
                {open.map((item) =>
            <li key={item.id} className="flex flex-wrap items-center gap-4 px-5 py-4">
                    <span
                className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl font-display text-base font-extrabold ${toneClass[item.tone]}`}>
                
                      {item.count}
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-sm font-semibold text-ink">{item.title}</span>
                      <span className="block text-xs text-muted">{item.detail}</span>
                    </span>
                    <span className="flex shrink-0 gap-2">
                      <button
                  type="button"
                  onClick={() => setDone((current) => [...current, item.id])}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-line px-3 py-1.5 text-xs font-semibold text-ink transition-colors duration-150 ease-out hover:border-brand hover:text-brand">
                  
                        {item.action}
                        <ArrowRightIcon className="h-3.5 w-3.5" aria-hidden="true" />
                      </button>
                    </span>
                  </li>
            )}
              </ul>
          }
          </section>

          <div className="grid gap-4 lg:grid-cols-2">
            <section className="rounded-2xl border border-line bg-surface p-5">
              <h2 className="font-display text-base font-bold text-ink">Adoption by faculty</h2>
              <ul className="mt-4 space-y-3">
                {institution.faculties.map((faculty) => {
                const percent = Math.round(faculty.joined / faculty.students * 100);
                return (
                  <li key={faculty.name}>
                      <div className="flex items-baseline justify-between text-xs">
                        <span className="font-medium text-ink">{faculty.name}</span>
                        <span className="text-faint">
                          {faculty.joined.toLocaleString()} of {faculty.students.toLocaleString()} ·{' '}
                          {percent}%
                        </span>
                      </div>
                      <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-sunken">
                        <div
                        className="brand-gradient h-full rounded-full"
                        style={{ width: `${percent}%` }}
                        aria-hidden="true" />
                      
                      </div>
                    </li>);

              })}
              </ul>
            </section>

            <section className="rounded-2xl border border-line bg-surface p-5">
              <h2 className="font-display text-base font-bold text-ink">Recent activity</h2>
              <ol className="mt-4 space-y-4">
                {auditLog.slice(0, 4).map((entry, index) =>
              <li key={entry.id} className="flex gap-3">
                    <span className="relative flex flex-col items-center">
                      <span
                    className={`mt-1 h-2 w-2 rounded-full ${index === 0 ? 'bg-cyan' : 'bg-line-strong'}`}
                    aria-hidden="true" />
                  
                      {index < 3 && <span className="mt-1 w-px flex-1 bg-line" aria-hidden="true" />}
                    </span>
                    <span className="pb-1 text-xs leading-relaxed">
                      <span className="block font-semibold text-ink">
                        {entry.actor} · {entry.action}
                      </span>
                      <span className="block text-muted">{entry.target}</span>
                      <span className="block text-faint">{entry.time}</span>
                    </span>
                  </li>
              )}
              </ol>
            </section>
          </div>
        </>
      }

      {tab === 'People' &&
      <section className="overflow-hidden rounded-2xl border border-line bg-surface">
          <div className="flex flex-wrap items-center gap-3 border-b border-line px-5 py-4">
            <UsersIcon className="h-[18px] w-[18px] text-brand" aria-hidden="true" />
            <h2 className="font-display text-base font-bold text-ink">Workspace team</h2>
            <button
            type="button"
            className="ml-auto inline-flex items-center gap-1.5 rounded-lg bg-brand px-3 py-1.5 text-xs font-semibold text-white transition-colors duration-150 ease-out hover:bg-brand-hover">
            
              <PlusIcon className="h-3.5 w-3.5" aria-hidden="true" />
              Invite administrator
            </button>
          </div>

          <div className="hidden md:block">
            <table className="w-full text-sm">
              <caption className="sr-only">Administrators in this workspace</caption>
              <thead>
                <tr className="border-b border-line text-left text-[11px] uppercase tracking-[0.08em] text-faint">
                  <th scope="col" className="px-5 py-2.5 font-semibold">Name</th>
                  <th scope="col" className="px-3 py-2.5 font-semibold">Role</th>
                  <th scope="col" className="px-3 py-2.5 font-semibold">Scope</th>
                  <th scope="col" className="px-5 py-2.5 text-right font-semibold">Status</th>
                </tr>
              </thead>
              <tbody>
                {workspaceTeam.map((member) =>
              <tr key={member.name} className="border-b border-line last:border-0 hover:bg-sunken">
                    <th scope="row" className="px-5 py-3 text-left font-medium text-ink">
                      {member.name}
                    </th>
                    <td className="px-3 py-3 text-muted">{member.role}</td>
                    <td className="px-3 py-3 text-muted">{member.scope}</td>
                    <td className="px-5 py-3 text-right">
                      <span
                    className={`rounded-md px-2 py-0.5 text-[11px] font-semibold ${
                    member.status === 'Active' ?
                    'bg-cat-sports-bg text-cat-sports-fg' :
                    'bg-cat-opportunity-bg text-cat-opportunity-fg'}`
                    }>
                    
                        {member.status}
                      </span>
                    </td>
                  </tr>
              )}
              </tbody>
            </table>
          </div>

          <ul className="divide-y divide-line md:hidden">
            {workspaceTeam.map((member) =>
          <li key={member.name} className="px-4 py-3.5">
                <div className="flex items-start justify-between gap-3">
                  <p className="text-sm font-semibold text-ink">{member.name}</p>
                  <span
                className={`shrink-0 rounded-md px-2 py-0.5 text-[11px] font-semibold ${
                member.status === 'Active' ?
                'bg-cat-sports-bg text-cat-sports-fg' :
                'bg-cat-opportunity-bg text-cat-opportunity-fg'}`
                }>
                
                    {member.status}
                  </span>
                </div>
                <p className="mt-1 text-xs text-muted">{member.role}</p>
                <p className="text-xs text-faint">{member.scope}</p>
              </li>
          )}
          </ul>
        </section>
      }

      {tab === 'Academic structure' &&
      <section className="space-y-3">
          <div className="flex flex-wrap items-center gap-3 rounded-2xl border border-line bg-surface px-5 py-4">
            <LayersIcon className="h-[18px] w-[18px] text-brand" aria-hidden="true" />
            <p className="text-sm text-muted">
              University → faculty → department → programme → batch. Students pick their place in
              this tree at registration, and it decides what reaches them.
            </p>
          </div>

          <ul className="space-y-3">
            {academicStructure.map((faculty) =>
          <li key={faculty.faculty} className="rounded-2xl border border-line bg-surface p-5">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h3 className="font-display text-base font-bold text-ink">{faculty.faculty}</h3>
                  <span className="text-xs text-faint">
                    {faculty.programs} programmes · {faculty.batches} batches ·{' '}
                    {faculty.students.toLocaleString()} students
                  </span>
                </div>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {faculty.departments.map((department) =>
              <li
                key={department}
                className="rounded-full border border-line bg-sunken px-3 py-1 text-xs text-muted">
                
                      {department}
                    </li>
              )}
                  <li>
                    <button
                  type="button"
                  className="inline-flex items-center gap-1 rounded-full border border-dashed border-line-strong px-3 py-1 text-xs font-medium text-brand transition-colors duration-150 ease-out hover:border-brand">
                  
                      <PlusIcon className="h-3 w-3" aria-hidden="true" />
                      Add department
                    </button>
                  </li>
                </ul>
              </li>
          )}
          </ul>
        </section>
      }

      {tab === 'Audit log' &&
      <section className="overflow-hidden rounded-2xl border border-line bg-surface">
          <div className="flex items-center gap-2 border-b border-line px-5 py-4">
            <ClockIcon className="h-[18px] w-[18px] text-brand" aria-hidden="true" />
            <h2 className="font-display text-base font-bold text-ink">Audit log</h2>
            <span className="ml-auto text-xs text-faint">
              Every administrative action is recorded
            </span>
          </div>

          <ul className="divide-y divide-line">
            {auditLog.map((entry) =>
          <li key={entry.id} className="px-5 py-4">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-sm font-semibold text-ink">{entry.actor}</span>
                  <span className="rounded-md bg-elevated px-2 py-0.5 text-[11px] font-medium text-muted">
                    {entry.role}
                  </span>
                  <span className="text-sm text-muted">{entry.action}</span>
                  <span className="ml-auto text-xs text-faint">{entry.time}</span>
                </div>
                <p className="mt-1 text-sm text-ink">{entry.target}</p>
                <p className="mt-0.5 flex flex-wrap items-center gap-x-3 text-xs text-faint">
                  <span className="inline-flex items-center gap-1 font-mono">
                    <CheckIcon className="h-3 w-3 text-cyan" aria-hidden="true" />
                    {entry.change}
                  </span>
                  <span>{entry.device}</span>
                </p>
              </li>
          )}
          </ul>
        </section>
      }

      <p className="flex items-center gap-2 rounded-xl border border-line bg-sunken px-4 py-3 text-xs text-muted">
        <BuildingIcon className="h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
        This workspace is isolated. Administrators here cannot read or change data belonging to any
        other institution on UniLK.
      </p>
    </div>);

}