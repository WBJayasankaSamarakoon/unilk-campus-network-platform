import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { BarChart3Icon, FileTextIcon, ImageIcon, LinkIcon, XIcon } from 'lucide-react';
import { Avatar } from './Avatar';
import { currentUser } from '../data/user';

const types = ['Post', 'Question', 'Poll', 'Event'] as const;
const audiences = ['SE 2026 Batch', 'Faculty of Computing', 'SUSL General'];

interface CreatePostModalProps {
  open: boolean;
  onClose: () => void;
}

export function CreatePostModal({ open, onClose }: CreatePostModalProps) {
  const [type, setType] = useState<(typeof types)[number]>('Post');
  const [value, setValue] = useState('');

  return (
    <AnimatePresence>
      {open &&
      <motion.div
        className="fixed inset-0 z-50 flex items-end justify-center sm:items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.16, ease: [0.23, 1, 0.32, 1] }}>
        
          <div
          className="absolute inset-0 bg-charcoal/60 backdrop-blur-sm"
          onClick={onClose}
          aria-hidden="true" />
        
          <motion.div
          role="dialog"
          aria-modal="true"
          aria-label="Create a post"
          initial={{ y: 24, opacity: 0, scale: 0.98 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          exit={{ y: 16, opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.22, ease: [0.23, 1, 0.32, 1] }}
          className="relative w-full max-w-lg rounded-t-2xl border border-line bg-surface p-5 shadow-pop sm:rounded-2xl">
          
            <div className="mx-auto mb-4 h-1 w-10 rounded-full bg-line sm:hidden" aria-hidden="true" />

            <div className="flex items-center justify-between">
              <h2 className="font-display text-lg font-bold text-ink">Create</h2>
              <button
              type="button"
              onClick={onClose}
              className="rounded-lg p-1.5 text-muted transition-colors duration-150 ease-out hover:bg-elevated hover:text-ink">
              
                <XIcon className="h-5 w-5" aria-hidden="true" />
                <span className="sr-only">Close</span>
              </button>
            </div>

            <div className="mt-4 flex gap-1.5">
              {types.map((option) =>
            <button
              key={option}
              type="button"
              onClick={() => setType(option)}
              aria-pressed={type === option}
              className={`rounded-lg px-3 py-1.5 text-sm font-medium transition-colors duration-150 ease-out ${
              type === option ?
              'bg-brand text-white' :
              'bg-elevated text-muted hover:text-ink'}`
              }>
              
                  {option}
                </button>
            )}
            </div>

            <div className="mt-4 flex gap-3">
              <Avatar name={currentUser.fullName} color="bg-brand" />
              <textarea
              rows={4}
              value={value}
              onChange={(event) => setValue(event.target.value)}
              aria-label="Post content"
              placeholder={
              type === 'Question' ?
              'Ask your batch a question…' :
              type === 'Poll' ?
              'What do you want to ask?' :
              'Share something with your campus…'
              }
              className="w-full resize-none rounded-xl border border-line bg-sunken p-3 text-[15px] text-ink placeholder:text-faint focus:border-brand focus:bg-surface focus:outline-none" />
            
            </div>

            <div className="mt-3 flex flex-wrap items-center gap-1">
              {[
            { label: 'Photo', Icon: ImageIcon },
            { label: 'Document', Icon: FileTextIcon },
            { label: 'Poll', Icon: BarChart3Icon },
            { label: 'Link', Icon: LinkIcon }].
            map(({ label, Icon }) =>
            <button
              key={label}
              type="button"
              className="inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-sm text-muted transition-colors duration-150 ease-out hover:bg-elevated hover:text-ink">
              
                  <Icon className="h-4 w-4" aria-hidden="true" />
                  {label}
                </button>
            )}
            </div>

            <div className="mt-4 flex items-center gap-2 border-t border-line pt-4">
              <label htmlFor="modal-audience" className="sr-only">
                Post to
              </label>
              <select
              id="modal-audience"
              className="rounded-lg border border-line bg-surface px-2.5 py-2 text-sm text-ink focus:border-brand focus:outline-none">
              
                {audiences.map((option) =>
              <option key={option}>{option}</option>
              )}
              </select>
              <button
              type="button"
              onClick={onClose}
              disabled={!value.trim()}
              className="ml-auto rounded-lg bg-brand px-4 py-2 text-sm font-semibold text-white transition-colors duration-150 ease-out hover:bg-brand-hover disabled:cursor-not-allowed disabled:bg-elevated disabled:text-muted">
              
                Publish
              </button>
            </div>
          </motion.div>
        </motion.div>
      }
    </AnimatePresence>);

}