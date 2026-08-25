import React from 'react';
import { Link } from 'react-router-dom';
import {
  BarChart3Icon,
  BellRingIcon,
  BuildingIcon,
  ShieldCheckIcon,
  UsersIcon
} from
  'lucide-react';
import { PageHero, SiteLayout } from '../../components/marketing/SiteLayout';

const benefits = [
  {
    Icon: BellRingIcon,
    title: 'Announcements that actually arrive',
    body: 'Official notices are pinned above everything else in every registered student’s feed and cannot be muted — no more depending on a Facebook page reaching 6% of a batch.'
  },
  {
    Icon: ShieldCheckIcon,
    title: 'A verified identity',
    body: 'Your institution, faculties, departments and approved organizations publish through verified accounts, so students can tell official information from rumour.'
  },
  {
    Icon: UsersIcon,
    title: 'Student verification',
    body: 'Institution email domains verify students instantly; everyone else is reviewed by your administrators through student ID evidence.'
  },
  {
    Icon: BarChart3Icon,
    title: 'Analytics scoped to you',
    body: 'Registered and weekly active students, engagement by faculty, event attendance and reports — for your institution only, never anyone else’s.'
  }];


const dashboard = [
  'Overview',
  'Students',
  'Announcements',
  'Events',
  'Communities',
  'Clubs',
  'Resources',
  'Reports',
  'Analytics',
  'Settings'];


export function ForInstitutions() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="For institutions"
        title={
          <>
            Run your campus communication on{' '}
            <span className="text-brand">infrastructure built for it.</span>
          </>
        }
        description="Universities, institutes and faculties get their own workspace inside UniLK — official accounts, an institution dashboard, verification, moderation and analytics, scoped strictly to your institution.">

        <div className="flex flex-wrap gap-3">
          <Link
            to="/admin"
            className="rounded-xl bg-brand px-5 py-3 text-sm font-semibold text-white transition-colors duration-150 ease-out hover:bg-brand-hover">

            See the admin console
          </Link>
          <Link
            to="/about"
            className="rounded-xl border border-ink px-5 py-3 text-sm font-semibold text-ink transition-colors duration-150 ease-out hover:bg-ink hover:text-surface">

            Talk to us
          </Link>
        </div>
      </PageHero>

      <section className="border-b border-line">
        <div className="mx-auto grid max-w-[1200px] gap-x-10 gap-y-12 px-5 py-20 sm:grid-cols-2">
          {benefits.map(({ Icon, title, body }) =>
            <div key={title}>
              <Icon className="h-6 w-6 text-brand" aria-hidden="true" />
              <h2 className="mt-4 font-display text-2xl font-extrabold leading-tight tracking-tight text-ink">
                {title}
              </h2>
              <p className="mt-3 text-base leading-relaxed text-muted">{body}</p>
            </div>
          )}
        </div>
      </section>

      <section className="border-b border-line bg-canvas">
        <div className="mx-auto grid max-w-[1200px] gap-10 px-5 py-20 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <div>
            <BuildingIcon className="h-6 w-6 text-brand" aria-hidden="true" />
            <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight tracking-tight text-ink">
              Your own institution dashboard
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted">
              Every institution gets a dedicated console. Administrators manage their profile,
              academic structure, official content, organizations, representatives and moderation —
              and only ever see their own institution’s data.
            </p>
            <p className="mt-4 rounded-xl border border-line bg-surface px-4 py-3.5 text-sm text-ink">
              Access is enforced as <span className="font-semibold text-brand">role + permission + institution scope</span>. An
              administrator at one university can never act on another.
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl border border-line bg-surface">
            <div className="border-b border-line bg-charcoal px-5 py-4 text-white">
              <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-white/50">
                Institution console
              </p>
              <p className="mt-1 font-display text-lg font-bold">University of Moratuwa</p>
            </div>
            <ul className="grid grid-cols-2 gap-px bg-line">
              {dashboard.map((item) =>
                <li key={item} className="bg-surface px-5 py-3.5 text-sm text-ink">
                  {item}
                </li>
              )}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-charcoal text-white">
        <div className="mx-auto max-w-[1200px] px-5 py-20">
          <h2 className="max-w-2xl font-display text-3xl font-extrabold leading-tight tracking-tight text-white">
            Onboarding an institution
          </h2>
          <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { step: 'Agreement', body: 'Scope, administrators and content policy confirmed with the institution.' },
              { step: 'Configuration', body: 'Faculties, departments, courses, batches and grades set up in the platform.' },
              { step: 'Verification', body: 'Official accounts, faculty accounts and approved organizations verified.' },
              { step: 'Launch', body: 'Communities seeded, ambassadors trained, registration opened to students.' }].
              map((item, index) =>
                <li key={item.step} className="border-t-2 border-brand pt-4">
                  <span className="font-display text-xs font-bold text-brand">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3 className="mt-2 font-display text-lg font-bold text-white">{item.step}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-white/60">{item.body}</p>
                </li>
              )}
          </ol>
        </div>
      </section>
    </SiteLayout>);

}