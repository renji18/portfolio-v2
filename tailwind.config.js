/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        "bounce-slow": "bounce-slow 1.2s ease-out infinite",
      },
      keyframes: {
        "bounce-slow": {
          "0%, 100%": {
            transform: "translateY(-12%)",
            "animation-timing-function": "cubic-bezier(0.8, 0, 1, 1)",
          },
          "50%": {
            transform: "translateY(0)",
            "animation-timing-function": "cubic-bezier(0, 0, 0.2, 1)",
          },
        },
      },
      fontFamily: {
        bitter: ["Bitter", "serif"],
        sriracha: ["Sriracha", "cursive"],
        poppins: ["Poppins", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        blueish: "hsla(206, 84%, 86%, 1)",
        whitish: "hsla(36, 31%, 90%, 1)",
        beigeish: "hsla(22, 62%, 76%, 1)",
        lightGreenish: "hsla(171,15%,35%,1)",
        darkGreenish: "#025a4e",
      },
    },
  },
  plugins: [],
}
