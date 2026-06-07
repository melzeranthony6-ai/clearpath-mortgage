/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#eef2f9',
          100: '#d5dfef',
          200: '#abc0df',
          300: '#7a9acb',
          400: '#4f76b6',
          500: '#2d559a',
          600: '#1a3f7f',
          700: '#132e62',
          800: '#0d2049',
          900: '#081532',
        },
        gold: {
          300: '#f5d98a',
          400: '#efc34c',
          500: '#e0a800',
          600: '#b88700',
          700: '#8f6800',
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        body: ['"DM Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
