/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes:{
        'bellshake' : {
          '0%' :{ transform: 'rotate(0)'},
          '15%' :{ transform: 'rotate(5deg)' },
          '30%' :{ transform: 'rotate(-5deg)' },
          '45%' :{ transform: 'rotate(4deg)'},
          '60%' :{ transform: 'rotate(-4deg)' },
          '75%' :{ transform: 'rotate(2deg)' },
          '85%' :{ transform: 'rotate(-2deg)' },
          '92%' :{ transform: 'rotate(1deg)' },
          '100%' :{ transform: 'rotate(0)' },
        }
      } ,
      animation:{
        'shake-bell': 'bellshake .6s ease-in-out infinite',
      }
    },
    fontFamily:{'lato': 'Lato'}
  },
  plugins: [],
}