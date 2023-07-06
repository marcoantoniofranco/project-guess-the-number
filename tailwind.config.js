/** @type {import('tailwindcss').Config} */

import tailwind from './tailwindconfig.js';

module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        clifford: '#da373d',
      },
    },
  },
  plugins: [],
};
