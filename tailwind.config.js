/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        abyss: {
          DEFAULT: '#060B14',
          surface: '#0D1B2E',
          raised: '#13253D',
          line: '#1E3049',
        },
        bio: {
          DEFAULT: '#2DE1C2',
          dim: '#1B8F7C',
          glow: '#6FFFE9',
        },
        alert: {
          DEFAULT: '#FF6B4A',
          dim: '#B84B34',
        },
        warn: {
          DEFAULT: '#FFC857',
        },
        ink: {
          primary: '#EAF4F1',
          muted: '#7C93A3',
          faint: '#4A5D6D',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'grid-fade':
          'linear-gradient(to bottom, rgba(45,225,194,0.06) 1px, transparent 1px), linear-gradient(to right, rgba(45,225,194,0.06) 1px, transparent 1px)',
        'depth-gradient':
          'radial-gradient(ellipse at top, #0D1B2E 0%, #060B14 70%)',
      },
      backgroundSize: {
        grid: '40px 40px',
      },
      keyframes: {
        scan: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: 0.4 },
          '50%': { opacity: 1 },
        },
        rise: {
          '0%': { opacity: 0, transform: 'translateY(12px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      animation: {
        scan: 'scan 6s linear infinite',
        pulseGlow: 'pulseGlow 2.4s ease-in-out infinite',
        rise: 'rise 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
    },
  },
  plugins: [],
};
