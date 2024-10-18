/** @type {import('tailwindcss').Config}*/
const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {
      fontFamily: {
        'gisha': ['Gisha']
      }
    },
  },

  plugins: [],
};

module.exports = config;
