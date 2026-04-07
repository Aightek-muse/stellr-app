/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        bg: '#08090F',
        surface1: '#0F1020',
        surface2: '#161830',
        border: '#1E2040',
        gold: '#f2c35b',
        goldDim: '#a88f3a',
        lavender: '#8B7CF8',
        lavenderDim: '#4A4580',
        textPrimary: '#F0EDF8',
        textSecondary: '#9B98BC',
        textMuted: '#5A5878',
      },
      fontFamily: {
        display: ['Cormorant'],
        body: ['Montserrat'],
      },
      spacing: {
        'safe-top': '52px',
        'safe-bottom': '34px',
      },
    },
  },
  plugins: [],
};
