/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*/.{js,ts,tsx,jsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        "light": "light", 
        "black":"black"
      }
    },
  },
  plugins: [],
}

