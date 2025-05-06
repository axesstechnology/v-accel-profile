/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#1B4B59',
          50: '#E6EEF0',
          100: '#CCDDE1',
          200: '#99BBC3',
          300: '#6699A5',
          400: '#337787',
          500: '#1B4B59',
          600: '#163F4B',
          700: '#11333D',
          800: '#0C272F',
          900: '#071B21',
        },
        accent: {
          DEFAULT: '#C68B4E',
          light: '#D4A06C',
          dark: '#B87630',
        },
        brand: {
          red: '#8B2515'
        }
      },
      animation: {
        'bounce-slow': 'bounce 2s infinite',
      },
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
  },
  plugins: [],
};