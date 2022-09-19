/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1200px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1920px",
      // => @media (min-width: 1536px) { ... }
    },
    colors: {
      charcoal: "#404E5C",
      coral: "#4F6272",
      opal: "#A4BAB7",
      olive: "#58641D",
      sienna: "#2F0601",
      white: "#FFFFFF"
    },
    fontFamily: {
      inter: ["Inter", "ui-monospace", "SFMono-Regular"],
      bebas: ["Bebas Neue", "ui-monospace", "SFMono-Regular"]
    },
    fontSize: {
      title1: "2.5rem",
      title2: "1.5rem"
    },
    fontWeight: {
      bold: "700",
      semibold: "600",
      medium: "500",
      regular: "400",
    },
    extend: {},
  },
  plugins: [],
};
