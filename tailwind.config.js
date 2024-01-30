/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
      './pages/**/*.{ts,tsx}',
      './components/**/*.{ts,tsx}',
      './app/**/*.{ts,tsx}',
      './sections/**/*.{ts,tsx}',
  
    ],
    prefix: "",
    theme: {
      container: {
        center: true,
        padding: "2rem",
        screens: {
          "2xl": "1400px",
        },
      },
      extend: {
        colors: {
          primary: "#FF6363",
          secondary: '#017BFF',
          bg_secondary: '#F8F9FA',
          bg_primary: '#FFFFFF',
          textColor : '#8492A6'
        },
        backgroundImage: {
          'bg-hero': 'url("/assets/images/HeroBg.png")'
          
        },
      },
    },
    plugins: [require("tailwindcss-animate")],
  }

