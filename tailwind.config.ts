import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'bg-primary': '#0a0a0a',
        'bg-card': '#141414',
        'bg-card-hover': '#1a1a1a',
        'bg-card-alt': '#0f0f0f',
        'bg-accent-subtle': 'rgba(0,113,227,0.06)',
        'text-primary': '#F5F5F7',
        'text-secondary': '#A1A1A6',
        'text-muted': '#6E6E73',
        accent: {
          DEFAULT: '#0071E3',
          hover: '#0077ED',
          warm: '#FF6B35',
        },
        border: {
          DEFAULT: '#2a2a2a',
          hover: '#3a3a3a',
        },
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'JetBrains Mono', 'monospace'],
      },
      fontSize: {
        'hero': ['clamp(56px, 5vw, 72px)', { lineHeight: '1.05', letterSpacing: '-0.04em', fontWeight: '700' }],
        'section': ['clamp(36px, 3.5vw, 44px)', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '600' }],
        'card-title': ['clamp(22px, 2vw, 28px)', { lineHeight: '1.2', fontWeight: '600' }],
        'body': ['17px', { lineHeight: '1.6', fontWeight: '400' }],
        'caption': ['14px', { lineHeight: '1.43', fontWeight: '400' }],
        'label': ['13px', { lineHeight: '1.3', fontWeight: '500', letterSpacing: '0.1em' }],
      },
      maxWidth: {
        'content': '1200px',
      },
      spacing: {
        'bento': '16px',
        'section': '100px',
      },
      borderRadius: {
        'bento': '24px',
        'card': '20px',
        'button': '9999px',
        'image': '20px',
        'btn-sm': '12px',
        'sm-el': '10px',
      },
      boxShadow: {
        'card': '0 1px 3px rgba(0,0,0,0.3), 0 0 0 1px #2a2a2a',
        'card-hover': '0 8px 32px rgba(0,0,0,0.4), 0 0 0 1px #3a3a3a',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'marquee': 'marquee 30s linear infinite',
        'marquee-reverse': 'marquee-reverse 30s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};

export default config;
