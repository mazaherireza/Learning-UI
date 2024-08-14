/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      sans: ["sans-serif"],
      serif: ["Times New Roman", "serif"],
      inter: ["Inter"]
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "",
          100: "",
          200: "",
          300: "",
          400: "#7f00ff",
          500: "",
          600: "",
          700: "",
          800: "",
          900: "",
        },
      },
    },
  },
  plugins: [],
};
