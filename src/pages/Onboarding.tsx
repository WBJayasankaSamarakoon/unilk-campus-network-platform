import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeftIcon, ArrowRightIcon, BadgeCheckIcon, CheckIcon, MailIcon, GraduationCap } from 'lucide-react';
import { institutions } from '../data/institutions';

const steps = ['Account', 'Institution', 'Interests'] as const;

const grades = ['Grade 10', 'Grade 11', 'Grade 12', 'Grade 13'];
const classes = ['A', 'B', 'C', 'D'];

const faculties = [
'Computing',
'Applied Sciences',
'Management Studies',
'Social Sciences & Languages',
'Geomatics',
'Medicine'];


const courses = [
'BSc (Hons) Software Engineering',
'BSc (Hons) Computing & Information Systems',
'BSc (Hons) Data Science'];


const batches = ['2024 Batch', '2025 Batch', '2026 Batch', '2027 Batch'];

const interests = [
'Technology',
'Sports',
'Business',
'Music',
'Art',
'Science',
'Gaming',
'Entrepreneurship',
'Research',
'Volunteering'];


export function Onboarding() {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [selected, setSelected] = useState<string[]>(['Technology', 'Sports']);
  const [accountType, setAccountType] = useState<'university' | 'school'>('university');

  const toggleInterest = (interest: string) =>
  setSelected((current) =>
  current.includes(interest) ?
  current.filter((item) => item !== interest) :
  [...current, interest]
  );

  const fieldClass =
  'mt-1.5 w-full rounded-lg border border-line bg-surface px-3 py-2.5 text-sm text-ink focus:border-brand focus:outline-none';

  return (
    <div className="flex min-h-full w-full items-center justify-center bg-canvas px-4 py-10">
      <div className="w-full max-w-lg">
        <div className="mb-6 flex items-center gap-2">
          <span className="brand-gradient flex h-8 w-8 items-center justify-center rounded-xl text-white shadow-sm">
            <GraduationCap className="h-5 w-5" aria-hidden="true" />
          </span>
          <span className="text-[17px] font-bold tracking-tight text-ink">
            Uni<span className="text-brand">LK</span>
          </span>
        </div>

        <div className="rounded-2xl border border-line bg-surface p-6 shadow-card">
          <ol className="flex items-center gap-2" aria-label="Registration progress">
            {steps.map((label, index) =>
            <li key={label} className="flex flex-1 items-center gap-2">
                <span
                className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-semibold transition-colors duration-150 ease-out ${
                index < step ?
                'bg-brand text-white' :
                index === step ?
                'bg-brand-soft text-brand ring-2 ring-brand' :
                'bg-canvas text-muted'}`
                }>
                
                  {index < step ? <CheckIcon className="h-3.5 w-3.5" aria-hidden="true" /> : index + 1}
                </span>
                <span
                className={`text-xs font-medium ${index === step ? 'text-ink' : 'text-muted'}`}>
                
                  {label}
                </span>
                {index < steps.length - 1 && <span className="h-px flex-1 bg-line" aria-hidden="true" />}
              </li>
            )}
          </ol>

          <div className="mt-6">
            {step === 0 &&
            <div className="space-y-4">
                <div>
                  <h1 className="text-xl font-bold tracking-tight text-ink">Create your account</h1>
                  <p className="mt-1 text-sm text-muted">
                    Use your university email if you have one — it verifies you instantly.
                  </p>
                </div>
                <div>
                  <label htmlFor="name" className="text-sm font-medium text-ink">
                    Full name
                  </label>
                  <input id="name" className={fieldClass} defaultValue="Buddhika Senanayake" />
                </div>
                <div>
                  <label htmlFor="email" className="text-sm font-medium text-ink">
                    Email
                  </label>
                  <input
                  id="email"
                  type="email"
                  className={fieldClass}
                  defaultValue="buddhika@std.susl.ac.lk" />
                
                  <p className="mt-1.5 flex items-center gap-1.5 text-xs font-medium text-brand">
                    <BadgeCheckIcon className="h-3.5 w-3.5" aria-hidden="true" />
                    Recognised university domain — instant institution verification
                  </p>
                </div>
                <div>
                  <label htmlFor="password" className="text-sm font-medium text-ink">
                    Password
                  </label>
                  <input id="password" type="password" className={fieldClass} defaultValue="••••••••••" />
                </div>
              </div>
            }

            {step === 1 &&
            <div className="space-y-4">
                <div>
                  <h1 className="text-xl font-bold tracking-tight text-ink">Your institution</h1>
                  <p className="mt-1 text-sm text-muted">
                    This decides what appears in your feed, so keep it accurate.
                  </p>
                </div>
                <fieldset>
                  <legend className="text-sm font-medium text-ink">Account type</legend>
                  <div className="mt-2 grid grid-cols-2 gap-2">
                    {(
                  [
                  { id: 'university', label: 'University / institute' },
                  { id: 'school', label: 'School' }] as
                  const).
                  map((option) =>
                  <button
                    key={option.id}
                    type="button"
                    onClick={() => setAccountType(option.id)}
                    aria-pressed={accountType === option.id}
                    className={`rounded-xl border px-3.5 py-2.5 text-sm font-medium transition-colors duration-150 ease-out ${
                    accountType === option.id ?
                    'border-brand bg-brand-soft text-brand' :
                    'border-line text-muted hover:border-ink hover:text-ink'}`
                    }>
                    
                        {option.label}
                      </button>
                  )}
                  </div>
                </fieldset>

                <div>
                  <label htmlFor="institution" className="text-sm font-medium text-ink">
                    {accountType === 'university' ? 'University or institute' : 'School'}
                  </label>
                  <select id="institution" className={fieldClass}>
                    {institutions.
                  filter((item) =>
                  accountType === 'university' ? item.type !== 'School' : item.type === 'School'
                  ).
                  map((option) =>
                  <option key={option.id}>{option.name}</option>
                  )}
                  </select>
                </div>

                {accountType === 'university' ?
              <>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label htmlFor="faculty" className="text-sm font-medium text-ink">
                          Faculty
                        </label>
                        <select id="faculty" className={fieldClass} defaultValue={faculties[0]}>
                          {faculties.map((option) =>
                      <option key={option}>{option}</option>
                      )}
                        </select>
                      </div>
                      <div>
                        <label htmlFor="batch" className="text-sm font-medium text-ink">
                          Batch
                        </label>
                        <select id="batch" className={fieldClass} defaultValue="2026 Batch">
                          {batches.map((option) =>
                      <option key={option}>{option}</option>
                      )}
                        </select>
                      </div>
                    </div>
                    <div>
                      <label htmlFor="course" className="text-sm font-medium text-ink">
                        Degree programme
                      </label>
                      <select id="course" className={fieldClass} defaultValue={courses[0]}>
                        {courses.map((option) =>
                    <option key={option}>{option}</option>
                    )}
                      </select>
                    </div>
                  </> :

              <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="grade" className="text-sm font-medium text-ink">
                        Grade
                      </label>
                      <select id="grade" className={fieldClass} defaultValue={grades[3]}>
                        {grades.map((option) =>
                    <option key={option}>{option}</option>
                    )}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="class" className="text-sm font-medium text-ink">
                        Class
                      </label>
                      <select id="class" className={fieldClass}>
                        {classes.map((option) =>
                    <option key={option}>{option}</option>
                    )}
                      </select>
                    </div>
                  </div>
              }
                <p className="flex items-start gap-2 rounded-xl bg-brand-soft px-3 py-2.5 text-xs leading-relaxed text-brand-ink">
                  <MailIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                  No university email? You can upload your student ID instead — your institution
                  administrator reviews it within two working days.
                </p>
              </div>
            }

            {step === 2 &&
            <div className="space-y-4">
                <div>
                  <h1 className="text-xl font-bold tracking-tight text-ink">What interests you?</h1>
                  <p className="mt-1 text-sm text-muted">
                    We use this to rank clubs, events and opportunities in your feed. Official
                    announcements always come first.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {interests.map((interest) =>
                <button
                  key={interest}
                  type="button"
                  onClick={() => toggleInterest(interest)}
                  aria-pressed={selected.includes(interest)}
                  className={`rounded-full border px-3.5 py-1.5 text-sm font-medium transition-colors duration-150 ease-out ${
                  selected.includes(interest) ?
                  'border-brand bg-brand text-white' :
                  'border-line text-ink/75 hover:border-brand/60 hover:text-brand'}`
                  }>
                  
                      {interest}
                    </button>
                )}
                </div>
                <p className="text-xs text-muted">{selected.length} selected · you can change this later</p>
              </div>
            }
          </div>

          <div className="mt-7 flex items-center justify-between border-t border-line pt-4">
            <button
              type="button"
              onClick={() => step === 0 ? navigate('/feed') : setStep(step - 1)}
              className="inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium text-muted transition-colors duration-150 ease-out hover:text-ink">
              
              <ArrowLeftIcon className="h-4 w-4" aria-hidden="true" />
              {step === 0 ? 'Back to feed' : 'Back'}
            </button>
            <button
              type="button"
              onClick={() => step === steps.length - 1 ? navigate('/feed') : setStep(step + 1)}
              className="inline-flex items-center gap-1.5 rounded-lg bg-brand px-4 py-2 text-sm font-semibold text-white transition-colors duration-150 ease-out hover:bg-brand-hover">
              
              {step === steps.length - 1 ? 'Enter your campus' : 'Continue'}
              <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
        </div>

        <p className="mt-4 text-center text-xs leading-relaxed text-muted">
          By continuing you agree to the UniLK community rules and content policy, including the
          rules on sharing copyrighted academic material.
        </p>
      </div>
    </div>);

}