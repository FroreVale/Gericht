/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customGolden: '#DCCA87',
        customBlack: '#0C0C0C',
        customGray: '#545454',
        customCrimson: '#F5EFDB',
        customGrey: '#AAAAAA',
        customWhite: '#FFFFFF',
      },
      fontFamily: {
        customBase: ['Cormorant Upright', 'serif'],
        customAlt: ['Open Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

