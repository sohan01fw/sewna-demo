module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        lime: {
          400: "#25d39a",
          500: "#00b67f",
          600: "#00a06f",
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
