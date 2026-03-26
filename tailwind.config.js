/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-deep': '#0a0a12',
        'bg-card': '#12121f',
        'primary-gold': '#c9a227',
        'secondary-mystic': '#7b2d8e',
        'accent-music': '#00d4aa'
      },
      fontFamily: {
        heading: ['"Playfair Display"', 'serif'],
        body: ['Nunito', 'sans-serif'],
        accent: ['"Cormorant Garamond"', 'serif']
      }
    },
  },
  plugins: [],
}
