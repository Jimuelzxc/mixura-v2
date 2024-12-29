/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        white: "EDEDE9",
        dark: "1A1A1A"
      }
    },
  },
  plugins: [],
}