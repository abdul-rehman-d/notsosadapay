/** @type {import('tailwindcss').Config} */

const colors = require("./src/colors")

module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors
    },
  },
  plugins: [],
}
