/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      colors: {
        kio: {
          primary: '#9a3631',
          primaryDark: '#802c28',
          primaryLight: '#fbf2f1',
          dark: '#131312',
          gray: '#818080',
          muted: '#525250',
          surface: '#f9f9fa',
          border: '#e6e6e6'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif']
      }
    }
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/container-queries')]
};
