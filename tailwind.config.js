module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: (theme) => ({
      ...theme("colors"),
      primary: "hsl(185, 41%, 84%)",
      secondary: "#ffed4a",
      danger: "#e3342f",
    }),
    colors: {
      cyan: "hsl(172, 67%, 45%)",
      darkcyan: "hsl(183, 100%, 15%)",
      Darkgrayishcyan: "hsl(186, 14%, 43%)",
      DarkGrayishcyan: "hsl(184, 14%, 56%)",
      Lightgrayishcyan: "hsl(185, 41%, 84%)",
      LightGrayishcyan: "hsl(189, 41%, 97%)",
      White: "hsl(0, 0%, 100%)",
      transparent: "transparent",
      red:"#F87171",
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
