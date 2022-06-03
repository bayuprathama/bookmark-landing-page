module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}', './public/index.html'],
  theme: {
    fontFamily: {
      rubik: 'Rubik, Arial, sans-serif',
    },

    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'soft-blue': 'hsl(231, 69%, 60%)',
        'soft-red': ' hsl(0, 94%, 66%)',
        'grayish-blue': 'hsl(229, 8%, 60%)',
        'very-dark-blue': ' hsl(229, 31%, 21%)',
        white: '#fff',
      },
    },
  },
  plugins: [],
};
