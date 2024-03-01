/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xl': '1200px', // Add custom breakpoint for 1200px
      },
    },
  },
  plugins: [],
}

