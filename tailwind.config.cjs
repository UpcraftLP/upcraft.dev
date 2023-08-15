/** @type {import('tailwindcss').Config}*/
const config = {
  content: ["./src/**/*.{html,js,svelte,ts}", "./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {
      fontFamily: {
        'gisha': ['Gisha']
      }
    },
  },

  plugins: [require('flowbite/plugin')],
};

module.exports = config;
