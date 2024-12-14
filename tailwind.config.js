/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        dark: {
          DEFAULT: '#0F0B1E',
          lighter: '#1A1527',
          accent: '#2A2438'
        },
        primary: {
          DEFAULT: '#7C3AED',
          light: '#8B5CF6',
          dark: '#6D28D9'
        },
        accent: {
          blue: '#3B82F6',
          purple: '#8B5CF6'
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-pattern': `
          linear-gradient(180deg, rgba(15, 11, 30, 0.9) 0%, rgba(15, 11, 30, 0.95) 100%),
          radial-gradient(1px 1px at 20% 30%, rgba(255, 255, 255, 0.05) 0px, transparent 8px),
          radial-gradient(1px 1px at 40% 70%, rgba(255, 255, 255, 0.07) 0px, transparent 8px),
          radial-gradient(1px 1px at 60% 20%, rgba(255, 255, 255, 0.03) 0px, transparent 8px),
          radial-gradient(1px 1px at 80% 50%, rgba(255, 255, 255, 0.06) 0px, transparent 8px)
        `
      },
      fontFamily: {
        'display': ['Playfair Display', 'serif'],
        'body': ['Inter', 'sans-serif']
      }
    },
  },
  plugins: [],
};
