/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,ts}'],
  theme: {
    colors:{
      'White': 'hsl(0, 0%, 100%)',
      'Grey': 'hsl(0, 0%, 20%)',
      'DarkGrey': 'hsl(0, 0%, 12%)',
      'OffBlack': 'hsl(0, 0%, 8%)',
      'Green': 'hsl(75, 94%, 57%)'
    },
    extend: {},
  },
  plugins: [require('daisyui')],
}

