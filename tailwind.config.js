module.exports = {
  mode: 'jit',
  purge: {
    content: [
      "./src/**/*.svelte",
    ]
  },
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'sharee': '#5E5CCC',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
