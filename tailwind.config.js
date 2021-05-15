module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    screens: {
      sm: { max: '480px' },
      md: { max: '1024px' },
    },
    extend: {
      maxWidth: {
        xl: '62.5rem',
      },
      spacing: {
        5: '1.313rem',
        15: '3.75rem',
        98: '24.5rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
  corePlugins: {
    fontFamily: false,
  },
};
