/* eslint-disable no-undef */
// tailwind.config.js
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust this path to match where your files are
  ],
  theme: {
    extend: {
       fontFamily: {
      sans: ['Poppins', 'sans-serif'],
    },},
  },
  plugins: [],
});
