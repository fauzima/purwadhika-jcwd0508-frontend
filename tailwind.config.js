/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        bganimation: "bganimation .2s infinite",
        rotate:
          "rotate 50s cubic-bezier(0.8, 0.2, 0.2, 0.8) alternate infinite",
      },
      keyframes: {
        bganimation: {
          "0%": { transform: "translate(0,0)" },
          "10%": { transform: "translate(-5%,-5%)" },
          "20%": { transform: "translate(-10%,5%)" },
          "30%": { transform: "translate(5%,-10%)" },
          "40%": { transform: "translate(-5%,15%)" },
          "50%": { transform: "translate(-10%,5%)" },
          "60%": { transform: "translate(15%,0)" },
          "70%": { transform: "translate(0,10%)" },
          "80%": { transform: "translate(-15%,0)" },
          "90%": { transform: "translate(10%,5%)" },
          "100%": { transform: "translate(5%,0)" },
        },
        rotate: {
          "0%": {
            transform: "rotate(0deg)",
          },
          "100%": {
            transform: "rotate(360deg)",
          },
        },
      },
      backgroundImage: {
        gradient: "linear-gradient(#00FFFF, #ff00ff, #ffff00)",
      },
    },
  },
  plugins: [],
};
