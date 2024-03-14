/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-orange': '#E19933',
        'custom-gray': '#B6BBC0',
        'gray-text': '#BDBDBD',
        'gray-dark': '#767C82',
        'background-nav': '#333333',
      }
    },
  },
  plugins: [],
}