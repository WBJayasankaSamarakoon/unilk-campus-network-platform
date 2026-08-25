import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRightIcon,
  BellRingIcon,
  BookOpenIcon,
  BriefcaseIcon,
  CalendarIcon,
  CheckIcon,
  CompassIcon,
  LockIcon,
  MessageSquareIcon,
  ShieldCheckIcon,
  UsersRoundIcon,
  GraduationCap,
  SunriseIcon
} from 'lucide-react';
import { SiteLayout } from '../../components/marketing/SiteLayout';
import { institutions, platformStats } from '../../data/institutions';

const fragmented = ['WhatsApp groups', 'Facebook pages', 'TikTok', 'Instagram', 'Websites', 'Word of mouth'];

const steps = [
  {
    title: 'Select your institution',
    body: 'University, institute or school — with your faculty, course and batch, or your grade and class.'
  },
  {
    title: 'Get a feed that knows you',
    body: 'Official notices first, then faculty, course and batch content ranked by relevance.'
  },
  {
    title: 'Join, discover, participate',
    body: 'Communities, events, resources and opportunities from your campus and the wider ecosystem.'
  }
];

const features = [
  {
    Icon: CompassIcon,
    title: 'Personalized campus feed',
    body: 'One relevance-ranked stream instead of six apps and a notice board.'
  },
  {
    Icon: CalendarIcon,
    title: 'Events at every level',
    body: 'National, university, faculty, club and batch events, shown only to who they belong to.'
  },
  {
    Icon: UsersRoundIcon,
    title: 'Structured communities',
    body: 'From national interest groups down to a single batch, each with its own rules.'
  },
  {
    Icon: BookOpenIcon,
    title: 'Academic resource hub',
    body: 'Past papers, notes and lab sheets organised by course and subject.'
  },
  {
    Icon: BriefcaseIcon,
    title: 'Opportunities',
    body: 'Internships, scholarships and competitions matched to your faculty and year.'
  },
  {
    Icon: BellRingIcon,
    title: 'Notifications that matter',
    body: 'Grouped by importance so an exam notice is never buried.'
  }
];

const trust = [
  {
    Icon: ShieldCheckIcon,
    title: 'Three verification levels',
    body: 'Email verified, institution verified, and official accounts approved by the institution itself.'
  },
  {
    Icon: LockIcon,
    title: 'Scoped permissions',
    body: 'Every action is checked as role + permission + institution, so no administrator can reach beyond their campus.'
  },
  {
    Icon: MessageSquareIcon,
    title: 'Moderation from day one',
    body: 'Reports, review queues, takedowns and a permanent audit log — including copyright takedowns for resources.'
  }
];

export function Landing() {
  const live = institutions.filter((institution) => institution.live);

  return (
    <SiteLayout>
      {/* Hero section */}
      <section className="relative overflow-hidden border-b border-line">
        <div className="relative mx-auto grid max-w-[1200px] gap-14 px-5 py-16 lg:grid-cols-[1.02fr_1fr] lg:items-start lg:py-24">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="font-display text-[42px] font-extrabold leading-[1.04] tracking-tight text-ink sm:text-[56px]"
            >
              The digital home for
              <br />
              <span className="brand-gradient-text">student life.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.5 }}
              className="mt-6 max-w-xl text-lg leading-relaxed text-muted"
            >
              UniLK brings your day, your campus, your communities, your academic resources and
              your opportunities into one intelligent platform — personalized to your institution,
              faculty, course and batch.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <Link
                to="/today"
                className="inline-flex items-center gap-2 rounded-xl bg-brand px-5 py-3 text-sm font-semibold text-white shadow-md transition-all duration-200 hover:bg-brand-hover hover:shadow-lg active:scale-95"
              >
                Explore UniLK
                <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link
                to="/register-institution"
                className="inline-flex items-center gap-2 rounded-xl border border-line bg-surface/60 backdrop-blur-sm px-5 py-3 text-sm font-semibold text-ink transition-all duration-200 hover:border-brand hover:text-brand active:scale-95"
              >
                Register your institution
              </Link>
            </motion.div>
          </motion.div>

          {/* Product Artwork & Floating Preview Card (Separated & Offset) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            {/* Hero image shifted slightly to the left with wider size and controlled height */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="w-full sm:w-[94%] lg:w-[92%] lg:-translate-x-5"
            >
              <img
                src="/79c2ed30-c652-45ed-a068-3e3227c9d754.jpg"
                alt="A student working on campus"
                className="h-[290px] w-full rounded-3xl border border-line object-cover shadow-lg sm:h-[345px] lg:h-[365px]"
              />
            </motion.div>

            {/* Floating preview card shifted slightly to the right with compact height */}
            <motion.div
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              whileHover={{ scale: 1.015 }}
              className="relative -mt-14 ml-auto w-full max-w-full rounded-2xl border border-line bg-surface/95 p-3.5 shadow-xl backdrop-blur-md transition-shadow will-change-transform gpu-layer sm:-mt-20 sm:max-w-sm lg:-mt-24 lg:translate-x-6 xl:translate-x-8"
            >
              <div className="flex items-center gap-2 border-b border-line pb-2.5">
                <span className="brand-gradient flex h-6 w-6 items-center justify-center rounded-lg text-white shadow-sm">
                  <SunriseIcon className="h-3.5 w-3.5" aria-hidden="true" />
                </span>
                <span className="text-xs font-semibold text-ink">Your day · Monday</span>
                <span className="ml-auto rounded-md bg-cyan-soft px-2 py-0.5 text-[10px] font-semibold text-cyan">
                  My Campus
                </span>
              </div>

              <div className="mt-2.5 space-y-2">
                <div className="rounded-xl border border-line bg-sunken p-2.5 transition-colors hover:border-line-strong">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.1em] text-brand">
                    Official announcement
                  </p>
                  <p className="mt-0.5 text-xs font-semibold text-ink sm:text-[13px]">
                    Semester 5 examination timetable released
                  </p>
                  <p className="mt-0.5 text-[10px] text-faint">2 hours ago · 3,186 students reached</p>
                </div>

                <div className="rounded-xl border border-line bg-sunken p-2.5 transition-colors hover:border-line-strong">
                  <div className="flex items-center gap-2">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-cat-event-bg text-[10px] font-bold text-cat-event-fg">
                      25
                    </span>
                    <span className="min-w-0">
                      <span className="block truncate text-xs font-semibold text-ink sm:text-[13px]">
                        Inter-University Cricket · SUSL vs UOC
                      </span>
                      <span className="block text-[10px] text-faint">Tomorrow · 2:00 PM · 612 going</span>
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-1.5">
                  {[
                    { label: 'Classes', value: '2' },
                    { label: 'Deadlines', value: '1' },
                    { label: 'Updates', value: '3' }
                  ].map((item) => (
                    <div key={item.label} className="rounded-xl border border-line bg-sunken p-2 text-center">
                      <p className="text-[10px] text-faint">{item.label}</p>
                      <p className="mt-0.5 font-display text-xs font-bold text-ink sm:text-sm">{item.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section with In-view animation */}
      <section className="border-b border-line bg-sunken/75 backdrop-blur-sm">
        <dl className="mx-auto grid max-w-[1200px] grid-cols-2 gap-6 px-5 py-9 lg:grid-cols-4">
          {platformStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.4 }}
            >
              <dd className="font-display text-2xl font-extrabold tracking-tight text-ink">
                {stat.value}
              </dd>
              <dt className="mt-0.5 text-sm text-muted">{stat.label}</dt>
            </motion.div>
          ))}
        </dl>
      </section>

      {/* Problem Section */}
      <section className="border-b border-line">
        <div className="mx-auto grid max-w-[1200px] gap-12 px-5 py-20 lg:grid-cols-[1fr_1fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brand">
              The problem
            </p>
            <h2 className="mt-4 font-display text-[34px] font-extrabold leading-tight tracking-tight text-ink">
              Campus information lives everywhere except one place.
            </h2>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-muted">
              Students miss exam notices, deadlines, matches and internships not because the
              information doesn’t exist — but because it is scattered across platforms never built
              for education.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-wrap gap-2">
              {fragmented.map((source) => (
                <motion.span
                  key={source}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.15 }}
                  className="rounded-full border border-line bg-surface px-3.5 py-2 text-sm text-muted shadow-sm"
                >
                  {source}
                </motion.span>
              ))}
            </div>
            <motion.div
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.2 }}
              className="mt-6 flex items-center gap-3 rounded-2xl border border-brand/25 bg-brand-soft/60 p-5 shadow-sm"
            >
              <span className="brand-gradient flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-white shadow-sm">
                <GraduationCap className="h-5 w-5" aria-hidden="true" />
              </span>
              <p className="text-sm font-medium text-ink">
                UniLK brings all of it into one structured, verified campus platform.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* How it works Section */}
      <section className="border-b border-line bg-sunken/75 backdrop-blur-sm">
        <div className="mx-auto max-w-[1200px] px-5 py-20">
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brand">
            How it works
          </p>
          <h2 className="mt-4 max-w-2xl font-display text-[34px] font-extrabold leading-tight tracking-tight text-ink">
            Three steps to a campus that finally makes sense.
          </h2>

          <ol className="mt-10 grid gap-4 md:grid-cols-3">
            {steps.map((step, index) => (
              <motion.li
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                whileHover={{ y: -4 }}
                className="rounded-2xl border border-line bg-surface p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <span className="font-display text-xs font-bold text-brand">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-3 font-display text-lg font-bold leading-snug text-ink">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{step.body}</p>
              </motion.li>
            ))}
          </ol>

          <Link
            to="/how-it-works"
            className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-brand hover:underline"
          >
            See the full flow
            <ArrowRightIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
          </Link>
        </div>
      </section>

      {/* Two experiences Section */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-[1200px] px-5 py-20">
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brand">
            Two experiences, one ecosystem
          </p>
          <h2 className="mt-4 max-w-2xl font-display text-[34px] font-extrabold leading-tight tracking-tight text-ink">
            Students get a daily companion. Institutions get a workspace.
          </h2>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden rounded-2xl border border-line bg-surface shadow-sm transition-shadow hover:shadow-lg"
            >
              <img
                src="/ad15481e-15d6-4b1f-ad7a-68c74f12b34c.jpg"
                alt="Students collaborating in a campus common room"
                className="h-52 w-full object-cover"
              />

              <div className="p-7">
                <h3 className="font-display text-2xl font-extrabold tracking-tight text-ink">
                  For students
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  Open the app and immediately see what today looks like — classes, deadlines,
                  events, campus updates and community activity. Then discover, join, learn and grow.
                </p>
                <ul className="mt-5 space-y-2">
                  {[
                    'My Day — schedule, deadlines and today’s campus',
                    'Personalized feed across institution, faculty and batch',
                    'Communities, events, academic resources and opportunities'
                  ].map((point) => (
                    <li key={point} className="flex items-start gap-2 text-sm text-ink">
                      <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                      {point}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/today"
                  className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand hover:underline"
                >
                  See the student experience
                  <ArrowRightIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
                </Link>
              </div>
            </motion.article>

            <motion.article
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="overflow-hidden rounded-2xl border border-line bg-surface shadow-sm transition-shadow hover:shadow-lg"
            >
              <div className="brand-gradient-soft flex h-52 items-center justify-center border-b border-line px-6">
                <div className="w-full max-w-sm rounded-xl border border-line bg-surface p-4 shadow-card">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-brand">
                    Needs attention
                  </p>
                  {[
                    { count: '12', label: 'Verification requests' },
                    { count: '4', label: 'Event approvals' },
                    { count: '3', label: 'Reported posts' }
                  ].map((row) => (
                    <p key={row.label} className="mt-2 flex items-center gap-2.5 text-sm text-ink">
                      <span className="flex h-6 w-7 items-center justify-center rounded-md bg-brand-soft font-display text-[11px] font-bold text-brand">
                        {row.count}
                      </span>
                      {row.label}
                    </p>
                  ))}
                </div>
              </div>
              <div className="p-7">
                <h3 className="font-display text-2xl font-extrabold tracking-tight text-ink">
                  For institutions
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  Every university, school, college and institute gets its own isolated workspace —
                  registration, academic structure, roles, verification, moderation and analytics.
                </p>
                <ul className="mt-5 space-y-2">
                  {[
                    'Register a workspace and build your academic structure',
                    'Role + permission + scope access control with an audit log',
                    'Actionable dashboard instead of a wall of charts'
                  ].map((point) => (
                    <li key={point} className="flex items-start gap-2 text-sm text-ink">
                      <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-cyan" aria-hidden="true" />
                      {point}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/register-institution"
                  className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand hover:underline"
                >
                  Register your institution
                  <ArrowRightIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
                </Link>
              </div>
            </motion.article>
          </div>
        </div>
      </section>

      {/* Academic + Careers Section */}
      <section className="border-b border-line bg-sunken/75 backdrop-blur-sm">
        <div className="mx-auto grid max-w-[1200px] gap-6 px-5 py-20 lg:grid-cols-2">
          {[
            {
              image: '/2c6238e1-697f-48ff-867e-9f52d0b84b91.jpg',
              alt: 'Study desk with past papers and notes',
              eyebrow: 'Academic life',
              title: 'Past papers, notes and lab sheets where they belong',
              body: 'Resources are filed under faculty, department, course and subject — not dumped in a shared drive. Uploads follow a copyright policy with takedown built in.',
              to: '/resources',
              cta: 'Open the academic centre'
            },
            {
              image: '/d57fdee7-39e7-42b7-8a02-131722bf907d.jpg',
              alt: 'A graduate looking out of an office window',
              eyebrow: 'Opportunities',
              title: 'Internships and scholarships matched to your course',
              body: 'Career value from year one — internships, scholarships, hackathons and research, filtered by faculty, year and interests, with deadlines you cannot miss.',
              to: '/opportunities',
              cta: 'Browse opportunities'
            }
          ].map((card, index) => (
            <motion.article
              key={card.eyebrow}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              transition={{ delay: index * 0.1, duration: 0.3 }}
              className="overflow-hidden rounded-2xl border border-line bg-surface shadow-sm transition-shadow hover:shadow-lg"
            >
              <img src={card.image} alt={card.alt} className="h-56 w-full object-cover" />
              <div className="p-7">
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brand">
                  {card.eyebrow}
                </p>
                <h3 className="mt-3 font-display text-xl font-extrabold leading-snug tracking-tight text-ink">
                  {card.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{card.body}</p>
                <Link
                  to={card.to}
                  className="group mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand hover:underline"
                >
                  {card.cta}
                  <ArrowRightIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Core Features Grid */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-[1200px] px-5 py-20">
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brand">Features</p>
          <h2 className="mt-4 max-w-2xl font-display text-[34px] font-extrabold leading-tight tracking-tight text-ink">
            Built around institutions, not around a timeline.
          </h2>

          <div className="mt-10 grid gap-x-8 gap-y-9 sm:grid-cols-2 lg:grid-cols-3">
            {features.map(({ Icon, title, body }, index) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06, duration: 0.3 }}
                whileHover={{ y: -3 }}
                className="group rounded-2xl border border-line bg-surface p-5 shadow-sm transition-all hover:border-brand/40 hover:shadow-md"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-line bg-sunken transition-colors group-hover:border-brand/40 group-hover:bg-brand-soft">
                  <Icon className="h-5 w-5 text-brand" aria-hidden="true" />
                </span>
                <h3 className="mt-3.5 font-display text-base font-bold text-ink">{title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">{body}</p>
              </motion.div>
            ))}
          </div>

          <Link
            to="/features"
            className="group mt-10 inline-flex items-center gap-2 text-sm font-semibold text-brand hover:underline"
          >
            All features
            <ArrowRightIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
          </Link>
        </div>
      </section>

      {/* Institutions Directory */}
      <section className="border-b border-line bg-sunken/75 backdrop-blur-sm">
        <div className="mx-auto max-w-[1200px] px-5 py-20">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brand">
                Multi-institution
              </p>
              <h2 className="mt-4 max-w-xl font-display text-[34px] font-extrabold leading-tight tracking-tight text-ink">
                One platform, every campus.
              </h2>
            </div>
            <Link
              to="/institutions"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-brand hover:underline"
            >
              View all institutions
              <ArrowRightIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          </div>

          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {live.map((institution, index) => (
              <motion.li
                key={institution.id}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.3 }}
                whileHover={{ y: -4 }}
                className="rounded-2xl border border-line bg-surface p-5 shadow-sm transition-all duration-200 hover:border-brand/40 hover:shadow-md"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-soft font-display text-[11px] font-bold text-brand ring-1 ring-brand/25">
                  {institution.short}
                </span>
                <h3 className="mt-4 text-sm font-semibold leading-snug text-ink">
                  {institution.name}
                </h3>
                <p className="mt-1 text-xs text-faint">
                  {institution.type} · {institution.location}
                </p>
                <p className="mt-3 text-xs font-medium text-cyan">
                  {institution.onPlatform.toLocaleString()} students
                </p>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      {/* Community Section */}
      <section className="border-b border-line">
        <div className="mx-auto grid max-w-[1200px] gap-12 px-5 py-20 lg:grid-cols-[1fr_1fr] lg:items-center">
          <motion.img
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            src="/5baca54a-f964-4937-919f-2723dcfdcea3.jpg"
            alt="A student technology workshop in a university auditorium"
            className="h-[380px] w-full rounded-3xl border border-line object-cover shadow-md"
          />

          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brand">
              Community
            </p>
            <h2 className="mt-4 font-display text-[34px] font-extrabold leading-tight tracking-tight text-ink">
              You belong to your campus — and to the whole ecosystem.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted">
              My Campus keeps your institution’s information clean and focused. Global Campus opens
              the door to national competitions, scholarships, inter-university sport and students
              studying the same thing at other universities.
            </p>
            <ul className="mt-6 space-y-2.5">
              {[
                'Batch and faculty spaces moderated by your own representatives',
                'National interest communities like AI & Machine Learning',
                'Follow other institutions without leaving your campus feed'
              ].map((point) => (
                <li key={point} className="flex items-start gap-2.5 text-sm text-ink">
                  <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-cyan" aria-hidden="true" />
                  {point}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Security & Verification */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-[1200px] px-5 py-20">
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brand">
            Security & verification
          </p>
          <h2 className="mt-4 max-w-2xl font-display text-[34px] font-extrabold leading-tight tracking-tight text-ink">
            Trust is a product feature, not a policy page.
          </h2>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {trust.map(({ Icon, title, body }, index) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                whileHover={{ y: -4 }}
                className="rounded-2xl border border-line bg-surface p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-soft">
                  <Icon className="h-5 w-5 text-cyan" aria-hidden="true" />
                </span>
                <h3 className="mt-4 font-display text-base font-bold text-ink">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden border-b border-line bg-sunken/75">
        <div
          className="pointer-events-none absolute left-1/2 top-0 h-72 w-[680px] -translate-x-1/2 rounded-full opacity-60"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(99,102,241,0.18) 0%, rgba(139,92,246,0.08) 50%, transparent 80%)'
          }}
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-[1200px] px-5 py-20 text-center">
          <h2 className="mx-auto max-w-2xl font-display text-[34px] font-extrabold leading-tight tracking-tight text-ink">
            Everything happening around your campus — in one place you actually want to open.
          </h2>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              to="/today"
              className="inline-flex items-center gap-2 rounded-xl bg-brand px-5 py-3 text-sm font-semibold text-white shadow-md transition-all duration-200 hover:bg-brand-hover hover:shadow-lg active:scale-95"
            >
              Explore UniLK
              <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link
              to="/register-institution"
              className="inline-flex items-center gap-2 rounded-xl border border-line bg-surface px-5 py-3 text-sm font-semibold text-ink shadow-sm transition-all duration-200 hover:border-brand hover:text-brand active:scale-95"
            >
              Register your institution
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}