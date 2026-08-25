import React, { useState } from 'react';
import { CheckCircle2Icon, MailIcon } from 'lucide-react';
import { PageHero, SiteLayout } from '../../components/marketing/SiteLayout';

const principles = [
  {
    title: 'Relevance',
    body: 'Every item can answer “why am I seeing this?” — from your institution, faculty, course, batch, communities or stated interests.'
  },
  {
    title: 'Trust',
    body: 'Official information is clearly identifiable. Verification is granted by institutions, not bought.'
  },
  {
    title: 'Simplicity',
    body: 'Anything that matters is reachable in a few taps. Everything else is deliberately one layer deeper.'
  },
  {
    title: 'Community',
    body: 'Structured spaces from a national interest group down to a single batch, each with its own rules.'
  },
  {
    title: 'Utility',
    body: 'The platform stays useful even for a student who has no interest in socialising.'
  }];


const enquiryTypes = ['Institution partnership', 'Club or society account', 'Student support', 'Media & press'];

export function About() {
  const [sent, setSent] = useState(false);

  const fieldClass =
    'mt-1.5 w-full rounded-xl border border-line bg-surface px-3.5 py-2.5 text-sm text-ink placeholder:text-muted focus:border-brand focus:outline-none';

  return (
    <SiteLayout>
      <PageHero
        eyebrow="About"
        title={
          <>
            A digital campus network for{' '}
            <span className="text-brand">Sri Lankan education.</span>
          </>
        }
        description="UniLK exists because campus information is scattered across platforms that were never built for education. Our mission is to give every Sri Lankan institution — and every student inside it — one trusted place for the information, communities, resources and opportunities that shape their educational life." />


      <section className="border-b border-line">
        <div className="mx-auto grid max-w-[1200px] gap-10 px-5 py-20 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <h2 className="font-display text-3xl font-extrabold leading-tight tracking-tight text-ink">
              Product principles
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted">
              Every feature has to satisfy at least one of these. If it satisfies none of them, it
              does not get built — however impressive it looks.
            </p>
          </div>
          <ul className="divide-y divide-line">
            {principles.map((principle) =>
              <li key={principle.title} className="py-5 first:pt-0 last:pb-0">
                <h3 className="font-display text-lg font-bold text-ink">{principle.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">{principle.body}</p>
              </li>
            )}
          </ul>
        </div>
      </section>

      <section className="border-b border-line bg-canvas">
        <div className="mx-auto max-w-[1200px] px-5 py-20">
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-ink">Roadmap</h2>
          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {[
              {
                phase: 'Now',
                items: ['Authentication & verification', 'Institution profiles', 'Personalized feed', 'Events', 'Communities', 'Clubs', 'Notifications', 'Admin & moderation']
              },
              {
                phase: 'Next',
                items: ['Academic resources & past papers', 'Sports module', 'Opportunities', 'Better search', 'Organization dashboards', 'Direct messaging']
              },
              {
                phase: 'Later',
                items: ['AI summaries & search', 'Recommendation engine', 'Institution analytics', 'Career platform', 'School ecosystem']
              }].
              map((column, index) =>
                <div
                  key={column.phase}
                  className={`rounded-2xl border p-6 ${index === 0 ? 'border-brand bg-surface' : 'border-line bg-surface'}`
                  }>

                  <p
                    className={`text-[11px] font-semibold uppercase tracking-[0.14em] ${index === 0 ? 'text-brand' : 'text-muted'}`
                    }>

                    {column.phase}
                  </p>
                  <ul className="mt-4 space-y-2">
                    {column.items.map((item) =>
                      <li key={item} className="text-sm text-ink">
                        {item}
                      </li>
                    )}
                  </ul>
                </div>
              )}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-charcoal text-white">
        <div className="mx-auto grid max-w-[1200px] gap-12 px-5 py-20 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-brand">
              Contact
            </p>
            <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight tracking-tight text-white">
              Partnerships, support and press
            </h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-white/60">
              Universities, institutes, student unions and organizations can reach the team directly.
              We respond to institution enquiries within two working days.
            </p>
            <p className="mt-6 flex items-center gap-2 text-sm text-white/75">
              <MailIcon className="h-4 w-4 text-brand" aria-hidden="true" />
              hello@campuslk.lk
            </p>
          </div>

          <form
            onSubmit={(event) => {
              event.preventDefault();
              setSent(true);
            }}
            className="rounded-2xl border border-charcoal-line bg-charcoal-soft p-6">

            {sent ?
              <div className="flex flex-col items-start gap-3 py-8">
                <CheckCircle2Icon className="h-6 w-6 text-brand" aria-hidden="true" />
                <h3 className="font-display text-xl font-bold text-white">Message sent</h3>
                <p className="text-sm leading-relaxed text-white/60">
                  Thank you — we’ll get back to you at the address you provided within two working
                  days.
                </p>
                <button
                  type="button"
                  onClick={() => setSent(false)}
                  className="mt-2 text-sm font-semibold text-brand hover:underline">

                  Send another message
                </button>
              </div> :

              <>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="contact-name" className="text-sm font-medium text-white">
                      Name
                    </label>
                    <input
                      id="contact-name"
                      required
                      className={`${fieldClass} border-charcoal-line bg-charcoal text-white`}
                      placeholder="Your name" />

                  </div>
                  <div>
                    <label htmlFor="contact-email" className="text-sm font-medium text-white">
                      Email
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      className={`${fieldClass} border-charcoal-line bg-charcoal text-white`}
                      placeholder="you@institution.ac.lk" />

                  </div>
                </div>

                <div className="mt-4">
                  <label htmlFor="contact-type" className="text-sm font-medium text-white">
                    Enquiry type
                  </label>
                  <select
                    id="contact-type"
                    className={`${fieldClass} border-charcoal-line bg-charcoal text-white`}>

                    {enquiryTypes.map((option) =>
                      <option key={option}>{option}</option>
                    )}
                  </select>
                </div>

                <div className="mt-4">
                  <label htmlFor="contact-message" className="text-sm font-medium text-white">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    required
                    className={`${fieldClass} resize-none border-charcoal-line bg-charcoal text-white`}
                    placeholder="Tell us about your institution or organization" />

                </div>

                <button
                  type="submit"
                  className="mt-5 w-full rounded-xl bg-brand px-5 py-3 text-sm font-semibold text-white transition-colors duration-150 ease-out hover:bg-brand-hover">

                  Send message
                </button>
              </>
            }
          </form>
        </div>
      </section>
    </SiteLayout>);

}