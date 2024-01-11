module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        black: { 900: "#000000" },
        red: { 400: "#d25e5e" },
        gray: { 200: "#eeeeee" },
        white: { A700: "#ffffff" },
      },
      fontFamily: { roboto: "Roboto" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
