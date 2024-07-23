/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'custom' : '760px',
      },
      boxShadow: {
        'white': '0 4px 6px rgba(255, 255, 255, 0.5)',
      }
    },
  },
  plugins: [],
}

