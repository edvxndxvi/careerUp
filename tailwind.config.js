/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.tsx", "./src/**/*.{ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        bg: '#F8F9FB',
        card: '#FFFFFF',
        border: '#E5E6EB',
        title: '#1A1A1E',
        textSecondary: '#6E6E73',
        detail: '#A9ACB3',
        accent: '#4B3063',
        accentSecondary: '#F2C45E',
      }
    },
  },
  plugins: [],
}