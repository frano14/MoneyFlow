/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        lightgreen: "#24f07d",
        green: "#20d871",
        gray: "#1a1a1a",
        lightgray: "#252525",
        textgray: "#7a7a7a",
      },
    },
  },
  plugins: [],
};
