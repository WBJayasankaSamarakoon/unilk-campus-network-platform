import React from 'react';
import { categoryMeta } from '../utils/categories';
import type { Category } from '../types/campus';

interface CategoryChipProps {
  category: Category;
  label?: string;
}

export function CategoryChip({ category, label }: CategoryChipProps) {
  const meta = categoryMeta[category];
  const { Icon } = meta;
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-semibold ${meta.chip}`}>
      
      <Icon className="h-3.5 w-3.5" aria-hidden="true" />
      {label ?? meta.label}
    </span>);

}