/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        brand: {
          light: '#7f9cf5',
          DEFAULT: '#3f51b5',
          dark: '#1c3a73',
        }
      }
    },
  },
  plugins: [],
}

