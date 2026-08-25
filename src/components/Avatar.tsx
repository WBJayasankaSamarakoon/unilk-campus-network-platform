import React from 'react';

interface AvatarProps {
  name: string;
  color?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg';
  shape?: 'circle' | 'squircle';
}

const sizes = {
  xs: 'h-7 w-7 text-[10px]',
  sm: 'h-8 w-8 text-[11px]',
  md: 'h-10 w-10 text-xs',
  lg: 'h-14 w-14 text-base'
};

function initials(name: string): string {
  const parts = name.replace(/[^A-Za-z ]/g, '').trim().split(/\s+/);
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

export function Avatar({ name, color = 'bg-brand', size = 'md', shape = 'circle' }: AvatarProps) {
  return (
    <span
      aria-hidden="true"
      className={`${sizes[size]} ${color} ${
      shape === 'circle' ? 'rounded-full' : 'rounded-xl'} inline-flex shrink-0 items-center justify-center font-display font-bold tracking-wide text-white`
      }>
      
      {initials(name)}
    </span>);

}