/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'md': '768px',
        'lg': '1024px',
        // Add custom breakpoints here
      },
      colors: {
        'custom-blue': '#0000FF',
        'custom-orange': '#FFA500',
        'custom-blue-hover': 'rgba(0, 0, 255, 0.25)', // 25% opacity
      },
    },
  },
  plugins: [],
}