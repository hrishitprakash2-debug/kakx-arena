/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        brand: {
          green: "#16A34A",
          dark: "#0A0A0A",
        },
      },
    },
  },
  plugins: [],
};
