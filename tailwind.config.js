/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        auto: "repeat(auto-fill,minmax(180px,1fr))",
      },
      keyframes: {
        loading: {
          "0%": { "background-position": "-800px 0px" },
          "100%": { "background-position": "800px 0px" },
        },
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
    },
    animation: {
      loading: " loading 3s infinite linear",
      fadeIn: "fadeIn 1.5s",
    },
  },
  plugins: [],
};
