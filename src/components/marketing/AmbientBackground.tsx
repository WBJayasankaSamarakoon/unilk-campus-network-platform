import React from 'react';

/* Floating ambient particles */
const particles = [
  { id: 1, top: '15%', left: '12%', size: 4, duration: '9s', delay: '0s' },
  { id: 2, top: '25%', left: '82%', size: 5, duration: '12s', delay: '1.5s' },
  { id: 3, top: '42%', left: '18%', size: 3, duration: '10s', delay: '3s' },
  { id: 4, top: '60%', left: '76%', size: 5, duration: '14s', delay: '0.8s' },
  { id: 5, top: '72%', left: '15%', size: 4, duration: '11s', delay: '2.5s' },
  { id: 6, top: '85%', left: '86%', size: 4, duration: '13s', delay: '4s' }
];

/* Ultra-smooth GPU accelerated ambient background without heavy blur kernels */
export function AmbientBackground() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      style={{ contain: 'strict' }}
      aria-hidden="true"
    >
      {/* Subtle geometric dot matrix pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.06]"
        style={{
          backgroundImage: 'radial-gradient(currentColor 1px, transparent 1px)',
          backgroundSize: '32px 32px',
          maskImage: 'radial-gradient(ellipse 80% 60% at 50% 30%, black 40%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 60% at 50% 30%, black 40%, transparent 100%)'
        }}
      />

      {/* Primary Electric Indigo Aurora Glow Orb - Pure Smooth Radial Gradient */}
      <div
        className="animate-float-slow absolute -right-20 -top-20 h-[560px] w-[560px] rounded-full will-change-transform"
        style={{
          background: 'radial-gradient(circle closest-side, rgba(99,102,241,0.16) 0%, rgba(139,92,246,0.08) 50%, rgba(99,102,241,0.02) 80%, transparent 100%)',
          transform: 'translate3d(0, 0, 0)'
        }}
      />

      {/* Secondary Sapphire / Cyan Glow Orb */}
      <div
        className="animate-float-reverse absolute -left-24 top-1/3 h-[500px] w-[500px] rounded-full will-change-transform"
        style={{
          background: 'radial-gradient(circle closest-side, rgba(13,148,136,0.14) 0%, rgba(37,99,235,0.06) 55%, transparent 100%)',
          transform: 'translate3d(0, 0, 0)'
        }}
      />

      {/* Tertiary Violet Ambient Drift Orb */}
      <div
        className="animate-float absolute right-1/4 top-2/3 h-[460px] w-[460px] rounded-full will-change-transform"
        style={{
          background: 'radial-gradient(circle closest-side, rgba(147,51,234,0.12) 0%, rgba(79,70,229,0.05) 55%, transparent 100%)',
          transform: 'translate3d(0, 0, 0)'
        }}
      />

      {/* Floating Sparkle Particles */}
      {particles.map((p) => (
        <span
          key={p.id}
          style={{
            top: p.top,
            left: p.left,
            width: `${p.size}px`,
            height: `${p.size}px`,
            animation: `float ${p.duration} ease-in-out infinite ${p.delay}`,
            transform: 'translate3d(0, 0, 0)'
          }}
          className="absolute rounded-full bg-brand/70 shadow-[0_0_6px_rgba(99,102,241,0.6)] will-change-transform dark:bg-brand-hover dark:shadow-[0_0_8px_rgba(129,140,248,0.7)]"
        />
      ))}
    </div>
  );
}
