/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    fontFamily: {
      sans: ["sans-serif"],
      serif: ["Times New Roman", "serif"],
      poppins: ["Poppins"],
    },
    extend: {
      colors: {
        primary: "#c90000",
        grey: {
          DEFAULT: "#7d7c7c",
          3: "#e3e3e3",
          4: "#f1f1f1",
        },
        break: {
          1: "#323232",
          2: "#504f4f",
        },
        secondary: {
          DEFAULT: "#ffc300",
          5: "#fff6a3",
        },
        white: "#ffffff",
        black: "#000000",
      },
    },
  },
  plugins: [],
};
