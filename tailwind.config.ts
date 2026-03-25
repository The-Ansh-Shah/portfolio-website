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
        'bg-primary': '#FFFFFF',
        'bg-card': '#F5F5F7',
        'bg-card-hover': '#EDEDF0',
        'bg-card-alt': '#FAFAFA',
        'bg-code': '#1D1D1F',
        'text-primary': '#1D1D1F',
        'text-secondary': '#6E6E73',
        'text-muted': '#86868B',
        'text-on-dark': '#F5F5F7',
        accent: {
          DEFAULT: '#1D1D1F',
          hover: '#424245',
        },
        border: {
          DEFAULT: '#D2D2D7',
          hover: '#C4C4C9',
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
        'card': 'none',
        'card-hover': '0 4px 16px rgba(0,0,0,0.06)',
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
