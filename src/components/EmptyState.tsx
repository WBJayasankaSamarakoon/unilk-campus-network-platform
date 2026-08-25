import React from "react";
import { Link } from "react-router-dom";
import { RefreshCwIcon, LucideIcon } from "lucide-react";
interface EmptyStateProps {
  Icon: LucideIcon;
  title: string;
  description: string;
  actionLabel?: string;
  actionTo?: string;
  secondaryLabel?: string;
  secondaryTo?: string;
}
export function EmptyState({
  Icon,
  title,
  description,
  actionLabel,
  actionTo,
  secondaryLabel,
  secondaryTo
}: EmptyStateProps) {
  return <div className="relative overflow-hidden rounded-2xl border border-line bg-surface px-6 py-16 text-center">
      <span className="brand-gradient-soft pointer-events-none absolute -top-24 left-1/2 h-48 w-72 -translate-x-1/2 rounded-full blur-2xl" aria-hidden="true" />
      <span className="relative mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-line bg-sunken">
        <Icon className="h-5 w-5 text-brand" aria-hidden="true" />
      </span>
      <h3 className="relative mt-5 font-display text-lg font-bold text-ink">{title}</h3>
      <p className="relative mx-auto mt-1.5 max-w-sm text-sm leading-relaxed text-muted">
        {description}
      </p>
      {(actionLabel || secondaryLabel) && <div className="relative mt-6 flex flex-wrap justify-center gap-2">
          {actionLabel && actionTo && <Link to={actionTo} className="rounded-lg bg-brand px-4 py-2 text-sm font-semibold text-white transition-colors duration-150 ease-out hover:bg-brand-hover">
              {actionLabel}
            </Link>}
          {secondaryLabel && secondaryTo && <Link to={secondaryTo} className="rounded-lg border border-line px-4 py-2 text-sm font-semibold text-ink transition-colors duration-150 ease-out hover:border-line-strong">
              {secondaryLabel}
            </Link>}
        </div>}
    </div>;
}
interface ErrorStateProps {
  title?: string;
  description?: string;
  onRetry: () => void;
}
export function ErrorState({
  title = 'Something went wrong',
  description = 'We couldn’t load your campus feed. Please try again.',
  onRetry
}: ErrorStateProps) {
  return <div role="alert" className="rounded-2xl border border-danger/30 bg-surface px-6 py-12 text-center">
      <h3 className="font-display text-lg font-bold text-ink">{title}</h3>
      <p className="mx-auto mt-1.5 max-w-sm text-sm leading-relaxed text-muted">{description}</p>
      <button type="button" onClick={onRetry} className="mt-6 inline-flex items-center gap-1.5 rounded-lg border border-line px-4 py-2 text-sm font-semibold text-ink transition-colors duration-150 ease-out hover:border-line-strong">
        <RefreshCwIcon className="h-4 w-4" aria-hidden="true" />
        Try again
      </button>
    </div>;
}