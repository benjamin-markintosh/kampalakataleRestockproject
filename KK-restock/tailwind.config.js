/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        kkyellowgold: "#f7d454",
        kkyellow: "#F7D655",
        kkwhite: "#faf0e6",
        kkorange: "#FF7A00",
        kkblack: "#000",
      },
    },
  },
  plugins: [],
};
