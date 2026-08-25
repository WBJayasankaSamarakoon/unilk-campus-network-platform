import React from 'react';
import { BadgeCheckIcon, ShieldCheckIcon } from 'lucide-react';
import type { VerificationLevel } from '../types/campus';

interface VerifiedBadgeProps {
  level: VerificationLevel;
  withLabel?: boolean;
}

export function VerifiedBadge({ level, withLabel = false }: VerifiedBadgeProps) {
  if (level === 'student') return null;

  const isOfficial = level === 'official';
  const Icon = isOfficial ? BadgeCheckIcon : ShieldCheckIcon;
  const label = isOfficial ? 'Official' : 'Verified rep';
  const tone = isOfficial ? 'text-brand' : 'text-cat-announcement-fg';

  if (!withLabel) {
    return (
      <span className={tone} title={label}>
        <Icon className="h-4 w-4" aria-hidden="true" />
        <span className="sr-only">{label}</span>
      </span>);

  }

  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[11px] font-medium ${
      isOfficial ? 'bg-brand-soft text-brand' : 'bg-cat-announcement-bg text-cat-announcement-fg'}`
      }>
      
      <Icon className="h-3.5 w-3.5" aria-hidden="true" />
      {label}
    </span>);

}