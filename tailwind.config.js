/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          DEFAULT: "#24252A",
          secondary: "#34363F",
        },
        light: {
          DEFAULT: "#F6F6F6",
          secondary: "#ECECEC",
    }
  }
}
  },
  darkMode: ['class'],
  plugins: [require("daisyui")],
}
