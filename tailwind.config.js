/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'jemak':{
          DEFAULT: '#00CCFF',
          '50': '#B8F1FF',
          '100': '#A3EDFF',
          '200': '#7AE4FF',
          '300': '#52DCFF',
          '400': '#29D4FF',
          '500': '#00CCFF',
          '600': '#009FC7',
          '700': '#00728F',
          '800': '#004557',
          '900': '#00181F'
        },
      },
      fontFamily: {
        jemak: ["Source Serif Pro", "sans-serif",]
      }
    },
  },
  plugins: [],
}

