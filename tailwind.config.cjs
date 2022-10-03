/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: { app_color: "#0A192F", text_custom: "#CCD6F6" },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
