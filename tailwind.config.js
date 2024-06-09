/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {},
    backgroundColor: {
      "white-2": "#F3F6FA",
      white: "#FFFFFF",
      black: "#121212",
      red: "#D72134",
      aside: "#24282B",
      aside_active: "#5E7488",
      main: "#FFFFFF",
    },
    colors: {
      black: "#111",
      "black-2": "#777",
      blue: "#035495",
      white: "#fff",
      "white-2": "#F3F6FA",
      white3: "#888",
      red: "#D72134",
      green: "#008000",
    },
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    margin: {
      4: "4px",
      8: "8px",
      12: "12px",
      24: "24px",
      32: "32px",
    },
    padding: {
      4: "4px",
      8: "8px",
      12: "12px",
      24: "24px",
      32: "32px",
    },
    backgroundImage: {
      bannner: "url('https://img.lovepik.com/element/40174/0048.png_860.png'))",
    },
    borderRadius: {
      6: "6px",
    },
  },
  plugins: [],
};
