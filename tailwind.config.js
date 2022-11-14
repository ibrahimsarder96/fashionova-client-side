/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        fashionovatheme: {
          // primary: "#EB5525",
          // secondary: "#FF8DC7",
          // accent: "#FF8DC7",
        },
      },
      
    ],
  },
  plugins: [require("daisyui")],
}
