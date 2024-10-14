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
      animation: {
        fadeInOut: 'fadeInOut 3s ease-in-out forwards',
      },
      keyframes: {
        fadeInOut: {
          '0%': { opacity: '1' },
          '50%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
      },
      colors: {
        'custom-blue': '#0000FF',
        'custom-orange': '#FFA500',
        'custom-blue-hover': 'rgba(0, 0, 255, 0.25)', // 25% opacity
      },
      fontFamily: {
        'times': ['Times New Roman', 'serif'], // Add Times New Roman font
      },
    },
  },
  plugins: [],
}
