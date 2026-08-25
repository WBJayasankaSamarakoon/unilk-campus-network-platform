import React from 'react';
import { Link } from 'react-router-dom';
import { LockIcon } from 'lucide-react';
import { PageHero, SiteLayout } from '../../components/marketing/SiteLayout';
import { roles } from '../../data/institutions';

export function Roles() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Roles & permissions"
        title={
          <>
            Nine roles. One rule:{' '}
            <span className="text-brand">nobody acts outside their scope.</span>
          </>
        }
        description="UniLK never relies on a role name alone. Every action is checked as role plus permission plus institution scope, so an administrator at one university can never manage another, and a batch representative can only publish to their own batch." />


      <section className="border-b border-line">
        <div className="mx-auto max-w-[1200px] px-5 py-14">
          <div className="overflow-hidden rounded-2xl border border-line">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[860px] text-sm">
                <caption className="sr-only">Roles, scope and permissions</caption>
                <thead>
                  <tr className="border-b border-line bg-canvas text-left text-xs uppercase tracking-[0.08em] text-muted">
                    <th scope="col" className="px-5 py-3 font-semibold">
                      Role
                    </th>
                    <th scope="col" className="px-5 py-3 font-semibold">
                      Scope
                    </th>
                    <th scope="col" className="px-5 py-3 font-semibold">
                      What they can do
                    </th>
                    <th scope="col" className="px-5 py-3 font-semibold">
                      Key permissions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {roles.map((role) =>
                    <tr key={role.id} className="border-b border-line last:border-0 align-top">
                      <th scope="row" className="px-5 py-4 text-left font-display font-bold text-ink">
                        {role.name}
                      </th>
                      <td className="px-5 py-4 text-brand">{role.scope}</td>
                      <td className="max-w-md px-5 py-4 leading-relaxed text-muted">
                        {role.summary}
                      </td>
                      <td className="px-5 py-4">
                        <span className="flex flex-wrap gap-1.5">
                          {role.permissions.map((permission) =>
                            <span
                              key={permission}
                              className="rounded bg-canvas px-2 py-0.5 font-mono text-[11px] text-ink ring-1 ring-line">

                              {permission}
                            </span>
                          )}
                        </span>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-line bg-canvas">
        <div className="mx-auto grid max-w-[1200px] gap-10 px-5 py-20 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <LockIcon className="h-6 w-6 text-brand" aria-hidden="true" />
            <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight tracking-tight text-ink">
              Scope is part of the permission
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted">
              A role on its own is not enough authority. Each assignment carries the institution — and
              where relevant the faculty, department, course or batch — that it applies to.
            </p>
          </div>

          <div className="rounded-2xl border border-line bg-surface p-6 font-mono text-sm leading-relaxed text-ink">
            <p className="text-muted">user</p>
            <p className="mt-2">
              ├─ role: <span className="text-brand">INSTITUTION_ADMIN</span>
            </p>
            <p>
              ├─ institution: <span className="text-brand">University of Moratuwa</span>
            </p>
            <p>├─ permissions:</p>
            <p className="pl-6">│ manage_institution</p>
            <p className="pl-6">│ create_announcement</p>
            <p className="pl-6">│ approve_organization</p>
            <p className="pl-6">│ moderate_content</p>
            <p className="mt-2 text-muted">
              └─ denied: any action on another institution
            </p>
          </div>
        </div>
      </section>

      <section className="bg-charcoal text-white">
        <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-between gap-6 px-5 py-16">
          <div>
            <h2 className="font-display text-3xl font-extrabold tracking-tight text-white">
              Moderation is designed in, not bolted on.
            </h2>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-white/60">
              Reports, review queues, warnings, suspensions and a permanent audit log exist from day
              one — because a student platform without them fails quickly.
            </p>
          </div>
          <Link
            to="/admin"
            className="rounded-xl bg-brand px-5 py-3 text-sm font-semibold text-white transition-colors duration-150 ease-out hover:bg-brand-hover">

            See moderation tools
          </Link>
        </div>
      </section>
    </SiteLayout>);

}