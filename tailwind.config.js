/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.{html,js}"],
  theme: {
    colors: {
      peach: "#EEA47F",
      textcolor: "#eeeee4",
      backgroundlight: "#88b4db48",
    },
    extend: {
      fontFamily: {
        primary: ["Inter"],
      },
    },
  },
  plugins: [],
};
