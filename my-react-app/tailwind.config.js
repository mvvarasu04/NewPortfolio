/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    boxShadow: {
        card: '0 4px 6px rgba(0, 0, 0, 0.1)', // Customize as needed
      },
     colors: {
        'black-500': '#1a1a1a', // your custom shade
      },
    },
  },
  plugins: [],
}

