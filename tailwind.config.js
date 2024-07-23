/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        darkBlack: "#303030",
        lightBlack: "#3d3d3d",
        lightWhite: "#f6f6f6",
      },
      boxShadow: {
        darkShadow:
          "0 2px 4px 0 rgba(136, 144, 195, 0.2), 0 5px 15px 0 rgba(37, 44, 97, 0.15)",
        lighShadow: "0px 1px 20px rgba(0, 0, 0, 0.07)",
      },
      screens: {
        md: "501px",
        lg: "901px",
        xl: "1201px",
      },
    },
  },
  plugins: [],
}
