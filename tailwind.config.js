/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#001f3f',
          light: '#003366',
          dark: '#001529',
        },
        gold: {
          DEFAULT: '#FFD700',
          light: '#FFE55C',
          dark: '#B8950C',
        },
      },
    },
  },
  plugins: [],
}
