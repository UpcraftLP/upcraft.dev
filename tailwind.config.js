const colors = require('tailwindcss/colors')

module.exports = {
    //mode: 'jit',
    purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            backgroundImage: {
                'hero-bg': "url('/hero-bg.gif')"
            },
            height: {
                'hero': "92vh"
            },
            fontFamily: {
                'gisha': ['Gisha']
            },
            zIndex: {
                '-10': '-10',
                '-20': '-20',
                '-30': '-30',
                '-40': '-40',
                '-50': '-50',
            },
        },
        //colors: colors
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
