/* eslint-disable @typescript-eslint/no-var-requires */

const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    extend: {},
    fontFamily: {
      main: ['Open Sans', 'sans-serif'],
    },
    colors: {
      purple: '#5331D5',
      darkPurple: '#150940',
      lightPurple: '#5C547A',
      lightGray: '#F7F7F8',
      white: colors.white,
      black: colors.black,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
