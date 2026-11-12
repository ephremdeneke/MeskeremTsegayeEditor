/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        espresso: '#2B1B16',
        coffee: '#513528',
        mocha: '#795548',
        caramel: '#C28E55',
        latte: '#DCC5A1',
        cream: '#F5EBDD',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 20px 60px -20px rgba(43,27,22,0.35)',
      },
    },
  },
  plugins: [],
}