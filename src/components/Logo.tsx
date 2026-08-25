import React from 'react';
import { GraduationCap } from 'lucide-react';

interface LogoProps {
  size?: number | string;
  className?: string;
  showText?: boolean;
  textSize?: string;
}

/* Brand logo icon with university graduation cap emblem */
export function Logo({
  className = '',
  showText = false,
  textSize = 'text-[18px]'
}: LogoProps) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <span className="brand-gradient flex h-8 w-8 items-center justify-center rounded-xl text-white shadow-sm transition-transform duration-200 group-hover:scale-105">
        <GraduationCap className="h-5 w-5" aria-hidden="true" />
      </span>
      {showText && (
        <span className={`font-display font-extrabold tracking-tight text-ink ${textSize}`}>
          Uni<span className="text-brand">LK</span>
        </span>
      )}
    </div>
  );
}

/* Standalone university academic logo badge */
export function LogoMark({
  className = ''
}: {
  className?: string;
}) {
  return (
    <span className={`brand-gradient flex h-8 w-8 items-center justify-center rounded-xl text-white shadow-sm transition-transform duration-200 group-hover:scale-105 ${className}`}>
      <GraduationCap className="h-5 w-5" aria-hidden="true" />
    </span>
  );
}
