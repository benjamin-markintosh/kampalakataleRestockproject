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
      screens: {
        xs: "480px", // Mobile (up to 480px)
        sm: "768px", // Mobile Landscape (481px - 767px)
        md: "1024px", // Tablet (768px - 1023px)
        lg: "1280px", // Desktop (1024px - 1279px)
        xl: "1440px", // Large Desktop (1280px and above)
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
