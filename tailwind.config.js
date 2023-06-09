/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./assets/**/*.{html,js}"],
  theme: {
    screens: {
      xl: "1440px",
    },
    extend: {
      fontFamily: {
        "bruno-ace": ["Bruno Ace SC", "cursive"],
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".text-fill-white": {
          "-webkit-text-fill-color": "white",
        },
        ".text-stroke-1": {
          "-webkit-text-stroke-width": "1px",
        },
        ".text-stroke-black": {
          "-webkit-text-stroke-color": "black",
        },
      };
      addUtilities(newUtilities);
    },
  ],
};
