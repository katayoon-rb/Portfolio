/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'dark': '#00120B',
      'light': '#EFEFEF',
      'green': '#35605A',
      'gray-dark': '#6B818C',
      'gray-light': '#D8E4FF',
      'neon': '#31E981',
      'cream': '#DCC9B6',
      'white': '#FFFFFF',
      'grid-0': '#939090',
      'grid-1': '#245501',
      'grid-2': '#538d22',
      'grid-3': '#73a942',
      'grid-4': '#aad576'
    },
    fontFamily: {
      Truculenta: ['Truculenta', 'sans-serif'],
      Wix: ['Wix Madefor Text', 'sans-serif']
    }
  },
  plugins: [],
}
