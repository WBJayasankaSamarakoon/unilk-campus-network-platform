import React from 'react';

interface SkeletonProps {
  className?: string;
}

export function Skeleton({ className = '' }: SkeletonProps) {
  return <span className={`skeleton block rounded-md ${className}`} aria-hidden="true" />;
}

export function PostSkeleton() {
  return (
    <div className="rounded-2xl border border-line bg-surface p-5 shadow-card">
      <div className="flex items-center gap-3">
        <Skeleton className="h-10 w-10 rounded-full" />
        <div className="flex-1 space-y-2">
          <Skeleton className="h-3.5 w-40" />
          <Skeleton className="h-3 w-24" />
        </div>
        <Skeleton className="h-6 w-20 rounded-full" />
      </div>
      <div className="mt-4 space-y-2">
        <Skeleton className="h-4 w-3/4" />
        <Skeleton className="h-3.5 w-full" />
        <Skeleton className="h-3.5 w-5/6" />
      </div>
      <Skeleton className="mt-4 h-40 w-full rounded-xl" />
    </div>);

}

export function CardSkeleton({ lines = 3 }: {lines?: number;}) {
  return (
    <div className="rounded-2xl border border-line bg-surface p-4 shadow-card">
      <Skeleton className="h-4 w-1/2" />
      <div className="mt-3 space-y-2">
        {Array.from({ length: lines }, (_, index) =>
        <Skeleton key={index} className={`h-3 ${index === lines - 1 ? 'w-2/3' : 'w-full'}`} />
        )}
      </div>
    </div>);

}

export function FeedSkeleton() {
  return (
    <div className="space-y-4" role="status" aria-label="Loading your campus feed">
      <PostSkeleton />
      <PostSkeleton />
    </div>);

}