/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        amarelo01: '#ffbf31',
        amarelo02: '#efa903',
        azul01: '#006ec7',
        azul02: '#0033ab',
        azul03: '#00247d',
        preto: '#101010',
        branco: '#fdfdfd',
      }
    },
  },
  plugins: [],
}
