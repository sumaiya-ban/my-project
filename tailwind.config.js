/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
      maxWidth: {
        'container': '1170px',
      },
      colors: {
        'ash': '#2D2E2E',
        'normal-ash':'#F6F6F6',
        'green':'#3A4F39'
      },
      
    },
  },
  plugins: [],
}

