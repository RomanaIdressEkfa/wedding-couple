/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: [
      {
        light: {
          "primary": "#0F1729",
          "secondary": "#828DF8",
          "accent": "#701150",
          "neutral": "#FFFFFF",
          "base-100": "#161231",
          "info": "#19223C",
          "success": "#2BD4BD",
          "warning": "#F4C152",
          "error": "#DE7D8C",
        },

      },
      {
        dark: {

          "primary": "#2BD4BD",

          "secondary": "#F4C152",

          "accent": "#868e96",

          "neutral": "#0F1729",

          "base-100": "#111827",

          "info": "#0CA6E9",

          "success": "#2BD4BD",

          "warning": "#F4C152",

          "error": "#DE7D8C",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}