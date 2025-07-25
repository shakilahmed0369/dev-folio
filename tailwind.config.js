/** @type {import('tailwindcss').Config} */
export default {
  content:["./*.html", "./src/**/*.{js,ts}"],
  theme: {
    extend: {
      backdropBlur: {
        xs: '2px',
      },
      backgroundColor: {
        'glass': 'rgba(255, 255, 255, 0.1)',
      },
      borderColor: {
        'glass': 'rgba(255, 255, 255, 0.2)',
      },
    },
  },
  plugins: [],
}

