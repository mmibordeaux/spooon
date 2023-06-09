/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {},
    colors: {
      'darkBlue': '#1B73C2',
      'lightBlue': '#7ACDE5',
      'white': '#FFF',
      'gray': '#ECECEC',
      'gray2': '#DEDEDE',
      'gray700': '#585858',
      'yellow': '#E5DA7A',
      'pink': '#FF7070',
      'orange': '#FFB800',
    },
    fontFamily: {
      'custom': ['abeezee', 'inter', 'sans-serif'],
      'sans': ['inter', 'sans-serif'],
    }
  },
  plugins: [],
}

