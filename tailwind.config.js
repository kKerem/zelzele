/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./**/*.{html,js}"],
  theme: {
    container: {
      screens: {
          'sm': '100%',
          'md': '100%',
          'lg': '800px',
          'xl': '800px',
          '2xl': '800px',
      }
    },
    extend: {},
  },
  plugins: [],
}