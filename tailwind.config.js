/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      fontFamily: {
        'Poppins': ['Poppins', 'sans-serif'],
      },
      colors: {
        'body': '#0D0D11',
        'button': '#3D96F4',
        'button-hollow': '#81818B',
      },
      animation: {
        marquee: 'marquee 45s linear infinite',
        marquee2: 'marquee2 45s linear infinite'
      },
      keyframes: {
        marquee: {
        '0%': {transform: 'translateX(0%)'},
        '100%': {transform: 'translateX(-100%)'}
          },
        marquee2: {
        '0%': { transform: 'translateX(100%)'},
        '100%': { transform: 'translateX(0%)'}
          },
      }
    },
  },
  plugins: [],
}
