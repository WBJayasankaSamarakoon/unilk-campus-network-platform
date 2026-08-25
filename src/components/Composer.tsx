import React, { useState } from 'react';
import { BarChart3Icon, FileTextIcon, ImageIcon, LinkIcon } from 'lucide-react';
import { Avatar } from './Avatar';
import { currentUser } from '../data/user';

const audiences = ['SE 2026 Batch', 'Faculty of Computing', 'SUSL General'];

const actions = [
{ label: 'Photo', Icon: ImageIcon },
{ label: 'Document', Icon: FileTextIcon },
{ label: 'Poll', Icon: BarChart3Icon },
{ label: 'Link', Icon: LinkIcon }];


export function Composer() {
  const [value, setValue] = useState('');
  const [audience, setAudience] = useState(audiences[0]);

  return (
    <form
      className="rounded-2xl border border-line bg-surface p-4 shadow-card"
      onSubmit={(event) => {
        event.preventDefault();
        setValue('');
      }}>
      
      <div className="flex gap-3">
        <Avatar name={currentUser.fullName} color="brand-gradient" />
        <div className="min-w-0 flex-1">
          <label htmlFor="composer" className="sr-only">
            Share something with your campus
          </label>
          <textarea
            id="composer"
            rows={value ? 3 : 1}
            value={value}
            onChange={(event) => setValue(event.target.value)}
            placeholder="Ask a question or share something with your batch…"
            className="w-full resize-none border-0 bg-transparent p-0 pt-2 text-[15px] text-ink placeholder:text-faint focus:outline-none focus:ring-0" />
          
        </div>
      </div>

      <div className="mt-3 flex flex-wrap items-center gap-1 border-t border-line pt-3">
        {actions.map(({ label, Icon }, index) =>
        <button
          key={label}
          type="button"
          className={`items-center gap-1.5 rounded-lg px-2 py-1.5 text-sm text-muted transition-colors duration-150 ease-out hover:bg-elevated hover:text-ink ${
          index === actions.length - 1 ? 'hidden sm:inline-flex' : 'inline-flex'}`
          }>
          
            <Icon className="h-4 w-4" aria-hidden="true" /> {label}
          </button>
        )}

        <div className="ml-auto flex items-center gap-2">
          <label htmlFor="audience" className="sr-only">
            Post to
          </label>
          <select
            id="audience"
            value={audience}
            onChange={(event) => setAudience(event.target.value)}
            className="rounded-lg border border-line bg-surface px-2 py-1.5 text-sm text-ink focus:border-brand focus:outline-none">
            
            {audiences.map((option) =>
            <option key={option}>{option}</option>
            )}
          </select>
          <button
            type="submit"
            disabled={!value.trim()}
            className="rounded-lg bg-brand px-4 py-2 text-sm font-semibold text-white transition-colors duration-150 ease-out hover:bg-brand-hover disabled:cursor-not-allowed disabled:bg-elevated disabled:text-muted">
            
            Post
          </button>
        </div>
      </div>
    </form>);

}