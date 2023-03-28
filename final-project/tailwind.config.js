/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {backgroundImage: {
      'pokemon-landscape': "url('/src/assets/pokemon-background.webp')",
    }},
    colors: {
      'light-blue': '#B9DAD8',
      'green': '#1B3F2A',
      'light-green': '#3C7828',
      'light-light-green': '#92D79F',
      'blue': '#52A4B1'
    }
  },
  plugins: [],
}