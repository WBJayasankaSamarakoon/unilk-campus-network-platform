import React from 'react';
import { Link } from 'react-router-dom';
import {
  BellRingIcon,
  BookOpenIcon,
  BriefcaseIcon,
  CalendarIcon,
  CompassIcon,
  SearchIcon,
  ShieldCheckIcon,
  TrophyIcon,
  UsersRoundIcon
} from
  'lucide-react';
import { PageHero, SiteLayout } from '../../components/marketing/SiteLayout';

const pillars = [
  {
    Icon: CompassIcon,
    title: 'Personalized campus feed',
    body: 'A relevance-ranked feed combining official notices, academic updates, community discussions, events, organizations and opportunities.',
    points: [
      'Official announcements pinned above everything else',
      'Faculty, course and batch layers',
      'My Campus and Global Campus views',
      'Source labels: official, representative, student'],

    to: '/feed'
  },
  {
    Icon: CalendarIcon,
    title: 'Events at every level',
    body: 'Events belong to a level — national, university, faculty, department, organization or community — and are only shown to the students that level applies to.',
    points: [
      'Interested, going and registration states',
      'Personal calendar with reminders',
      'Capacity and registration deadlines',
      'Event detail pages with speakers and attendees'],

    to: '/events'
  },
  {
    Icon: UsersRoundIcon,
    title: 'Communities',
    body: 'Structured discussion spaces from national interest groups down to a single batch, each with its own rules and visibility.',
    points: [
      'Public, institution-only, faculty-only and batch-only',
      'Questions, polls and confirmed answers',
      'Representative-moderated batch spaces',
      'Community rules shown in context'],

    to: '/communities'
  },
  {
    Icon: BookOpenIcon,
    title: 'Academic resources',
    body: 'A digital library organized institution → faculty → department → course → subject, with configurable access.',
    points: [
      'Past papers, notes, tutorials, lab sheets, research',
      'Institution-provided vs student-contributed',
      'Copyright policy with report and takedown',
      'Download, preview and save'],

    to: '/resources'
  },
  {
    Icon: BriefcaseIcon,
    title: 'Opportunities',
    body: 'Internships, jobs, scholarships, hackathons, competitions and research openings, filtered to your faculty and year.',
    points: ['Deadline urgency', 'Relevance explanation on every card', 'Save and apply', 'Posted by verified sources'],
    to: '/opportunities'
  },
  {
    Icon: TrophyIcon,
    title: 'Sports',
    body: 'Fixtures, results, points tables and teams for every sport your institution competes in.',
    points: ['Upcoming and completed fixtures', 'Inter-university standings', 'Team profiles', 'Match reminders'],
    to: '/sports'
  },
  {
    Icon: BellRingIcon,
    title: 'Relevant notifications',
    body: 'Grouped into Important, Events, Community, Opportunities and Academic, with per-category preferences.',
    points: [
      'Official notices cannot be muted',
      'Event reminders 24 hours and 1 hour ahead',
      'Subtle indicators, no badge spam',
      'Deep links into the right screen'],

    to: '/notifications'
  },
  {
    Icon: SearchIcon,
    title: 'Global search & discovery',
    body: 'Search across institutions, students, communities, events, clubs, posts, resources and opportunities.',
    points: ['Categorised results', 'Trending on your campus', 'Recommended for you', 'Other institutions'],
    to: '/discover'
  },
  {
    Icon: ShieldCheckIcon,
    title: 'Trust, moderation & roles',
    body: 'Verified accounts, scoped roles and permissions, a moderation queue and a full audit log from day one.',
    points: [
      'Three verification levels',
      'Role + permission + institution scope',
      'Report, review, warn, suspend',
      'Every action logged'],

    to: '/roles'
  }];


export function Features() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Features"
        title={
          <>
            Everything a campus needs, <span className="text-brand">structured properly.</span>
          </>
        }
        description="UniLK is not a timeline with a university name on it. Each module is built around the institution hierarchy so content reaches exactly the students it belongs to." />


      <section>
        <div className="mx-auto max-w-[1200px] divide-y divide-line px-5">
          {pillars.map(({ Icon, title, body, points, to }) =>
            <article key={title} className="grid gap-8 py-14 lg:grid-cols-[1fr_1fr]">
              <div>
                <Icon className="h-6 w-6 text-brand" aria-hidden="true" />
                <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight tracking-tight text-ink">
                  {title}
                </h2>
                <p className="mt-4 max-w-lg text-base leading-relaxed text-muted">{body}</p>
                <Link
                  to={to}
                  className="mt-6 inline-block text-sm font-semibold text-brand hover:underline">

                  Open in the app
                </Link>
              </div>
              <ul className="grid gap-2 self-center">
                {points.map((point) =>
                  <li
                    key={point}
                    className="rounded-xl border border-line bg-canvas px-4 py-3.5 text-sm text-ink">

                    {point}
                  </li>
                )}
              </ul>
            </article>
          )}
        </div>
      </section>

      <section className="bg-charcoal text-white">
        <div className="mx-auto max-w-[1200px] px-5 py-16">
          <h2 className="max-w-2xl font-display text-3xl font-extrabold leading-tight tracking-tight text-white">
            Web for depth. Mobile for the moment.
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {[
              {
                title: 'Public website',
                body: 'Explains the ecosystem to students, parents, institutions and partners without logging in.'
              },
              {
                title: 'Web application',
                body: 'Academic resources, search, administration, institution and community management.'
              },
              {
                title: 'Mobile application',
                body: 'Feed, events, notifications, communities and quick content creation with native patterns.'
              }].
              map((item) =>
                <div key={item.title} className="rounded-2xl border border-charcoal-line bg-charcoal-soft p-5">
                  <h3 className="font-display text-lg font-bold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/60">{item.body}</p>
                </div>
              )}
          </div>
        </div>
      </section>
    </SiteLayout>);

}