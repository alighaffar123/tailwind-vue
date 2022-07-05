/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        "olive": '#4c4743',
        "white": "#ffffff",
        "Dark-Gray": '#acaba7',
        "primary": "#fe5e3a",
        "Black-Olive": "#433e3a",
        "Vivid": "#fe9601",
        "Bright-Gray": "#eeeff1",
        "Flash-White": "#F1F1F1",
        "light-Gray": "#D2D5D5",
        "Davy-Grey": "#656766",
        "Crayola": "#a3a0a0",
        "Dark-Lemon": "#76c80e",
        "Light-Sea": "#1fbba6",
        "Dim-Gray": "#6b6b6b",
        "Lotion": "#f9f9f9",
        "maya-blue": "#6dcff6",
        "dark-silver": "#756f6f",
        "quick-silver": "#9f9f9f"
      },
      fontFamily: {
        sans: [
          'Open Sans'
        ]
      },
      screens:{
        'sidebar': '1170px',
        '2xl': '900px',
        'xl': '750px' ,
        'lg': '605px',
        'table': '583px',
        'md': '491px',
        'sm': '395px',
        
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
  
}
