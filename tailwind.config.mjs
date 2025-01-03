/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // orange: "rgb(255, 65, 10)",
        orange: "#ff6e41",
        peach: "#fff6f2",
        light: "rgb(255 206 160)",
        heavy: "rgb(25 26 21)",
      },
    },
  },
  plugins: [],
};
