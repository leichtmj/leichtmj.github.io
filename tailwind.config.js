/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      colors: {
        light : {
          cloudColor: '#E6D2B7'
        }
      }


    },
  },
  plugins: [require("daisyui")],
}