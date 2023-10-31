/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      theme: {
        colors: {
          dark: '#202124',
          darkSecond: '#0F172A',
          darkhird: '#2D2E31',
          primary: '#f43f5e'

        },
      },
    },
  },
  plugins: [],
}

