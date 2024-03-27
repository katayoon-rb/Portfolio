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
      'grid-0': '#9b999993',
      'grid-1': '#2d6a4f',
      'grid-2': '#52b788',
      'grid-3': '#95d5b2',
      'grid-4': '#b7e4c7'
    },
    fontFamily: {
      Truculenta: ['Truculenta', 'sans-serif'],
      Wix: ['Wix Madefor Text', 'sans-serif']
    }
  },
  plugins: [],
}
