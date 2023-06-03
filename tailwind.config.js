module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode:'class',
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 1.5s linear 1',
                }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
