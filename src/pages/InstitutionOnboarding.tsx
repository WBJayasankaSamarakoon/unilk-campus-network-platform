import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  BadgeCheckIcon,
  CheckIcon,
  PlusIcon,
  ShieldCheckIcon,
  UploadIcon,
  GraduationCap } from
'lucide-react';
import { institutionTypes } from '../data/workspace';

const stages = [
{ id: 'identity', label: 'Identity' },
{ id: 'structure', label: 'Structure' },
{ id: 'admin', label: 'Administrator' },
{ id: 'verify', label: 'Verification' },
{ id: 'launch', label: 'Launch' }];


const fieldClass =
'mt-1.5 w-full rounded-lg border border-line bg-surface px-3.5 py-2.5 text-sm text-ink placeholder:text-faint focus:border-brand focus:outline-none';

const universityLevels = ['Campus', 'Faculty', 'Department', 'Programme', 'Batch'];
const schoolLevels = ['Section', 'Grade', 'Class'];

export function InstitutionOnboarding() {
  const navigate = useNavigate();
  const [stage, setStage] = useState(0);
  const [type, setType] = useState('university');
  const [invites, setInvites] = useState<string[]>(['registrar@susl.ac.lk']);
  const [inviteValue, setInviteValue] = useState('');

  const isSchool = type === 'school';
  const levels = isSchool ? schoolLevels : universityLevels;

  return (
    <div className="min-h-full w-full bg-canvas">
      <header className="border-b border-line bg-surface">
        <div className="mx-auto flex h-16 max-w-4xl items-center gap-2.5 px-5">
          <Link to="/" className="flex items-center gap-2.5">
            <span className="brand-gradient flex h-8 w-8 items-center justify-center rounded-xl text-white shadow-sm">
              <GraduationCap className="h-5 w-5" aria-hidden="true" />
            </span>
            <span className="font-display text-[17px] font-extrabold tracking-tight text-ink">
              Uni<span className="text-brand">LK</span>
            </span>
          </Link>
          <span className="ml-auto text-xs text-faint">Institution registration</span>
        </div>
      </header>

      <div className="mx-auto max-w-4xl px-5 py-10">
        {/* Progress */}
        <ol className="flex items-center gap-2">
          {stages.map((item, index) => {
            const done = index < stage;
            const active = index === stage;
            return (
              <li key={item.id} className="flex flex-1 items-center gap-2">
                <span className="flex items-center gap-2">
                  <span
                    className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg font-display text-[11px] font-bold transition-colors duration-150 ease-out ${
                    done ?
                    'bg-brand text-white' :
                    active ?
                    'bg-brand-soft text-brand ring-1 ring-brand/40' :
                    'bg-elevated text-faint'}`
                    }>
                    
                    {done ? <CheckIcon className="h-3.5 w-3.5" aria-hidden="true" /> : `0${index + 1}`}
                  </span>
                  <span
                    className={`hidden text-xs font-semibold sm:block ${
                    active ? 'text-ink' : 'text-faint'}`
                    }>
                    
                    {item.label}
                  </span>
                </span>
                {index < stages.length - 1 &&
                <span
                  className={`h-px flex-1 ${index < stage ? 'bg-brand' : 'bg-line'}`}
                  aria-hidden="true" />

                }
              </li>);

          })}
        </ol>

        <motion.section
          key={stage}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
          className="mt-8 rounded-2xl border border-line bg-surface p-6 sm:p-8">
          
          {stage === 0 &&
          <div>
              <h1 className="font-display text-2xl font-extrabold tracking-tight text-ink">
                What kind of institution is this?
              </h1>
              <p className="mt-2 text-sm text-muted">
                This decides the academic structure UniLK builds for you.
              </p>

              <fieldset className="mt-6">
                <legend className="sr-only">Institution type</legend>
                <div className="grid gap-2.5 sm:grid-cols-2">
                  {institutionTypes.map((option) =>
                <button
                  key={option.id}
                  type="button"
                  onClick={() => setType(option.id)}
                  aria-pressed={type === option.id}
                  className={`rounded-xl border p-4 text-left transition-colors duration-150 ease-out ${
                  type === option.id ?
                  'border-brand bg-brand-soft' :
                  'border-line hover:border-line-strong'}`
                  }>
                  
                      <span
                    className={`block text-sm font-semibold ${
                    type === option.id ? 'text-brand' : 'text-ink'}`
                    }>
                    
                        {option.label}
                      </span>
                      <span className="mt-0.5 block text-xs text-muted">{option.detail}</span>
                    </button>
                )}
                </div>
              </fieldset>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <label htmlFor="inst-name" className="text-sm font-medium text-ink">
                    Institution name
                  </label>
                  <input id="inst-name" className={fieldClass} placeholder="e.g. University of Ruhuna" />
                </div>
                <div>
                  <label htmlFor="inst-location" className="text-sm font-medium text-ink">
                    Location
                  </label>
                  <input id="inst-location" className={fieldClass} placeholder="City or district" />
                </div>
                <div>
                  <label htmlFor="inst-website" className="text-sm font-medium text-ink">
                    Official website
                  </label>
                  <input id="inst-website" className={fieldClass} placeholder="https://" />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="inst-about" className="text-sm font-medium text-ink">
                    Short description
                  </label>
                  <textarea
                  id="inst-about"
                  rows={3}
                  className={`${fieldClass} resize-none`}
                  placeholder="What students should know about your institution" />
                
                </div>
                <div className="sm:col-span-2">
                  <span className="text-sm font-medium text-ink">Logo and cover image</span>
                  <div className="mt-1.5 flex flex-wrap gap-2.5">
                    {['Upload logo', 'Upload cover'].map((label) =>
                  <button
                    key={label}
                    type="button"
                    className="inline-flex items-center gap-2 rounded-lg border border-dashed border-line-strong px-4 py-3 text-sm font-medium text-muted transition-colors duration-150 ease-out hover:border-brand hover:text-brand">
                    
                        <UploadIcon className="h-4 w-4" aria-hidden="true" />
                        {label}
                      </button>
                  )}
                  </div>
                </div>
              </div>
            </div>
          }

          {stage === 1 &&
          <div>
              <h1 className="font-display text-2xl font-extrabold tracking-tight text-ink">
                Build your academic structure
              </h1>
              <p className="mt-2 text-sm text-muted">
                Everything in UniLK — feeds, communities, events, resources — is scoped to this
                tree. You can extend it any time.
              </p>

              <ol className="mt-6 space-y-2">
                {levels.map((level, index) =>
              <li
                key={level}
                className="flex items-center gap-3 rounded-xl border border-line bg-sunken px-4 py-3"
                style={{ marginLeft: `${index * 14}px` }}>
                
                    <span className="font-display text-[11px] font-bold text-brand">
                      L{index + 1}
                    </span>
                    <span className="text-sm font-medium text-ink">{level}</span>
                    <button
                  type="button"
                  className="ml-auto inline-flex items-center gap-1 text-xs font-semibold text-brand hover:underline">
                  
                      <PlusIcon className="h-3 w-3" aria-hidden="true" />
                      Add
                    </button>
                  </li>
              )}
              </ol>

              <p className="mt-5 rounded-xl border border-line bg-sunken px-4 py-3 text-xs leading-relaxed text-muted">
                {isSchool ?
              'School workspaces get extra safeguards by default: closed communities, restricted messaging and stricter moderation, because some students are minors.' :
              'You can bulk-import faculties, departments and programmes from a spreadsheet after launch.'}
              </p>
            </div>
          }

          {stage === 2 &&
          <div>
              <h1 className="font-display text-2xl font-extrabold tracking-tight text-ink">
                Who owns this workspace?
              </h1>
              <p className="mt-2 text-sm text-muted">
                The institution owner has full control of this workspace — and no access to any other
                institution.
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="admin-name" className="text-sm font-medium text-ink">
                    Full name
                  </label>
                  <input id="admin-name" className={fieldClass} placeholder="Administrator name" />
                </div>
                <div>
                  <label htmlFor="admin-title" className="text-sm font-medium text-ink">
                    Position
                  </label>
                  <input id="admin-title" className={fieldClass} placeholder="e.g. Senior Assistant Registrar" />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="admin-email" className="text-sm font-medium text-ink">
                    Official institution email
                  </label>
                  <input
                  id="admin-email"
                  type="email"
                  className={fieldClass}
                  placeholder="name@institution.ac.lk" />
                
                  <p className="mt-1.5 text-xs text-faint">
                    Must be on your institution’s domain — this is part of verification.
                  </p>
                </div>
              </div>

              <div className="mt-7">
                <h2 className="text-sm font-medium text-ink">Invite your team</h2>
                <p className="mt-1 text-xs text-muted">
                  Faculty admins, event managers and resource managers can be added now or later.
                </p>
                <form
                className="mt-3 flex gap-2"
                onSubmit={(event) => {
                  event.preventDefault();
                  if (!inviteValue.trim()) return;
                  setInvites((current) => [...current, inviteValue.trim()]);
                  setInviteValue('');
                }}>
                
                  <label htmlFor="invite" className="sr-only">
                    Email address
                  </label>
                  <input
                  id="invite"
                  type="email"
                  value={inviteValue}
                  onChange={(event) => setInviteValue(event.target.value)}
                  placeholder="colleague@institution.ac.lk"
                  className="flex-1 rounded-lg border border-line bg-surface px-3.5 py-2.5 text-sm text-ink placeholder:text-faint focus:border-brand focus:outline-none" />
                
                  <button
                  type="submit"
                  className="rounded-lg border border-line px-4 py-2.5 text-sm font-semibold text-ink transition-colors duration-150 ease-out hover:border-brand hover:text-brand">
                  
                    Invite
                  </button>
                </form>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {invites.map((email) =>
                <li
                  key={email}
                  className="rounded-full border border-line bg-sunken px-3 py-1 text-xs text-muted">
                  
                      {email}
                    </li>
                )}
                </ul>
              </div>
            </div>
          }

          {stage === 3 &&
          <div>
              <h1 className="font-display text-2xl font-extrabold tracking-tight text-ink">
                Verification
              </h1>
              <p className="mt-2 text-sm text-muted">
                Registering does not create a trusted institution. Our team reviews every application
                before a workspace goes live.
              </p>

              <ol className="mt-6 space-y-2.5">
                {[
              { label: 'Application submitted', detail: 'Details and academic structure received', state: 'done' },
              { label: 'Domain check', detail: 'Administrator email verified on your official domain', state: 'active' },
              { label: 'Document review', detail: 'Registration certificate or UGC/ministry reference', state: 'todo' },
              { label: 'Activation', detail: 'Workspace goes live and students can join', state: 'todo' }].
              map((step) =>
              <li
                key={step.label}
                className={`flex items-start gap-3 rounded-xl border px-4 py-3.5 ${
                step.state === 'active' ? 'border-brand/40 bg-brand-soft/50' : 'border-line'}`
                }>
                
                    <span
                  className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                  step.state === 'done' ?
                  'bg-brand text-white' :
                  step.state === 'active' ?
                  'bg-cyan-soft text-cyan' :
                  'bg-elevated text-faint'}`
                  }
                  aria-hidden="true">
                  
                      <CheckIcon className="h-3 w-3" />
                    </span>
                    <span>
                      <span className="block text-sm font-semibold text-ink">{step.label}</span>
                      <span className="block text-xs text-muted">{step.detail}</span>
                    </span>
                  </li>
              )}
              </ol>

              <button
              type="button"
              className="mt-5 inline-flex items-center gap-2 rounded-lg border border-dashed border-line-strong px-4 py-3 text-sm font-medium text-muted transition-colors duration-150 ease-out hover:border-brand hover:text-brand">
              
                <UploadIcon className="h-4 w-4" aria-hidden="true" />
                Upload registration document
              </button>
            </div>
          }

          {stage === 4 &&
          <div className="text-center">
              <span className="brand-gradient mx-auto flex h-14 w-14 items-center justify-center rounded-2xl text-white">
                <BadgeCheckIcon className="h-6 w-6" aria-hidden="true" />
              </span>
              <h1 className="mt-5 font-display text-2xl font-extrabold tracking-tight text-ink">
                Your workspace is ready to launch.
              </h1>
              <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-muted">
                Once verification completes, your institution page goes public, students can join with
                their institutional identity, and your team gets the workspace dashboard.
              </p>

              <ul className="mx-auto mt-7 grid max-w-lg gap-2.5 text-left sm:grid-cols-2">
                {[
              'Verified official account',
              'Institution workspace dashboard',
              'Faculty, batch and course communities',
              'Moderation queue and audit log'].
              map((item) =>
              <li
                key={item}
                className="flex items-start gap-2 rounded-xl border border-line bg-sunken px-3.5 py-3 text-sm text-ink">
                
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                    {item}
                  </li>
              )}
              </ul>

              <p className="mt-6 inline-flex items-center gap-2 rounded-full bg-cyan-soft px-3 py-1.5 text-xs font-semibold text-cyan">
                <ShieldCheckIcon className="h-3.5 w-3.5" aria-hidden="true" />
                Status · Pending verification
              </p>
            </div>
          }

          <div className="mt-8 flex items-center justify-between border-t border-line pt-5">
            <button
              type="button"
              onClick={() => stage === 0 ? navigate('/') : setStage(stage - 1)}
              className="inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium text-muted transition-colors duration-150 ease-out hover:text-ink">
              
              <ArrowLeftIcon className="h-4 w-4" aria-hidden="true" />
              Back
            </button>

            <button
              type="button"
              onClick={() =>
              stage === stages.length - 1 ? navigate('/workspace') : setStage(stage + 1)
              }
              className="inline-flex items-center gap-1.5 rounded-lg bg-brand px-5 py-2.5 text-sm font-semibold text-white transition-colors duration-150 ease-out hover:bg-brand-hover">
              
              {stage === stages.length - 1 ? 'Open workspace' : 'Continue'}
              <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
        </motion.section>
      </div>
    </div>);

}