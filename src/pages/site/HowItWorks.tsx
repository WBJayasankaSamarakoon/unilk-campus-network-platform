import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon, GlobeIcon, MapPinIcon } from 'lucide-react';
import { PageHero, SiteLayout } from '../../components/marketing/SiteLayout';

const steps = [
  { title: 'Create account', body: 'Sign up with your email — a recognised institution domain verifies you instantly.' },
  { title: 'Select institution', body: 'Choose your university, institute or school from the UniLK directory.' },
  { title: 'Add academic details', body: 'Faculty, department, course and batch for universities; grade and class for schools.' },
  { title: 'Build your campus profile', body: 'Add interests, a short bio and the communities you already belong to.' },
  { title: 'Receive personalized content', body: 'Official notices first, then faculty, course and batch content ranked by relevance.' },
  { title: 'Join communities', body: 'Institution, faculty, course, batch and interest communities — public or restricted.' },
  { title: 'Discover events & opportunities', body: 'From batch meetings to national hackathons and scholarships.' },
  { title: 'Participate & connect', body: 'Post, ask, answer, follow clubs and show up to what matters.' }];


const hierarchy = [
  { level: 'Institution', example: 'University of Moratuwa', detail: 'Official announcements, campus-wide events' },
  { level: 'Faculty', example: 'Faculty of Engineering', detail: 'Faculty notices, workshops, communities' },
  { level: 'Department', example: 'Computer Science & Engineering', detail: 'Course structure, academic updates' },
  { level: 'Course', example: 'BSc Software Engineering', detail: 'Subjects, resources, course community' },
  { level: 'Batch', example: '2026 intake', detail: 'Lecture changes, group work, batch discussions' }];


export function HowItWorks() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="How it works"
        title={
          <>
            One platform. Every campus. Content that knows{' '}
            <span className="text-brand">where you study.</span>
          </>
        }
        description="UniLK is a multi-institution platform. Your educational identity — institution, faculty, department, course and batch — decides what you see, without you having to search for it." />


      <section className="border-b border-line">
        <div className="mx-auto max-w-[1200px] px-5 py-20">
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-ink">
            From sign-up to a personalized campus
          </h2>
          <ol className="mt-10 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) =>
              <li key={step.title} className="border-t-2 border-brand pt-4">
                <span className="font-display text-xs font-bold text-brand">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-2 font-display text-lg font-bold leading-snug text-ink">
                  {step.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">{step.body}</p>
              </li>
            )}
          </ol>
        </div>
      </section>

      <section className="border-b border-line bg-canvas">
        <div className="mx-auto max-w-[1200px] px-5 py-20">
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-brand">
            Multi-institution architecture
          </p>
          <h2 className="mt-4 max-w-2xl font-display text-3xl font-extrabold leading-tight tracking-tight text-ink">
            Every institution is its own environment inside one platform.
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
            Nothing is hardcoded to a single university. New institutions are configured — not
            rebuilt — and each one gets its own faculties, departments, courses, batches, clubs,
            events, communities and administrators.
          </p>

          <ul className="mt-10 space-y-2">
            {hierarchy.map((row, index) =>
              <li
                key={row.level}
                className="flex flex-col gap-1 rounded-2xl border border-line bg-surface p-5 sm:flex-row sm:items-center sm:gap-6"
                style={{ marginLeft: `${index * 1.25}rem` }}>

                <span className="w-32 shrink-0 font-display text-sm font-bold text-ink">
                  {row.level}
                </span>
                <span className="w-64 shrink-0 text-sm text-brand">{row.example}</span>
                <span className="text-sm text-muted">{row.detail}</span>
              </li>
            )}
          </ul>
        </div>
      </section>

      <section className="border-b border-line">
        <div className="mx-auto grid max-w-[1200px] gap-4 px-5 py-20 lg:grid-cols-2">
          <div className="rounded-2xl border border-line p-7">
            <MapPinIcon className="h-5 w-5 text-brand" aria-hidden="true" />
            <h2 className="mt-4 font-display text-2xl font-extrabold tracking-tight text-ink">
              My Campus
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Content that belongs to your own institution: official announcements, faculty events,
              exam notices, club activities and batch discussions. This is the default feed, and it
              never mixes in another university’s noise.
            </p>
          </div>
          <div className="rounded-2xl bg-charcoal p-7 text-white">
            <GlobeIcon className="h-5 w-5 text-brand" aria-hidden="true" />
            <h2 className="mt-4 font-display text-2xl font-extrabold tracking-tight text-white">
              Global Campus
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-white/65">
              A second layer for everything national: scholarships, inter-university sports,
              hackathons, competitions and major educational events open to students across Sri
              Lanka. One tap away, never forced into your campus feed.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-line bg-canvas">
        <div className="mx-auto max-w-[1200px] px-5 py-16">
          <h2 className="font-display text-2xl font-extrabold tracking-tight text-ink">
            Why is this relevant to me?
          </h2>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted">
            Every item in UniLK can answer that question. Relevance is computed from who you are,
            where you study, what you study, the communities you belong to and what you told us you
            care about — with official announcements always given priority.
          </p>
          <Link
            to="/features"
            className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-brand hover:underline">

            See what that unlocks
            <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </SiteLayout>);

}