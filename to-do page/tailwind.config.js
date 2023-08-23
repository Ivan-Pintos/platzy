export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        rotate: {
          "0%": {
            transform: "rotate(0deg)",
          },
          "100%": {
            transform: "rotate(228deg)",
            fontSize: " 2rem",
          },
        },
      },
      animation: {
        rotateIcon: "rotate 0.5s linear forwards",
      },
    },
  },
  plugins: [],
};
