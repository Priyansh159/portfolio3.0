import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#020408',
        surface: '#0a0f18',
        surface2: '#0f1722',
        green: {
          DEFAULT: '#00ff87',
          dim: 'rgba(0,255,135,0.13)',
          dark: '#00cc6a',
        },
        border: '#1a3a2a',
        muted: '#6b8a7a',
      },
      fontFamily: {
        head: ['Outfit', 'sans-serif'],
        mono: ['"Space Mono"', 'monospace'],
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
        'float': 'float 4s ease-in-out infinite',
        'fade-up': 'fadeUp 0.6s ease forwards',
        'slide-right': 'slideRight 0.6s ease forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        slideRight: {
          from: { opacity: '0', transform: 'translateX(-24px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
