/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.tsx", "./src/**/*.{ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        bg: '#171717',
        card: '#262626',
        border: '#525252',
        title: '#F4F4F5',
        textSecondary: '#A1A1AA',
        detail: '#A9ACB3',
        accent: '#4B3063',
        accentSecondary: '#F2C45E',
      }
    },
  },
  plugins: [],
}