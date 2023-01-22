/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{svelte,ts,js}'],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        newTheme: {
          "primary": "#e1f99d",
          "secondary": "#3c9b99",
          "accent": "#ed62f7",
          "neutral": "#1D2335",
          "base-100": "#253046",
          "info": "#7383D4",
          "success": "#116931",
          "warning": "#F1A85B",
          "error": "#E2366A",
        },
      }
    ],
  },
  plugins: [require('daisyui')],
}
