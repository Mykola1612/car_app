/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {},
    container: {
      center: true,
      padding: {
        sm: '1.25rem',
        md: '2rem',
        lg: '6.25rem',
      },
    },
  },
  plugins: [],
};
