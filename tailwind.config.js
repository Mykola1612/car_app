/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {},
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1.25rem',
        md: '2rem',
        lg: '6.25rem',
        xl: '6.50rem',
        '2xl': '7rem',
      },
    },
  },
  plugins: [],
};
