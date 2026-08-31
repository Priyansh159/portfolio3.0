import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      // Every colour resolves from a CSS custom property defined in
      // index.css, so the palette lives in exactly one place.
      colors: {
        // Dark surfaces
        bg: 'rgb(var(--dark-surface) / <alpha-value>)',
        surface: 'rgb(var(--dark-card) / <alpha-value>)',
        surface2: 'rgb(var(--dark-frame) / <alpha-value>)',
        border: 'rgba(255,255,255,0.09)',
        'border-strong': 'rgba(255,255,255,0.16)',
        ink: 'rgb(var(--dark-text) / <alpha-value>)',
        soft: 'rgb(var(--dark-soft) / <alpha-value>)',
        muted: 'rgb(var(--dark-muted) / <alpha-value>)',

        // Accent
        accent: 'rgb(var(--accent) / <alpha-value>)',

        // Light (warm stone) surfaces
        paper: 'rgb(var(--light-surface) / <alpha-value>)',
        'paper-card': 'rgb(var(--light-card) / <alpha-value>)',
        'paper-ink': 'rgb(var(--light-text) / <alpha-value>)',
        'paper-soft': 'rgb(var(--light-soft) / <alpha-value>)',
        'paper-muted': 'rgb(var(--light-muted) / <alpha-value>)',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      maxWidth: {
        page: '1400px',
      },
      keyframes: {
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(16px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.5s cubic-bezier(0.16,1,0.3,1) forwards',
      },
    },
  },
  plugins: [],
}

export default config
