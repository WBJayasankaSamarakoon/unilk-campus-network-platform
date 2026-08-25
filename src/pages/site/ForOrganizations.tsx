import React from 'react';
import { Link } from 'react-router-dom';
import { AwardIcon, CalendarIcon, MegaphoneIcon, UsersIcon } from 'lucide-react';
import { PageHero, SiteLayout } from '../../components/marketing/SiteLayout';
import { clubs } from '../../data/clubs';

const capabilities = [
  {
    Icon: MegaphoneIcon,
    title: 'Publish to the students who care',
    body: 'Posts and announcements reach your followers and the faculties you are attached to, instead of competing with everything else on a general social feed.'
  },
  {
    Icon: CalendarIcon,
    title: 'Run events properly',
    body: 'Create events with capacity, registration deadlines, speakers and reminders — and see interested and going counts before the day arrives.'
  },
  {
    Icon: UsersIcon,
    title: 'Recruit and manage members',
    body: 'Followers, members and officer roles in one place, with recruitment drives that carry over between batches.'
  },
  {
    Icon: AwardIcon,
    title: 'Build a lasting record',
    body: 'Achievements, past events and media stay on your organization profile as committees change every year.'
  }];


export function ForOrganizations() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="For clubs, societies & teams"
        title={
          <>
            Your society deserves more than a{' '}
            <span className="text-brand">WhatsApp group.</span>
          </>
        }
        description="IEEE branches, computing societies, Rotaract and AIESEC chapters, sports teams, drama and music circles — every organization gets a verified profile, an audience that already belongs to your campus, and tools built for student committees.">

        <Link
          to="/clubs"
          className="inline-block rounded-xl bg-brand px-5 py-3 text-sm font-semibold text-white transition-colors duration-150 ease-out hover:bg-brand-hover">

          Browse organizations
        </Link>
      </PageHero>

      <section className="border-b border-line">
        <div className="mx-auto grid max-w-[1200px] gap-x-10 gap-y-12 px-5 py-20 sm:grid-cols-2">
          {capabilities.map(({ Icon, title, body }) =>
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
        <div className="mx-auto max-w-[1200px] px-5 py-20">
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-ink">
            Organizations already on UniLK
          </h2>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {clubs.slice(0, 8).map((club) =>
              <li key={club.id} className="rounded-2xl border border-line bg-surface p-5">
                <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-brand font-display text-[11px] font-bold text-white">
                  {club.shortName}
                </span>
                <h3 className="mt-4 text-sm font-semibold leading-snug text-ink">{club.name}</h3>
                <p className="mt-1 text-xs text-muted">{club.category}</p>
                <p className="mt-3 text-xs font-medium text-brand">
                  {club.followers.toLocaleString()} followers
                </p>
              </li>
            )}
          </ul>
        </div>
      </section>

      <section className="bg-charcoal text-white">
        <div className="mx-auto grid max-w-[1200px] gap-10 px-5 py-20 lg:grid-cols-[1fr_1fr]">
          <div>
            <h2 className="font-display text-3xl font-extrabold leading-tight tracking-tight text-white">
              Getting verified
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/60">
              Organization accounts are approved by the institution, not by us. That keeps the
              verified badge meaningful and prevents anyone from impersonating your society.
            </p>
          </div>
          <ol className="space-y-3">
            {[
              'Request an organization account for your institution',
              'Attach your constitution or a letter from the faculty',
              'Institution administrator reviews and approves',
              'Officers are added with organization admin permissions'].
              map((step, index) =>
                <li
                  key={step}
                  className="flex gap-4 rounded-xl border border-charcoal-line bg-charcoal-soft px-5 py-4">

                  <span className="font-display text-xs font-bold text-brand">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="text-sm text-white/75">{step}</span>
                </li>
              )}
          </ol>
        </div>
      </section>
    </SiteLayout>);

}