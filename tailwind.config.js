/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': 'rgba(58, 89, 117, 1)',
        'secondary': 'rgb(120, 153, 153)',
      },
      boxShadow: {
        'paper-shadow': '0px 2px 1px -1px rgb(0 0 0 / 20%),0px 1px 1px 0px rgb(0 0 0 / 14%),0px 1px 3px 0px rgb(0 0 0 / 12%)',
      }
    },
  },
  plugins: [],
}