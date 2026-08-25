import React from 'react';
import { Link } from 'react-router-dom';
import {
  CalendarPlusIcon,
  FileUpIcon,
  HelpCircleIcon,
  MegaphoneIcon,
  PenLineIcon,
  ShieldCheckIcon,
  UsersRoundIcon } from
'lucide-react';
import { useRole } from '../contexts/RoleContext';

interface QuickActionsProps {
  onCompose: () => void;
}

export function QuickActions({ onCompose }: QuickActionsProps) {
  const { can, persona } = useRole();

  const actions = [
  { id: 'post', label: 'Create post', Icon: PenLineIcon, permission: 'create_post', onClick: onCompose },
  { id: 'question', label: 'Ask a question', Icon: HelpCircleIcon, permission: 'create_post', onClick: onCompose },
  { id: 'announcement', label: 'Publish announcement', Icon: MegaphoneIcon, permission: 'create_announcement', to: '/workspace' },
  { id: 'event', label: 'Create event', Icon: CalendarPlusIcon, permission: 'create_event', to: '/events' },
  { id: 'resource', label: 'Upload resource', Icon: FileUpIcon, permission: 'upload_resource', to: '/resources' },
  { id: 'verify', label: 'Review verifications', Icon: ShieldCheckIcon, permission: 'verify_users', to: '/workspace' },
  { id: 'community', label: 'Join a community', Icon: UsersRoundIcon, permission: 'join_community', to: '/communities' }].
  filter((action) => can(action.permission));

  if (actions.length === 0) return null;

  return (
    <section aria-label="Quick actions" className="rounded-2xl border border-line bg-surface p-4">
      <div className="flex items-baseline justify-between">
        <h2 className="text-[11px] font-semibold uppercase tracking-[0.1em] text-faint">
          Quick actions
        </h2>
        <span className="text-[11px] text-faint">{persona.role}</span>
      </div>

      <div className="no-scrollbar mt-3 flex gap-2 overflow-x-auto">
        {actions.map((action) =>
        action.to ?
        <Link
          key={action.id}
          to={action.to}
          className="inline-flex shrink-0 items-center gap-2 rounded-lg border border-line px-3 py-2 text-[13px] font-medium text-ink transition-colors duration-150 ease-out hover:border-brand hover:text-brand">
          
              <action.Icon className="h-4 w-4 text-brand" aria-hidden="true" />
              {action.label}
            </Link> :

        <button
          key={action.id}
          type="button"
          onClick={action.onClick}
          className="inline-flex shrink-0 items-center gap-2 rounded-lg border border-line px-3 py-2 text-[13px] font-medium text-ink transition-colors duration-150 ease-out hover:border-brand hover:text-brand">
          
              <action.Icon className="h-4 w-4 text-brand" aria-hidden="true" />
              {action.label}
            </button>

        )}
      </div>
    </section>);

}