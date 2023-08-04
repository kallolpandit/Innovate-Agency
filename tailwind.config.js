/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: "#FF5538",
        primary: "#29313D",
        secondary: "#4d4b4d",
      },
      backgroundImage: {
        banner: "url('/images/banner.png')",
        works: "url('/images/works-bg.png')",
        counting: "url('/images/counting-bg.png')",
        project: "url('/images/project-bg.png')",
      },
    },
    container: {
      center: true,
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      nunito: ["Nunito", "sans-serif"],
    },
  },
  plugins: [],
};
