import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  BookmarkIcon,
  CalendarIcon,
  ClockIcon,
  FileTextIcon,
  HeartIcon,
  LinkIcon,
  MessageCircleIcon,
  PinIcon,
  Share2Icon } from
'lucide-react';
import { Avatar } from './Avatar';
import { CategoryChip } from './CategoryChip';
import { VerifiedBadge } from './VerifiedBadge';
import { formatCount } from '../utils/categories';
import type { FeedPost } from '../types/campus';

interface PostCardProps {
  post: FeedPost;
}

export function PostCard({ post }: PostCardProps) {
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(Boolean(post.saved));
  const [voted, setVoted] = useState<number | null>(null);

  const poll = post.attachment?.kind === 'poll' ? post.attachment.options ?? [] : [];
  const totalVotes = poll.reduce((sum, option) => sum + option.votes, 0) + (voted === null ? 0 : 1);

  const isOfficial = post.author.verification === 'official';
  const isAnnouncement = post.category === 'announcement';
  const sourceLabel = isOfficial ? 'Official' : post.author.verification === 'representative' ? 'Representative' : 'Student';

  return (
    <article
      className="group relative overflow-hidden rounded-2xl border border-line bg-surface shadow-card transition-colors duration-200 ease-out hover:border-line-strong">
      

      {post.pinned &&
      <div className="flex items-center gap-2 border-b border-line bg-brand-soft/60 px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.08em] text-brand">
          <PinIcon className="h-3.5 w-3.5" aria-hidden="true" />
          Pinned by your institution
        </div>
      }

      <div className="p-5">
        <div className="flex items-start gap-3">
          <Avatar
            name={post.author.name}
            color={post.author.color}
            shape={isOfficial ? 'squircle' : 'circle'} />
          
          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-x-1.5 gap-y-0.5">
              <span className="truncate text-[15px] font-semibold text-ink">
                {post.author.name}
              </span>
              <VerifiedBadge level={post.author.verification} />
              <span className="text-xs text-faint">· {post.postedAt}</span>
            </div>
            <p className="truncate text-xs text-muted">
              <span
                className={`font-medium ${isOfficial ? 'text-brand' : 'text-muted'}`}>
                
                {sourceLabel}
              </span>
              {' · '}
              {post.author.role} · to {post.audience}
            </p>
          </div>

          <span className="flex shrink-0 items-center gap-1.5">
            {post.scope === 'national' &&
            <span className="rounded-md bg-cyan-soft px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.06em] text-cyan">
                National
              </span>
            }
            <CategoryChip category={post.category} />
          </span>
        </div>

        <div className="mt-3.5">
          {post.title &&
          <h3
            className={`font-display font-bold leading-snug text-ink ${
            isAnnouncement ? 'text-xl' : 'text-[17px]'}`
            }>
            
              {post.title}
            </h3>
          }
          <p className={`text-[15px] leading-[1.65] text-muted ${post.title ? 'mt-2' : ''}`}>
            {post.body}
          </p>
        </div>

        {post.attachment?.kind === 'image' && post.attachment.url &&
        <div className="relative mt-4 overflow-hidden rounded-xl border border-line">
            <img
            src={post.attachment.url}
            alt={post.attachment.label}
            className="h-60 w-full object-cover sm:h-72" />
          
            {post.category === 'event' &&
          <span className="glass-panel absolute bottom-3 left-3 inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-semibold text-ink">
                <CalendarIcon className="h-3.5 w-3.5 text-brand" aria-hidden="true" />
                Registration open
              </span>
          }
          </div>
        }

        {post.attachment?.kind === 'document' &&
        <button
          type="button"
          className="mt-4 flex w-full items-center gap-3 rounded-xl border border-line bg-sunken px-4 py-3 text-left transition-colors duration-150 ease-out hover:border-brand/40">
          
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-soft">
              <FileTextIcon className="h-4 w-4 text-brand" aria-hidden="true" />
            </span>
            <span className="min-w-0">
              <span className="block truncate text-sm font-medium text-ink">
                {post.attachment.label}
              </span>
              <span className="block text-xs text-faint">{post.attachment.meta}</span>
            </span>
          </button>
        }

        {post.attachment?.kind === 'link' &&
        <a
          href="#"
          className="mt-4 flex items-center gap-3 rounded-xl border border-line bg-sunken px-4 py-3 transition-colors duration-150 ease-out hover:border-brand/40">
          
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-cyan-soft">
              <LinkIcon className="h-4 w-4 text-cyan" aria-hidden="true" />
            </span>
            <span className="min-w-0">
              <span className="block truncate text-sm font-medium text-ink">
                {post.attachment.label}
              </span>
              <span className="block text-xs text-faint">{post.attachment.meta}</span>
            </span>
          </a>
        }

        {poll.length > 0 &&
        <div className="mt-4 space-y-2">
            {poll.map((option, index) => {
            const votes = option.votes + (voted === index ? 1 : 0);
            const percent = totalVotes ? Math.round(votes / totalVotes * 100) : 0;
            return (
              <button
                key={option.label}
                type="button"
                onClick={() => setVoted(index)}
                aria-pressed={voted === index}
                className={`relative w-full overflow-hidden rounded-lg border px-3 py-2 text-left text-sm transition-colors duration-150 ease-out ${
                voted === index ?
                'border-brand/50 text-brand' :
                'border-line text-ink hover:border-line-strong'}`
                }>
                
                  {voted !== null &&
                <span
                  className="absolute inset-y-0 left-0 bg-brand-soft"
                  style={{ width: `${percent}%` }}
                  aria-hidden="true" />

                }
                  <span className="relative flex items-center justify-between">
                    <span className="font-medium">{option.label}</span>
                    {voted !== null && <span className="text-xs text-faint">{percent}%</span>}
                  </span>
                </button>);

          })}
            <p className="flex items-center gap-1.5 text-xs text-faint">
              <ClockIcon className="h-3.5 w-3.5" aria-hidden="true" />
              {voted === null ? 'Tap an option to vote' : `${totalVotes} votes`}
            </p>
          </div>
        }

        <div className="mt-4 flex items-center gap-0.5 border-t border-line pt-3 text-sm text-muted">
          <motion.button
            type="button"
            onClick={() => setLiked((value) => !value)}
            aria-pressed={liked}
            whileTap={{ scale: 0.94 }}
            transition={{ duration: 0.12, ease: [0.23, 1, 0.32, 1] }}
            className={`inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-[13px] transition-colors duration-150 ease-out hover:bg-elevated ${
            liked ? 'text-rose-500' : ''}`
            }>
            
            <HeartIcon className={`h-4 w-4 ${liked ? 'fill-current text-rose-500' : ''}`} aria-hidden="true" />
            {formatCount(post.reactions + (liked ? 1 : 0))}
          </motion.button>
          <button
            type="button"
            className="inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-[13px] transition-colors duration-150 ease-out hover:bg-elevated">
            
            <MessageCircleIcon className="h-4 w-4" aria-hidden="true" />
            {post.comments}
          </button>
          <button
            type="button"
            className="inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-[13px] transition-colors duration-150 ease-out hover:bg-elevated">
            
            <Share2Icon className="h-4 w-4" aria-hidden="true" />
            <span className="hidden sm:inline">Share</span>
          </button>
          <motion.button
            type="button"
            onClick={() => setSaved((value) => !value)}
            aria-pressed={saved}
            whileTap={{ scale: 0.94 }}
            transition={{ duration: 0.12, ease: [0.23, 1, 0.32, 1] }}
            className={`ml-auto inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-[13px] transition-colors duration-150 ease-out hover:bg-elevated ${
            saved ? 'text-brand' : ''}`
            }>
            
            <BookmarkIcon className={`h-4 w-4 ${saved ? 'fill-current' : ''}`} aria-hidden="true" />
            {saved ? 'Saved' : 'Save'}
          </motion.button>
        </div>
      </div>
    </article>);

}