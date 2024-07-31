/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'main_color': '#DDC0AE',
        'black_color': '#505050',
        'brown_color':"#A1613B",
        'title':'#505050',
        'Customers':'#f8e6cb',
        'Product':'#E7E8D8',
      },
    },
  },
  plugins: [],
}
