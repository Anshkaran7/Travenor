/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "theme-blue":"#0D6EFD",
        "theme-dark":"#1B1E28",
        "theme-light":"#7D848D",
        "theme-green":"#19B000",
        "theme-light-blue":"#CAEAFF"
      }
    },
  },
  plugins: [],
}

