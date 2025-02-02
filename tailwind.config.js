/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontWeight: {
        '450': '450',
        '750': '750',
        '900': '900',
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

