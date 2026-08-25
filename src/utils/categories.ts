import {
  BookOpenIcon,
  BriefcaseIcon,
  CalendarIcon,
  MegaphoneIcon,
  MessageSquareIcon,
  TrophyIcon,
  UsersIcon } from
'lucide-react';
import type { LucideIcon } from 'lucide-react';
import type { Category } from '../types/campus';

interface CategoryMeta {
  label: string;
  Icon: LucideIcon;
  chip: string;
  accent: string;
}

export const categoryMeta: Record<Category, CategoryMeta> = {
  announcement: {
    label: 'Announcement',
    Icon: MegaphoneIcon,
    chip: 'bg-cat-announcement-bg text-cat-announcement-fg',
    accent: 'bg-cat-announcement-fg'
  },
  event: {
    label: 'Event',
    Icon: CalendarIcon,
    chip: 'bg-cat-event-bg text-cat-event-fg',
    accent: 'bg-cat-event-fg'
  },
  sports: {
    label: 'Sports',
    Icon: TrophyIcon,
    chip: 'bg-cat-sports-bg text-cat-sports-fg',
    accent: 'bg-cat-sports-fg'
  },
  club: {
    label: 'Club',
    Icon: UsersIcon,
    chip: 'bg-cat-club-bg text-cat-club-fg',
    accent: 'bg-cat-club-fg'
  },
  resource: {
    label: 'Resource',
    Icon: BookOpenIcon,
    chip: 'bg-cat-resource-bg text-cat-resource-fg',
    accent: 'bg-cat-resource-fg'
  },
  opportunity: {
    label: 'Opportunity',
    Icon: BriefcaseIcon,
    chip: 'bg-cat-opportunity-bg text-cat-opportunity-fg',
    accent: 'bg-cat-opportunity-fg'
  },
  student: {
    label: 'Discussion',
    Icon: MessageSquareIcon,
    chip: 'bg-cat-student-bg text-cat-student-fg',
    accent: 'bg-cat-student-fg'
  }
};

export function formatCount(value: number): string {
  if (value >= 1000) {
    const rounded = (value / 1000).toFixed(value % 1000 === 0 ? 0 : 1);
    return `${rounded}k`;
  }
  return String(value);
}