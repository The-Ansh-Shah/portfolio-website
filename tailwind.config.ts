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
        'bg-primary': '#FBFBFD',
        'bg-secondary': '#F5F5F7',
        'bg-dark': '#1D1D1F',
        'text-primary': '#1D1D1F',
        'text-secondary': '#6E6E73',
        'text-tertiary': '#86868B',
        accent: {
          DEFAULT: '#0071E3',
          hover: '#0077ED',
        },
        border: '#D2D2D7',
        glass: 'rgba(255,255,255,0.72)',
      },
      fontFamily: {
        sans: [
          '"SF Pro Display"',
          '"SF Pro Text"',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'sans-serif',
        ],
      },
      fontSize: {
        'hero': ['clamp(56px, 5vw, 80px)', { lineHeight: '1.05', letterSpacing: '-0.03em', fontWeight: '600' }],
        'h2': ['clamp(40px, 3.5vw, 48px)', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '600' }],
        'h3': ['clamp(24px, 2vw, 28px)', { lineHeight: '1.2', fontWeight: '600' }],
        'body': ['17px', { lineHeight: '1.47', fontWeight: '400' }],
        'caption': ['14px', { lineHeight: '1.43', fontWeight: '400' }],
        'subline': ['21px', { lineHeight: '1.38', fontWeight: '400' }],
      },
      spacing: {
        '18': '4.5rem',
        '30': '7.5rem',
      },
      maxWidth: {
        'content': '980px',
        'paragraph': '680px',
      },
      borderRadius: {
        'card': '20px',
        'button': '9999px',
        'image': '16px',
        'btn-sm': '12px',
      },
      boxShadow: {
        'sm': '0 2px 8px rgba(0,0,0,0.04)',
        'md': '0 4px 24px rgba(0,0,0,0.08)',
        'lg': '0 8px 40px rgba(0,0,0,0.12)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};

export default config;
