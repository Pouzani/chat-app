/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['Lato', 'sans serif'],
    },
    extend: {
      colors: {
      msgGray : '#262626',
      }
    },
  },
  plugins: [],
}