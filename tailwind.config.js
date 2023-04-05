/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {},
    backgroundImage: {
      app: 'url(/bg-image.svg)',
    },
    colors: {
      white: '#ffffff',
      orange: '#FA7C54',
      text: '#4D4D4D',
      secondaryText: '#ABABAB',
    },
  },
  plugins: [],
}
