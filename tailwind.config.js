/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
    content: [
    "./Pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // backgroundImage: {
      //   "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      //   "gradient-conic":
      //     "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      // },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        // Define your dark mode colors here
        dark: {
          DEFAULT: '#1A202C', // Example dark background color
          100: '#2D3748',    // Example dark shades
          200: '#4A5568',
          // Add more shades as needed
        },
      },
    },
  },
  plugins: [],
};












/**
 * // tailwind.config.js

module.exports = {
  mode: 'jit', // Just-In-Time compilation for faster build times
  darkMode: 'class', // Enable dark mode based on class
  theme: {
    extend: {
      colors: {
        // Define your dark mode colors here
        dark: {
          DEFAULT: '#1A202C', // Example dark background color
          100: '#2D3748',    // Example dark shades
          200: '#4A5568',
          // Add more shades as needed
        },
      },
    },
  },
  plugins: [],
};

 */