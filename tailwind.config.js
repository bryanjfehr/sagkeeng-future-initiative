/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'forest-green': '#0A3D33',
        'earth-orange': '#D97706',
        'soft-sage': '#E2E8CE',
        'dark-navy': '#0F172A',
      },
    },
  },
  plugins: [],
}
