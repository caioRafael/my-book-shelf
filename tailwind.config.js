/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {},
    backgroundImage: {
      app: 'url(/bg-image.svg)',
      carousel: 'linear-gradient(to bottom right, #FA7C54, #571FCF)',
    },
    colors: {
      white: '#ffffff',
      orange: '#FA7C54',
      text: '#4D4D4D',
      secondaryText: '#ABABAB',
      background: '#F3F3F7',
    },
  },
  plugins: [require('tailwind-scrollbar')],
}
