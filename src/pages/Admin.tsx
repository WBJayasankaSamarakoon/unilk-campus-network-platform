import React, { useState } from 'react';
import {
  CheckIcon,
  EyeOffIcon,
  SearchIcon,
  ShieldAlertIcon,
  SlidersHorizontalIcon,
  XIcon } from
'lucide-react';
import {
  adminMetrics,
  adminUsers,
  engagementByFaculty,
  moderationLog,
  reports,
  verificationRequests } from
'../data/admin';
import { institutions, roles } from '../data/institutions';

const sections = ['Overview', 'Moderation', 'Verification', 'Users', 'Roles', 'Analytics'] as const;

const permissionGroups: {group: string;items: {key: string;label: string;}[];}[] = [
{
  group: 'Content',
  items: [
  { key: 'create_post', label: 'Create posts' },
  { key: 'create_announcement', label: 'Publish announcements' },
  { key: 'pin_post', label: 'Pin content' },
  { key: 'remove_content', label: 'Remove content' }]

},
{
  group: 'Events',
  items: [
  { key: 'create_event', label: 'Create events' },
  { key: 'manage_organization', label: 'Manage organizations' },
  { key: 'approve_organization', label: 'Approve organizations' }]

},
{
  group: 'Users',
  items: [
  { key: 'verify_users', label: 'Verify students' },
  { key: 'manage_members', label: 'Manage members' },
  { key: 'manage_roles', label: 'Assign roles' }]

},
{
  group: 'Moderation',
  items: [
  { key: 'review_reports', label: 'Review reports' },
  { key: 'moderate_content', label: 'Moderate communities' },
  { key: 'warn_user', label: 'Warn users' },
  { key: 'suspend_user', label: 'Suspend accounts' }]

},
{
  group: 'Institution',
  items: [
  { key: 'manage_institution', label: 'Manage institution' },
  { key: 'manage_faculty', label: 'Manage faculty' },
  { key: 'manage_resources', label: 'Manage resources' },
  { key: 'view_analytics', label: 'View analytics' }]

}];


const statusTone: Record<string, string> = {
  Active: 'bg-cat-sports-bg text-cat-sports-fg',
  Suspended: 'bg-cat-announcement-bg text-cat-announcement-fg',
  Restricted: 'bg-cat-opportunity-bg text-cat-opportunity-fg'
};

export function Admin() {
  const [section, setSection] = useState<(typeof sections)[number]>('Overview');
  const [queue, setQueue] = useState(reports);
  const [requests, setRequests] = useState(verificationRequests);
  const [resolved, setResolved] = useState<string[]>([]);
  const [userQuery, setUserQuery] = useState('');
  const [activeRole, setActiveRole] = useState(roles[6].id);

  const maxJoined = Math.max(...engagementByFaculty.map((row) => row.joined));
  const role = roles.find((item) => item.id === activeRole) ?? roles[0];

  const resolve = (id: string) => {
    setResolved((current) => [...current, id]);
    setQueue((current) => current.filter((report) => report.id !== id));
  };

  const filteredUsers = adminUsers.filter((user) =>
  `${user.name} ${user.handle} ${user.faculty}`.toLowerCase().includes(userQuery.toLowerCase())
  );

  return (
    <div className="mx-auto max-w-6xl space-y-5">
      <header className="overflow-hidden rounded-2xl border border-line bg-surface">
        <div className="brand-gradient-soft flex flex-wrap items-start justify-between gap-4 border-b border-line px-5 py-5">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-brand">
              Admin console
            </p>
            <h1 className="mt-1.5 font-display text-2xl font-extrabold tracking-tight text-ink">
              Sabaragamuwa University
            </h1>
            <p className="mt-1 text-sm text-muted">
              Institution administrator · scope limited to this institution
            </p>
          </div>

          <div>
            <label
              htmlFor="admin-institution"
              className="block text-[11px] font-semibold uppercase tracking-[0.1em] text-faint">
              
              Institution scope
            </label>
            <select
              id="admin-institution"
              className="mt-1.5 rounded-lg border border-line bg-surface px-3 py-2 text-sm text-ink focus:border-brand focus:outline-none">
              
              {institutions.
              filter((item) => item.live).
              map((item) =>
              <option key={item.id}>{item.name}</option>
              )}
            </select>
          </div>
        </div>

        <nav
          aria-label="Admin sections"
          className="no-scrollbar flex gap-1 overflow-x-auto px-3 py-2">
          
          {sections.map((option) =>
          <button
            key={option}
            type="button"
            onClick={() => setSection(option)}
            aria-current={section === option}
            className={`shrink-0 rounded-lg px-3 py-1.5 text-sm font-medium transition-colors duration-150 ease-out ${
            section === option ?
            'bg-brand-soft text-brand' :
            'text-muted hover:bg-elevated hover:text-ink'}`
            }>
            
              {option}
            </button>
          )}
        </nav>
      </header>

      {(section === 'Overview' || section === 'Analytics') &&
      <section aria-label="Key metrics" className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {adminMetrics.map((metric, index) =>
        <div
          key={metric.label}
          className="rounded-xl border border-line bg-surface p-4 transition-colors duration-150 ease-out hover:border-line-strong">
          
              <p className="text-xs font-medium text-muted">{metric.label}</p>
              <p className="mt-1.5 font-display text-2xl font-extrabold tracking-tight text-ink">
                {metric.value}
              </p>
              <p className="mt-1 flex items-center gap-2 text-xs">
                <span className={index % 2 === 0 ? 'font-semibold text-brand' : 'font-semibold text-cyan'}>
                  {metric.delta}
                </span>
                <span className="text-faint">{metric.hint}</span>
              </p>
            </div>
        )}
        </section>
      }

      {(section === 'Overview' || section === 'Moderation') &&
      <section className="overflow-hidden rounded-2xl border border-line bg-surface">
          <div className="flex items-center gap-2 border-b border-line px-5 py-4">
            <ShieldAlertIcon className="h-[18px] w-[18px] text-danger" aria-hidden="true" />
            <h2 className="font-display text-base font-bold text-ink">Moderation queue</h2>
            <span className="ml-auto text-xs text-faint">All actions are written to the audit log</span>
          </div>

          {queue.length === 0 ?
        <p className="px-5 py-14 text-center text-sm text-muted">
              Queue cleared. {resolved.length} reports actioned in this session.
            </p> :

        <ul>
              {queue.map((report) =>
          <li key={report.id} className="border-b border-line px-5 py-4 last:border-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <span
                className={`rounded-md px-2 py-0.5 text-[11px] font-semibold ${
                report.severity === 'High' ?
                'bg-cat-announcement-bg text-cat-announcement-fg' :
                'bg-cat-opportunity-bg text-cat-opportunity-fg'}`
                }>
                
                      {report.severity}
                    </span>
                    <span className="text-sm font-semibold text-ink">{report.reason}</span>
                    <span className="text-xs text-faint">· {report.submitted}</span>
                    <span className="ml-auto text-xs font-medium text-faint">{report.status}</span>
                  </div>

                  <p className="mt-2 text-sm leading-relaxed text-muted">{report.content}</p>
                  <p className="mt-1 text-xs text-faint">
                    Reported by {report.reporter} · target {report.target}
                  </p>

                  <div className="mt-3 flex flex-wrap gap-2">
                    <button
                type="button"
                onClick={() => resolve(report.id)}
                className="inline-flex items-center gap-1.5 rounded-lg border border-danger/40 px-3 py-1.5 text-xs font-semibold text-danger transition-colors duration-150 ease-out hover:bg-danger/10">
                
                      <EyeOffIcon className="h-3.5 w-3.5" aria-hidden="true" />
                      Remove content
                    </button>
                    <button
                type="button"
                onClick={() => resolve(report.id)}
                className="rounded-lg border border-line px-3 py-1.5 text-xs font-semibold text-ink transition-colors duration-150 ease-out hover:border-line-strong">
                
                      Warn user
                    </button>
                    <button
                type="button"
                onClick={() => resolve(report.id)}
                className="rounded-lg border border-line px-3 py-1.5 text-xs font-semibold text-ink transition-colors duration-150 ease-out hover:border-line-strong">
                
                      Suspend 7 days
                    </button>
                    <button
                type="button"
                onClick={() => resolve(report.id)}
                className="ml-auto rounded-lg px-3 py-1.5 text-xs font-medium text-faint transition-colors duration-150 ease-out hover:text-ink">
                
                      Dismiss
                    </button>
                  </div>
                </li>
          )}
            </ul>
        }
        </section>
      }

      {(section === 'Overview' || section === 'Verification') &&
      <section className="rounded-2xl border border-line bg-surface p-5">
          <h2 className="font-display text-base font-bold text-ink">Verification requests</h2>
          <ul className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {requests.map((request) =>
          <li key={request.id} className="rounded-xl border border-line bg-sunken p-4">
                <p className="text-sm font-semibold text-ink">{request.name}</p>
                <p className="text-xs text-faint">
                  {request.type} · {request.institution}
                </p>
                <p className="mt-2 text-xs leading-relaxed text-muted">{request.evidence}</p>
                <div className="mt-3 flex items-center gap-2">
                  <button
                type="button"
                onClick={() =>
                setRequests((current) => current.filter((item) => item.id !== request.id))
                }
                className="inline-flex items-center gap-1 rounded-lg bg-brand px-2.5 py-1.5 text-xs font-semibold text-white transition-colors duration-150 ease-out hover:bg-brand-hover">
                
                    <CheckIcon className="h-3.5 w-3.5" aria-hidden="true" />
                    Approve
                  </button>
                  <button
                type="button"
                onClick={() =>
                setRequests((current) => current.filter((item) => item.id !== request.id))
                }
                className="inline-flex items-center gap-1 rounded-lg border border-line px-2.5 py-1.5 text-xs font-semibold text-ink transition-colors duration-150 ease-out hover:border-line-strong">
                
                    <XIcon className="h-3.5 w-3.5" aria-hidden="true" />
                    Reject
                  </button>
                  <span className="ml-auto text-[11px] text-faint">{request.submitted}</span>
                </div>
              </li>
          )}
            {requests.length === 0 &&
          <li className="py-6 text-center text-sm text-muted">No pending requests.</li>
          }
          </ul>
        </section>
      }

      {section === 'Users' &&
      <section className="overflow-hidden rounded-2xl border border-line bg-surface">
          <div className="flex flex-wrap items-center gap-3 border-b border-line px-5 py-4">
            <h2 className="font-display text-base font-bold text-ink">Users</h2>
            <span className="rounded-md bg-elevated px-2 py-0.5 text-xs text-muted">
              {filteredUsers.length}
            </span>
            <div className="relative ml-auto w-full max-w-xs">
              <SearchIcon
              className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-faint"
              aria-hidden="true" />
            
              <label htmlFor="user-search" className="sr-only">
                Search users
              </label>
              <input
              id="user-search"
              type="search"
              value={userQuery}
              onChange={(event) => setUserQuery(event.target.value)}
              placeholder="Search name, handle or faculty"
              className="w-full rounded-lg border border-line bg-sunken py-2 pl-9 pr-3 text-sm text-ink placeholder:text-faint focus:border-brand focus:bg-surface focus:outline-none" />
            
            </div>
            <button
            type="button"
            className="inline-flex items-center gap-1.5 rounded-lg border border-line px-3 py-2 text-sm font-medium text-muted transition-colors duration-150 ease-out hover:border-line-strong hover:text-ink">
            
              <SlidersHorizontalIcon className="h-4 w-4" aria-hidden="true" />
              Filters
            </button>
          </div>

          {/* Table on desktop */}
          <div className="hidden md:block">
            <table className="w-full text-sm">
              <caption className="sr-only">Registered users at this institution</caption>
              <thead>
                <tr className="border-b border-line text-left text-[11px] uppercase tracking-[0.08em] text-faint">
                  <th scope="col" className="px-5 py-2.5 font-semibold">
                    Student
                  </th>
                  <th scope="col" className="px-3 py-2.5 font-semibold">
                    Faculty
                  </th>
                  <th scope="col" className="px-3 py-2.5 font-semibold">
                    Role
                  </th>
                  <th scope="col" className="px-3 py-2.5 font-semibold">
                    Verification
                  </th>
                  <th scope="col" className="px-3 py-2.5 font-semibold">
                    Status
                  </th>
                  <th scope="col" className="px-5 py-2.5 text-right font-semibold">
                    Last active
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredUsers.map((user) =>
              <tr
                key={user.id}
                className="border-b border-line transition-colors duration-150 ease-out last:border-0 hover:bg-sunken">
                
                    <th scope="row" className="px-5 py-3 text-left">
                      <span className="block font-medium text-ink">{user.name}</span>
                      <span className="block text-xs text-faint">{user.handle}</span>
                    </th>
                    <td className="px-3 py-3 text-muted">
                      {user.faculty}
                      <span className="block text-xs text-faint">{user.batch}</span>
                    </td>
                    <td className="px-3 py-3 text-muted">{user.role}</td>
                    <td className="px-3 py-3 text-muted">{user.verification}</td>
                    <td className="px-3 py-3">
                      <span
                    className={`rounded-md px-2 py-0.5 text-[11px] font-semibold ${statusTone[user.status]}`}>
                    
                        {user.status}
                      </span>
                    </td>
                    <td className="px-5 py-3 text-right text-faint">{user.lastActive}</td>
                  </tr>
              )}
              </tbody>
            </table>
          </div>

          {/* Cards on mobile */}
          <ul className="divide-y divide-line md:hidden">
            {filteredUsers.map((user) =>
          <li key={user.id} className="px-4 py-3.5">
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold text-ink">{user.name}</p>
                    <p className="truncate text-xs text-faint">{user.handle}</p>
                  </div>
                  <span
                className={`shrink-0 rounded-md px-2 py-0.5 text-[11px] font-semibold ${statusTone[user.status]}`}>
                
                    {user.status}
                  </span>
                </div>
                <dl className="mt-2.5 grid grid-cols-2 gap-y-1.5 text-xs">
                  <dt className="text-faint">Faculty</dt>
                  <dd className="text-right text-muted">
                    {user.faculty} · {user.batch}
                  </dd>
                  <dt className="text-faint">Role</dt>
                  <dd className="text-right text-muted">{user.role}</dd>
                  <dt className="text-faint">Verification</dt>
                  <dd className="text-right text-muted">{user.verification}</dd>
                  <dt className="text-faint">Last active</dt>
                  <dd className="text-right text-muted">{user.lastActive}</dd>
                </dl>
              </li>
          )}
          </ul>

          {filteredUsers.length === 0 &&
        <p className="px-5 py-12 text-center text-sm text-muted">
              No users match “{userQuery}”.
            </p>
        }
        </section>
      }

      {section === 'Roles' &&
      <section className="grid gap-4 lg:grid-cols-[260px_minmax(0,1fr)]">
          <nav aria-label="Roles" className="rounded-2xl border border-line bg-surface p-2">
            {roles.map((item) =>
          <button
            key={item.id}
            type="button"
            onClick={() => setActiveRole(item.id)}
            aria-current={activeRole === item.id}
            className={`flex w-full flex-col items-start rounded-lg px-3 py-2 text-left transition-colors duration-150 ease-out ${
            activeRole === item.id ?
            'bg-brand-soft text-brand' :
            'text-muted hover:bg-elevated hover:text-ink'}`
            }>
            
                <span className="text-sm font-semibold">{item.name}</span>
                <span className="text-[11px] text-faint">{item.scope}</span>
              </button>
          )}
          </nav>

          <div className="rounded-2xl border border-line bg-surface p-5">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <h2 className="font-display text-lg font-bold text-ink">{role.name}</h2>
                <p className="mt-1 max-w-xl text-sm leading-relaxed text-muted">{role.summary}</p>
              </div>
              <span className="rounded-md bg-cyan-soft px-2.5 py-1 text-[11px] font-semibold text-cyan">
                Scope · {role.scope}
              </span>
            </div>

            <div className="mt-5 grid gap-x-8 gap-y-5 sm:grid-cols-2">
              {permissionGroups.map((group) =>
            <div key={group.group}>
                  <h3 className="text-[11px] font-semibold uppercase tracking-[0.1em] text-faint">
                    {group.group}
                  </h3>
                  <ul className="mt-2 space-y-1.5">
                    {group.items.map((item) => {
                  const granted =
                  role.permissions.includes(item.key) || role.id === 'super';
                  return (
                    <li key={item.key} className="flex items-center gap-2.5 text-sm">
                          <span
                        className={`flex h-4 w-4 shrink-0 items-center justify-center rounded border ${
                        granted ?
                        'border-brand bg-brand text-white' :
                        'border-line bg-sunken'}`
                        }
                        aria-hidden="true">
                        
                            {granted && <CheckIcon className="h-3 w-3" />}
                          </span>
                          <span className={granted ? 'text-ink' : 'text-faint'}>{item.label}</span>
                          <span className="sr-only">{granted ? 'granted' : 'not granted'}</span>
                        </li>);

                })}
                  </ul>
                </div>
            )}
            </div>

            <p className="mt-6 rounded-xl border border-line bg-sunken px-4 py-3 text-xs leading-relaxed text-muted">
              Permissions are evaluated together with the assignment scope. Even with{' '}
              <span className="font-mono text-ink">manage_institution</span>, this role can only act
              inside the institution it was granted for.
            </p>
          </div>
        </section>
      }

      {(section === 'Overview' || section === 'Analytics') &&
      <div className="grid gap-4 lg:grid-cols-2">
          <section className="rounded-2xl border border-line bg-surface p-5">
            <h2 className="font-display text-base font-bold text-ink">Adoption by faculty</h2>
            <ul className="mt-4 space-y-3">
              {engagementByFaculty.map((row) =>
            <li key={row.faculty}>
                  <div className="flex items-baseline justify-between text-xs">
                    <span className="font-medium text-ink">{row.faculty}</span>
                    <span className="text-faint">
                      {row.active} weekly active / {row.joined} registered
                    </span>
                  </div>
                  <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-sunken">
                    <div
                  className="brand-gradient h-full rounded-full"
                  style={{ width: `${row.joined / maxJoined * 100}%` }}
                  aria-hidden="true" />
                
                  </div>
                </li>
            )}
            </ul>
          </section>

          <section className="rounded-2xl border border-line bg-surface p-5">
            <h2 className="font-display text-base font-bold text-ink">Activity timeline</h2>
            <ol className="mt-4 space-y-4">
              {moderationLog.map((entry, index) =>
            <li key={`${entry.action}-${entry.time}`} className="relative flex gap-3 pl-1">
                  <span className="relative flex flex-col items-center">
                    <span
                  className={`h-2 w-2 rounded-full ${index === 0 ? 'bg-cyan' : 'bg-line-strong'}`}
                  aria-hidden="true" />
                
                    {index < moderationLog.length - 1 &&
                <span className="mt-1 w-px flex-1 bg-line" aria-hidden="true" />
                }
                  </span>
                  <span className="pb-1 text-xs leading-relaxed">
                    <span className="block font-semibold text-ink">{entry.action}</span>
                    <span className="block text-muted">{entry.target}</span>
                    <span className="block text-faint">
                      {entry.by} · {entry.time}
                    </span>
                  </span>
                </li>
            )}
            </ol>
          </section>
        </div>
      }
    </div>);

}