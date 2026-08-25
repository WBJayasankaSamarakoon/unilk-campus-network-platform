import React, { useState } from 'react';
import { CheckIcon, LockIcon } from 'lucide-react';
import { categoryMeta } from '../utils/categories';
import { notificationSettings, notifications } from '../data/notifications';
import type { Category, NotificationItem } from '../types/campus';

const groups: {id: string;label: string;hint: string;categories: Category[];}[] = [
{
  id: 'important',
  label: 'Important',
  hint: 'Official announcements from your institution',
  categories: ['announcement']
},
{ id: 'events', label: 'Events', hint: 'Reminders and registrations', categories: ['event', 'sports'] },
{
  id: 'community',
  label: 'Community',
  hint: 'Discussions in your batch and faculty',
  categories: ['student', 'club']
},
{
  id: 'opportunities',
  label: 'Opportunities',
  hint: 'Internships, scholarships and deadlines',
  categories: ['opportunity']
},
{ id: 'academic', label: 'Academic', hint: 'Resources and course material', categories: ['resource'] }];


export function Notifications() {
  const [items, setItems] = useState<NotificationItem[]>(notifications);
  const [settings, setSettings] = useState(notificationSettings);

  const unread = items.filter((item) => item.unread).length;

  const markRead = (id: string) =>
  setItems((current) =>
  current.map((entry) => entry.id === id ? { ...entry, unread: false } : entry)
  );

  return (
    <div className="grid w-full gap-6 lg:grid-cols-[minmax(0,1fr)_320px]">
      <div className="space-y-5">
        <header className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <h1 className="font-display text-3xl font-extrabold tracking-tight text-ink">
              Notifications
            </h1>
            <p className="mt-1.5 text-sm text-muted">
              {unread > 0 ? `${unread} unread` : 'You’re all caught up'} · grouped by what matters
              most to your batch
            </p>
          </div>
          {unread > 0 &&
          <button
            type="button"
            onClick={() => setItems(items.map((item) => ({ ...item, unread: false })))}
            className="inline-flex items-center gap-1.5 rounded-xl border border-line px-3 py-2 text-sm font-medium text-ink transition-colors duration-150 ease-out hover:border-brand hover:text-brand">
            
              <CheckIcon className="h-4 w-4" aria-hidden="true" />
              Mark all read
            </button>
          }
        </header>

        {groups.map((group) => {
          const groupItems = items.filter((item) => group.categories.includes(item.category));
          if (groupItems.length === 0) return null;
          const groupUnread = groupItems.filter((item) => item.unread).length;

          return (
            <section key={group.id}>
              <div className="flex items-baseline justify-between">
                <h2 className="font-display text-sm font-bold text-ink">{group.label}</h2>
                <p className="text-xs text-muted">
                  {groupUnread > 0 ? `${groupUnread} new · ` : ''}
                  {group.hint}
                </p>
              </div>

              <ul className="mt-2 overflow-hidden rounded-2xl border border-line bg-surface shadow-card">
                {groupItems.map((item) => {
                  const meta = categoryMeta[item.category];
                  const { Icon } = meta;
                  return (
                    <li key={item.id} className="border-b border-line last:border-0">
                      <button
                        type="button"
                        onClick={() => markRead(item.id)}
                        className="flex w-full items-start gap-3 px-4 py-3.5 text-left transition-colors duration-150 ease-out hover:bg-elevated">
                        
                        <span
                          className={`mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ${meta.chip}`}>
                          
                          <Icon className="h-4 w-4" aria-hidden="true" />
                        </span>
                        <span className="min-w-0 flex-1">
                          <span className="flex flex-wrap items-center gap-2">
                            <span
                              className={`text-sm ${item.unread ? 'font-semibold text-ink' : 'font-medium text-muted'}`}>
                              
                              {item.title}
                            </span>
                            {item.priority === 'high' &&
                            <span className="rounded px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-[0.08em] text-cat-announcement-fg ring-1 ring-cat-announcement-fg/30">
                                Important
                              </span>
                            }
                          </span>
                          <span className="mt-0.5 block text-sm text-muted">{item.body}</span>
                          <span className="mt-1 block text-xs text-muted">{item.time}</span>
                        </span>
                        {item.unread &&
                        <span
                          className="mt-2 h-2 w-2 shrink-0 rounded-full bg-brand"
                          aria-hidden="true" />

                        }
                      </button>
                    </li>);

                })}
              </ul>
            </section>);

        })}
      </div>

      <aside>
        <section className="sticky top-24 rounded-2xl border border-line bg-surface p-4 shadow-card">
          <h2 className="font-display text-sm font-bold text-ink">Notification preferences</h2>
          <ul className="mt-3 space-y-3">
            {settings.map((setting) =>
            <li key={setting.id} className="flex items-start justify-between gap-3">
                <span className="min-w-0">
                  <span className="block text-sm font-medium text-ink">{setting.label}</span>
                  <span className="block text-xs text-muted">{setting.detail}</span>
                </span>
                <button
                  type="button"
                  role="switch"
                  aria-checked={setting.on}
                  aria-label={setting.label}
                  disabled={setting.locked}
                  onClick={() =>
                    !setting.locked &&
                    setSettings((current) =>
                      current.map((entry) =>
                        entry.id === setting.id ? { ...entry, on: !entry.on } : entry
                      )
                    )
                  }
                  className={`relative inline-flex h-6 w-11 shrink-0 items-center rounded-full p-0.5 transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 ${
                    setting.on ? 'bg-brand' : 'bg-sunken border border-line-strong'
                  } ${setting.locked ? 'cursor-not-allowed opacity-60' : 'cursor-pointer hover:opacity-90'}`}>
                  
                  <span
                    className={`pointer-events-none flex h-5 w-5 items-center justify-center rounded-full bg-white shadow-sm ring-0 transition-transform duration-200 ease-in-out ${
                      setting.on ? 'translate-x-5' : 'translate-x-0'
                    }`}>
                    {setting.locked ? (
                      <LockIcon className="h-3 w-3 text-faint" aria-hidden="true" />
                    ) : setting.on ? (
                      <CheckIcon className="h-3 w-3 text-brand" aria-hidden="true" />
                    ) : null}
                  </span>
                </button>
              </li>
            )}
          </ul>
          <p className="mt-3 border-t border-line pt-3 text-xs leading-relaxed text-muted">
            Official announcements from your institution cannot be turned off.
          </p>
        </section>
      </aside>
    </div>);

}