const token = (name) => `rgb(var(--${name}) / <alpha-value>)`

export default {content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Manrope', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        canvas: token('canvas'),
        sunken: token('sunken'),
        surface: token('surface'),
        elevated: token('surface-2'),
        overlay: token('overlay'),
        line: token('line'),
        'line-strong': token('line-strong'),
        ink: token('ink'),
        muted: token('muted'),
        faint: token('faint'),
        navy: {
          DEFAULT: token('navy'),
          soft: token('navy-soft'),
        },
        brand: {
          DEFAULT: token('brand'),
          hover: token('brand-hover'),
          soft: token('brand-soft'),
          ink: token('brand-ink'),
        },
        cyan: {
          DEFAULT: token('cyan'),
          soft: token('cyan-soft'),
        },
        success: token('success'),
        warning: token('warning'),
        danger: token('danger'),
        info: token('info'),
        charcoal: {
          DEFAULT: '#0B0D12',
          soft: '#11141B',
          line: '#272C37',
        },
        cat: {
          announcement: { fg: token('cat-announcement-fg'), bg: token('cat-announcement-bg') },
          event: { fg: token('cat-event-fg'), bg: token('cat-event-bg') },
          sports: { fg: token('cat-sports-fg'), bg: token('cat-sports-bg') },
          club: { fg: token('cat-club-fg'), bg: token('cat-club-bg') },
          resource: { fg: token('cat-resource-fg'), bg: token('cat-resource-bg') },
          opportunity: { fg: token('cat-opportunity-fg'), bg: token('cat-opportunity-bg') },
          student: { fg: token('cat-student-fg'), bg: token('cat-student-bg') },
        },
      },
      boxShadow: {
        card: '0 1px 2px rgba(9, 11, 16, 0.05)',
        raised: '0 10px 30px -18px rgba(9, 11, 16, 0.45)',
        pop: '0 28px 70px -30px rgba(9, 11, 16, 0.6)',
      },
      borderRadius: {
        lg: '0.625rem',
        xl: '0.75rem',
        '2xl': '1rem',
        '3xl': '1.25rem',
      },
    },
  },
}
