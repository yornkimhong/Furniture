export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1300px",
      xxl: "1440px",
    },
    extend: {
      colors: {
        primary: "#8E9D74",
        secondary: "#F5FBDF",
        black: "#000000",
        white: "#FFFFFF",
        gray: "#F2F2F2",
      },
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
        serif: ["Montserrat", "serif"],
      },
      // fontWeight: {
      //   semibold: 600,
      //   bold: 700,
      // },
    },
  },
  plugins: [],
};
