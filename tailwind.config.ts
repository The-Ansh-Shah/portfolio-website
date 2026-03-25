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
        'bg-code': '#2C2C2A',
        'bg-code-border': '#3A3A38',
        'text-primary': '#1D1D1F',
        'text-secondary': '#6E6E73',
        'text-muted': '#86868B',
        'text-code': '#8A8A8E',
        'text-code-kw': '#B0B0B4',
        'text-code-cm': '#6E6E73',
        'text-on-dark': '#F5F5F7',
        'spotify-green': '#1DB954',
        'berkeley-blue': '#003262',
        'berkeley-gold': '#FDB515',
        accent: {
          DEFAULT: '#1D1D1F',
          hover: '#424245',
        },
        border: {
          DEFAULT: '#EAEAEC',
          hover: '#D2D2D7',
        },
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'JetBrains Mono', 'monospace'],
      },
      fontSize: {
        'hero': ['clamp(56px, 5vw, 72px)', { lineHeight: '1.05', letterSpacing: '-0.04em', fontWeight: '700' }],
        'section': ['clamp(30px, 3.5vw, 40px)', { lineHeight: '1.15', letterSpacing: '-0.02em', fontWeight: '600' }],
        'card-title': ['18px', { lineHeight: '1.4', fontWeight: '600' }],
        'body': ['16px', { lineHeight: '1.65', fontWeight: '400' }],
        'caption': ['14px', { lineHeight: '1.45', fontWeight: '400' }],
        'label': ['11px', { lineHeight: '1.3', fontWeight: '500', letterSpacing: '0.08em' }],
      },
      maxWidth: {
        'content': '1200px',
        'content-wide': '1200px',
      },
      spacing: {
        'bento': '14px',
        'section': '72px',
      },
      borderRadius: {
        'bento': '20px',
        'card': '18px',
        'button': '9999px',
        'image': '18px',
        'btn-sm': '8px',
        'sm-el': '10px',
        'code': '16px',
      },
      boxShadow: {
        'card': 'none',
        'card-hover': '0 4px 16px rgba(0,0,0,0.06)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'marquee': 'marquee 22s linear infinite',
        'marquee-reverse': 'marquee-reverse 22s linear infinite',
        'eq1': 'eq 0.8s ease-in-out infinite alternate',
        'eq2': 'eq 0.6s ease-in-out infinite alternate-reverse',
        'eq3': 'eq 0.9s ease-in-out infinite alternate',
        'eq4': 'eq 0.5s ease-in-out infinite alternate-reverse',
        'hobby-scroll': 'hobbyScroll 10s ease-in-out infinite',
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
        eq: {
          '0%': { height: '3px' },
          '100%': { height: '14px' },
        },
        hobbyScroll: {
          '0%, 20%': { transform: 'translateY(0)' },
          '25%, 45%': { transform: 'translateY(-25%)' },
          '50%, 70%': { transform: 'translateY(-50%)' },
          '75%, 95%': { transform: 'translateY(-75%)' },
          '100%': { transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};

export default config;
